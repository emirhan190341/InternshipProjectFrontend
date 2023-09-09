import { Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const IlanEKleme = () => {
  return (
    <>
      <Container mt={"10"}>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
      </Container>
    </>
  );
};

export default IlanEKleme;
