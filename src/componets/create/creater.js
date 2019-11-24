import React from "react"
import "./css/creater.css"
import {addUserApi} from "../../api/api";

export default class Creater extends React.Component {

    state = {
        fields: {
            first_name: "",
            last_name: "",
            birth_date: "",
            gender: "",
            job: "",
            biography: "",
            is_active: false,

        },
        isValid: false
    }

    handleChange = (validCount) => (event) => {
        if (event.target.type === "text" || event.target.type === "textarea") {
            this.setState({
                isValid: false
            })
            if (event.target.value.length <= validCount) {
                console.log(this.state.fields)
                this.setState({
                    fields: {
                        ...this.state.fields,
                        [event.target.name]: event.target.value
                    }
                }, (e) => {
                    console.log(e)
                });
            }
        }
        if (event.target.type === 'select-one') {
            this.setState({
                isValid: false
            })
            this.setState({
                fields: {
                    ...this.state.fields,
                    [event.target.name]: event.target.value
                }
            }, () => {
                console.log(this.state.fields)
            });
        }
        if (event.target.type === 'checkbox') {
            this.setState({
                isValid: false
            })
            this.setState({
                fields: {
                    ...this.state.fields,
                    [event.target.name]: event.target.checked
                }
            }, () => {
                console.log(this.state.fields)
            });
        }
    }


    editF(state) {
        console.log(this.state.fields.first_name && this.state.fields.last_name && this.state.fields.biography && this.state.fields.job)
        if (this.state.fields.first_name && this.state.fields.last_name && this.state.fields.biography && this.state.fields.job) {
            addUserApi.add(state)
            window.location.href = "http://localhost:3000/"
        }
        this.setState({
            isValid: true
        })


    }

    render() {

        if (this.props.user === "") {
            return (
                <div className="loading">
                    <h2>Загрузка</h2>
                </div>
            )
        }
        return (
            <div>
                <div className="mainText">
                    <h2>Создать пользователя:{this.state.userId}</h2>
                </div>
                <div className="edit">
                    <div className="edit-block">
                        <div className="edit-block_text">
                            <p>Имя:</p>
                            <input  name='first_name' onChange={this.handleChange(10)} type="text"
                                   value={this.state.first_name} required/>
                        </div>
                        <div className="edit-block_text">
                            <p>Фамиля:</p>
                            <input name='last_name' onChange={this.handleChange(256)} type="text"
                                   value={this.state.last_name} required/>
                        </div>
                        <div className="edit-block_text">
                            <p>Дата:</p>
                            <input name='birth_date' onChange={this.handleChange(256)} type="text"
                                   value={this.state.birth_date} required/>
                        </div>
                        <div className="edit-block_text">
                            <p>Пол:</p>
                            <select defaultValue={this.state.gender} required onChange={this.handleChange()}
                                    name="gender">
                                <option value="selected">Выберите пол</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className="edit-block_text">
                            <p>Работа:</p>
                            <input required name="job" onChange={this.handleChange(256)} type="text"
                                   value={this.state.job}/>
                        </div>
                        <div className="edit-block_text">
                            <p>Биография:</p>
                            <textarea required name='biography' onChange={this.handleChange(256)} rows="1"
                                      value={this.state.biography} cols="25"></textarea>
                        </div>
                        <div className="edit-block_text">
                            <p>Онлайн:</p>
                            <label>
                                <input required
                                       name='is_active'
                                       type="checkbox"
                                       checked={this.state.is_active}
                                       onChange={this.handleChange()}/>
                            </label>
                        </div>
                        {this.state.isValid && <div>заполните все необходимые поля</div>}

                        <div className="edit-block_text">
                            <button onClick={() => {
                                this.editF(this.state.fields)
                            }}>
                                Создать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}







