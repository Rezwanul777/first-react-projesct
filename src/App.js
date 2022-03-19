import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import Test from './Components/Test/Test';
import AllProducts from './Components/AllProducts/AllProducts';
import { useEffect, useState } from 'react';
import  AOS  from  "aos";
import "aos/dist/aos.css"


/* function App() {
  const count=()=>{
    console.log('i am prince');
  }
  
  return (
    <div className="App">
      
     <Test count={count}></Test>
    </div>
  );
} */


function App(){
  const[count,setCount]=useState(0)
  const setCartCount=()=>{
    setCount(count+1)
  }
  useEffect(()=>{
    AOS.init()
  },[])
  return(
    <div className='App'>
      <Menubar count={count}></Menubar>
      <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  )
}
export default App;
