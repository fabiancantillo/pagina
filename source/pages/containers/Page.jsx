import React from 'react';
import {
	Match,
	Miss,
	Link,
} from 'react-router';

import Home from './Home.jsx';
import Post from './Post.jsx';
import Profile from './Profile.jsx';
import Error404 from './Error404.jsx';

function Pages() {
	return (
		<main role="application">
			{/*list de articulo*/}
			<Match
				pattern= "/"
				exactly
				component={Home}
			/>
			{/*detalle de articulo*/}
			<Match
				pattern= "/post/:id"
				exactly
				component={Post}
			/>
			{/*perfil de usuario*/}
			<Match
				pattern= "/user/:id"
				exactly
				component={Profile}
			/>
			{/*error 404*/}
			<Miss component= {Error404} />
		</main>		
	);
}

export default Pages;
