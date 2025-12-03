'use client';

import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ClientPortalPage() {
  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Client Portal' }]} />

      <SectionHeader
        eyebrow="Portal"
        title="Client Portal"
        subtitle="Track projects, invoices, and support tickets—coming soon"
        align="left"
      />

      <div className="card max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-primary mb-4">Future Upgrade</h3>
        <p className="text-gray-700 mb-4">This portal will be powered by a backend stack (Next.js API Routes, PostgreSQL, Prisma, authentication system).</p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Login page</strong>: Secure authentication</li>
          <li><strong>Dashboard</strong>: Overview of active projects</li>
          <li><strong>Project progress view</strong>: Real-time updates</li>
          <li><strong>Invoice & payment section</strong>: Stripe, MTN MoMo, Orange Money</li>
          <li><strong>File sharing</strong>: Upload/download documents</li>
          <li><strong>Support ticketing</strong>: Submit and track requests</li>
          <li><strong>User API socket placeholder</strong>: Real-time updates</li>
          <li><strong>Backend endpoints placeholder</strong>: REST or GraphQL</li>
        </ul>

        <div className="p-4 bg-secondary rounded-lg">
          <p className="text-sm text-gray-600 font-semibold">[Backend Placeholder – To Be Connected to Custom API / Database]</p>
          <p className="text-sm text-gray-600 mt-2">Features planned:</p>
          <ul className="text-sm text-gray-600 list-inside list-disc space-y-1">
            <li>Authentication (OAuth, JWT)</li>
            <li>Database connection (PostgreSQL, Prisma)</li>
            <li>Project management API</li>
            <li>Email notifications (Resend API)</li>
            <li>Admin control panel</li>
            <li>Booking / scheduling engine</li>
            <li>Payment integrations (Stripe, MTN MoMo, Orange Money)</li>
          </ul>
        </div>

        <div className="mt-6">
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4">
            <input className="px-4 py-3 rounded-lg border" placeholder="Email or Username" />
            <input className="px-4 py-3 rounded-lg border" type="password" placeholder="Password" />
            <button className="btn-primary">Login (Placeholder)</button>
          </form>
        </div>
      </div>
    </div>
  );
}
