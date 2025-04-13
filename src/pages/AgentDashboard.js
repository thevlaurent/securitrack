
import React from "react";

export default function AgentDashboard({ user }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Bienvenue {user.name}</h2>
      <p>Interface agent – saisie des mains courantes à venir.</p>
    </div>
  );
}
