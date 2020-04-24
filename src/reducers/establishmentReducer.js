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
            let latest_media;
            for (let i = 0; i < medias.length; i++) {
                latest_media = medias[i];
                break;
            }

            const images = getLatestEstablishment(action.payload, EstbTypeCode.IMAGE);
            let latest_image;
            for (let i = 0; i < images.length; i++) {
                latest_image = images[i];
                break;
            }

            //const publications = action.payload.filter(a => a.EstbTypeCode.substring(0, 1) === 'P');
            //const activities = action.payload.filter(a => a.EstbTypeCode.substring(0, 1) === 'R');
            //const notices = action.payload.filter(a => a.EstbTypeCode === EstbTypeCode.Notice);

            return {
                ...state,
                establishments: action.payload,
                //notices,
                //activities,
                //publications,
                medias,
                latest_media,
                images,
                latest_image,
                count: {
                    total: action.payload.length,
                    // notice: action.payload.reduce((n, x) => n + (x.EstbTypeCode === EstbTypeCode.Notice), 0),
                    // tender: action.payload.reduce((n, x) => n + (x.EstbTypeCode === EstbTypeCode.Tender), 0),
                    // circular: action.payload.reduce((n, x) => n + (x.EstbTypeCode === EstbTypeCode.Circular), 0),
                    // image: action.payload.reduce((n, x) => n + (x.EstbTypeCode === EstbTypeCode.IMAGE), 0),
                    // video: action.payload.reduce((n, x) => n + (x.EstbTypeCode === EstbTypeCode.VIDEO), 0),
                    // media: action.payload.reduce((n, x) => n + (x.EstbTypeCode === EstbTypeCode.MEDIA), 0),
                    // sylllabus: action.payload.reduce((n, x) => n + (x.EstbTypeCode === EstbTypeCode.Syllabus), 0),
                    // activity: activities.length,
                    // publication: publications.length
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