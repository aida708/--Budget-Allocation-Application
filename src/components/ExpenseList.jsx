import React, { useContext } from "react";
import Item from "./Item";
// import ExpenseItem from "./ExpenseITEM.JSX";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col">Increase by 10</th>
          <th scope="col">Decrease by 10</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <Item
            id={expense.id}
            key={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
