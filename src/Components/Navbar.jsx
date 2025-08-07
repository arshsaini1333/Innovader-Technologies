import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse'; // Import Collapse for the drawer
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Icon Imports
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess'; // Icon for open sub-menu
import ExpandMore from '@mui/icons-material/ExpandMore'; // Icon for closed sub-menu

// Asset and CSS Imports
import logo from '../assets/logo.png'
import '../public/Navbar.css'


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
    { name: 'Lead Generation', path: '/services/lead-generation' }
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  // --- State for desktop popover ---
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  // --- State for mobile drawer collapse ---
  const [servicesOpen, setServicesOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  // --- Handlers for desktop popover ---
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  
  // --- Handler for mobile drawer collapse ---
  const handleServicesClick = () => {
    setServicesOpen(!servicesOpen);
  };

  const open = Boolean(anchorEl);

  const drawer = (
    // We removed onClick from the Box to handle it on each item for better control
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }} className='banner-d'>
        <img src={logo} alt="Innovader Technologies Logo"/>
        <p>Innovader Technologies</p>
      </Typography>
      <Divider />
      <List className='li-container'>
        {navItems.map((item) => (
          // --- Conditional rendering for "Our Services" in the drawer ---
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
                      sx={{ pl: 4 }} // Indent the sub-item
                      component={NavLink}
                      to={service.path}
                      onClick={handleDrawerToggle} // Close drawer on navigation
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
                onClick={handleDrawerToggle} // Close drawer on navigation
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
      <AppBar component="nav" className="Navbar"  >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className='d-btn'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            className='banner'
          >
            <img src={logo} alt="Innovader Technologies Logo"/>
            <p>Innovader Technologies</p>
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="nav-link-container" >
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

      {/* --- Desktop Popover Card for Services --- */}
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
                            <ListItemText primaryTypographyProps={{ fontSize: '1rem', fontFamily: '"Merriweather", sans-serif' }} primary={service.name}/>
                           </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
      </Popover>

      {/* --- Mobile Drawer --- */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};