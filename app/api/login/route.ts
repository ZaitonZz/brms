import { NextResponse } from 'next/server';
import prisma from '@/prisma/prisma';
var bcrypt = require('bcryptjs');


export async function POST(req: Request) {
  

  const formData = await req.json();
  const username = formData.username;
  const password = formData.password;  

  try {
    const account = await prisma.account.findFirst({
      where: { Username: username?.toString() }
    });
    if (account && password && bcrypt.compareSync(password, account.Password || "")) {
      // Redirect using NextResponse for App Router compatibility
      return new Response('200')
    } else {
      return new NextResponse(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    return new NextResponse(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } finally {
    await prisma.$disconnect();
  }
}