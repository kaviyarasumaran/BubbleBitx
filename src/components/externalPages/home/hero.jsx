
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
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
                <Box >
                    <Heading fontSize="4xl">
                        Our company is always committed to making your experiences better and building services that always work towards your goal
                    </Heading>
                    <Text fontSize="xl">
                        Trust | Achieve | Lead
                    </Text>
                    <Button size="lg" colorScheme="teal">
                        Be Productive
                    </Button>
                </Box>
            </VStack>
        </Box>
    );
};

export default Hero;