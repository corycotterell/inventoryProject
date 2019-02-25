import React from 'react'
import {withRouter} from 'react-router'
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
class HomePage extends React.Component{
componentDidMount(){
    axios.get('/getUser',{
    headers: {'Authorization': `Bearer ${localStorage.getItem('member_token')}`}
    }).then((response) => {
        if( !response.data.message === "success"){
            this.props.history.push('/login')
        }
    }).catch((e) => {
        console.log(e)
        this.props.history.push('/login')
    })
}
render(){
    return(
        <div>
            <Paper>
                <h1>Welcome To Essential Oil Inventory Manager</h1>
            </Paper>
        </div>
    )
}
}
export default withRouter(HomePage)