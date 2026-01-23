import axios from "axios";

export default axios.create({
  baseURL: "https://portal.nbm-intl.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
