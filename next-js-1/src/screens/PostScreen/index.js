import NextLink from "next/link";
import { useRouter } from "next/router";
import Nav from "../../components/patterns/Nav";

export default function PostByIdScreen(props) {
  const router = useRouter();
  const post = {
    title: props?.title,
    date: props?.date,
    content: props?.content,
  };

  if (router.isFallback) {
    return "Essa página não existe!";
  }

  return (
    <div
      style={{
        flexDirection: "column",
        margin: "32px auto",
        maxWidth: "700px",
        paddingHorizontal: "16px",
      }}
    >
      <Nav />
      <h2
        style={{
          color: "#F9703E",
          justifyContent: "center",
          lineHeight: "1.2",
        }}
      >
        {post?.title}
      </h2>
      <p
        style={{
          color: "#F9703E",
          justifyContent: "center",
          borderBottom: "1px solid #F9703E",
          paddingVertical: "16px",
          marginVertical: "16px",
        }}
      >
        {post?.date}
      </p>

      {/* Área de Conteudo */}
      <div
        style={{
          flexDirection: "column",
        }}
      >
        <p>{post?.content}</p>

        {post?.video && (
          <iframe
            style={{ marginTop: "32px", minHeight: "400px" }}
            src={post?.video}
          />
        )}
      </div>

      {/* Rodapé */}
      <footer
        style={{
          marginTop: "16px",
          paddingVertical: "16px",
          borderTop: "1px solid #F9703E",
          color: "#F9703E",
        }}
      >
        <NextLink href="/posts" passHref>
          <a style={{ hover: { textDecoration: "underline" } }}>
            Voltar para a home
          </a>
        </NextLink>
      </footer>
    </div>
  );
}
