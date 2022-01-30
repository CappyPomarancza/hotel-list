import React, {useEffect, useMemo} from "react";
import {Hotel} from "../../models/Hotel";

interface ListItemProps {
    hotel: Hotel;
}
const ListItem = (props: ListItemProps) => {
    const { hotel } = props;
    return (
        <img
            style={{
                width: 210,
                height: 118,
            }}
            alt={hotel.name}
            src={hotel.images[0].url}
        />
    )
};

{/*<p>{hotel.name}</p>*/}
{/*{*/}
{/*    hotel.images.map((image: any) => {*/}
{/*        return (*/}
{/*            <div style={{display: "block"}}>*/}
{/*                <img src={image.url}/>*/}
{/*            </div>*/}
{/*        )*/}
{/*    })*/}
{/*}*/}



export default ListItem;
