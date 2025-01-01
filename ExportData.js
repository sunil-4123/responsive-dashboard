import React from "react";
import jsPDF from "jspdf";
import Papa from "papaparse";
import { useSelector } from "react-redux";

const ExportData = () => {
  const articles = useSelector((state) => state.dashboard.articles);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Exported Articles", 10, 10);
    articles.forEach((article, index) => {
      doc.text(`${index + 1}. ${article.title}`, 10, 20 + index * 10);
    });
    doc.save("articles.pdf");
  };

  const exportCSV = () => {
    const csv = Papa.unparse(
      articles.map((article) => ({
        Title: article.title,
        Author: article.author || "Unknown",
        PublishedAt: article.publishedAt,
      }))
    );
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "articles.csv";
    a.click();
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Export Data</h2>
      <button onClick={exportPDF} className="bg-green-500 text-white px-4 py-2 rounded mr-4">
        Export to PDF
      </button>
      <button onClick={exportCSV} className="bg-blue-500 text-white px-4 py-2 rounded">
        Export to CSV
      </button>
    </div>
  );
};

export default ExportData;
