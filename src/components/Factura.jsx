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

const Factura = () => {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    axios
      .get("https://django-railway-7fog.onrender.com/api/v1/facturas/")
      .then((response) => {
        setFacturas(response.data); // Almacenar las facturas
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box className="flex justify-center mt-10">
      <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
        <Typography variant="h4" align="center" className="font-bold mb-6 text-gray-800">
          Lista de Facturas
        </Typography>
        <TableContainer component={Paper} className="shadow-md rounded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold text-gray-700">ID Factura</TableCell>
                <TableCell className="font-semibold text-gray-700">Cantidad</TableCell>
                <TableCell className="font-semibold text-gray-700">Fecha</TableCell>
                <TableCell className="font-semibold text-gray-700">Empleado</TableCell>
                <TableCell className="font-semibold text-gray-700">Cliente</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {facturas.map((factura) => (
                <TableRow key={factura.id} className="hover:bg-gray-100">
                  <TableCell>{factura.id}</TableCell>
                  <TableCell>{factura.cantidad}</TableCell>
                  <TableCell>{factura.fecha}</TableCell>
                  <TableCell>{factura.empleado}</TableCell>
                  <TableCell>{factura.cliente}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default Factura;
