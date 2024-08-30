import { Request, Response } from 'express';
import axios from 'axios';

export const uploadReading = async (req: Request, res: Response) => {
    const { image, customer_code, measure_datetime, measure_type } = req.body;

    if (!image || !customer_code || !measure_datetime || !measure_type) {
        return res.status(400).json({ error_code: 'INVALID_DATA', error_description: 'Invalid data' });
    }

    try {
        const response = await axios.post('https://ai.google.dev/gemini-api/v1/vision', {
            image
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`
            }
        });

        const { data } = response;

        

        res.status(200).json({
            image_url: data.image_url,
            measure_value: data.measure_value,
            measure_uuid: '1234' // Exemplo: substituir pelo UUID gerado
        });
    } catch (error) {
        res.status(500).json({ error: 'Error processing image' });
    }
};
