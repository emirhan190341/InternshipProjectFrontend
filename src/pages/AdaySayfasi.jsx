import {
  AbsoluteCenter,
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Basvurularim from "../components/Basvurularim";

const AdaySayfasi = () => {
  return (
    <>
      <Container mt={"5"} maxW={"750px"}>
        <Flex justifyContent={"center"} gap={"20"} w={"full"}>
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            size={"2xl"}
          />
          <Box mt={"5"}>
            <Text fontWeight={"bold"}>Emirhan ARICI</Text>
            <Text mt={"3"}>Frontend Developer</Text>
          </Box>
        </Flex>

        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4" fontWeight={"bold"}>
            Information
          </AbsoluteCenter>
        </Box>

        <Box fontSize={"lg"} ml={"5"}>
          <Flex gap={"1"} mb={"2"}>
            <Text fontWeight={"bold"}>Fullname:</Text>
            <Text>Emirhan Arici</Text>
          </Flex>
          <Flex gap={"1"} mb={"2"}>
            <Text fontWeight={"bold"}>Location:</Text>
            <Text>Turkey</Text>
          </Flex>
          <Flex gap={"1"} mb={"2"}>
            <Text fontWeight={"bold"}>Company:</Text>
            <Text>Turkey</Text>
          </Flex>
          <Flex gap={"1"} mb={"2"}>
            <Text fontWeight={"bold"}>Location:</Text>
            <Text>Turkey</Text>
          </Flex>
          <Flex gap={"1"}>
            <Text fontWeight={"bold"}>Email:</Text>
            <Text>deneme@gmail.com</Text>
          </Flex>
        </Box>

        <Container maxW={"1000px"} mt={"10"}>
          <Basvurularim />
        </Container>

      </Container>
    </>
  );
};

export default AdaySayfasi;
