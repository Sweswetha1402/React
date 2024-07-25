import { generatePassword } from "../../libs/password";
import s from "./style.module.css";
export function PasswordGenBody(props){
    const submit = (e) =>{
     e.preventDefault();
     let formData = {};
     console.log("Hello","submit");
     new FormData(e.currentTarget).forEach((value,key)=>{
          formData[key] = value;
     });
     console.log(formData);
     //let generatePass = "Generated password"
     props.onSubmit(generatePassword(formData));
    };
    return <form onSubmit={submit}>
        <div className={s.grid_container}>
        <div className={s.grid_item}>Size
            <select name="size" defaultValue={10}>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
            </select>
        </div>
        <div className={s.grid_item}>Uppercase 
            <input name="uppercase" type="checkbox" defaultChecked/>
        </div>
        <div className={s.grid_item}>Numbers 
            <input name="number" type="checkbox" defaultChecked/>
        </div>
        <div className={s.grid_item}>Special characters
            <input name="specialchar" type="checkbox" defaultChecked/>
        </div>
        <div className={s.btnGen_Container}>
        <button type="submit" className={s.btnGen}>Generate</button>
        </div>
    
        </div>
    </form>
}