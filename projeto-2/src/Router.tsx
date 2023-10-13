import { Routes, Route } from 'react-router-dom'; // para web
import { History } from './pages/History';
import { Home } from './pages/Home/Home';
import { DefaultLayout } from './components/layouts/DefaultLayout';


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
      </Route>
    </Routes>
  )
}