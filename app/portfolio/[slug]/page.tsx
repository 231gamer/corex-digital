import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study | CoreX Digital Solutions',
  description: 'Project case study: problem, solution, tools, technologies, and impact.',
};

export default function CaseStudyPage() {
  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Portfolio', href: '/portfolio' }, { label: 'Case Study' }]} />

      <SectionHeader
        eyebrow="Case Study"
        title="Project Title"
        subtitle="Industry: Placeholder"
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80" 
              alt="Project showcase"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Problem</h3>
            <p className="text-gray-700">Describe the challenge the client faced and the constraints involved.</p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Solution</h3>
            <p className="text-gray-700">Outline our solution, the architecture, and how it addressed the problem.</p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Tools & Technologies</h3>
            <p className="text-gray-700">Next.js, React, TypeScript, Tailwind, Node.js, PostgreSQL, AWS, Vercel</p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Result / Impact</h3>
            <p className="text-gray-700">Highlight outcomes: performance, engagement, revenue, or operational efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full aspect-video rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80" 
                alt="Before"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">Before</div>
            </div>
            <div className="w-full aspect-video rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=80" 
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">After</div>
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Client</h3>
            <p className="text-gray-700">Placeholder Client</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-3">Services</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Website Development</li>
              <li>UI/UX Design</li>
              <li>Cloud & Hosting</li>
            </ul>
          </div>
          <a href="/quote" className="btn-primary block text-center">Start Your Project</a>
        </aside>
      </div>
    </div>
  );
}
