import { Fragment, useEffect } from "react";
import Banner from "./Banners";
import Navbar from "./Navbar";


import { Box, styled} from "@mui/material";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import Midslide from "./MidSlide";
import Midsection from "./MidSection";
const Container = styled(Box)`
padding: 10px 10px;
background: #F2F2F2; `

const Home = () =>{
    const { products } = useSelector(state => state.getProducts)
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getProducts())
    }, [dispatch])

    return(
        <Fragment>
        <Navbar />
        <Container>
        <Banner /> 
        <Midslide products = {products} title="Deal of the Day" timer={true} />
        <Midsection />
        <Slide products = {products} title="Discounts for You" timer={false}/>
        <Slide products = {products} title="Suggested Items" timer={false}/>
        <Slide products = {products} title="Top Selections" timer={false}/>
        <Slide products = {products} title="Recommended Items" timer={false}/>
        <Slide products = {products} title="Trendind Offers" timer={false}/>
        <Slide products = {products} title="Season's Top Picks" timer={false}/>
        <Slide products = {products} title="Top Deals on Accessories" timer={false}/>
        
        </Container>
        </Fragment>
    );
}
export default Home;