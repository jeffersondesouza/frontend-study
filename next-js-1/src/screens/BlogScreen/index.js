import NextLink from "next/link";
import dados from "../../../dados.json";

export default function HomeScreen() {
  const infos = {
    nome: "Jefferson de Souza",
    githubUser: "jeffersondesouza",
  };
  const posts = dados.posts;

  return (
    <div
      style={{
        flexDirection: "column",
        margin: "32px auto",
        maxWidth: "800px",
        paddingHorizontal: "16px",
      }}
    >
      <img
        src={`https://github.com/${infos.githubUser}.png`}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          margin: "0 auto",
          border: "2px solid #F9703E",
        }}
      />
      <h2 style={{ color: "#F9703E", justifyContent: "center" }}>
        {infos.nome}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          marginTop: "16px",
          gridGap: "16px",
        }}
      >
        {posts.map(({ title, content, id }) => (
          <Post key={id} id={id} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

function Post({ title, content, id }) {
  return (
    <div
      style={{
        flexDirection: "column",
        border: "1px solid #F9703E",
        padding: "16px",
        boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
        transition: ".3s",
        borderRadius: "4px",
        hover: {
          boxShadow: "1px 1px 5px 5px rgba(255,69,0,0.2)",
        },
      }}
    >
      <NextLink href={`posts/${id}`} passHref>
        <a
          style={{
            display: " block",
            color: "#F9703E",
            marginBottom: "8px",
          }}
        >
          {title}
        </a>
      </NextLink>
      <p>{content.substring(0, 140)}...</p>
    </div>
  );
}
