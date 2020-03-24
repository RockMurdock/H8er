import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";

const SpecialRuleForm = props => {
  const [specialRule, setSpecialRule] = useState({
    name: "",
    description: "",
    armyTypeId: 0
  });
  const [armyTypes, setArmyType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...specialRule };
    stateToChange[evt.target.id] = evt.target.value;
    setSpecialRule(stateToChange);
  };
  const constructNewSpecialRule = evt => {
    evt.preventDefault();
    setIsLoading(true);
    specialRule.armyTypeId = parseFloat(specialRule.armyTypeId);

    API.save(specialRule, "specialRules").then(() =>
      props.history.push("/stats")
    );
  };
  useEffect(() => {
    API.get("armyTypes").then(armyType => {
      setArmyType(armyType);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="specialRules-content">
        <div>
          <label htmlFor="armyType">Army Type</label>
          <select
            className="form-control"
            id="armyTypeId"
            value={specialRule.armyTypeId}
            onChange={handleFieldChange}
          >
            {armyTypes.map(armyType => (
              <option key={armyType.id} value={armyType.id}>
                {armyType.name}
              </option>
            ))}
          </select>
          <table id="specialRules">
            <tbody>
              <tr>
                <th>Name</th>
                <td>
                  <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="name"
                    placeholder="Name of Special Rule"
                    value={specialRule.name}
                  />
                </td>
              </tr>
              <tr>
                <th>Description</th>
                <td>
                  <textarea
                    
                    required
                    onChange={handleFieldChange}
                    id="description"
                    placeholder="Description of Rule"
                    value={specialRule.description}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <div className="alignRight">
              <button
                type="button"
                className="submitButton"
                disabled={isLoading}
                onClick={constructNewSpecialRule}
              >
                Create Special Rule
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpecialRuleForm;
