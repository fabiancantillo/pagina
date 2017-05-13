import React, { Component } from 'react';
import { Link } from 'react-router';

class Post extends Component {
	render() {
		return (
			<section name="post">
				<h1>Post</h1>
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

export default Post;