import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import Layout from '../components/layouts/Main'

function MyApp({ Component, pageProps, router }) {
  return (
  <ChakraProvider theme={theme}>
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  )
}

export default MyApp
