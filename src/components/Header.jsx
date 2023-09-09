import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = localStorage.getItem("tokenKey");
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("tokenKey");
    localStorage.removeItem("email");
    navigate("/giris")

  }


  return (
    <>
      <Container
        maxW={"1200px"}
        boxShadow={"3.328125px 1.109375px 24.40625px -7.765625px"}
        mt={"8"}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              src="/obss.webp"
              alt="Photo"
              width={"100px"}
              objectFit={"cover"}
            />
          </Box>

          <Box>
            <Flex alignItems={"center"} gap={"3"} fontSize={"xl"}>
              <Flex gap={"3"}>
                <Link href={"/"} display={"inline-block"}>
                  <Flex>
                    <Text fontFamily={"sans-serif"}>Home</Text>
                  </Flex>
                </Link>
                <Link href={"/is-ilanlari"} display={"inline-block"}>
                  <Flex>
                    <Text fontFamily={"sans-serif"}>Career</Text>
                  </Flex>
                </Link>
              </Flex>

              <Flex>
                <Flex gap={"3"}>
                  <Link href={"/iletisim"} display={"inline-block"}>
                    <Flex>
                      <Text fontFamily={"sans-serif"}>Contact Us</Text>
                    </Flex>
                  </Link>

                  {!user && (
                    <Link href={"/giris"} display={"inline-block"}>
                      <Flex>
                        <Text fontFamily={"sans-serif"}>Login</Text>
                      </Flex>
                    </Link>
                  )}
                </Flex>
              </Flex>

              {!user && (
                <Flex>
                  <Link href={"/kaydol"} display={"inline-block"}>
                    <Text fontFamily={"sans-serif"}>Sign Up</Text>
                  </Link>
                </Flex>
              )}

              {user && (
                <Flex>
                    <Button onClick={handleLogOut}   bg={"white"} fontFamily={"sans-serif"}>Log Out</Button>
                </Flex>
              )}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Header;
