// use type module in package.json for using import statement rather than require stat.

import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from '../lib/db.js'

import userRoutes from '../routes/user.routes.js';  // you need to write .js because of type module
import authRoutes from '../routes/auth.routes.js';
import adminRoutes from '../routes/admin.routes.js';
import songRoutes from '../routes/song.routes.js';
import albumRoutes from '../routes/album.routes.js';
import statRoutes from '../routes/stat.routes.js';
    
dotenv.config();   
const app = express();
const PORT = process.env.PORT;

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/stats', statRoutes )



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})