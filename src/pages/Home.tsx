import React from 'react'
import Layout from '../layouts/Layout'
import SectionWithImage from '../components/SectionWithImage'
// import HeroSection from '../components/HeroSection'
import heroIllustration1 from '../assets/illustration-hero.svg'

const Home = () => {
  return (
    <Layout>
        {/* <HeroSection /> */}
        <SectionWithImage
        title="A Simple Bookmark Manager"
        titleClassName="text-5xl font-bold"  // Custom class for larger title
        description="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
        buttons={[
          { text: "Get it on Chrome", link: "/chrome" },
          { text: "Get it on Firefox", link: "/firefox" }
        ]}
        imageSrc={heroIllustration1}
        imageAlt="Hero Illustration 1"
      />
        <div className='h-[300px] bg-red-200'></div>
        <div className='h-[300px] bg-red-800'></div>
        <div className='h-[300px] bg-red-200'></div>
        <div className='h-[300px] bg-red-800'></div>
        <div className='h-[300px] bg-red-200'></div>
        <div className='h-[300px] bg-red-800'></div>
        <div className='h-[300px] bg-red-200'></div>
        <div className='h-[300px] bg-red-800'></div>
    </Layout>
  )
}

export default Home