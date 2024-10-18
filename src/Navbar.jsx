import { Box } from '@mui/system';
import React from 'react'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';

const Navbar = ({toggleTheme}) => {
  return (
    <>
      <Box sx={{width:"100%", height:"50px", bgcolor:'lightblue', display:"flex", justifyContent:"center", alignItems:"center"}} >
         <Brightness4OutlinedIcon onClick={toggleTheme} />
      </Box>
    </>
  )
}

export default Navbar;
