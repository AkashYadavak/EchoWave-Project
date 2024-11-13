import { Router } from 'express';

const router = Router();


router.get('/', (req, res) => {
    res.send("Hare Krishna album");
})


export default router;
