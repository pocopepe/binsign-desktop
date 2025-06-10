import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {

  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [nones, setNones]= useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  async function nothing(){
    setNones(await invoke<string>("lets"));
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

        
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
          nothing();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
      <p>{nones}</p>
    </main>
  );
}

export default App;
