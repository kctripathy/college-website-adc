import { EstablishmentActionTypes, EstbTypeCode } from '../constants/actionTypes';


let initialState = {
    establishments: [],
    loading: true,
    error: '',
    success: ''
};

const getLatestEstablishment = (arr, type) => {
    const arr1 = arr.filter(a => a.EstbTypeCode === type);
    return arr1;
}

const establishmentReducer = (state = initialState, action) => {

    switch (action.type) {
        case EstablishmentActionTypes.fetchEstablishmentStart:
            //debugger;
            return {
                ...state,
                establishments: [],
                loading: true
            }
        case EstablishmentActionTypes.fetchEstablishmentSuccess:
            //debugger;
            const medias = getLatestEstablishment(action.payload, EstbTypeCode.MEDIA);
            const images = getLatestEstablishment(action.payload, EstbTypeCode.IMAGE);
            let latest_media;
            let latest_image;
            for (let i = 0; i < medias.length; i++) {
                latest_media = medias[i];
                break;
            }
            for (let i = 0; i < images.length; i++) {
                latest_image = images[i];
                break;
            }
            return {
                ...state,
                establishments: action.payload,
                medias,
                latest_media,
                images,
                latest_image,
                count: {
                    total: action.payload.length,
                    notice: action.payload.filter(a => a.EstbTypeCode === EstbTypeCode.Notice).length,
                    activities: action.payload.filter(a => a.EstbTypeCode.substring(0, 1) === EstbTypeCode.RecentActivities).length
                },
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