import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Grid, Card, CardContent, Typography, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function EntityList({ endpoint, entity }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://django-railway-7fog.onrender.com/api/v1/${endpoint}/`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [endpoint]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleAddEntity = () => {
    navigate(`/${endpoint}/add`);
  };

  if (loading) return <CircularProgress />;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <TextField
          label={`Buscar ${entity}`}
          variant="outlined"
          fullWidth
          value={search}
          onChange={handleSearch}
        />
        <Button variant="contained" color="primary" onClick={handleAddEntity}>
          Agregar {entity}
        </Button>
      </div>
      
      <Grid container spacing={2}>
        {filteredData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.nombre || item.nombre || 'Entidad'}</Typography>
                {Object.entries(item).map(([key, value]) => (
                  <Typography key={key} variant="body2" color="textSecondary">
                    <strong>{key}:</strong> {value}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default EntityList;
