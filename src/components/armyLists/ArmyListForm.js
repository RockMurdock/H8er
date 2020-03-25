import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";

const ArmyListForm = props => {
  const [armyList, setArmyList] = useState({
    name: "",
    userId: 0,
    armyTypeId: 0,
    maxPoints: 0,
    strict: true
  });
  const [armyTypes, setArmyType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...armyList };
    stateToChange[evt.target.id] = evt.target.value;
    setArmyList(stateToChange);
  };
  const constructNewArmyList = evt => {
    evt.preventDefault();
    setIsLoading(true);
    armyList.userId = parseFloat(sessionStorage.getItem("userId"));
    armyList.armyTypeId = parseFloat(armyList.armyTypeId);
    armyList.maxPoints = parseFloat(armyList.maxPoints);

    API.save(armyList, "armies").then(() => props.history.push("/army-lists"));
  };
  useEffect(() => {
    API.get("armyTypes").then(armyType => {
      setArmyType(armyType);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="statCards-content">
        <div>
          <label htmlFor="armyType">Army Type</label>
          <select
            className="form-control"
            id="armyTypeId"
            value={armyList.armyTypeId}
            onChange={handleFieldChange}
          >
            {armyTypes.map(armyType => (
              <option key={armyType.id} value={armyType.id}>
                {armyType.name}
              </option>
            ))}
          </select>

          <div>
            <table id="armyList">
              <tbody>
                <tr>
                  <th>Army Name</th>
                  <td>
                    <input
                      type="text"
                      required
                      onChange={handleFieldChange}
                      id="name"
                      placeholder="Name of Army List"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Max Points</th>
                  <td>
                    <input
                      type="number"
                      required
                      onChange={handleFieldChange}
                      id="maxPoints"
                      placeholder="Maximum Point Limit"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="alignRight">
              <button
                type="button"
                className="submitButton"
                disabled={isLoading}
                onClick={constructNewArmyList}
              >
                Create Army List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArmyListForm;
