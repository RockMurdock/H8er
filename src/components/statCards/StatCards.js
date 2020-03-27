import React from "react";
import { useState, useEffect } from "react";
import API from "../../modules/ApiManager";
import SpecialRule from "./SpecialRule";

const StatCards = props => {
  const [specialRules, setSpecialRules] = useState([]);

  

  useEffect(() => {
    API.getSpecialRule(props.statCard.id).then(specailRulesFromAPI => {
      setSpecialRules(specailRulesFromAPI);
    });
  },[props.statCard.id])
var totalPoints = (props.statCard.pointsPerModel*props.statCard.unitSize)
  return (
    <div className="statCards-content">
      <div>
        <div>
          <table id="statCards">
            <tbody>
              <tr>
                <th>Points</th>
                <th>PPM</th>
                <th>Name</th>
                <th>M</th>
                <th>WS</th>
                <th>BS</th>
                <th>S</th>
                <th>T</th>
                <th>W</th>
                <th>I</th>
                <th>A</th>
                <th>LD</th>
                <th>US</th>
              </tr>
              <tr>
                <td>{totalPoints}</td>
                <td>{props.statCard.pointsPerModel}</td>
                <td>{props.statCard.name}</td>
                <td>{props.statCard.movement}</td>
                <td>{props.statCard.weaponSkill}</td>
                <td>{props.statCard.ballisticSkill}</td>
                <td>{props.statCard.strength}</td>
                <td>{props.statCard.toughness}</td>
                <td>{props.statCard.wounds}</td>
                <td>{props.statCard.initiative}</td>
                <td>{props.statCard.attacks}</td>
                <td>{props.statCard.leadership}</td>
                <td>{props.statCard.unitSize}</td>
              </tr>
            </tbody>
          </table>
          <span>
            {specialRules.map(specialRule => (
              <SpecialRule
                key={specialRule.id}
                specialRule={specialRule}
                {...props}
              />
            ))}
          </span>
        </div>
        <button
          type="button" className="statCardEditButton"
          onClick={() => props.history.push(`/stats/${props.statCard.id}/edit-stat`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deletehandler(props.statCard.id, "statCards")}
        >
          Delete
        </button>
        <button
          type="button" className="specialRuleAddButton"
          onClick={() => props.history.push(`/stats/${props.statCard.id}/add-rule`)}
        >
          Add/Remove Rule
        </button>
      </div>
    </div>
  );
};
export default StatCards;
