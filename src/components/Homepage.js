import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Conway from "./Conway";

export const Homepage = () => {
  return (
    <Container>
      <Link to="/array">
        <div>Array problems</div>
      </Link>
      <Link to="/stack">
        <div>Stack problems</div>
      </Link>
      <Conway />
    </Container>
  );
};
