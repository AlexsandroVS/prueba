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
  Box,
} from "@mui/material";

const Empleado = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    axios
      .get("https://django-railway-7fog.onrender.com/api/v1/empleados/")
      .then((response) => {
        setEmpleados(response.data); // Almacenar empleados
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box className="flex justify-center mt-10">
      <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
        <Typography variant="h4" align="center" className="font-bold mb-6 text-gray-800">
          Lista de Empleados
        </Typography>
        <TableContainer component={Paper} className="shadow-md rounded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold text-gray-700">Nombre</TableCell>
                <TableCell className="font-semibold text-gray-700">Cargo</TableCell>
                <TableCell className="font-semibold text-gray-700">Fecha de Contratación</TableCell>
                <TableCell className="font-semibold text-gray-700">Salario</TableCell>
                <TableCell className="font-semibold text-gray-700">Rol</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {empleados.map((empleado) => (
                <TableRow key={empleado.id} className="hover:bg-gray-100">
                  <TableCell>{empleado.persona.nombre} {empleado.persona.apellidos}</TableCell>
                  <TableCell>{empleado.cargo}</TableCell>
                  <TableCell>{empleado.fecha_contratacion}</TableCell>
                  <TableCell>{empleado.salario}</TableCell>
                  <TableCell>{empleado.rol}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default Empleado;
