import { Request, Response } from 'express';

export const updateReading = (req: Request, res: Response) => {
    const { measure_uuid, confirmed_value } = req.body;

    if (!measure_uuid || !confirmed_value) {
        return res.status(400).json({ error_code: 'INVALID_DATA', error_description: 'Invalid data' });
    }

    

    res.status(200).json({ success: true });
};
