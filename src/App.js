import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home/Home';
import { useSelector } from 'react-redux';
import Product from './component/Product/Product';
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Product/:slug/:_id" element={<Product />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
