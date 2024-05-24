// app/api/logout/route.ts

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const response = NextResponse.json({ message: 'Logged out successfully' });
  response.cookies.set('authToken', '', { maxAge: 0, path: '/' });
  return response;
}
