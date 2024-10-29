import axios from "axios";
import { API_KEY } from "../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url) => {
     
          const options = {
               method: 'GET',
               url,
               // params,
               headers: {
                    "x-rapidapi-key": "f19b8ca4e4msh21731cb0b4b6ba1p18a59djsnf28748692450",
                    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
               },
          };
 try {
          const response = await axios.request(options);
        

     } catch (error) {
          console.error("Error:", error.message);
     }
};

export const fetchExercisesByBodypart = async (bodyPart) => {

     let data = await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`);
     https://exercisedb.p.rapidapi.com/exercises/bodyPart/back
     return data;
};
