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
    <div style={{backgroundColor:"#DCDCDC"}}>
      <div>
          <h1 style={{textAlign:"center"}}>Army Lists</h1>
          <center>
          <Button
          style={{backgroundColor:"#505050"}}
            size="sm"
            type="button"
            className="addSection"
            onClick={() => {
              props.history.push("/army-lists/new");
            }}
          >
            Add Army List
          </Button >
          </center>
          <div className="container-cards">
            <h2 style={{textAlign:"center"}}>Orcs and Goblins</h2>
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
            <h2 style={{textAlign:"center"}}>Empire</h2>
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
          <h2 style={{textAlign:"center"}}>Beastmen</h2>
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
            <h2 style={{textAlign:"center"}}>Bretonnia</h2>
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
            <h2 style={{textAlign:"center"}}>Daemons of Chaos</h2>
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
            <h2 style={{textAlign:"center"}}>Dark Elves</h2>
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
            <h2 style={{textAlign:"center"}}>Dogs of War</h2>
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
            <h2 style={{textAlign:"center"}}>Dwarfs</h2>
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
            <h2 style={{textAlign:"center"}}>High Elves</h2>
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
            <h2 style={{textAlign:"center"}}>Lizardmen</h2>
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
            <h2 style={{textAlign:"center"}}>Ogre Kingdoms</h2>
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
            <h2 style={{textAlign:"center"}}>Skaven</h2>
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
            <h2 style={{textAlign:"center"}}>Tomb Kings</h2>
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
            <h2 style={{textAlign:"center"}}>Vampire Counts</h2>
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
            <h2 style={{textAlign:"center"}}>Warriors of Chaos</h2>
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
            <h2 style={{textAlign:"center"}}>Wood Elves</h2>
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
        
      </div>
    </div>
  );
};
export default ArmyListList;
