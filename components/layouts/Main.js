import React from 'react'
import Head from "next/head"
import { Box, Container } from '@chakra-ui/react'
import Nav from '../Nav'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Bryan Helsens - Portfolio</title>
        </Head>

        <Nav path={router.asPath} />

        <Container maxW="container.md" pt={14}>
            {children}
        </Container>
    </Box>
  )
}

export default Main