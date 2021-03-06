import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";
import { Table, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

const StatCardForm = props => {
  const [statCard, setStatCard] = useState({
    name: "",
    unitTypeId: 0,
    armyTypeId: 0,
    pointsPerModel: 0,
    unitSize: 0,
    movement: 0,
    weaponSkill: 0,
    ballisticSkill: 0,
    strength: 0,
    toughness: 0,
    wounds: 0,
    initiative: 0,
    attacks: 0,
    leadership: 0
  });
  const [unitTypes, setUnitType] = useState([]);
  const [armyTypes, setArmyType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...statCard };
    stateToChange[evt.target.id] = evt.target.value;
    setStatCard(stateToChange);
  };
  const constructNewStatCard = evt => {
    evt.preventDefault();
    setIsLoading(true);
    statCard.unitTypeId = parseFloat(statCard.unitTypeId);
    statCard.armyTypeId = parseFloat(statCard.armyTypeId);
    statCard.pointsPerModel = parseFloat(statCard.pointsPerModel);
    statCard.unitSize = parseFloat(statCard.unitSize);
    statCard.movement = parseFloat(statCard.movement);
    statCard.weaponSkill = parseFloat(statCard.weaponSkill);
    statCard.ballisticSkill = parseFloat(statCard.ballisticSkill);
    statCard.strength = parseFloat(statCard.strength);
    statCard.toughness = parseFloat(statCard.toughness);
    statCard.wounds = parseFloat(statCard.wounds);
    statCard.initiative = parseFloat(statCard.initiative);
    statCard.attacks = parseFloat(statCard.attacks);
    statCard.leadership = parseFloat(statCard.leadership);

    if (
      statCard.armyTypeId === 0 ||
      statCard.armyTypeId === 0 ||
      statCard.name === ""
    ) {
      window.alert("please choose a valid option");
      setIsLoading(false);
    } else {
      API.save(statCard, "statCards").then(() => props.history.push("/stats"));
    }
  };
  useEffect(() => {
    API.get("unitTypes").then(unitType => {
      API.get("armyTypes").then(armyType => {
        setUnitType(unitType);
        setArmyType(armyType);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <>
      <div className="statCards-content" style={{backgroundColor:"#DCDCDC"}}>
        <div>
          <center>
            <br/>
            <Form style={{ width: "50%" }}>
              <InputGroup style={{width:"50%"}}>
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

              
                <FormGroup >
                <Table dark  style={{width:"50%" }} striped id="statCards">
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
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                </FormGroup>
                <div className="alignRight">
                  <Button
                    type="button"
                    className="submitButton"
                    disabled={isLoading}
                    onClick={constructNewStatCard}
                  >
                    Create Stat Card
                  </Button>
                </div>
              
            </Form>
          </center>
        </div>
      </div>
    </>
  );
};
export default StatCardForm;
