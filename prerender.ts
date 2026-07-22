import fs from 'fs';
import path from 'path';

const PAGE_METADATA: Record<string, { title: string; description: string; canonical: string; heading: string; excerpt: string }> = {
  "/": {
    title: "FCRA Compliant Background Check Services for Landlords & Employers | White Bridge Find",
    description: "White Bridge Find provides fast, reliable, and FCRA-compliant background check services, tenant screening reports, and TransUnion® credit history verifications.",
    canonical: "https://www.whitebridgefind.com/",
    heading: "FCRA Compliant Background Check Services for Landlords & Employers",
    excerpt: "White Bridge Find provides fast, reliable, and FCRA-compliant background check services, tenant screening reports, and TransUnion® credit history verifications for residential property owners, hiring managers, and real estate professionals."
  },
  "/tenant-background-check": {
    title: "Tenant Background Check Services & Eviction Search | White Bridge Find",
    description: "FCRA-compliant tenant background check services. Instant nationwide eviction court searches, criminal history records, and sex offender registry verifications.",
    canonical: "https://www.whitebridgefind.com/tenant-background-check",
    heading: "FCRA Compliant Tenant Background Check Services & Eviction Searches",
    excerpt: "Screen prospective tenants with instant nationwide eviction court dockets, multi-jurisdictional criminal searches, sex offender registries, and landlord reference checks."
  },
  "/transunion-credit-check": {
    title: "TransUnion Credit Check for Landlords | Soft Credit Pull | White Bridge Find",
    description: "Order soft TransUnion credit checks for tenant screening. Review payment history, collections, bankruptcies, and credit scores with zero score impact.",
    canonical: "https://www.whitebridgefind.com/transunion-credit-check",
    heading: "TransUnion® Tenant Credit Check & Resident Screening Reports",
    excerpt: "Order soft TransUnion credit pulls with zero impact on applicant credit scores. Review payment histories, trade lines, utility collections, and bankruptcy filings."
  },
  "/reliable-credit-score": {
    title: "Reliable Credit Score & Financial History Analysis | White Bridge Find",
    description: "Analyze prospective tenant credit scores, trade line debt, payment punctuality, and financial court judgments for rental applicant screening.",
    canonical: "https://www.whitebridgefind.com/reliable-credit-score",
    heading: "Reliable Credit Score & Financial Stability Analysis for Landlords",
    excerpt: "Analyze tenant debt-to-income ratios, revolving credit lines, payment punctuality, and financial court judgments to make confident leasing decisions."
  },
  "/truthfinder-search": {
    title: "TruthFinder Background Search & Public Records | White Bridge Find",
    description: "Comprehensive TruthFinder public records search. Verify address histories, contact info, aliases, and public registry details.",
    canonical: "https://www.whitebridgefind.com/truthfinder-search",
    heading: "TruthFinder Public Records & Criminal Search Portal",
    excerpt: "Perform thorough background investigations including address histories, alias cross-referencing, contact verifications, and public court records."
  },
  "/guides": {
    title: "Landlord Resource Center & Tenant Screening Educational Guides (2026)",
    description: "Free educational guides for landlords and property managers. Learn how to screen tenants, read credit reports, evaluate criminal background checks, and comply with state screening laws.",
    canonical: "https://www.whitebridgefind.com/guides",
    heading: "Landlord Educational Resource Center & Legal Compliance Hub",
    excerpt: "Access free, in-depth educational guides written for landlords and property managers. Learn best practices for FCRA compliance, tenant screening, and fraud prevention."
  },
  "/guides/how-to-screen-tenants": {
    title: "How to Screen Tenants: Complete Landlord Guide (2026) | White Bridge Find",
    description: "Master the complete step-by-step tenant screening process for landlords. Learn how to pre-screen, verify income, check references, and comply with FCRA laws.",
    canonical: "https://www.whitebridgefind.com/guides/how-to-screen-tenants",
    heading: "How to Screen Tenants: Complete Landlord Step-by-Step Guide",
    excerpt: "Learn how to pre-screen applicants, verify income pay stubs, check landlord references, run credit and criminal background reports, and follow FCRA rules."
  },
  "/guides/what-landlords-look-for-in-credit-reports": {
    title: "What Landlords Look for in Credit Reports: A Complete Analysis | White Bridge Find",
    description: "Discover what credit score, payment history, debt-to-income ratio, and collections landlords check on rental credit reports. Learn how to evaluate applicant credit profiles.",
    canonical: "https://www.whitebridgefind.com/guides/what-landlords-look-for-in-credit-reports",
    heading: "What Landlords Look for in Credit Reports: A Detailed Analysis",
    excerpt: "Understand credit scores, trade lines, collection accounts, utility bills, and bankruptcy filings when evaluating prospective rental applicants."
  },
  "/guides/how-to-read-criminal-background-check": {
    title: "How to Read a Criminal Background Check: Landlord Safety Guide | White Bridge Find",
    description: "Learn how to interpret criminal background check reports for tenant screening. Understand felonies vs. misdemeanors, HUD fair housing guidelines, and safety compliance.",
    canonical: "https://www.whitebridgefind.com/guides/how-to-read-criminal-background-check",
    heading: "How to Read a Criminal Background Check: Landlord Safety & HUD Guidelines",
    excerpt: "Navigate criminal history reports legally and fairly. Understand HUD fair housing rules, felony vs. misdemeanor classifications, and individualized risk reviews."
  },
  "/guides/tenant-screening-laws-by-state": {
    title: "Tenant Screening Laws by State: Landlord Compliance Guide (2026) | White Bridge Find",
    description: "Compare state-by-state tenant screening laws, application fee caps, security deposit limits, background check restrictions, and adverse action rules for landlords.",
    canonical: "https://www.whitebridgefind.com/guides/tenant-screening-laws-by-state",
    heading: "Tenant Screening Laws by State: Application Fee Caps & Regulations",
    excerpt: "Compare state-by-state landlord laws including application fee limits, security deposit rules, background check restrictions, and local housing ordinances."
  },
  "/guides/red-flags-in-rental-applications": {
    title: "Top 10 Red Flags in Rental Applications Landlords Must Spot | White Bridge Find",
    description: "Learn how to spot tenant screening red flags, fake pay stubs, employment scams, false landlord references, and application inconsistencies before signing a lease.",
    canonical: "https://www.whitebridgefind.com/guides/red-flags-in-rental-applications",
    heading: "Top 10 Red Flags in Rental Applications & How to Spot Scams",
    excerpt: "Protect your property from rental scams. Identify fake pay stubs, fraudulent employer phone numbers, gaps in rental history, and deceptive applicant behavior."
  }
};

