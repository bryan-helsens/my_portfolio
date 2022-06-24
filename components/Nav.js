import React from 'react'
import NextLink from 'next/link'
import {
    Link,
    Stack,
} from '@chakra-ui/react'
import {
    IoHomeOutline,
    IoPersonOutline,
} from 'react-icons/io5'
import { FaTasks } from 'react-icons/fa'
import { BiMessageSquareDetail, BiBook } from 'react-icons/bi'
import styled from '@emotion/styled'

export const NavList = styled(Stack)`
    background: rgba(0,0,0,0.3);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);

    & a{
       background: transparent;
       padding: 0.9rem;
       border-radius: 50%;
       display: flex;
       color: rgba(255,255,255,0.6);
       font-size: 1.1rem;
    }

    & a:hover{
        background: #1f1f38;
    }

    & a.active {
        background: teal;
        color: white;
    }
`

const LinkItem = ({ href, path, children }) => {
    href = "/" + href
    const active = path === href

  return (
    <NextLink href={href}>
        <Link
            bg={active ? 'black' : ''}
            color={active ? 'white' : ''}
            className={active ? 'active' : ''}
        >
            {children}
        </Link>
    </NextLink>
  )
}

const Nav = props => {
    const { path } = props

  return (
        <NavList
            direction={{base: 'column', md: 'row'}}
            display={{base: 'none', md: 'flex'}}
            width={{base: 'full', md: 'auto'}}
            alignItems="center"
            flexGrow={1}
            mt={{base: 4, nmd: 0}}
            visibility={["hidden", "visible"]}
        >
            <LinkItem href="" path={path}><IoHomeOutline /></LinkItem>
            <LinkItem href="#about" path={path}><IoPersonOutline /></LinkItem>
            <LinkItem href="#experience" path={path}><BiBook /></LinkItem>
            <LinkItem href="#portfolio" path={path}><FaTasks /></LinkItem>
            <LinkItem href="#contact" path={path}><BiMessageSquareDetail /></LinkItem>
        </NavList>
  )
}

export default Nav
