// src/CharacterList.js
import React, { Component } from 'react';
import axios from 'axios';

class CharacterList extends Component {
    state = {
        characters: [],
    };

    componentDidMount() {
        axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                this.setState({ characters: response.data.results });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Personajes de Star Wars</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {this.state.characters.map((character, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold mb-2">{character.name}</h3>
                            <p>
                                <strong>Género:</strong> {character.gender}
                            </p>
                            <p>
                                <strong>Año de nacimiento:</strong> {character.birth_year}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default CharacterList;
