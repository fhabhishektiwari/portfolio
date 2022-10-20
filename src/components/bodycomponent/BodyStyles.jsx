import {makeStyles} from '@mui/styles'
import { Theme } from '../Theme'

export const bodyStyles= makeStyles((theme)=>({
    section:{
        backgroundColor:Theme.colors.base1,
        padding:'10px 8px !important',
    },
    divider:{
        width:'80px',
        height:'4px',
        backgroundColor:Theme.colors.primary,
    },
    responsiveImg:{
        width:'100%',
        height:'auto',
        // height:'250px',
        borderRadius:'8px',
        

    },
    sectionHeading:{
        color:Theme.colors.base2
    },
    sectionText:{
        color:Theme.colors.base2
    },
}))