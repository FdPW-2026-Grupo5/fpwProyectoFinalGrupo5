import { Box, Typography } from '@mui/material';

function TarjetaAnimal({ nombre, imagen, colorFondo = '#ffa726', onClick, esClickeable = false }) {
  return (
    <Box 
      onClick={onClick}
      sx={{ 
        textAlign: 'center', 
        cursor: esClickeable ? 'pointer' : 'default',
        transform: 'scale(1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': esClickeable ? { 
          transform: 'scale(1.08)'
        } : {},
      }}
    >
      <Box 
        sx={{
          width: esClickeable ? 130 : 180, 
          height: esClickeable ? 130 : 180,
          backgroundColor: colorFondo,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          fontSize: esClickeable ? '3.5rem' : '5rem',
          boxShadow: '0px 6px 12px rgba(0,0,0,0.15)',
          border: '4px solid #ffffff'
        }}
      >
        {imagen}
      </Box>
      
      <Typography variant="h5" sx={{ color: '#33691e', fontWeight: 'bold', mt: 1.5 }}>
        {nombre}
      </Typography>
    </Box>
  );
}

export default TarjetaAnimal;