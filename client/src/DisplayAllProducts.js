import React from 'react'
import axios from 'axios';
import Paper from "@material-ui/core/Paper"
import OilCard from './OilCard';
import { Grid } from '@material-ui/core';

const styles = theme => ({

})
class DisplayAllProducts extends React.Component {
    constructor() {
        super()
        this.state = {
            allOils: [{ 
            item_picture_url: "https://media.doterra.com/us/en/images/product/arborvitae-5ml.jpg",
            item_name: "Some Oil",
            wholesale_price: "$75",
            retail_price: "$100"}]
        }
        this.displayProducts = this.displayProducts.bind(this)
    }
    componentDidMount() {
        axios.get("/getAllProducts").then((response) => {
            this.setState({ allOils: response.data })
        })
    }
    displayProducts() {
        let array = this.state.allOils
        // array.forEach((e) => {
        //     console.log(<OilCard oilInfo={e} />)
        // })
        this.setState({
            shit:"true"
        })
    }
    render() {
        return (<div>
            <Grid container spacing={8}>
            {this.state.allOils.map((e)=>{
                return(
                    <Grid item>
                <OilCard key={e.item_name}oilInfo={e}/>
                </Grid>
                )
            })}
            </Grid>
        </div>)
    }
}
export default DisplayAllProducts