import { Container, Box, Heading, Image, Text, Button, List, ListItem, Link, Icon, useColorModeValue } from "@chakra-ui/react"
import CTA from "../components/header/CTA"
import Layout from '../components/layouts/Article'
import { ScrollDown } from '../components/ItemsAside'
import SocialMedia from '../components/SocialMedia'
import Section from "../components/Section"
import About from '../components/about/About'
import { BioSection, BioYear } from '../components/about/Bio'
import Paragraph from "../components/Paragraph"
import Experience from '../components/experience/Experience'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <Layout>
      <Container maxW='700px' pb={10}>
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
          <Section delay={0.1}>
            <Heading as="h5" variant="h5-title">Get To Know</Heading>
            <Heading as="h3" variant="section-title">About Me</Heading>

            <About />
          </Section>

          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">Bio</Heading>
            <BioSection>
              <BioYear>1999</BioYear>
              Born in Bruges, Belgium.
            </BioSection>

            <BioSection>
              <BioYear>2020</BioYear>
              TI Internship at Silicon NV.
              <br />
              Setting up a security routine for SME environments.
            </BioSection>

            <BioSection>
              <BioYear>2020</BioYear>
              Completed the Bachelor program Computer Science (Compter & Cybercrime Professional) in the university Howest at Bruges.
            </BioSection>

            <BioSection>
              <BioYear>2021</BioYear>
              Completed the Bachelor program Computer Science (Software Engineer) in the university Howest at Bruges.
            </BioSection>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">I ♥</Heading>
            <Paragraph>Music, Walking, Nature, Sport, Coding, Football, NFL, Coffee</Paragraph>
          </Section>
        </Section>
       
        <Section id="experience" delay={0.2}>
          <Heading as="h5" variant="h5-title">What Skills I Have</Heading>
          <Heading as="h3" variant="section-title">My Experience</Heading>

          <Experience />
        </Section>

        <Section id="experience" delay={0.3}>
          <Heading as="h5" variant="h5-title">My Recent Work</Heading>
          <Heading as="h3" variant="section-title">Portfolio</Heading>

          <Portfolio />
        </Section>

        <Section id="experience" delay={0.4}>
          <Heading as="h5" variant="h5-title">Get In Touch</Heading>
          <Heading as="h3" variant="section-title">Contact Me</Heading>

          <Contact />
        </Section>


 
      </Container>

      <Footer />

    </Layout>
  )
}
