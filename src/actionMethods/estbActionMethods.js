import { EstablishmentActionTypes } from '../constants/actionTypes';
import { loadAllEstablishments } from '../api'

const fetchEstablishmentSuccess = (establishments) => {
    return {
        type: EstablishmentActionTypes.fetchEstablishmentSuccess,
        payload: establishments
    }
};
const fetchEstablishmentFailure = (error) => {
    return {
        type: EstablishmentActionTypes.fetchEstablishmentFailure,
        payload: error
    }
};


const fetchEstablishments = () => {
    return (dispatch) => loadAllEstablishments()
        .then(data => {
            if (data === undefined)
                dispatch(fetchEstablishmentFailure('Some error occured'));
            else
                dispatch(fetchEstablishmentSuccess(data))
        })
        .catch(err => {
            dispatch(fetchEstablishmentFailure(err))
        })
};


export { fetchEstablishments }