// app/api/newsletter/unsubscribe/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { error: 'Valid email is required.' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.trim().toLowerCase()

    await prisma.newsletterSubscriber.updateMany({
      where: {
        email: normalizedEmail,
        unsubscribedAt: null,
      },
      data: {
        unsubscribedAt: new Date(),
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
