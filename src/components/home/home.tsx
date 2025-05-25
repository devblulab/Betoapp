import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Drawer,
  Box,
  useMediaQuery,
  Button,
  Tooltip,
  Fade,
  CircularProgress,
  Divider,
  Grid,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaBuilding,
  FaUsers,
} from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

// ----------- Luxuoso Premium Styles -----------

const useStyles = makeStyles((theme) => ({
  splashWrapper: {
    position: 'fixed',
    zIndex: 4000,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(120deg, #212326 30%, #3b3d3f 70%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: theme.spacing(2),
    color: '#21f3ac',
  },
  splashLogo: {
    width: 110,
    height: 110,
    borderRadius: '30px',
    boxShadow: '0 0 60px #12bb7fcf, 0 0 24px #fff5',
    background: 'rgba(61, 60, 60, 0.7)',
    objectFit: 'cover',
    border: '2.5px solidrgba(90, 90, 90, 0.27)',
  },
  splashText: {
    color: '#21f3ac',
    fontFamily: 'Montserrat, Poppins, sans-serif',
    fontWeight: 900,
    fontSize: 33,
    letterSpacing: 2,
    marginTop: theme.spacing(2),
    textShadow: '0 0 18pxrgba(37, 184, 44, 0.47), 0 2px 4px #000b',
  },
  splashDesc: {
    color: '#ececec',
    fontSize: 18,
    opacity: 0.93,
    letterSpacing: 1,
    marginTop: theme.spacing(1),
    textAlign: 'center',
    fontWeight: 500,
    textShadow: '0 0 8px #21f3ac44',
  },

  appBar: {
    background: 'linear-gradient(110deg, #1b1e22 60%, #27392f 100%)',
    boxShadow: '0 12px 32px 0 rgba(33,243,172,0.10), 0 2.5px 12px 0 rgba(33,243,172,0.25)',
    borderBottom: '2.5px solidrgba(146, 146, 146, 0.6)',
    zIndex: theme.zIndex.drawer + 1,
    backdropFilter: 'blur(8px)',
  },
  toolbar: {
    minHeight: 80,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    textDecoration: 'none',
  },
  logoImg: {
    width: 56,
    height: 56,
    borderRadius: '15px',
    boxShadow: '0 0 20px #21f3ac77, 0 0 2pxrgba(114, 114, 111, 0.53)',
    border: '1.5px solidrgba(141, 141, 140, 0.6)',
    background: '#fff',
    objectFit: 'cover',
  },
  navMainBtns: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  navBtn: {
    minWidth: 160,
    fontSize: 19,
    fontWeight: 700,
    color: '#e3e3e3',
    letterSpacing: 1,
    borderRadius: 18,
    background: 'linear-gradient(120deg,#282e31 60%,#1ed7a6 140%)',
    boxShadow: '0 0 18px #21f3ac26',
    padding: theme.spacing(2.2, 3),
    margin: theme.spacing(0, 2),
    border: '1.7px solidrgba(165, 165, 165, 0.6)',
    transition: '0.25s',
    textTransform: 'none',
    '&:hover': {
      color: '#222',
      background: 'linear-gradient(90deg,#ffd700 0%,#21f3ac 100%)',
      boxShadow: '0 0 30pxrgba(134, 134, 134, 0.27), 0 0 16px #21f3ac66',
      border: '2.2px solidrgba(146, 146, 146, 0.93)',
      transform: 'scale(1.03)',
      textShadow: '0 0 2px #fff, 0 1px 8px #21f3ac',
    },
  },
  avatarBtn: {
    marginLeft: theme.spacing(2),
    boxShadow: '0 0 8px #21f3ac22',
    border: '2px solidrgba(126, 126, 126, 0.6)',
  },
  menuIcon: {
    color: '#21f3ac',
    fontSize: 38,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(110deg,#191e20 80%,rgb(25, 139, 35) 220%)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 64pxrgba(124, 124, 124, 0.62)',
    padding: theme.spacing(0),
  },
  drawerGrid: {
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  drawerBtn: {
    minWidth: 220,
    fontSize: 23,
    fontWeight: 900,
    borderRadius: 32,
    background: 'linear-gradient(80deg,#242f27 65%,#ffd700 170%)',
    color: '#191e20',
    margin: theme.spacing(3, 0),
    padding: theme.spacing(2.8, 3),
    border: '2px solid #21f3ac99',
    boxShadow: '0 0 28pxrgba(92, 92, 92, 0.47), 0 0 8px #21f3ac44',
    letterSpacing: 1.7,
    textShadow: '0 1.2px 12px #fff8',
    '&:hover': {
      background: 'linear-gradient(92deg,#ffd700 10%,#21f3ac 100%)',
      color: '#fff',
      boxShadow: '0 0 60pxrgba(80, 80, 80, 0.53), 0 0 18px #21f3ac99',
      border: '2.2px solidrgba(151, 151, 151, 0.93)',
      transform: 'scale(1.04) rotate(-1.3deg)',
    },
  },
  avatarDrawer: {
    width: 70,
    height: 70,
    border: '2.7px solidrgba(75, 75, 75, 0.8)',
    boxShadow: '0 0 16px #21f3ac66',
    background: '#fff',
    margin: theme.spacing(0, 0, 4, 0),
  },
  toolbarSpace: {
    minHeight: 80,
    [theme.breakpoints.down('sm')]: { minHeight: 55 },
  },
}));

// ----------- Main Component -----------

export default function MenuTopBeto() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showSplash, setShowSplash] = useState(true);
  const [drawer, setDrawer] = useState(false);

  // Fake usuário (use seu contexto!)
  const usuario = {
    nome: 'Beto Dheon',
    email: 'beto@despachante.com',
    imagemUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // --- SPLASH ANIMADA ---
  const splashAnim = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 1, scale: [1, 1.11, 1], rotate: [0, 12, 0], y: [0, -14, 0] },
    exit: { opacity: 0, scale: 1.13, y: -40, transition: { duration: 0.75 } }
  };

  // --- Botões Premium
  const mainButtons = [
      {
        label: 'Área Cliente',
        href: '/beto/requerimento',
        icon: <FaUserCircle size={26} style={{ marginRight: 18, color: "#ffd700" }} />,
      },
      {
        label: 'Área Empresas',
        href: '/beto/empresas',
        icon: <FaBuilding size={26} style={{ marginRight: 18, color: "#21f3ac" }} />,
      },
      {
        label: 'Área Colaboradores',
        href: '/beto',
        icon: <FaUsers size={26} style={{ marginRight: 18, color: "#a2a2a2" }} />,
      },
    ];
  // --- DRAWER MOBILE ---
  const handleDrawer = () => setDrawer((p) => !p);

  return (
    <>
      {/* --- Splash Screen Animada e Luxuosa --- */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className={classes.splashWrapper}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={splashAnim}
            key="splash"
            transition={{ duration: 1.2, type: 'spring' }}
          >
            <motion.img
              src="/betologo.jpg"
              alt="Logo"
              className={classes.splashLogo}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: [0.9, 1.16, 1], opacity: [0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
            <motion.div
              className={classes.splashText}
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1, ease: 'easeOut' }}
            >
              BETO DHEON
            </motion.div>
            <motion.div
              className={classes.splashDesc}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 0.97 }}
              transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
            >
              O despachante digital mais sofisticado do Brasil.
            </motion.div>
            <Fade in={showSplash} timeout={1000}>
              <Box mt={3}><CircularProgress size={34} thickness={4.5} style={{ color: "#ffd700" }} /></Box>
            </Fade>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MENU COMPLETO --- */}
      {!showSplash && (
        <>
          <AppBar position="fixed" className={classes.appBar} elevation={15}>
            <Toolbar className={classes.toolbar}>
              {/* Logo + Nome */}
              <Link href="/" className={classes.logo} aria-label="Início">
                <img src="/betologo.jpg" alt="Logo Beto Dheon" className={classes.logoImg} />
                <Typography variant="h5" style={{
                  fontFamily: 'Montserrat, Poppins, serif',
                  color: '#ffd700',
                  fontWeight: 900, letterSpacing: 3,
                  textShadow: '0 1.5px 22px #21f3ac55',
                }}>
                  BETO DHEON
                </Typography>
              </Link>

              {/* Botões principais no Desktop */}
              <Box className={classes.navMainBtns}>
                {mainButtons.map((btn) => (
                  <Button
                    key={btn.href}
                    href={btn.href}
                    className={classes.navBtn}
                    startIcon={btn.icon}
                    aria-label={btn.label}
                    component={Link}
                    tabIndex={0}
                  >
                    {btn.label}
                  </Button>
                ))}
              </Box>

              {/* Avatar e Drawer mobile */}
              <Box display="flex" alignItems="center">
                <Tooltip title="Meu Perfil" arrow>
                  <IconButton
                    className={classes.avatarBtn}
                    size="medium"
                    aria-label="abrir perfil"
                  >
                    <Avatar src={usuario.imagemUrl} alt={usuario.nome} />
                  </IconButton>
                </Tooltip>
                <IconButton
                  onClick={handleDrawer}
                  className={classes.menuIcon}
                  aria-label="Abrir menu mobile"
                  style={{ marginLeft: 10 }}
                  size="medium"
                >
                  <FaBars />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Espaço abaixo do AppBar */}
          <div className={classes.toolbarSpace} />

          {/* Drawer 100% tela no mobile */}
          <Drawer
            anchor="left"
            open={drawer}
            onClose={handleDrawer}
            classes={{ paper: classes.drawerPaper }}
            transitionDuration={400}
            ModalProps={{ keepMounted: true }}
            PaperProps={{ style: { width: '100vw', height: '100vh' } }}
          >
            <Grid container direction="column" className={classes.drawerGrid}>
              <Grid item>
                <Avatar src={usuario.imagemUrl} className={classes.avatarDrawer} alt={usuario.nome} />
              </Grid>
              {mainButtons.map((btn) => (
                <Grid item key={btn.href} xs={12}>
                  <Button
                    href={btn.href}
                    className={classes.drawerBtn}
                    startIcon={btn.icon}
                    aria-label={btn.label}
                    fullWidth
                    component={Link}
                    tabIndex={0}
                    onClick={handleDrawer}
                  >
                    {btn.label}
                  </Button>
                </Grid>
              ))}
              <Divider style={{ margin: "28px 0", background: "#21f3ac44" }} />
              <Grid item>
                <Button
                  startIcon={<FaSignOutAlt size={22} />}
                  style={{
                    background: 'linear-gradient(60deg,#ffd700 40%,#d73232 120%)',
                    color: '#fff',
                    fontWeight: 800,
                    borderRadius: 22,
                    fontSize: 18,
                    minWidth: 160,
                  }}
                  onClick={() => alert("Sair do sistema")}
                  aria-label="Sair"
                >
                  Sair
                </Button>
              </Grid>
            </Grid>
          </Drawer>
        </>
      )}
    </>
  );
}
