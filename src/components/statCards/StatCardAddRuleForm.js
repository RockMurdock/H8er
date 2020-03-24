import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";

const StatCardAddRuleForm = props => {
  const [statCardRules, setStatCardRules] = useState({
    statCardId: 0,
    specialRuleId: 0
  });
  const [specialRules, setSpecialRules] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...statCardRules };
    stateToChange[evt.target.id] = evt.target.value;
    setStatCardRules(stateToChange);
  };
  const constructNewSpecialRule = evt => {
    evt.preventDefault();
    setIsLoading(true);
    statCardRules.statCardId = parseFloat(props.match.params.statCardId);
    statCardRules.specialRuleId= parseFloat(statCardRules.specialRuleId)
    console.log(statCardRules)

    API.save(statCardRules, "statCardRules").then(() =>
      props.history.push("/stats")
    );
  };
  

  useEffect(() => {
    API.embed("statCards","statCardRules",props.match.params.statCardId).then(result => {
        API.specialWithArmyType("specialRules",result.armyTypeId).then(rules => {
            setSpecialRules(rules)

            setIsLoading(false);
        });
    });
  }, []);
  

  return (
    <>
    
      <div className="specialRules-content">
        <div>
          <label htmlFor="armyType">Special Rules</label>
          <select
            className="form-control"
            id="specialRuleId"
            value={statCardRules.id}
            onChange={handleFieldChange}
          >
            {specialRules.map(specialRule => (
              <option key={specialRule.id} value={specialRule.id}>
                {specialRule.name}
              </option>
            ))}
          </select>
          <div>
            <div className="alignRight">
              <button
                type="button"
                className="submitButton"
                disabled={isLoading}
                onClick={constructNewSpecialRule}
              >
                Add Special Rule
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StatCardAddRuleForm;