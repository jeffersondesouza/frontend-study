import BlogScreen from "../../src/screens/BlogScreen";

export async function getStaticProps() {
  const data = await fetch(
    `https://fakeapi-omariosouto.vercel.app/api/posts`
  ).then((res) => res.json());

  return {
    props: {
      posts: data.posts,
    },
  };
}

export default BlogScreen;
