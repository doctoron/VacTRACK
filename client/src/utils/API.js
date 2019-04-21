import axios from "axios";

export default {
  // Gets all books
  authorizeUser: function(data) {
    return axios.post("/api/login", data);
  },
  registerUser: function(data) {
    return axios.post('/api/register', data);
  }
};
