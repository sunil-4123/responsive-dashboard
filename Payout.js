import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPayoutRate } from "../redux/slice";

const Payout = () => {
  const articles = useSelector((state) => state.dashboard.articles);
  const payoutRate = useSelector((state) => state.dashboard.payoutRate);
  const dispatch = useDispatch();

  const totalPayout = articles.length * payoutRate;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Payout Calculator</h2>
      <p>Total Articles: {articles.length}</p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Payout Rate ($):</label>
        <input
          type="number"
          value={payoutRate}
          onChange={(e) => dispatch(setPayoutRate(Number(e.target.value)))}
          className="border p-2 rounded w-full"
        />
      </div>
      <p className="text-lg font-semibold">Total Payout: ${totalPayout}</p>
    </div>
  );
};

export default Payout;
