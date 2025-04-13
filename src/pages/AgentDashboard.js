
import React, { useState } from "react";

export default function AgentDashboard({ user }) {
  const [events, setEvents] = useState([]);

  const addEvent = () => {
    const now = new Date().toLocaleString();
    const description = prompt("Décris l'événement :");
    const category = prompt("Catégorie (Ronde, Incident, Contrôle, Autre) :");
    const newEvent = { date: now, description, category };
    const updated = [...events, newEvent];
    setEvents(updated);
    localStorage.setItem("agent_events", JSON.stringify(updated));
  };

  const departRonde = () => {
    const now = new Date().toLocaleString();
    alert("Départ de ronde enregistré : " + now);
  };

  const retourRonde = () => {
    const now = new Date().toLocaleString();
    const annotation = prompt("Événement survenu durant la ronde ?");
    if (annotation) addEvent();
    alert("Retour de ronde enregistré : " + now);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Bonjour {user.name}</h2>
      <button onClick={departRonde} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Départ ronde</button>
      <button onClick={retourRonde} className="bg-yellow-700 text-white px-4 py-2 rounded">Retour ronde</button>
      <hr className="my-4"/>
      <button onClick={addEvent} className="bg-blue-600 text-white px-4 py-2 rounded">Ajouter un événement</button>
    </div>
  );
}