function prerender() {
  const distPath = path.join(process.cwd(), 'dist');
  const templatePath = path.join(distPath, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html does not exist. Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');

  for (const [route, meta] of Object.entries(PAGE_METADATA)) {
    if (route === '/') continue; // already dist/index.html

    let routeHtml = baseHtml;
    // Replace title
    routeHtml = routeHtml.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);
    
    // Replace description
    if (routeHtml.includes('name="description"')) {
      routeHtml = routeHtml.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${meta.description}">`);
    } else {
      routeHtml = routeHtml.replace('</head>', `<meta name="description" content="${meta.description}">\n</head>`);
    }

    // Replace canonical
    if (routeHtml.includes('rel="canonical"')) {
      routeHtml = routeHtml.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${meta.canonical}">`);
    } else {
      routeHtml = routeHtml.replace('</head>', `<link rel="canonical" href="${meta.canonical}">\n</head>`);
    }

    // Create target directory in dist
    const routeDir = path.join(distPath, route.slice(1));
    fs.mkdirSync(routeDir, { recursive: true });

    // Save route-specific index.html
    const targetFilePath = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetFilePath, routeHtml, 'utf-8');
    console.log(`Prerendered: ${route} -> ${targetFilePath}`);
  }

  console.log('Static pre-rendering complete for all routes!');
}

prerender();
