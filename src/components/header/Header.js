import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import vehitoLogo from '../../assets/images/vehitoLogo.png';
import './Header.css';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    headerBtns: {
        backgroundColor: 'lightGray',
        color: 'black'
    },
}));

export default function Header(props) {

    const classes = useStyles();

    let history = useHistory();

    const signupBtnOnClickHandler = () => {
        history.push('/signup');
    }

    const loginBtnOnClickHandler = () => {
        history.push('/login');
    }

    const logoOnClickHandler = () => {
        history.push('/');
    }

    return (
        <div className={classes.root}>
            <AppBar style={{ backgroundColor: 'dimgray' }} position="static">
                <Toolbar>
                    <IconButton onClick={logoOnClickHandler} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img className="company-logo" src={vehitoLogo} alt="company_logo" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Vehito Controller
                    </Typography>
                    {props.showButtons === true ?
                        <div className="header-btns-div">
                            <div className="signup-btn-div">
                                <Button onClick={signupBtnOnClickHandler} className={classes.headerBtns}>Signup</Button>
                            </div>
                            <div className="login-btn-div">
                                <Button onClick={loginBtnOnClickHandler} className={classes.headerBtns}>Login</Button>
                            </div>
                        </div>
                        : ''}
                </Toolbar>
            </AppBar>
        </div>
    );
}