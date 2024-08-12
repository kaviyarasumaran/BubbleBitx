import React from 'react';
import { Box, Text, Heading, VStack, HStack, Image, Flex } from '@chakra-ui/react';
import images from '../../../assets/images/images';

const ChooseMe = () => {
    return (
        <Box

            mx="auto"
            py={20}
            px={4}
            display="flex"
            flexDirection={['column', 'column', 'row']}
            alignItems="center"
            justifyContent="space-between"
        >

            <Box
                w={['80%', '80%', '50%']}
                display="flex"
                justifyContent="center"
                mb={[8, 8, 0]}
            >
                <Image
                    src={images.hero1}
                    alt="About Us"
                    boxSize="100%"
                    objectFit="cover"
                />
            </Box>


            {/* Right side with text and gradient boxes */}
            <Box w={['100%', '100%', '50%']}>
                <VStack align="start" spacing={4}>
                    <HStack>
                        <Text fontSize="xl" color="blue.600">
                            &#8505; ABOUT US
                        </Text>
                    </HStack>
                    <Heading as="h2" size="lg" color="blue.900">
                        FEW REASONS WHY YOU SHOULD CHOOSE US
                    </Heading>
                    <Text color="gray.600">
                        We are a young talented experience team of people, where we take
                        any work passionately. Ping us any time here to make your solutions
                        and businesses stand out and hand over better services to you with
                        absolute results in lesser time.
                    </Text>

                    <Flex spacing={4} mt={6} flexDirection={{ base: "column", sm: "row", }}>
                        <Box
                            p={4}
                            bgGradient="linear(to-r, teal.200, blue.400)"
                            borderRadius="md"
                            shadow="md"
                            w="200px"
                        >
                            <Text fontSize="lg" fontWeight="bold" color="blue.900">
                                Business growth
                            </Text>
                            <Text fontSize="sm" color="gray.700">
                                We are passionate about our work. Our of the curve to engaging &
                                user-friendly website to make it easy.
                            </Text>
                        </Box>
                        <Box
                            p={4}
                            bgGradient="linear(to-r, teal.200, blue.400)"
                            borderRadius="md"
                            shadow="md"
                            w="200px"
                        >
                            <Text fontSize="lg" fontWeight="bold" color="blue.900">
                                Our missions
                            </Text>
                            <Text fontSize="sm" color="gray.700">
                                We are passionate about our work. Our of the curve to engaging &
                                user-friendly website to make it easy.
                            </Text>
                        </Box>
                    </Flex>
                </VStack>
            </Box>
        </Box>
    );
};

export default ChooseMe;
