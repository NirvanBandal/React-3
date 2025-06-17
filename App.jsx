import {Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'

const Nav=()=>(
<nav style={{
display:'flex',
justifyContent:'center',
gap:'2rem',
padding:'1rem',
background:'#f0f0f0',
boxShadow:'0 2px 5px rgba(0,0,0,0.1)',
fontSize:'1.1rem'
}}>
<Link to="/" style={{textDecoration:'none',color:'#333',fontWeight:'bold'}}>Home</Link>
<Link to="/profile" style={{textDecoration:'none',color:'#333',fontWeight:'bold'}}>Profile</Link>
</nav>
)

const App=()=>(
<>
<Nav/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/profile" element={<Profile/>}/>
</Routes>
</>
)

export default App

