//import React from "react";
import { Alert, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const RegistroActividad = ({ fecha }) => {
    return (
        /* Reemplazamos el div por un Box con la lógica responsiva del CSS viejo */
        <Box 
            sx={{ 
                display: 'flex', 
                justifyContent: { xs: 'flex-start', md: 'flex-end' }, // flex-start en móvil, flex-end en PC
                mt: 2, 
                mb: 4 
            }}
        >
            <Alert 
                severity="info" 
                variant="outlined"
                icon={<InfoIcon fontSize="inherit" />}
                sx={{ 
                    borderRadius: 3, 
                    fontSize: '0.95rem',
                    boxShadow: 1,
                    width: { xs: '100%', md: 'auto' }, // Ancho completo en móvil, adaptado en PC
                    '& .MuiAlert-message': {
                        width: '100%'
                    }
                }}
            >
                <strong>Última actualización de la lista:</strong> {fecha}
            </Alert>
        </Box>
    );
};

export default RegistroActividad;