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

const SpecialRuleEditForm = props => {
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
  const updateExistingSpecialRule = evt => {
    evt.preventDefault();
    setIsLoading(true);
    const editedSpecialRule = {
      id: props.match.params.specialRuleId,
      name: specialRule.name,
      description: specialRule.description,
      armyTypeId: parseFloat(specialRule.armyTypeId)
    };

    API.update(editedSpecialRule, "specialRules").then(() => props.history.push("/stats"));
}
  useEffect(() => {
    API.get("armyTypes").then(armyType => {
        API.edit(props.match.params.specialRuleId, "specialRules").then(specialRule => {
            setSpecialRule(specialRule)
            setArmyType(armyType);
            setIsLoading(false);
        })
    });
  }, [props.match.params.specialRuleId]);

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
              onClick={updateExistingSpecialRule}
            >
              Create Special Rule
            </Button>
          </Form>
        </center>
      </div>
    </>
  );
};
export default SpecialRuleEditForm;