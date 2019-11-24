import React from "react"
import "./css/header.css"
import {Route} from "react-router-dom";


const Header = ()=>{
    return (
        <div className="header">
                <Route  render={({history}) => (
                    <div className="header-block" onClick={() => {
                        history.push(`/`)}}>
                    <h2>Главная</h2>
                        <h1>Тестовое задание “Список пользователей”</h1>
                    </div>
                )}/>


        </div>
    )

}
export default Header