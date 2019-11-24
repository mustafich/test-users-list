import React from "react"
import Edit from "./edit";
import {allUser, UserApi} from "../../api/api";



export default class ContainerEdit extends React.Component{
    state = {
        userId:this.props.userId,
        user:""

    }
    componentDidMount() {
        UserApi.getUser(this.state.userId).then(data => {
            this.setState({
                user: data
            })
        })

    }
    render() {

        return (
            <div>
                <Edit user={this.state.user}/>
            </div>
        )
    }
}