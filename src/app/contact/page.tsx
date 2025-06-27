import React from 'react'
import PageBanner from '../components/PageBanner'
import ContactArea from '../components/ContactPage/ContactArea'
import GoogleMapArea from '../components/ContactPage/GoogleMapArea'
import FormFillUp from '../components/FormFillUp'

const page = () => {
  return (
    <>
    <PageBanner heading='Contact Us' />
    <ContactArea />
    <GoogleMapArea />
    <FormFillUp />
    </>
  )
}

export default page