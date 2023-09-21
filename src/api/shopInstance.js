import axios from "axios";

export const shopIns = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});
