import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";

const ArmyListEditForm = props => {
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
  const updateExistingArmyList = evt => {
    evt.preventDefault();
    setIsLoading(true);
    const editedArmyList = {
        id: props.match.params.armyListId,
        name: armyList.name,
        userId: parseFloat(sessionStorage.getItem("userId")),
        armyTypeId: parseFloat(armyList.armyTypeId),
        maxPoints: parseFloat(armyList.maxPoints),
        strict: true
    }

    API.update(editedArmyList, "armies").then(() => props.history.push("/army-lists"));
  };
  useEffect(() => {
    API.edit(props.match.params.armyListId,"armies").then(armyList => {
      setArmyList(armyList);
      setIsLoading(false);
    });
  }, [props.match.params.armyListId]);
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
                      value={armyList.name}
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
                      value={armyList.maxPoints}
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
                onClick={updateExistingArmyList}
              >
                Save Army List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArmyListEditForm;