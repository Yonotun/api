import express from "express";
import userSchema from "../models/users.js";
const router = express.Router();

// create user
router.post('/', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});


// get all users
router.get('/', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});
//update user
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email} = req.body;
    userSchema
        .updateOne({ _id: id}, { $set : {name, age, email}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});

//delete user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
});

export default router;