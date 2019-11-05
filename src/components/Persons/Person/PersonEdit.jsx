import React from 'react'
import './PersonEdit.css'
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
export default function PersonEdit(props) {
    return (
        <div className="PersonEdit">


            <Card.Body className="PersonInfo">
                <Card.Title>Edit Person</Card.Title>
                <Card.Text>
                    <input value={props.person.name} type="text" />
                    <input value={props.person.age} type="number" />
                    <textarea>{props.person.description}</textarea>

                </Card.Text>

                <ButtonGroup className="button-group" aria-label="Basic example">
                    <Button variant="light">
                        <FontAwesomeIcon className="text-info" icon={faEdit} />
                    </Button>
                    <Button variant="light">
                        <FontAwesomeIcon className="text-danger" icon={faTimes} onClick={props.CloseClick} />
                    </Button>
                </ButtonGroup>
            </Card.Body>
        </div>
    )
}

// PerosnEdit.propTypes = {
//     person: PropType.object,
//     CloseClick: PropType.func,

// }
