import { Box, createTheme } from "@mui/material"
import Slide from "./Slide";
import styled from "@emotion/styled";
const theme = createTheme();
const Component = styled(Box)`
display: flex;
`
const Leftcomponent = styled(Box)(({theme}) =>({
width: '83%',
[theme.breakpoints.down('md')]: {
width:'100%'},
}));

const Rightcomponent = styled(Box)(({ theme }) =>({
background: '#FFFFFF',
padding: 5,
marginTop: 10,
marginLeft: 10,
width: '17%',
textlign: 'center',
[theme.breakpoints.down('md')]: {
    display:'none'
},
}));
const Midslide = ({products, title, timer}) =>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return(
        <Component>
            <Leftcomponent theme={theme}>
            <Slide products = {products} title={title} timer={true} />

            
            </Leftcomponent>
            <Rightcomponent theme={theme}>
            <img src={adURL} alt="ad" style={{width: 217}} />
            
            </Rightcomponent>
        </Component>


    )
}

export default Midslide;