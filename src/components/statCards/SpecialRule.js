import React from "react"

const SpecialRule = props => {
    return (
        <div className="specialRulesCard-content">
            <span>{props.specialRule.specialRule.name}</span>
        </div>
    )
}
export default SpecialRule