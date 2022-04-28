import HomeScreen from "../src/screens/HomeScreen";

export async function getServerSideProps() {
  const mock = await fetch("http://localhost:3000/api").then((res) =>
    res.json()
  );
  return {
    props: { mock },
  };
}

export default HomeScreen;
