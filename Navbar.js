import React from "react";

const Navbar = ({ setView }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <button onClick={() => setView("news")} className="hover:underline">
        News
      </button>
      <button onClick={() => setView("payout")} className="hover:underline">
        Payout
      </button>
      <button onClick={() => setView("export")} className="hover:underline">
        Export
      </button>
      <button onClick={() => setView("charts")} className="hover:underline">
        Charts
      </button>
    </nav>
  );
};

export default Navbar;
