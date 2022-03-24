import axios from 'axios'

export const bcreate = newBusiness => {
    return axios
        .post('businesses/create', {
            business_name: newBusiness.business_name,
            email: newBusiness.email,
            user_location: newBusiness.user_location
        })
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        })
}

export const explore = () => {
    return axios
        .get('businesses/explore')
        .then(response => {
            // console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        })
}