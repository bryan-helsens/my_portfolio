import React, { useState, useEffect } from 'react'
import Layout from '../../components/layouts/Article'
import { Container, Badge, Text, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, EventImage } from '../../components/Event'
import P from '../../components/Paragraph'
import { Events } from '../../data/events.json'

const Talent_IT = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    setData(Events[0])
  }, [])

  return (
    <Layout title={data.id}>
      <Container>
        <Title>{data.name} <Badge>{data.datum}</Badge></Title>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Locatie</Meta>
            <span>{data.locatie}</span>
          </ListItem>
          <ListItem>
            <Meta>Tijd</Meta>
            <span>{data.tijd}</span>
          </ListItem>
          <ListItem>
            <Meta>Talent IT</Meta>
            <Link href={data.url} isExternal>
              {data.url} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <P>
          {JSON.stringify(data.text) + ``}
        </P>

        <EventImage src={data.imagePath} alt={data.id} title={data.id} />
      </Container>
    </Layout>
  )
}

export default Talent_IT