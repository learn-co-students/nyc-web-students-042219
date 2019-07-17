import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import ShopPage from './containers/ShopPage'
import Profile from './containers/Profile'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

import { connect} from 'react-redux'

import { login } from './actions'

class App extends Component {


	componentDidMount(){
		const token = localStorage.getItem("token")
		if(token){
			// let's go get some user data
			fetch("http://localhost:3001/api/v1/auto_login", {
				headers: {
					"Authorization": token
				}
			})
			.then(res => res.json())
			.then(response => {
				if (response.errors){
					localStorage.removeItem("user_id")
					alert(response.errors)
				} else {

					this.props.login(response)
				}
			})
		}
	}



	render() {
		return (
			<Grid>
				<Navbar/>
				<Grid.Row centered>
					<Switch>
						<Route path="/users/:id" component={Profile} />
						<Route path="/shop" component={ShopPage} />
						<Route path="/login" component={LoginForm}/>
						<Route path="/signup" component={SignupForm}/>
					</Switch>
				</Grid.Row>
			</Grid>
		);
	}
}



export default connect(null, { login })(App);
