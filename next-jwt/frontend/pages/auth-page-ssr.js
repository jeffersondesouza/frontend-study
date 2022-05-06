export default function AuthPageSSR(props) {
  return (
    <div>
      <h1>Auth page Server Side Renderer</h1>
      <div>
        <button>logout</button>
      </div>
      <div>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </div>
  );
}
