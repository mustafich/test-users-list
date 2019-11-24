import React from "react"
import {Route} from "react-router-dom";
import "./css/main.css"

const User = ({useId}) => {
if (useId === null) {
    return (
        <div className="loading">
            <h2>Загрузка</h2>
        </div>
    )
}

    return (
        <>
            <div className="mainText">
                <h2>Полная информация о пользователе:{useId.id}</h2>
            </div>
            <div className="user">
                <div className="user-block">
                    <div className="user-block_text">
                        <p>Имя: </p>
                        <p>{ useId.first_name}</p>
                    </div>
                    <div className="user-block_text">
                        <p>Фамилия: </p>
                        <p>{useId.last_name}</p>
                    </div>
                    <div className="user-block_text">
                        <p>Дата: </p>
                        <p>{useId.birth_date}</p>
                    </div>
                    <div className="user-block_text">
                        <p>Онлайн:true </p>
                        <p>{useId.is_active}</p>
                    </div>
                    <div className="user-block_text">
                        <p>Работа: </p>
                        <p>{useId.job}</p>
                    </div>
                    <div className="user-block_text">
                        <p>Пол:</p>
                        <p>{useId.gender}</p>
                    </div>

                        <Route key={useId.id} render={({history}) => (
                            <div className="user-block_buttSetting" onClick={() => {
                                    history.push(`/PageEditUser/${useId.id}`)}}>
                            <button>Настройка</button>
                            <i className="fa fa-cog fa-spin" aria-hidden="true"></i>
                            </div>
                        )}/>

                    <div className="user-block_buttDelete">
                        <button>Удалить</button>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </div>
                </div>
                </div>
        </>


    )
}

export default User