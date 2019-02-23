import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import RegisterIcon from '@material-ui/icons/HowToReg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios'
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withRouter } from 'react-router'
const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    firstColor:{
        backgroundColor: "#9900CC",
        marginTop: theme.spacing.unit * 3,
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    secondColor: {
        backgroundColor: "#D24CFF",
        marginTop: theme.spacing.unit * 3,
    },
});
class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            confirm_password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.directToLogin = this.directToLogin.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        axios.post('/registerUser',{
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
        }).then((response) =>{
            console.log(response)
        })
    }
    handleChange = name => (e) => {
        this.setState({
            [name]: e.target.value
        })
    }
    directToLogin(){
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <main className={this.props.classes.main}>
                    <CssBaseline />
                    <Paper className={this.props.classes.paper}>
                        <Avatar className={this.props.classes.avatar}>
                            <RegisterIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Register
                    </Typography>
                        <form className={this.props.classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="FirstName">First Name</InputLabel>
                                <Input id="FirstName" name="first_name" autoComplete="FirstName" autoFocus onChange={this.handleChange('first_name')} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel >Last Name</InputLabel>
                                <Input id="LastName" name="last_name" autoComplete="LastName" autoFocus onChange={this.handleChange('last_name')}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input type="email" id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChange('email')} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input type="password" id="password" name="password" autoComplete="password" autoFocus onChange={this.handleChange('password')}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input type="password" id="confirmPassword" name="confirmPassword" autoComplete="password" autoFocus onChange={this.handleChange('confirm_password')}/>
                            </FormControl>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}
                                className={this.props.classes.firstColor}
                            >
                                Register
                            </Button>
                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.directToLogin}
                                className={this.props.classes.secondColor}
                            >
                                Already a Member Login Click Here
                            </Button>
                            
                        </form>
                    </Paper>
                </main>
            </div>
        )
    }
}
export default withRouter(withStyles(styles)(Register))