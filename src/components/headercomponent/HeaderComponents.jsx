import { Box, Typography } from '@mui/material'
import { ArrowDownwardRounded } from '@mui/icons-material';
import React from 'react'
import { Decorator } from '../common/CommonComponent';
import { useStyles } from './HeaderStyles';
import { Navbar } from './Navbar';



export const HeaderComponents = () => {
    const classes = useStyles();
    return (
        <Box className={classes.HeaderWraper}>
            <Navbar/>
            <Box className={classes.HeaderContainer}>
                <Typography variant='h3' component='h4' className={classes.headerTitle}>I'm a FullStack Developer| </Typography>
                <Typography variant='h3' component='h4' className={classes.headerDesc}>I Create Website and Application, 
                <br/>Based on Your Needs... </Typography>
                {Decorator({label:'About me',widthIcon:true,Icon:<ArrowDownwardRounded/>})}
            </Box>
        </Box>
    )
}
