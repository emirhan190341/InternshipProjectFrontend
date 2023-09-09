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
import IsIlan from "./IsIlani";

const IsIlanlari = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("http://localhost:8080/v1/job");
  const tokenKey = localStorage.getItem("tokenKey");

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const body = await response.json();
      setData(body);
      console.log(body)
    }
    getData();
  }, [url]);

  if (data == null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Text
        fontSize="2xl"
        color="black"
        my="4"
        textAlign="center"
        fontWeight="bold"
      >
        Open Positions
      </Text>

        {data.map ((ilan) => (
           <IsIlan
           key = {ilan.code}
           ilan = {ilan}
         />

         /*
         {data.map((ilan) => (
        <IsIlan
          key={ilan.code}
         ilan = {ilan}
        />
         */
        ))}

     
    </>
  );
};

export default IsIlanlari;
