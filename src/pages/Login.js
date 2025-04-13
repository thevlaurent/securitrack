
import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "agent") {
      onLogin({ role: "agent", name: "Agent Demo" });
    } else if (username === "employeur") {
      onLogin({ role: "employeur", name: "Employeur Demo" });
    } else {
      alert("Identifiant inconnu.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Connexion Securitrack</h1>
      <input className="border p-2 w-full mb-2" placeholder="Identifiant" onChange={e => setUsername(e.target.value)} />
      <input type="password" className="border p-2 w-full mb-4" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleLogin}>Se connecter</button>
    </div>
  );
}
