// src/DataLoader.js

import React, { useState } from 'react';

function DataLoader() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);

        // Simulamos una petición Ajax con un retraso de 2 segundos
        setTimeout(() => {
            const newData = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
            setData(newData);
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Mi Página con React y Ajax</h1>
            <button
                onClick={fetchData}
                disabled={loading}
                className={`px-4 py-2 rounded-md text-white font-semibold ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-500'} mb-6`}
            >
                {loading ? 'Cargando...' : 'Cargar Datos'}
            </button>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                {loading ? (
                    <p className="text-gray-600 text-center">Cargando datos...</p>
                ) : data.length > 0 ? (
                    <ul className="space-y-2">
                        {data.map((item, index) => (
                            <li key={index} className="bg-blue-100 text-blue-800 rounded p-2 text-center">
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600 text-center">No hay datos disponibles.</p>
                )}
            </div>
        </div>
    );
}

export default DataLoader;
