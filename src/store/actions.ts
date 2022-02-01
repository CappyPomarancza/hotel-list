export type Action<P = any> = {
    type: ActionTypes,
    payload: P
};

function createAction<T extends string, P>(type: T, payload?: P) {
    return { type, ...(!!payload && { payload }) };
}

export enum ActionTypes {
    GetHotelList= 'GET_HOTEL_LIST',
    SetHotelList = 'SET_HOTEL_LIST',
}

export const actionCreator = {
    setHotelList: (payload: any) => createAction(ActionTypes.SetHotelList, payload),
    // getHotelList: () => createAction(ActionTypes.GetHotelList),
};
