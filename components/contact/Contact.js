import React, { useRef } from 'react'
import { Box, SimpleGrid, Text, Link, Button } from '@chakra-ui/react'
import { MdOutlineEmail } from 'react-icons/md' 
import { RiMessengerLine } from 'react-icons/ri'
import {
    FormControl,
    Input,
    Textarea
} from '@chakra-ui/react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_API_KEY)
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
        });
    };        


  return (
    <SimpleGrid columns={[1,2,2]} gap={6}>
        <Box
            flexShrink={0}
            mt={{base: 4, md: 4}}
            mr={{md: 5}}
            ml={{md: 0}}
            align={["center"]}
            w={["100%", "70%"]}
        >
            <SimpleGrid columns={[1,1,1]} gap={6}>
                <Box display="block"
                    bg="teal.800"
                    borderRadius='3xl'
                    p="5"
                    width="100%"
                >
                    <MdOutlineEmail size={25} />
                    <Text fontSize="md">Email</Text>
                    <Text fontSize="xs">bryanhelsens@hotmail.com</Text>
                    <Link href="mailto:bryanhelsens@hotmail.com" target="_blank" isExternal>
                        <Button colorScheme="pink.300" variant='ghost' mt={1}>Send a message</Button>
                    </Link>
                </Box>

                <Box display="block"
                    bg="teal.800"
                    borderRadius='3xl'
                    p="5"
                    width="100%"
                >
                    <RiMessengerLine size={25} />
                    <Text fontSize="md">Messenger</Text>
                    <Text fontSize="xs">Bryan Helsens</Text>
                    <Link href="https://m.me/bryan.helsens.3" isExternal>
                        <Button colorScheme="pink.300" variant='ghost' mt={1}>Send a message</Button>
                    </Link>
                </Box>
            </SimpleGrid>
        </Box>

        <Box ml={["0%", "-30%", "-30%"]}>
            <form ref={form} onSubmit={sendEmail}>
                <FormControl mt={5} isRequired>
                    <Input name='name' type='text' placeholder='Your Full Name' size="lg" color='teal' focusBorderColor="white" _placeholder={{ color: 'white' }}/>
                </FormControl>
                <FormControl mt={5} isRequired>
                    <Input name='email' type='email' placeholder='Your Email' size="lg" color='teal' focusBorderColor="white" _placeholder={{ color: 'white' }} />
                </FormControl>
                <FormControl mt={5} isRequired>
                    <Input name='subject' type='text' placeholder='Subject' size="lg" color='teal' focusBorderColor="white" _placeholder={{ color: 'white' }} />
                </FormControl>
                <FormControl mt={5} isRequired>
                    <Textarea name='message' type='text' placeholder='Your message' focusBorderColor="white" borderRadius={"0.375rem"} size='lg' color='teal' _placeholder={{ color: 'white' }} />
                </FormControl>

                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                >
                    Send Message
                </Button>

            </form>
        </Box>

    </SimpleGrid>
  )
}

export default Contact