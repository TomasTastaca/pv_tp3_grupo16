import {Container,Typography,Paper,Avatar,Box} from "@mui/material";

const PerfilUsuario = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "0px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#001f54",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Información Personal
        </Typography>

        <Box
            component="img"
            src="https://st.depositphotos.com/1743476/2206/i/950/depositphotos_22064363-stock-photo-happy-college-student.jpg"
            alt= "Luis Ramírez"
            sx={{
                display: "block",
                width: 180,
                height: 220,
                margin: "0 auto 30px auto",
                objectFit: "cover",
                borderRadius: "0px",
            }}
        />

        <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Nombre:</strong> Luis Ramírez
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Rol:</strong> Alumno
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Institución:</strong> Facultad de Ingeniería - UNJu
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Edad:</strong> 18 años
          </Typography>

          <Typography variant="body1">
            <strong>Nacionalidad:</strong> Argentina
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PerfilUsuario;