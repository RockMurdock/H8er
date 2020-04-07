import React from "react";
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardText } from "reactstrap";

const SpecialRuleCards = props => {
  return (
    <div
      className="specialRulesCard-content"
      style={{ flexGrow: "auto", overflow: "auto" }}
    >
      <Card style={{ margin: "5px", width:"350px" }}>
        <CardHeader style={{ textAlign: "center", fontWeight: "bolder" }}>
          {props.specialRule.name}
        </CardHeader>
        <CardBody>
          <CardText style={{width:"300px"}}>{props.specialRule.description}</CardText>
          <ButtonGroup>
            <Button
            style={{ backgroundColor:"#A9A9A9"}}
              size="sm"
              type="button"
              className="specialRulesCardEditButton"
              onClick={() =>
                props.history.push(`/special-rules/${props.specialRule.id}/edit-rule`)
              }
            >
              Edit
            </Button>
            <Button
              size="sm"
              type="button"
              className="specialRulesCardDeleteButton"
              onClick={() =>
                props.deletehandler(props.specialRule.id, "specialRules")
              }
            >
              Delete
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </div>
  );
};
export default SpecialRuleCards;
