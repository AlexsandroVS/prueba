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

const Cliente = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios
      .get("https://django-railway-7fog.onrender.com/api/v1/clientes/")
      .then((response) => {
        setClientes(response.data); // Almacenar los clientes
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box className="flex justify-center mt-10">
      <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
        <Typography variant="h4" align="center" className="font-bold mb-6 text-gray-800">
          Lista de Clientes
        </Typography>
        <TableContainer component={Paper} className="shadow-md rounded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold text-gray-700">Nombre</TableCell>
                <TableCell className="font-semibold text-gray-700">Apellido</TableCell>
                <TableCell className="font-semibold text-gray-700">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientes.map((cliente, index) => (
                <TableRow key={index} className="hover:bg-gray-100">
                  <TableCell>{cliente.first_name}</TableCell>
                  <TableCell>{cliente.last_name}</TableCell>
                  <TableCell>{cliente.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default Cliente;
    