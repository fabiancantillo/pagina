import React, { Component } from 'react';
import { Link } from 'react-router';

class Profile extends Component {
	render() {
		return (
			<section name="profile">
				<h1>Profile</h1>
				<Link to="/">
					go to Home
				</Link>
				<Link to="/random">
					go to random
				</Link>
			</section>
		);
	}
}

export default Profile;