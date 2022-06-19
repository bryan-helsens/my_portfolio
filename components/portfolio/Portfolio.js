import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import Section from '../Section'
import { PortfolioGridItem } from '../Grid-Item'
import Layout from '../layouts/Article'

import thumbYellowRose from '../../public/images/portfolio/Yellow_rose.jpg'
import thumbPokemon from '../../public/images/portfolio/Pokemon.jpg'
import thumbMysteryBox from '../../public/images/portfolio/Mystery_box.jpg'
import thumbDailyRewards from '../../public/images/portfolio/Daily_rewards.jpg'
import thumbWebshopPhones from '../../public/images/portfolio/Webshop.jpg'
import thumbBeerCollection from '../../public/images/portfolio/Beer_glass_collection.jpg'

const Portfolio = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Box
            borderWidth='1px' 
            borderRadius='1.5rem'
            p="5"
            bg='teal.700'
        >
            <PortfolioGridItem id="yellow_rose" title="Yellow Rose" alt="Pokemon" thumbnail={thumbYellowRose} git={"https://github.com/bryan-helsens/Yellow_rose"} demo={"https://fervent-borg-7c479f.netlify.app"} tags="#CSS, #Animation">Yellow Rose Animation</PortfolioGridItem>
        </Box>

        <Box
            borderWidth='1px' 
            borderRadius='1.5rem'
            p="5"
            bg='teal.700'
        >
            <PortfolioGridItem id="pokemon" title="Pokemon" alt="Pokemon" thumbnail={thumbPokemon} git={""} demo={"https://eager-lewin-f11a0b.netlify.app"} tags="#CSS, #JavaScript, #Game">Pokemon</PortfolioGridItem>
        </Box>

        <Box
            borderWidth='1px' 
            borderRadius='1.5rem'
            p="5"
            bg='teal.700'
        >
            <PortfolioGridItem id="mystery_box" title="Mystery Box" thumbnail={thumbMysteryBox} git={""} demo={"https://objective-newton-9c99e9.netlify.app"} tags="#CSS, #Animation">Mystery Box</PortfolioGridItem>
        </Box>

        <Box
            borderWidth='1px' 
            borderRadius='1.5rem'
            p="5"
            bg='teal.700'
        >
            <PortfolioGridItem id="daily_rewards" title="Daily Rewards" thumbnail={thumbDailyRewards} git={""} demo={"https://vibrant-hawking-8634cc.netlify.app"} tags="#CSS, #Animation">Yellow Rose Animation</PortfolioGridItem>
        </Box>
    </SimpleGrid> 
  )
}

export default Portfolio