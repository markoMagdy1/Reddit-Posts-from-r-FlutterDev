import './App.css';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { FlutterDev } from './components/pages/reddit/FlutterDev';
import { New } from './components/pages/reddit/new';
import { Hot } from './components/pages/reddit/hot';
import { Raising } from './components/pages/reddit/raising';

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path="/" element={<FlutterDev />}>
                    <Route index element={<Navigate to="hot" replace />} />
                    <Route path="new"   element={<New />} />
                    <Route path="hot" element={<Hot />} />
                    <Route path="raising" element={<Raising />} />
                </Route>
            </Routes>
    </div>
);
};

export default App;
