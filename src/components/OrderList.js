import React from "react";
import { Link } from "react-router-dom";

export default function OrderList({ index, orderNumber }) {
  return (
    <tr style={{ textAlign: "center" }}>
      <td>{index}</td>
      <td>{orderNumber}</td>
      <td>
        <Link
          to={`/trackingView/${orderNumber}`}
          style={{ textDecoration: "none", fontSize: "16px", color: "white" }}
        >
          Click For Update
        </Link>
      </td>
    </tr>
  );
}
