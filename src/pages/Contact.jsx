import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Box, Container, Grid } from '@mui/material'
import MainContact from '../components/MainContact'

const Contact = ({navArrayLinks,User}) => {
  return (
    <>
    <Header navArrayLinks={navArrayLinks} User={User}/>
    <Grid sx={{mt:11
    }}>
      <MainContact/>
      <Footer/>
     </Grid>
     
    
</>
  )
}

export default Contact