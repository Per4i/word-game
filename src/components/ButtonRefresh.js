import styles from "./ButtonRefresh.module.css"
const ButtonRefresh = () =>{
    return(
        <button className = {styles.button} onClick={() => window.location.reload()}>
            <div className = {styles.text}>Обновить слова</div>
        </button>
    )

}
export default ButtonRefresh;