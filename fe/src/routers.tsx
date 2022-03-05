import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SidebarLayout from './layout/sidebar';
import RequriedAuth from './layout/requiredAuth';
import { FirebaseProvider } from './provider/firebase';
import Sidebar from './sidebar';
import ViewPage from './view';
import CenterContainerLayout from './layout/centerContainer';
import SignInPage from './signIn';

function Router() {
  return (
    <FirebaseProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RequriedAuth />}>
            <Route element={<SidebarLayout><Sidebar /></SidebarLayout>}>
              <Route path="/" element="Homepage" />
              <Route path="/view" element={<ViewPage />} />
            </Route>
          </Route>
          <Route element={<CenterContainerLayout />}>
            <Route path="/login" element={<SignInPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FirebaseProvider>
  );
}
export default Router;
