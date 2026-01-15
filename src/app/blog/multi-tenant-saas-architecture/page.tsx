import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Footer } from "@/components/sections/Footer";
import "../blog-styles.css";

export const metadata: Metadata = {
  title: "Building Multi-Tenant SaaS: Lessons from EasyRHIS",
  description:
    "Architectural decisions and lessons learned building a production-scale multi-tenant SaaS platform for restaurant HR management.",
};

export default function MultiTenantSaaSBlogPost() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,77,31,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,77,31,0.1),transparent_50%)]" />

        <div className="relative py-16 sm:py-20">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-900/5 transition-all hover:bg-zinc-50 hover:shadow dark:bg-zinc-900 dark:text-zinc-300 dark:ring-white/10 dark:hover:bg-zinc-800"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>

          <header className="mt-10 max-w-3xl">
            <Badge className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white">
              Architecture
            </Badge>
            <h1 className="mt-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text font-display text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-50">
              Building Multi-Tenant SaaS: Lessons from EasyRHIS
            </h1>
            <p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-400">
              Architectural decisions and lessons learned building a production-scale 
              multi-tenant SaaS platform for restaurant HR management.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime="2026-01-10">January 10, 2026</time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>12 min read</span>
              </div>
            </div>
          </header>
        </Container>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-20">
        <Container>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-zinc max-w-none dark:prose-invert">
            <h2>The Challenge</h2>
            <p>
              When I started working on EasyRHIS, the goal was ambitious: build a comprehensive 
              HR management system that could serve multiple restaurant chains (Five Guys, KFC, etc.) 
              from a single codebase, while keeping each client's data completely isolated and 
              ensuring the system could scale to thousands of locations.
            </p>

            <h2>Multi-Tenancy: Database Design Decisions</h2>
            <p>
              One of the first critical decisions was choosing the multi-tenancy strategy. There 
              are three main approaches:
            </p>
            <ul>
              <li>
                <strong>Database per tenant</strong> - Complete isolation but expensive and hard to maintain
              </li>
              <li>
                <strong>Schema per tenant</strong> - Good balance but still management overhead
              </li>
              <li>
                <strong>Shared database with tenant ID</strong> - Most scalable, requires careful design
              </li>
            </ul>
            <p>
              For EasyRHIS, I chose the <strong>shared database with tenant ID</strong> approach 
              using PostgreSQL. Every table includes a <code>tenant_id</code> column, and I implemented 
              Row-Level Security (RLS) policies to enforce data isolation at the database level.
            </p>

            <h3>Implementation Strategy</h3>
            <p>
              The key was making tenant isolation invisible to application code. I created a 
              custom middleware that:
            </p>
            <ol>
              <li>Extracts tenant information from JWT tokens</li>
              <li>Sets session context variables in PostgreSQL</li>
              <li>Applies RLS policies automatically on every query</li>
            </ol>
            <p>
              This meant developers could write queries without worrying about tenant filtering — 
              the database handles it automatically. A query like <code>SELECT * FROM employees</code> 
              only returns employees for the authenticated tenant.
            </p>

            <h2>Authentication & Authorization Architecture</h2>
            <p>
              Multi-tenant authentication adds complexity. I needed to support:
            </p>
            <ul>
              <li>Restaurant chain administrators (full access to their locations)</li>
              <li>Store managers (access to specific locations)</li>
              <li>Employees (limited self-service access)</li>
            </ul>
            <p>
              I implemented a hierarchical role-based access control (RBAC) system using Supabase Auth 
              with custom claims in JWT tokens:
            </p>
            <pre>
              <code>
{`{
  "tenant_id": "uuid-here",
  "role": "store_manager",
  "locations": ["location-1", "location-2"],
  "permissions": ["read:employees", "write:schedules"]
}`}
              </code>
            </pre>

            <h2>Scaling Considerations</h2>
            <p>
              As the platform grew to serve multiple restaurant chains with hundreds of locations, 
              several challenges emerged:
            </p>

            <h3>1. Query Performance</h3>
            <p>
              Adding <code>tenant_id</code> to every query can hurt performance if not properly indexed. 
              I created composite indexes with <code>tenant_id</code> as the first column:
            </p>
            <pre>
              <code>
{`CREATE INDEX idx_employees_tenant_location 
ON employees(tenant_id, location_id, created_at DESC);`}
              </code>
            </pre>

            <h3>2. Database Connection Pooling</h3>
            <p>
              With multiple tenants hitting the database simultaneously, connection pooling became 
              critical. I used Supabase's built-in connection pooling with PgBouncer in transaction 
              mode to handle thousands of concurrent requests.
            </p>

            <h3>3. Background Jobs</h3>
            <p>
              Scheduled tasks like payroll processing and report generation needed to run per tenant. 
              I implemented a job queue system that:
            </p>
            <ul>
              <li>Processes jobs tenant-by-tenant to maintain isolation</li>
              <li>Implements rate limiting per tenant to prevent resource monopolization</li>
              <li>Uses separate queues for high-priority vs. batch operations</li>
            </ul>

            <h2>Frontend Multi-Tenancy</h2>
            <p>
              The frontend (Next.js 14 + TypeScript) needed to handle tenant switching gracefully. 
              I implemented:
            </p>

            <h3>Tenant Context Provider</h3>
            <pre>
              <code>
{`// src/contexts/TenantContext.tsx
const TenantContext = createContext<TenantContextType>(null!);

export function TenantProvider({ children }: { children: ReactNode }) {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  
  useEffect(() => {
    // Load tenant from JWT on mount
    const loadTenant = async () => {
      const session = await supabase.auth.getSession();
      if (session?.data?.session) {
        setTenant(session.data.session.user.user_metadata.tenant);
      }
    };
    loadTenant();
  }, []);

  return (
    <TenantContext.Provider value={{ tenant }}>
      {children}
    </TenantContext.Provider>
  );
}`}
              </code>
            </pre>

            <h3>Tenant-Specific Branding</h3>
            <p>
              Each restaurant chain wanted their own branding. I implemented a theming system that:
            </p>
            <ul>
              <li>Loads tenant-specific colors, logos, and fonts from the database</li>
              <li>Applies CSS variables dynamically on tenant switch</li>
              <li>Caches tenant configuration in localStorage for performance</li>
            </ul>

            <h2>Security Best Practices</h2>
            <p>
              Multi-tenancy security is paramount. Here's what I learned:
            </p>

            <h3>1. Never Trust Client-Side Tenant IDs</h3>
            <p>
              Always extract tenant information from server-side JWT tokens, never from client requests. 
              Malicious users could forge tenant IDs to access other tenants' data.
            </p>

            <h3>2. Audit Logging</h3>
            <p>
              I implemented comprehensive audit logs that track:
            </p>
            <ul>
              <li>Who accessed what data</li>
              <li>When they accessed it</li>
              <li>What changes were made</li>
              <li>Their tenant context at the time</li>
            </ul>

            <h3>3. Rate Limiting Per Tenant</h3>
            <p>
              To prevent one tenant from affecting others, I implemented tenant-aware rate limiting 
              using Redis:
            </p>
            <pre>
              <code>
{`// Example rate limit: 100 requests per minute per tenant
const key = \`rate_limit:\${tenantId}:\${Math.floor(Date.now() / 60000)}\`;
const count = await redis.incr(key);
if (count === 1) await redis.expire(key, 60);
if (count > 100) throw new Error('Rate limit exceeded');`}
              </code>
            </pre>

            <h2>Deployment & Infrastructure</h2>
            <p>
              EasyRHIS is deployed on Vercel with Supabase as the backend. Key infrastructure decisions:
            </p>
            <ul>
              <li>
                <strong>Edge Functions</strong> for tenant-specific API endpoints that run close to users
              </li>
              <li>
                <strong>Database Replicas</strong> for read-heavy operations like reporting
              </li>
              <li>
                <strong>CDN Caching</strong> with tenant-aware cache keys for static assets
              </li>
            </ul>

            <h2>Lessons Learned</h2>

            <h3>1. Start with Multi-Tenancy from Day One</h3>
            <p>
              Retrofitting multi-tenancy into an existing application is extremely difficult. 
              Build it into the architecture from the beginning, even if you only have one tenant initially.
            </p>

            <h3>2. Test Tenant Isolation Rigorously</h3>
            <p>
              Write integration tests that verify data isolation. I created test suites that:
            </p>
            <ul>
              <li>Authenticate as different tenants</li>
              <li>Attempt to access other tenants' data</li>
              <li>Verify that operations only affect the current tenant</li>
            </ul>

            <h3>3. Monitor Per-Tenant Metrics</h3>
            <p>
              Build observability into your multi-tenant system. Track metrics like:
            </p>
            <ul>
              <li>Request volume per tenant</li>
              <li>Database query performance per tenant</li>
              <li>Error rates per tenant</li>
              <li>Storage usage per tenant</li>
            </ul>
            <p>
              This helps identify problematic tenants and optimize accordingly.
            </p>

            <h3>4. Plan for Tenant Migration</h3>
            <p>
              Sometimes tenants need to be moved (different database, upgraded tier, etc.). 
              I built migration tools early that can:
            </p>
            <ul>
              <li>Export all tenant data with referential integrity</li>
              <li>Import into a new environment</li>
              <li>Validate data consistency post-migration</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Building EasyRHIS taught me that multi-tenant SaaS architecture requires careful 
              planning across every layer — database, backend, frontend, and infrastructure. 
              The key is making tenant isolation automatic and invisible to application code, 
              while maintaining security and performance at scale.
            </p>
            <p>
              If you're building a multi-tenant SaaS platform, start with these principles:
            </p>
            <ul>
              <li>Design for multi-tenancy from day one</li>
              <li>Enforce tenant isolation at the database level</li>
              <li>Never trust client-side tenant context</li>
              <li>Monitor and rate-limit per tenant</li>
              <li>Build tenant migration tools early</li>
            </ul>
            <p>
              The result is a scalable, secure platform that can serve hundreds of restaurant 
              locations while keeping each client's data completely isolated.
            </p>

            <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Want to discuss multi-tenant architecture for your SaaS project?
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                I'd be happy to share more insights from building production-scale multi-tenant systems.
              </p>
              <Link
                href="/#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Get in touch →
              </Link>
            </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    On This Page
                  </h3>
                  <nav className="mt-4 space-y-2 text-sm">
                    <a href="#challenge" className="block text-zinc-700 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent">
                      The Challenge
                    </a>
                    <a href="#database" className="block text-zinc-700 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent">
                      Database Design
                    </a>
                    <a href="#auth" className="block text-zinc-700 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent">
                      Authentication & Authorization
                    </a>
                    <a href="#scaling" className="block text-zinc-700 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent">
                      Scaling Considerations
                    </a>
                    <a href="#frontend" className="block text-zinc-700 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent">
                      Frontend Multi-Tenancy
                    </a>
                    <a href="#security" className="block text-zinc-700 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent">
                      Security Best Practices
                    </a>
                    <a href="#lessons" className="block text-zinc-700 transition-colors hover:text-accent dark:text-zinc-300 dark:hover:text-accent">
                      Lessons Learned
                    </a>
                  </nav>
                </div>

                {/* Tech Stack */}
                <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900/50">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Tech Stack
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Vercel"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Share Article
                  </h3>
                  <div className="mt-4 flex gap-3">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </article>

      <Footer />
    </main>
  );
}
