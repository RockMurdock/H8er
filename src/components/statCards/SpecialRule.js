import React from "react"
import {Link} from "react-router-dom"

const SpecialRule = props => {
    
    return (
        <div className="specialRulesCard-content">
            <Link to={`/stats/${props.specialRule.specialRule.armyTypeId}/${props.specialRule.specialRule.id}`}>
            <span>{props.specialRule.specialRule.name}</span>
            </Link>
        </div>
    )
}
export default SpecialRule