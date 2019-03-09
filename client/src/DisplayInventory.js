import React from 'react'
import axios from 'axios';
import OilCard from './OilCard';
import { Grid, Dialog, withStyles, Button, Input, Backdrop } from '@material-ui/core';



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
        width: "200px",
        height: "200px",
        objectFit: "contain",
    },
    title: {
        textAlign: "center",
        maxWidth: "400px"
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
        objectFit: "contain",
    },
    button: {
        float: "right",
    },
    innerButton: {
        borderRadius: "100%",
        minWidth: "0px"
        // fontSize:"30px",
    },
    input: {
        textAlign: "center",
        // width:"30px",
        // margin:"10px"
    },
});
class DisplayAllProducts extends React.Component {
    constructor() {
        super()
        this.state = {
            informationLoaded: false,
            allOils: [{
                item_picture_url: "https://media.doterra.com/us/en/images/product/arborvitae-5ml.jpg",
                item_name: "Some Oil",
                wholesale_price: "$75",
                retail_price: "$100"
            }],
            oilForModal: {

            },
            open: false,
            inventoryValue: 0
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.plus = this.plus.bind(this)
        this.subtract = this.subtract.bind(this)
    }
    componentDidMount() {
        axios.get("/getUserInventory",
        {headers: {'Authorization': `Bearer ${localStorage.getItem('member_token')}`}})
        .then((response) => {
            let allOils = []
            response.data.forEach((e) =>{
                e.data.count = e.count
                allOils.push(e.data)
            })
            this.setState({
                informationLoaded:true,
                allOils: allOils
            })
        })
    }
    handleOpen(oilInfo) {
        this.setState({
            oilForModal: oilInfo,
            open: true,
        });
    }
    handleClose() {
        this.setState({ open: false })
    }
    plus() {
        this.setState({
            inventoryValue: this.state.inventoryValue + 1
        })
    }
    subtract() {
        if (this.state.oilForModal === 0) {
            return
        }
        this.setState({
            inventoryValue: this.state.inventoryValue - 1
        })
    }
    render() {
        if (this.state.informationLoaded === false) {
            return (<div>Information Loading Please Wait</div>)
        } else {
            return (<div>
                <Grid container spacing={8}>
                    {this.state.allOils.map((e) => {
                        return (
                            <Grid item>
                                <OilCard id={e} oilInfo={e} message={e.count} handleOpen={this.handleOpen} />
                            </Grid>
                        )
                    })}
                </Grid>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose} aria-labelledby="simple-dialog-title">
                    <h2 className="title" id="dialog-title">{this.state.oilForModal.item_name}</h2>
                    <div>
                        <img className={this.props.classes.modalImage} src={this.state.oilForModal.item_picture_url} alt={`${this.state.oilForModal.item_name}`} />
                        <br />
                        <div className={this.props.classes.content}>
                            <Button onClick={this.subtract} className={this.props.classes.innerButton}
                                variant="contained"
                            >-</Button>
                            <h2 className={this.props.classes.input}>{this.state.oilForModal.count}</h2>
                            <Button onClick={this.plus} className={this.props.classes.innerButton}
                                variant="contained"
                            >+</Button>
                        </div>
                        <h4 className={this.props.classes.content}>
                            Wholesale Price: {this.state.oilForModal.wholesale_price} <br />
                            Retail Price: {this.state.oilForModal.retail_price}
                        </h4>
                        <Button
                            color="secondary"
                            variant="contained"
                        >
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            className={this.props.classes.button}
                        >
                            Add To Inventory
                        </Button>
                    </div>
                </Dialog>
            </div>)
        }
    }
}
export default (withStyles(styles)(DisplayAllProducts))