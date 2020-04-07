import React, { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

const SpecialRule = props => {
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <span className="specialRulesCard-content">
      <Button style={{backgroundColor:"#E8E8E8", color:"black"}} onClick={toggle}>{props.specialRule.specialRule.name}</Button>

      <Toast isOpen={show}>
        <ToastHeader toggle={toggle}>
          {props.specialRule.specialRule.name}
        </ToastHeader>
        <ToastBody>{props.specialRule.specialRule.description}</ToastBody>
      </Toast>

      <span> </span>
    </span>
  );
};
export default SpecialRule;
