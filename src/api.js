import axios from "axios"

const authAPI = axios.create({
  baseURL: "https://dummyjson.com/auth",
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  }
})

export default authAPI
