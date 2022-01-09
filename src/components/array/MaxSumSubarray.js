import React from "react";
import test from "../../imgs/test.PNG";
import image from "../../imgs/max-sum-subarray.PNG";
import { Container } from "react-bootstrap";

export const MaxSumSubarray = () => {
  return (
    <Container>
      <h4> Max Sum Subarray </h4>
      <h6>Problem description </h6>

      <p> Given an array of integers return the max sum subarray </p>

      <h4>Code</h4>

      <img src={image} className="mt-2 mb-4" alt="code" />

      <h4>Explanation</h4>

      <p className="mt-2">
        This algorithm achieves O(n) complexity. This is kadane's algorithm.{" "}
      </p>
    </Container>
  );
};
