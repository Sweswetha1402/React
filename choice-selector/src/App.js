import { DisplayDifficulty } from "./Components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./Components/MenuList/MenuList";
import { useState } from "react";
import s from "./style.module.css";
export function App(){
   const [currentDifficulty, setcurrentDifficulty]=useState("")
   const onMenuItemClick = (Difficulty) =>{
    setcurrentDifficulty(Difficulty)
   };
   return<>
   <h1 style={{textAlign: "center"}}>Select Choice </h1>
   <div className={s.front}>
   <MenuList 
    difficulty = {currentDifficulty}
    onMenuItemClick={onMenuItemClick}
   />
   <DisplayDifficulty Difficulty={currentDifficulty}/>
   </div>
   </>
};