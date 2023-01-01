import {BrowserRouter as Router, Link,
	Routes, Route} from 'react-router-dom'
	import './App.css';
	import Home from './Pages/Home';
	import Blog from './Pages/Blog';
	import Contact from './Pages/Contact';
    import MyContacts from './Components/MyContacts';
	import Myblog from './Components/Myblog';
	
	
	function App() {
	return (
		<div className="App">
		<Router>
			
			<Routes>
				
			<Route path="/" element={<Home />} />
			<Route path="/Blog" element={<Blog />}>
			<Route path="Myblog" element={<Myblog/>}/>
			
			</Route>
			 <Route path="/contact" element={<Contact />}>
             <Route path="MyContacts" element={<MyContacts/>}/>
           </Route>
			</Routes>
		</Router>
		</div>
	);
	}
	
	export default App;
	

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";

// import Contact from "./Pages/Contact";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}>
//           <Route path="/contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);