import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";
import StatCards from "../statCards/StatCards";
import {Button, Input, Form, InputGroup, InputGroupAddon,InputGroupText, CardGroup} from "reactstrap"

const ArmyListAddStatForm = props => {
  const [armyStatCards, setArmyStatCards] = useState({
    statCardId: 0,
    armyId: 0
  });
  const [cardToDelete, setCardToDelete] = useState({
    id: 0
  });
  const [currentArmyStatCards, setCurrentArmyStatCards] = useState([]);
  const [statCards, setStatCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...armyStatCards };
    stateToChange[evt.target.id] = evt.target.value;
    setArmyStatCards(stateToChange);
  };
  const handleFieldChangeToRemove = evt => {
    const stateToChange = { ...cardToDelete };
    stateToChange[evt.target.id] = evt.target.value;
    setCardToDelete(stateToChange);
  };
  const constructNewArmyStatCard = evt => {
    evt.preventDefault();
    setIsLoading(true);
    armyStatCards.statCardId = parseFloat(armyStatCards.statCardId);
    armyStatCards.armyId = parseFloat(props.match.params.armyListId);

    API.save(armyStatCards, "armyStatCards").then(() =>
      API.getStatCardsWithArmyId(props.match.params.armyListId).then(
        statCardsFromAPI => {
          setCurrentArmyStatCards(statCardsFromAPI);
        }
      )
    );
    setIsLoading(false)
  };
  const deletehandler = evt => {
    evt.preventDefault();
    API.delete(cardToDelete.id, "armyStatCards").then(() =>
      API.getStatCardsWithArmyId(props.match.params.armyListId).then(
        statCardsFromAPI => {
          setCurrentArmyStatCards(statCardsFromAPI);
        }
      )
    );
  };

  const sum = currentArmyStatCards.map(statCard =>{
    const total =+ (statCard.statCard.unitSize * statCard.statCard.pointsPerModel)
    return total
   })
   const totalPoints = sum.reduce(function(a,b) {return a + b}, 0)

  useEffect(() => {
    API.embedWithId(
      "armies",
      "armyStatCards",
      props.match.params.armyListId
    ).then(result => {
      API.specialWithArmyType("statCards", result.armyTypeId).then(stats => {
        setStatCards(stats);
        setIsLoading(false);
      });
    });
  }, [props.match.params.armyListId]);
  useEffect(() => {
    API.getStatCardsWithArmyId(props.match.params.armyListId).then(
      statCardsFromAPI => {
        setCurrentArmyStatCards(statCardsFromAPI);
      }
    );
  }, [props.match.params.armyListId]);

  return (
    <>
      <div className="statCards-content" style={{backgroundColor:"#DCDCDC"}}>
        <br/>
        <center>
          <Form style={{width:"50%"}}>
          <InputGroup>
          <InputGroupAddon addonType="prepend">
          <InputGroupText>StatCards</InputGroupText>
          </InputGroupAddon>
          <Input
          type="select"
            className="form-control"
            id="statCardId"
            value={armyStatCards.id}
            onChange={handleFieldChange}
          >
            <option value={0}>select option</option>
            {statCards.map(statCard => (
              <option key={statCard.id} value={statCard.id}>
                {statCard.name}{" "}
                {statCard.unitSize}
              </option>
            ))}
          </Input>
          
          
            <Button
              type="button"
              className="submitButton"
              disabled={isLoading}
              onClick={constructNewArmyStatCard}
            >
              Add Stat Card
            </Button>
            </InputGroup>
            <br/>
          <InputGroup>
          <InputGroupAddon addonType="prepend">
          <InputGroupText>Current Stat Cards</InputGroupText>
          </InputGroupAddon>
          <Input
            type="select"
            className="form-control"
            id="id"
            value={currentArmyStatCards.id}
            onChange={handleFieldChangeToRemove}
          >
            <option value={0}>select option</option>
            {currentArmyStatCards.map(statCard => (
              <option key={statCard.id} value={statCard.id}>
                {statCard.statCard.name}
                {statCard.statCard.unitSize}
              </option>
            ))}
          </Input>
          
            <Button
              type="button"
              className="removeButton"
              disabled={isLoading}
              onClick={deletehandler}
            >
              Remove Stat Card
            </Button>
          
          </InputGroup>
          </Form>
          <br/>
          </center>
          <div className="container-cards">
          <h1 style={{textAlign:"center"}}>Total Points: {totalPoints}</h1>
            <h2 style={{textAlign:"center"}}>My Army Stat Cards</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {currentArmyStatCards.map(currentArmyStatCard => (
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />
            ))}
            </CardGroup>
          </div>
        
        
        
      </div>
    </>
  );
};
export default ArmyListAddStatForm;
