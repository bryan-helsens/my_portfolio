import { Container, Box, Heading, Image, Text, Button, List, ListItem, Link, Icon, useColorModeValue } from "@chakra-ui/react"
import CTA from "../components/header/CTA"
import Layout from '../components/layouts/Article'
import { ScrollDown } from '../components/ItemsAside'
import SocialMedia from '../components/SocialMedia'
import Section from "../components/Section"
import About from '../components/about/About'

export default function Home() {
  return (
    <Layout>
      <Container maxW='700px'>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Hello, I&apos;m a <Text as="strong">full-stack developer</Text> and <Text as="strong">ethical hacker</Text> based in Belgium!
        </Box>

        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Bryan Helsens
            </Heading>

            <p>( Developer / Ethical Hacker / Network Engineer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{base: 4, md: 0}}
            ml={{md: 6}}
            align="center"
          >
            <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/Profile_pic.jpeg" alt="Profile Image" title="Profile Image" />
          </Box>
        </Box>

        <Box>
          <CTA />
        </Box>

        <ScrollDown visibility={["hidden", "visible"]} href="#contact" color='teal.500'>Scroll Down</ScrollDown>
        <SocialMedia />

        <Section id="about" delay={0.1}>
          <Heading as="h5" variant="h5-title">Get To Know</Heading>
          <Heading as="h3" variant="section-title">About</Heading>

          <About />
        </Section>
 
      </Container>

    </Layout>
  )
}
