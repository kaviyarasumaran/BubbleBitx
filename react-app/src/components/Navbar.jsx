// src/components/Navbar.jsx
import { Box, Flex, HStack, Link, IconButton, useDisclosure, Spacer, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon, InfoIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import bg from '../assets/bg.svg';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollNav, setScrollNav] = useState(false);

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
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      w="100%"
      bg={scrollNav || isOpen ? "white" : "transparent"}
      boxShadow={scrollNav ? "md" : "none"}
      transition="0.3s ease-in-out"
    >
      <Flex h={scrollNav? 16 : 0}  alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto" px={4}>
        <Box mt={scrollNav? 0 : 20} width="130px">
          <img src={bg} alt="Logo" width="130px" />
        </Box>
        <HStack spacing={8} alignItems="center" paddingLeft="300px">
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            mx="auto"
            mt={scrollNav? 0 : 20}
          >
            <Link href="#home" color={scrollNav ? "black" : "white"}>Home</Link>
            <Link href="#about" color={scrollNav ? "black" : "white"}>About us</Link>
            <Link href="#services" color={scrollNav ? "black" : "white"}>Services</Link>
            <Link href="#contact" color={scrollNav ? "black" : "white"}>Contact us</Link>
            <Link href="#partners" color={scrollNav ? "black" : "white"}>Our partners</Link>
          </HStack>
        </HStack>
        <Spacer />
        <HStack mt={scrollNav? 0 : 20}>
          <IconButton icon={<SearchIcon />} aria-label="Search" variant="ghost" color={scrollNav ? "black" : "white"} />
          <IconButton icon={<InfoIcon />} aria-label="Info" variant="ghost" color={scrollNav ? "black" : "white"} />
        </HStack>
        <Box mt={scrollNav? 0 : 20} >
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          color={scrollNav ? "black" : "white"}
        />
        </Box>
      </Flex>
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }} >
          <Stack as="nav" spacing={4} textAlign="center">
            <Link href="#home" onClick={onClose} color={scrollNav ? "black" : "white"}>Home</Link>
            <Link href="#about" onClick={onClose} color={scrollNav ? "black" : "white"}>About us</Link>
            <Link href="#services" onClick={onClose} color={scrollNav ? "black" : "white"}>Services</Link>
            <Link href="#contact" onClick={onClose} color={scrollNav ? "black" : "white"}>Contact us</Link>
            <Link href="#partners" onClick={onClose} color={scrollNav ? "black" : "white"}>Our partners</Link>

          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
