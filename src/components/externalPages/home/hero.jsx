import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import images from '../../../assets/images/images';

const Hero = () => {
    return (
        <Box
            w="100%"
            h="110vh"
            bgImage={images.Bg}
            bgSize="cover"
            bgPosition="center"
            bgAttachment="fixed"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <VStack spacing={4} textAlign="center" color="white" maxW="2000px">
                <Box>
                    <Heading fontSize="lg" fontFamily="formCompTexts">
                        Our company is always committed to making your experiences better
                    </Heading>
                    <Heading fontSize="lg" fontFamily="formCompTexts">
                        and building services that always work towards your goal
                    </Heading>

                    <Box
                        size="lg"
                        bg="linear-gradient(63deg, rgba(114,237,242,1) 0%, rgba(81,81,229,1) 35%);"
                        mt={10}
                        w={300}
                        p={2}
                        mx="auto"
                    >
                        <Text fontSize="2xl" fontWeight="medium">
                            Trust | Achieve | Lead
                        </Text>
                        <Text fontSize="xl" letterSpacing={4}>
                            Be Productive
                        </Text>
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
};

export default Hero;
