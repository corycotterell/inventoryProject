import React, { Component } from 'react';
import './App.css';
import { Card, Button, Input } from 'react-onsenui'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import axios from 'axios'
class DisplayOil extends Component {
    constructor(props){
        super(props)
        this.state = {
            url:"https://media.doterra.com/us/en/images/product/arborvitae-5ml.jpg",
            item_name:"Some Oil",
            wholesale_price: "$75",
            retail_price: "$100"
        }
    }
    componentDidMount(){
        axios.get('/oil').then((data) =>{
            // this.setState({
            //     url:data.data[1].item_picture_url,
            //     item_name:data.data[1].item_name,
            //     wholesale_price:data.data[1].wholesale_price,
            //     retail_price:data.data[1].retail_price
            // })
        }).catch((error) =>{
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                <Card className="display-oil-card">
                <img className="image-style"src={this.state.url} alt="picture of some oil"/>
                <p>{this.state.item_name}<br/>
                Wholesale Price: {this.state.wholesale_price}<br/>
                Retail Price: {this.state.retail_price}
                </p>
                </Card>
            </div>
        );
    }
}

export default DisplayOil;

