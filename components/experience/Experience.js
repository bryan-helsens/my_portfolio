import React from 'react'
import { SimpleGrid, Box, Heading, Text, Center } from '@chakra-ui/react'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <SimpleGrid columns={[1,2,2]} gap={6}>
        <Box
            borderWidth='1px' 
            borderRadius='lg'
            borderColor='white'
            p="5"
            width="100%"
        >
            <Heading as="h6"variant="skill-title">Frontend Development</Heading>

            <SimpleGrid columns={[2,2,2]} gap={6} mt={5}
            align="left"
            ml="5%"
            >
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        HTML
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        CSS
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        JavaScript
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#ffaa00" />
                        NextJS/React
                    </Text>
                    <Text fontSize="xs" ml="6">Basic</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#ff726f" />
                        Java
                    </Text>
                    <Text fontSize="xs" ml="6">Very Rusty</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#ffaa00" />
                        .NET
                    </Text>
                    <Text fontSize="xs" ml="6">Basic/Rusty</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#ffaa00" />
                        Bootstrap
                    </Text>
                    <Text fontSize="xs" ml="6">Basic</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#ffaa00" />
                        WindTail
                    </Text>
                    <Text fontSize="xs" ml="6">Basic</Text>
                </Box>
            </SimpleGrid>
        </Box>


        <Box
            borderWidth='1px' 
            borderRadius='lg'
            borderColor='white'
            p="5"
            width="100%"
        >
            <Heading as="h6"variant="skill-title">Backend Development</Heading>

            <SimpleGrid columns={[2,2,2]} gap={6} mt={5}
            align="left"
            ml="5%"
            >
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Nodejs
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Laravel
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        MySQL
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#ff726f" />
                        Python
                    </Text>
                    <Text fontSize="xs" ml="6">Rusty</Text>
                </Box>
            </SimpleGrid>
        </Box>



        <Box
            borderWidth='1px' 
            borderRadius='lg'
            borderColor='white'
            p="5"
            width="100%"
        >
            <Heading as="h6"variant="skill-title">Hosting/Cloud/Services</Heading>

            <SimpleGrid columns={[2,2,2]} gap={6} mt={5}
            align="left"
            ml="5%"
            >
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Netlify
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Heroku
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Git
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        VMware
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
            </SimpleGrid>
        </Box>

        <Box
            borderWidth='1px' 
            borderRadius='lg'
            borderColor='white'
            p="5"
            width="100%"
        >
            <Heading as="h6"variant="skill-title">OS/Server</Heading>

            <SimpleGrid columns={[2,2,2]} gap={6} mt={5}
            align="left"
            ml="5%"
            >
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Windows
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Linux
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Debian
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Kali
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
            </SimpleGrid>
        </Box>


        <Box
            borderWidth='1px' 
            borderRadius='lg'
            borderColor='white'
            p="5"
            width="100%"
        >
            <Heading as="h6"variant="skill-title">Hacking/Security</Heading>

            <SimpleGrid columns={[2,2,2]} gap={6} mt={5}
            align="left"
            ml="5%"
            >
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Security audits
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Forensic
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Web
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Servers
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Attacking
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Defending
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#ffaa00" />
                        Cryptography
                    </Text>
                    <Text fontSize="xs" ml="6">Basic</Text>
                </Box>
            </SimpleGrid>
        </Box>


        <Box
            borderWidth='1px' 
            borderRadius='lg'
            borderColor='white'
            p="5"
            width="100%"
        >
            <Heading as="h6"variant="skill-title">Networking</Heading>

            <SimpleGrid columns={[1,2,1]} gap={6} mt={5}
            align="left"
            ml="5%"
            >
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Setting up a network
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
                <Box>
                    <Text fontSize="md" display="flex" alignItems="center" gap={2}>
                        <BsPatchCheckFill color="#4db5ff" />
                        Configuration of several server
                    </Text>
                    <Text fontSize="xs" ml="6">Experienced</Text>
                </Box>
            </SimpleGrid>
        </Box>
    </SimpleGrid>
  )
}

export default Experience