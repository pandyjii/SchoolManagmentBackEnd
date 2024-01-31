
const express=require('express');
const StudentController=require('../Conteroller/StudentController')

const router=express.Router();

router.post('/',StudentController.Sinup);
router.post('/login',StudentController.Login);
router.delete('/:id',StudentController.delete);
router.post('/add',StudentController.Addproduct);
router.get('/',StudentController.getProduct);
router.get('/product/:id',StudentController.getUpdateProduct);
router.put('/product/:id',StudentController.UpdateProduct);
router.get('/search/:key',StudentController.SearchProduct);

exports.StudentRouter=router;
