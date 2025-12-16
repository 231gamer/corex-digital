import { z } from 'zod'

export const SERVICES_OPTIONS = [
  'Website Development',
  'Graphics Design',
  'Mobile App Development',
  'Software Development',
  'Branding & Digital Marketing',
  'UI/UX Design',
  'IT Support & Consultancy',
  'Cloud & Hosting Solutions',
  'Training & Capacity Building',
  'Others',
] as const

export const BUDGET_OPTIONS = [
  'Under $500',
  '$500 - $1k',
  '$1k - $2.5k',
  '$2.5k - $5k',
  '$10k+',
] as const

export const DURATION_OPTIONS = [
  '1-2 weeks',
  '2-4 weeks',
  '1-3 months',
  '3-6 months',
  'Flexible / Not sure yet',
] as const

const PhoneSchema = z
  .string()
  .trim()
  .min(7, 'Phone number is too short.')
  .max(25, 'Phone number is too long.')
  .regex(/^[0-9+()\-\s]+$/, 'Phone number contains invalid characters.')

export const QuoteStep1Schema = z.object({
  fullName: z.string().trim().min(2, 'Full name is required.'),
  companyName: z.string().trim().max(120).optional().or(z.literal('')),
  email: z.string().trim().email('Enter a valid email address.'),
  phone: PhoneSchema,
})

export const QuoteStep2Schema = z
  .object({
    services: z.array(z.enum(SERVICES_OPTIONS)).min(1, 'Select at least one service.'),
    otherService: z.string().trim().max(140).optional().or(z.literal('')),
    duration: z.enum(DURATION_OPTIONS, { message: 'Select a valid duration.' }),
  })
  .superRefine((data, ctx) => {
    if (data.services.includes('Others') && !data.otherService?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['otherService'],
        message: 'Describe the “Other” service you need.',
      })
    }
  })

export const QuoteStep3Schema = z.object({
  projectBudget: z.enum(BUDGET_OPTIONS, { message: 'Select a valid budget range.' }),
  details: z.string().trim().min(20, 'Add more detail (minimum 20 characters).').max(5000),
})

export const QuoteFullSchema = QuoteStep1Schema
  .merge(QuoteStep2Schema)
  .merge(QuoteStep3Schema)

export type QuoteFullInput = z.infer<typeof QuoteFullSchema>
