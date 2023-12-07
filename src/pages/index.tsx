import Head from 'next/head'
import { Flex, Text} from '@chakra-ui/react'

export default function Login(){
  return(
    <>
    <Head>
      <title>BarberPRO - Seu sistema completo</title>
    </Head>
    <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center">
      <Text fontSize={30}>Landing Page</Text>
    </Flex>
    </>
  )
}