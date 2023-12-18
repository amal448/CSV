import axios from "axios"
axios.defaults.withCredentials=true

// axios.defaults.baseURL="https://8d08-103-155-223-148.ngrok-free.app";

// export async function registerData(credentials)
// {
//     return new Promise ((resolve,reject)=>{
//         console.log(credentials);
//         axios.post('https://8d08-103-155-223-148.ngrok-free.app/api/csv/test',credentials).then((data)=>{
//             console.log(data)
//             resolve(data)
//         }).catch((err)=>{
//             reject(err)
//         })
//     })
// }
export async function registerData(credentials) {
    try {
      const response = await axios.post('', credentials, {
        headers: {
          'ngrok-skip-browser-warning': 'any',
          'Content-Type': 'application/json', // Example content type, adjust as needed
          // Add other headers as needed
        }
      });
  
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error during the request:", error);
      throw error;
    }
  }