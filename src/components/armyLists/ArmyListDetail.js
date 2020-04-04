import React, { useState, useEffect } from "react";
import API from "../../modules/ApiManager";
import StatCards from "../statCards/StatCards";

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
      <div className="statCards-content">
        <div>
          <div className="container-cards">
        <h1>Total Points: {totalPoints}</h1>
            <h2>Lords</h2>
            {currentArmyStatCards.map(currentArmyStatCard => (
              currentArmyStatCard.statCard.unitTypeId === 1 ?(  
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />) : null
            ))}
          </div>
          <div className="container-cards">
            <h2>Heroes</h2>
            {currentArmyStatCards.map(currentArmyStatCard => (
              currentArmyStatCard.statCard.unitTypeId === 2 ?(  
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />) : null
            ))}
          </div>
          <div className="container-cards">
            <h2>Core</h2>
            {currentArmyStatCards.map(currentArmyStatCard => (
              currentArmyStatCard.statCard.unitTypeId === 3 ?(  
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />) : null
            ))}
          </div>
          <div className="container-cards">
            <h2>Special</h2>
            {currentArmyStatCards.map(currentArmyStatCard => (
              currentArmyStatCard.statCard.unitTypeId === 4 ?(  
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />) : null
            ))}
          </div>
          <div className="container-cards">
            <h2>Rare</h2>
            {currentArmyStatCards.map(currentArmyStatCard => (
              currentArmyStatCard.statCard.unitTypeId === 1 ?(  
              <StatCards
                key={currentArmyStatCard.id}
                statCard={currentArmyStatCard.statCard}
                {...props}
              />) : null
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ArmyListDetail;