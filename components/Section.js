import React from 'react'
import { motion } from 'framer-motion'
import { chakra, shouldFrowardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldFrowardProp: prop => {
        return shouldFrowardProp(prop) || prop === 'transition'
    }
})

const Section = ({ children, delay = 0}) => {
  return (
    <StyledDiv
        initial={{y: 10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay}}
        mb={6}
    >
        {children}
    </StyledDiv>
  )
}

export default Section