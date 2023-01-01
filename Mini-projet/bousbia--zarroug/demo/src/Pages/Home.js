import { Container } from '@mantine/core'
import React from 'react'
import '../App.css';

import {BrowserRouter as Router, Link,
	Routes, Route} from 'react-router-dom'
const Home = () => {
return (
	// <Container>
	<div className="Page">
		

		<div  class="contact-box"  >
		<div class="left"></div>
			<div class="right">
		<h3>  I am Bousbia Yazid, Welcome to my Homepage</h3>
		<h5>  You can browse my page with :</h5>

	           <div>
	            <Link to="/contact"> <button>Contacts</button></Link>
	          	<Link to="/Blog">

                 <button>Blog</button>
                 </Link>
	             </div>

				 </div>
		</div>
	
	</div>
	// </Container>
)
}
  
export default Home
