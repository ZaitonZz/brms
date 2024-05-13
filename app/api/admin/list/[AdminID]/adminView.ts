import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Assuming the structure of 'adminView'—adjust the fields as necessary
type AdminViewData = {
  AdminID: Number;
  Username: string;
 AccessLevel: Number;
}

type ErrorResponse = {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AdminViewData[] | ErrorResponse>
): Promise<void> {
  try {
    // Fetch data from 'adminView' using Prisma Client
    const adminViews = await prisma.admin.findMany();
    res.status(200).json(adminViews);
  } catch (error) {
    // Error handling with detailed message if available
    res.status(500).json({ error: error.message || "Failed to fetch admin data" });
  }
}