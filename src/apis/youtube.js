import axios from "axios";

const KEY = "AIzaSyDKBFi2GabbgQUqLGS9GYMmX0lF0FMVbto";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
