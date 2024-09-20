import React from 'react'
import { FaqDataProps } from '../../types/interfaces'
import SectionContainer from '../SectionContainer'
import SectionHeader from '../SectionHeader'
import FaqList from '../FaqList'
import { Button } from '../Button'

interface FaqSectionProps {
  faqsData: FaqDataProps;
}

const FaqSection = ({faqsData}: FaqSectionProps) => {
  return (
    <SectionContainer>
        <SectionHeader
          title={faqsData.title}
          description={faqsData.description}
        />
        <FaqList faqs={faqsData.faqs} className='mb-8' />
        <Button text="More Info" />
    </SectionContainer>
  )
}

export default FaqSection