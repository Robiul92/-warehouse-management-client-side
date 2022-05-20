
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Pages/Home/Home/Home';
import Register from './Components/Pages/Login/Register/Register'
import About from './Components/Pages/About/About';
import Login from './Components/Pages/Login/Login';
import Blog from './Components/Pages/Blog/Blog';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './Components/Pages/NotFound/NotFound';
import CategoryDetails from './Components/Pages/CategoryDetails/CategoryDetails';
import RequireAuth from './Components/Pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './Components/Pages/ManageInventory/ManageInventory';
import AddItems from './Components/Pages/AddItems/AddItems';
import ManageItems from './Components/Pages/ManageItems/ManageItems';
import Quantity from './Components/Pages/Quantity/Quantity';
import QuantityDetails from './Components/Pages/Quantity/QuantityDetails/QuantityDetails';
import Details from './Components/Pages/Details/Details';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path= 'inventory/:categoryId' element={
        <RequireAuth>
          <CategoryDetails></CategoryDetails>
        </RequireAuth>
        }></Route>
        <Route path= 'additems' element={
        <RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>
        }></Route>
        <Route path= 'manageitems' element={
        <RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>
        }></Route>
        <Route path= '/quantity/:id' element={
        <RequireAuth>
          <Quantity></Quantity>
        </RequireAuth>
        }></Route>
        <Route path='/quantity/' element ={<QuantityDetails></QuantityDetails>}></Route>
        <Route path='manageinventory' element ={<ManageInventory></ManageInventory>}></Route>
        <Route path='/details/:id' element ={<Details></Details>}></Route>
        <Route path='/login' element={<Login></Login> } ></Route>
        <Route path={'/register'} element={<Register></Register> } ></Route>
        <Route path= '*' element={<NotFound></NotFound>}></Route>
        

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
