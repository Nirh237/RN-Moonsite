import axios from 'axios';


const ShowService = {

    get: (search) => {

        return axios.get(`http://api.tvmaze.com/search/shows?q='${search}'`)
            .then(res => {

                return res.data;
            });

    },
}

export default ShowService;