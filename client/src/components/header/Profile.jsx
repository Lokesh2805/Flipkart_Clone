import styled from "@emotion/styled";
import { Typography, Box, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

const Component = styled(Menu)`
margin-top: 5px;`

const Profile = ({account, setAccount}) => {

const[open, setOpen] = useState(false);

const handleClick = (event) =>{
    setOpen(event.currentTarget);
}

const handleClose = () =>{
    setOpen(false);
}

const Logout = () => {
    setAccount('');
}

    return(
        <>
         <Box onClick={handleClick}><Typography style={{marginTop: 2, cursor: "pointer"}}>{account}</Typography></Box> 
         <Component
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
           
        >
            
            <MenuItem onClick={() =>{handleClose(); Logout();}}>
            <LogoutIcon fontSize="small"/>
            <Typography style={{marginLeft:'10px', fontSize:'14px'}}>Logout</Typography></MenuItem>
           
      </Component>   
        </>
    )


}

export default Profile;