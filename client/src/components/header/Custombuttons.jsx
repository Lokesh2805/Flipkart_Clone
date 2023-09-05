import { useState, useContext } from "react";
import { Badge, Box, Button, Typography } from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import styled from "@emotion/styled";
import { DataContext } from "../../context/data-provider";
import Logindilag from "../login/Logindialogue";
import Profile from "./Profile";
import { useSelector } from "react-redux";

import { createTheme } from "@mui/material"
import { Link } from "react-router-dom";
const theme = createTheme();

const Wrapper = styled(Box)(({theme}) =>({
    display: 'flex',
margin: '0 3% 0 auto',
    '& > *': {
    marginRight: '40px !important',
    textDecoration: 'none',
    fontSize: '16px',
    alignItems: 'center',
} ,
[theme.breakpoints.down('sm')]: {
    display: 'block'
}
}));


const Container = styled(Link)(({theme}) =>({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));


const Loginbutton = styled(Button)`
background: #FFFFFF;
color: #2874f0;
text-transform: none;
padding: 5px 40px;
border-radius: 3px;
box-shadow: none;
font-weight: 600;
height: 32px;`

const Custombuttons = () => {
const [open, setOpen] = useState(false);

const { account, setAccount } = useContext(DataContext);

    const {cartItems} = useSelector(state => state.cart);

    const openDialog = ()=> {
        setOpen(true);
    }
    return(
        <Wrapper theme={theme}>
        {
            account ? <Profile account={account} setAccount={setAccount} />:
            <Loginbutton varient="contained" onClick={()=> openDialog()}>Login</Loginbutton>

        }
        <Typography style={{marginTop: 3, width:135}}>Become a seller</Typography>
        <Typography style={{marginTop: 3}}>More</Typography>
        <Container theme={theme} to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon />
            </Badge>
            <Typography style={{marginLeft: 10}}>Cart</Typography>
        </Container>
        <Logindilag open = {open} setOpen = {setOpen}/>
        </Wrapper>
    );
}
export default Custombuttons;