import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <Container 
      style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" gutterBottom>
        ¡Bienvenido a la Gestión de Entidades!
      </Typography>
      <Typography variant="h5" paragraph>
        Aquí puedes gestionar todas las entidades relacionadas con tu negocio de forma fácil y eficiente.
      </Typography>
      <Button
        component={Link}
        to="/empleado" 
        variant="contained"
        color="primary"
        size="large"
        sx={{ marginTop: 2 }}
      >
        Comienza aquí
      </Button>
    </Container>
  );
}

export default LandingPage;
