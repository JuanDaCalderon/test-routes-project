import {lazy} from "react";
import "./App.css";
import {Route, Routes} from "react-router";

const Login = lazy(() => import("./components/login"));

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
