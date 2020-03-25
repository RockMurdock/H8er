import React, { useState, useEffect } from "react";
import ArmyListCard from "./ArmyListCard";
import API from "../../modules/ApiManager";

const ArmyListList = props => {
  const [armyLists, setArmyLists] = useState([]);

  const deletehandler = (id, str) => {
    API.delete(id, str).then(() =>
      API.getWithId("armies", sessionStorage.getItem("userId")).then(
        armiesFromAPI => {
          setArmyLists(armiesFromAPI);
        }
      )
    );
  };

  useEffect(() => {
    API.getWithId("armies", sessionStorage.getItem("userId")).then(
      armiesFromAPI => {
        setArmyLists(armiesFromAPI);
      }
    );
  }, []);
  return (
    <div>
      <div>
        <h1>Army Lists</h1>
        <button
          type="button"
          className="addSection"
          onClick={() => {
            props.history.push("/army-lists/new");
          }}
        >
          Add Army List
        </button>
        <div className="container-cards">
          <h2>Orcs and Goblins</h2>
          {armyLists.map(armyList =>
            armyList.armyTypeId === 1 ? (
              <ArmyListCard key={armyList.id} armyList={armyList} deletehandler={deletehandler} {...props} />
            ) : null
          )}
        </div>
        <div className="container-cards">
          <h2>Empire</h2>
          {armyLists.map(armyList =>
            armyList.armyTypeId === 2 ? (
              <ArmyListCard key={armyList.id} armyList={armyList} deletehandler={deletehandler} {...props} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
export default ArmyListList;
