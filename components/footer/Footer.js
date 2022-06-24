import React from 'react'
import { Box, Container, Heading, Stack, Text, Button, Link } from '@chakra-ui/react'
import {
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoGithub
  } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box
        bg={'#0263a8'}
        color={'black'}
        pt={5}
        width={"100%"}
        size={'0.9rem'}
        borderRadius={'3rem'}
    >
        <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            spacing={4}
            justify={'center'}
            align={'center'}
        >
            <Heading as="h2" color="teal.200" >BRYAN HELSENS</Heading>
            <Stack direction={{base: 'column', md:"row" }} align={"center"} spacing={6}>
                <Link href={'/'} color="black">Home</Link>
                <Link href={'#about'} color="black">About</Link>
                <Link href={'#experience'} color="black">Experience</Link>
                <Link href={'#portfolio'} color="black">Portfolio</Link>
                <Link href={'#contact'} color="black">Contact</Link>
            </Stack>
        </Container>

        <Box>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                pb={"4.5rem"}
                direction={{ base: 'column', md: 'column' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Stack direction={'row'} gap={6}>

                        <Link href="https://github.com/bryan-helsens/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" color="white" bg="black"><IoLogoGithub /></Button>
                        </Link>
 
                        <Link href="https://www.facebook.com/bryan.helsens.3/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" color="white" bg="black"><IoLogoFacebook /></Button>
                        </Link>

                        <Link href="https://twitter.com/bryan_helsens/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" color="white" bg="black"><IoLogoTwitter /></Button>
                        </Link>
      
                        <Link href="https://www.instagram.com/bryan_helsens/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" color="white" bg="black"><IoLogoInstagram /></Button>
                        </Link>

                </Stack>

                <Text>© 2022 Bryan Helsens. All rights reserved</Text>
            </Container>
  
        </Box>
    </Box>
  )
}

export default Footer