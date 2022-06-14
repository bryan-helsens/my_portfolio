import { Link, List } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const ScrollDown = styled(Link)`
    position: absolute;
    right: -2.3rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 1.2rem;
`

export const Socials = styled(List)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 2rem;
`