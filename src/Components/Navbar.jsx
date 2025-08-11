import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  AppBar, Box, Button, Card, CardContent, Collapse, CssBaseline,
  Divider, Drawer, IconButton, List, ListItem, ListItemButton,
  ListItemText, Popover, Toolbar, Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import logo from '../assets/logo.png';
import '../public/Navbar.css';

export default function Navbar(props) {
  const drawerWidth = 320;
  const navItems = ['Home', 'About', 'Our Work', 'Our Services', 'Contact'];
  const { window } = props;

  const paths = {
    'Home': '/',
    'About': '/about',
    'Our Work': '/our-work',
    'Our Services': '/our-services',
    'Contact': '/contact'
  };

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Brand Strategy', path: '/services/brand-stratergy' },
    { name: 'Lead Generation', path: '/services/lead-generation' },
    { name: 'Social Media Marketing', path: '/services/social-media-markte' },
    { name: 'Meta Ads', path: '/services/meta-ads' },
    { name: 'Google Ads', path: '/services/google-ads' },
    { name: 'Search Engine Optimization', path: '/services/seo' },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleServicesClick = () => {
    setServicesOpen(!servicesOpen);
  };

  const open = Boolean(anchorEl);

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }} className='banner-d'>
        <img src={logo} alt="Innovader Technologies Logo"/>
        <p>Innovader Technologies</p>
      </Typography>
      <Divider />
      <List className='li-container'>
        {navItems.map((item) => (
          item === 'Our Services' ? (
            <React.Fragment key={item}>
              <ListItemButton onClick={handleServicesClick}>
                <ListItemText primary={item} />
                {servicesOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {services.map((service) => (
                    <ListItemButton
                      key={service.name}
                      sx={{ pl: 4 }}
                      component={NavLink}
                      to={service.path}
                      onClick={handleDrawerToggle}
                    >
                      <ListItemText primary={service.name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItem key={item} disablePadding>
              <ListItemButton
                component={NavLink}
                to={paths[item]}
                onClick={handleDrawerToggle}
              >
                <ListItemText className='nav-links' primary={item} />
              </ListItemButton>
            </ListItem>
          )
        ))}
        <NavLink to='/contact' className='letsTalk' onClick={handleDrawerToggle}>Free Consultation</NavLink>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar component="nav" className="Navbar">
        <Toolbar>
          {/* Hamburger Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className='d-btn'
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xs: 'block', sm: 'block', md: 'block' },
              '@media (min-width:1101px)': { display: 'none' } // hide above 1100px
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo for mobile */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'block', sm: 'block', md: 'block' },
              '@media (min-width:1101px)': { display: 'none' }
            }}
            className='banner'
          >
            <img src={logo} alt="Innovader Technologies Logo"/>
            <p>Innovader Technologies</p>
          </Typography>

          {/* Desktop Nav Links */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none' },
              '@media (min-width:1101px)': { display: 'flex' }
            }}
            className="nav-link-container"
          >
            {navItems.map((item) => (
              item === 'Our Services' ? (
                <React.Fragment key={item}>
                  <Button
                    aria-owns={open ? 'services-popover' : undefined}
                    aria-haspopup="true"
                    onClick={handlePopoverOpen}
                    className="nav-links"
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    {item}
                  </Button>
                </React.Fragment>
              ) : (
                <NavLink key={item} to={paths[item]} className="nav-links">
                  {item}
                </NavLink>
              )
            ))}
            <NavLink to='/contact' className='letsTalk'>Free Consultation</NavLink>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Desktop Popover */}
      <Popover
        id="services-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{ className: 'services-popover-card' }}
      >
        <Card>
          <CardContent>
            <List>
              {services.map((service) => (
                <ListItem key={service.name} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={service.path}
                    onClick={handlePopoverClose}
                  >
                    <ListItemText
                      primaryTypographyProps={{ fontSize: '1rem', fontFamily: '"Merriweather", sans-serif' }}
                      primary={service.name}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Popover>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block' },
            '@media (min-width:1101px)': { display: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
