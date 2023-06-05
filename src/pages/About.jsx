import React from 'react'
import Header from '../components/Header'
import { Container } from '@mui/material'
import MainAbout from '../components/MainAbout'
import Footer from '../components/Footer'

const About = ({navArrayLinks,User}) => {
  return (
    <>
    <Header navArrayLinks={navArrayLinks} User={User}/>
     <Container 
            
                 sx={{mt:11
                }}>
     <MainAbout/>
    <Footer/>
     </Container>
    
</>
  )
}

export default About