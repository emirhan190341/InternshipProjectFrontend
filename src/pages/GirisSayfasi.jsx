import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const GirisSayfasi = () => {
  return (
    <>

      <Flex w={"full"} justifyContent={"center"} mt={"10"}>
        <Image
          src="public\photo2.jpg"
          alt="Photo"
          w={"5xl"}
          h={"lg"}
          objectFit={"cover"}
        />
        <Image
          src="public\photo1.jpeg"
          alt="Photo"
          w={"5xl"}
          h={"lg"}
          objectFit={"cover"}
        />
      </Flex>
    </>
  );
};

export default GirisSayfasi;
