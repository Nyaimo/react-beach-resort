import React from 'react'
import Room from "./Room"
export default function RoomList({rooms}) {

if(rooms.length === 0){
    return(
    <h3>No rooms matched your search parameters</h3>
    );
}


    return (<section className="roomlist">
        <div className="roomslist-center">
            {
            rooms.map(item =>{
                return <Room key={item.id} room={item}/>
            })
            }
        </div>
        </section>
    );
}
