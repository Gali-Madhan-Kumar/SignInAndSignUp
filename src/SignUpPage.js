import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockRounded from '@material-ui/icons/LockRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const ValidEmailRegex = RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
const ValidZipCodeRegex = RegExp(/^[0-9]{5,6}$/);
const ValidPasswordRegex = RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/)

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/#">
                Vehito
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function SignUpPage() {

    const classes = useStyles();

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        showConfirmPassword: false,
        email: '',
        organizationName: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
        confirmPassword: '',
        addressLine: '',
    });

    const [errors, setErrors] = React.useState({
        signupConfirmPasswordErrorMsg: '',
        signupPasswordErrorMsg: '',
        signupEmailErrorMsg: '',
        signupPostalCodeErrorMsg: ''
    })

    const handleChange = (event) => {
        event.preventDefault();
        const { id, value } = event.target;
        switch (id) {
            case 'email':
                setErrors({
                    ...errors, signupEmailErrorMsg: ValidEmailRegex.test(value)
                        ? ''
                        : 'Invalid Email'
                });
                break;
            case 'password':
                setErrors({
                    ...errors, signupPasswordErrorMsg: ValidPasswordRegex.test(value)
                        ? ''
                        : 'Password Should Contain atleast one uppercase letter, one lowercase letter, one digit and one special character and must be 8 to 20 characters'
                });
                break;
            case 'confirmPassword':
                setErrors({ ...errors, signupConfirmPasswordErrorMsg: values.password === value ? '' : 'Password and Confirm Password Should Match.' })
                break;
            case 'postalCode':
                setErrors({ ...errors, signupPostalCodeErrorMsg: ValidZipCodeRegex.test(value) ? '' : 'Invalid Postal Code' })
                break;
            default:
                break;
        }
        setValues({ ...values, [id]: value });
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockRounded />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                        />
                        {errors.signupEmailErrorMsg !== '' ?
                            <FormHelperText>
                                <span style={{ color: 'red' }} className="red">{errors.signupEmailErrorMsg}</span>
                            </FormHelperText>
                            : ''}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={values.showPassword ? 'text' : 'password'}
                            id="password"
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => handleClickShowPassword('showPassword')}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                        {errors.signupPasswordErrorMsg !== '' ?
                            <FormHelperText>
                                <span style={{ color: 'red' }} className="red">{errors.signupPasswordErrorMsg}</span>
                            </FormHelperText>
                            : ''}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => handleClickShowConfirmPassword('showConfirmPassword')}
                                    >
                                        {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                        {errors.signupConfirmPasswordErrorMsg !== '' ?
                            <FormHelperText>
                                <span style={{ color: 'red' }} className="red">{errors.signupConfirmPasswordErrorMsg}</span>
                            </FormHelperText>
                            : ''}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="organizationName"
                            label="Organization Name"
                            type="text"
                            id="organizationName"
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="addressLine"
                            label="Address Line"
                            type="text"
                            id="addressLine"
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="country"
                            label="Country"
                            type="text"
                            id="country"
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="state"
                            label="State"
                            type="text"
                            id="state"
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="city"
                            label="City"
                            type="text"
                            id="city"
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="postalCode"
                            label="Postal Code"
                            type="text"
                            id="postalCode"
                            onChange={handleChange}
                        />
                        {errors.signupPostalCodeErrorMsg !== '' ?
                            <FormHelperText>
                                <span style={{ color: 'red' }} className="red">{errors.signupPostalCodeErrorMsg}</span>
                            </FormHelperText>
                            : ''}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={!values.email || !values.addressLine || !values.password || !values.confirmPassword || !values.organizationName || !values.country || !values.state || !values.city || !values.postalCode}
                        >
                            Sign Up
                            </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    {"Already have an account? Log In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}