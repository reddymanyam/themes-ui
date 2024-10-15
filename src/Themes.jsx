import { createTheme } from "@mui/material";
import { green, purple, red } from "@mui/material/colors";

const theme = createTheme({
      palette:{
        primary:{
            main: green[900],
            light: "#010100",
            dark: "#FDFEFB",
        },
        secondary:{
            main: red[900],
            light: "#010100",
            dark: "#FDFEFB",
        },
        success:{
            main: purple[800],
            light: "#010100",
            dark: "#FDFEFB",
        }
      },
      components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius:'20px',
                    light:{
                        borderRadius:"15px"
                    },
                    dark:{
                        borderRadius:"15px"
                    }
                }
            }
        },
        MuiIcon:{
            styleOverrides:{
               root:({owenerstate}) =>({
                ...createTheme(owenerstate.size === "large" && {
                    width:"60px",
                    height:"60px",
                })
               })
            }
        }
      }

})
export default theme;