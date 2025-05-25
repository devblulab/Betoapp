import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { motion, AnimatePresence } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(120deg, #f4f6f9 60%, #e9ecef 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 28,
    marginBottom: theme.spacing(4),
    boxShadow: '0 0 28px rgba(33,243,172,0.25), 0 0 8px rgba(255,215,0,0.4)',
    border: '2.5px solid rgba(33,243,172,0.3)',
    background: '#fff',
    objectFit: 'cover',
  },
  text: {
    fontFamily: 'Montserrat, Poppins, sans-serif',
    color: '#21f3ac',
    fontWeight: 900,
    fontSize: 26,
    letterSpacing: 2,
    textShadow: '0 0 10px rgba(33,243,172,0.4)',
    marginTop: theme.spacing(2),
  },
}));

export default function SplashScreen() {
  const classes = useStyles();

  return (
    <AnimatePresence>
      <motion.div
        className={classes.root}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/betologo.jpg"
          alt="Logo Beto Dheon"
          className={classes.logo}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: [0.7, 1.07, 1], opacity: [0, 1] }}
          transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
        />
        <CircularProgress
          size={55}
          style={{
            color: '#21f3ac',
            filter: 'drop-shadow(0 0 6px rgba(33,243,172,0.6))',
          }}
        />
        <div className={classes.text}>Carregando...</div>
      </motion.div>
    </AnimatePresence>
  );
}
