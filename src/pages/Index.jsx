import { Container, VStack, Heading, Text, Link, Image, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTUzNDY0MTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer Portrait" />
        <Heading as="h1" size="xl">
          John Doe
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Full Stack Developer | JavaScript Enthusiast | Open Source Contributor
        </Text>
        <VStack spacing={3}>
          <Link href="https://github.com/johndoe" isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:johndoe@example.com">
            <Button leftIcon={<FaEnvelope />} colorScheme="red" variant="solid">
              Email Me
            </Button>
          </Link>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
