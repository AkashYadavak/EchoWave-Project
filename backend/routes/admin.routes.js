import { Router } from 'express';

const router = Router();


router.get('/', (req, res) => {
    res.send("Ram Ram bhai from adminRoutes ")
})


export default router;