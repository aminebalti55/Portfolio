import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Footer } from "@/components/sections/Footer";
import "../blog-styles.css";

export const metadata: Metadata = {
  title: "From Concept to Production: My Development Workflow",
  description:
    "The tools, processes, and methodologies I use to ship production-ready applications efficiently.",
};

export default function DevelopmentWorkflowBlogPost() {
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
              Full-Stack
            </Badge>
            <h1 className="mt-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text font-display text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-50">
              From Concept to Production: My Development Workflow
            </h1>
            <p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-400">
              The tools, processes, and methodologies I use to consistently ship 
              production-ready applications from initial concept to deployment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime="2025-11-28">November 28, 2025</time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>15 min read</span>
              </div>
            </div>
          </header>
        </Container>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-20">
        <Container>

          <div className="prose prose-zinc mx-auto mt-12 max-w-3xl dark:prose-invert">
            <h2>The Foundation: Project Setup</h2>
            <p>
              Every successful project starts with a solid foundation. Here's my typical setup 
              for a full-stack web application:
            </p>

            <h3>1. Tech Stack Selection</h3>
            <p>
              I evaluate the project requirements and choose technologies that balance:
            </p>
            <ul>
              <li>
                <strong>Developer productivity</strong> - Fast iteration cycles
              </li>
              <li>
                <strong>Performance</strong> - User experience and scalability
              </li>
              <li>
                <strong>Maintainability</strong> - Long-term code quality
              </li>
              <li>
                <strong>Team expertise</strong> - Leveraging existing knowledge
              </li>
            </ul>

            <h4>My Go-To Stack</h4>
            <p>
              For most projects, I default to:
            </p>
            <ul>
              <li>
                <strong>Frontend</strong>: Next.js 14 + TypeScript + Tailwind CSS
              </li>
              <li>
                <strong>Backend</strong>: Next.js API Routes or ASP.NET Core 8 (for enterprise)
              </li>
              <li>
                <strong>Database</strong>: PostgreSQL via Supabase or MongoDB for flexibility
              </li>
              <li>
                <strong>Auth</strong>: Supabase Auth or ASP.NET Identity
              </li>
              <li>
                <strong>Deployment</strong>: Vercel for frontend, Azure/AWS for backend
              </li>
            </ul>

            <h3>2. Repository Structure</h3>
            <p>
              I organize projects for clarity and scalability:
            </p>
            <pre>
              <code>
{`project-name/
├── src/
│   ├── app/                 # Next.js 14 App Router
│   │   ├── (auth)/         # Route groups
│   │   ├── api/            # API routes
│   │   └── [locale]/       # i18n support
│   ├── components/
│   │   ├── ui/             # Reusable primitives
│   │   └── sections/       # Page sections
│   ├── lib/
│   │   ├── api/            # API clients
│   │   ├── hooks/          # Custom React hooks
│   │   └── utils/          # Helper functions
│   ├── types/              # TypeScript definitions
│   └── styles/             # Global CSS
├── public/                  # Static assets
├── prisma/                  # Database schema
└── tests/                   # Test suites`}
              </code>
            </pre>

            <h2>Phase 1: Requirements & Planning</h2>

            <h3>Gathering Requirements</h3>
            <p>
              Before writing any code, I spend time understanding:
            </p>
            <ul>
              <li>
                <strong>User personas</strong> - Who will use this application?
              </li>
              <li>
                <strong>Core features</strong> - What must it do?
              </li>
              <li>
                <strong>Scale requirements</strong> - How many users? Data volume?
              </li>
              <li>
                <strong>Technical constraints</strong> - Budget, timeline, compliance
              </li>
            </ul>

            <h3>Database Design First</h3>
            <p>
              I start with the data model because it drives everything else. For example, 
              when building EasyRHIS:
            </p>
            <ol>
              <li>Identified core entities: Employees, Shifts, Payroll, Locations</li>
              <li>Defined relationships and cardinality</li>
              <li>Added multi-tenancy via tenant_id on every table</li>
              <li>Created indexes for common query patterns</li>
            </ol>

            <h3>API Design</h3>
            <p>
              I design REST APIs using OpenAPI/Swagger specs before implementation:
            </p>
            <pre>
              <code>
{`# Example: Employee API endpoints
GET    /api/employees          # List employees (paginated)
POST   /api/employees          # Create employee
GET    /api/employees/:id      # Get employee details
PATCH  /api/employees/:id      # Update employee
DELETE /api/employees/:id      # Delete employee
GET    /api/employees/:id/shifts  # Get employee shifts`}
              </code>
            </pre>
            <p>
              This helps frontend and backend developers work in parallel.
            </p>

            <h2>Phase 2: Development Workflow</h2>

            <h3>Git Branching Strategy</h3>
            <p>
              I use a simplified Git Flow:
            </p>
            <ul>
              <li>
                <strong>main</strong> - Production-ready code
              </li>
              <li>
                <strong>develop</strong> - Integration branch for features
              </li>
              <li>
                <strong>feature/*</strong> - Individual features
              </li>
              <li>
                <strong>hotfix/*</strong> - Emergency production fixes
              </li>
            </ul>

            <h3>Commit Messages</h3>
            <p>
              I follow Conventional Commits for clear history:
            </p>
            <pre>
              <code>
{`feat: add employee shift scheduling
fix: prevent duplicate payroll entries
refactor: extract authentication middleware
docs: update API documentation for endpoints
test: add integration tests for payroll module`}
              </code>
            </pre>

            <h3>Development Cycle</h3>
            <p>
              My typical feature development cycle:
            </p>
            <ol>
              <li>
                <strong>Create feature branch</strong> from develop
              </li>
              <li>
                <strong>Write tests first</strong> (TDD when complexity warrants)
              </li>
              <li>
                <strong>Implement backend API</strong> endpoint
              </li>
              <li>
                <strong>Build frontend UI</strong> component
              </li>
              <li>
                <strong>Integration test</strong> end-to-end flow
              </li>
              <li>
                <strong>Code review</strong> via pull request
              </li>
              <li>
                <strong>Merge to develop</strong>, deploy to staging
              </li>
            </ol>

            <h2>Phase 3: Code Quality & Testing</h2>

            <h3>TypeScript for Type Safety</h3>
            <p>
              TypeScript catches bugs at compile-time. I define strict types for:
            </p>
            <pre>
              <code>
{`// API response types
export interface Employee {
  id: string;
  tenantId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: EmployeeRole;
  hireDate: Date;
  locations: Location[];
}

export enum EmployeeRole {
  Manager = "manager",
  Staff = "staff",
  Admin = "admin",
}

// API function with typed response
export async function getEmployee(
  id: string
): Promise<Employee> {
  const response = await fetch(\`/api/employees/\${id}\`);
  return response.json();
}`}
              </code>
            </pre>

            <h3>Testing Strategy</h3>
            <p>
              I implement testing at multiple levels:
            </p>

            <h4>1. Unit Tests (Jest + React Testing Library)</h4>
            <pre>
              <code>
{`describe("EmployeeCard", () => {
  it("displays employee information", () => {
    const employee = {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      role: EmployeeRole.Manager,
    };
    
    render(<EmployeeCard employee={employee} />);
    
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Manager")).toBeInTheDocument();
  });
});`}
              </code>
            </pre>

            <h4>2. Integration Tests (API Testing)</h4>
            <pre>
              <code>
{`describe("POST /api/employees", () => {
  it("creates employee with valid data", async () => {
    const newEmployee = {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      role: "staff",
    };
    
    const response = await request(app)
      .post("/api/employees")
      .send(newEmployee)
      .expect(201);
      
    expect(response.body).toHaveProperty("id");
    expect(response.body.firstName).toBe("Jane");
  });
  
  it("rejects employee without required fields", async () => {
    await request(app)
      .post("/api/employees")
      .send({ firstName: "Jane" })
      .expect(400);
  });
});`}
              </code>
            </pre>

            <h4>3. End-to-End Tests (Playwright)</h4>
            <pre>
              <code>
{`test("manager can create new employee", async ({ page }) => {
  await page.goto("/dashboard/employees");
  await page.click("text=Add Employee");
  
  await page.fill('input[name="firstName"]', "John");
  await page.fill('input[name="lastName"]', "Doe");
  await page.fill('input[name="email"]', "john@example.com");
  await page.selectOption('select[name="role"]', "staff");
  
  await page.click('button:text("Save")');
  
  await expect(page.locator("text=Employee created")).toBeVisible();
  await expect(page.locator("text=John Doe")).toBeVisible();
});`}
              </code>
            </pre>

            <h3>Linting & Formatting</h3>
            <p>
              Consistent code style is automated:
            </p>
            <ul>
              <li>
                <strong>ESLint</strong> - Catches code quality issues
              </li>
              <li>
                <strong>Prettier</strong> - Enforces formatting
              </li>
              <li>
                <strong>Husky + lint-staged</strong> - Pre-commit hooks
              </li>
            </ul>

            <h2>Phase 4: Performance Optimization</h2>

            <h3>Frontend Optimization</h3>
            <p>
              I optimize for Web Vitals (LCP, FID, CLS):
            </p>
            <ul>
              <li>
                <strong>Image optimization</strong> - next/image with proper sizing
              </li>
              <li>
                <strong>Code splitting</strong> - Dynamic imports for heavy components
              </li>
              <li>
                <strong>React.memo</strong> - Prevent unnecessary re-renders
              </li>
              <li>
                <strong>Lazy loading</strong> - Below-the-fold content
              </li>
            </ul>

            <h3>Backend Optimization</h3>
            <ul>
              <li>
                <strong>Database indexing</strong> - Query analysis with EXPLAIN
              </li>
              <li>
                <strong>Caching</strong> - Redis for hot data
              </li>
              <li>
                <strong>Connection pooling</strong> - Supabase/Prisma handles this
              </li>
              <li>
                <strong>API response pagination</strong> - Limit result sets
              </li>
            </ul>

            <h2>Phase 5: Deployment</h2>

            <h3>CI/CD Pipeline</h3>
            <p>
              I use GitHub Actions for automated deployment:
            </p>
            <pre>
              <code>
{`name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@v1
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}`}
              </code>
            </pre>

            <h3>Environment Management</h3>
            <p>
              I maintain separate environments:
            </p>
            <ul>
              <li>
                <strong>Development</strong> - Local machine
              </li>
              <li>
                <strong>Staging</strong> - Matches production config
              </li>
              <li>
                <strong>Production</strong> - Live application
              </li>
            </ul>

            <h3>Database Migrations</h3>
            <p>
              Schema changes are versioned and automated:
            </p>
            <pre>
              <code>
{`# Prisma migration workflow
1. Edit schema.prisma
2. npx prisma migrate dev --name add_employee_shifts
3. Review generated SQL migration
4. Commit migration files to Git
5. Production deploy runs: npx prisma migrate deploy`}
              </code>
            </pre>

            <h2>Phase 6: Monitoring & Maintenance</h2>

            <h3>Error Tracking</h3>
            <p>
              I use Sentry for production error monitoring:
            </p>
            <ul>
              <li>Automatic error capture</li>
              <li>Source maps for readable stack traces</li>
              <li>User context for debugging</li>
              <li>Slack alerts for critical errors</li>
            </ul>

            <h3>Performance Monitoring</h3>
            <p>
              Key metrics I track:
            </p>
            <ul>
              <li>
                <strong>Vercel Analytics</strong> - Page load times, Web Vitals
              </li>
              <li>
                <strong>Database slow queries</strong> - Supabase dashboard
              </li>
              <li>
                <strong>API response times</strong> - Custom logging
              </li>
              <li>
                <strong>User engagement</strong> - PostHog or Plausible
              </li>
            </ul>

            <h2>Tools I Rely On</h2>

            <h3>Development</h3>
            <ul>
              <li>
                <strong>Visual Studio Code</strong> - Editor with extensions
              </li>
              <li>
                <strong>Cursor AI</strong> - AI-powered coding assistant
              </li>
              <li>
                <strong>Bruno/Postman</strong> - API testing
              </li>
              <li>
                <strong>MongoDB Compass</strong> - Database GUI
              </li>
            </ul>

            <h3>Design</h3>
            <ul>
              <li>
                <strong>Figma</strong> - UI design and prototyping
              </li>
              <li>
                <strong>Tailwind CSS</strong> - Rapid styling
              </li>
              <li>
                <strong>shadcn/ui</strong> - Component library base
              </li>
            </ul>

            <h3>Project Management</h3>
            <ul>
              <li>
                <strong>Azure DevOps</strong> - For enterprise teams
              </li>
              <li>
                <strong>Linear</strong> - For startups
              </li>
              <li>
                <strong>Notion</strong> - Documentation and planning
              </li>
            </ul>

            <h2>Lessons Learned</h2>

            <h3>1. Start with the Data Model</h3>
            <p>
              A solid database schema saves countless hours later. I spend extra time upfront 
              designing relationships, indexes, and constraints.
            </p>

            <h3>2. Automate Early</h3>
            <p>
              Set up CI/CD, linting, and formatting on day one. These shouldn't be afterthoughts.
            </p>

            <h3>3. Write Tests for Complex Logic</h3>
            <p>
              I don't aim for 100% coverage, but I always test:
            </p>
            <ul>
              <li>Business logic (e.g., payroll calculations)</li>
              <li>Authentication/authorization flows</li>
              <li>Critical user paths (e.g., checkout process)</li>
            </ul>

            <h3>4. Document as You Go</h3>
            <p>
              README files, inline comments, and API docs should be written during development, 
              not after. Future you will thank present you.
            </p>

            <h3>5. Deploy Early and Often</h3>
            <p>
              I deploy to staging frequently (multiple times per day). This catches integration 
              issues early and keeps the feedback loop tight.
            </p>

            <h2>Conclusion</h2>
            <p>
              This workflow has helped me ship production applications consistently — from 
              EasyRHIS (multi-tenant SaaS) to FLEDEM (enterprise fleet management) to 
              AutoAlly (marketplace platform).
            </p>
            <p>
              The key principles:
            </p>
            <ul>
              <li>Plan before coding (data model, API design)</li>
              <li>Automate quality checks (linting, testing, CI/CD)</li>
              <li>Optimize iteratively (don't premature optimize)</li>
              <li>Monitor production (errors, performance, usage)</li>
              <li>Document continuously (README, comments, specs)</li>
            </ul>
            <p>
              Every project is different, but this foundation adapts to virtually any web 
              application—from MVPs to enterprise systems.
            </p>

            <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Need help setting up a scalable development workflow?
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                I'd be happy to share more insights or discuss your project's specific needs.
              </p>
              <Link
                href="/#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </Container>
      </article>

      <Footer />
    </main>
  );
}
