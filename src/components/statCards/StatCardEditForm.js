import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";
import {
  Table,
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

const StatCardEditForm = props => {
  const [statCard, setStatCard] = useState({
    name: "",
    unitTypeId: "",
    armyTypeId: "",
    pointsPerModel: "",
    unitSize: "",
    movement: "",
    weaponSkill: "",
    ballisticSkill: "",
    strength: "",
    toughness: "",
    wounds: "",
    initiative: "",
    attacks: "",
    leadership: ""
  });
  const [unitTypes, setUnitType] = useState([]);
  const [armyTypes, setArmyType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...statCard };
    stateToChange[evt.target.id] = evt.target.value;
    setStatCard(stateToChange);
  };
  const updateExistingStatCard = evt => {
    evt.preventDefault();
    setIsLoading(true);
    const editedStatCard = {
      id: props.match.params.statCardId,
      name: statCard.name,
      unitTypeId: parseFloat(statCard.unitTypeId),
      armyTypeId: parseFloat(statCard.armyTypeId),
      pointsPerModel: parseFloat(statCard.pointsPerModel),
      unitSize: parseFloat(statCard.unitSize),
      movement: parseFloat(statCard.movement),
      weaponSkill: parseFloat(statCard.weaponSkill),
      ballisticSkill: parseFloat(statCard.ballisticSkill),
      strength: parseFloat(statCard.strength),
      toughness: parseFloat(statCard.toughness),
      wounds: parseFloat(statCard.wounds),
      initiative: parseFloat(statCard.initiative),
      attacks: parseFloat(statCard.attacks),
      leadership: parseFloat(statCard.leadership)
    };

    API.update(editedStatCard, "statCards").then(() =>
      props.history.push("/stats")
    );
  };
  useEffect(() => {
    API.get("unitTypes").then(unitType => {
      API.get("armyTypes").then(armyType => {
        API.edit(props.match.params.statCardId, "statCards").then(statCard => {
          setStatCard(statCard);
          setUnitType(unitType);
          setArmyType(armyType);
          setIsLoading(false);
        });
      });
    });
  }, [props.match.params.statCardId]);

  return (
    <>
      <div className="statCards-content">
        <div>
          <center>
            <br />
            <Form style={{ width: "50%" }}>
              <InputGroup style={{ width: "50%" }}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Army Type</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="select"
                  className="form-control"
                  id="armyTypeId"
                  value={statCard.armyTypeId}
                  onChange={handleFieldChange}
                >
                  <option value={0}>select option</option>
                  {armyTypes.map(armyType => (
                    <option key={armyType.id} value={armyType.id}>
                      {armyType.name}
                    </option>
                  ))}
                </Input>
              </InputGroup>
              <br/>
              <InputGroup style={{width:"50%"}}>
              <InputGroupAddon addonType="prepend">
              <InputGroupText>Unit Type</InputGroupText>
              </InputGroupAddon>
              <Input
                type="select"
                className="form-control"
                id="unitTypeId"
                value={statCard.unitTypeId}
                onChange={handleFieldChange}
              >
                <option value={0}>select option</option>
                {unitTypes.map(unitType => (
                  <option key={unitType.id} value={unitType.id}>
                    {unitType.name}
                  </option>
                ))}
              </Input>
              </InputGroup>
              <br/>
              <div>
                <Table striped style={{ width: "50%" }} id="statCards">
                  <tbody>
                    <tr>
                      <th>PPM</th>
                      <td>
                        <input
                          type="number"
                          required
                          onChange={handleFieldChange}
                          id="pointsPerModel"
                          placeholder="Points Per Model"
                          value={statCard.pointsPerModel}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>
                        <input
                          type="text"
                          required
                          onChange={handleFieldChange}
                          id="name"
                          placeholder="Unit Name"
                          value={statCard.name}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>M</th>
                      <td>
                        <input
                          type="number"
                          required
                          onChange={handleFieldChange}
                          id="movement"
                          placeholder="Movement Speed"
                          value={statCard.movement}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>WS</th>
                      <td>
                        <input
                          type="number"
                          required
                          onChange={handleFieldChange}
                          id="weaponSkill"
                          placeholder="Weapon Skill"
                          value={statCard.weaponSkill}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>BS</th>
                      <td>
                        <input
                          type="number"
                          required
                          onChange={handleFieldChange}
                          id="ballisticSkill"
                          placeholder="Ballistic Skill"
                          value={statCard.ballisticSkill}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>S</th>
                      <td>
                        <input
                          type="number"
                          required
                          onChange={handleFieldChange}
                          id="strength"
                          placeholder="Strength"
                          value={statCard.strength}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>T</th>
                      <td>
                        <input
                          type="number"
                          required
                          onChange={handleFieldChange}
                          id="toughness"
                          placeholder="Toughness"
                          value={statCard.toughness}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>W</th>
                      <td>
                        <input
                          type="number"
                          required
                          onChange={handleFieldChange}
                          id="wounds"
                          placeholder="Wounds"
                          value={statCard.wounds}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>I</th>
                      <td>
                        <input
                          type="number"
                          required
                          onChange={handleFieldChange}
                          id="initiative"
                          placeholder="Initiative"
                          value={statCard.initiative}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>A</th>
                      <td>
                        <input
                          type="number"
                          required
                          onChange={handleFieldChange}
                          id="attacks"
                          placeholder="Attacks"
                          value={statCard.attacks}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>LD</th>
                      <td>
                        <input
                          type="number"
                          required
                          onChange={handleFieldChange}
                          id="leadership"
                          placeholder="Leadership"
                          value={statCard.leadership}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>US</th>
                      <td>
                        <input
                          type="number"
                          required
                          onChange={handleFieldChange}
                          id="unitSize"
                          placeholder="Unit Size"
                          value={statCard.unitSize}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <div className="alignRight">
                  <Button
                    type="button"
                    className="submitButton"
                    disabled={isLoading}
                    onClick={updateExistingStatCard}
                  >
                    Edit Stat Card
                  </Button>
                </div>
              </div>
            </Form>
          </center>
        </div>
      </div>
    </>
  );
};
export default StatCardEditForm;
