import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionCreator, ActionTypes} from "../../store/actions";
import {RootState} from "../../store/reducer";
import {List} from "@mui/material";
import ListItem from "./ListItem";
import {Hotel} from "../../models/Hotel";

export const HotelList: any = () => {
    const { hotelList } = useSelector((state: RootState)=> state);
    console.log('hotelList from component', hotelList);
    const dispatch = useDispatch();
    useEffect(()=> {
        console.log('get hotels list');
        dispatch(actionCreator.getHotelList());
    },[]);

    return (
        <div>
            <p>Before</p>
            {
                hotelList &&
                <List>
                    <ul>
                        {hotelList.map((hotel: Hotel) => (
                            <li key={`section-${hotel.id}`}>
                                <ListItem key={`${hotel.name}`} hotel={hotel}/>
                            </li>
                        ))}
                    </ul>
                </List>
            }
        </div>
    )
};
