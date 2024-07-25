import s from "./style.module.css";
import copyPasteIcon from "../../assets/copy-paste.svg";

export function PasswordGenFooter(props){
    const {Password} =props;
    const saveToClip = ()=>{
        navigator.clipboard.writeText(Password);
    }
    return <div  className={s.root} onClick={saveToClip}>
     {Password}
     <img className= {s.icon} src={copyPasteIcon} alt="Copy Paste image"></img>
    </div>
}
