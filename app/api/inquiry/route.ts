import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      fullName,
      email,
      phone,
      companyName,
      services,
      otherService,
      duration,
      projectBudget,
      details,
    } = body

    // -------- Basic validation --------

    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return NextResponse.json(
        { error: 'Full name is required.' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return NextResponse.json(
        { error: 'Phone number is required.' },
        { status: 400 }
      )
    }

    if (!Array.isArray(services) || services.length === 0) {
      return NextResponse.json(
        { error: 'Select at least one service you need.' },
        { status: 400 }
      )
    }

    if (services.includes('Others')) {
      if (
        !otherService ||
        typeof otherService !== 'string' ||
        !otherService.trim()
      ) {
        return NextResponse.json(
          { error: 'Please describe the "Other" service you need.' },
          { status: 400 }
        )
      }
    }

    if (!duration || typeof duration !== 'string' || !duration.trim()) {
      return NextResponse.json(
        { error: 'Project duration is required.' },
        { status: 400 }
      )
    }

    if (
      !projectBudget ||
      typeof projectBudget !== 'string' ||
      !projectBudget.trim()
    ) {
      return NextResponse.json(
        { error: 'Project budget range is required.' },
        { status: 400 }
      )
    }

    if (!details || typeof details !== 'string' || details.trim().length < 20) {
      return NextResponse.json(
        {
          error:
            'Please provide a bit more detail about your project (at least 20 characters).',
        },
        { status: 400 }
      )
    }

    // -------- Create record --------

    await prisma.projectInquiry.create({
      data: {
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        companyName:
          companyName && typeof companyName === 'string'
            ? companyName.trim()
            : null,
        services, // Json field, store array as-is
        otherService:
          services.includes('Others') && otherService
            ? String(otherService).trim()
            : null,
        duration: duration.trim(),
        projectBudget: projectBudget.trim(),
        details: details.trim(),
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Project inquiry error:', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
