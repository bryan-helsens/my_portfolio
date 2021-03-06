import React from 'react'
import { List, ListItem, Link, Icon, Button } from '@chakra-ui/react'
import {
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoGithub
  } from 'react-icons/io5'
  import { Socials } from '../components/ItemsAside'

const SocialMedia = () => {
  return (
    <Socials visibility={["hidden", "visible"]} >
        <ListItem>
            <Link href="https://github.com/bryan-helsens/" target="_blank">
                <Button variant="ghost" colorScheme="teal"><IoLogoGithub /></Button>
            </Link>
        </ListItem>

        <ListItem>
            <Link href="https://www.facebook.com/bryan.helsens.3/" target="_blank">
                <Button variant="ghost" colorScheme="teal"><IoLogoFacebook /></Button>
            </Link>
        </ListItem>

        <ListItem>
            <Link href="https://twitter.com/bryan_helsens/" target="_blank">
                <Button variant="ghost" colorScheme="teal"><IoLogoTwitter /></Button>
            </Link>
        </ListItem>

        <ListItem>
            <Link href="https://www.instagram.com/bryan_helsens/" target="_blank">
                <Button variant="ghost" colorScheme="teal"><IoLogoInstagram /></Button>
            </Link>
        </ListItem>
    </Socials>
  )
}

export default SocialMedia