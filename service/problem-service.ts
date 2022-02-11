import axios from 'axios';
import { Problem } from '../dtos';

class ProblemService {

    private URI: string;
    constructor() {
        this.URI = "http://problemapi.azurewebsites.net/api/problems/";
    }

    getAllProblems(): Promise<Problem[]> {
        return axios
            .get(this.URI)
            .then(result => result.data)
            .catch(error => { console.log(error) });
    }

    getProblemById(problemId: Problem): Promise<Problem> {
        return axios
            .get(this.URI + `${problemId}`)
            .then(result => result.data)
            .catch(error => { console.log(error) });
    }

    reviewProblem(problemId: string): Promise<Problem> {
        return axios
            .patch(this.URI + `${problemId}`)
            .then(result => result.data)
            .catch(error => { console.log(error) });
    }
}


const problemService = new ProblemService();
export default problemService;