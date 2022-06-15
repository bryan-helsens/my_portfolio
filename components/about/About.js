import React from 'react'
import { Container, Box, SimpleGrid, Image, Text, Grid } from '@chakra-ui/react'
import Paragraph from '../Paragraph'

const About = () => {
  return (
        <SimpleGrid columns={[1,2,2]} gap={6}>
           
            <Box
                flexShrink={0}
                mt={{base: 4, md: 16}}
                mr={{md: 5}}
                ml={{md: 0}}
                align={["center"]}
                w={["100%", "70%"]}
            >
                <Image w={["50%", "75%"]} borderColor="teal" borderWidth={2} borderStyle="solid" display="inline-block" borderRadius="3xl" src="/images/me.jpg" alt="Bryan Helsens" title="Bryan Helsens" />
            </Box>

            <Box
                ml={["0%", "-40%", "-40%"]}
            >
                <Paragraph>
                    My name is <Text as="strong">Bryan Helsens</Text>, <Text as="strong">23 years</Text> old.
                    <br />
                    Graduated from the university Howest of Bruges, where I followed and successfully completed two bachelor program of <Text as="strong">Computer Science</Text> (<Text as="strong">Computer & Cybercrime Professional and Software Engineer</Text>).

                    <br />
                    <br />

                    I like to develop websites in <Text as="strong">Nextjs, Laravel and Nodejs</Text>. <Text as="strong">Security</Text> wise I like to <Text as="strong">attack and defend</Text> IT related systems (<Text as="strong">mainly servers</Text>) &#128522;
                    <br />
                    I started studying <Text as="strong">cybersecurity</Text> mainly because I want to <Text as="strong">help companies bettering their security</Text> and it is something that not many people take into account, while that is very important!
                    <br />
                    In addition, I have the basic knowledge about <Text as="strong">networking</Text>. &#x1F913;
                </Paragraph>
            </Box>
          
        </SimpleGrid>
    )
}

export default About