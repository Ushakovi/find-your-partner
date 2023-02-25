import { NextApiRequest, NextApiResponse } from 'next';

interface IExtendedNextApiRequest extends NextApiRequest {
    body: {
        name: string;
        password: string;
    };
}

export default function handler(
    req: IExtendedNextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case 'GET':
            res.status(200).send('Get method in login route');
            break;

        case 'POST':
            if (!req.body) {
                res.status(400).send('No body');
            }
            const { name, password } = req.body;
            res.status(200).send(
                `Recieved login with name: ${name} ${password}`
            );
            break;

        default:
            res.status(400).end(`Incorrect method`);
            break;
    }
}
