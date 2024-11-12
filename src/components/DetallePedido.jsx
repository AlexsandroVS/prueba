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

const DetallePedido = () => {
  const [detallesPedido, setDetallesPedido] = useState([]);

  useEffect(() => {
    axios
      .get("https://django-railway-7fog.onrender.com/api/v1/detalles-pedido/")
      .then((response) => {
        setDetallesPedido(response.data); // Almacenar los detalles del pedido
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box className="flex justify-center mt-10">
      <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
        <Typography variant="h4" align="center" className="font-bold mb-6 text-gray-800">
          Detalles de los Pedidos
        </Typography>
        <TableContainer component={Paper} className="shadow-md rounded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold text-gray-700">ID Detalle</TableCell>
                <TableCell className="font-semibold text-gray-700">Cantidad</TableCell>
                <TableCell className="font-semibold text-gray-700">Precio de Compra</TableCell>
                <TableCell className="font-semibold text-gray-700">Subtotal</TableCell>
                <TableCell className="font-semibold text-gray-700">ID Pedido</TableCell>
                <TableCell className="font-semibold text-gray-700">ID Producto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {detallesPedido.map((detalle) => (
                <TableRow key={detalle.id} className="hover:bg-gray-100">
                  <TableCell>{detalle.id}</TableCell>
                  <TableCell>{detalle.cantidad}</TableCell>
                  <TableCell>{detalle.precio_compra}</TableCell>
                  <TableCell>{detalle.subtotal}</TableCell>
                  <TableCell>{detalle.pedido}</TableCell>
                  <TableCell>{detalle.producto}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default DetallePedido;
