import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send("Radhe Radhe bhaiya, Song Kesa laga");
})



export default router;