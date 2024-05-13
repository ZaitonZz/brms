import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { Username, Email, Password, AccessLevel, AdminID, citizenID } = req.body;
    try {
      const newAccount = await prisma.account.create({
        data: {
          Username,
          Email,
          Password,
          AccessLevel,
          AdminID,
          citizenID,
        },
      });
      res.status(201).json({ message: 'Account created successfully', account: newAccount });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error creating account' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
