import { Router } from "express";
import { food } from "../data.js";

const router = Router()

router.get('/', (req,res) => {
    res.send(food)
})

export default router;