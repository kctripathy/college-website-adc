import { EstablishmentActionTypes } from '../constants/actionTypes';


let initialState = {
    establishments: [],
    loading: true,
    error: '',
    success: ''
};

const establishmentReducer = (state = initialState, action) => {

    switch (action.type) {

        case EstablishmentActionTypes.fetchEstablishmentSuccess:
            return {
                ...state,
                establishments: action.payload,
                loading: false
            }
        case EstablishmentActionTypes.fetchEstablishmentFailure:
            return {
                ...state,
                establishments: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default establishmentReducer;