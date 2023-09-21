import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

		return (
		<>
			<BrowserRouter>

				<nav className='flex'>

					<div id="nav-brand">
						<h3>Who Am I?</h3>
					</div>

					<div id="nav-options">
						<span>
							<Link to="/">Home</Link>
						</span>
						<span>
							<Link to="/projects">Projects</Link>
						</span>
						<span>
							<Link to="/contact">Contact Me</Link>
						</span>
					</div>

				</nav>

				<div className='flex header'>
					<div className="user-info">
						<h1>Abhishek Ahlawat</h1>
						<p>Hi Visitor! I am the guy who created Studytonight, the Interactive courses and even this project that you are doing right now.</p>
					</div>

					<div className="user-pic">
						<img src="https://bit.ly/3oIs4Lj" alt ="" className="img-responsive img-circle"/>
					</div>
				</div>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<h1>404 - Page not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</>
		
		);
}

export default App;