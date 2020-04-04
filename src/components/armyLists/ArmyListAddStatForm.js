import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";
import StatCards from "../statCards/StatCards";

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
      <div className="statCards-content">
        <div>
          <label htmlFor="armyType">Stat Cards</label>
          <select
            className="form-control"
            id="statCardId"
            value={armyStatCards.id}
            onChange={handleFieldChange}
          >
            <option value={0}>select option</option>
            {statCards.map(statCard => (
              <option key={statCard.id} value={statCard.id}>
                {statCard.name}
                {statCard.unitSize}
              </option>
            ))}
          </select>
          <div className="alignRight">
            <button
              type="button"
              className="submitButton"
              disabled={isLoading}
              onClick={constructNewArmyStatCard}
            >
              Add Stat Card
            </button>
          </div>
          <label htmlFor="armyType">Current Stat Cards</label>
          <select
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
          </select>
          <div className="alignRight">
            <button
              type="button"
              className="removeButton"
              disabled={isLoading}
              onClick={deletehandler}
            >
              Remove Stat Card
            </button>
          </div>
          <div className="container-cards">
            <h2>My Army Stat Cards</h2>
            {currentArmyStatCards.map(currentArmyStatCard => (
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ArmyListAddStatForm;
