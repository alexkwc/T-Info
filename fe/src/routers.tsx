import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SidebarLayout from './layout/sidebar';
import Sidebar from './sidebar';
import ViewPage from './view';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SidebarLayout><Sidebar /></SidebarLayout>}>
          <Route path="/" element="Homepage" />
          <Route path="/view" element={<ViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
