import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

export default class Services extends Component {
    state = {
        services:[
            {
            icon:<FaCocktail />,
            title: "Free cocktails",
            info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            {
            icon:<FaHiking />,
            title: "Endless Hiking",
            info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            {
            icon:<FaShuttleVan />,
            title: "Free Shuttle",
            info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            {
            icon:<FaBeer />,
            title: "Free Beers",
            info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
            <div className="services-center">
            {this.state.services.map((item, index) =>{
            return <article key={index} className="service" >
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>

            </article>

            })}
            </div>
                
            </section>
        );
    }
}
