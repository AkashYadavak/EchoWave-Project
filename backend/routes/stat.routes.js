import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send("Jai SiyaRam from statRoutes");
})


export default router;