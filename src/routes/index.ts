import { Router } from 'express';
import { listReadings } from '../controllers/listController';
import { uploadReading } from '../controllers/uploadController';
import { updateReading } from '../controllers/updateController'; // Importação corrigida
import { deleteReading } from '../controllers/deleteController';

const router = Router();

router.get('/:customer_code/list', listReadings);
router.post('/upload', uploadReading);
router.put('/update', updateReading);
router.delete('/delete/:measure_uuid', deleteReading);

export default router;

