// import './App.css';
// import H from './comp/H.jsx'
// function App() {
//   return (
//     <div className="App">

// {/* // this is to send props name ka props bheja jyga  */}
// <H name="This is to send props"/>

// <H name="Doosra props bheja dono print honge"/>

// <H name="wasi" age={19}/>

//     </div>
//   );
// }

// export default App;





//_______________________________________________________________________________-
import { useState } from 'react';
import './App.css';
import H from './comp/H.jsx'
import playbutton from './comp/playbutton';
// import React,{ useState } from 'react';
//thats how we import use state


function App() {


  function inc()
  {
setnum(num+1) ; //  usestate ke andar ki value badh jygi
  }
  function dec(){
    setnum(num-1) ; //  usestate ke andar ki value ghat jyg    
      }
    


const [num,setnum]=useState(0);// 1 ki jagah kch b rakhdo wohi display ho jyga







  return (
    <div className="App">

<H/>
  

<h1  className="heading " >{num}</h1>
{/* num likha to 1 aagaya jo ki initial value thi */}


    <div className="main">
      {/* <button className='btn' onClick={inc}>Increment</button>
      <button className='btn' onClick={dec}>Decrement</button> */}

   {/* inc()  ya dec ()  is tarah se pass nahi kar saskte hai error aajyga  */}
{/* so if you have to pass a parameter always use a callback function  ie ()=>inc() */}

{/* <button className='btn' onClick={inc}>Increment</button>
      <button className='btn' onClick={dec}>Decrement</button> */}


      <button className='btn' onClick={()=>dec()}>Decrement</button>
      <button className='btn' onClick={()=>inc()}>Increment</button>


{/* agar increment ya decrement by n karna hai to parameter pass kardenge inme hi  */}

<playbutton/>
    </div>

    </div>
  );
}

export default App;
