import React, {useState, useEffect} from "react"
import API from "../../modules/ApiManager"

const SpecialRuleDetail = props => {
    const [specialRule, setSpecialRule] = useState([])
    useEffect(() => {
API.getRuleDescription(props.match.params.specialRuleId).then(rulesFromAPI =>{
    setSpecialRule(rulesFromAPI)
})
    },[props.match.params.specialRuleId])
    return (
        <div className="specialRulesDetail-content">
            <span>{specialRule.map(rule => (
                rule.description
            ))}</span>
        </div>
    )
}
export default SpecialRuleDetail