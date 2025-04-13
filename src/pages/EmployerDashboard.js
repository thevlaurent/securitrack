
import React from "react";

export default function EmployerDashboard({ user }) {
  const exportPDF = () => {
    const doc = new window.jspdf.jsPDF();
    doc.text("Export PDF des mains courantes (démo)", 10, 10);
    doc.save("export_mains_courantes.pdf");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Bienvenue {user.name}</h2>
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={exportPDF}>Exporter les mains courantes</button>
    </div>
  );
}
