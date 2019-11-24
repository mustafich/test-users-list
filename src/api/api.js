import axios from 'axios';


class allUser {
    getApp = async () => {
        const api_url = await
            axios("http://frontend-candidate.dev.sdh.com.ua/v1/contact/")


        return api_url.data
    }
}

class UserApii {
    getUser = async (id) => {
        const api_url = await
            fetch(`http://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}/`)
        const data = await api_url.json()
        return data
    }
}

 class deleteUser {
     getDeleteUser = async (id,isInList) => {
         const storage = JSON.parse(localStorage.getItem('users'));
         const newStorage = storage.filter(item =>{
             return item.id !== id
         })
         if(!isInList){
             localStorage.setItem('users',JSON.stringify(newStorage))

         }else{
             localStorage.setItem('users',JSON.stringify(newStorage))
         const api_url = await
             axios(`http://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}/`, {
                 method: 'DELETE',
             })
         }

     }


}
class addUser {
    add = async (state) => {
        debugger
        const storage = JSON.parse(localStorage.getItem('users'));
        storage.push({...state,id:Math.floor(Math.random() * Math.floor(1000))})
        localStorage.setItem('users',JSON.stringify(storage))
    }

}
class editUser {
    editF = async (state) => {
        return axios(`/v1/contact/${state.userId}/`, {
            method: 'PUT',
            body: state
        }).then(response => response.json())
    }
}


const allUserApi = new allUser();
const UserApi = new UserApii();
const deleteUserApi = new deleteUser();
const addUserApi = new addUser();

export {allUserApi,UserApi,deleteUserApi,addUserApi}
