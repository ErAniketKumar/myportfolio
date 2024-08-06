import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
function App() {
	return (
		<>
			<div>
				<Navbar></Navbar>
				<Home></Home>
				<About></About>
				<Portfolio></Portfolio>
				<Skill></Skill>
				<Contact></Contact>
			</div>
			<Toaster />
		</>
	);
}

export default App;
