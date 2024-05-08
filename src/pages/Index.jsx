import { Box, Image, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="white">
      {/* Header */}
      <Box as="header" display="flex" alignItems="center" justifyContent="space-between" p={4} borderBottom="1px" borderColor="gray.200">
        <Box display="flex" alignItems="center">
          <Image src="/logo.png" alt="Band Logo" boxSize="50px" mr={2} />
          <Text fontSize="xl" fontWeight="bold">The Band</Text>
        </Box>
        <Box display="flex">
          <Box as="a" href="https://linkedin.com" isExternal mx={2}><FaLinkedin /></Box>
          <Box as="a" href="https://github.com" isExternal mx={2}><FaGithub /></Box>
          <Box as="a" href="https://dev.to" isExternal mx={2}><FaDev /></Box>
        </Box>
      </Box>

      {/* Main Section */}
      <Box position="relative" pt={16}>
        <Image src="/tour1.jpg" alt="Tour Image" boxSize="300px" position="absolute" top="10%" left="50%" transform="translateX(-50%)" sx={{
          '@media screen and (max-width: 600px)': {
            boxSize: '150px'
          }
        }} />
        <Image src="/tour2.jpg" alt="Tour Image" boxSize="200px" position="absolute" bottom="10%" left="0" sx={{
          '@media screen and (max-width: 600px)': {
            boxSize: '150px'
          }
        }} />
        <Image src="/tour3.jpg" alt="Tour Image" boxSize="250px" position="absolute" bottom="10%" right="0" sx={{
          '@media screen and (max-width: 600px)': {
            boxSize: '150px'
          }
        }} />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" bg="white" p={2}>
          <Text fontSize="2xl" fontWeight="bold" sx={{
            '@media screen and (max-width: 600px)': {
              fontSize: 'xl',
              p: 1
            }
          }}>The Band - Live Tours</Text>
        </Box>
      </Box>

      {/* Projects Section */}
      <Box as="section" p={8}>
        <Box display="flex" flexDirection="column" gap={4}>
          <Box display="flex" alignItems="center">
            <Image src="/project1.png" alt="Project Logo" boxSize="50px" mr={4} />
            <Text flex="1">Project 1</Text>
            <Box as="a" href="https://github.com/project1" isExternal>View on GitHub</Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Image src="/project2.png" alt="Project Logo" boxSize="50px" mr={4} />
            <Text flex="1">Project 2</Text>
            <Box as="a" href="https://github.com/project2" isExternal>View on GitHub</Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.100" p={4} textAlign="center">
        <Text>&copy; 2023 The Band. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;