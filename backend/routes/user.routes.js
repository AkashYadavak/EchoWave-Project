import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send("Haribol Haribol, user route with get method");
});


export default router;