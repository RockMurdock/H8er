import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form
} from "reactstrap";

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
    };

    API.update(editedArmyList, "armies").then(() =>
      props.history.push("/army-lists")
    );
  };
  useEffect(() => {
    API.edit(props.match.params.armyListId, "armies").then(armyList => {
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
    <div style={{backgroundColor:"#DCDCDC"}}>
      <center >
        <br />
        <Form style={{ width: "50%" }}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Army Type</InputGroupText>
            </InputGroupAddon>
            <Input
              type="select"
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
            </Input>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Army Name</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Name of Army List"
              value={armyList.name}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Max Points</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              required
              onChange={handleFieldChange}
              id="maxPoints"
              placeholder="Maximum Point Limit"
              value={armyList.maxPoints}
            />
          </InputGroup>
          <br />
          <Button
            type="button"
            className="submitButton"
            disabled={isLoading}
            onClick={updateExistingArmyList}
          >
            Edit Army List
          </Button>
        </Form>
      </center>
      </div>
    </>
  );
};
export default ArmyListEditForm;
