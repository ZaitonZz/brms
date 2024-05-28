import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST request handler
export async function createPurok(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const purokData = req.body;

    try {
      const newPurok = await prisma.purok.create({
        data: purokData,
      });
      res.status(200).json(newPurok);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create new purok.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Export the createPurok function as the default export
export default createPurok;
