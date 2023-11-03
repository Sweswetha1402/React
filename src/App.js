import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

export function App() {
    const [currentstatus, setCurrentstatus]=useState(0);
    function leftClick(){
       setCurrentstatus(currentstatus==0?images.length-1:currentstatus-1);
    };
    function rightClick(){
        setCurrentstatus(currentstatus==images.length-1?0:currentstatus+1);
     };

  return (
    <div style={{background: 'grey'}}>
    <h1 style={{ textAlign: 'center'}}>Image Scroller</h1>
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <button style={{ textAlign: 'center', color: 'Black', height: 100, width: 200, background: 'green', fontSize: 30, fontFamily: 'cursive'}} onClick={leftClick}>Left Click</button>
        <button style={{ textAlign: 'center', color: 'Black', height: 100, width: 200, background: 'green', fontSize: 30, fontFamily: 'cursive'}} onClick={rightClick}>Right Click</button>
    </div>
        {
            images.map((image,index) => currentstatus===index && (
                <div key={image}> 
                         <img style={{alignItems: 'center', height: 300, width: 300, marginTop: 75, marginLeft: 610}}  src={image} title="Image Scroller"></img>
                </div>
               
            ))
            }

    </div>
  )
}