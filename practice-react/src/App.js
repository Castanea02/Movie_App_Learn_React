import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("All");

  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run when counter changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when counter & keyword changes.");
  }, [keyword, counter]);

  return (
    <div align="center">
      <input
        type="text"
        placeholder="Search Here"
        onChange={onChange}
        value={keyword}></input>

      <h1 className={styles.title}>Practice React</h1>
      <h2>{counter}</h2>
      <button className={styles.btn} onClick={onClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
