import {useState, Suspense} from "react";
import "../App.css";

const loading = () => <div className="text-center"></div>;

function Login() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={loading()}>
      <h1>LOGIN</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </Suspense>
  );
}

export default Login;
