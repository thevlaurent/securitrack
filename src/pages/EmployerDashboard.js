
import React, { useState } from "react";

export default function EmployerDashboard({ user }) {
  const [agents, setAgents] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const addAgent = () => {
    const nom = prompt("Nom de l'agent :");
    const prenom = prompt("Prénom :");
    const carte = prompt("Numéro de carte pro :");
    const chien = prompt("Infos chien :");
    const newAgent = { nom, prenom, carte, chien };
    const updated = [...agents, newAgent];
    setAgents(updated);
    localStorage.setItem("agents", JSON.stringify(updated));
  };

  const exportPDF = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Export PDF des mains courantes du " + selectedDate, 10, 10);
    const events = JSON.parse(localStorage.getItem("agent_events") || "[]");
    const filtered = events.filter(e => e.date.includes(selectedDate));
    filtered.forEach((e, i) => doc.text(`${i+1}. [${e.date}] ${e.category} - ${e.description}`, 10, 20 + i * 10));
    doc.save("export_mains_courantes.pdf");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Bonjour {user.name}</h2>
      <button onClick={addAgent} className="bg-green-600 text-white px-4 py-2 rounded mr-2">Créer un agent</button>
      <input type="date" onChange={e => setSelectedDate(e.target.value)} className="border px-2 py-1 mr-2"/>
      <button onClick={exportPDF} className="bg-blue-600 text-white px-4 py-2 rounded">Exporter PDF du jour</button>
    </div>
  );
}
