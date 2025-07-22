import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {  NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../public/Navbar.css'





export default function Navbar(props) {
  const drawerWidth = 320;
  const navItems = ['Home', 'About', 'Our Work','Our Services', 'Contact'];
  
  const paths = {
      'Home':'/',
      'About':'/about',
      'Our Work' : '/our-work',
      'Our Services' : '/our-services',
      'Contact' : '/contact'
  }
  


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box  onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }} className='banner-d'>

        <img src={logo} alt=""/>
            <p>Innovader Technologies</p>
      </Typography>
      <Divider />
      <List className='li-container'>
        {navItems.map((item) => (
           <ListItem key={item} disablePadding>
           <ListItemButton
             component={NavLink}
             to={paths[item]}
             sx={{ fontSize: '1.2rem' }}             
           >
             <ListItemText className='nav-links' primary={item} />
           </ListItemButton>
         </ListItem>
        ))}
<NavLink to='/contact' className='letsTalk'>Free Consultation</NavLink>
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

           <img src={logo} alt=""/>
            <p>Innovader Technologies</p>
          </Typography>
         
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="nav-link-container" >
            {navItems.map((item) => (
              <NavLink key={item} to={paths[item]}component={NavLink} className="nav-links">
                
                {item}
     
              </NavLink>
            ))}

            <NavLink to='/contact' className='letsTalk'>Free Consultation</NavLink>
          </Box>
      
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


