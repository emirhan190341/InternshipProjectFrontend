import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import IsIlanlariSayfasi from "./IsIlanlariSayfasi";
import { useParams } from "react-router-dom";

const BasvuruSayfasi = () => {
  const [jobDetails, setJobDetails] = useState(null);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    async function getIlanData() {
      const encodedIsIlani = encodeURIComponent(params.isIlani);
      const response = await fetch(
        `http://localhost:8080/v1/job/${encodedIsIlani}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("tokenKey"),
          },
        }
      );
      const body = await response.json();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setJobDetails(body);
    }
    getIlanData();
  }, [params]);

  // if (getIlanData == null) {
  //   return <p>Loading...</p>;
  // }

  if (!jobDetails) {
    return null;
  }

  return (
    <>
      <Card>
        <CardBody bg={"#0f303e"} w={"full"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"full"}
          >
            <Box w={"full"}>
              <Text
                fontWeight="bold"
                color={"white"}
                fontSize={"5xl"}
                textAlign="center"
                w={"full"}
              >
                {jobDetails.position}
              </Text>

              <Text
                color={"white"}
                fontSize={"2xl"}
                textAlign="center"
                mt={"1"}
              >
                Posted on {jobDetails.activationTime}
              </Text>
              <Text color={"white"} fontSize={"xl"} textAlign="center" mt={"1"}>
                {jobDetails.workType} (Turkey)
              </Text>

              <Flex gap={"4"} justifyContent={"center"} mt={"5"}>
                <Button>Refer a friend</Button>
                <Button bg={"#fdd762"}>I'm interested</Button>
              </Flex>
            </Box>
          </Flex>
        </CardBody>
      </Card>

      <Container maxW={"1200px"} mt={"10"}>
        <Link href={"/is-ilanlari"} display={"inline-block"}>
          <Flex>
            <ChevronLeftIcon fontSize={"2xl"} />
            <Text fontWeight={"bold"}>Back to job applications list</Text>
          </Flex>
        </Link>

        <Box w={"full"}>
          <Text
            fontWeight={"bold"}
            ml={"4"}
            fontSize={"4xl"}
            color={"#000000d9"}
          >
            About OBSS
          </Text>

          <Box maxW={"xl"}>
            <Text mt={"7"} textAlign={"justify"} ml={"4"} fontSize={"lg"}>
              We build distributed data ingestion, processing, storage,
              reporting and warehousing systems that scale to many petabytes. We
              have built Machine Learning systems that serve real-time
              predictions to millions of customers.
            </Text>
          </Box>
        </Box>

        <Box w={"full"} mt={"12"}>
          <Text
            fontWeight={"bold"}
            ml={"4"}
            fontSize={"4xl"}
            color={"#000000d9"}
          >
            Job Description
          </Text>

          <Box maxW={"xl"}>
            <Text mt={"7"} textAlign={"justify"} ml={"4"} fontSize={"lg"}>
              {jobDetails.jobDescription}
            </Text>
          </Box>
        </Box>

        <Box w={"full"} mt={"12"}>
          <Text
            fontWeight={"bold"}
            ml={"4"}
            fontSize={"4xl"}
            color={"#000000d9"}
          >
            Job Requirements
            <Text fontSize={"xl"} mt={"5"} color={"black"}>
              What You Will Do
            </Text>
          </Text>

          <Box maxW={"xl"} mt={"2"}>
            <UnorderedList spacing={"7"} fontSize={"lg"}>
              {jobDetails.todo.map((todo) => (
                <ListItem>{todo}</ListItem>
              ))}

              <ListItem>
                Produce user-flows, wireframes, and mockups in Figma.
              </ListItem>
              <ListItem>
                Work closely with product owners to understand and research use
                cases, user needs and product requirements.
              </ListItem>
              <ListItem>
                Prototype and perform user research and usability tests for new
                ideas and designs.
              </ListItem>
            </UnorderedList>
          </Box>

          <Text fontSize={"xl"} mt={"5"} color={"black"} fontWeight={"bold"}>
            Job Requirements
          </Text>

          <Box maxW={"xl"} mt={"2"}>
            <UnorderedList spacing={"7"} fontSize={"lg"}>
              {jobDetails.requirements.map((requirement) => (
                <ListItem>{requirement}</ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Container maxW={"200px"} mt={"10"} mb={"10"}>
            <Link href={`/is-ilanlari/${jobDetails.position}/basvur`}>
              <Button
                color="white"
                bg="tomato"
                _hover={{ bg: "red.600" }}
                size={"md"}
                height={"48px"}
                width={"250px"}
                border={"2px"}
              >
                Apply
              </Button>
            </Link>
          </Container>
        </Box>
      </Container>

      <Container maxW={"980px"} mt={"10"} mb={"12"}>
        <IsIlanlariSayfasi />
      </Container>
    </>
  );
};

export default BasvuruSayfasi;
