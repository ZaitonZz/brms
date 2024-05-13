import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Correct type usage: purokCreateInput
    const purokData: Prisma.purokCreateInput = req.body;

    try {
      const newPurok = await prisma.purok.create({
        data: purokData,
      });
      res.status(200).json(newPurok);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create new purok.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
