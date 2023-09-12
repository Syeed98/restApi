const express=require('express');
const router=express.Router();


const blogController = require("../controllers/blogController");
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');



// Blog routes
router.get('/blogs/create', blogController.create);
router.get('/blogs/read', blogController.read);
router.get('/blogs/delete', blogController.delete);
router.get('/blogs/update', blogController.update);

// Comment routes
router.get('/comments/create', commentController.create);
router.get('/comments/read', commentController.read);
router.get('/comments/delete', commentController.delete);
router.get('/comments/update', commentController.update);

// Message routes
router.get('/messages/create', messageController.create);
router.get('/messages/read', messageController.read);
router.get('/messages/delete', messageController.delete);
router.get('/messages/update', messageController.update);

// Portfolio routes
router.get('/portfolio/create', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/delete', portfolioController.delete);
router.get('/portfolio/update', portfolioController.update);

// Product routes
router.get('/products/create', productController.create);
router.get('/products/read', productController.read);
router.get('/products/delete', productController.delete);
router.get('/products/update', productController.update);


module.exports=router;