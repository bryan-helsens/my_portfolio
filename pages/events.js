import React from 'react'
import Layout from '../components/layouts/Article'
import { Container, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/Section'
import { EventGridItem } from '../components/Grid-Item'

import TalentIT from '../public/images/events/conferentie/Talent_IT.png'
import IC4 from '../public/images/events/conferentie/IC4.jpg'


import BruCON_2019 from '../public/images/events/ctf/brucon.png'
import DeloitteChristmasCTF from '../public/images/events/ctf/Hackazon.png'
import NeverLAN from '../public/images/events/ctf/NeverLAN.jpg'
import CSCB from '../public/images/events/ctf/CSCB.jpg'


import HowestStone from '../public/images/events/howest_projecten/HearthStone.png'
import Retro_Blocks from '../public/images/events/howest_projecten/RetroBlocks.png'
import Lamego from '../public/images/events/howest_projecten/Lamego.jpg'
import Security_Audit from '../public/images/events/howest_projecten/Security_Audit.jpg'
import Webshop from '../public/images/events/howest_projecten/Webshop.jpg'


const events = () => {
  return (
    <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>Events</Heading>
            <Text as="h4" fontSize={15} mb={0}>These are events in which i participated</Text>
            <Text as="h4" fontSize={15} mb={4}>Conference/Seminar - CTF/Hackathons - Howest projects</Text>
        
            <Section delay={0.2}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4} variant="section-title">
                    Conference/Seminar
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <EventGridItem id="Talent_IT" title="Talent_IT" thumbnail={TalentIT} tags={"#Conference, #Talent IT"}>Talent IT - Agile & Waterfall</EventGridItem>
                </Section>

                <Section>
                    <EventGridItem id="IC4" title="IC4" thumbnail={IC4} tags={"#Conference, #IC4, #Security"}>Cyber Tuesday - IC4 Awareness Session</EventGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.3}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4} variant="section-title">
                        CTF/Hackathons
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <EventGridItem id="BruCON_2019" title="BruCON_2019" thumbnail={BruCON_2019} tags={"#CTF, #Hacking"}>BruCON 2019 Student CTF</EventGridItem>
                </Section>

                <Section>
                    <EventGridItem id="Hackazon" title="Hackazon" thumbnail={DeloitteChristmasCTF} tags={"#CTF, #Hacking"}>Deloitte Christmas CTF</EventGridItem>
                </Section>

                <Section>
                    <EventGridItem id="NeverLAN" title="NeverLAN" thumbnail={NeverLAN} tags={"#CTF, #Hacking"}>NeverLAN CTF</EventGridItem>
                </Section>

                <Section>
                    <EventGridItem id="CSCB" title="CSCB" thumbnail={CSCB} tags={"#CTF, #Hacking, #Belgium"}>Cyber Security Challenge Belgium</EventGridItem>
                </Section>
            </SimpleGrid>

            
            <Section delay={0.4}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4} variant="section-title">
                        Howest projects
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <EventGridItem id="Project_one" title="Project_one" thumbnail={HowestStone} tags={"#Programming, #Java, #Hearthstone, #Game"}>HowestStone</EventGridItem>
                </Section>

                <Section>
                    <EventGridItem id="Project_two" title="Project_two" thumbnail={Retro_Blocks} tags={"#Programming, #Java, #Tetris, #Game"}>Retro Blocks</EventGridItem>
                </Section>

                <Section>
                    <EventGridItem id="Project_three" title="Project_three" thumbnail={Lamego} tags={"#International, #Programming, #Lamego"}>International Project (Lamego)</EventGridItem>
                </Section>

                <Section>
                    <EventGridItem id="Project_four" title="Project_four" thumbnail={Security_Audit} tags={"#Security, #Vulnerability Audit"}>Security Audit</EventGridItem>
                </Section>

                <Section>
                    <EventGridItem id="Project_five" title="Project_five" thumbnail={Webshop} tags={"#Programming, #Laravel, #NodeJS, PWA"}>Webshop Phones PWA</EventGridItem>
                </Section>
            </SimpleGrid>
        
        </Container>
    </Layout>
  )
}

export default events