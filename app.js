
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1 class='text-2xl font-bold mb-4'>Bienvenue sur Securitrack</h1>
    <p>Application de suivi des mains courantes (démo simplifiée).</p>
    <button class='mt-4 px-4 py-2 bg-blue-600 text-white rounded' onclick='exportPDF()'>Exporter un PDF</button>
  `;
});

function exportPDF() {
  const doc = new jsPDF();
  doc.text("Mains courantes - Exemple export PDF", 10, 10);
  doc.save("mains-courantes.pdf");
}
