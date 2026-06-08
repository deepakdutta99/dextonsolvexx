/* ==========================================================================
   Dexton Solvexx - Services Database & SEO Copy Store
   ========================================================================== */

const servicesDb = {
  // 1. Offshore Recruitment Services
  "offshore-recruitment": {
    id: "offshore-recruitment",
    title: "Offshore Recruitment Services",
    subtitle: "Scale Your Global Operations with Elite Dedicated Professionals",
    category: "staffing",
    metaTitle: "Premium Offshore Recruitment Services & Global Staffing | Dexton Solvexx",
    metaDescription: "Acquire world-class offshore talent and lower overhead by 60%. Dexton Solvexx provides specialized RPO, offshore staffing, and dedicated talent acquisition.",
    intro: "Empower your enterprise with world-class offshore staff selected specifically for your unique operations. Our recruitment methodologies ensure you hire the top 3% of global talent with zero administrative friction.",
    narrative: `
      <p>In today's highly competitive digital landscape, expanding your workforce globally is no longer just an option—it is a critical strategic advantage. Dexton Solvexx's <strong>Offshore Recruitment Services</strong> enable international companies, high-growth startups, and Fortune 500 enterprises to seamlessly integrate dedicated talent from top-tier offshore markets into their day-to-day operations. By bypassing regional skill shortages and leveraging highly educated talent pools, our clients build high-performance teams that drive productivity around the clock.</p>
      
      <p>Our approach goes far beyond traditional offshore outsourcing. We don't just supply random workers; we curate custom-selected specialists who align perfectly with your corporate culture, operational workflows, and technology stacks. Whether you require expert software developers, financial analysts, customer success teams, or digital marketing specialists, our dedicated recruitment partners carry out comprehensive mapping, pre-screening, and cognitive evaluations to present only the absolute best candidates. This meticulous quality control ensures an outstanding 97% first-year retention rate across all offshore placements.</p>

      <p>Furthermore, Dexton Solvexx takes complete control of the complex logistical infrastructure of international hiring. From local legal compliance and HR management to payroll administration, high-speed office facilities, and hardware sourcing, we handle all administrative overhead. This turnkey model allows your in-house executives to focus 100% on core strategic initiatives while your global offshore team operates at peak efficiency. Embrace a smarter way of scaling and realize up to 70% cost savings in operational overhead without compromising on quality or performance.</p>
    `,
    benefits: [
      { title: "Significant Cost Efficiency", desc: "Reduce personnel and overhead expenses by up to 70% while maintaining exceptional quality standards.", stat: "70% Save" },
      { title: "Top-Tier Pre-Screening", desc: "Every offshore candidate undergoes deep cognitive, technical, and linguistic vetting to ensure elite fit.", stat: "Top 3% Vetted" },
      { title: "Complete Compliance Shield", desc: "We manage local employment contracts, labor laws, taxation, and international benefits risk-free.", stat: "100% Compliant" }
    ],
    process: [
      { name: "Consultation & Requirement Mapping", desc: "We analyze your tech stack, job requirements, KPIs, and cultural standards to design a customized global hiring blueprint." },
      { name: "Global Talent Sourcing", desc: "Our recruitment specialists leverage proprietary databases and artificial intelligence tools to map active and passive candidates." },
      { name: "Rigorous Technical & Language Vetting", desc: "Candidates undergo intense vetting, including live coding tests, communication audits, and cultural adaptability interviews." },
      { name: "Smooth Integration & Onboarding", desc: "We equip your new hire with top-tier hardware, set up security protocols, and manage day-one global onboarding." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "Healthcare", "Finance & Banking"],
    faqs: [
      { q: "What makes Dexton Solvexx's offshore staffing model different?", a: "Unlike typical agencies that deliver generic resumes, we act as an enterprise RPO partner. We pre-screen candidates rigorously, manage legal compliance, supply high-performance hardware, and provide ongoing HR support to ensure long-term retention." },
      { q: "How do you protect intellectual property and data security?", a: "We enforce strict NDAs, implement state-of-the-art endpoint security tools (MDM), establish secure VPN infrastructures, and conduct comprehensive regular cybersecurity awareness training with all offshore candidates." },
      { q: "What is the average time-to-fill for an offshore role?", a: "On average, we present top-tier vetted candidates within 7 to 14 business days, and complete onboarding takes less than 3 weeks from the initial briefing." },
      { q: "Do the offshore employees work in our local timezone?", a: "Yes, our global offices operate 24/7, allowing our recruiters to source professionals who work fully aligned with your business hours, ensuring real-time team collaboration." }
    ]
  },

  // 2. Remote Staffing Solutions
  "remote-staffing": {
    id: "remote-staffing",
    title: "Remote Staffing Solutions",
    subtitle: "Establish Agile Remote Teams with Unrestricted Global Reach",
    category: "staffing",
    metaTitle: "Dynamic Remote Staffing Solutions & Global Talent | Dexton Solvexx",
    metaDescription: "Build distributed remote teams with ease. Dexton Solvexx delivers end-to-end remote staffing, global payroll compliance, and device management.",
    intro: "Unchain your company from geographic boundaries. Build resilient, distributed teams comprising exceptionally skilled specialists who collaborate securely from anywhere on the planet.",
    narrative: `
      <p>The global remote work revolution has changed the fundamental structure of enterprise workforce management. Successful corporations no longer limit their talent searches to a 30-mile radius around their headquarters. Dexton Solvexx's <strong>Remote Staffing Solutions</strong> empower your business to source, hire, onboard, and manage premium remote professionals across multiple international timezones. We handle the complex compliance, payroll, and physical device deployment so you can build a seamless distributed workforce.</p>
      
      <p>Managing remote workers across international borders requires a sophisticated balance of legal compliance, secure technology integration, and human resource management. Dexton Solvexx provides a fully managed infrastructure that acts as a digital protective layer around your global recruitment. We handle local payroll taxes, file required international documents, and ensure compliant benefits administration. This shields your enterprise from compliance audits and legal disputes, allowing you to hire with absolute peace of mind.</p>

      <p>Furthermore, remote employee engagement and performance management are core focuses of our staffing solutions. We provide remote teams with dedicated tools, manage secure system setups, and coordinate ongoing support check-ins. This high-touch approach results in highly motivated, productive remote team members who feel deeply integrated into your company. Build an agile, resilient, and highly productive distributed workforce with Dexton Solvexx's proven remote staffing systems.</p>
    `,
    benefits: [
      { title: "Global Talent Pool", desc: "Source specialized skills from top talent regions globally without relocation delays.", stat: "Unlimited Reach" },
      { title: "Turnkey Device Shipping", desc: "We manage purchasing, provisioning, and direct international shipping of secure corporate laptops.", stat: "Device Managed" },
      { title: "Seamless EOR Frameworks", desc: "Legally hire remote workers globally without setting up complex local legal entities.", stat: "Zero Entity Needed" }
    ],
    process: [
      { name: "Distributed Talent Profiling", desc: "We identify specific role parameters, communication schedules, and required cloud tool access." },
      { name: "Global Candidate Sourcing", desc: "Our recruitment network locates remote-proficient experts with a history of high performance." },
      { name: "Remote Infrastructure Verification", desc: "We audit candidates' local internet speeds, power redundancy setups, and workspace privacy." },
      { name: "Device & Systems Provisioning", desc: "We coordinate shipping of corporate devices pre-configured with secure VPNs and productivity apps." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "E-commerce", "Telecommunications"],
    faqs: [
      { q: "How do you handle global remote payroll?", a: "We act as your global Employer of Record (EOR), processing local currency payroll, handling statutory taxes, and delivering localized monthly payslips compliantly." },
      { q: "What security measures do you implement for remote computers?", a: "We install pre-approved Mobile Device Management (MDM) software, enforce multi-factor authentication (MFA), block unauthorized data transfers, and configure encrypted storage." },
      { q: "Can we transition remote contractors to permanent employees?", a: "Yes, we support simple, compliant transitions from contract-to-permanent hire using our global entity network." },
      { q: "How do you handle timezone communication differences?", a: "We recruit candidates with proven async communication habits and schedule overlapping hours to facilitate real-time updates." }
    ]
  },

  // 3. Global Talent Acquisition
  "global-talent": {
    id: "global-talent",
    title: "Global Talent Acquisition",
    subtitle: "Acquire Elite Specialist Talents on a Global Scale",
    category: "staffing",
    metaTitle: "Enterprise Global Talent Acquisition Services | Dexton Solvexx",
    metaDescription: "Accelerate global hiring campaigns. Dexton Solvexx sources rare niche skills and leadership assets across international talent hubs.",
    intro: "Acquire rare technical skills, domain-expert managers, and growth leaders on a global scale. We bridge regional skills shortages and connect you with passive elite talent globally.",
    narrative: `
      <p>The struggle to secure top-tier specialized talent is a defining challenge for modern enterprise growth. Localized candidate pools are frequently exhausted, resulting in inflated salary demands and prolonged recruitment delays. Dexton Solvexx's <strong>Global Talent Acquisition</strong> services remove geographic limitations from your sourcing strategy. We map, identify, and recruit passive talent across Europe, Asia, Latin America, and North America to fill your most critical, high-impact roles.</p>
      
      <p>Our recruitment methodology is highly sophisticated. We don't just rely on standard job boards; our international search specialists use active sourcing, deep industry relationships, and advanced talent mapping techniques. We target elite passive candidates who are not actively seeking new jobs but are highly receptive to high-impact career opportunities. This strategic positioning allows us to present candidates with verified achievements and unmatched domain expertise.</p>

      <p>By partnering with Dexton Solvexx, you gain an extension of your employer brand on a global stage. We manage candidate experience, handle cultural orientation, and coordinate transparent salary negotiations. Our global placement program ensures that your new hire is set up for long-term success. Scale your capabilities and establish unmatched industry authority by building an elite team selected from the best global talent.</p>
    `,
    benefits: [
      { title: "Niche Skills Placement", desc: "Find hard-to-source technical skills, from AI researchers to specialized senior medical experts.", stat: "98% Match Rate" },
      { title: "Comprehensive Talent Mapping", desc: "We track competitor talent structures to identify and attract top active leaders.", stat: "Deep Mapping" },
      { title: "Enhanced Employer Brand", desc: "We represent your company with utmost professionalism, attracting top global industry stars.", stat: "5-Star Candidate UX" }
    ],
    process: [
      { name: "Strategic Profiling Session", desc: "We align on target companies, candidate backgrounds, compensation levels, and ideal profiles." },
      { name: "Comprehensive Market Mapping", desc: "Our research teams build comprehensive candidate rosters from major global tech hubs." },
      { name: "Discrete Approach & Pitch", desc: "We pitch your career opportunity to targeted professionals, ensuring complete privacy." },
      { name: "Advanced Assessment & Match", desc: "Candidates undergo structured interviews to evaluate technical capabilities and strategic fit." }
    ],
    industries: ["Information Technology", "Healthcare", "Finance & Banking", "Engineering"],
    faqs: [
      { q: "What regions does Dexton Solvexx source global talent from?", a: "We operate deep talent pipelines across Latin America, Eastern Europe, South Asia, Southeast Asia, and South Africa, giving you access to diverse talent hubs." },
      { q: "How do you benchmark international salary rates?", a: "We analyze local cost-of-living indices, regional tech salaries, and remote premiums to structure highly competitive, optimized packages." },
      { q: "What is your candidate screening process for senior roles?", a: "We run structured behavioral interviews, verify executive track records, perform detailed background checks, and conduct rigorous reference audits." },
      { q: "Can you help sponsor visas if we want to relocate talent?", a: "While we specialize in remote and offshore placement, we work with immigration experts to advise on international relocation pathways." }
    ]
  },

  // 4. IT Recruitment Services
  "it-recruitment": {
    id: "it-recruitment",
    title: "IT Recruitment Services",
    subtitle: "Accelerate Development Cycles with Elite Tech Professionals",
    category: "tech",
    metaTitle: "Elite IT Recruitment Services & Technical Staffing | Dexton Solvexx",
    metaDescription: "Accelerate software delivery. Dexton Solvexx sources top software engineers, DevOps experts, cloud architects, and cyber security assets.",
    intro: "Inject world-class technical capabilities into your engineering teams. We source, screen, and onboard elite software developers, DevOps engineers, and cloud specialists.",
    narrative: `
      <p>Building high-performing engineering teams requires deep technical knowledge and a strategic recruitment approach. Standard staffing firms frequently struggle to differentiate between programming languages, frameworks, and system architectures, resulting in irrelevant resumes and wasted time. Dexton Solvexx's <strong>IT Recruitment Services</strong> are run by technical experts who understand software engineering, cloud infrastructure, cybersecurity, and data systems. We deliver highly qualified technical candidates who write clean, scalable code from day one.</p>
      
      <p>Our technical screening process is incredibly rigorous. Every developer we recommend has passed comprehensive technical testing, including live programming assessments, system design interviews, and code quality audits. We evaluate their understanding of algorithmic complexity, software design patterns, CI/CD pipelines, and cloud security frameworks. This high-touch technical screening ensures your engineering managers receive only exceptional candidates who meet your strict technical benchmarks.</p>

      <p>Whether you need to hire individual senior developers, scale an agile Scrum team, or hire specialized cybersecurity experts, Dexton Solvexx has the global reach to deliver. We maintain active talent pipelines of pre-vetted engineers across major global tech hubs, allowing us to fill open technical roles in half the time of traditional recruitment agencies. Accelerate your roadmap and launch digital products with elite global tech talent.</p>
    `,
    benefits: [
      { title: "Technical Vetting", desc: "Every engineer is vetted by senior developers to guarantee elite coding capabilities.", stat: "Expert Audited" },
      { title: "Fast-Track Sourcing", desc: "Access a pre-vetted network of global tech talent, cutting time-to-hire by 50%.", stat: "12 Days to Fill" },
      { title: "Wide Technology Coverage", desc: "From React and Node.js to AWS, Python, Kubernetes, and specialized AI models.", stat: "All Stacks Covered" }
    ],
    process: [
      { name: "Technical Requirement Alignment", desc: "We align on framework specifications, system architecture, database paradigms, and testing protocols." },
      { name: "Proprietary Database Search", desc: "We query our specialized network of active, vetted global software engineering professionals." },
      { name: "Live Coding & System Vetting", desc: "We test candidates on system design, algorithmic efficiency, and collaborative code styling." },
      { name: "Code Review & Presentation", desc: "We deliver comprehensive candidate profiles, complete with verified code samples and assessment reports." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "E-commerce", "Telecommunications"],
    faqs: [
      { q: "Do you assess developers' soft skills and communication?", a: "Yes, we evaluate English proficiency, async collaboration habits, willingness to accept feedback, and overall team compatibility." },
      { q: "What is your success rate for technical placements?", a: "We maintain an exceptional 96% placement retention rate over the first 12 months, reflecting our strict screening standards." },
      { q: "Can you supply entire offshore software development teams?", a: "Yes, we build, provision, and onboard cross-functional engineering teams, including scrum masters, QA testers, and developers." },
      { q: "How do you keep up with evolving technology stacks?", a: "Our technical recruitment leads are active participants in software communities, ensuring our screening systems are aligned with modern engineering standards." }
    ]
  },

  // 5. Healthcare Staffing Services
  "healthcare-staffing": {
    id: "healthcare-staffing",
    title: "Healthcare Staffing Services",
    subtitle: "Deliver Premium Care with Elite Medical Professionals",
    category: "specialized",
    metaTitle: "Premium Healthcare Staffing Services | Dexton Solvexx",
    metaDescription: "Ensure seamless clinical operations. Dexton Solvexx sources licensed nurses, telehealth practitioners, medical coders, and administrators.",
    intro: "Bridge clinical resource gaps with premium medical talent. We source, screen, and place fully compliant healthcare professionals, medical billing experts, and remote patient support teams.",
    narrative: `
      <p>The global healthcare industry faces unprecedented staffing shortages, complex compliance mandates, and high administrative burnout rates. Maintaining high patient care standards requires clinical organizations to have a reliable, highly qualified staffing partner. Dexton Solvexx's <strong>Healthcare Staffing Solutions</strong> deliver fully vetted nursing staff, telehealth practitioners, medical billing experts, and administrative professionals who keep clinical operations running smoothly.</p>
      
      <p>Compliance and credentials are vital in healthcare staffing. We implement a strict verification process for every healthcare professional we recruit. We perform comprehensive credential audits, verify state licenses, run background checks, and audit clinical references. Our regulatory team ensures that every placed professional is fully compliant with local, state, and national healthcare guidelines, protecting your organization from regulatory risks.</p>

      <p>In addition, we specialize in high-efficiency remote healthcare support teams. We provide fully HIPAA-compliant medical coders, billing specialists, medical transcriptionists, and telehealth administrative assistants. By combining clinical staffing solutions with secure remote administrative support, we help healthcare organizations lower administrative burdens, reduce operational overhead, and focus resources on patient care.</p>
    `,
    benefits: [
      { title: "Strict Credential Vetting", desc: "We run deep primary source verifications for all licenses, certifications, and clinical qualifications.", stat: "100% Verified" },
      { title: "HIPAA-Compliant Staffing", desc: "Remote administrative professionals are trained in strict data privacy and security practices.", stat: "HIPAA Compliant" },
      { title: "24/7 Operations Coverage", desc: "We scale staff to cover all clinical shifts, weekend schedules, and call rotations.", stat: "Continuous Care" }
    ],
    process: [
      { name: "Clinical Operations Alignment", desc: "We evaluate your patient care goals, shift gaps, software systems, and compliance requirements." },
      { name: "Active Pipeline Sourcing", desc: "We access our database of registered healthcare professionals, clinical support staff, and remote specialists." },
      { name: "Verify Credentials & Backgrounds", desc: "Our compliance specialists verify clinical credentials, perform background checks, and call clinical references." },
      { name: "Smooth Shift Onboarding", desc: "We coordinate onboarding, verify system access, and ensure complete compliance training before day one." }
    ],
    industries: ["Healthcare", "Pharmaceutical", "SaaS & Startups", "Education"],
    faqs: [
      { q: "How do you verify medical licenses?", a: "We run direct primary source verifications with state and national licensing boards to confirm credentials, check for past disciplinary actions, and verify active status." },
      { q: "Do you supply staff for telemedicine platforms?", a: "Yes, we recruit telehealth-proficient nurse practitioners, patient intake teams, and virtual care coordinators." },
      { q: "How do you handle data privacy for remote medical billing staff?", a: "We deploy secure, locked-down virtual environments, block external printing, enforce dual-factor authentication, and monitor systems for security compliance." },
      { q: "Can you scale medical administrative staff for peak seasons?", a: "Yes, we manage seasonal staffing models to help clinics scale up for flu seasons or special community health campaigns." }
    ]
  },

  // 6. Engineering Recruitment
  "engineering-recruitment": {
    id: "engineering-recruitment",
    title: "Engineering Recruitment",
    subtitle: "Accelerate Infrastructure Projects with Elite Engineering Talents",
    category: "specialized",
    metaTitle: "Premium Engineering Staffing & Recruitment | Dexton Solvexx",
    metaDescription: "Source elite civil, mechanical, electrical, and systems engineers. Dexton Solvexx delivers certified technical engineering assets globally.",
    intro: "Secure top-tier certified engineers, CAD designers, and industrial project managers. We recruit technical talent for infrastructure, construction, manufacturing, and R&D operations.",
    narrative: `
      <p>Executing complex engineering and infrastructure projects requires highly specialized, certified technical talent. Missing key talent can lead to project delays, safety issues, and expensive design revisions. Dexton Solvexx's <strong>Engineering Recruitment</strong> services connect your organization with fully qualified civil, mechanical, electrical, structural, and systems engineers who are ready to drive project success.</p>
      
      <p>We understand that engineering requires precision, deep domain knowledge, and strict adherence to safety standards. Our engineering recruiters possess deep industry knowledge and evaluate candidates' experience with industry design software (CAD, BIM, SolidWorks), structural analysis systems, and regional building codes. We verify professional certifications (PE, FE, Chartered status) and check past project histories to ensure candidates have the expertise to execute complex project specifications.</p>

      <p>From technical CAD draftsmen working remotely to senior project managers overseeing large construction sites, we deliver customized staffing solutions. Our global reach allows you to scale engineering teams quickly, optimize project timelines, and secure rare technical expertise. Partner with Dexton Solvexx to build a highly skilled engineering team that delivers projects on time and on budget.</p>
    `,
    benefits: [
      { title: "PE / FE Certified Talent", desc: "We recruit and verify fully certified, registered, and licensed professional engineers.", stat: "Fully Certified" },
      { title: "CAD / BIM Specialists", desc: "Access remote CAD draftspeople, 3D modelers, and BIM experts who deliver precise designs.", stat: "Design Tech Ready" },
      { title: "Proven Project Leaders", desc: "We place experienced managers with a track record of delivering multi-million dollar projects.", stat: "Elite Track Record" }
    ],
    process: [
      { name: "Technical Specifications Alignment", desc: "We review engineering disciplines, software requirements, regional codes, and safety standards." },
      { name: "Specialized Network Search", desc: "We source certified engineers, technical designers, and experienced managers from our global pipeline." },
      { name: "Project Portfolio Review", desc: "We audit candidates' past engineering portfolios, drawings, calculations, and project metrics." },
      { name: "Onboarding & Project Integration", desc: "We coordinate project briefings, set up workspace technologies, and complete safety compliance checks." }
    ],
    industries: ["Engineering", "Manufacturing", "Construction", "Logistics"],
    faqs: [
      { q: "How do you verify engineering certifications?", a: "We run direct validations with state licensing boards and verify credentials with primary engineering institutes." },
      { q: "Can we hire remote CAD designers?", a: "Yes, we place remote CAD, Revit, and SolidWorks professionals who coordinate with your on-site engineering teams." },
      { q: "What is your screening process for senior project managers?", a: "We run behavioral interviews focused on project management methodologies, cost control, risk mitigation, and team leadership." },
      { q: "Do you support contract-to-hire options for project phases?", a: "Yes, we offer flexible contract models to match your staffing levels with project phases." }
    ]
  },

  // 7. Finance & Accounting Recruitment
  "finance-recruitment": {
    id: "finance-recruitment",
    title: "Finance & Accounting Recruitment",
    subtitle: "Protect Your Fiscal Health with Elite Financial Professionals",
    category: "specialized",
    metaTitle: "Finance & Accounting Recruitment Services | Dexton Solvexx",
    metaDescription: "Protect fiscal health. Dexton Solvexx sources CPAs, senior tax analysts, corporate accountants, and remote financial support teams.",
    intro: "Access exceptionally accurate CPAs, corporate auditors, financial analysts, and remote accounts processing teams. We secure your corporate fiscal health.",
    narrative: `
      <p>Maintaining financial health, managing regulatory changes, and ensuring audit readiness are critical priorities for corporate leadership. Managing financial operations requires team members with high precision, deep knowledge of accounting principles, and absolute integrity. Dexton Solvexx's <strong>Finance & Accounting Recruitment</strong> services connect your company with top-tier financial professionals who ensure financial accuracy and compliance.</p>
      
      <p>We source certified public accountants (CPAs), chartered accountants, tax advisors, forensic auditors, and corporate financial analysts. Our selection process includes comprehensive testing of candidates' accounting skills, knowledge of tax codes (GAAP, IFRS), and experience with enterprise financial software (SAP, Oracle, NetSuite, QuickBooks). This thorough vetting ensures that your finance team works with absolute accuracy, reducing operational risk.</p>

      <p>Additionally, we help organizations build highly efficient, secure offshore back-office accounting teams. By placing remote accounts payable, accounts receivable, payroll processing, and bookkeeping specialists in cost-optimized markets, we help enterprises save up to 65% in back-office costs. Secure your financial operations and drive corporate growth with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "CPA & GAAP Qualified", desc: "We recruit finance professionals who hold verified professional accounting credentials.", stat: "Credential Vetted" },
      { title: "Precision Ledger Auditing", desc: "Candidates are evaluated on ledger management, audit preparation, and corporate reporting.", stat: "100% Accuracy" },
      { title: "Cost-Optimized Back-Offices", desc: "Build secure, offshore accounting support teams to manage high-volume transactional processing.", stat: "Save 65% Overhead" }
    ],
    process: [
      { name: "Financial Role Profiling", desc: "We review required certifications, software platforms, auditing standards, and reporting schedules." },
      { name: "Active Talent Sourcing", desc: "We search our network of finance professionals and transactional accounting experts." },
      { name: "Comprehensive Skills Testing", desc: "Candidates undergo testing on ledger bookkeeping, financial modeling, and system compliance." },
      { name: "Secure Workspace Onboarding", desc: "We set up secure financial data portals, configure dual-factor authentication, and onboard staff." }
    ],
    industries: ["Finance & Banking", "SaaS & Startups", "E-commerce", "Legal"],
    faqs: [
      { q: "How do you screen accounts payable/receivable professionals?", a: "We run practical bookkeeping tests, evaluate system data entry speeds, and check past corporate references." },
      { q: "What security measures protect our financial databases?", a: "We deploy secure digital workspaces, block local copying, set up secure network accesses, and monitor data connections." },
      { q: "Can we recruit fractional CFOs or financial controllers?", a: "Yes, we place experienced senior financial directors and corporate controllers for strategic growth phases." },
      { q: "Are your accountants trained in US GAAP and IFRS standards?", a: "Yes, we recruit finance professionals who are certified in international reporting standards." }
    ]
  },

  // 8. Executive Search Services
  "executive-search": {
    id: "executive-search",
    title: "Executive Search Services",
    subtitle: "Secure Visionary Leaders to Drive Global Enterprise Success",
    category: "tech",
    metaTitle: "Executive Search & Corporate Leadership Hiring | Dexton Solvexx",
    metaDescription: "Secure visionary leaders. Dexton Solvexx conducts discrete global searches for C-Suite, VP, and Director-level assets.",
    intro: "Identify, attract, and place outstanding corporate leaders. We conduct discrete global executive searches for C-Suite, VP, and Director-level positions.",
    narrative: `
      <p>Visionary leadership is the single most critical factor in driving long-term enterprise growth and market dominance. Attracting top-tier executive talent requires a high level of discretion, deep industry networks, and a sophisticated approach. Dexton Solvexx's <strong>Executive Search Services</strong> deliver custom recruitment strategies designed to place C-Suite, VP, and Director-level leaders who can transform your business.</p>
      
      <p>We work closely with your Board, CEO, and HR leaders to understand your strategic goals, organizational culture, and future objectives. Our global search specialists conduct detailed market mapping, targeting proven executives who possess the strategic vision to lead complex organizations. We make discrete, professional approaches, positioning your company's vision to attract elite, passive leaders.</p>

      <p>Our assessment process is exceptionally comprehensive. We evaluate candidates' leadership styles, past strategic achievements, change management capabilities, and cultural alignment. By partnering with Dexton Solvexx, you secure leaders who inspire teams, drive operational excellence, and deliver sustainable value for shareholders. Elevate your corporate strategy with outstanding leadership talent.</p>
    `,
    benefits: [
      { title: "Discretion & Confidentiality", desc: "We run discrete, confidential executive searches to protect your corporate reputation.", stat: "100% Discrete" },
      { title: "C-Suite Expert Sourcing", desc: "Access a global network of proven C-Suite executives and VP-level industry leaders.", stat: "Global Exec Network" },
      { title: "Deep Leadership Assessment", desc: "We run structured assessments to evaluate strategic vision, cultural fit, and leadership style.", stat: "Proven Leaders Only" }
    ],
    process: [
      { name: "Strategic Goal Alignment", desc: "We collaborate with board leaders to define the executive profile, strategic goals, and compensation structure." },
      { name: "Discrete Competitor Mapping", desc: "Our research teams map and identify high-performing executives in target industries." },
      { name: "Discrete Initial Outreach", desc: "We make discrete approaches to targeted leaders to pitch your strategic opportunity." },
      { name: "Structured Executive Interview", desc: "We run in-depth interviews and reference checks, presenting a highly qualified shortlist." }
    ],
    industries: ["SaaS & Startups", "Finance & Banking", "Healthcare", "Information Technology"],
    faqs: [
      { q: "How do you protect confidentiality during an executive search?", a: "We use non-disclosure agreements, mask company details during initial talks, and run interviews off-site or in secure settings." },
      { q: "What is your average timeline for placing a C-Suite executive?", a: "Executive searches typically take between 45 to 75 days, reflecting the discrete outreach and deep screening required." },
      { q: "Do you offer post-placement support for new executives?", a: "Yes, we facilitate onboarding and check in regularly over the first 6 months to ensure a smooth transition." },
      { q: "How do you structure executive compensation benchmarking?", a: "We analyze global compensation trends, including equity models, bonuses, and performance incentives, to build highly competitive packages." }
    ]
  },

  // 9. Recruitment Process Outsourcing (RPO)
  "rpo-services": {
    id: "rpo-services",
    title: "Recruitment Process Outsourcing (RPO)",
    subtitle: "Optimize Your Enterprise Sourcing Infrastructure",
    category: "enterprise",
    metaTitle: "Enterprise Recruitment Process Outsourcing (RPO) | Dexton Solvexx",
    metaDescription: "Streamline enterprise hiring. Dexton Solvexx provides end-to-end RPO solutions, talent acquisition scaling, and ATS optimization.",
    intro: "Outsource your talent acquisition process for maximum efficiency. We provide end-to-end RPO, managing sourcing, screening, scheduling, and onboarding.",
    narrative: `
      <p>Scaling recruitment processes to match corporate growth can place a heavy burden on internal HR teams, leading to higher costs and longer hiring times. Dexton Solvexx's <strong>Recruitment Process Outsourcing (RPO)</strong> solutions act as an extension of your talent acquisition department. We optimize every step of your hiring lifecycle, from initial sourcing to final onboarding, delivering high-performance recruitment infrastructure.</p>
      
      <p>We deploy dedicated recruitment teams, integrate advanced Applicant Tracking Systems (ATS), and implement high-efficiency sourcing strategies. Our data-driven approach focuses on improving key recruitment metrics, including time-to-hire, quality-of-hire, and cost-per-hire. We handle candidate sourcing, manage interview scheduling, conduct pre-screening assessments, and coordinate background checks, allowing your internal HR team to focus on employee engagement and retention.</p>

      <p>Whether you need to scale hiring for a new product launch, manage seasonal demand, or restructure your global recruitment processes, Dexton Solvexx provides a highly scalable RPO model. We customize our services to match your goals, helping you lower recruitment costs by up to 50% and build a strong, reliable talent acquisition engine. Transform your hiring capabilities with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Unified RPO Delivery", desc: "We manage all recruitment steps, from sourcing and screening to final offer management.", stat: "Managed End-to-End" },
      { title: "Significant Cost Reductions", desc: "Optimize sourcing channels and streamline processes to lower recruitment costs by 50%.", stat: "50% Cost Saved" },
      { title: "Scalable Recruitment Teams", desc: "Scale recruitment resources up or down to align with changing company hiring needs.", stat: "On-Demand Scaling" }
    ],
    process: [
      { name: "Recruitment Process Audit", desc: "We review your current sourcing channels, recruitment workflows, technology platforms, and metrics." },
      { name: "RPO Infrastructure Integration", desc: "We deploy dedicated recruitment specialists, integrate advanced ATS platforms, and set up tracking metrics." },
      { name: "Proactive Candidate Sourcing", desc: "Our teams manage active and passive sourcing campaigns, building a qualified pipeline." },
      { name: "Seamless Onboarding Management", desc: "We manage pre-screening, coordinate interviews, run background checks, and coordinate onboarding." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "Healthcare", "Manufacturing"],
    faqs: [
      { q: "What is the difference between RPO and staffing agencies?", a: "Staffing agencies focus on filling individual roles on a transactional basis. RPO is a strategic partnership where we manage and optimize your entire recruitment process, technology, and outcomes." },
      { q: "Can you work with our existing HR and ATS platforms?", a: "Yes, we integrate with all major ATS and HR platforms, ensuring a seamless data flow and zero workflow disruption." },
      { q: "How do you track candidate quality and satisfaction?", a: "We monitor hiring manager satisfaction, candidate experience metrics, and first-year retention rates to maintain high quality standards." },
      { q: "Do you support diversity hiring initiatives within RPO?", a: "Yes, we implement inclusive job descriptions, anonymized candidate screening, and diverse sourcing channels to meet your diversity goals." }
    ]
  },

  // 10. Dedicated Recruiter Services
  "dedicated-recruiter": {
    id: "dedicated-recruiter",
    title: "Dedicated Recruiter Services",
    subtitle: "Acquire an Extension of Your In-House Staffing Team",
    category: "enterprise",
    metaTitle: "Hire Dedicated Recruiters & Talent Sources | Dexton Solvexx",
    metaDescription: "Accelerate internal hiring. Dexton Solvexx provides dedicated offshore recruiters who work exclusively inside your corporate HR infrastructure.",
    intro: "Add experienced talent acquisition professionals to your team. Hire dedicated offshore recruiters who work exclusively within your hiring structure.",
    narrative: `
      <p>Internal talent acquisition teams often face high workloads, especially during rapid expansion phases. Adding full-time in-house recruiters can be expensive and slow. Dexton Solvexx's <strong>Dedicated Recruiter Services</strong> provide a highly flexible solution. We embed experienced, offshore recruitment professionals who operate exclusively within your HR team, giving you instant access to advanced talent acquisition capabilities.</p>
      
      <p>Our dedicated recruiters work directly inside your communication channels, use your Applicant Tracking Systems (ATS), and represent your corporate brand to candidates. They manage high-volume candidate sourcing, run phone screenings, schedule interviews, and coordinate candidate communication. This allows your senior HR managers to focus on strategic decisions and employee retention.</p>

      <p>We source recruiters who possess specialized expertise, from tech and engineering staffing to high-volume call center recruitment. This ensures your dedicated offshore recruiter possesses the industry knowledge to engage top candidates. Scale your talent acquisition capabilities quickly, reduce agency fees, and accelerate your recruitment pipelines with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Exclusive Recruiting Asset", desc: "Your dedicated recruiter works 100% on your open roles, representing your brand.", stat: "100% Focused" },
      { title: "No Agency Placement Fees", desc: "Pay a flat monthly rate regardless of how many successful candidates are placed.", stat: "Flat Monthly Fee" },
      { title: "Seamless Team Integration", desc: "Recruiters use your Slack, email domain, and ATS, operating as direct team members.", stat: "Directly Integrated" }
    ],
    process: [
      { name: "Hiring Needs Assessment", desc: "We review your active roles, target markets, ATS technology, and team communication workflows." },
      { name: "Recruiter Match Selection", desc: "We match your team with a recruiter who possesses relevant industry experience." },
      { name: "System Setup & Integration", desc: "We set up email domains, configure ATS access, and establish communication channels." },
      { name: "Active Sourcing Execution", desc: "Your dedicated recruiter starts active sourcing, screening, and scheduling candidates daily." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "Healthcare", "Finance & Banking"],
    faqs: [
      { q: "How do we communicate with our dedicated recruiter?", a: "They integrate into your daily communication tools, such as Slack, Microsoft Teams, Zoom, and your company email domain." },
      { q: "What metrics do dedicated recruiters report on?", a: "They provide regular reports on key metrics, including candidates contacted, screen-to-interview conversion rates, and pipeline status." },
      { q: "Can we hire a team of dedicated recruiters?", a: "Yes, we can build custom recruitment squads, including sourcers, screening specialists, and recruiting coordinators." },
      { q: "What training do your recruiters receive?", a: "Our recruiters undergo regular training in modern sourcing techniques, boolean search strategies, ATS optimization, and candidate communication." }
    ]
  },

  // 11. Contract Staffing Solutions
  "contract-staffing": {
    id: "contract-staffing",
    title: "Contract Staffing Solutions",
    subtitle: "Acquire Agile Contractor Talent for Specific Project Phases",
    category: "staffing",
    metaTitle: "Contract Staffing Solutions & Global Contractors | Dexton Solvexx",
    metaDescription: "Access agile contractor talent. Dexton Solvexx manages international contractor placement, compliance, and monthly billing.",
    intro: "Scale your workforce quickly for key projects. We recruit, place, and manage fully compliant global contractors, handling all billing logistics.",
    narrative: `
      <p>Enterprise project demands, system upgrades, and seasonal initiatives require companies to scale their workforce quickly. Hiring permanent employees for short-term projects can lead to high onboarding costs, redundancy challenges, and long-term overhead. Dexton Solvexx's <strong>Contract Staffing Solutions</strong> deliver highly qualified, flexible contractor talent, allowing you to scale your team for specific project needs.</p>
      
      <p>We maintain deep talent pipelines of experienced professionals across key sectors, including IT, engineering, finance, and marketing. Whether you require specialized software consultants to manage an upgrade, project managers to lead a development phase, or specialized accounting analysts for tax season, we present top-tier candidates who can deliver value from day one.</p>

      <p>Managing international contractors requires strict adherence to local labor codes to avoid classification risks. Dexton Solvexx manages all contractor compliance, handles contract generation, coordinates monthly invoicing, and manages global payouts. By shielding your company from operational and legal risks, we enable you to scale workforce capacity with ease.</p>
    `,
    benefits: [
      { title: "On-Demand Resource Scaling", desc: "Acquire highly skilled specialists for specific project durations, keeping overhead low.", stat: "On-Demand Staff" },
      { title: "Zero Permanent Liabilities", desc: "Lower long-term payroll costs by scaling staffing levels down as project phases finish.", stat: "Flex Personnel" },
      { title: "Compliance Shielding", desc: "Our legal frameworks manage contractor classifications, preventing compliance risks.", stat: "100% Audited Fit" }
    ],
    process: [
      { name: "Project Duration Alignment", desc: "We review project scope, required technical skills, timeline, and budget parameters." },
      { name: "Rapid Database Matching", desc: "We search our active global contractor network to identify immediately available experts." },
      { name: "Technical Competence Vetting", desc: "Candidates undergo structured evaluations to verify their ability to deliver on project goals." },
      { name: "Contract Execution & Day 1 Support", desc: "We handle onboarding, verify tool access, and manage contract compliance from day one." }
    ],
    industries: ["Information Technology", "Engineering", "Construction", "Finance & Banking"],
    faqs: [
      { q: "How do you handle contractor classification compliance?", a: "We run strict compliance audits, using local Employer of Record structures or verified contractor frameworks to ensure compliance." },
      { q: "Can we transition a contract specialist to a permanent role?", a: "Yes, we support contract-to-hire options, allowing you to evaluate a candidate's long-term fit before offering a permanent position." },
      { q: "What is the typical notice period for contract staff?", a: "Notice periods are defined in the initial agreements and typically range from 2 to 4 weeks to ensure project continuity." },
      { q: "How are contractor hours tracked and billed?", a: "Contractors submit weekly or monthly timesheets through our tracking system, which are reviewed and approved by your managers before billing." }
    ]
  },

  // 12. Permanent Staffing Services
  "permanent-staffing": {
    id: "permanent-staffing",
    title: "Permanent Staffing Services",
    subtitle: "Acquire Outstanding Talent for Long-Term Corporate Growth",
    category: "staffing",
    metaTitle: "Permanent Staffing Services & Direct Hire | Dexton Solvexx",
    metaDescription: "Secure key talents for long-term growth. Dexton Solvexx conducts deep sourcing and screening for direct-hire placements globally.",
    intro: "Build your core workforce with highly skilled, long-term professionals. We manage direct-hire recruitment, presenting pre-vetted candidates who fit your culture.",
    narrative: `
      <p>Building a strong, loyal, and highly productive core workforce is key to sustainable corporate growth and market success. However, finding the right permanent team members requires a high investment of time, resource, and expertise. Dexton Solvexx's <strong>Permanent Staffing Services</strong> simplify your direct-hire recruitment, delivering top-tier candidates who match your technical needs and corporate culture.</p>
      
      <p>We take a consultative approach to understanding your long-term business goals, team dynamics, and leadership styles. Our recruitment teams conduct deep sourcing campaigns, reaching active and passive candidates who possess strong track records of success. We run structured interviews, verify past employment histories, check professional references, and evaluate long-term cultural alignment.</p>

      <p>By partnering with Dexton Solvexx, you reduce the risks associated with bad hires, lower your internal recruitment workload, and secure talented professionals who drive long-term business success. We provide direct-hire guarantees on all permanent placements, showing our commitment to delivering lasting recruitment value.</p>
    `,
    benefits: [
      { title: "Deep Cultural Assessment", desc: "We evaluate candidates to ensure they align with your corporate values and long-term vision.", stat: "Culture Matched" },
      { title: "Direct-Hire Protection", desc: "We provide comprehensive replacement guarantees if a placed candidate leaves within the first 90 days.", stat: "90-Day Guarantee" },
      { title: "Reduced Workloads", desc: "We manage initial sourcing, screening, and vetting, presenting only 3 exceptional finalists.", stat: "3 Finalists Only" }
    ],
    process: [
      { name: "Organizational Value Mapping", desc: "We align on job definitions, technical qualifications, team dynamics, and career growth pathways." },
      { name: "Deep Sourcing Campaigns", desc: "Our teams manage active and passive sourcing, targeting candidates with high-quality track records." },
      { name: "Comprehensive Vetting", desc: "Candidates undergo structured technical, behavioral, and cultural evaluations." },
      { name: "Offer Negotiation Support", desc: "We manage compensation alignment, present offers, handle candidate questions, and confirm start dates." }
    ],
    industries: ["Information Technology", "Healthcare", "Finance & Banking", "Manufacturing"],
    faqs: [
      { q: "What happens if a permanent hire leaves early?", a: "We provide direct-hire replacement guarantees in our service agreements, sourcing a new candidate at no additional cost." },
      { q: "How do you evaluate cultural alignment?", a: "We use structured behavioral interviews to assess communication styles, collaborative preferences, and career motivators." },
      { q: "Can you help negotiate compensation packages?", a: "Yes, we act as a strategic advisor during offer discussions, ensuring compensation aligns with market trends and candidate expectations." },
      { q: "Do you perform background checks on permanent hires?", a: "Yes, we offer comprehensive background verification services, including criminal history, education, and reference checks." }
    ]
  },

  // 13. Temporary Staffing Solutions
  "temporary-staffing": {
    id: "temporary-staffing",
    title: "Temporary Staffing Solutions",
    subtitle: "Secure Immediate Staffing Coverage for Peak Demands",
    category: "staffing",
    metaTitle: "Temporary Staffing Solutions & Seasonal Hiring | Dexton Solvexx",
    metaDescription: "Cover sudden talent gaps. Dexton Solvexx provides flexible temporary staffing to handle peak demands, seasonal workloads, and leaves.",
    intro: "Manage sudden operational demands and cover leaves with immediate access to qualified, pre-screened temporary professionals.",
    narrative: `
      <p>Sudden staff shortages, unexpected family leaves, and peak seasonal demands can place heavy burdens on your active teams, impacting productivity and customer satisfaction. Dexton Solvexx's <strong>Temporary Staffing Solutions</strong> deliver immediate staffing coverage, providing qualified, pre-screened professionals who keep your operations running smoothly.</p>
      
      <p>We maintain an active network of flexible professionals who are ready to step into temporary roles at short notice. Whether you require administrative assistants, customer support specialists, logistics staff, or specialized project support, we handle the logistics to deliver qualified staff when and where you need them.</p>

      <p>We manage all temporary employment payroll, statutory taxes, benefits administration, and worker insurances. This lets you scale your workforce capacity quickly and manage operational costs without increasing long-term administrative overhead. Partner with Dexton Solvexx for flexible, reliable temporary staffing solutions.</p>
    `,
    benefits: [
      { title: "Immediate Operational Coverage", desc: "Secure qualified support staff quickly to cover sudden absences and peak periods.", stat: "Rapid Placement" },
      { title: "Flexible Staffing Scales", desc: "Scale staff up or down on short notice to align with daily operational demands.", stat: "Flex Staff Scale" },
      { title: "Managed Payroll Overhead", desc: "We manage payroll, tax filings, and insurance liabilities for temporary staff.", stat: "Zero Payroll Drag" }
    ],
    process: [
      { name: "Identify Resource Needs", desc: "We review operational gaps, expected shift schedules, job duties, and required start dates." },
      { name: "Rapid Pipeline Sourcing", desc: "We search our active database of flexible temporary professionals to find matching candidates." },
      { name: "Verification & Compliance Checks", desc: "We verify candidate availability, confirm basic skills, and complete compliance checks." },
      { name: "Instant Shift Onboarding", desc: "We coordinate placement, set up system access, and monitor performance from day one." }
    ],
    industries: ["Logistics", "Retail", "E-commerce", "Hospitality"],
    faqs: [
      { q: "How quickly can you deliver temporary staff?", a: "We can place pre-vetted temporary candidates in customer support, administration, and logistics roles within 24 to 48 hours." },
      { q: "What is the minimum contract duration for temporary roles?", a: "We support highly flexible temporary staffing models, ranging from a few days to several months, depending on your needs." },
      { q: "Can we transition temporary workers to permanent roles?", a: "Yes, we support temp-to-perm options, allowing you to hire successful temporary staff as permanent team members." },
      { q: "How do you handle temporary staff performance issues?", a: "If a temporary worker does not meet your expectations, we manage replacement and transition support." }
    ]
  },

  // 14. International Hiring Services
  "international-hiring": {
    id: "international-hiring",
    title: "International Hiring Services",
    subtitle: "Navigate Complex Global Employment Laws with Peace of Mind",
    category: "staffing",
    metaTitle: "Global International Hiring & EOR Services | Dexton Solvexx",
    metaDescription: "Hire globally, compliantly. Dexton Solvexx manages international labor law compliance, global contracts, and payroll.",
    intro: "Acquire international talent without the administrative complexity. We manage global labor laws, contract creation, compliance, and international payroll.",
    narrative: `
      <p>Building a global workforce offers massive strategic advantages, but navigating international employment law, local tax codes, and statutory benefits requirements can be exceptionally complex. Managing international hiring without a compliant structure can lead to legal disputes, tax penalties, and operational risks. Dexton Solvexx's <strong>International Hiring Services</strong> manage all international hiring complexities, allowing you to hire global talent with peace of mind.</p>
      
      <p>We deploy fully compliant Employer of Record (EOR) frameworks across multiple international markets. This allows you to hire talent in South America, Europe, Asia, and beyond without setting up expensive, complex local legal entities. We manage employment contracts that adhere strictly to local labor codes, administer statutory benefits, handle local tax withholdings, and process monthly currency payouts.</p>

      <p>By partnering with Dexton Solvexx, you gain a trusted global compliance partner. We monitor changing labor regulations in your target markets, advise on compliance risks, and ensure that your global hiring practices are completely secure. Secure your global expansion and build a highly talented, legally compliant international team with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "No Local Entity Required", desc: "Hire international talent legally without setting up complex local legal entities.", stat: "Save Entity Fees" },
      { title: "Statutory Compliance Shield", desc: "We monitor local labor regulations to protect your company from compliance risks.", stat: "100% Legal Cover" },
      { title: "Global Payroll & Benefits", desc: "We manage local currency payroll processing, tax filings, and localized benefits.", stat: "Unified Invoicing" }
    ],
    process: [
      { name: "Target Market Assessment", desc: "We review candidate locations, local labor regulations, benefits requirements, and tax statuses." },
      { name: "Compliant Contract Creation", desc: "Our legal teams generate localized employment contracts that comply with all local labor codes." },
      { name: "Localized Benefits Setup", desc: "We establish required statutory benefits, local pensions, and healthcare coverages." },
      { name: "Unified Payroll Execution", desc: "We manage local currency payroll processing, tax filings, and monthly payouts." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "E-commerce", "Telecommunications"],
    faqs: [
      { q: "What is an Employer of Record (EOR)?", a: "An EOR is a service provider that legally employs workers on your behalf in a foreign country, handling payroll, taxes, and compliance while you manage their daily work." },
      { q: "How do you handle international tax compliance?", a: "We calculate, withhold, and file all required local payroll taxes, income taxes, and social contributions with regional tax offices." },
      { q: "Can you help set up localized benefits packages?", a: "Yes, we manage statutory benefits, such as local pensions and health insurances, and can advise on localized supplemental benefits." },
      { q: "What happens if we need to terminate an international hire?", a: "We manage terminations in strict compliance with local labor codes, handling required notice periods and severance calculations compliantly." }
    ]
  },

  // 15. Virtual Employee Solutions
  "virtual-employee": {
    id: "virtual-employee",
    title: "Virtual Employee Solutions",
    subtitle: "Embed Fully Managed Remote Professionals into Your Teams",
    category: "staffing",
    metaTitle: "Virtual Employee Solutions & Dedicated Staffing | Dexton Solvexx",
    metaDescription: "Scale operations with dedicated virtual employees. Dexton Solvexx provides office facilities, hardware, and ongoing HR support.",
    intro: "Embed dedicated virtual staff who operate from secure, fully managed offices. We handle workspace facilities, hardware, and local HR support.",
    narrative: `
      <p>While hiring remote workers offers massive flexibility, managing distributed staff can sometimes raise concerns regarding productivity, communication, data security, and hardware reliability. Dexton Solvexx's <strong>Virtual Employee Solutions</strong> bridge the gap between remote flexibility and on-site control. We place dedicated virtual staff who operate from our secure, fully managed offices in top global talent hubs.</p>
      
      <p>We provide your virtual employees with high-performance hardware, high-speed fiber internet, power redundancy systems, and secure workplace environments. This physical infrastructure ensures that your virtual employees operate at peak efficiency, with zero connectivity issues. We also provide local HR support, coordinate social activities, and manage performance check-ins, resulting in higher employee motivation and retention.</p>

      <p>Whether you require dedicated software programmers, transactional accountants, customer success managers, or digital marketing specialists, our virtual employee model delivers. You retain direct management of their daily work and project deliverables, while we manage physical facilities, security systems, compliance, and payroll. Scale your capabilities with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Fully Managed Workspaces", desc: "Staff work from secure offices equipped with fiber internet and backup power.", stat: "Managed Offices" },
      { title: "Premium Hardware Provided", desc: "We supply staff with high-performance laptops and pre-configured security software.", stat: "Pro Tech Stack" },
      { title: "Dedicated Local HR", desc: "Our on-site HR teams manage check-ins, employee events, and performance tracking.", stat: "High Retention" }
    ],
    process: [
      { name: "Define Virtual Profiles", desc: "We review required skills, system access requirements, timezone schedules, and hardware specifications." },
      { name: "Targeted Pipeline Sourcing", desc: "We recruit matching candidates, presenting qualified finalists for your selection." },
      { name: "Secure Office Setup", desc: "We provision high-performance workstations, set up security protocols, and configure networks." },
      { name: "Day 1 Team Integration", desc: "We manage day-one onboarding, coordinate team introductions, and launch operations." }
    ],
    industries: ["Information Technology", "Finance & Banking", "E-commerce", "SaaS & Startups"],
    faqs: [
      { q: "Do virtual employees work in our company timezone?", a: "Yes, we align virtual employee shift schedules with your business hours, ensuring seamless, real-time collaboration." },
      { q: "What data security measures do you implement in your offices?", a: "We restrict local data downloads, implement secure VPNs, enforce multi-factor authentication, and monitor office security." },
      { q: "Can we visit our virtual employees at your offices?", a: "Yes, we welcome clients to visit our global office facilities, meet their virtual teams, and run in-person training sessions." },
      { q: "How do you handle virtual employee absences or sick leave?", a: "We manage local leave tracking, notify your team immediately, and coordinate backup support as needed." }
    ]
  },

  // 16. HR Outsourcing Services
  "hr-outsourcing": {
    id: "hr-outsourcing",
    title: "HR Outsourcing Services",
    subtitle: "Optimize Your Global Human Resource Administration",
    category: "enterprise",
    metaTitle: "Enterprise HR Outsourcing Services | Dexton Solvexx",
    metaDescription: "Streamline global HR administration. Dexton Solvexx handles compliant onboarding, employee relations, payroll, and benefits.",
    intro: "Streamline international employee management. We outsource HR operations, managing compliance, employee relations, payroll, and benefits.",
    narrative: `
      <p>Managing global human resources, maintaining compliance across international borders, and managing day-to-day employee relations can place a massive burden on internal corporate HR departments. Dexton Solvexx's <strong>HR Outsourcing Services</strong> deliver a highly efficient, end-to-end solution. We manage all global HR administration, allowing your internal HR leaders to focus on strategic corporate growth.</p>
      
      <p>We handle the complete employee lifecycle, from compliant onboarding and contract generation to benefits administration, performance tracking, conflict resolution, and exit management. Our teams ensure that your HR operations adhere strictly to local labor regulations in every country where your staff resides, protecting your company from regulatory compliance risks.</p>

      <p>By outsourcing your HR operations to Dexton Solvexx, you streamline employee management, reduce administrative costs, and improve employee retention. We provide online HR portals, run regular employee satisfaction checks, and deliver transparent reporting, helping you build a highly motivated global workforce. Optimize your HR capabilities with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Lifecycle HR Management", desc: "We manage onboarding, benefits, employee relations, performance, and offboarding.", stat: "Managed Lifecycle" },
      { title: "Global Compliance Cover", desc: "Our local HR specialists ensure complete compliance with local labor codes.", stat: "Zero Compliance Risk" },
      { title: "Streamlined HR Operations", desc: "Lower administrative overhead and streamline operations with our expert HR systems.", stat: "Reduced Overhead" }
    ],
    process: [
      { name: "HR Operations Audit", desc: "We review your active HR processes, compliance standings, technology setups, and goals." },
      { name: "Outsourcing Roadmap Setup", desc: "We design a customized HR management blueprint, aligning communication channels and systems." },
      { name: "Onboarding & Integration", desc: "We transition your global employee records, set up support portals, and launch administration." },
      { name: "Ongoing HR Management", desc: "Our teams manage daily employee inquiries, process payroll, administer benefits, and track compliance." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "Healthcare", "Manufacturing"],
    faqs: [
      { q: "How do you handle employee relations and disputes?", a: "Our local HR specialists act as impartial advisors, running structured mediation, investigating issues, and resolving disputes compliantly." },
      { q: "Can we outsource specific HR tasks or the entire department?", a: "Yes, we support flexible outsourcing models, ranging from project-based HR support to complete department management." },
      { q: "How do you track employee engagement and satisfaction?", a: "We run regular anonymous feedback surveys, perform check-ins, and analyze retention data to identify areas for improvement." },
      { q: "Do you provide employee handbook and policy design?", a: "Yes, we generate customized, compliant employee handbooks, code of conduct policies, and remote work guidelines." }
    ]
  },

  // 17. Tech Talent Recruitment
  "tech-talent": {
    id: "tech-talent",
    title: "Tech Talent Recruitment",
    subtitle: "Secure Niche Specialized Technical Specialists Worldwide",
    category: "tech",
    metaTitle: "Tech Talent Recruitment & Specialized Vetting | Dexton Solvexx",
    metaDescription: "Find niche software engineering, data science, and security assets globally. Dexton Solvexx runs senior-level technical evaluations.",
    intro: "Identify and secure rare technical specialists, senior software architects, data scientists, and specialized security assets globally.",
    narrative: `
      <p>Hiring for highly specialized tech roles, such as machine learning researchers, systems architects, and blockchain engineers, is exceptionally challenging. Sourcing these niche capabilities from local candidate pools can lead to long hiring delays and inflated salary demands. Dexton Solvexx's <strong>Tech Talent Recruitment</strong> services provide a highly focused solution, sourcing rare technical experts from global tech hubs.</p>
      
      <p>We do not just scan standard resumes. Our technical search specialists possess deep knowledge of computer science, modern development practices, and database engineering. We map target technical communities, locate active and passive talent, and run comprehensive technical evaluations. We test candidates on system design, algorithmic efficiency, clean coding standards, and collaborative methodologies, ensuring they meet your engineering benchmarks.</p>

      <p>By partnering with Dexton Solvexx, you gain an extension of your tech brand globally. We represent your project vision to top engineers, manage candidate communication, and coordinate transparent salary discussions. Our tech talent pipelines enable you to secure rare technical capabilities, optimize development timelines, and launch innovative products. Secure your technical roadmap with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Niche Tech Specialization", desc: "We specialize in finding rare skills, including machine learning, rust, DevOps, and blockchain.", stat: "Niche Vetted" },
      { title: "Deep Technical Auditing", desc: "Every tech candidate undergoes live technical coding and architecture screening by senior engineers.", stat: "Code Audited" },
      { title: "Global Talent Pipelines", desc: "Access top software engineering talent across Eastern Europe, Latin America, and South Asia.", stat: "Tech Pipeline Access" }
    ],
    process: [
      { name: "Technical Requirements Alignment", desc: "We define framework requirements, database architectures, testing paradigms, and performance standards." },
      { name: "Targeted Sourcing Execution", desc: "Our tech recruiters search specialized engineering networks and open-source communities." },
      { name: "Advanced Tech Screening", desc: "Candidates undergo live programming assessments and system design evaluations." },
      { name: "Final Shortlist Presentation", desc: "We deliver comprehensive candidate profiles, complete with verified code samples and assessment reports." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "E-commerce", "Telecommunications"],
    faqs: [
      { q: "How do you assess a candidate's system design capabilities?", a: "We run structured system design interviews, asking candidates to map out scalable systems, database flows, and security protocols." },
      { q: "What is your typical placement warranty for tech roles?", a: "We offer direct-hire replacement guarantees to ensure you secure the right technical fit." },
      { q: "Do you support hiring remote software engineering squads?", a: "Yes, we can build cross-functional engineering teams, including front-end, back-end, DevOps, and QA specialists." },
      { q: "Can you assist with developer laptop provisioning?", a: "Yes, we purchase, configure with required security tools, and ship laptops to remote developers globally." }
    ]
  },

  // 18. BPO Recruitment Services
  "bpo-recruitment": {
    id: "bpo-recruitment",
    title: "BPO Recruitment Services",
    subtitle: "Scale High-Volume Customer Success & Operations Teams",
    category: "enterprise",
    metaTitle: "BPO Recruitment Services & High-Volume Staffing | Dexton Solvexx",
    metaDescription: "Scale operational capacity. Dexton Solvexx recruits high-volume customer success agents, telesales reps, and data operators.",
    intro: "Build high-volume, highly efficient customer support, telemarketing, data entry, and operational back-office teams.",
    narrative: `
      <p>Scaling high-volume operational departments, customer support centers, and telesales teams requires a structured recruitment process, rapid onboarding capabilities, and efficient candidate screening systems. Traditional agencies often struggle with high-volume recruitment, resulting in slow placements and high employee turnover. Dexton Solvexx's <strong>BPO Recruitment Services</strong> deliver a highly organized, scalable hiring engine built for high-volume staffing.</p>
      
      <p>We implement automated candidate sourcing, use specialized screening tools, and conduct linguistic assessments to pre-screen high volumes of applicants quickly. Our recruiters evaluate candidates' verbal communication skills, typing accuracy, system literacy, and customer empathy. This ensures that you onboard customer service agents who protect your brand reputation and deliver excellent service.</p>

      <p>From high-performance offshore customer service squads to dedicated telesales and data entry operations, we build, provision, and onboard fully managed BPO teams. By placing operational teams in cost-optimized global markets, we help you save up to 70% in operational costs. Scale your operational capabilities and improve customer satisfaction with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Rapid High-Volume Sourcing", desc: "Source and onboard entire customer support teams within 3 to 4 weeks.", stat: "Scale at Speed" },
      { title: "Rigorous Communication Audits", desc: "Candidates undergo structured English and native language communication evaluations.", stat: "Linguistic Vetted" },
      { title: "Significant Back-Office Savings", desc: "Build high-performing back-office teams in cost-optimized markets, saving 70%.", stat: "70% Savings" }
    ],
    process: [
      { name: "Define Team Objectives", desc: "We review team capacity goals, required language skills, shift patterns, and software platforms." },
      { name: "Automated Candidate Sourcing", desc: "We run high-volume sourcing campaigns, attracting hundreds of applicants." },
      { name: "Structured Language & Tech Audits", desc: "Candidates undergo automated voice assessments, typing tests, and system literacy checks." },
      { name: "Group Onboarding & Training", desc: "We manage group onboarding, verify training schedules, and launch operations." }
    ],
    industries: ["Logistics", "Retail", "E-commerce", "Telecommunications"],
    faqs: [
      { q: "How do you evaluate verbal communication skills?", a: "We run structured vocal assessments, evaluating accent clarity, listening comprehension, grammar, and pronunciation." },
      { q: "What is your typical employee retention rate in BPO teams?", a: "We maintain an exceptional retention rate, reflecting our strict screening standards and HR support." },
      { q: "Can we build multilingual BPO teams?", a: "Yes, we recruit bilingual and multilingual agents, covering English, Spanish, French, German, and major Asian languages." },
      { q: "Do you provide physical office space for BPO teams?", a: "Yes, we can place staff in our secure, fully managed offices, complete with call center infrastructure." }
    ]
  },

  // 19. Startup Hiring Solutions
  "startup-hiring": {
    id: "startup-hiring",
    title: "Startup Hiring Solutions",
    subtitle: "Acquire Dynamic, High-Agility Talents to Fuel Rapid Scaling",
    category: "enterprise",
    metaTitle: "Startup Hiring Solutions & Growth Recruiting | Dexton Solvexx",
    metaDescription: "Fuel startup growth. Dexton Solvexx recruits high-agility, product-focused engineers, marketers, and growth assets.",
    intro: "Fuel your growth with high-agility professionals. We recruit product-focused software developers, growth marketers, and agile managers.",
    narrative: `
      <p>Startups operate in high-velocity, rapidly changing environments where every hiring decision has a massive impact on product success and company culture. Finding professionals who possess both top-tier technical skills and the adaptability required to thrive in a startup environment is exceptionally challenging. Dexton Solvexx's <strong>Startup Hiring Solutions</strong> are designed to deliver high-agility talent that accelerates your growth.</p>
      
      <p>We understand that startup teams require professionals who take ownership, adapt to changing priorities, and collaborate effectively. We look beyond basic resumes to evaluate candidates' problem-solving skills, growth mindsets, and past startup histories. This ensures you onboard team members who are excited about building innovative products from the ground up.</p>

      <p>We provide highly flexible staffing structures, ranging from remote developers and contract growth marketers to offshore administrative teams. By helping you build cost-optimized, distributed teams, we help you extend your runway, optimize operational budgets, and build a world-class foundation for future growth. Fuel your strategic vision with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Growth Mindset Fit", desc: "We evaluate candidates to ensure they possess the flexibility and adaptability to thrive in startups.", stat: "Agility Vetted" },
      { title: "Runway Extension Model", desc: "Build offshore and remote support teams to optimize your budget and extend your runway.", stat: "Extend Runway" },
      { title: "Flexible Staffing Structures", desc: "Scale team size and composition quickly to match your evolving product milestones.", stat: "Flexible Scale" }
    ],
    process: [
      { name: "Growth Strategy Alignment", desc: "We review your product roadmap, culture, tech stack, and runway targets." },
      { name: "Targeted Pipeline Matching", desc: "We source tech-proficient, agile candidates who are excited about startup environments." },
      { name: "Rigorous Agility Screening", desc: "Candidates undergo structured problem-solving evaluations and cultural interviews." },
      { name: "Rapid Team Integration", desc: "We handle onboarding and coordinate system setups to launch operations quickly." }
    ],
    industries: ["SaaS & Startups", "Information Technology", "E-commerce", "Finance & Banking"],
    faqs: [
      { q: "How do you evaluate a candidate's suitability for startups?", a: "We run behavioral interviews focused on problem-solving, comfort with ambiguity, and past examples of taking project ownership." },
      { q: "Can we hire fractional or part-time staff for product phases?", a: "Yes, we support flexible contractor models, allowing you to secure specialized support when and where you need it." },
      { q: "What is your typical timeline for filling startup roles?", a: "We leverage our active pipelines to present pre-vetted candidates within 5 to 10 business days." },
      { q: "Do you assist with option pool or equity compensation advice?", a: "While we do not provide legal financial advice, we can share market data on how regional candidates value equity and bonuses." }
    ]
  },

  // 20. Enterprise Workforce Solutions
  "enterprise-workforce": {
    id: "enterprise-workforce",
    title: "Enterprise Workforce Solutions",
    subtitle: "Establish Compliant Distributed Workforce Structures at Scale",
    category: "enterprise",
    metaTitle: "Enterprise Workforce Solutions & Global Scaling | Dexton Solvexx",
    metaDescription: "Scale global operations securely. Dexton Solvexx provides enterprise global staffing, Employer of Record, and custom RPO.",
    intro: "Scale your global operations securely. We provide comprehensive enterprise staffing, international Employer of Record, and custom RPO.",
    narrative: `
      <p>For multinational corporations and large enterprises, scaling global operations requires managing complex labor laws, navigating diverse compliance standards, and integrating distributed teams. Managing these operational challenges internally can lead to administrative bottlenecks, compliance risks, and high costs. Dexton Solvexx's <strong>Enterprise Workforce Solutions</strong> deliver a highly organized, fully compliant infrastructure for global scaling.</p>
      
      <p>We provide comprehensive Employer of Record (EOR) services, custom RPO partnerships, specialized technical recruitment, and high-security offshore facilities. Our legal, compliance, and HR teams ensure that your global operations adhere strictly to all regional regulations, protecting your corporate reputation and reducing legal risk.</p>

      <p>We implement state-of-the-art cybersecurity protocols, deploy managed digital workspaces, and provide detailed operational reporting. This ensures that your global teams operate securely and efficiently, meeting your strict enterprise standards. Streamline your global operations, manage costs, and build a resilient workforce with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Compliant Global Scaling", desc: "Hire in multiple target markets legally through our Employer of Record network.", stat: "Global Entity Covered" },
      { title: "Enterprise Data Security", desc: "We implement secure digital environments, restricted data accesses, and monitoring.", stat: "ISO Vetted Ready" },
      { title: "Dedicated Account Support", desc: "Work with dedicated client success directors who manage your global HR operations.", stat: "Dedicated VP Support" }
    ],
    process: [
      { name: "Strategic Workforce Audit", desc: "We review your global staffing footprint, compliance structures, systems, and expansion goals." },
      { name: "Custom Strategy Design", desc: "We build a customized global expansion roadmap, covering legal frameworks and sourcing." },
      { name: "System Integration & Security", desc: "We deploy secure communication networks, configure systems, and launch onboarding." },
      { name: "Ongoing Global Management", desc: "We process global payrolls, manage compliance, administer benefits, and track operational metrics." }
    ],
    industries: ["Information Technology", "Healthcare", "Finance & Banking", "Manufacturing"],
    faqs: [
      { q: "Can you transition large contract workforces to your EOR platform?", a: "Yes, we manage bulk employee transitions, ensuring continuous operations and complete compliance." },
      { q: "What security and privacy frameworks do you comply with?", a: "We align our operations with ISO 27001, GDPR, and HIPAA data security guidelines to protect enterprise data." },
      { q: "How do you handle currency conversions and pricing changes?", a: "We process payments in major international currencies, using transparent conversion rates and unified invoicing." },
      { q: "Do you support dedicated office facilities for large teams?", a: "Yes, we can build and manage dedicated, branded office spaces, complete with custom security controls." }
    ]
  },

  // 21. Offshore Development Team Hiring
  "offshore-dev-team": {
    id: "offshore-dev-team",
    title: "Offshore Development Team Hiring",
    subtitle: "Establish Dedicated Software Engineering Hubs Globally",
    category: "tech",
    metaTitle: "Build Offshore Development Teams | Dexton Solvexx",
    metaDescription: "Build dedicated offshore development teams. Dexton Solvexx recruits full-stack engineers, QA teams, and scrum managers.",
    intro: "Build dedicated offshore development teams. We recruit full-stack programmers, QA automation specialists, and scrum managers.",
    narrative: `
      <p>Building specialized software systems, launching digital products, and maintaining complex applications requires high-performing, dedicated engineering teams. Sourcing developers locally can be exceptionally slow and expensive, often delaying critical product timelines. Dexton Solvexx's <strong>Offshore Development Team Hiring</strong> services deliver a highly efficient solution, building dedicated software engineering hubs in top global talent regions.</p>
      
      <p>We recruit complete, cross-functional engineering teams, including senior developers, front-end designers, back-end specialists, QA testers, and experienced scrum masters. We evaluate candidates' experience with agile development methodologies, modern technology stacks, and collaborative tools, ensuring they integrate seamlessly into your engineering workflows.</p>

      <p>We manage all physical infrastructure, provision high-performance development computers, set up secure network accesses, and handle local compliance. This turnkey approach allows your engineering leaders to focus on product strategy and delivery, while we manage physical space, equipment, and administrative tasks. Accelerate your product roadmap with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Cross-Functional Tech Squads", desc: "We build complete engineering teams, including developers, QA specialists, and scrum managers.", stat: "Scrum Team Ready" },
      { title: "Provisioned Workspaces", desc: "Engineers operate from secure office spaces equipped with high-speed internet and backup power.", stat: "Pro Workplaces" },
      { title: "Vetted Coding Capabilities", desc: "Every developer passes rigorous coding challenges and system design vetting before hire.", stat: "Top 3% Engineers" }
    ],
    process: [
      { name: "Engineering Goals Alignment", desc: "We review your product roadmap, technology frameworks, agile workflows, and team structure." },
      { name: "Talent Mapping & Search", desc: "Our tech recruiters search specialized networks to locate matching developers and managers." },
      { name: "Rigorous Technical Vetting", desc: "Candidates undergo live programming assessments, code reviews, and system design interviews." },
      { name: "Hardware Shipping & Launch", desc: "We provision development computers, establish secure network accesses, and launch operations." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "E-commerce", "Telecommunications"],
    faqs: [
      { q: "Do the developers work exclusively for our company?", a: "Yes, our offshore developers operate as dedicated team members, working 100% on your product and projects." },
      { q: "What development frameworks do your teams specialize in?", a: "We cover all major modern stacks, including React, Node.js, Python, Java, Go, Swift, Flutter, AWS, and Kubernetes." },
      { q: "How do you coordinate with our internal engineering leads?", a: "Offshore developers participate in your daily standups, use your Slack channels, and commit code directly to your GitHub/GitLab repositories." },
      { q: "Can we transition contractors to permanent employees over time?", a: "Yes, we support flexible transition options to align with your long-term staffing strategy." }
    ]
  },

  // 22. Global Payroll Support
  "global-payroll": {
    id: "global-payroll",
    title: "Global Payroll Support",
    subtitle: "Streamline Global Currency Payouts Compliantly",
    category: "specialized",
    metaTitle: "Global Payroll Support & Compliance | Dexton Solvexx",
    metaDescription: "Streamline global payroll operations. Dexton Solvexx processes international payroll, currency conversions, and local taxes.",
    intro: "Simplify global workforce payroll. We process multi-currency payments, handle local tax compliance, and deliver unified invoicing.",
    narrative: `
      <p>Managing payroll for a distributed, global workforce involves navigating multiple currencies, keeping up with changing local tax codes, and complying with diverse regional regulations. Managing global payroll internally can lead to administrative friction, late payouts, and tax compliance risks. Dexton Solvexx's <strong>Global Payroll Support</strong> delivers a highly secure, automated payroll engine built for global scaling.</p>
      
      <p>We process payouts in multiple international currencies, manage accurate local payroll tax withholdings, and handle required statutory filings with regional tax offices. Our secure financial systems ensure that your global team members receive their payouts on time, every time, in their local currency, protecting your company from regulatory risks.</p>

      <p>We deliver unified monthly invoicing, presenting all international payroll, local taxes, benefits, and service fees in a single billing statement. This reduces operational complexity for your finance team, optimizes currency conversions, and provides complete visibility into your global workforce spending. Streamline your global payroll with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Multi-Currency Processing", desc: "Deliver accurate localized payouts in major currencies, on time, every month.", stat: "Multi-Currency Ready" },
      { title: "Local Tax Filings Covered", desc: "We manage payroll tax withholdings, statutory filings, and local compliance.", stat: "100% Tax Compliant" },
      { title: "Unified Monthly Invoicing", desc: "Receive one billing statement covering all global salaries, local taxes, and benefits.", stat: "Simplified Billing" }
    ],
    process: [
      { name: "Payroll Systems Audit", desc: "We review candidate locations, payment schedules, banking systems, and currency requirements." },
      { name: "Localized Tax Setup", desc: "We configure required local tax calculations, statutory contributions, and reporting schedules." },
      { name: "Timesheet & Billing Sync", desc: "We set up tracking portals to record hours, track approvals, and generate invoices." },
      { name: "Payroll Execution & Filing", desc: "Our teams process localized payouts, deliver payslips, and handle required tax filings." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "Finance & Banking", "E-commerce"],
    faqs: [
      { q: "How do you handle local currency conversions?", a: "We use transparent, institutional foreign exchange rates, minimizing currency losses and optimizing processing costs." },
      { q: "What happens if local tax regulations change?", a: "Our regional compliance specialists monitor local regulations and update our payroll systems immediately to ensure ongoing compliance." },
      { q: "Do you support local statutory benefits payments?", a: "Yes, we calculate and process required contributions for pensions, social security, and health insurances compliantly." },
      { q: "How secure are your payroll processing databases?", a: "We implement advanced encryption standards, secure data transfers, and restrict system access to protect data privacy." }
    ]
  },

  // 23. Recruitment Consulting Services
  "recruitment-consulting": {
    id: "recruitment-consulting",
    title: "Recruitment Consulting Services",
    subtitle: "Optimize Your Talent Sourcing Architectures Globally",
    category: "consulting",
    metaTitle: "Recruitment Consulting & Staffing Advisory | Dexton Solvexx",
    metaDescription: "Optimize talent acquisition structures. Dexton Solvexx advises on global sourcing strategies, ATS integration, and talent brand.",
    intro: "Optimize your internal recruiting structures. We advise on global sourcing strategies, ATS integration, and recruitment branding.",
    narrative: `
      <p>Building a high-performance talent acquisition engine requires a strategic mix of modern technologies, efficient workflows, and data-driven decisions. If your recruiting processes are outdated or inefficient, your company faces longer hiring times, higher cost-per-hire, and missed talent opportunities. Dexton Solvexx's <strong>Recruitment Consulting Services</strong> deliver strategic advisory to help you build a world-class hiring infrastructure.</p>
      
      <p>We collaborate with your HR leaders and executives to analyze your recruitment lifecycle, identify operational bottlenecks, and implement high-efficiency workflows. We advise on modern sourcing strategies, help you select and integrate advanced Applicant Tracking Systems (ATS), and optimize candidate communication channels.</p>

      <p>We help you build a strong, appealing employer brand that attracts top industry talent. By optimizing your internal hiring capabilities, we help you reduce dependency on expensive third-party agencies, lower cost-per-hire, and build a sustainable, highly efficient recruitment engine. Build unmatched hiring authority with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Lifecycle Recruitment Audits", desc: "We review your sourcing channels, hiring workflows, and tech platforms.", stat: "Workflow Audited" },
      { title: "ATS & Sourcing Integration", desc: "We implement advanced recruiting tools to automate tasks and track metrics.", stat: "Modern Sourcing Tech" },
      { title: "Strong Employer Branding", desc: "Optimize your candidate experience and brand positioning to attract top talent.", stat: "Top Candidate NPS" }
    ],
    process: [
      { name: "Hiring Workflows Review", desc: "We audit your active recruiting processes, software platforms, and historic metrics." },
      { name: "Custom Optimization Blueprint", desc: "We design a customized recruitment strategy, detailing process and software changes." },
      { name: "Software Setup & Training", desc: "We deploy advanced ATS platforms and train your HR teams in modern sourcing." },
      { name: "Ongoing Sourcing Advisory", desc: "We provide regular reviews, optimize channels, and help you track hiring metrics." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "Healthcare", "Manufacturing"],
    faqs: [
      { q: "What recruiting technologies do you recommend?", a: "We advise on leading ATS platforms, AI-driven sourcing platforms, candidate assessment tools, and video interviewing platforms." },
      { q: "How do you measure recruitment process efficiency?", a: "We track key performance indicators, including time-to-hire, candidate conversion rates, offer acceptance rates, and cost-per-hire." },
      { q: "Can you help optimize our candidate interview process?", a: "Yes, we design structured interview templates, train hiring managers in behavioral assessment, and optimize feedback loops." },
      { q: "Do you advise on remote work and hiring guidelines?", a: "Yes, we help startups and enterprises establish remote hiring processes, communication standards, and onboarding templates." }
    ]
  },

  // 24. Talent Mapping Services
  "talent-mapping": {
    id: "talent-mapping",
    title: "Talent Mapping Services",
    subtitle: "Acquire Deep Intelligence on Your Target Talent Markets",
    category: "consulting",
    metaTitle: "Talent Mapping Services & Market Intelligence | Dexton Solvexx",
    metaDescription: "Gain strategic talent intelligence. Dexton Solvexx maps competitor team structures, skill pools, and compensation trends.",
    intro: "Gain deep strategic talent intelligence. We map competitor organizational structures, regional skill availability, and compensation trends.",
    narrative: `
      <p>Expanding your operations, launching a new product line, or entering a new market requires a detailed understanding of the target talent landscape. Sourcing talent without clear intelligence can lead to expensive hiring delays, incorrect salary positioning, and missed talent opportunities. Dexton Solvexx's <strong>Talent Mapping Services</strong> deliver deep strategic intelligence to help you make informed workforce decisions.</p>
      
      <p>We conduct deep research to map competitor organizational structures, identify key talent locations, analyze regional skill availability, and track compensation trends. We build comprehensive candidate profiles, identifying top performers who possess the exact skills you require. This intelligence allows you to launch hiring campaigns with absolute precision.</p>

      <p>By partnering with Dexton Solvexx, you gain a clear, detailed view of your target talent markets. We help you identify emerging talent hubs, benchmark compensation rates accurately, and build proactive pipelines of pre-vetted candidates. Drive your workforce strategy with data-driven insights.</p>
    `,
    benefits: [
      { title: "Competitor Talent Mapping", desc: "We map competitor organizational charts and track key talent movements.", stat: "Competitor Intel" },
      { title: "Benchmarked Salary Analysis", desc: "Analyze regional salary distributions and cost-of-living indices for accurate budgeting.", stat: "Salary Analysis Ready" },
      { title: "Proactive Sourcing Pipelines", desc: "Build pipelines of qualified, pre-vetted candidates before active hiring begins.", stat: "Active Pipe Access" }
    ],
    process: [
      { name: "Define Sourcing Parameters", desc: "We review your expansion plans, target roles, target competitors, and research goals." },
      { name: "Market Sourcing Research", desc: "Our research teams map target competitor structures, databases, and talent hubs." },
      { name: "Data Benchmarking & Analysis", desc: "We analyze skill distributions, benchmark salary levels, and track talent availability." },
      { name: "Strategic Map Delivery", desc: "We deliver detailed talent maps, competitive insights, and proactive pipelines." }
    ],
    industries: ["SaaS & Startups", "Finance & Banking", "Information Technology", "Healthcare"],
    faqs: [
      { q: "How do you compile competitor talent intelligence?", a: "We use open-source intelligence, deep industry networking, public filings, and candidate interviews to map talent structures." },
      { q: "Can talent mapping help us select a new office location?", a: "Yes, we analyze regional talent availability, local labor costs, and university outputs to help you choose optimal locations." },
      { q: "How long does a typical talent mapping project take?", a: "Projects typically take between 3 to 6 weeks, depending on the scope of industries and locations surveyed." },
      { q: "Do you contact the mapped candidates during the project?", a: "By default, our mapping projects are purely research-focused. We can transition to active outreach if you request it." }
    ]
  },

  // 25. Candidate Screening Services
  "candidate-screening": {
    id: "candidate-screening",
    title: "Candidate Screening Services",
    subtitle: "Verify Professional Credentials and Core Competencies Vigorously",
    category: "consulting",
    metaTitle: "Candidate Screening & Reference Auditing | Dexton Solvexx",
    metaDescription: "Reduce hiring risk. Dexton Solvexx conducts deep candidate pre-screening, license checks, and technical assessments.",
    intro: "Reduce hiring risks and optimize recruiting efficiency with deep, structured candidate pre-screening and validation services.",
    narrative: `
      <p>Hiring managers and HR teams often spend hours screening irrelevant resumes, validating qualifications, and running basic pre-screening interviews. This manual workload slows down recruitment and increases the risk of hiring errors. Dexton Solvexx's <strong>Candidate Screening Services</strong> deliver a highly organized, automated pre-screening engine that optimizes your hiring pipeline.</p>
      
      <p>We handle initial candidate screening, running behavioral assessments, verifying professional credentials, checking background records, and auditing references. We test technical skills, evaluate language capabilities, and confirm career goals, ensuring that your hiring managers receive only highly qualified, pre-vetted finalists.</p>

      <p>By outsourcing candidate screening to Dexton Solvexx, you optimize your hiring pipeline, reduce hiring manager workloads, and improve selection accuracy. We deliver comprehensive candidate profiles, complete with verified qualifications and screening reports, helping you hire with absolute confidence. Protect your workforce quality with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Deep Credentials Auditing", desc: "We verify employment history, academic credentials, and professional licenses.", stat: "100% Verified Fit" },
      { title: "Specialized Technical Vetting", desc: "We deploy specialized tests to evaluate technical skills and competencies.", stat: "Expert Checked" },
      { title: "Reduced Administrative Burdens", desc: "Let our teams handle initial phone screens and evaluations, saving time.", stat: "Hiring Speed Up" }
    ],
    process: [
      { name: "Define Screening Standards", desc: "We review your role specifications, technical standards, background criteria, and deadlines." },
      { name: "Sourcing Filter Setup", desc: "We deploy targeted candidate pre-screens, software assessments, and initial filters." },
      { name: "Structured Vetting Interviews", desc: "Our specialists run behavioral screenings and verify professional backgrounds." },
      { name: "Final Evaluation Reports", desc: "We deliver detailed screening reports and verified finalist profiles." }
    ],
    industries: ["Information Technology", "Healthcare", "Finance & Banking", "Legal"],
    faqs: [
      { q: "What types of background checks do you perform?", a: "We run criminal records checks, verify employment and education history, check professional licenses, and audit references." },
      { q: "Can we customize candidate assessment tests?", a: "Yes, we integrate customized technical challenges, language tests, and coding assessments tailored to your roles." },
      { q: "How do you protect candidate data privacy during screening?", a: "We use secure, encrypted data portals and adhere to GDPR and local privacy standards to protect candidate information." },
      { q: "Do you provide automated video interview options?", a: "Yes, we support structured, automated video screening platforms to streamline candidate evaluations." }
    ]
  },

  // 26. Recruitment Automation Solutions
  "recruitment-automation": {
    id: "recruitment-automation",
    title: "Recruitment Automation Solutions",
    subtitle: "Accelerate Hiring Lifecycles with AI-Driven Workflows",
    category: "consulting",
    metaTitle: "Recruitment Automation & AI Sourcing Systems | Dexton Solvexx",
    metaDescription: "Accelerate hiring pipelines. Dexton Solvexx designs and integrates AI recruitment bots, automated screening, and ATS systems.",
    intro: "Accelerate your hiring lifecycle. We design and integrate AI recruitment systems, automated screening pipelines, and optimized ATS.",
    narrative: `
      <p>Manual administrative tasks—such as resume screening, interview scheduling, and candidate status updates—often slow down recruitment and impact candidate experience. Dexton Solvexx's <strong>Recruitment Automation Solutions</strong> streamline your talent acquisition infrastructure. We design and integrate advanced AI systems and automated workflows that optimize your hiring pipeline.</p>
      
      <p>We integrate AI-driven candidate sourcing bots, configure automated screening filters, deploy scheduling systems, and optimize Applicant Tracking Systems (ATS). Our solutions automate repetitive tasks, allowing your recruiters to spend more time engaging and interviewing top talent, improving overall hiring quality.</p>

      <p>By automating your recruitment workflows, you significantly reduce time-to-hire, lower cost-per-hire, and deliver a smooth, engaging experience for candidates. We provide customized dashboards, system training, and ongoing support, helping you build a highly automated talent acquisition engine. Drive recruiting efficiency with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Reduced Sourcing Workloads", desc: "AI-driven sourcing tools identify and engage qualified candidates automatically.", stat: "Automated Sourcing" },
      { title: "Fast-Track Scheduling", desc: "Automated scheduling tools allow candidates to book interviews directly in calendars.", stat: "Zero Booking Delay" },
      { title: "Optimized Candidate Journeys", desc: "Deploy automated updates and feedback triggers to keep candidates engaged.", stat: "Enhanced NPS" }
    ],
    process: [
      { name: "Hiring Pipeline Audit", desc: "We review your recruiting processes, software platforms, and identify manual bottlenecks." },
      { name: "Custom Automation Design", desc: "We design a customized automation system, detailing tool integrations and workflows." },
      { name: "System Deployment & Sync", desc: "We deploy AI sourcing bots, automate scheduling, and configure ATS systems." },
      { name: "Team Training & Support", desc: "We train your HR teams, run system tests, and provide ongoing technical support." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "Healthcare", "E-commerce"],
    faqs: [
      { q: "Will recruitment automation impact candidate relationships?", a: "No, our automation systems are designed to enhance candidate relationships by speeding up responses and keeping candidates updated throughout the process." },
      { q: "What ATS platforms do your automation systems support?", a: "We integrate with all major ATS and HR platforms, including Greenhouse, Lever, Workday, and custom systems." },
      { q: "How do you ensure AI sourcing tools are unbiased?", a: "We configure AI sourcing filters using objective criteria, anonymize candidate data, and run audits to ensure fair screening." },
      { q: "Can we automate candidate feedback collection?", a: "Yes, we deploy automated surveys that collect candidate feedback after interviews to measure hiring quality." }
    ]
  },

  // 27. Diversity Hiring Services
  "diversity-hiring": {
    id: "diversity-hiring",
    title: "Diversity Hiring Services",
    subtitle: "Establish High-Performance, Inclusive Workforce Frameworks",
    category: "consulting",
    metaTitle: "Diversity Hiring Services & Inclusive Staffing | Dexton Solvexx",
    metaDescription: "Build inclusive teams. Dexton Solvexx provides anonymous screening, bias-free job specs, and diverse talent pipelines.",
    intro: "Build high-performing, inclusive teams. We provide anonymous screening, bias-free job descriptions, and diverse talent pipelines.",
    narrative: `
      <p>Building high-performing, inclusive teams is a key driver of corporate innovation, operational excellence, and employee retention. However, standard recruitment processes can sometimes incorporate unconscious bias, resulting in limited talent pipelines and missed talent assets. Dexton Solvexx's <strong>Diversity Hiring Services</strong> deliver a highly organized, inclusive recruiting infrastructure built for global hiring.</p>
      
      <p>We deploy anonymous candidate screening frameworks, write bias-free job descriptions, and access specialized diversity networks globally. Our recruiters are trained in inclusive assessment, ensuring that candidates are evaluated objectively based on core competencies and cultural contribution, reducing hiring bias.</p>

      <p>By partnering with Dexton Solvexx, you gain access to highly diverse talent pipelines and build a more inclusive, productive workforce. We help you design inclusive onboarding frameworks, track diversity hiring metrics, and build a culture of belonging. Build high-performing, diverse teams with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Inclusive Sourcing Access", desc: "Sourced candidates are mapped from diverse talent hubs and communities globally.", stat: "Diverse Pipeline" },
      { title: "Anonymized Candidate Vetting", desc: "We anonymize candidate profiles to reduce unconscious bias during initial review.", stat: "Bias-Free Screen" },
      { title: "Inclusive Branding Support", desc: "Optimize your job descriptions and branding to attract diverse candidates.", stat: "Top Diversity Brand" }
    ],
    process: [
      { name: "Diversity Goals Alignment", desc: "We review your diversity and inclusion goals, active processes, and metrics." },
      { name: "Inclusive Pipeline Mapping", desc: "Our teams map diverse talent hubs, professional networks, and communities." },
      { name: "Anonymized Profile Vetting", desc: "We screen candidates anonymously and run structured evaluations based on skills." },
      { name: "Onboarding Support Setup", desc: "We assist in setting up inclusive onboarding processes to support retention." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "Healthcare", "Education"],
    faqs: [
      { q: "How do you ensure bias-free candidate screening?", a: "We anonymize candidate profiles, use structured skill assessments, and run behavioral evaluations to ensure objective screening." },
      { q: "Can we set specific diversity sourcing goals?", a: "Yes, we align our sourcing strategies with your specific diversity and inclusion objectives." },
      { q: "Do you offer diversity training for our hiring managers?", a: "Yes, we provide specialized training templates and workshops to help hiring managers run inclusive assessments." },
      { q: "How do you track diversity hiring metrics?", a: "We deliver detailed reports on pipeline diversity, screening metrics, and selection conversion rates compliantly." }
    ]
  },

  // 28. Workforce Management Solutions
  "workforce-management": {
    id: "workforce-management",
    title: "Workforce Management Solutions",
    subtitle: "Optimize Distributed Workforce Scheduling and Productivity",
    category: "consulting",
    metaTitle: "Workforce Management Solutions & Productivity Systems | Dexton Solvexx",
    metaDescription: "Optimize global staff productivity. Dexton Solvexx provides employee scheduling, time tracking, and productivity audits.",
    intro: "Optimize global workforce productivity and compliance with comprehensive employee scheduling, time tracking, and performance systems.",
    narrative: `
      <p>Managing employee scheduling, tracking time accurately, and optimizing productivity across distributed global teams can be exceptionally complex. Managing operational workflows internally can lead to administrative friction, compliance risks, and high costs. Dexton Solvexx's <strong>Workforce Management Solutions</strong> deliver a highly organized, secure infrastructure to manage global operations.</p>
      
      <p>We provide advanced time tracking platforms, configure automated scheduling systems, manage compliance, and deliver detailed workforce productivity reports. Our solutions ensure that your global teams operate securely and efficiently, meeting your strict enterprise standards.</p>

      <p>By streamlining your global workforce operations, you reduce administrative overhead, improve employee retention, and optimize staffing costs. We deliver unified dashboards, system training, and ongoing support, helping you build a highly efficient global workforce. Optimize your operational capabilities with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Automated Staff Scheduling", desc: "Deploy advanced scheduling systems to optimize staff allocations and shift coverages.", stat: "Shift Optimized" },
      { title: "Compliant Time Tracking", desc: "Enforce accurate, compliant time tracking systems for distributed team members.", stat: "100% Time Vetted" },
      { title: "Productivity Reporting Audits", desc: "Access comprehensive performance metrics and workforce productivity reports daily.", stat: "Strategic Insights" }
    ],
    process: [
      { name: "Operations Audit", desc: "We review active scheduling processes, time tracking tools, compliance standings, and goals." },
      { name: "Custom Strategy Setup", desc: "We design a customized workforce management roadmap, selecting software tools." },
      { name: "Software Deployment & Sync", desc: "We deploy scheduling platforms, time tracking, and configure workflows." },
      { name: "Ongoing Management support", desc: "We manage time systems, process payroll data, and deliver productivity reports." }
    ],
    industries: ["Logistics", "Retail", "E-commerce", "Healthcare"],
    faqs: [
      { q: "What workforce management software do you support?", a: "We integrate with leading time tracking, scheduling, and project management platforms, adapting to your workflows." },
      { q: "How do you handle overtime and compliance in different countries?", a: "Our local compliance specialists configure payroll systems to handle statutory overtime, holiday premiums, and labor rules compliantly." },
      { q: "Can we monitor remote employee productivity?", a: "Yes, we deploy secure time tracking and performance monitoring platforms to track task status and productivity compliantly." },
      { q: "Do you support mobile scheduling apps for field staff?", a: "Yes, we deploy mobile-optimized workforce tools for real-time shift scheduling and time entries." }
    ]
  },

  // 29. AI Recruitment Solutions
  "ai-recruitment": {
    id: "ai-recruitment",
    title: "AI Recruitment Solutions",
    subtitle: "Harness Advanced Machine Learning to Secure Top Talent Faster",
    category: "tech",
    metaTitle: "AI Recruitment Solutions & Machine Learning Staffing | Dexton Solvexx",
    metaDescription: "Accelerate hiring pipelines with AI. Dexton Solvexx deploys advanced machine learning models for sourcing, matching, and vetting.",
    intro: "Accelerate candidate sourcing and matching with advanced machine learning models, automated resume screening, and matching systems.",
    narrative: `
      <p>Finding qualified candidates amidst massive volumes of resumes and screening applicants quickly are constant challenges for scaling enterprises. Sourcing talent manually can lead to hiring delays, high costs, and missed talent opportunities. Dexton Solvexx's <strong>AI Recruitment Solutions</strong> harness advanced machine learning and natural language processing to optimize your talent acquisition pipeline.</p>
      
      <p>We deploy AI-driven sourcing algorithms that identify top active and passive talent, integrate automated resume matching tools, and configure predictive hiring models. Our solutions analyze candidate skills, past career paths, and technical achievements, presenting highly qualified finalist shortlists in a fraction of the time.</p>

      <p>By implementing AI recruitment tools, you significantly reduce time-to-hire, lower cost-per-hire, and eliminate manual bottlenecks in your screening pipeline. We provide customized dashboards, system integrations, and ongoing support, helping you build a highly advanced, tech-driven recruitment engine. Transform your hiring capabilities with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "AI-Driven Active Sourcing", desc: "Machine learning algorithms identify and engage top passive talent automatically.", stat: "Sourcing Speed Up" },
      { title: "Predictive Talent Matching", desc: "Predictive models match candidate profiles with your job specifications and culture.", stat: "98% Placement Fit" },
      { title: "Automated Screening Filters", desc: "Screen thousands of resumes in minutes using automated skill and experience filters.", stat: "Automated Vetting" }
    ],
    process: [
      { name: "Hiring Needs Analysis", desc: "We review your active recruitment processes, manual bottlenecks, and system goals." },
      { name: "AI Strategy Configuration", desc: "We design a customized AI recruitment blueprint, setting matching rules and filters." },
      { name: "Algorithm & Systems Sync", desc: "We integrate AI sourcing tools, sync databases, and launch automated matching." },
      { name: "Predictive Pipeline Management", desc: "Your recruiters receive pre-vetted, AI-matched finalist shortlists daily." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "Healthcare", "Finance & Banking"],
    faqs: [
      { q: "How do your AI matching algorithms work?", a: "Our models use natural language processing to analyze candidate skills, project histories, and achievements, matching them with your specifications." },
      { q: "Is candidate data secure in your AI platforms?", a: "Yes, we implement advanced encryption, secure database architectures, and comply with GDPR and privacy standards." },
      { q: "Can we integrate AI tools with our existing ATS?", a: "Yes, we connect our AI recruitment models with leading Applicant Tracking Systems through secure APIs." },
      { q: "How do you prevent bias in AI recruiting algorithms?", a: "We run regular audits, use objective skill criteria, and mask sensitive candidate details during matching to ensure fair screening." }
    ]
  },

  // 30. Leadership Hiring Services
  "leadership-hiring": {
    id: "leadership-hiring",
    title: "Leadership Hiring Services",
    subtitle: "Secure Strategic Leaders to Propel Enterprise Growth Worldwide",
    category: "tech",
    metaTitle: "Leadership Hiring Services & Executive Search | Dexton Solvexx",
    metaDescription: "Secure strategic corporate leaders. Dexton Solvexx recruits VPs, Directors, and department heads for global scaling.",
    intro: "Identify and place proven corporate leaders, VPs, and strategic department heads who possess the vision to drive operational success.",
    narrative: `
      <p>Attracting proven, strategic corporate leaders who can lead teams, manage change, and drive operational success is a vital priority for scaling enterprises. Finding these strategic assets in local talent markets can be exceptionally slow and expensive. Dexton Solvexx's <strong>Leadership Hiring Services</strong> deliver a highly focused, discrete recruitment engine designed to place high-impact leaders.</p>
      
      <p>We target experienced VPs, directors, and strategic department heads across key sectors, including technology, finance, engineering, and HR. We evaluate candidates' leadership styles, past strategic achievements, change management track records, and cultural alignment, ensuring they meet your operational goals.</p>

      <p>By partnering with Dexton Solvexx, you secure visionary leaders who inspire teams, optimize operations, and deliver sustainable value for your business. We run discrete candidate outreach, manage salary negotiations, and facilitate smooth onboarding transitions. Propel your global scaling strategy with Dexton Solvexx.</p>
    `,
    benefits: [
      { title: "Discrete Leadership Search", desc: "We run discrete, professional search campaigns to protect your brand reputation.", stat: "100% Discrete" },
      { title: "Vetted Executive Talents", desc: "Every leadership candidate undergoes structured behavioral and strategic evaluations.", stat: "Proven Track Record" },
      { title: "Strategic Onboarding Plans", desc: "We design strategic transition plans to ensure new leaders are set up for success.", stat: "Seamless Transition" }
    ],
    process: [
      { name: "Define Leadership Profile", desc: "We review operational objectives, strategic goals, leadership criteria, and culture." },
      { name: "Discrete Market Mapping", desc: "Our teams map high-performing leaders, VPs, and directors in target sectors." },
      { name: "Discrete Candidate Outreach", desc: "We make discrete approaches to targeted leaders to pitch your career opportunity." },
      { name: "Structured Leadership Interview", desc: "We run in-depth interviews, reference checks, and present a qualified shortlist." }
    ],
    industries: ["Information Technology", "SaaS & Startups", "Healthcare", "Finance & Banking"],
    faqs: [
      { q: "How do you verify a leader's strategic achievements?", a: "We run detailed reference audits, verify past operational metrics, and use case-study interviews to assess strategic capabilities." },
      { q: "What is your replacement warranty for leadership roles?", a: "We offer comprehensive direct-hire guarantees on all leadership placements to ensure long-term fit." },
      { q: "Can you help recruit offshore leadership assets?", a: "Yes, we specialize in placing offshore directors, regional managers, and operations heads to manage your global teams." },
      { q: "How do you handle executive package negotiations?", a: "We manage compensation conversations discretely, aligning salary packages, equity incentives, and bonuses to secure top talent." }
    ]
  }
};

// Export database for browser usage
window.servicesDb = servicesDb;
