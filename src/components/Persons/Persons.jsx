import React, { Component } from 'react'
import './Persons.css'
import Person from './Person/Person'


// return (
//     <div className="Persons">
//         <h1>Persons</h1>
//         {
//             personsData.map(person => <Person person={person} />)
//         }

//     </div>
// )



export default class Persons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personsData: [
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
        }
            enabledEdit = (p, newValue) => {
                this.setState({
                    personsData: this.state.personsData.map(pFocus => {
                        pFocus.name === p.name ? pFocus.isEditMode = newValue : pFocus.isEditMode = false
                        return pFocus;
                    }
                    )
                })
            }
            ClickDelete = (p) => {
                this.setState({
                    personsData: this.state.personsData.filter(function (person) {
                        return person.name !== p.name
                    }
                    )
                })
            }


        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
