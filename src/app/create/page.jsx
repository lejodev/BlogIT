import React from "react";
import Form from "./Form";
import { useSession } from "next-auth/react";
const page = async () => {
  // const { data: session } = useSession();
  return (
    <div>
      <Form />
    </div>
  );
};

export default page;
