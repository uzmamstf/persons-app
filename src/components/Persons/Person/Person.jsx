import React from 'react'
import './Person.css'
import propTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap';
import PersonInfo from './PersonInfo'
import PersonEdit from './PersonEdit'

export default function Person(props) {
    return (

        <Card style={{ width: '18rem' }}>
            {
                props.person.isEditMode ? <PersonEdit person={props.person} /> : <PersonInfo person={props.person} />
            }
        </Card>

    )
}
// Person.propTypes ={
//     person: propTypes.object
// }