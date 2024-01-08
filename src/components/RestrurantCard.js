import React from "react";
import ReactDOM from "react-dom";
import { CDN_URL } from "../utils/constant"

const RestrurantCard = (props) => {
    const {resData} = props;

    const {
        name,
        cuisines,
        costForTwo,
        avgRating,
        cloudinaryImageId,
        sla
    } = resData?.info;

    return (
        <div className="resturant_card">
            <img className="res_logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h2 className="res_name">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <p className="text">{avgRating} stars</p>
            <p className="text">{costForTwo}</p>
            <p className="text">Will be deliverd in <b>{sla?.slaString}</b></p>
        </div>
    )
}

export default RestrurantCard;
