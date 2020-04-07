import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle
} from "reactstrap";

const ArmyListCard = props => {
  return (
    <>
      <div >
        <Card style={{ margin: "5%" }}>
          <h4>
            <CardHeader style={{textAlign:"center"}}>
              <Link style={{textDecoration:"none", color:"black"}} to={`/army-lists/${props.armyList.id}/detail`}>
                {props.armyList.name}
              </Link>
            </CardHeader>
          </h4>
          <CardBody>
            <CardTitle>Maximum Points:{props.armyList.maxPoints}</CardTitle>
            <ButtonGroup>
              <Button
                style={{fontSize:"80%", backgroundColor:"#A9A9A9"}}
                size={"sm"}
                type="button"
                className="armyListEditButton"
                onClick={() =>
                  props.history.push(
                    `/army-lists/${props.armyList.id}/edit-armycard`
                  )
                }
              >
                Edit
              </Button>
              <Button
              style={{fontSize:"80%"}}
                size={"sm"}
                type="button"
                onClick={() => props.deletehandler(props.armyList.id, "armies")}
              >
                Delete
              </Button>
              <Button
              style={{fontSize:"80%", backgroundColor:"#686868"}}
                size={"sm"}
                type="button"
                className="armyListAddStatCardButton"
                onClick={() =>
                  props.history.push(
                    `/army-lists/${props.armyList.id}/edit-armylist`
                  )
                }
              >
                Add/Remove Stat Cards
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default ArmyListCard;
