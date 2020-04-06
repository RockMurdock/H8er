import React, {useState} from "react"
import {Link} from "react-router-dom"
import {Button, Toast, ToastBody, ToastHeader} from 'reactstrap'

const SpecialRule = props => {
    
    const [show, setShow] = useState(false);

    const toggle = () => setShow(!show);

    return (
        <span className="specialRulesCard-content">
            {/* <Link to={`/stats/${props.specialRule.specialRule.armyTypeId}/${props.specialRule.specialRule.id}`}> */}
            <Button onClick={toggle}>{props.specialRule.specialRule.name}</Button>
            
            <Toast isOpen={show}>
                <ToastHeader toggle={toggle}>{props.specialRule.specialRule.name}</ToastHeader>
                <ToastBody>{props.specialRule.specialRule.description}</ToastBody>
            </Toast>
            {/* </Link> */}
            <span> </span>
        </span>
        
    )
}
export default SpecialRule