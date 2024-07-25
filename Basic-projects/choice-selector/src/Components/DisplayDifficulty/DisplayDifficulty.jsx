import s from "./style.module.css"
export function DisplayDifficulty(props){
    return<>
    <div className={s.container}>Set Difficulty : {props.Difficulty?props.Difficulty:"No difficulty set"}</div>
    </>
}