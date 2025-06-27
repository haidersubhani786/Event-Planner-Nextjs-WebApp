import React from 'react'
import PageBanner from '../components/PageBanner'
import BlogArea from '../components/homepage/BlogArea'
import BlogAreaGrid from '../components/BlogPage/BlogAreaGrid'
import FormFillUp from '../components/FormFillUp'

const page = () => {
  return (
    <>
    <PageBanner heading='Our Blog'/>
    <BlogAreaGrid />
    <FormFillUp />
    </>
  )
}

export default page