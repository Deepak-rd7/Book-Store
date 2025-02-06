import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from '@mui/icons-material/Update';

import { toast, ToastContainer } from "react-toastify";


function BookList() {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    try {
      const books = await axios.get("http://localhost:3000/books");
      // console.log(books.data);
      setBooks(books.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  // console.log(books);
  useEffect(() => {
    getBooks();
  }, []);

  async function deleteBook(id) {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);

      setBooks((prevItems)=>
        prevItems.filter((book)=> book._id !== id));

                          toast.success("Book Deleted successfully!", {
                            position: "top-right",
                            autoClose: 3000, // Auto close after 3 seconds
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                          });
      
    } catch (error) {
      console.log(error.message);
          toast.error("Failed to delete book!", {
                            position: "top-right",
                            autoClose: 3000,
                          });
    }
  }

  

  return (
    <div>
      <div class="container mt-5">
        <h2 class="text-center mb-4">Books Collection</h2>
        <div className="row justify-content-start">
          { books.length>0 ?   (  books.map((book) => (
            <div className="col-md-4 col-6 mb-4" key={book._id}>
              <div className="card">
                <img
                  src={book.image}
                  alt={`${book.name} Image`}
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.name}</h5>
                  <p className="card-text">Author: {book.author}</p>
                  <Link to={`/bookdetail/${book._id}`} class="btn btn-dark" style={{marginRight:"180px"}} >
                    Read More
                  </Link>
                  <Link to={`/updatebook/${book._id}`}className="btn  ms-auto" >
                      <i className="bi bi-trash"><UpdateIcon/></i> 
                    </Link>

                    <button className="btn  ms-auto" onClick={()=>deleteBook(book._id)} >
                      <i className="bi bi-trash"><DeleteIcon/></i> 
                    </button>
            
                </div>
              </div>
            </div>
          ))) :(<h1>No Books Available</h1>)}
         
        </div>
      </div>
       <ToastContainer />
    </div>
  );
}

export default BookList;
