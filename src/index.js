import { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style.css";

// You don't have to use `fetch` btw, use whatever you want
const getCounters = () =>
  fetch("/api/v1/counter", { method: "get" }).then((res) => res.json());

// const App = () => {
//   useEffect(() => {
//     getCounters().then(console.log, console.error);
//   }, []);

//   return <h1>Hello, Cornershop!</h1>;
// };

ReactDOM.render(<App />, document.getElementById("root"));
