import { useState } from "react"
import s from "./style.module.css"
export function MenuItems(props){
    const [isHovered,setisHovered] = useState(false)
    const activate = () =>{
        setisHovered(true)
    };
    const dectivate = () =>{
        setisHovered(false)
    };
    const getBG =()=>{
        if (isHovered){
            return "#BBF5A7";
        }else{
            if (props.isSelected){
                return "#48DE14 "
            }
            return "#ffffff";
        }
    };
    const onItemClick = () =>{
        props.onClick(props.difficulty);
    };
    return<>
    <div className={s.container} onClick={onItemClick} onMouseEnter={activate} onMouseLeave={dectivate} style={{background: getBG()}}>Set Difficulty Level : {props.difficulty} </div>
    </>
};