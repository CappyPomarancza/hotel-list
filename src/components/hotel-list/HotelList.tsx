import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionCreator, ActionTypes} from "../../store/actions";
import {RootState} from "../../store/reducer";
import {List} from "@mui/material";
import ListItem from "./ListItem";
import {Hotel} from "../../models/Hotel";
import styled from "styled-components";

export const HotelList: any = () => {
    const { hotelList } = useSelector((state: RootState)=> state);
    const dispatch = useDispatch();
    useEffect(()=> {
        console.log('fetch hotels list');
        fetch('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG')
            .then(response => response.json())
            .then(response => {
                // TODO zawołać setHotels List
                dispatch(actionCreator.setHotelList(response));
            })
            .catch(error =>{
                // TODO zawołać setError List
                console.log('error', error);
                return error
            });
    },[]);

    return (
        <ListContainer>
            <p>Before</p>
            {
                hotelList &&
                        <ul>
                            {
                                hotelList.map((hotel: Hotel) => (
                                    <li key={`section-${hotel.id}`}>
                                        <ListItem key={`${hotel.name}`} hotel={hotel}/>
                                    </li>
                                ))
                            }
                        </ul>
            }
        </ListContainer>
    )
};

const ListContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    ul {
        list-style: none;
    }
`