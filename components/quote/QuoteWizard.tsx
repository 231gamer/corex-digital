// components/quote/QuoteWizard.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SERVICES_OPTIONS = [
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

const BUDGET_OPTIONS = [
  'Under $500',
  '$500 - $1k',
  '$1k - $2.5k',
  '$2.5k - $5k',
  '$10k+',
] as const

const DURATION_OPTIONS = [
  '1-2 weeks',
  '2-4 weeks',
  '1-3 months',
  '3-6 months',
  'Flexible / Not sure yet',
] as const

type BudgetOption = (typeof BUDGET_OPTIONS)[number]

interface QuoteFormState {
  fullName: string
  companyName: string
  email: string
  phone: string
  services: string[]
  otherService: string
  duration: string
  projectBudget: BudgetOption | ''
  details: string
}

const initialState: QuoteFormState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  services: [],
  otherService: '',
  duration: '',
  projectBudget: '',
  details: '',
}

export default function QuoteWizard() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<QuoteFormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uiError, setUiError] = useState<string | null>(null)
  const [serverError, setServerError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const totalSteps = 3
  const progress = (step / totalSteps) * 100

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setUiError(null)
    setServerError(null)
    setSuccess(false)
  }

  const handleServiceToggle = (service: string) => {
    setForm(prev => {
      const exists = prev.services.includes(service)
      const nextServices = exists
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]

      return { ...prev, services: nextServices }
    })
    setUiError(null)
    setServerError(null)
    setSuccess(false)
  }

  const handleBudgetChange = (value: BudgetOption) => {
    setForm(prev => ({ ...prev, projectBudget: value }))
    setUiError(null)
    setServerError(null)
    setSuccess(false)
  }

  // --- validation ---

  const canGoNext = () => {
    if (step === 1) {
      return (
        form.fullName.trim() !== '' &&
        form.email.trim() !== '' &&
        form.phone.trim() !== ''
      )
    }
    if (step === 2) {
      if (form.services.length === 0) return false
      if (form.services.includes('Others') && form.otherService.trim() === '')
        return false
      return form.duration.trim() !== ''
    }
    if (step === 3) {
      return form.projectBudget !== '' && form.details.trim().length >= 20
    }
    return true
  }

  const getStepValidationMessage = () => {
    if (step === 1) {
      return 'Please provide your full name, email, and phone number.'
    }
    if (step === 2) {
      if (form.services.length === 0) {
        return 'Select at least one service you need.'
      }
      if (form.services.includes('Others') && form.otherService.trim() === '') {
        return 'Describe the “Other” service you need.'
      }
      if (!form.duration.trim()) {
        return 'Select the expected project duration.'
      }
      return 'Please complete the required fields for this step.'
    }
    if (step === 3) {
      if (!form.projectBudget) {
        return 'Select a project budget range.'
      }
      if (form.details.trim().length < 20) {
        return 'Add a bit more detail about your project (at least 20 characters).'
      }
      return 'Please complete the required fields for this step.'
    }
    return 'Please complete the required fields.'
  }

  const handleNext = () => {
    if (!canGoNext()) {
      setUiError(getStepValidationMessage())
      return
    }
    setUiError(null)
    setStep(prev => Math.min(prev + 1, totalSteps))
  }

  const handleBack = () => {
    setUiError(null)
    setServerError(null)
    setStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!canGoNext()) {
      setUiError(getStepValidationMessage())
      return
    }

    setIsSubmitting(true)
    setUiError(null)
    setServerError(null)
    setSuccess(false)

    try {
      const payload = {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        companyName: form.companyName || null,
        services: form.services,
        otherService:
          form.services.includes('Others') && form.otherService.trim()
            ? form.otherService.trim()
            : null,
        duration: form.duration,
        projectBudget: form.projectBudget,
        details: form.details,
      }

      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to submit quote request.')
      }

      setSuccess(true)
      setForm(initialState)
      setStep(1)
    } catch (err: any) {
      setServerError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative py-12">
      {/* Subtle teal/orange blobs, low opacity so they don't bleach the white page */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#005B62]/12 blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-24 h-80 w-80 rounded-full bg-[#D99125]/14 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.3fr)]">
          {/* Form card – glass on white, dark text */}
          <motion.div
            className="rounded-3xl border border-[#005B62]/18 bg-white/80 p-6 text-slate-900 shadow-2xl backdrop-blur-md md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Header + progress */}
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-[#005B62] md:text-3xl">
                  Request a Custom Project Quote
                </h2>
                <p className="mt-2 text-sm text-slate-700 md:text-base">
                  Share a few details about your project. We’ll respond with a tailored estimate.
                </p>
              </div>
                <div
                className="
                    hidden 
                    md:block 
                    text-right 
                    font-medium 
                    text-slate-600 
                    text-[0.8rem]   
                    whitespace-nowrap 
                ">
                Step {step} of {totalSteps}
                </div>

            </div>

            <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <motion.div
                className="h-full rounded-full bg-[#D99125]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              />
            </div>

            {/* Stepper labels */}
            <div className="mb-8 flex items-center justify-between text-xs font-medium text-slate-700 md:text-sm">
              <StepLabel index={1} current={step} label="About You" />
              <StepLabel index={2} current={step} label="Project Scope" />
              <StepLabel index={3} current={step} label="Budget & Details" />
            </div>

            {/* Steps */}
            <div className="relative min-h-[280px] md:min-h-[260px]">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#005B62] md:text-[0.95rem]">
                        Full Name <span className="text-[#D99125]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#D99125] focus:ring-1 focus:ring-[#D99125] md:text-base"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#005B62] md:text-[0.95rem]">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#D99125] focus:ring-1 focus:ring-[#D99125] md:text-base"
                        placeholder="e.g. Corex Digital Solutions"
                      />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-[#005B62] md:text-[0.95rem]">
                          Email <span className="text-[#D99125]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#D99125] focus:ring-1 focus:ring-[#D99125] md:text-base"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-[#005B62] md:text-[0.95rem]">
                          Phone <span className="text-[#D99125]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#D99125] focus:ring-1 focus:ring-[#D99125] md:text-base"
                          placeholder="+231-777-352002"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#005B62] md:text-[0.95rem]">
                        What services do you need? <span className="text-[#D99125]">*</span>
                      </label>
                      <p className="mb-3 text-xs text-slate-600 md:text-sm">
                        You can select more than one service.
                      </p>
                      <div className="grid gap-2.5 md:grid-cols-2">
                        {SERVICES_OPTIONS.map(option => {
                          const selected = form.services.includes(option)
                          return (
                            <motion.button
                              key={option}
                              type="button"
                              onClick={() => handleServiceToggle(option)}
                              whileTap={{ scale: 0.97 }}
                              className={`flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-left text-xs transition md:text-sm ${
                                selected
                                  ? 'border-[#D99125] bg-[#FFF3DF] text-slate-900'
                                  : 'border-slate-200 bg-white/80 text-slate-800 hover:border-[#005B62]'
                              }`}
                            >
                              <span>{option}</span>
                              <span
                                className={`h-3.5 w-3.5 rounded-full border ${
                                  selected
                                    ? 'border-[#D99125] bg-[#D99125]'
                                    : 'border-slate-400'
                                }`}
                              />
                            </motion.button>
                          )
                        })}
                      </div>

                      {form.services.includes('Others') && (
                        <div className="mt-4">
                          <label className="mb-1 block text-xs font-medium text-[#005B62] md:text-sm">
                            Please specify other services
                            <span className="text-[#D99125]">*</span>
                          </label>
                          <input
                            type="text"
                            name="otherService"
                            value={form.otherService}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#D99125] focus:ring-1 focus:ring-[#D99125] md:text-base"
                            placeholder="e.g. Product strategy, maintenance, etc."
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#005B62] md:text-[0.95rem]">
                        Expected project duration <span className="text-[#D99125]">*</span>
                      </label>
                      <select
                        name="duration"
                        value={form.duration}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D99125] focus:ring-1 focus:ring-[#D99125] md:text-base"
                      >
                        <option value="">Select duration</option>
                        {DURATION_OPTIONS.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#005B62] md:text-[0.95rem]">
                        Project budget range <span className="text-[#D99125]">*</span>
                      </label>
                      <p className="mb-3 text-xs text-slate-600 md:text-sm">
                        This helps us propose the right solution for your budget.
                      </p>
                      <div className="grid gap-2.5 md:grid-cols-2">
                        {BUDGET_OPTIONS.map(option => {
                          const selected = form.projectBudget === option
                          return (
                            <motion.button
                              key={option}
                              type="button"
                              whileTap={{ scale: 0.97 }}
                              onClick={() => handleBudgetChange(option)}
                              className={`rounded-xl border px-3.5 py-2.5 text-left text-xs transition md:text-sm ${
                                selected
                                  ? 'border-[#D99125] bg-[#FFF3DF] text-slate-900'
                                  : 'border-slate-200 bg-white/80 text-slate-800 hover:border-[#005B62]'
                              }`}
                            >
                              {option}
                            </motion.button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#005B62] md:text-[0.95rem]">
                        Detailed project description <span className="text-[#D99125]">*</span>
                      </label>
                      <p className="mb-2 text-xs text-slate-600 md:text-sm">
                        Include your goals, target audience, key features, and any links or references.
                      </p>
                      <textarea
                        name="details"
                        value={form.details}
                        onChange={handleInputChange}
                        className="min-h-[140px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#D99125] focus:ring-1 focus:ring-[#D99125] md:text-base"
                        placeholder="Example: We need a modern website or app with clear sections for services, portfolio, contact, and possibly a dashboard..."
                      />
                      <p className="mt-1 text-[11px] text-slate-500 md:text-xs">
                        Minimum 20 characters so we understand what you want.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Validation + server messages */}
            {(uiError || serverError || success) && (
              <div className="mt-4 space-y-1 text-xs md:text-sm">
                {uiError && (
                  <p className="text-[#B45309]">
                    {uiError}
                  </p>
                )}
                {serverError && (
                  <p className="text-red-600">
                    {serverError}
                  </p>
                )}
                {success && !serverError && (
                  <p className="text-emerald-700">
                    Thanks! Your request has been received. We’ll get back to you shortly.
                  </p>
                )}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-8 flex flex-col justify-between gap-3 border-t border-slate-200 pt-4 md:flex-row">
              <div className="flex items-center gap-2 text-xs text-slate-600 md:text-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Secure & confidential – we never share your project details.
              </div>
              <div className="flex items-center justify-end gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition hover:border-[#005B62] hover:text-[#005B62] md:text-sm"
                  >
                    Back
                  </button>
                )}
                {step < totalSteps && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className={`rounded-xl px-5 py-2.5 text-xs font-semibold md:text-sm transition ${
                      canGoNext()
                        ? 'bg-[#D99125] text-white hover:bg-[#f0a63a]'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    Next
                  </button>
                )}
                {step === totalSteps && (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`rounded-xl px-5 py-2.5 text-xs font-semibold md:text-sm transition ${
                      !isSubmitting
                        ? 'bg-[#D99125] text-white hover:bg-[#f0a63a]'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Pricing teaser / info card – also light, teal/orange accents */}
          <motion.aside
            className="relative h-full rounded-3xl border border-[#005B62]/30 bg-white/80 p-6 text-slate-900 shadow-2xl backdrop-blur-md md:p-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold text-[#005B62] md:text-2xl">
              Transparent Pricing, No Surprises
            </h3>
            <p className="mt-3 text-sm text-slate-700 md:text-base">
              Most projects fall between{' '}
              <span className="font-semibold text-[#D99125]">$500 – $2.5k</span>{' '}
              depending on scope and features.
            </p>

            <div className="mt-5 space-y-3 text-sm text-slate-800 md:text-base">
              <p className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-600">
                  ✓
                </span>
                Get a clear, written proposal within 24–48 hours.
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-600">
                  ✓
                </span>
                We recommend the most efficient tech stack for your budget.
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-600">
                  ✓
                </span>
                Payment plans available for larger projects.
              </p>
            </div>

            {form.projectBudget && (
              <div className="mt-6 rounded-2xl border border-[#D99125]/60 bg-[#FFF3DF] px-4 py-4 text-sm text-slate-900 md:text-base">
                <p className="mb-1 text-[11px] uppercase tracking-wide text-slate-600 md:text-xs">
                  Selected budget range
                </p>
                <p className="text-sm font-semibold text-[#D99125] md:text-base">
                  {form.projectBudget}
                </p>
                <p className="mt-1 text-xs text-slate-700 md:text-sm">
                  We tailor the scope, timelines, and tech stack to match this range.
                </p>
              </div>
            )}

            <div className="mt-7 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-800 md:text-base">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 md:text-xs">
                Typical timelines
              </p>
              <ul className="space-y-1.5">
                <li>• Landing page: ~1–2 weeks</li>
                <li>• Full website: ~3–6 weeks</li>
                <li>• Complex web app: 6+ weeks</li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  )
}

function StepLabel({
  index,
  current,
  label,
}: {
  index: number
  current: number
  label: string
}) {
  const isActive = current === index
  const isCompleted = current > index

  return (
    <div className="flex flex-1 items-center gap-2">
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold md:text-sm ${
          isActive
            ? 'bg-[#D99125] text-white'
            : isCompleted
            ? 'bg-[#005B62] text-white'
            : 'bg-slate-200 text-slate-700'
        }`}
      >
        {isCompleted ? '✓' : index}
      </div>
      <span
        className={`hidden text-xs md:inline-block md:text-sm ${
          isActive
            ? 'text-[#005B62]'
            : isCompleted
            ? 'text-slate-700'
            : 'text-slate-500'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
