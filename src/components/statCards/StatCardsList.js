import React, { useState, useEffect } from "react";
import StatCards from "./StatCards";
import SpecialRuleCards from "./SpecialRuleCards";
import API from "../../modules/ApiManager";

const StatCardsList = props => {
  const [statCards, setStatCards] = useState([]);
  const [specialRules, setSpecialRules] = useState([]);

  const deletehandler = (id, str) => {
    API.delete(id, str).then(window.location.reload(true));
  };

  useEffect(() => {
    API.get("statCards").then(statCardsFromAPI => {
      setStatCards(statCardsFromAPI);
    });
  }, []);
  useEffect(() => {
    API.get("specialRules").then(rulesFromAPI => {
      setSpecialRules(rulesFromAPI);
    });
  }, []);

  return (
    <>
      <div>
        <div>
          <h1>List of Stat Cards</h1>
          <button
            type="button"
            className="addSection"
            onClick={() => {
              props.history.push("/stats/new-stat");
            }}
          >
            Add Stat Card
          </button>
          <div className="container-cards">
            <h2>Orcs and Goblins</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 1 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Empire</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 2 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Beastmen</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 3 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Bretonnia</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 4 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Daemons of Chaos</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 5 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Dark Elves</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 6 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Dogs of War</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 7 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Dwarfs</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 8 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>High Elves</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 9 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Lizardmen</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 10 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Ogre Kingdoms</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 11 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Skaven</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 12 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Tomb Kings</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 13 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Vampire Counts</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 14 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Warriors of Chaos</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 15 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Wood Elves</h2>
            {statCards.map(statCard =>
              statCard.armyTypeId === 16 ? (
                <StatCards
                  key={statCard.id}
                  statCard={statCard}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
        </div>
        <div>
          <h1>List of Special Rules</h1>
          <button
            type="button"
            className="addSection"
            onClick={() => {
              props.history.push("/stats/new-rule");
            }}
          >
            Add Special Rule
          </button>
          <div className="container-cards">
            <h2>Orcs and Goblins</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 1 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Empire</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 2 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Beastmen</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 3 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Bretonnia</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 4 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Daemons of Chaos</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 5 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Dark Elves</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 6 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Dogs of War</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 7 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Dwarfs</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 8 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>High Elves</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 9 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Lizardmen</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 10 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Ogre Kingdoms</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 11 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Skaven</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 12 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Tomb Kings</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 13 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Vampire Counts</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 14 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Warriors of Chaos</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 15 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
          <div className="container-cards">
            <h2>Wood Elves</h2>
            {specialRules.map(specialRule =>
              specialRule.armyTypeId === 16 ? (
                <SpecialRuleCards
                  key={specialRule.id}
                  specialRule={specialRule}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default StatCardsList;
