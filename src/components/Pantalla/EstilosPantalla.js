import { makeStyles } from "@mui/styles";



const Styles=makeStyles({
    pantallaOff:{
        width: '90%',
        margin: 'auto',
        height: '80px',
        borderRadius: '10px',
        background: 'rgb(44,44,44)',
        marginTop: '30px !important',
        marginBottom: '80px !important',
        display: 'flex',
        justifyContent:'flex-end',
        alignItems: 'center',
        paddingRight: '10px',
        fontWeight: 'bold',
        fontSize: '18px'
    },
    pantallaOn:{
        width: '90%',
        margin: 'auto',
        height: '80px',
        borderRadius: '10px',
        background: 'rgb(255,255,255) !important',
        marginTop: '30px !important',
        marginBottom: '80px !important',
        display: 'flex',
        justifyContent:'flex-end',
        alignItems: 'center',
        paddingRight: '10px',
        fontWeight: 'bold',
        fontSize: '26px'
    }
})


export default Styles;