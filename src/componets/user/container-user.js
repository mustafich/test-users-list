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

            this.setState({
                user: data
            })

        }).catch(()=>{

            this.setState({
                user: JSON.parse(localStorage.getItem("users")).filter((item)=>{
                    return item.id === this.props.useId
                })[0]
            })
        })
    }

    render() {
        return (
            <User useId={this.state.user}/>
        )
    }
}