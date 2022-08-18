import React from 'react'
import { Box, Button, ButtonGroup, Link, SimpleGrid } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const CTA = () => {
  return (
    <ButtonGroup
        display='flex'
        justifyContent='center'
        gap={6}
    >
        <Link href="/assets/cv/Bryan_Helsens_CV.pdf" isExternal>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" variant='outline'>Download CV</Button>
        </Link>

        <Link href="https://cv-bryan-helsens.netlify.app/" isExternal>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">Watch CV</Button>
        </Link>

        <Link href="/#contact">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" variant='outline'>Let&apos;s Talk</Button>
        </Link>
    </ButtonGroup>
  )
}

export default CTA