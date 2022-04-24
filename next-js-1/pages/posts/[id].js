import PostScreen from "../../src/screens/PostScreen";
import dados from "../../dados.json";

/* 
## Static Site Generation mode
```next build && next export```

export async function getStaticPaths(context) {
  console.log("getStaticPaths: context ", context);
  
  const paths = dados.posts.map((item) => ({ params: { id: item.id } }));
  
  return {
    paths,
    fallback: true, // se false, caso 404 sera tratado pelo next, se true nós devemos tratar, para isso a route.isFallback pode ser util
  };
}
*/

/* 
## Incremental Static Generation
```next build && next export```
*/

export async function getStaticPaths(context) {
  return {
    paths: [],
    fallback: "blocking", // se false, caso 404 sera tratado pelo next, se true nós devemos tratar, para isso a route.isFallback pode ser util
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  console.log("#### GEROU ####", id);

  const post = await fetch(
    `https://fakeapi-omariosouto.vercel.app/api/posts/${id}`
  ).then((res) => res.json());

  return {
    props: {
      postId: post?.id,
      title: post?.title,
      date: post?.date,
      content: post?.content,
    },
    revalidate: 10, // irá revalidar a API a cada 10 segundos para ver se chegou algo novo, assim nao fará por requisição
    // é bom para paginas que fazem MUUUitas requisições, como a pagina de reultado da megasena, pois
    // como nao hou alteração do back, a pagina sempre mostra o cache e so faz uma nova chamada 
    // detro do revalidate
  };
}

export default PostScreen;
