import React from 'react'
import PageBanner from '../components/PageBanner'
import WeddingServices from '../components/servicePage/WeddingServices'
import WeddingEventArea from '../components/homepage/WeddingEventArea'
import FormFillUp from '../components/FormFillUp'

const page = () => {
  return (
    <>
    <PageBanner heading='Our Services'/>
    <WeddingServices />
    <WeddingEventArea />
    <FormFillUp />
    
    </>
  )
}

export default page