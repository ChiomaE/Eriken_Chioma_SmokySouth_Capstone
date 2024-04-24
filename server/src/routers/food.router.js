import { Router } from "express";
import { food } from "../data.js";

const router = Router()

router.get('/', (req,res) => {
    res.send(food)
})

router.get('/:foodId', (req,res) =>{
    const {foodId} = req.params;
    const foodItem = food.find(item => item.id === foodId)
    res.send(foodItem)
})

export default router;