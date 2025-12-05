'use client'

import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeader from '@/components/ui/SectionHeader'
import QuoteWizard from '@/components/quote/QuoteWizard'

export default function QuotePage() {
  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Request a Quote' }]} />

      <SectionHeader
        eyebrow="Estimate"
        title="Get Your Estimate"
        subtitle="Tell us about your project and we’ll get back shortly"
        align="left"
      />

      {/* Replace old single-step form with the new multi-step wizard */}
      <QuoteWizard />
    </div>
  )
}
