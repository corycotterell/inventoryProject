import React from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

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
class OilCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item_picture_url: "https://media.doterra.com/us/en/images/product/arborvitae-5ml.jpg",
            item_name: "Some Oil",
            wholesale_price: "$50.00",
            retail_price: "$70.00",
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        let oilForModal = this.props.oilInfo
        this.props.handleOpen(oilForModal)
    }
    render() {
        return (
            <div>
                <a className={this.props.classes.a}  onClick={this.handleClick} href="#">
                <Paper id={this.props.id.id} className={this.props.classes.card}>
                    {/* <a className={this.props.classes.a} href="#"> */}
                        <h4 className={this.props.classes.title}>{this.props.oilInfo.item_name}</h4>
                        <img className={this.props.classes.image} src={this.props.oilInfo.item_picture_url} alt={`${this.props.oilInfo.item_name}`}/>
                        <p className={this.props.classes.content}>Click Here To View More!
                            </p>
                    
                </Paper>
                </a>
            </div>
        )
    }
}
export default (withStyles(styles)(OilCard));