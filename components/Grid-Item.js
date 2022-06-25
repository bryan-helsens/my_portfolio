import React from 'react'
import { Box, Text, LinkBox, LinkOverlay, ButtonGroup, Link, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const PortfolioGridItem = ({ children, id, title, thumbnail, tags, demo, git }) => {

    return (
        <Box
        w="100%"
        align="left"
        color="white"
    >
        <NextLink href={`/project/${id}`}>
            <LinkBox cursor="pointer">
                <Image src={thumbnail} alt={title} title={title} className="grid-item-thumbnail" width={"100%"} height={"75%"} placeholder="blur" layout="responsive" objectFit="contain" />
                <LinkOverlay href={`/project/${id}`}>
                    <Text mt={2} fontSize={20} fontWeight="bold" color="#ff3559">{title}</Text>
                </LinkOverlay>

                <Text fontSize={16}>{children}</Text>
                <Text fontSize={10} color="gray">{tags}</Text>
           
            </LinkBox>
        </NextLink>

        <ButtonGroup
            display='flex'
            justifyContent='space-between'
            mt={2}
        >

            {git && git ? (
                <Link href={git} isExternal>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" variant='outline'>Github</Button>
                </Link>
                ) : (
                    <></>
                )
            }

            {demo && demo ? (
                <Link href={demo} isExternal>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">Live Demo</Button>
                </Link>
                ) : (
                    <></>
                )
            }

        </ButtonGroup>
    </Box>
    )
}

export const EventGridItem = ({ children, id, title, thumbnail, tags }) => (
    <Box
        w="100%"
        align="center"
    >
        <NextLink href={`/event/${id}`}>
            <LinkBox cursor="pointer">
                <Image src={thumbnail} alt={title} title={title} className="grid-item-thumbnail" width={"100%"} height={"80%"} placeholder="blur" layout="responsive" objectFit="contain" />
                <LinkOverlay href={`/event/${id}`}>
                    <Text mt={2} height={12} mb={4} fontSize={20}>
                        {children}
                    </Text>
                </LinkOverlay>
                <Text fontSize={10} color={"gray"}>{tags}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)