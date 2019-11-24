import React from "react"
import User from "./User";
import {UserApi} from "../../api/api";



export default class ContainerUser extends React.Component{

    state = {
        userId:null,
        user:null
    }

    componentDidMount() {
        UserApi.getUser(this.props.useId).then(data => {
            console.log(data)
            this.setState({
                user: data
            },()=>console.log(data))

        }).catch(()=>{
            console.log(JSON.parse(localStorage.getItem("users")).filter((item)=>{
                return item.id === this.props.useId
            })[0])
            this.setState({
                user: JSON.parse(localStorage.getItem("users")).filter((item)=>{
                    return item.id === this.props.useId
                })[0]
            },(i)=>console.log(this.state.user))
        })
    }

    render() {
        console.log(this.state.user)
        return (
            <User useId={this.state.user}/>
        )
    }
}