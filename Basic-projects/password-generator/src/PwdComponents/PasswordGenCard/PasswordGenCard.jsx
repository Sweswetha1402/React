import { useState } from "react";
import { PasswordGenBody } from "../PasswordGenBody/PasswordGenBody";
import { PasswordGenFooter } from "../PasswordGenFooter/PasswordGenFooter";
import { PasswordGenHeader } from "../PasswordGenHeader/PasswordGenHeader";
import s from "./style.module.css";
export function PasswordGenCard(props){
    const [Password,setPassword]=useState("Default");
    return <div className={s.root}>
        <div className={s.main}>
        <PasswordGenHeader/>
        <PasswordGenBody onSubmit ={setPassword}/>
        </div>
   
        <PasswordGenFooter Password={Password}/>
    </div>
}