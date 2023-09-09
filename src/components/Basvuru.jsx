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
import { Link } from "react-router-dom";

const Basvuru = ({
  position,
  workType,
  location,
  dateOfApplication,
  status,
}) => {
  const buttonBg =
    status === "Rejected"
      ? "red"
      : status === "Processing"
      ? "yellow.600"
      : "green";
  const buttonBgHover =
    status === "Rejected"
      ? "red.900"
      : status === "Processing"
      ? "yellow.900"
      : "green.900";
  return (
    <>
      <Card mt={"10"}>
        <CardBody>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Flex gap={1}>
                <Text fontWeight="bold">Position:</Text>
                <Text>{position}</Text>
              </Flex>

              <Flex gap={1}>
                <Flex gap={1}>
                  <Text fontWeight="bold">Work Type: </Text>
                  <Text>{workType}</Text>
                </Flex>

                <Flex gap={1}>
                  <Text fontWeight="bold">Location: </Text>
                  <Text>{location}</Text>
                </Flex>
              </Flex>

              <Flex gap={1}>
                <Text fontWeight="bold">Date of Application: </Text>
                <Text>{dateOfApplication}</Text>
              </Flex>
            </Box>

            <Box>
              <Text textAlign={"center"} fontWeight={"bold"} color={"black"}>
                Status
              </Text>
              <Link to="/is-ilanlari/frontend">
                <Button color="white" bg={buttonBg} _hover={{ bg:buttonBgHover }}>
                  {status}
                </Button>
              </Link>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default Basvuru;
