import React from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog"

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
class OilCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item_url: "https://media.doterra.com/us/en/images/product/arborvitae-5ml.jpg",
            item_name: "Some Oil",
            wholesale_price: "$50.00",
            retail_price: "$70.00",
            open: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        return (
            <div>
                <Paper className={this.props.classes.card}>
                    <a className={this.props.classes.a} href="#" onClick={this.handleClickOpen}>
                        <h4 className={this.props.classes.title}>{this.state.item_name}</h4>
                        <img className={this.props.classes.image} src={this.state.item_url} alt={`${this.state.item_name}`}/>
                        <p className={this.props.classes.content}>Click Here To View More!
                            </p>
                    </a>
                </Paper>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose} aria-labelledby="simple-dialog-title">
                    <h2 className="title" id="dialog-title">{this.state.item_name}</h2>
                    <div>
                        <img className={this.props.classes.modalImage} src={this.state.item_url} alt={`${this.state.item_name}`}/>
                        <h4 className={this.props.classes.content}>
                            Wholesale Price: {this.state.wholesale_price} <br/>
                            Retail Price: {this.state.retail_price}
                        </h4>
                    </div>
                </Dialog>
            </div>
        )
    }
}
export default (withStyles(styles)(OilCard));