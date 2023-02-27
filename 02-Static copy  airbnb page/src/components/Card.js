import React from "react"

export default function Card (props) {
    let badgeText;
    if(props.openspots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText &&  <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className="card--image" alt="asd" />
            <div className="card--stats">
                <img src="../images/Star.png" className="card--star"  alt="asd"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} / person</span></p>
        </div>
    )
}

// icine props yazmadan reusable olmaz.Hard-coded olur yani dinamik degil. props ile data driven gibi birsey oluyor.s