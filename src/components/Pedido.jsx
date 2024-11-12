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

const Pedido = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios
      .get("https://django-railway-7fog.onrender.com/api/v1/pedidos/")
      .then((response) => {
        setPedidos(response.data); // Almacenar los pedidos
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box className="flex justify-center mt-10">
      <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
        <Typography variant="h4" align="center" className="font-bold mb-6 text-gray-800">
          Lista de Pedidos
        </Typography>
        <TableContainer component={Paper} className="shadow-md rounded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold text-gray-700">ID Pedido</TableCell>
                <TableCell className="font-semibold text-gray-700">Fecha de Pedido</TableCell>
                <TableCell className="font-semibold text-gray-700">Total Pedido</TableCell>
                <TableCell className="font-semibold text-gray-700">Estado</TableCell>
                <TableCell className="font-semibold text-gray-700">Proveedor ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.map((pedido) => (
                <TableRow key={pedido.id} className="hover:bg-gray-100">
                  <TableCell>{pedido.id}</TableCell>
                  <TableCell>{pedido.fecha_pedido}</TableCell>
                  <TableCell>{pedido.total_pedido}</TableCell>
                  <TableCell>{pedido.estado}</TableCell>
                  <TableCell>{pedido.proveedor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default Pedido;
