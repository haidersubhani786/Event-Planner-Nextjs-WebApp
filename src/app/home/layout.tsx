import React from 'react'
import Navbar from '../components/Navbar'
import FooterArea from '../components/FooterArea'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
        <Navbar />
        {children}
        <FooterArea />
    </>
  )
}

export default layout