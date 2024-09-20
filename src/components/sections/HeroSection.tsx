import React from 'react'
import { BlockWithImageProps } from '../../types/interfaces';
import SectionContainer from '../SectionContainer'
import BlockWithImage from '../BlockWithImage'

interface HeroSectionProps {
    heroData: BlockWithImageProps;
  }

const HeroSection = ({heroData}: HeroSectionProps) => {
  return (
    <SectionContainer>
        <BlockWithImage {...heroData}/>
    </SectionContainer>
  )
}

export default HeroSection