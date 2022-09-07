import express from 'express';

import { allPeeps, newPeep } from '../controllers/peepController.js';
import protect from '../middleware/authMiddleware.js';

export const router = express.Router();

router.get('/', allPeeps);


router.post('/new-peep', protect, newPeep);
