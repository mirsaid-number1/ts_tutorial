import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {QueryClientProvider,QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import Firebase from './components/firebase_config';
import NoRoute from './components/NoRoute';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import AuthSystem from './components/AuthSystem';
import Login from './components/Login';

const queryClient = new QueryClient();

function App() {
  return (
  <BrowserRouter>
   <QueryClientProvider client={queryClient}>
      <AuthSystem>
        <Navbar />
        <Routes>
          <Route path='/' element={<Firebase />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NoRoute />} />
        </Routes>
      </AuthSystem>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  </BrowserRouter>
  );
}

export default App;
