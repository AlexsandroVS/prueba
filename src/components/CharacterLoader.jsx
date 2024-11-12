// src/CharacterLoader.js
import React, { useState } from 'react';
import axios from 'axios';

function CharacterLoader() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadCharacters = () => {
        setLoading(true);
        axios
            .get('https://swapi.dev/api/people/')
            .then((response) => {
                setCharacters(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-indigo-600 mb-8">Personajes de Star Wars</h1>
            <button
                onClick={loadCharacters}
                disabled={loading}
                className={`px-5 py-2 mb-10 text-white font-semibold rounded-lg transition-colors duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300'}`}
            >
                {loading ? 'Cargando Personajes...' : 'Cargar Personajes'}
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {characters.map((character, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{character.name}</h2>
                        <p className="text-gray-700 mb-1">
                            <span className="font-semibold text-indigo-600">Género:</span> {character.gender}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold text-indigo-600">Año de nacimiento:</span> {character.birth_year}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CharacterLoader;
