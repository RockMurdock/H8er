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
    if (
      armyList.armyTypeId === 0 ||
      armyList.name === "" ||
      armyList.maxPoints === 0
    ) {
      window.alert("please fill out all fields and select valid option");
      setIsLoading(false);
    } else {
      API.save(armyList, "armies").then(() =>
        props.history.push("/army-lists")
      );
    }
  };
  useEffect(() => {
    API.get("armyTypes").then(armyType => {
      setArmyType(armyType);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <center>
        <br />
        <Form style={{ width: "50%" }}>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>Army Type</InputGroupText>
            </InputGroupAddon>
            <Input
              type="select"
              className="form-control"
              id="armyTypeId"
              value={armyList.armyTypeId}
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
          <br />
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>Army Name</InputGroupText>
            </InputGroupAddon>
            <Input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Name of Army List"
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>Max Points</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              required
              onChange={handleFieldChange}
              id="maxPoints"
              placeholder="Maximum Point Limit"
            />
          </InputGroup>
          <br />
          <Button
            type="button"
            className="submitButton"
            disabled={isLoading}
            onClick={constructNewArmyList}
          >
            Create Army List
          </Button>
        </Form>
      </center>
    </>
  );
};
export default ArmyListForm;
