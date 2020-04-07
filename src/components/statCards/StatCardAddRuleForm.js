import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";
import {
  Button,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardGroup
} from "reactstrap";
import SpecialRuleCards from "../statCards/SpecialRuleCards";

const StatCardAddRuleForm = props => {
  const [statCardRules, setStatCardRules] = useState({
    statCardId: 0,
    specialRuleId: 0
  });
  const [cardToDelete, setCardToDelete] = useState({
    id: 0
  });
  const [specialRules, setSpecialRules] = useState([]);
  const [currentSpecialRules, setCurrentSpecialRules] = useState([]);
  const [rulesOnStatCard, setRulesOnStatCard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...statCardRules };
    stateToChange[evt.target.id] = evt.target.value;
    setStatCardRules(stateToChange);
  };

  const handleFieldChangeToRemove = evt => {
    const stateToChange = { ...cardToDelete };
    stateToChange[evt.target.id] = parseInt(evt.target.value);
    setCardToDelete(stateToChange);
  };

  const deletehandler = evt => {
    evt.preventDefault();
    API.delete(cardToDelete.id, "statCardRules").then(() =>
      API.getRulesByStatCard(props.match.params.statCardId).then(rules => {
        setRulesOnStatCard(rules);
      })
    );
  };

  const constructNewSpecialRule = evt => {
    evt.preventDefault();
    setIsLoading(true);
    statCardRules.statCardId = parseFloat(props.match.params.statCardId);
    statCardRules.specialRuleId = parseFloat(statCardRules.specialRuleId);
    let rule = currentSpecialRules.find(rules => {
      if (
        rules.specialRuleId === statCardRules.specialRuleId ||
        statCardRules.specialRuleId === 0
      ) {
        return rules;
      } else {
        return "";
      }
    });
    if (rule === undefined) {
      API.save(statCardRules, "statCardRules").then(() =>
      API.getRulesByStatCard(props.match.params.statCardId).then(rules => {
        setRulesOnStatCard(rules);})
      );
    } else {
      window.alert("Please select a valid option");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    API.embedWithId(
      "statCards",
      "statCardRules",
      props.match.params.statCardId
    ).then(result => {
      API.specialWithArmyType("specialRules", result.armyTypeId).then(rules => {
        setSpecialRules(rules);
        setCurrentSpecialRules(result.statCardRules);
        setIsLoading(false);
      });
    });
  }, [props.match.params.statCardId]);
  useEffect(() => {
    API.getRulesByStatCard(props.match.params.statCardId).then(rules => {
      setRulesOnStatCard(rules);
    });
  }, [props.match.params.statCardId]);
  return (
    <>
    <div style={{backgroundColor:"#DCDCDC"}}>
      <center>
        <Form>
          <div className="specialRules-content">
            <br />
            <InputGroup style={{ width: "50%" }}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Special Rules</InputGroupText>
              </InputGroupAddon>
              <Input
                type="select"
                className="form-control"
                id="specialRuleId"
                value={statCardRules.id}
                onChange={handleFieldChange}
              >
                <option value={0}>select option</option>
                {specialRules.map(specialRule => (
                  <option key={specialRule.id} value={specialRule.id}>
                    {specialRule.name}
                  </option>
                ))}
              </Input>
              <InputGroupAddon addonType="append">
                <Button
                  type="button"
                  className="submitButton"
                  disabled={isLoading}
                  onClick={constructNewSpecialRule}
                >
                  {" "}
                  Add Special Rule
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <br />
          <div className="specialRules-content">
            <InputGroup style={{ width: "50%" }}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Current Special Rules</InputGroupText>
              </InputGroupAddon>
              <Input
                type="select"
                className="form-control"
                id="id"
                value={rulesOnStatCard.id}
                onChange={handleFieldChangeToRemove}
              >
                <option value={0}>select option</option>
                {rulesOnStatCard.map(specialRule => (
                  <option key={specialRule.id} value={specialRule.id}>
                    {specialRule.specialRule.name}
                  </option>
                ))}
              </Input>
              <InputGroupAddon addonType="append">
                <Button
                  type="button"
                  className="removeButton"
                  disabled={isLoading}
                  onClick={deletehandler}
                >
                  Remove Special Rule
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Form>
      </center>
      <br />
      <div className="container-cards">
        <h2 style={{ textAlign: "center" }}>Current Special Rules</h2>
        <CardGroup style={{ display: "flex", justifyContent: "space-evenly" }}>
          {rulesOnStatCard.map(specialRule => (
            <SpecialRuleCards
              key={specialRule.id}
              specialRule={specialRule.specialRule}
              {...props}
            />
          ))}
        </CardGroup>
      </div>
      </div>
    </>
  );
};
export default StatCardAddRuleForm;
