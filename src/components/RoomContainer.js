import React from 'react'
import RoomFilter from "../components/RoomFilter"
import RoomList from "../components/RoomList"
import {RoomConsumer} from "../Context"
import Loading from "./Loading"


export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
            (value) => {
                const {loading,sortedRooms,rooms} = value
                if(loading){
                    return <Loading />
                }
                return (
                     <div>
                <RoomFilter rooms={rooms} />
                <RoomList rooms={sortedRooms} />
            </div>
        );
    }
}
        </RoomConsumer>
    ); 
}        
