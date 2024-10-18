import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}


const Home = () => {
    return (
        <Box sx={{width:"100%", pl:25}}>
            <Typography variant='h5' component="h2"> Welcome to themes...!</Typography>
            <Typography variant='h5' component="h2"> Welcome to themes...!</Typography>
            <Typography variant='h5' component="h2"> Welcome to themes...!</Typography>
            <Button variant="contained" size="small" color="primary" sx={{ margin: "20px" }}> Button1</Button>
            <Button variant="contained" size="Medium" color="secondary" sx={{ margin: "20px" }}> Button2</Button>
            <Button variant="contained" size="Large" color="success" sx={{ margin: "20px" }}> Button3</Button>
            <Button variant="contained" disableRipple>
                No Ripple Button
            </Button>
            <Stack display="flex" flexDirection="row" justifyContent="space-evenly">
                <AcUnitOutlinedIcon />
                <AccessAlarmOutlinedIcon sx={{ color: "error", size: "large" }} />
                <AddReactionOutlinedIcon />
            </Stack>
            <Stack direction="row" spacing={3} sx={{ alignItems: 'flex-end' }}>
                <HomeIcon fontSize="small" />
                <HomeIcon />
                <HomeIcon fontSize="large" />
                <HomeIcon sx={{ fontSize: 40 }} />
            </Stack>

        </Box>
    )
}

export default Home
