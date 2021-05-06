import express from 'express';
import data from './data';
import cors from 'cors';

const app = express();
app.use(cors());
app.use('/api/products',(req,res) => {
    res.send(data.products);
});
app.use('/api/get_product/:id',(req,res) => {
    const id = req.params.id;
    res.send(data.products.find(x=> x._id == id));
});
    

app.listen(5000,()=>{
    console.log("serverh is running fine");
});


