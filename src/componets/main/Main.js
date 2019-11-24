import React from "react"
import {Route} from "react-router-dom";
import "./css/main.css"

const Main = ({allUser,UserId,fDeleteUser})=>{

let user = ""
    if (allUser===null) {
        return (
            <div className="loading">
                <h2>Загрузка</h2>
            </div>
        )
    } else {
        user = allUser.map((user)=>{
            return (
                <Route key={user.id} render={({history}) => (
                    <tbody onClick={(event) => {
                        if (event.target.tagName !== "I" ) {
                            history.push(`/PageUser/${user.id}`)
                            UserId(user.id)
                        }
                    }
                    }>
                        <tr>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.birth_date}</td>
                            <td>{user.gender}</td>
                            <td onClick={()=>fDeleteUser(user.id)}><i className="fa fa-trash-o" aria-hidden="true"></i></td>
                        </tr>
                        </tbody>
                )}/>
            )
        })
    }




    return (
        <>
        <div className="mainText">
        <h2>Все пользователи</h2>
        </div>
        <div className="table">
            <table className="responstable">
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Дата рождения</th>
                    <th>Пол</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                {user}
            </table>

        </div>
            <div className="creater">
            <Route render={({history}) => (
                <button className="creater-butt" onClick={() => {
                    history.push(`/PageCreaterUser`)
                }
                }>
                    Создать
                </button>
            )}/>
            </div>
            </>

    )
}

export default Main