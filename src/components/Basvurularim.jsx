import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AdayIlan from "./Basvuru";

const Basvurularim = () => {
  return (
    <>
      <Container maxW={"1000px"}>
        <Text
          fontSize="2xl"
          color="black"
          my="4"
          textAlign="center"
          fontWeight="bold"
        >
          Applied Positions
        </Text>
        <AdayIlan position="Frontend Developer" workType="Internship" location="Turkey" dateOfApplication="20" status="Rejected"/>
        <AdayIlan position="Frontend Developer" workType="Internship" location="Turkey" dateOfApplication="20" status="Processing"/>
        <AdayIlan position="Frontend Developer" workType="Internship" location="Turkey" dateOfApplication="20" status="Accepted"/>
      </Container>
    </>
  );
};

export default Basvurularim;
