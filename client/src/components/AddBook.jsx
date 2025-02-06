import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";


import { toast, ToastContainer } from "react-toastify";

import { useState } from "react";
function AddBook(){

      const [name,setName]=useState("");
      const [author,setAuthor]=useState("");
      const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [price,setPrice]=useState("");

   


            async function postdata(e){
                e.preventDefault();
                try {
                    const postbook=await axios.post("http://localhost:3000/books",{name,author,description,image,price});

                    toast.success("Book added successfully!", {
                      position: "top-right",
                      autoClose: 3000, // Auto close after 3 seconds
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });



                } catch (error) {
                    console.log(error.message);
                    toast.error("Failed to add book!", {
                      position: "top-right",
                      autoClose: 3000,
                    });
              
                }
                // window.location="/addbook";
                setName("");
                setDescription("");
                setAuthor("");
                setImage("");
                setPrice("");

               
            }





            return  <div className="container mt-4">
            <h2 className="mb-4">Add a New Book</h2>
            <form onSubmit={postdata}>
              {/* Book Name */}
              <div className="mb-3">
                <label className="form-label">Book Name</label>
                <input type="text" className="form-control" value={name} placeholder="Enter book name" onChange={(e)=>{setName(e.target.value)}} required/>
              </div>
      
              {/* Author Name */}
              <div className="mb-3">
                <label className="form-label">Author</label>
                <input type="text" className="form-control" value={author} placeholder="Enter author name" onChange={(e)=>{setAuthor(e.target.value)}} required/>
              </div>
      
              {/* Description */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="3" value={description} placeholder="Enter book description" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
              </div>
      
              {/* Image URL */}
              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input type="text" className="form-control"  value={image} placeholder="Enter image URL" onChange={(e)=>{setImage(e.target.value)}} required/>
              </div>
      
              <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="text" className="form-control" value={price} placeholder="Enter price" onChange={(e)=>{setPrice(e.target.value)}} required/>
        </div>
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
            <ToastContainer />
          </div>
          
}

export default AddBook;