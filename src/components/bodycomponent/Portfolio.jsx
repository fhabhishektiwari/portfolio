import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { bodyStyles } from './BodyStyles'
import { RenderSecionHeading } from '../common/CommonComponent';
import Image1 from '../../images/p-1.jpg'
import Image2 from '../../images/p-2.jpg'
import Image3 from '../../images/p-3.jpg'
import Image4 from '../../images/p-4.jpg'
import Image5 from '../../images/p-5.jpg'
import Image6 from '../../images/p-6.jpg'
import Image7 from '../../images/p-7.jpg'
import Image8 from '../../images/p-8.jpg'
import Image9 from '../../images/p-9.jpg'
import Image10 from '../../images/p-10.jpg'
import Image11 from '../../images/p-11.jpg'
import Image12 from '../../images/p-12.jpg'

export const Portfolio = () => {
    const classes = bodyStyles();
    const portfolioData=[
        {url:Image1,title:'#portfolio',link:""},
        {url:Image2,title:'#portfolio',link:""},
        {url:Image3,title:'#portfolio',link:""},
        {url:Image4,title:'#portfolio',link:""},
        {url:Image5,title:'#portfolio',link:""},
        {url:Image6,title:'#portfolio',link:""},
        {url:Image7,title:'#portfolio',link:""},
        {url:Image8,title:'#portfolio',link:""},
        {url:Image9,title:'#portfolio',link:""},
        {url:Image10,title:'#portfolio',link:""},
        {url:Image11,title:'#portfolio',link:""},
        {url:Image12,title:'#portfolio',link:""},
    ]
    return (
        <Box className={classes.sectionDark} id='Portfolio'>
            {/*header*/}
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Grid item xs={12} sm={8}>
                    {RenderSecionHeading({
                        smallText: 'Portfolio',
                        heading: "Let's See My work",
                        alignCenter: true
                    })}
                </Grid>
            </Grid>
            {/*Image section*/}
            <Container maxWidth='xl'>
            <Grid container spacing={2}>
                {portfolioData.map((item,i)=>
                    <Grid item xs={6} sm={6} lg={3} key={i}>
                    <Box className={classes.imageContainer}>
                        <img src={item.url} alt={item.title} className={classes.responsiveImg}/>
                        <Box className={classes.imageOverlay}>
                            <Typography className={classes.overlayTitle}>{item.title}</Typography>
                            <Button variant='contained'>Visit</Button>
                        </Box>
                    </Box>
                </Grid>
                )}
            </Grid>
            </Container>

        </Box>
    )
}
