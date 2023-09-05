import { Grid, Typography, Box, Button } from "@mui/material";
import { useSelector } from "react-redux";

import CartItem from "./CartItems";
import TotalView from "./TotalView";
import styled from "@emotion/styled";
import EmptyCart from "./EmptyCart";
import { createTheme } from "@mui/material"
const theme = createTheme();
const Container = styled(Grid)(({theme}) =>({
    padding: '30px 135px',
    [theme.breakpoints.down("md")]:{
        padding: '15px 0'
    }

}))

const Header = styled(Box)`
padding: 15px 24px;
background: #fff;
font-weight: 600;` 

const ButtonWrapper = styled(Box)`
padding: 16px 22px;
background: #fff;
box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
bborder-top: 1px solid #f0f0f0;
`

const StyledButton = styled(Button)`
display: flex;
margin-left: auto;
background: #fb641b;
color: #fff;
width: 250px;
height: 51px;
border-radius: 2px;
`;

const LeftComponent = styled(Grid)(({theme}) =>({
    paddingRight: '15px',
    [theme.breakpoints.down("md")]: {
        marginBottom: 15,
    }
}))

const Cart = () => {

   const {cartItems } = useSelector(state => state.cart);   


    return(
        <>
            {
                cartItems.length ?
                <Container container theme={theme}>
                    <LeftComponent theme={theme} item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart({cartItems.length})</Typography>
                        </Header>
                        {cartItems.map(item => (
                             <CartItem item={item} />
                        ))}
                        <ButtonWrapper>
                            <StyledButton>Place Order</StyledButton>
                        </ButtonWrapper> 
                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems} />
                    </Grid>

                </Container>
                :<EmptyCart />
            }
        
        </>
    )
}

export default Cart;