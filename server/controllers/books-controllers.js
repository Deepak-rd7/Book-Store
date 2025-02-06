import bookModel from "../model/bookModel.js";


//get all books
export async function getAllBooks(req,res) {
    try {
        const books=await bookModel.find();
        if(!books){
            res.status(404).json("Book not found");
        }
        res.json(books);
    } catch (error) {
        console.log(error.message);
    }
}

//adding data to the books model
export async function addBook(req,res) {
    const {name,author,description,image,price}=req.body;
    let book;
    try {
         book=new bookModel({
            name,
            author,
            description,
            image,
            price
        })
        await book.save();
    } catch (error) {
        console.log(error.message);
    }
    if(!book){
        res.status(404).json({message:"unable to add"})
    }
    res.json(book);
}


//geting data by specific id
export async function getSpecificBook(req,res) {
    const id=req.params.id;

    try {
        const book=await bookModel.findById(id)
        if(!book){
            return res.status(404).json("Book not found");
        }
        res.json(book);
    } catch (error) {
        console.log(error.message);
    }
}

//updating data by providing the full data
export async function updateBook(req,res) {
    const id=req.params.id;
    const {name,author,description,price,available,image}=req.body;
    try {
        const book=await bookModel.findByIdAndUpdate(id,
            {name,author,description,price,available,image}
        )
        await book.save();
        if(!book){
            res.status(404).json("Unable to update the book data");
        }
        
        res.json(book);
    } catch (error) {
        console.log(error.message);
    }
    
}

//patching the data  by providing the data
export async function patchUpdate(req,res){
    const id=req.params.id;
    let book;
    try{
          book=await bookModel.findById(id);
    }
    catch(error){
        console.log(error.message);
    }

        const name=req.body.name||book.name;
        const author=req.body.author||book.author;
        const description=req.body.description||book.description;
        const price=req.body.price||book.price;
        const image=req.body.image||book.image;
   
    // const {name,author,description,price,available}=req.body;
    try {
      

        const book1=await bookModel.findByIdAndUpdate(id, {
            name,author,description,price,image
        })
        await book1.save();

        res.json(book1);
    } catch (error) {
        console.log(error.message);
    }
}

//deleting the data
export async function deleteBook(req,res) {
    const id=req.params.id;
    try {
        const book=await bookModel.findByIdAndDelete(id);
        if(!book){
            res.status(404).json("Unable to delete the book data");
        }
        res.status(200).json("Successfully deleted");
        } catch (error) {
        console.log(error.message);
    }
    
}