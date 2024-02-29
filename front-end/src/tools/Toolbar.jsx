import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { grey } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, json, useNavigate } from 'react-router-dom';

const settings = ['Edit', 'Logout'];

export function MyToolbar({ valueOfBag }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const numberOfBag = (sessionStorage != null) ? Number.parseInt(sessionStorage.getItem('valueOfBag')) : 0;
    const userSave = localStorage.getItem('user')
    let userInfo;
    if (userSave) {
        userInfo = JSON.parse(userSave)[0];
    }

    const navigate = useNavigate();
    console.log("ULI", userInfo);

    function showMenu() {
        if (userInfo.isadmin) {
            return <>
                <Link to={'/edit'} style={{ textDecoration: 'none', color: 'black' }}><MenuItem key={'edit'}>
                    < Typography textAlign="center">{"Edit"}</Typography>
                </MenuItem ></Link >
                <MenuItem key={'logout'} onClick={signOut}>
                    < Typography textAlign="center">{"Sign Out"}</Typography>
                </MenuItem >
            </>
        } else {
            return <MenuItem key={'logout'} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{"Sign Out"}</Typography>
            </MenuItem>
        }
    }

    function signOut() {
        localStorage.removeItem('user')
        sessionStorage.clear();
        navigate('/')
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    function handleCloseNavMenu(a) {
        setAnchorElNav(null);
        console.log(a);

    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    };

    function showOption(orderList) {
        if (userInfo) {
            // localStorage.clear()
            return <Box sx={{ flexGrow: 0 }}>
                <Tooltip>
                    <IconButton sx={{ marginRight: 1 }}>
                        <CustomizedBadges value={valueOfBag} />
                    </IconButton>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Guest">{userInfo.firstname.slice(0, 1)}</Avatar>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {showMenu()}
                </Menu>
            </Box>
        } else {
            return <Box sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Tooltip>
                    <IconButton sx={{ marginRight: 1 }}>
                        <CustomizedBadges value={numberOfBag} />
                    </IconButton>
                </Tooltip>
                <Link to={'/signin'}><Button
                    variant='outlined'
                    sx={{
                        borderColor: 'white',
                        color: 'white',
                        marginRight: 0.5,
                        padding: 1,
                        "&:hover": { bgcolor: grey[800], borderColor: grey[100] }
                    }}
                    onClick={() => localStorage.setItem('sign-state', 'login')}
                >Sign In</Button></Link>
                <Link to={'/signup'}><Button
                    variant='contained'
                    sx={{
                        bgcolor: grey[600],
                        marginRight: 0.5,
                        padding: 1,
                        "&:hover": { bgcolor: grey[800] }
                    }}
                    onClick={() => localStorage.setItem('sign-state', 'signup')}
                >Sign Up</Button></Link>
            </Box>
        }
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: grey[900] }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 20,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        PizzaB
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none', padding: '30px' },
                            }}
                        >
                            <Link to={"/"} style={{ textDecoration: 'none' }}>
                                <MenuItem key={'home'}>
                                    <Typography textAlign="center" sx={{ color: 'black' }}>{"Home"}</Typography>
                                </MenuItem>
                            </Link>
                            <Link to={"/menu"} style={{ textDecoration: 'none' }}>
                                <MenuItem key={'menu'}>
                                    <Typography textAlign="center" sx={{ color: 'black' }}>{"Order Menu"}</Typography>
                                </MenuItem>
                            </Link>
                            <Link to={"/contact"} style={{ textDecoration: 'none' }}>
                                <MenuItem key={'contact'}>
                                    <Typography textAlign="center" sx={{ color: 'black' }}>{"Contact Us"}</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 1,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        PizzaB
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <Button
                                key={'home'}
                                sx={{ my: 2, color: 'white', display: 'block', marginLeft: 10 }}
                            >
                                {'Home'}
                            </Button>
                        </Link>
                        <Link to={'/menu'} style={{ textDecoration: 'none' }}>
                            <Button
                                key={'menu'}
                                sx={{ my: 2, color: 'white', display: 'block', marginLeft: 10 }}
                            >
                                {'Menu'}
                            </Button>
                        </Link>
                        <Link to={'/contact'} style={{ textDecoration: 'none' }}>
                            <Button
                                key={'contact'}
                                sx={{ my: 2, color: 'white', display: 'block', marginLeft: 10 }}
                            >
                                {'Contact Us'}
                            </Button>
                        </Link>
                    </Box>
                    {showOption()}
                </Toolbar>
            </Container>
        </AppBar >
    );
}
// export default ResponsiveAppBar;

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export function CustomizedBadges({ value }) {
    return (
        <Link to={'/orders'}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={(isNaN(value)) ? 0 : value} color="warning" sx={{ color: grey[50] }}>
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </Link>
    );
}