import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost; // Removed unnecessary assignment
  }, 0);

  const remaining = budget - totalExpenses; // Calculate remaining here

  const alertType = remaining < 0 ? "alert-danger" : "alert-success";

  // Use `alert()` function for negative remaining
  if (remaining < 0) {
    alert("You cannot reduce the budget value lower than the spending");
  }

  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currency}
        {remaining}
      </span>
    </div>
  );
};

export default Remaining;
