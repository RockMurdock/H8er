import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";
import {
  Form,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

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
    if (
      specialRule.armyTypeId === 0 ||
      specialRule.name === "" ||
      specialRule.description === ""
    ) {
      window.alert("please fill out all fields and select valid option");
      setIsLoading(false);
    } else {
      API.save(specialRule, "specialRules").then(() =>
        props.history.push("/stats")
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
      <div className="specialRules-content">
        <br />
        <center>
          <Form style={{ width: "50%" }}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Army Type</InputGroupText>
              </InputGroupAddon>
              <Input
                type="select"
                className="form-control"
                id="armyTypeId"
                value={specialRule.armyTypeId}
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
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Name</InputGroupText>
              </InputGroupAddon>
              <Input
                type="text"
                required
                onChange={handleFieldChange}
                id="name"
                placeholder="Name of Special Rule"
                value={specialRule.name}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>Description</InputGroupText>
              </InputGroupAddon>
              <Input
                type="textarea"
                required
                onChange={handleFieldChange}
                id="description"
                placeholder="Description of Rule"
                value={specialRule.description}
              />
            </InputGroup>
            <br />

            <Button
              type="button"
              className="submitButton"
              disabled={isLoading}
              onClick={constructNewSpecialRule}
            >
              Create Special Rule
            </Button>
          </Form>
        </center>
      </div>
    </>
  );
};
export default SpecialRuleForm;
