import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function BookDetail(){

    const {id}=useParams();
    // console.log(id);

    const [book,setBook]=useState([]);


    
    async function getbook() {
        try {
            const s_book=await axios.get(`http://localhost:3000/books/${id}`);
            setBook(s_book.data);

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        getbook();
    },[]);
    // console.log(book);

      return <div>
           <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <img src={book.image}
                         class="card-img-top" 
                         alt="Book Image" 
                         style={{height: '300px', objectFit: 'contain'}}/>
                    <div class="card-body">
                        <h3 class="card-title">{book.name}</h3>
                        <h5 class="text-muted">Author: {book.author}</h5>
                        <p class="card-text mt-3">
                          {book.description}
                        </p>
                        <Link to="/" class="btn btn-primary">Back to Books</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
}

export default BookDetail;