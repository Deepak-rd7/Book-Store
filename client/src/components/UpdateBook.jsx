import usePagination from "@mui/material/usePagination/usePagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function updateBook(){


    const {id}=useParams();

    const [name,setName]=useState("");
    const [author,setAuthor]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [price,setPrice]=useState("");

    let book;
    async function getBook() {
        try {
             const response=await axios.get(`http://localhost:3000/books/${id}`);
            //  console.log(response.data);
             book = response.data ;

             setName(book.name);
             setAuthor(book.author);
             setDescription(book.description);
             setImage(book.image);
             setPrice(book.price);

        } catch (error) {
            console.log(error.message);
        }
    }
    // console.log(book);
  



    useEffect(()=>{
        getBook();
    },[])


    async function updatebook(e) {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/books/${id}`,{name,author,description,image,price})
        } catch (error) {
            console.log(error.message);
        }
        window.location="/";
    }


       return  <div className="container mt-4">
       <h2 className="mb-4">Update the details in Book</h2>
       <form onSubmit={updatebook}>
         {/* Book Name */}
         <div className="mb-3">
           <label className="form-label">Book Name</label>
           <input type="text" className="form-control" value={name} placeholder="Enter book name" onChange={(e)=>{setName(e.target.value)}} />
         </div>
 
         {/* Author Name */}
         <div className="mb-3">
           <label className="form-label">Author</label>
           <input type="text" className="form-control" value={author}  placeholder="Enter author name" onChange={(e)=>{setAuthor(e.target.value)}}/>
         </div>
 
         {/* Description */}
         <div className="mb-3">
           <label className="form-label">Description</label>
           <textarea className="form-control" rows="3" value={description} placeholder="Enter book description" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
         </div>
 
         {/* Image URL */}
         <div className="mb-3">
           <label className="form-label">Image URL</label>
           <input type="text" className="form-control" value={image} placeholder="Enter image URL"  onChange={(e)=>{setImage(e.target.value)}}/>
         </div>
 
         <div className="mb-3">
     <label className="form-label">Price</label>
     <input type="text" className="form-control" value={price} placeholder="Enter price" onChange={(e)=>{setPrice(e.target.value)}}/>
   </div>
         {/* Submit Button */}
         <button type="submit" className="btn btn-primary" >Submit</button>
       </form>
     </div>
}

export default updateBook;