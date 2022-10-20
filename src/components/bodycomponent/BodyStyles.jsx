import {makeStyles} from '@mui/styles'
import { Theme } from '../Theme'

export const bodyStyles= makeStyles((theme)=>({
    section:{
        backgroundColor:Theme.colors.base1,
        padding:'100px 8px !important',
    },
    divider:{
        width:'80px',
        height:'4px',
        backgroundColor:Theme.colors.primary,
        margin:'8px 0px !important'
    },
    responsiveImg:{
        width:'100%',
        height:'auto',
        // height:'250px',
        borderRadius:'8px',
    },
    sectionHeadingContent:{
        padding:'12px',
        color:Theme.colors.base2
    },
    sectionHeading:{
        margin:'8px 0px !important'
    },
    sectionText:{
        // color:Theme.colors.base2
    },
    AvatarCont:{
        display:'flex',
        flexFlow:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    avatar:{
        color:Theme.colors.base2,
        backgroundColor:Theme.colors.primary,
    },
    MediaText:{
        color:Theme.colors.base2
    },


}))