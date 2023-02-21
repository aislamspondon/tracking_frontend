import React from "react";
import { v4 as uuidv4 } from "uuid";
import SingleRow from "./SingleRow";

export default function Result({ trackingAPI }) {
  return (
    <div>
      {trackingAPI?.map((tracking) => (
        <SingleRow key={uuidv4()} tracking={tracking} />
      ))}
    </div>
  );
}
