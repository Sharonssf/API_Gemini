import { Request, Response } from 'express';

export const deleteReading = (req: Request, res: Response) => {
    const { measure_uuid } = req.params;

    if (!measure_uuid) {
        return res.status(400).json({ error_code: 'INVALID_DATA', error_description: 'Invalid data' });
    }

    

    res.status(200).json({ success: true });
};
