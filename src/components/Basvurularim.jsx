import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdayIlan from "./Basvuru";
import { useParams } from "react-router-dom";

const Basvurularim = () => {
  const [positionData, setPositionData] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function getPositionData() {
      const response = await fetch(
        `http://localhost:8080/v1/api/application/emir`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("tokenKey"),
          },
        }
      );
      const body = await response.json();
      setPositionData(body);
      console.log(body);
    }
    getPositionData();
  }, [params]);



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

        {positionData.map((position) => (
          <AdayIlan
            position={position.position}
            workType={position.workType}
            location={position.location}
            dateOfApplication="20"
            status="Rejected"
          />
        ))}

        {/* <AdayIlan position="Frontend Developer" workType="Internship" location="Turkey" dateOfApplication="20" status="Processing"/>
        <AdayIlan position="Frontend Developer" workType="Internship" location="Turkey" dateOfApplication="20" status="Accepted"/> */}
      </Container>
    </>
  );
};

export default Basvurularim;
