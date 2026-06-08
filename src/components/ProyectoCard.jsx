import {Card, CardContent, CardActions, Typography, Button, Chip, Stack } from "@mui/material";

import { Link } from "react-router-dom";

const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 350,
        minHeight: 210,
        margin: 2,
        padding: 2,
        boxShadow: 3,
        borderRadius: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            minHeight: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {titulo}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          <strong>Categoría:</strong> {categoria}
        </Typography>

        <Chip
          label={estado}
          sx={{
            marginTop: 1,
            backgroundColor: estado === "Finalizado" ? "#2e7d32" : "#ed6c02",
            color: "white",
            fontWeight: "bold"
          }}
        />
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>
        <Stack direction="row" spacing={1}>
          <Button
            component={Link}
            to={`/proyectos/${id}`}
            variant="contained"
            size="small"
          >
            Ver Detalle
          </Button>

          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => onEliminar(id)}
          >
            Eliminar
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProyectoCard;