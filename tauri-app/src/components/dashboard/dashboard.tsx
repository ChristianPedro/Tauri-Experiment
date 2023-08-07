import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

import React from "react";

export default function Dashboard() {
//   const [greetMsg, setGreetMsg] = useState("");
//   const [name, setName] = useState("");

//   async function greet() {
//     // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//     setGreetMsg(await invoke("greet", { name }));
//   }

  return (
    <h1>Hello from the dashboard</h1>
  );
}

