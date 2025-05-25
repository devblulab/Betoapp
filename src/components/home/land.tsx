import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    padding: theme.spacing(10, 2, 8, 2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(120deg,#f4f6f9 60%,#e9ecef 100%)',
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Montserrat, Poppins, sans-serif',
    fontWeight: 900,
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    color: '#21f3ac',
    marginBottom: theme.spacing(2),
    textShadow: '0 2px 12px rgba(33,243,172,0.4)',
    letterSpacing: 2,
  },
  subtitle: {
    color: '#555',
    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
    fontWeight: 600,
    maxWidth: 720,
    marginBottom: theme.spacing(4),
    textShadow: '0 0 6px rgba(0,0,0,0.07)',
  },
  heroImg: {
    width: 'min(420px, 90vw)',
    height: 'auto',
    borderRadius: 32,
    boxShadow: '0 0 40px rgba(33,243,172,0.2), 0 0 14px #ffd70033',
    border: '2px solid #ddd',
    background: '#fff',
    marginBottom: theme.spacing(4),
  },
  ctaBtn: {
    fontWeight: 800,
    fontSize: 18,
    borderRadius: 18,
    background: 'linear-gradient(90deg,#21f3ac 30%,#ffd700 100%)',
    color: '#222',
    padding: theme.spacing(1.6, 5),
    boxShadow: '0 0 20px rgba(33,243,172,0.15)',
    letterSpacing: 1.3,
    transition: 'all 0.18s',
    '&:hover': {
      background: 'linear-gradient(110deg,#ffd700 20%,#21f3ac 80%)',
      color: '#191e20',
      boxShadow: '0 0 44px rgba(33,243,172,0.3)',
      transform: 'scale(1.04) rotate(-1deg)',
    },
  },
}));

export default function Land() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const fadeAnim = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className={classes.root}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeAnim}
      transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
      id="home"
    >
      <motion.img
        src="/betologo.jpg"
        alt="Beto Dheon Hero"
        className={classes.heroImg}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.07, 1], opacity: [0, 1] }}
        transition={{ duration: 1.1, delay: 0.22 }}
      />
      <Typography className={classes.title} component="h1">
        Despachante Digital Premium
      </Typography>
      <Typography className={classes.subtitle}>
        Atendimento ágil, confiável e 100% digital.<br />
        Somos especialistas em documentação veicular no Brasil e no exterior.
      </Typography>
      <Button
        className={classes.ctaBtn}
        href="https://wa.me/5548999990000"
        target="_blank"
        rel="noopener"
        startIcon={<FaWhatsapp />}
        aria-label="Chamar no WhatsApp"
      >
        Fale Conosco no WhatsApp
      </Button>
    </motion.section>
  );
}
