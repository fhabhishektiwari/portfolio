import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { RenderSecionHeading } from '../common/CommonComponent';
import { bodyStyles } from './BodyStyles'
import Image from '../../images/105342235.jpg';

export const AboutUs = () => {
    const classes=bodyStyles();
  return (
    <Box className={classes.section}>
        <Container>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={5} sx={{display: { sm: 'none',xs:'none',md:'block'}}}>
                <img src={Image} alt="user profile" className={classes.responsiveImg}/>
            </Grid>
            <Grid item xs={12} sm={7}>
                {RenderSecionHeading({smallText:'About us',heading:"Hello, I'm Abhishek Tripathi",description:"I'm FullStack Developer!. I have 2.5+ Year experience and  I create website and Application, based on Your Requirements."})}
            </Grid>
        </Grid>
        </Container>
    </Box>
  )
}
