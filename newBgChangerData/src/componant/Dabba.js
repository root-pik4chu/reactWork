import React, { useState } from 'react'

function Dabba() {

  // const number;
  let [number , setNumber] = useState(1378966);

  let [color , setcolor] = useState("#212121");
  function black(){
    setcolor("black");
  }
  function red(){
    setcolor("red");
  }
  function blue(){
    setcolor("blue");
  }
  function green(){
    setcolor("green");
  }
  function lavindor(){
    setcolor("lavender");
  }
  function pink(){
    setcolor("pink");
  }
  function yellow(){
    setcolor("yellow");
  }
 function increment() {
  alert("this is tap")
  setNumber( ++number)
 }
    // setNumber(
    //   number++
    // );
    // document.querySelector(".lahanDabba").addEventListener("click",(dets)=>{
    //   document.querySelector(".lahanDabba").textContent = "x"
    //   console.log(dets);
    // })


    
    
  return (
    // const numebr;
    // const [ numebr , setNumber ] = useState(0);
    <>
        <div className='page1 flex items-center justify-center'>
            <div className='dabba flex items-end justify-center  h-[80vh] w-[80%] border-[5px] rounded-2xl'
              style={{background:color}}
            >
                  {/* <h3>this is dabba {color}</h3> */}
                  <button 
                  onClick={
                    // increment
                    black
                  } 
                  className=' text-white p-6 border-[4px] bg-slate-900 m-2 rounded-xl h-[20px]'>black
                  </button>
                  <button 
                  onClick={
                    // increment
                    red
                  } 
                  className=' text-white p-6 border-[4px] bg-red-600 m-2 rounded-xl h-[20px]'>red
                  </button>
                  
                  <button 
                  onClick={
                    // increment
                    blue
                  } 
                  className=' text-white p-6 border-[4px] bg-blue-500 m-2 rounded-xl h-[20px]'>blue
                  </button>
                  
                  <button 
                  onClick={
                    // increment
                    green
                  } 
                  className=' text-white p-6 border-[4px] bg-green-500 m-2 rounded-xl h-[20px]'>green
                  </button>
                  
                  <button 
                  onClick={
                    // increment
                    yellow
                  } 
                  className=' text-white p-6 border-[4px] bg-yellow-500 m-2 rounded-xl h-[20px]'>yellow
                  </button>
                  
                  <button 
                  onClick={
                    // increment
                    lavindor
                  } 
                  className=' text-white p-6 border-[4px] bg-purple-300 m-2 rounded-xl h-[20px]'>lavinder
                  </button>
                  <button 
                  onClick={
                    // increment
                    pink
                  } 
                  className=' text-white p-6 border-[4px] bg-pink-500 m-2 rounded-xl h-[20px]'>pink
                  </button>
            </div>
            
        </div>
    </>
  )
}
export default Dabba;




