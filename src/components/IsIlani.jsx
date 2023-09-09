import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const IsIlan = ({ ilan, sonElement }) => {
  const user = localStorage.getItem("tokenKey");

  return (
    <>
      <Card>
        <CardBody>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Flex gap={1}>
                <Text fontWeight="bold">Position:</Text>
                <Text>{ilan.position}</Text>
              </Flex>

              <Flex gap={1}>
                <Flex gap={1}>
                  <Text fontWeight="bold">Work Type: </Text>
                  <Text>{ilan.workType}</Text>
                </Flex>

                <Flex gap={1}>
                  <Text fontWeight="bold">Location: </Text>
                  <Text>{ilan.location}</Text>
                </Flex>
              </Flex>
            </Box>

            {/* {ilan.requirements.map ( (requirement) => (
              <Text>{requirement}</Text>
            ))} */}

            {user && (
              <Link to={`/is-ilanlari/${ilan.position}`}>
                <Button color="white" bg="tomato" _hover={{ bg: "red.600" }}>
                  Apply
                </Button>
              </Link>
            )}

            {!user && (
              <Link to={"/giris"}>
                <Button color="white" bg="tomato" _hover={{ bg: "red.600" }}>
                  Login
                </Button>
              </Link>
            )}
          </Flex>
        </CardBody>
      </Card>
      {!sonElement && (
        <Box width={"full"} bg={"gray"} height="1px" my={4}></Box>
      )}
    </>
  );
};

export default IsIlan;
