import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material'
import { useStyles } from './HeaderStyles'
import { MenuOpenRounded } from '@mui/icons-material'
export const Navbar = () => {
    const classes = useStyles()
    const navlinks = [
        { labels: 'About', id: 'About' },
        { labels: 'Portfolio', id: 'Portfolio' },
        { labels: 'Contact', id: 'Contact' },
    ]
    return (
        <AppBar position="fixed" className={classes.Navbar}>
            <Toolbar className={classes.Toolbar}>
                <Typography variant="h5" component="h6" sx={{ flexGrow: 1 }}>
                    {"<πCoders>"}
                </Typography>
                <Box sx={{ display: { sm: 'none',xs:'none',md:'block' }}}>
                    <Box>
                        {
                            navlinks.map((item, index) =>
                                <Button key={index} className={classes.navlinks}>{item.labels}</Button>
                            )}
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton color='inherit'>
                            <MenuOpenRounded/>
                    </IconButton>
                </Box>


            </Toolbar>
        </AppBar>
    )
}
