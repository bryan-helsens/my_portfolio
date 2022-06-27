import React from 'react'
import NextLink from 'next/link'
import { Heading, Box, Link, Badge, Image } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/event" passHref>
            <Link>Event</Link>
        </NextLink>
        <span>
            {' '}
            <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontsize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)
export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)

export const EventImage = ({ src, alt, title }) => (
    <Image w="auto" src={src} alt={alt} title={title} mb={4} />
)