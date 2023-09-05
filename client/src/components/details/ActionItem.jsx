import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartaction";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
import { createTheme } from "@mui/material";
import { useState } from "react";
const theme = createTheme();

const LeftContainer = styled(Box)(({theme}) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding:'20px 40px'
    }
}))



const Image = styled('img')({
    padding: '15px'
});

const Stylebutton = styled(Button)(({theme}) => ({
    width: '48%',
    height: '50px',
    borderRadius: 2,
    [theme.breakpoints.down('lg')]: {
        width:'46%'
    },
    [theme.breakpoints.down('sm')]: {
        width:'48%'
    }

}))

const Actionitem = ({ product }) =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () =>{
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const buyNow = async () =>{
      let response = await payUsingPaytm({amount: 500, email: 'lovesingh161998@gmail.com'});
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }

    return(
            <LeftContainer theme={theme}>
            <Box style={{ padding: '15px 18px',width: '90%'}}>
                <Image src={product.detailUrl} alt="productimg" />
            </Box>   
                <Stylebutton variant="contained" onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00', marginTop: 5}} theme={theme}><Cart />Add To Cart</Stylebutton>
                <Stylebutton variant="contained"  style={{background: '#fb541b', marginTop: 5}} theme={theme}><Flash />Buy Now</Stylebutton>
            </LeftContainer> 
  )
}

export default Actionitem;