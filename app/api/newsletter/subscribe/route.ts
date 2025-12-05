import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, source } = body

    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { error: 'Valid email is required.' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.trim().toLowerCase()

    const subscriber = await prisma.newsletterSubscriber.upsert({
      where: { email: normalizedEmail },
      update: {
        source: source || null,
        unsubscribedAt: null, // resubscribe if previously unsubscribed
      },
      create: {
        email: normalizedEmail,
        source: source || null,
      },
    })

    return NextResponse.json({ success: true, subscriber })
  } catch (error) {
    console.error('Newsletter subscribe error:', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
