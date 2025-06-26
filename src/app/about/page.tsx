import React from 'react'
import PageBanner from '../components/PageBanner'
import WeddingStory from '../components/AboutPage/WeddingStory'
import AboutCounter from '../components/AboutPage/AboutCounter'
import WishesArea from '../components/AboutPage/WishesArea'
import TeamArea from '../components/AboutPage/TeamArea'
import TestimonialArea from '../components/homepage/TestimonialArea'
import FormFillUp from '../components/FormFillUp'

const page = () => {
  return (
    <>
    <PageBanner heading='About Us'/>
    <WeddingStory />
    <AboutCounter />
    <WishesArea />
    <TeamArea />
    <TestimonialArea/>
    <FormFillUp />
    </>
  )
}

export default page