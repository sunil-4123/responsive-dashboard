import React, { useState } from "react";
import Navbar from "./Navbar";
import News from "./News";
import Payout from "./Payout";
import ExportData from "./ExportData";
import Charts from "./Charts";

const Dashboard = () => {
  const [view, setView] = useState("news");

  return (
    <div>
      <Navbar setView={setView} />
      <div className="p-4">
        {view === "news" && <News />}
        {view === "payout" && <Payout />}
        {view === "export" && <ExportData />}
        {view === "charts" && <Charts />}
      </div>
    </div>
  );
};

export default Dashboard;
