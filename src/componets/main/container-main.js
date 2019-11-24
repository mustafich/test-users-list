import React from "react"
import Main from "./Main";
import {allUserApi,deleteUserApi,UserApi} from "../../api/api";



export default class ContainerMain extends React.Component{
    state = {
        allUser:null,
        allUserOrigin:null,
        deleteUser:null
    }

    componentDidMount() {
        allUserApi.getApp().then(data => {
            this.setState({
                allUserOrigin: data
            })
        })
        if(!localStorage.getItem('users')){
            allUserApi.getApp().then(data => {
                this.setState({
                    allUser: data
                })
                localStorage.setItem("users",JSON.stringify(data))
            })
        }else {
            this.setState({
                allUser:JSON.parse( localStorage.getItem('users'))
            })
        }
    }
     fDeleteUser = (id) => {
         function isPrime(element, index, array) {
         return element.id === id
         }
        const isInList = this.state.allUserOrigin.find(isPrime)
         console.log("find",isInList)

      deleteUserApi.getDeleteUser(id,isInList).then(()=>{
          allUserApi.getApp().then(data => {
              console.log(data)
              this.setState({
                  allUser: JSON.parse(localStorage.getItem("users"))
              })
          })
      })
    }

    // fDeleteUser(id) {
    //     this.deleteUser = new deleteUser(id)
    //     this.deleteUser.getDeleteUser(id).then(data => {
    //         console.log(1)
    //     })
    // }
    render() {




        return (
            <Main fDeleteUser={this.fDeleteUser} UserId={this.props.UserId} allUser={this.state.allUser}/>
        )
    }
}