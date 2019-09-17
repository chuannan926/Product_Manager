const Product = require('./models');

module.exports ={
    index:(request,response) =>{
        Product.find({})
        .then(All_Product =>{
            console.log("All_Product");
            response.json(All_Product);
        })
        .catch(err => response.json(err))
    },
    new_product:(request,response) =>{
        console.log(request.body);
        Product.create(request.body)
        .then(New_Product =>{
            console.log("Showing New Product");
            response.json(New_Product);
        })
        .catch(err => response.json(err)) 
    },

    one_product:(request, response) =>{
        console.log("One_Product_ID", request.params.id);
        Product.findById({_id : request.params.id})
        .then(One_Product =>{
            console.log("find One_Product", One_Product);
            response.json(One_Product);
        })
        .catch(err => response.json(err)) 
    },

    update_product:(request,response) =>{
        console.log("this is ProductID", request.params.id);
        Product.findOneAndUpdate({_id : request.params.id}, request.body)
        .then(Edit_Product =>{
            console.log("update this product", Edit_Product);
            response.json(Edit_Product);
        })
        .catch(err => response.json(err)) 
    },

    delete_product:(request,response) =>{
        console.log("Delete")
        Product.findByIdAndRemove({_id:request.params.id})
        .then(Delete_Product =>{
            response.json(Delete_Product)
        })
        .catch(err =>response.json(err))
    },
}