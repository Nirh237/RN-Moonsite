import axios from 'axios';


const ShowService = {

    get: () => {

        return axios.get('http://api.tvmaze.com/search/shows?q='+'girls')
            .then(res => {

                return res.data;
            });

    },
}

export default ShowService;