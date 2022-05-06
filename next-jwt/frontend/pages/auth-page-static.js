export default function AuthPageStatic(props) {
  return (
    <div>
      <h1>Auth page Static</h1>
      <div>
        <button>logout</button>
      </div>
      <div>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </div>
  );
}
