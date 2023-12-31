 import { useEffect } from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { useParams } from "react-router-dom";
 import { getProductDetails } from "../../redux/actions/productActions";
 import { Box, Grid} from "@mui/material";
 import Actionitem from "./ActionItem";
import styled from "@emotion/styled";
import ProductDetail from "./ProductDetail";
import { createTheme } from "@mui/material"
const theme = createTheme();


 const Component = styled(Box)`
 background: #F2F2F2;
 margin-top: 55px`

 const Container = styled(Grid)(({theme}) => ({
  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    margin: 0
  }
 }))


 const RightContainer = styled(Grid)`
 margin-top: 50px`

  const Detailview = () =>{
    
    

    const dispatch = useDispatch();
    const { id } = useParams();  

    const {loading, product} = useSelector(state =>state.getProductDetails);
    useEffect(()=> {
      if(product && id !== product.id)
          dispatch(getProductDetails(id))
        

    }, [dispatch, id, product, loading ])
    return(
      <Component>{
     product && Object.keys(product).length &&
        <Container container theme={theme}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
          <Actionitem product={product}/>
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
           
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      }
      </Component>
        
      
    )
  }

  export default Detailview;