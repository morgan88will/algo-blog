import React from "react";
import { Link } from "react-router-dom";

export const Arrays = () => {
  return (
    <div>
      <h2>Array algorithm problems</h2>
      {/* <Link to="/stack/nextLargest">Next Largest</Link> */}
      <Link to="/array/maxSumSubarray">
        Max sum subarray (Kadane's algorithm)
      </Link>
    </div>
  );
};
