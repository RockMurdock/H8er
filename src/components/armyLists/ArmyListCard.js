import React from "react";
import {Link} from "react-router-dom"
import {Button, ButtonGroup, Card, CardBody, CardHeader} from 'reactstrap'

const ArmyListCard = props => {
  return (
    <div>
    <Card style={{margin:"5%"}}>
    <h4>
      <CardHeader>
      <Link to={`/army-lists/${props.armyList.id}/detail`} >
      {props.armyList.name}</Link> {props.armyList.maxPoints}
      </CardHeader>
   </h4>
   <CardBody>
      <ButtonGroup>
      <Button
        size={"sm"}
        type="button"
        className="armyListEditButton"
        onClick={() =>
          props.history.push(`/army-lists/${props.armyList.id}/edit-armycard`)
        }
      >
        Edit
      </Button>
      <Button
      size={"sm"}
          type="button"
          onClick={() => props.deletehandler(props.armyList.id, "armies")}
        >
          Delete
        </Button>
        <Button
        size={"sm"}
        type="button"
        className="armyListAddStatCardButton"
        onClick={() =>
          props.history.push(`/army-lists/${props.armyList.id}/edit-armylist`)
        }
      >
        Add/Remove Stat Cards
      </Button>
      </ButtonGroup>
      </CardBody>
      </Card>
      </div>
  );
};
export default ArmyListCard;
