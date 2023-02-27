import axios from 'axios';

const baseUrl = 'https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&inname=';

export default {
    getUserData(searchUser) {
     return axios.get(`${baseUrl}${searchUser}&site=stackoverflow`)
    }
}