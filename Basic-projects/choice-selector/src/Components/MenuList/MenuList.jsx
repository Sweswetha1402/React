import { MenuItems } from "../MenuItems/MenuItems";
import s from "./style.module.css";
export function MenuList(props){
    return<>
    <div className={s.container}>
    <MenuItems onClick={props.onMenuItemClick} isSelected={props.difficulty==="Low"} difficulty="Low"/>
    <MenuItems onClick={props.onMenuItemClick} isSelected={props.difficulty==="High"} difficulty="High"/>
    <MenuItems onClick={props.onMenuItemClick} isSelected={props.difficulty==="Very High"} difficulty="Very High"/>
    <MenuItems onClick={props.onMenuItemClick} isSelected={props.difficulty==="Insane"} difficulty="Insane"/>
    </div>
    </>
};