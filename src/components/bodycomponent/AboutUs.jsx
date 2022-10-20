import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { CardMedia, RenderSecionHeading } from '../common/CommonComponent';
import { bodyStyles } from './BodyStyles'
import Image from '../../images/105342235.jpg';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AppsIcon from '@mui/icons-material/Apps';
import BrushIcon from '@mui/icons-material/Brush';
import WebIcon from '@mui/icons-material/Web';
export const AboutUs = () => {
    const classes = bodyStyles();
    const cardMediaData = [
        {
            title: 'Web Development',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            icon: <WebIcon />
        },
        {
            title: 'Graphics Design',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            icon: <BrushIcon />
        },
        {
            title: 'mobile Apps',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            icon: <AppsIcon />
        },
        {
            title: 'Marketing',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            icon: <AcUnitIcon />
        },
    ]
    return (
        <Box className={classes.section}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5} sx={{ display: { sm: 'none', xs: 'none', md: 'block' } }}>
                        <Box>
                            <img src={Image} alt="user profile" className={classes.responsiveImg} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={7}>
                        {RenderSecionHeading({ smallText: 'About us', heading: "Hello, I'm Abhishek Tripathi", description: "I'm FullStack Developer!. I have 2.5+ Year experience and I create website and Application, based on Your Requirements." })}
                        {/*CardMedia({label:'WebDevelopment',Icon:<AcUnitIcon/>,description:'adadsasdadsadasd'})*/}
                        <Grid container>
                            {
                                cardMediaData.map((item, i) => <Grid item xs={12} sm={6} key={i}>{
                                    CardMedia({label:item.title,Icon:item.icon,description:item.description})
                                }
                                </Grid>
                                )}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
