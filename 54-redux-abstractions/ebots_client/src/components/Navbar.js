import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { connect } from "react-redux"

import { logout } from '../actions'

class Navbar extends React.Component {
	render(){
		return (
			<Grid.Row>
				<Grid.Column width={16}>
					<Menu>
						<Link className="item" to="/shop">
							Shop
						</Link>
						{
							this.props.currentUser 
							
							?

							<Menu.Menu position="right">
								<Link className="item" to={`/users/${this.props.currentUser.id}`}>
									<img src={this.props.currentUser.avatar_url} alt={this.props.currentUser.username}/>
								</Link>
								<Menu.Item onClick={this.props.logout}>
									Log out
								</Menu.Item>
							</Menu.Menu>
						
							:

							<Menu.Menu position="right">
								<Link className="item" to="/login">
									Login
								</Link>
								<Link className="item" to="/signup">
									Sign Up
								</Link>
							</Menu.Menu>
							
						}
					</Menu>
				</Grid.Column>
			</Grid.Row>
		)
	}
}

function msp(state){
	return {
		currentUser: state.currentUser
	}
}



export default connect(msp, { logout })(Navbar)




