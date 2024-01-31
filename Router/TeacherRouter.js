
const express=require('express');
const TeacherController=require('../Conteroller/TeacherController');

const router=express.Router();

router.post('/',TeacherController.sinup);
router.post('/login',TeacherController.Login);
router.delete('/:id',TeacherController.delete);
router.post('/add',TeacherController.Addproduct);
router.get('/',TeacherController.getProduct);
router.get('/product/:id',TeacherController.getUpdateProduct);
router.put('/product/:id',TeacherController.UpdateProduct);
router.get('/search/:key',TeacherController.SearchProduct);

exports.TeacherRouter=router;
