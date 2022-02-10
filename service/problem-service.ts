import axios from 'axios';
import { Problem } from '../dtos';

class ProblemService{

    private URI: string;
    constructor (){
        this.URI = "http://52.224.91.41:3000/"
    }

    getAllProblems(): Promise<Problem[]> {
        return axios
            .get(this.URI + `problems`)
                .then(result => result.data)
                    .catch(error => {console.log(error)});
    }

    getProblemById(problemId: Problem): Promise<Problem> {
        return axios
            .get(this.URI + `problems/${problemId}`)
                .then(result => result.data)
                    .catch(error => {console.log(error)});
    }

    reviewProblem(problemId: string): Promise<Problem> {
        //console.log(`problems/${problemId}/reviewed`)
        return axios
            .patch(this.URI + `problems/${problemId}/reviewed`)
                .then(result => result.data)
                    .catch(error => {console.log(error)});
    }


}


const problemService = new ProblemService();
export default problemService;