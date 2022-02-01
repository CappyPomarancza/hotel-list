import React, {useEffect, useMemo} from "react";
import {Hotel} from "../../models/Hotel";
import styled from "styled-components";
import { Paper } from "material-ui/Paper";

interface ListItemProps {
    hotel: Hotel;
}
const ListItem = (props: ListItemProps) => {
    const { hotel } = props;
    return (
        <Paper >
            <ItemContainer>
                <HotelDetailsBox>
                    <ImageBox>
                        <img src={hotel.images[0].url} alt={hotel.name}/>
                    </ImageBox>
                    <HotelDescription>
                        <h1>{hotel.name}</h1>
                        <p>{hotel.address1}</p>
                        <p>{hotel.address2}</p>
                    </HotelDescription>
                </HotelDetailsBox>
                <RoomList>
                </RoomList>
            </ItemContainer>
        </Paper>
    )
};

const ItemContainer = styled.div`
    
    
`;
const HotelDetailsBox= styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;
`;

const HotelDescription = styled.div`
    text-align: left;
    h1 {
        margin: 0;
    }
`;

const ImageBox = styled.div`
    width: 300px;
    img {
        height: 160px;
        width: 220px;
    };
`;


const RoomList = styled.div``;



export default ListItem;
// <img
//     style={{
//         width: 210,
//         height: 118,
//     }}
//     alt={hotel.name}
//     src={hotel.images[0].url}
// />