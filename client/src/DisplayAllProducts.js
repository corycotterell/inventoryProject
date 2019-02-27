import React from 'react'
import axios from 'axios';
import OilCard from './OilCard';
import { Grid,Dialog,withStyles } from '@material-ui/core';



const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    card: {
        margin: theme.spacing.unit,
        width: "fit-content"
    },
    image: {
        // width: "200px",
        height: "200px",
        objectFit:"cover",
        objectPosition:"top"
    },
    title: {
        textAlign: "center"
    },
    content: {
        textAlign: "center"
    },
    a: {
        color: "inherit",
        textDecoration: "none"
    },
    modalImage: {
        width: "400px",
        height: "400px",
        objectFit:"cover",
        objectPosition:"top"
    },
});
class DisplayAllProducts extends React.Component {
    constructor() {
        super()
        this.state = {
            allOils: [{
                item_picture_url: "https://media.doterra.com/us/en/images/product/arborvitae-5ml.jpg",
                item_name: "Some Oil",
                wholesale_price: "$75",
                retail_price: "$100"
            }],
            oilForModal:{

            },
            open: false,
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    componentDidMount() {
        axios.get("/getAllProducts").then((response) => {
            this.setState({ allOils: response.data })
        })
    }
    handleOpen(oilInfo) {
        this.setState({
            oilForModal:oilInfo,
            open:true,
        });
        console.log(this.state)
    }
    handleClose(){
        this.setState({open:false})
    }
    render() {
        console.log(this.state.test)
        return (<div>
            <Grid container spacing={8}>
                {this.state.allOils.map((e) => {
                    return (
                        <Grid item>
                            <OilCard id={e} oilInfo={e} handleOpen={this.handleOpen} />
                        </Grid>
                    )
                })}
            </Grid>
             <Dialog
                    open={this.state.open}
                    onClose={this.handleClose} aria-labelledby="simple-dialog-title">
                    <h2 className="title" id="dialog-title">{this.state.oilForModal.item_name}</h2>
                    <div>
                        <img className={this.props.classes.modalImage} src={this.state.oilForModal.item_picture_url} alt={`${this.state.oilForModal.item_name}`}/>
                        <h4 className={this.props.classes.content}>
                            Wholesale Price: {this.state.oilForModal.wholesale_price} <br/>
                            Retail Price: {this.state.oilForModal.retail_price}
                        </h4>
                    </div>
                </Dialog>
        </div>)
    }
}
export default (withStyles(styles)(DisplayAllProducts))