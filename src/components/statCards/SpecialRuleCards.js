import React from "react"

const SpecialRuleCards = props => {
    return (
        <div className="specialRulesCard-content">
            <span>{props.specialRule.name}</span>
        </div>
    )
}
export default SpecialRuleCards