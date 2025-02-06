import React from 'react';

import BookList from './components/BookList';
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import BookDetail from './components/BookDetail';
import AddBook from './components/AddBook';
import UpdateBook from './components/updateBook';
import About from './components/About';

function App() {


  return (
    <>
    <Router>
    <Header/>
        <Routes>
          <Route path='/' element={  <BookList />}/>
          <Route path='/bookdetail/:id' element={  <BookDetail />}/>
          <Route path='/addbook' element={ <AddBook/> }></Route>
          <Route path='/updatebook/:id' element={<UpdateBook/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
    </Router>

  
    
   </>
  )
}

export default App;
