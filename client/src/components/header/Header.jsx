
import { AppBar, Toolbar, Typography, styled, Box, Drawer, List, ListItem, IconButton} from "@mui/material";
import Search from "./Search";
import Custombuttons from "./Custombuttons";
import { Menu } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { createTheme } from "@mui/material"
import { useState } from "react";
const theme = createTheme();
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px`

const Component = styled(Link)`
margin-left: 5%;
margin-right: 3%;
line-height: 0;
text-decoration: none;
color: inherit
`
const Subheading = styled(Typography)`
font-size: 10px;
font-style: italic;`

const Plusimage = styled('img')({
    width:10,
    height: 10,
    marginLeft: 4,
})

const Custombuttonwrapper =styled(Box)(({theme}) => ({
    margin: '0 0 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }

}))


const MenuButton = styled(IconButton)(({theme}) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))



const Header = () =>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(true);

    }

    const handleClose = () =>{
        setOpen(false);

    }

    const list = () =>(
        <Box style={{width: 200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <Custombuttons />
                </ListItem>
            </List>
        </Box>
    )

    return(
        <StyledHeader>
            <Toolbar style={{minHeight: 55}}>
            <MenuButton color= 'inherit' theme={theme} onClick={handleOpen}>
                <Menu />
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
                {list()}
            
            </Drawer>
                <Component to='/'>
                 <img src={logoURL} alt="logo" style={{ width: 75}}/>
                 <Box style={{display: "flex"}}>
                 <Subheading>Explore <Box component="span" style={{color: '#FFE500'}}>Plus</Box></Subheading>
                 <Plusimage src={subURL} alt="sublogo" /> 
                 </Box>
                 </Component>
                    <Search />
                <Custombuttonwrapper theme={theme}>
                <Custombuttons />
                </Custombuttonwrapper>
                 </Toolbar>
        </StyledHeader>
    
    );
}
export default Header;