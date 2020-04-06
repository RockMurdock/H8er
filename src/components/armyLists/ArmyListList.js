import React, { useState, useEffect } from "react";
import ArmyListCard from "./ArmyListCard";
import API from "../../modules/ApiManager";
import { Button, CardGroup } from "reactstrap";

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
        <center>
          <h1>Army Lists</h1>
          <Button
            size="sm"
            type="button"
            className="addSection"
            onClick={() => {
              props.history.push("/army-lists/new");
            }}
          >
            Add Army List
          </Button>
          <div className="container-cards">
            <h2>Orcs and Goblins</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              {armyLists.map(armyList =>
                armyList.armyTypeId === 1 ? (
                  <ArmyListCard
                    key={armyList.id}
                    armyList={armyList}
                    deletehandler={deletehandler}
                    {...props}
                  />
                ) : null
              )}
            </CardGroup>
          </div>
          <div className="container-cards">
            <h2>Empire</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 2 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
          </div>
          <h2>Beastmen</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 3 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Bretonnia</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 4 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Daemons of Chaos</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 5 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Dark Elves</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 6 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Dogs of War</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 7 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Dwarfs</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 8 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>High Elves</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 9 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Lizardmen</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 10 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Ogre Kingdoms</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 11 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Skaven</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 12 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Tomb Kings</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 13 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Vampire Counts</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 14 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Warriors of Chaos</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 15 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
            <h2>Wood Elves</h2>
            <CardGroup
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
            {armyLists.map(armyList =>
              armyList.armyTypeId === 16 ? (
                <ArmyListCard
                  key={armyList.id}
                  armyList={armyList}
                  deletehandler={deletehandler}
                  {...props}
                />
              ) : null
            )}
            </CardGroup>
        </center>
      </div>
    </div>
  );
};
export default ArmyListList;
