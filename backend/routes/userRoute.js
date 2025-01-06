// import express from 'express'
// import {fetch,create} from '../controller/userController.js'
// const router=express.Router()
// router.get('/fetch',fetch)
// router.post('/create',create)
// export default router;
import express from 'express';
import { fetch, create, update, deleteUser ,fetchById} from '../controller/userController.js';

const router = express.Router();

router.get('/fetch', fetch);   // For GET requests
router.post('/create', create); // For POST requests
router.put('/update/:id', update); // For POST requests
router.delete('/delete/:id', deleteUser); // For POST requests
router.get('/fetch1/:id', fetchById); // For POST requests

export default router;
