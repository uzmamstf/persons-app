import React from 'react'
import './PersonInfo.css'
import { Card, Button , ButtonGroup} from 'react-bootstrap';
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTimes} from '@fortawesome/free-solid-svg-icons'
import Person from './Person'

export default function PersonInfo(props) {
    return (

        <Card.Body className="PersonInfo">
            <Card.Title>{props.person.name},{props.person.age}</Card.Title>
            <Card.Text>{props.person.description}</Card.Text>

            <ButtonGroup className="button-group" aria-label="Basic example">
                <Button variant="light">
                    <FontAwesomeIcon className="text-info" icon={faEdit}   onClick={props.enableEdit}/>
                </Button>
                <Button variant="light">
                <FontAwesomeIcon className="text-danger" icon={faTimes} onClick={props.personDelete} />
                </Button>
            </ButtonGroup>
        </Card.Body>

    )
}


// Person.propTypes = {
//     person: propTypes.object,
//     enableEdit:PropType.func,
//     personDelete:PropType.func
// } 