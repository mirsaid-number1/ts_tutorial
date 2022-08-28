import axios from 'axios';
import {useQuery} from 'react-query';

export const UseReactQuery = (url,onSuccess,onError) => {
    return useQuery('coming-from-hook',() => {
        return axios.get(url)
    },{onSuccess,
        onError,
        select:(data) => {
            const egos = data.data.map(item => item.alterEgo);
            return egos;
    }})
}
