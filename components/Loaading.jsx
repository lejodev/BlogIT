import React from "react";

import { Container } from "react-bootstrap";

const Loaading = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
      style={{ backgroundColor: "#add8e6" }}
    >
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h1 className="mt-3">LOADING</h1>
        <p className="lead">
          Waiting for server to get the blogs. This can take up to 50 seconds.
        </p>
      </div>
    </Container>
  );
};

export default Loaading;
