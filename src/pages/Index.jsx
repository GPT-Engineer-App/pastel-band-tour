import { Box, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="white">
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" p={4} borderBottom="1px" borderColor="gray.200">
        <Flex align="center">
          <Image src="/logo.png" alt="Band Logo" boxSize="50px" mr={2} />
          <Heading size="md">The Band</Heading>
        </Flex>
        <Flex>
          <Link href="https://linkedin.com" isExternal mx={2}><FaLinkedin /></Link>
          <Link href="https://github.com" isExternal mx={2}><FaGithub /></Link>
          <Link href="https://dev.to" isExternal mx={2}><FaDev /></Link>
        </Flex>
      </Flex>

      {/* Main Section */}
      <VStack spacing={8} p={8}>
        <Flex direction="column" align="center">
          <Image src="/tour1.jpg" alt="Tour Image" boxSize="200px" />
          <Text fontSize="lg">Headline 1</Text>
          <Text>Description for image 1</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/tour2.jpg" alt="Tour Image" boxSize="200px" />
          <Text fontSize="lg">Headline 2</Text>
          <Text>Description for image 2</Text>
        </Flex>
      </VStack>

      {/* Projects Section */}
      <Box as="section" p={8}>
        <Flex direction="column" gap={4}>
          <Flex align="center">
            <Image src="/project1.png" alt="Project Logo" boxSize="50px" mr={4} />
            <Text flex="1">Project 1</Text>
            <Link href="https://github.com/project1" isExternal>View on GitHub</Link>
          </Flex>
          <Flex align="center">
            <Image src="/project2.png" alt="Project Logo" boxSize="50px" mr={4} />
            <Text flex="1">Project 2</Text>
            <Link href="https://github.com/project2" isExternal>View on GitHub</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.100" p={4} textAlign="center">
        <Text>&copy; 2023 The Band. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;