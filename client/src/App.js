
import { Box } from '@mui/material';

import Header from './components/header/Header';
import Home from './components/Home/Home';

import Detailview from './components/details/DetailView';
import Cart from './components/cart/Cart';
import Dataprovider from './context/data-provider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Dataprovider>
    <BrowserRouter>
     <Header />
     <Box style={{marginTop: 54}}>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/product/:id' element={<Detailview />} /> 
     <Route path='/cart' element= {<Cart />} /> 
     </Routes>
     </Box>
     </BrowserRouter>
    </Dataprovider>
  );
}

export default App;
