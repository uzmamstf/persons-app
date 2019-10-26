import React from 'react'
import './Persons.css'
import Person from './Person/Person'
export default function Persons() {
    const personsData =[
        {
            "name": "Bushra",
            "age": 10,
            "description": "Chef at Marriott",
            "isEditMode": true
        },
        {
            "name": "Dua",
            "age": 2,
            "description": "Happiness Officer",
            "isEditMode": false
        },
        {
            "name": "Aliza",
            "age": 5,
            "description": "Comdedian on youtube",
            "isEditMode": true
        }
    ]
    return (
        <div className="Persons">
            <h1>Persons</h1>
        {
            personsData.map(person => <Person person={person}/> )
        }

        </div>
    )
}
