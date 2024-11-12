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

const Venta = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    axios
      .get("https://django-railway-7fog.onrender.com/api/v1/ventas/")
      .then((response) => {
        setVentas(response.data); // Almacenar las ventas
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box className="flex justify-center mt-10">
      <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
        <Typography variant="h4" align="center" className="font-bold mb-6 text-gray-800">
          Lista de Ventas
        </Typography>
        <TableContainer component={Paper} className="shadow-md rounded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold text-gray-700">ID Venta</TableCell>
                <TableCell className="font-semibold text-gray-700">Cantidad</TableCell>
                <TableCell className="font-semibold text-gray-700">Precio Unitario</TableCell>
                <TableCell className="font-semibold text-gray-700">Total</TableCell>
                <TableCell className="font-semibold text-gray-700">Factura ID</TableCell>
                <TableCell className="font-semibold text-gray-700">Producto ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ventas.map((venta) => (
                <TableRow key={venta.id} className="hover:bg-gray-100">
                  <TableCell>{venta.id}</TableCell>
                  <TableCell>{venta.cantidad}</TableCell>
                  <TableCell>{venta.precio_unitario}</TableCell>
                  <TableCell>{venta.total}</TableCell>
                  <TableCell>{venta.factura}</TableCell>
                  <TableCell>{venta.producto}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default Venta;
