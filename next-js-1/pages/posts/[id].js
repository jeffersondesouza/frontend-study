import { useRouter } from "next/router";
import Nav from "../../src/components/patterns/Nav";

export default function Post() {
  const route = useRouter();
  console.log(route.query.id);
  return (
    <div>
      <Nav />
      <h2>Post page</h2>
      <div>post body</div>
    </div>
  );
}
