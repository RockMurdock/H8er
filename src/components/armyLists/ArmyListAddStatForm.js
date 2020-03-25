import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";
import StatCards from "../statCards/StatCards";

const ArmyListAddStatForm = props => {
  const [armyStatCards, setArmyStatCards] = useState({
    statCardId: 0,
    armyId: 0
  });
  const [currentArmyStatCards, setCurrentArmyStatCards] = useState([]);
  const [statCards, setStatCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...armyStatCards };
    stateToChange[evt.target.id] = evt.target.value;
    setArmyStatCards(stateToChange);
  };
  const constructNewArmyStatCard = evt => {
    evt.preventDefault();
    setIsLoading(true);
    armyStatCards.statCardId = parseFloat(armyStatCards.statCardId);
    armyStatCards.armyId = parseFloat(props.match.params.armyListId);
    console.log(armyStatCards);

    API.save(armyStatCards, "armyStatCards").then(() =>
      props.history.push("/army-lists")
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
            {statCards.map(statCard => (
              <option key={statCard.id} value={statCard.id}>
                {statCard.name}
              </option>
            ))}
          </select>
          <div>
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
            <div className="container-cards">
              <h2>My Army Stat Cards</h2>
              {currentArmyStatCards.map(currentArmyStatCard => (
                  
                <StatCards key={currentArmyStatCard.id} statCard={currentArmyStatCard.statCard} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArmyListAddStatForm;
