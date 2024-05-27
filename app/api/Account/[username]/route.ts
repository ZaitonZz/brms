import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/prisma/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

  try {
    const account = await prisma.account.findFirst({
      where: {
        username: String(username)
      }
    });

    if (account) {
      const accessLevel = account?.AccessLevel; 
      return res.status(200).json({ accessLevel });
    } else {
      return res.status(404).json({ status: 404, message: 'Account not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ status: 500, message: 'Internal Server Error' });
  }
}