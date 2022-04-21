import PostScreen from "../../src/screens/PostScreen";
import dados from "../../dados.json";

export async function getStaticPaths(context) {
  console.log("getStaticPaths: context ", context);

  const paths = dados.posts.map((item) => ({ params: { id: item.id } }));

  return {
    paths,
    fallback: true, // se false, caso 404 sera tratado pelo next, se true nós devemos tratar, para isso a route.isFallback pode ser util
  };
}

export async function getStaticProps(context) {
  console.log("getStaticProps: context ", context);

  const id = context.params.id;

  const post = dados.posts.find((currentPost) => {
    if (currentPost.id === id) {
      return true;
    }
    return false;
  });

  return {
    props: {
      postId: post?.id,
      title: post?.title,
      date: post?.date,
      content: post?.content,
    },
  };
}

export default PostScreen;
