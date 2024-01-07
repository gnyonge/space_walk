import axios from "axios";

export const serverAxios = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react/issues",
});
