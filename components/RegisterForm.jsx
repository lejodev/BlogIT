import React from "react";

const RegisterForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a new post</h1>
      <input
        type="text"
        name=""
        id="title"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </form>
  );
};

export default RegisterForm;
