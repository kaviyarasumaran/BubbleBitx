import React, { useEffect, useState } from "react";
import { Box, Heading, Flex, Text, Button, Image, Link } from "@chakra-ui/react";
import images from "../../assets/images/images";
import { Icon, info, search } from "../../assets/icons/icons";

const MenuItems = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
        {children}
    </Text>
);

const Header = (props) => {
    const [show, setShow] = React.useState(false);
    const [scrollNav, setScrollNav] = useState(false);

    const handleToggle = () => setShow(!show);

    const changeNav = () => {
        if (window.scrollY >= 60) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => window.removeEventListener('scroll', changeNav);
    }, []);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            position="sticky"
            top="0"
            w="100%"
            zIndex="1000"
            color={scrollNav ? "black" : "white"} // Text color change
            bg={scrollNav ? "white" : "#012540"} // Background color change
            boxShadow={scrollNav ? "md" : "none"} // Box shadow on scroll
            transition="0.3s ease-in-out"
            {...props}
        >
            <Flex align="center" mr={50} justify="center">
                <Image src={images.Logo} alt="" />
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <svg
                    fill={scrollNav ? "black" : "white"} // Icon color change
                    width="12px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </Box>

            <Box
                display={{ base: show ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                justify={{ base: "center", md: "center" }}
                flexDirection={{ base: "column", md: "row" }}
                gap={7}

            >
                <Box><Link fontFamily="formCompTexts" fontSize="xs">Home</Link></Box>
                <Box><Link fontFamily="formCompTexts" fontSize="xs">About us </Link></Box>
                <Box><Link fontFamily="formCompTexts" fontSize="xs">Services </Link></Box>
                <Box><Link fontFamily="formCompTexts" fontSize="xs">Contact us</Link></Box>
                <Box><Link fontFamily="formCompTexts" fontSize="xs">Our partners</Link></Box>
            </Box>

            <Box display={{ base: show ? "block" : "none", md: "block" }} mt={{ base: 4, md: 0 }} >
                <Box display="flex" flexDir="row" gap={10}>
                    <Icon icon={search} style={{ height: 24, width: 24 }} />
                    <Icon icon={info} style={{ height: 24, width: 24 }} />
                </Box>
            </Box>
        </Flex>
    );
};

export default Header;
