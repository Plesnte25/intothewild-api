const express = require('express');
const { getProperties, getPropertyById,editProperty, addProperty, deleteProperty} = require('../controller/propertiesController');
const router = express.Router();

// router.get("/getProperties", getProperties);
// router.get("/getPropertyById/:id", getPropertyById);
// router.put("/updateProperty/:id",editProperty);
// router.post("/addProperty", addProperty);
// router.delete("/deleteProperty/:id", deleteProperty);

// /api/v1/properties
router
    .route("/")
    .get(getProperties) //GET /api/v1/properties
    .post(addProperty); //POST /api/v1/properties

// /api/v1/properties/:id
router
    .route("/:id")
    .get(getPropertyById) //GET /api/v1/properties/:id
    .put(editProperty) //PUT /api/v1/properties/:id
    .delete(deleteProperty); //DELETE /api/v1/properties/:id

module.exports = router;