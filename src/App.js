import logo from './logo.svg';
import './App.css';
// import Todo from './Componenet/Todo';
import API from './Componenet/API';
import Timer from './Componenet/Timer';
import Usermanagement from './Componenet/Usermangement';
import Mount from './Componenet/Mount';
import APIF from './Componenet/APIF';
import Title from './Componenet/Title';
import TodoREF from './Componenet/TodoREF';
import Card12 from './Componenet/Card12';
import Color from './Componenet/Color';
import Render from './Componenet/Render';
import { FormValidation } from './Componenet/FormValidation';
import WPM from './Componenet/WPM';
import Demo from './Componenet/Demo'
import { useState } from 'react';
import MountUnm from './Componenet/Table';
import Table from './Componenet/Table';
import Card from './Componenet/Card';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Componenet/Nav';
import Pro from './Componenet/Pro';
import Child1 from './Componenet/Child1';
import Home from './Componenet/Home';
import Capi from './Componenet/Capi';
import Product from './Product';
import ProductDetail from './Componenet/ProductDetail'
import HomeP from './Componenet/HomeP';
import HomeDetail from './Componenet/HomeDetail';
import HomeCat from './Componenet/HomeCat';
import AAA from './Componenet/AAA';
import Sign from './Componenet/Sign';
import Counter from './Componenet/Counter/Counter';
import Display from './Componenet/Counter/Display';
// import Display from './Componenet/Redux/Display';
// import Todo from './Componenet/Redux/Todo';



function App() {
  // const[loading,setLoading]=useState(true)
  // const [showCard, setShowCard] = useState(true);
  //     const [show,setshow]=useState(false)


  return (
    <div>

      {/* <Home/> */}
      {/* <Capi/> */}
      {/* <Todo/> */}
      {/* <API/> */}
      {/* <Timer/> */}
      {/* <Usermanagement/> */}
      {/* <Title/> */}
      {/* <TodoREF/> */}
      {/* <Mount/> */}
      {/* <APIF/> */}
      {/* <Card/> */}
      {/* <Color/> */}
      {/* <Render/> */}
      {/* <FormValidation/> */}
      {/* <WPM/> */}
      {/* <Demo/> */}
      {/* <MountUnm/> */}
      {/* <Card/> */}
      {/* <Card12/> */}
      {/* <Table/> */}

      {/* { show ? <Card/> :<Table/>}

      <button onClick={()=>setshow(true)}> card</button>
            <button onClick={()=>setshow(false)}>table</button> */}

      {/* <Nav />  */}

      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/API" element={<API />}/>
        <Route path="/Card12" element={<Card12 />}/>
        <Route path="/Product" element={<Product />}/>
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      </Routes> */}

      {/* <Product/> */}
      {/* <HomeP/> */}

      {/* <Routes>
        <Route path="/" element={<HomeP />} />
        <Route path="/:category/:id" element={<HomeDetail />} />
        <Route path="/:category" element={<HomeCat />} />
        </Routes> */}


      {/* <HomeDetail/> */}

      {/* <AAA/> */}

      <Sign />
      {/* <Todo/>
      <Display/> */}
      {/* <Display/>
      <Counter/> */}


    </div>
  );
}

export default App;