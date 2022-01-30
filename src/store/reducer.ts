import {Action, actionCreator, ActionTypes} from "./actions";
import { createStore } from 'redux'

export interface RootState {
    isHotelSelected: boolean; // czy wyświetlać detale hotelu
    selectedHotel: any; // TODO dodać typ hotelu
    hotelList: any; // TODO dodać typowanie
    error: any;
    isFetching: boolean
}

const initialState: RootState = {
    isHotelSelected: false,
    selectedHotel: null,
    hotelList: [],
    error: null,
    isFetching: false
};

function fetchHotelList() {
    return new Promise((resolve, reject) => {
        let options = {
            method: 'GET',
        };
        fetch('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG', options)
            .then(response => response.json())
            .then(response => {
                // TODO zawołać setHotels List
                return response
            })
            .catch(error =>{
                reject(error);
                // TODO zawołać setError List

                return error
            });
    })
}



function setHotelList(state: RootState, action: Action) {
    console.log('etHotelList from trducer', action);
    return {
        ...state,
        hotelList: action.payload
    };
}

const reducer = (state: RootState = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.SetHotelList: return setHotelList(state, action);
        // case ActionTypes.GetHotelList: return getHotelList(state);
        default: return state;
    }
};

export const store = createStore(reducer, initialState);

