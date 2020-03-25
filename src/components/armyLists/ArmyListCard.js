import React from "react";

const ArmyListCard = props => {
  return (
    <h4>
      {props.armyList.name} {props.armyList.maxPoints}
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
        Add/Remove Units
      </button>
    </h4>
  );
};
export default ArmyListCard;
