import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
const Searchcontainer = styled(Box)`
background: #fff;
width: 45%;
border-radius: 2px;
margin-left: 0px;
display: flex;
`;
const Inputsearchbase = styled(InputBase)`
padding-left: 20px;
width: 100%;
font-size: unset;
`;

const Searchicon = styled(Box)`
color: blue;
margin-top: 2px;
display: flex;`;

const ListWrapper = styled(List)`
position: absolute;
background: #FFFFFF;
color: #000;
margin-top: 36px;`

const Search = () => {

    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getProducts())
    },[dispatch])

    const getText = (text) =>{
        setText(text);
    }

    return(
        <Searchcontainer>
        <Inputsearchbase placeholder="Search for products, brands and more" 
        onChange={(e) => getText(e.target.value)}
        value={text}/>
        <Searchicon>
            <SearchIcon />
        </Searchicon>

        {
            text &&
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                <Link
                                to={`/product/${product.id}`}
                                onClick={() =>setText('')}
                                style={{textDecoration: 'none', color: 'inherit'}}>
                                    {product.title.longTitle}
                                </Link>  
                                </ListItem>
                        ))
                    }
                </ListWrapper>
        }
        </Searchcontainer>
    );
}

export default Search;