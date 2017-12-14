module.exports = {

    create: (req,res)=>{
        const product = req.body
        const db = req.app.get('db');
        db.create_product([
            product.name,
            product.description,
            product.price,
            product.imageurl
        ]).then(newProduct => {
            res.status(200).send(newProduct)
        })
    },
    getOne: (req,res)=>{
        const id = req.params.id
        const db = req.app.get('db');
        db.read_product([id]).then(product => {
            res.status(200).send(product)
        })
    },
    getAll: (req,res)=>{
        const db = req.app.get('db');
        db.read_products().then(products => {
            res.status(200).send(products)
        })
    },
    update: (req,res)=>{
        const id = req.params.id;
        const body = req.query;
        const db = req.app.get('db');
        db.update_product([
            id,
            body.desc
        ]).then(product=>{
            res.status(200).send(product)
        })
    },
    delete: (req,res)=>{
        const id = req.params.id;
        const db = req.app.get('db');
        db.delete_product([id]).then(products => {
            res.status(200).send(products)
        })
    }
}