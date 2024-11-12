import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, CircularProgress, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

function EntityForm({ endpoint, entity }) {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      axios
        .get(`https://django-railway-7fog.onrender.com/api/v1/${endpoint}/${id}/`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [id, endpoint]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const method = isEditing ? 'put' : 'post';
    const url = isEditing
      ? `https://django-railway-7fog.onrender.com/api/v1/${endpoint}/${id}/`
      : `https://django-railway-7fog.onrender.com/api/v1/${endpoint}/`;

    axios[method](url, formData)
      .then(() => {
        setLoading(false);
        navigate(`/${endpoint}`);
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>{isEditing ? `Editar ${entity}` : `Agregar ${entity}`}</h2>
      {loading && <CircularProgress />}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {Object.entries(formData).map(([key, value]) => (
            <Grid item xs={12} sm={6} key={key}>
              <TextField
                label={key}
                name={key}
                value={value}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" color="primary" type="submit" disabled={loading}>
          {isEditing ? 'Guardar Cambios' : 'Agregar'}
        </Button>
      </form>
    </div>
  );
}

export default EntityForm;
