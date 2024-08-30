import { Request, Response } from 'express';

export const listReadings = (req: Request, res: Response) => {
   
    const readings = [
        {
            measure_uuid: '1234',
            measure_datetime: new Date(),
            measure_type: 'WATER',
            has_confirmed: true,
            image_url: 'http://ainda_nao_tenho.com/image.jpg',
        },
    ];

    res.status(200).json({ customer_code: req.params.customer_code, measures: readings });
};
