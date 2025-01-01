import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const Charts = () => {
  const articles = useSelector((state) => state.dashboard.articles);

  const authors = articles.reduce((acc, article) => {
    const author = article.author || "Unknown";
    acc[author] = (acc[author] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(authors),
    datasets: [
      {
        label: "Articles per Author",
        data: Object.values(authors),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Analytics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Charts;
