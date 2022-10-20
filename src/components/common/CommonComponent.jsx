// all common components should be defined here......
import React from 'react'
import { Box, Grid, Typography, Avatar } from '@mui/material'

import { useStyles } from '../headercomponent/HeaderStyles'
import { bodyStyles } from '../bodycomponent/BodyStyles';

export const Decorator = ({ label, widthIcon, Icon, styles }) => {
    const classes = useStyles();
    return (
        <Box className={classes.decorator} style={styles}>
            <Typography variant='span' component='div' className={classes.decoratorText}>
                {label}
            </Typography>
            {widthIcon ? <Typography component='span' className={classes.arrow}>
                {Icon}
            </Typography> : null}
        </Box>
    )
}

export const Divider = () => {
    const classes = bodyStyles();
    return (<Typography component='span' className={classes.divider}></Typography>);
}

export const RenderSecionHeading = ({ smallText, heading, description, alignCenter }) => {
    const classes = bodyStyles();
    return (
        <Box className={classes.sectionHeadingContent}>
            {/*decorator*/}
            {Decorator({ label: smallText, widthIcon: false, styles: alignCenter ? { width: '100px', margin: '10px auto' } : {} })}
            {/*heading*/}
            <Typography variant='h4' align={alignCenter ? 'center' : 'left'} className={classes.sectionHeading}>{heading}</Typography>
            {/*line*/}
            {Divider()}
            {/*Descriptions*/}
            <Typography variant='body1' component='h6' align={alignCenter ? 'center' : 'left'} className={classes.sectionText}>{description}</Typography>
        </Box>
    );
};

export const CardMedia = ({label,Icon,description,key}) => {
    const classes = bodyStyles();
    return (
        <Grid container className={classes.MediaText} key={key} style={{marginTop:'10px'}}>
            <Grid item xs={3} className={classes.AvatarCont}>
                <Avatar className={classes.avatar}>
                    {Icon}
                </Avatar>
            </Grid>
            <Grid item xs={9}>
                <Typography variant='body1' component='h6'>{label}</Typography>
                <Typography variant='caption' component='h6'>{description}</Typography>
            </Grid>
        </Grid>
    );
}

