import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderBox } from './Styled';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
//import Typography from '@mui/material/Typography';

export default function Header() {
  //State management
  const [active, setActive] = useState(true);

  //handle active/inactive employee shifts display
	function handleSwitchChange(e) {
		if (e.target.checked === true) { setActive(true); } else { setActive(false); };
	}

   //Switch styling
	const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 56,
  height: 32,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 30,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(18px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 4,
    '&.Mui-checked': {
      transform: 'translateX(24px)',
      color: '#D6D6D6',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 80%)',
    width: 24,
    height: 24,
    borderRadius: 12,
    transition: theme.transitions.create(['width'], {
      duration: 300,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 32 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : '#4F4F4F',
    boxSizing: 'border-box',
  },
	}));
  return (
    <div>
      <HeaderBox>
        <span>EN | JP</span>
        <Link className='text-decoration-none text-white' to='/'><span>We are open!</span></Link>
         <Stack direction="row" spacing={2} alignItems="center">
        {/* <Typography>Dark</Typography> */}
        <AntSwitch onChange={handleSwitchChange} checked={active} inputProps={{ 'aria-label': 'ant design' }} />
        {/* <Typography>Ligh</Typography> */}
						</Stack>
      </HeaderBox>
      
    </div>
  )
}
