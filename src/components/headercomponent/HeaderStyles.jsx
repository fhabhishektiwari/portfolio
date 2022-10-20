import { makeStyles } from '@mui/styles'
import { Theme } from '../Theme'
import Image from '../../images/brandbanner.jpg'
export const useStyles=makeStyles((theme)=>({
    HeaderWraper:{
        width:'100%',
        minHeight:'100vh',
        height:'auto',
        // backgroundColor:Theme.colors.base1,
        backgroundImage:`linear-gradient(to bottom right,#04303140,#00606473),url(${Image})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover'
    },
    HeaderContainer:{
        width:'80%',
        minHeight:'90vh',
        height:'auto',
        padding:'20px',
        display:'flex',
        flexFlow:'column wrap',
        justifyContent:'center',
        color:Theme.colors.base2
        // alignItems:'center'
    },
    headerTitle:{
        fontSize:'3rem !important',
        margin:'8px 0 !important'
    },
    headerDesc:{
        fontSize:'1.2rem !important',

    },
    Navbar:{
        backgroundColor:Theme.colors.base1,
        color:Theme.colors.base2
    },
    Toolbar:{
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-between'
    },

    // navlinks
    navlinks:{
        color:Theme.colors.base2
    },

    // decorator
    decorator:{
        display:'flex',
        fontWeight:'bolder',
        fontFamily:'roboto',
        marginTop:'20px',
        position:'relative',
        textTransform:'capitalize',
        '&:before':{
            width:'40px',
            height:'40px',
            backgroundColor:Theme.colors.primary,
            content:'""',
            borderRadius:'50%',
        }
    },
    decoratorText:{
        // display:'block',
        position:'absolute',
        lineHeight:'40px',
        left:'20px'
    },
    arrow:{
        position:'absolute',
        lineHeight:'52px',
        left:'90px',
        animationName:'upDown',
        animationDuration:'0.8s',
        animationIterationCount:'infinite',
    },

    // creating the animations
    '@global':{
        '@keyframes upDown':{
            "0%":{
                paddingTop:'0px',
                transform:"scale(1)"
            },
            "100%":{
                paddingTop:'10px',
                transform:"scale(1,2)"
            }
        }
    },
    "@media (max-width: 600px)":{
        headerTitle:{
            fontSize:'2rem !important',
        },
        headerDesc:{
            fontSize:'1rem !important',
    
        },
    }
}))