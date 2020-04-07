import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";
import StatCards from "../statCards/StatCards";
import {CardGroup} from "reactstrap"

const ArmyListDetail = props => {

const [currentArmyStatCards, setCurrentArmyStatCards] = useState([]);

const sum = currentArmyStatCards.map(statCard =>{
    const total =+ (statCard.statCard.unitSize * statCard.statCard.pointsPerModel)
    return total
   })
   const totalPoints = sum.reduce(function(a,b) {return a + b}, 0)
   
  useEffect(() => {
    API.getStatCardsWithArmyId(props.match.params.id).then(
      statCardsFromAPI => {
        setCurrentArmyStatCards(statCardsFromAPI);
      }
    );
  }, [props.match.params.id]);
  return (
    <>
      <div className="statCards-content" style={{backgroundColor:"#DCDCDC"}}>
        <div>
          <div className="container-cards">
        <h1 style={{textAlign:"center"}}>Total Points: {totalPoints}</h1>
            <h2 style={{textAlign:"center"}}>Lords</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {currentArmyStatCards.map(currentArmyStatCard => (
              currentArmyStatCard.statCard.unitTypeId === 1 ?(  
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />) : null
            ))}
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{textAlign:"center"}}>Heroes</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {currentArmyStatCards.map(currentArmyStatCard => (
              currentArmyStatCard.statCard.unitTypeId === 2 ?(  
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />) : null
            ))}
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{textAlign:"center"}}>Core</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {currentArmyStatCards.map(currentArmyStatCard => (
              currentArmyStatCard.statCard.unitTypeId === 3 ?(  
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />) : null
            ))}
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{textAlign:"center"}}>Special</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {currentArmyStatCards.map(currentArmyStatCard => (
              currentArmyStatCard.statCard.unitTypeId === 4 ?(  
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />) : null
            ))}
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2 style={{textAlign:"center"}}>Rare</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {currentArmyStatCards.map(currentArmyStatCard => (
              currentArmyStatCard.statCard.unitTypeId === 1 ?(  
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />) : null
            ))}
            </CardGroup>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArmyListDetail;