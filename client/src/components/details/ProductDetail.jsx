import { Typography, Box, Table, TableBody, TableRow, TableCell } from "@mui/material";

import {LocalOffer as Badge} from '@mui/icons-material';
import styled from "@emotion/styled";

const SmallText = styled(Box)`
font-size: 14px;
vertical-align: baseline; 
& > p{
    font-size:14px;
    margin-top: 10px; 

}`


const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;

`

const ColoumnText = styled(TableRow)`
font-size: 14px;
vertical-align: baseline; 

& > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
}`




const ProductDetail = ({product}) =>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date =new Date(new Date().getTime()+(5*24*60*60*1000));

    return(
    <> 
        <Typography>{product.title.longTitle} </Typography>
        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14}}> 
        8 Ratings & 1 Reviews
        <Box component="span"><img src={fassured} alt="fassured" style={{width: 77, marginLeft: 20}}/></Box>
        </Typography>
        <Typography style={{marginTop: 10}}>
        <Box component="span" style={{fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
        <Box component="span" style={{color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
        <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}Off</Box>
        </Typography>
        <Typography  style={{marginTop: 10}}>Available Offers</Typography>
        
        <SmallText>
            <Typography><StyledBadge/>10% Off up to ₹75 on ICICI Credit/Debit Card Transaction.*T&C</Typography>
            <Typography><StyledBadge/>Flat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000T&C</Typography>
            <Typography><StyledBadge/>Flat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000T&C</Typography>
            <Typography><StyledBadge/>No cost EMI ₹1,100/month. Standard EMI also available</Typography>
            <Typography><StyledBadge/>Special PriceGet extra ₹6000 off (price inclusive of cashback/coupon)T&C

            </Typography>
        </SmallText>
        <Table>
            <TableBody>
                <ColoumnText>
                    <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                </ColoumnText>
                <ColoumnText>
                    <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                 </ColoumnText>
                 <ColoumnText>
                    <TableCell style={{color:'#878787'}}>Seller</TableCell>
                    <TableCell>
                        <Box component="span"  style={{color: '#2874f0'}}>SuperComNet</Box>
                        <Typography>GST Invoice Available</Typography>
                        <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                 </ColoumnText>
                 <ColoumnText>
                    <TableCell colSpan={2}>
                    <img src={adURL} style={{width: 390}} alt="flipkartpoints" />
                    </TableCell>
                 </ColoumnText>
                 <ColoumnText>
                    <TableCell style={{color:'#878787'}}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                 </ColoumnText>
            </TableBody>
        </Table>
    </>    
    )
}

export default ProductDetail;