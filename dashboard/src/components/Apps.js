import React from "react";
import "./Apps.css";

function Apps() {
  const apps = [
    {
      name: "Kite",
      desc: "Fast and elegant trading platform.",
      icon: "📈",
    },
    {
      name: "Console",
      desc: "Portfolio reports and analytics.",
      icon: "📊",
    },
    {
      name: "Coin",
      desc: "Direct mutual fund investments.",
      icon: "🪙",
    },
    {
      name: "Varsity",
      desc: "Learn stock market for free.",
      icon: "📚",
    },
    {
      name: "Pulse",
      desc: "Latest financial news.",
      icon: "📰",
    },
    {
      name: "Sensibull",
      desc: "Options trading platform.",
      icon: "⚡",
    },
  ];

  return (
    <div className="apps-container">
      <h1>Our Apps</h1>
      <p>Explore the Zerodha ecosystem.</p>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="icon">{app.icon}</div>
            <h3>{app.name}</h3>
            <p>{app.desc}</p>
            <button>Open</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apps;