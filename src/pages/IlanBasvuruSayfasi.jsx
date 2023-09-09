import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  ListItem,
  Text,
  Textarea,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from 'react-router-dom'

const IlanBasvuruSayfasi = () => {
  const [jobDetails, setJobDetails] = useState(null);

  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const params = useParams();
  // console.log(params);

  useEffect(() => {
    async function getIlanData() {
      const response = await fetch(
        `http://localhost:8080/v1/job/${params.isIlani}`,
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

  if (!jobDetails) {
    return null;
  }

  async function handleClick() {
    const response = await fetch(
      `http://localhost:8080/v1/job/${params.isIlani}`, //degiscek
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("tokenKey"),
        },
        body: JSON.stringify({
          firstName: firstName,
          email: email,
          phone: phone,
          coverLetter: coverLetter,
        }),
      }
    );
    const body = await response.json();
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

        <Flex gap={7} mb={20} mt={20}>
          <Text fontWeight={"bold"}>Basic Info</Text>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              onChange={(e) => setFirstname(e.target.value)}
              value={firstName}
              placeholder="First name"
            />
            <FormLabel mt={7}>Email </FormLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <FormLabel mt={7}>Phone</FormLabel>
            <Input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone"
            />
          </FormControl>
        </Flex>

        <Box width={"full"} bg={"gray"} height="1px" my={4}></Box>

        <Flex>
          <Text fontWeight={"bold"}>Cover Letter</Text>
          <Textarea
            onChange={(e) => setCoverLetter(e.target.value)}
            value={coverLetter}
            h={"200px"}
            borderColor={"gray.700"}
            focusBorderColor="black"
            placeholder="Here is a sample placeholder"
          />
        </Flex>
      </Container>

      <Container maxW={"200px"} mt={"10"} mb={"10"}>
        <Button
          onClick={handleClick}
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
      </Container>

      {/* <Container maxW={"980px"} mt={"10"} mb={"12"}>
        <IsIlanlariSayfasi />
      </Container> */}
    </>
  );
};

export default IlanBasvuruSayfasi;
