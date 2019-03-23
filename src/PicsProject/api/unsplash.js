import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 018a60721d5f814ee397611b53d1df2ad76737aa7575347b63f533daa1967d04'
  }
});
