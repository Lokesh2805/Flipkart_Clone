import { useState, useContext } from "react";
import styled from "@emotion/styled";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import { authenticationSignup, authenticationLogin } from "../../service/api";
import { DataContext } from "../../context/data-provider";
const Component = styled(Box)`
 height:70vh;
 width:90vh;

`

const Image = styled(Box)`
 background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
 height: 86%;
 width: 34%;
 padding: 35px 10px;
`

const Wrapper = styled(Box)`
display: flex;
flex-direction: column;
padding: 25px 35px;
flex: 1;
& > div, & > button, & > p{
    margin-top: 20px;
}

`

const Loginbutton = styled(Button)`
text-transform: none;
background: #FB641B;
color: white;
height: 48px;
border-radius: 3px;
`

const Text = styled(Typography)`
font-size: 12px;
color: #878787;
`

const Createaccount = styled(Typography)`
font-size: 14px;
text-align: center;
color: #2874f0;
font-weight:600;
cursor: pointer;
`
const signupInitialvalues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const logininitialvalues = {
    username:'',
    password:''
}

const accountinitialValues = {
    login: {
        view: 'login',
        heading:"Login",
        subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup', 
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}
const Logindilag = ({open, setOpen}) => {

 const [account, toggleAccount] = useState(accountinitialValues.login);
 const [signup, setSignup] = useState(signupInitialvalues);   
 const [login, setLogin] = useState(logininitialvalues);
 const [error, setError] = useState(false);
 const { setAccount } = useContext(DataContext);
    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountinitialValues.login);
        setError(false);
    }
    const togglesignup = () =>{
        toggleAccount(accountinitialValues.signup);
    }

const onInputChange = (e) => {
   setSignup({...signup, [e.target.name]:e.target.value});
    
}    
 const signupUser = async () =>{
    let response = await authenticationSignup(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.firstname);
 }

 const onValuechange= (e) =>{
    setLogin({ ...login, [e.target.name]: e.target.value});
 }

 const loginUser= async () =>{
   let response = await authenticationLogin(login);
   if(response.status === 200){
    handleClose();
    setAccount(response.data.data.firstname);
   }else{
    setError(true);
   }
 }
    return(
        <Dialog  open={open} onClose={handleClose} PaperProps={{sx:{maxWidth: 'unset'}}}>
            <Component>
            <Box style={{display: 'flex', height:'100%'}}>
                <Image>
                <Typography variant="h5" style={{ color: 'white', fontWeight: '600'}} >{account.heading}</Typography>
                <Typography style={{marginTop: 20,fontWeight: '600', color: 'white'}}>{account.subHeading}</Typography>
                </Image>
                {account.view === 'login' ?
                <Wrapper>
                 <TextField  variant="standard" onChange={(e) =>onValuechange(e)} name="username" label="Enter Username"/>
                 {error && <Typography style={{color: 'red', fontSize:'10px', fontWeight: '600'}}>Please enter valid username or password</Typography> }
                 <TextField  variant="standard" onChange={(e) =>onValuechange(e)} name="password" label="Enter Password"/>
                 <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                 <Loginbutton onClick={() => loginUser()}>Login</Loginbutton>
                 <Typography style={{textAlign: 'center'}}>OR</Typography>
                 <Loginbutton>Request OTP</Loginbutton>
                 <Createaccount onClick= { () => togglesignup()}>New to Flipkart? Create an account</Createaccount>
                 </Wrapper>
                 :
                 <Wrapper>
                 <TextField  variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter First Name"/>
                 <TextField  variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Last Name"/>
                 <TextField  variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter Username"/>
                 <TextField  variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter Email"/>
                 <TextField  variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password"/>
                 <TextField  variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone No."/>
                 <Loginbutton onClick={()=>signupUser()}>Continue</Loginbutton>
                 
                 </Wrapper>
                }
            </Box>    
            </Component>
        </Dialog>
    )
}

export default Logindilag;