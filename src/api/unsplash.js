import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID OIuzJK5ViHHYJnFACXLNi6U3yYATnAZdKKQX0eGa2vc' 
    }
});


