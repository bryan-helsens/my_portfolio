import React from 'react'
import { SimpleGrid, Box, Text } from '@chakra-ui/react'
import Section from '../Section'
import { PortfolioGridItem } from '../Grid-Item'
import Layout from '../layouts/Article'
import { GoAlert } from 'react-icons/go'

import thumbYellowRose from '../../public/images/portfolio/Yellow_rose.jpg'
import thumbPokemon from '../../public/images/portfolio/Pokemon.jpg'
import thumbMysteryBox from '../../public/images/portfolio/Mystery_box.jpg'
import thumbDailyRewards from '../../public/images/portfolio/Daily_rewards.jpg'
import thumbWebshopPhones from '../../public/images/portfolio/Webshop.jpg'
import thumbBeerCollection from '../../public/images/portfolio/Beer_glass_collection.jpg'

const data = [
    {
        id: "yellow_rose",
        image: thumbYellowRose,
        title: "Yellow Rose",
        description: "Yellow Rose Animation",
        git: "https://github.com/bryan-helsens/Yellow_rose",
        demo: "https://fervent-borg-7c479f.netlify.app",
        tags: "#CSS, #Animation"
    },
    {
        id: "pokemon",
        image: thumbPokemon,
        title: "Pokemon",
        description: "Pokemon Game and Pokedex",
        git: "",
        demo: "https://eager-lewin-f11a0b.netlify.app",
        tags: "#CSS, #JavaScript, #Game"
    },
    {
        id: "mystery_box",
        image: thumbMysteryBox,
        title: "Mystery Box",
        description: "Mystery Box Animation (project Tetris)",
        git: "",
        demo: "https://objective-newton-9c99e9.netlify.app",
        tags: "#CSS, #Animation"
    },
    {
        id: "daily_rewards",
        image: thumbDailyRewards,
        title: "Daily Rewards",
        description: "Daily Rewards Design (project Tetris)",
        git: "",
        demo: "https://vibrant-hawking-8634cc.netlify.app",
        tags: "#CSS, #Animation"
    },
    {
        id: "webshop_phones",
        image: thumbWebshopPhones,
        title: "Webshop Phones",
        description: `Webshop where you can by phones (Final project for school)`,
        warning: "<GoAlert color='red' />Don&apos;t enter bank credentials <GoAlert color='red' />",
        git: "",
        demo: "https://bryanhelsens.be",
        tags: "#NodeJS, #Laravel, #JavaScript, #CSS, #E-commerce"
    },
    {
        id: "my_beer_glass_collection",
        image: thumbBeerCollection,
        title: "My Beer glass Collection",
        description: "My Beer Glass Collection",
        git: "",
        demo: "https://beercollectionbryan.herokuapp.com",
        tags: "#Laravel, #PHP, #Heroku"
    },

]

const Portfolio = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {
            data.map(({id, image, title, description, git, demo, tags}) => {
                return (
                <Box
                    borderWidth='1px' 
                    borderRadius='1.5rem'
                    p="5"
                    bg='teal.700'
                    key={id}
                >
                    <PortfolioGridItem id={id} title={title} alt={title} thumbnail={image} git={git} demo={demo} tags={tags}>{description}</PortfolioGridItem>
                </Box>
                )
            })
        }
    </SimpleGrid> 
  )
}

export default Portfolio