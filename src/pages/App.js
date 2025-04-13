
import React, { useState } from "react";
import Login from "./Login";
import AgentDashboard from "./AgentDashboard";
import EmployerDashboard from "./EmployerDashboard";

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;
  if (user.role === "agent") return <AgentDashboard user={user} />;
  if (user.role === "employeur") return <EmployerDashboard user={user} />;
}
