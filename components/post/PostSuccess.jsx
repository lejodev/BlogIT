import React from "react";
import { Container, Alert, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

const PostSuccess = () => {
  return (
    <Alert variant="sucess">
      Post successfully created
      <Button href="/">Go to Main page</Button>
    </Alert>
  );
};

export default PostSuccess;
