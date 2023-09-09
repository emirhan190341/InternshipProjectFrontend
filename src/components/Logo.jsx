import { Box, Flex, Image, chakra } from "@chakra-ui/react";

export const Logo = (props) => (
  <Flex justifyContent={"center"}>
    <Image src="/obss.webp" alt="Photo" width={"100px"} objectFit={"cover"} />
  </Flex>
);
