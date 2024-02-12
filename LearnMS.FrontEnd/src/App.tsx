import { Route, Routes, useNavigate } from 'react-router-dom'
import LandingHeader from './Components/Shared/Headers/LandingHeader/LandingHeader';
import Landing from './Routes/Landing/Landing';
import RegisterForm from './Components/Auth/Register/Register';

function App() {
	const navigate = useNavigate();

return (
    <div style={{padding: '10px'}}>

        <Routes>
            <Route path='/' element={<LandingHeader navigate={navigate}/>}>
                <Route index element={<Landing />} />
                <Route path="/TechnologyUsed" element={<Landing />} />
                <Route path="/register" element={<RegisterForm />}/>
            </Route>
            {/* <Route path="/my" element={<MainPage />} /> */}
            <Route path="*" element={<p>not found</p>} />
        </Routes>
        </div>
  )
}

export default App
