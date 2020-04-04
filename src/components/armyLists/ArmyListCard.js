import React from "react";
import {Link} from "react-router-dom"
const ArmyListCard = props => {
  return (
    <h4>
      <Link to={`/army-lists/${props.armyList.id}/detail`}>
      {props.armyList.name}</Link> {props.armyList.maxPoints}
      <button
        type="button"
        className="armyListEditButton"
        onClick={() =>
          props.history.push(`/army-lists/${props.armyList.id}/edit-armycard`)
        }
      >
        Edit
      </button>
      <button
          type="button"
          onClick={() => props.deletehandler(props.armyList.id, "armies")}
        >
          Delete
        </button>
        <button
        type="button"
        className="armyListAddStatCardButton"
        onClick={() =>
          props.history.push(`/army-lists/${props.armyList.id}/edit-armylist`)
        }
      >
        Add/Remove Stat Cards
      </button>
    </h4>
  );
};
export default ArmyListCard;
