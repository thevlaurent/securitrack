
import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username === "agent") {
      onLogin({ role: "agent", name: "Agent Démo" });
    } else if (username === "employeur") {
      onLogin({ role: "employeur", name: "Employeur Démo" });
    } else {
      alert("Identifiant inconnu");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Connexion Securitrack</h1>
      <input className="border p-2 w-full mb-2" placeholder="Identifiant" onChange={e => setUsername(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleLogin}>Se connecter</button>
    </div>
  );
}
