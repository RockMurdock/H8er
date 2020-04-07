import React, { useState, useEffect } from "react";
import StatCards from "./StatCards";
import SpecialRuleCards from "./SpecialRuleCards";
import API from "../../modules/ApiManager";
import { Button, CardGroup } from "reactstrap";

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
      <div style={{backgroundColor:"#DCDCDC"}}>
        <div>
          <h1 style={{ textAlign: "center" }}>List of Stat Cards</h1>
          <center>
            <Button
            style={{backgroundColor:"#505050"}}
              size="sm"
              type="button"
              className="addStatCard"
              onClick={() => {
                props.history.push("/stats/new-stat");
              }}
            >
              Add Stat Card
            </Button>
          </center>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Orcs and Goblins</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Empire</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Beastmen</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Bretonnia</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Daemons of Chaos</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Dark Elves</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Dogs of War</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Dwarfs</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>High Elves</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Lizardmen</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Ogre Kingdoms</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Skaven</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Tomb Kings</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Vampire Counts</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Warriors of Chaos</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Wood Elves</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>List of Special Rules</h1>
          <center>
            <Button
            style={{backgroundColor:"#505050"}}
              size="sm"
              type="button"
              className="addSection"
              onClick={() => {
                props.history.push("/stats/new-rule");
              }}
            >
              Add Special Rule
            </Button>
          </center>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Orcs and Goblins</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Empire</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Beastmen</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Bretonnia</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Daemons of Chaos</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Dark Elves</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Dogs of War</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Dwarfs</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>High Elves</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Lizardmen</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Ogre Kingdoms</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Skaven</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Tomb Kings</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Vampire Counts</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Warriors of Chaos</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{ textAlign: "center" }}>Wood Elves</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
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
            </CardGroup>
          </div>
        </div>
      </div>
    </>
  );
};
export default StatCardsList;
