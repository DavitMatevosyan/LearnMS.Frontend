import { Route, Routes, useNavigate } from 'react-router-dom'
import LandingHeader from './Components/Shared/Headers/LandingHeader';
import Landing from './Routes/Landing/Landing';
import RegisterForm from './Components/Auth/Register/RegisterForm';
import UserPage from './Routes/User/UserPage';
import { UserHeader } from './Components/Shared/Headers/UserHeader';

function App() {
	const navigate = useNavigate();

return (
    <div style={{padding: '10px'}}>

        <Routes>
            <Route path='/' element={<LandingHeader navigate={navigate}/>}>
                <Route index element={<Landing />} />
                <Route path="/TechnologyUsed" element={<p>gaag</p>} />
                <Route path="/register" element={<RegisterForm navigate={navigate} />}/>
            </Route>
            <Route path='/my' element={<UserHeader navigate={navigate} />}>
                <Route index element={<UserPage />} />
            </Route>
            <Route path="*" element={<p>not found</p>} />
        </Routes>
        </div>
  )
}

export default App
