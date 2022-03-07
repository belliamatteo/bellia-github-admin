import * as React from "react";
import axios from "axios";
import { TypeStudent } from "../types/types"

export const callApi = async (student: TypeStudent) => {
    try{
        const response = await axios.get("https://github-function-app.azurewebsites.net/api/HttpStudentsRepos");
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)){
            if(error.response){
                console.log(error.response.data);
                console.log(error.response.status);
            }
            throw new Error (error.response?.data);
        }else{
            console.log(error);
            throw error;
        }
    }
}