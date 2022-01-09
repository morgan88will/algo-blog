import React from "react";
import { NextLargest } from "./stack/NextLargest";
import { Link } from "react-router-dom";

export const Stacks = () => {
  return (
    <div>
      <h2>Stack algorithm problems</h2>
      <Link to="/stack/nextLargest">Next Largest</Link>
    </div>
  );
};
