import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const Persona = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    axios
      .get("https://django-railway-7fog.onrender.com/api/v1/personas/")
      .then((response) => {
        setPersonas(response.data); // Acceder correctamente a los datos
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ marginTop: "20px" }} className="p-20">
      <Typography variant="h4" gutterBottom className="text-center font-bold">
        Lista de Personas
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell>Nombre</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {personas.map((persona) => (
              <TableRow key={persona.id}>
                <TableCell>{persona.nombre}</TableCell>
                <TableCell>{persona.apellidos}</TableCell>
                <TableCell>{persona.email}</TableCell>
                <TableCell>{persona.telefono}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Persona;
