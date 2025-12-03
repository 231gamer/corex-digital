import Breadcrumb from '@/components/ui/Breadcrumb';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Post | CoreX Digital Solutions',
  description: 'Blog article with featured image, author, reading time, and related posts.',
};

export default function BlogDetailPage() {
  return (
    <div className="section-padding container-custom">
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Article' }]} />

      <div className="w-full aspect-video rounded-lg overflow-hidden mb-6">
        <img 
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80" 
          alt="Blog article"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2">Article Title</h1>
      <div className="text-gray-600 mb-6">By Author • 6 min read</div>

      <article className="prose max-w-none">
        <p>Body text placeholder. Share insights, guides, and stories relevant to our clients and community.</p>
        <p>Use modern best practices, real examples, and actionable tips.</p>
      </article>

      <div className="mt-12">
        <h3 className="text-xl font-bold text-primary mb-4">Related Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((n) => (
            <Link key={n} href={`/blog/related-${n}`} className="card">
              Related Post {n}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
