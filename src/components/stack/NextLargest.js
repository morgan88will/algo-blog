import React from "react";
import test from "../../imgs/test.PNG";
import { Container } from "react-bootstrap";

export const NextLargest = () => {
  return (
    <Container>
      <h4> Next Largest Element </h4>
      <h6>Problem description </h6>

      <p>
        {" "}
        Given an array a composed of distinct elements, find the next larger
        element for each element of the array, i.e. the first element to the
        right that is greater than this element, in the order in which they
        appear in the array, and return the results as a new array of the same
        length. If an element does not have a larger element to its right, put
        -1 in the appropriate cell of the result array.{" "}
      </p>

      <h4>Code</h4>

      <img src={test} className="mt-2 mb-4" alt="code" />

      <h4>Explanation</h4>

      <p className="mt-2">
        This algorithm achieves O(n) complexity. Of course the brute force
        method is O(n^2).{" "}
      </p>
    </Container>
  );
};
