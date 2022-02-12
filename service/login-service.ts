import axios from 'axios';
import { Employee } from '../dtos';

class LoginService {

    private URI: string;
    constructor() {
        this.URI = "http://20.121.74.219:3000/login";
    }

    login(username:string, password:string): Promise<Employee> {
        return axios
            .patch(this.URI, {username,password})
                .then(result => result.data)
                    .catch(error => {console.log(error)});
    }

}


const loginService = new LoginService();
export default loginService;