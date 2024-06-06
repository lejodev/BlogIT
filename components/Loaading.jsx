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
        <p className="d-flex flex-column lead">
          <span>
            Waiting for server to get the blogs. This can take up to 50 seconds.
          </span>
          <span> Its a free Tier. You kow how it is! </span>
        </p>
      </div>
    </Container>
  );
};

export default Loaading;
