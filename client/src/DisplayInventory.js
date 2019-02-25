import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import './App.css';
import axios from 'axios'
import OilCard from './OilCard.js'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    card:{
        margin: theme.spacing.unit,
        width: "fit-content"
    },
    image:{
        width: "200px",
        height: "250px",
    },
    title:{
        textAlign:"center"
    },
    content:{
        textAlign:"center"
    },
    a:{ 
        color: "inherit",
        textDecoration: "none"
     } 
});

class DisplayInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "https://media.doterra.com/us/en/images/product/arborvitae-5ml.jpg",
            item_name: "Some Oil",
            wholesale_price: "$75",
            retail_price: "$100",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        axios.get('/getUser', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('member_token')}` }
        }).then((response) => {
            if (!response.data.message === "success") {
                this.props.history.push('/login')
            }
        }).catch((e) => {
            console.log(e)
            this.props.history.push('/login')
        })
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleClick() {
        axios.post('/oil', {
            oil: this.state.oilToSearchBy
        }).then((response) => {
            console.log(response.data)
            this.setState({
                url:response.data.item_picture_url,
                item_name:response.data.item_name
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                <div className={this.props.classes.margin}>
                    <Grid container spacing={8} alignItems="flex-start">
                        <Grid item>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel>Search For An Oil Here</InputLabel>
                                <Input id="searchBar" name="searchbar" fullWidth autoFocus onChange={this.handleChange('oilToSearchBy')} />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={this.handleClick} className={this.props.classes.button}>
                                Search
                             </Button>
                        </Grid>
                    </Grid>
                </div>
                <OilCard/>
            </div >
        );
    }
}
DisplayInventory.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(DisplayInventory);