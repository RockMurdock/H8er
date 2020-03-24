import React from "react";

const SpecialRuleCards = props => {
    
  return (
    <div className="specialRulesCard-content">
      <span>{props.specialRule.name}</span>
      <button
        type="button"
        className="specialRulesCardEditButton"
        onClick={() => props.history.push(`/stats/${props.specialRule.id}/edit-rule`)}
      >
        Edit
      </button>
      <button
        type="button"
        className="specialRulesCardDeleteButton"
        onClick={() => props.deletehandler(props.specialRule.id, "specialRules")}
      >
        Delete
      </button>
    </div>
  );
};
export default SpecialRuleCards;
