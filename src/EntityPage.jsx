import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const EntityPage = ({ endpoint }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Llamar a la API para obtener los datos de la entidad
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://django-railway-7fog.onrender.com/api/v1/${endpoint}/`);
                setData(response.data); // Asignamos los datos de la respuesta al estado
                setFilteredData(response.data); // Inicializamos filteredData con los datos completos
            } catch (err) {
                setError('Error al cargar los datos');
            } finally {
                setLoading(false); // Cambiar el estado de carga a falso
            }
        };

        fetchData();
    }, [endpoint]); // Repetir si el endpoint cambia

    // Manejar la búsqueda
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value === '') {
            setFilteredData(data); // Si no hay búsqueda, mostrar todos los datos
        } else {
            const filtered = data.filter((item) => {
                // Filtrar por cualquier campo de texto (ajustar según la entidad)
                return (
                    item.nombre?.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    item.first_name?.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    item.email?.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    item.telefono?.toLowerCase().includes(e.target.value.toLowerCase())
                );
            });
            setFilteredData(filtered); // Actualizar los datos filtrados
        }
    };

    // Mostrar mientras se cargan los datos
    if (loading) return <div>Cargando datos...</div>;

    // Mostrar mensaje de error si no se pudo obtener los datos
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{endpoint.charAt(0).toUpperCase() + endpoint.slice(1)}</h2>

            {/* Barra de búsqueda */}
            <div className="mb-4 flex items-center">
                <TextField
                    label="Buscar"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={handleSearch}
                    InputProps={{
                        endAdornment: (
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                />
            </div>

            {/* Tabla de datos */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {/* Suponiendo que cada entidad tiene estos campos comunes */}
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Correo</TableCell>
                            <TableCell>Teléfono</TableCell>
                            {/* Agregar más columnas según sea necesario */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.nombre || item.first_name}</TableCell>
                                <TableCell>{item.correo || item.email}</TableCell>
                                <TableCell>{item.telefono || item.phone}</TableCell>
                                {/* Agregar más celdas según los datos disponibles */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default EntityPage;
