import { Box, Typography, createTheme } from "@mui/material";
import { navData } from "../../constants/Data";
import styled from "@emotion/styled";
const theme = createTheme();
const Component = styled(Box)(({theme}) =>({
display: 'flex',
margin: '65px 80px 0 80px',
justifyContent: 'space-between',
overflow: 'hidden',
[theme.breakpoints.down('lg')]:{
    margin:0,
}
}));
const Container = styled(Box)`
padding: 12px 8px;
text-align: center;`

const Text = styled(Typography)`
font-sze: 14px;
font-weight: 600;
font-family: inherit;
`
const Navbar = () =>{
    return(
    <Box style={{background: '#fff'}}>  
        <Component theme={theme}>
        {
            navData.map(Data =>(
                <Container>
                    <img style={{width: 64}} src={Data.url} alt="nav" />
                    <Text>{Data.text}</Text>
                </Container>
            ))
        }
        </Component>
        </Box>      
    );
}
export default Navbar;