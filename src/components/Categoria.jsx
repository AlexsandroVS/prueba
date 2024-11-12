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

const Categoria = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get("https://django-railway-7fog.onrender.com/api/v1/categorias/")
      .then((response) => {
        setCategorias(response.data); // Almacenar datos correctamente
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box className="flex justify-center mt-10">
      <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
        <Typography variant="h4" align="center" className="font-bold mb-6 text-gray-800">
          Lista de Categorías
        </Typography>
        <TableContainer component={Paper} className="shadow-md rounded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold text-gray-700">Nombre</TableCell>
                <TableCell className="font-semibold text-gray-700">Es Medicamento</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categorias.map((categoria) => (
                <TableRow key={categoria.id} className="hover:bg-gray-100">
                  <TableCell>{categoria.nombre}</TableCell>
                  <TableCell>{categoria.es_medicamento ? "Sí" : "No"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default Categoria;
