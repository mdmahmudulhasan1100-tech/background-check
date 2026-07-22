import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const PAGE_METADATA: Record<string, { title: string; description: string; canonical: string }> = {
  "/": {
    title: "FCRA Compliant Background Check Services for Landlords & Employers | White Bridge Find",
    description: "White Bridge Find provides fast, reliable, and FCRA-compliant background check services, tenant screening reports, and TransUnion® credit history verifications.",
    canonical: "https://www.whitebridgefind.com/"
  },
  "/tenant-background-check": {
    title: "Tenant Background Check Services & Eviction Search | White Bridge Find",
    description: "FCRA-compliant tenant background check services. Instant nationwide eviction court searches, criminal history records, and sex offender registry verifications.",
    canonical: "https://www.whitebridgefind.com/tenant-background-check"
  },
  "/transunion-credit-check": {
    title: "TransUnion Credit Check for Landlords | Soft Credit Pull | White Bridge Find",
    description: "Order soft TransUnion credit checks for tenant screening. Review payment history, collections, bankruptcies, and credit scores with zero score impact.",
    canonical: "https://www.whitebridgefind.com/transunion-credit-check"
  },
  "/reliable-credit-score": {
    title: "Reliable Credit Score & Financial History Analysis | White Bridge Find",
    description: "Analyze prospective tenant credit scores, trade line debt, payment punctuality, and financial court judgments for rental applicant screening.",
    canonical: "https://www.whitebridgefind.com/reliable-credit-score"
  },
  "/truthfinder-criminal-search": {
    title: "TruthFinder Criminal Search & Public Records | White Bridge Find",
    description: "Comprehensive TruthFinder criminal search and public records lookup. Verify address histories, contact info, aliases, and public registry details.",
    canonical: "https://www.whitebridgefind.com/truthfinder-criminal-search"
  },
  "/truthfinder-search": {
    title: "TruthFinder Criminal Search & Public Records | White Bridge Find",
    description: "Comprehensive TruthFinder criminal search and public records lookup. Verify address histories, contact info, aliases, and public registry details.",
    canonical: "https://www.whitebridgefind.com/truthfinder-criminal-search"
  },
  "/guides": {
    title: "Landlord Resource Center & Tenant Screening Educational Guides (2026)",
    description: "Free educational guides for landlords and property managers. Learn how to screen tenants, read credit reports, evaluate criminal background checks, and comply with state screening laws.",
    canonical: "https://www.whitebridgefind.com/guides"
  },
  "/guides/how-to-screen-tenants": {
    title: "How to Screen Tenants: Complete Landlord Guide (2026) | White Bridge Find",
    description: "Master the complete step-by-step tenant screening process for landlords. Learn how to pre-screen, verify income, check references, and comply with FCRA laws.",
    canonical: "https://www.whitebridgefind.com/guides/how-to-screen-tenants"
  },
  "/guides/what-landlords-look-for-in-credit-reports": {
    title: "What Landlords Look for in Credit Reports: A Complete Analysis | White Bridge Find",
    description: "Discover what credit score, payment history, debt-to-income ratio, and collections landlords check on rental credit reports. Learn how to evaluate applicant credit profiles.",
    canonical: "https://www.whitebridgefind.com/guides/what-landlords-look-for-in-credit-reports"
  },
  "/guides/how-to-read-criminal-background-check": {
    title: "How to Read a Criminal Background Check: Landlord Safety Guide | White Bridge Find",
    description: "Learn how to interpret criminal background check reports for tenant screening. Understand felonies vs. misdemeanors, HUD fair housing guidelines, and safety compliance.",
    canonical: "https://www.whitebridgefind.com/guides/how-to-read-criminal-background-check"
  },
  "/guides/tenant-screening-laws-by-state": {
    title: "Tenant Screening Laws by State: Landlord Compliance Guide (2026) | White Bridge Find",
    description: "Compare state-by-state tenant screening laws, application fee caps, security deposit limits, background check restrictions, and adverse action rules for landlords.",
    canonical: "https://www.whitebridgefind.com/guides/tenant-screening-laws-by-state"
  },
  "/guides/red-flags-in-rental-applications": {
    title: "Top 10 Red Flags in Rental Applications Landlords Must Spot | White Bridge Find",
    description: "Learn how to spot tenant screening red flags, fake pay stubs, employment scams, false landlord references, and application inconsistencies before signing a lease.",
    canonical: "https://www.whitebridgefind.com/guides/red-flags-in-rental-applications"
  }
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Serve robots.txt and sitemap.xml explicitly
  app.get("/robots.txt", (req, res) => {
    const robotsPath = path.join(process.cwd(), "public", "robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.setHeader("Content-Type", "text/plain");
      res.sendFile(robotsPath);
    } else {
      res.status(404).send("User-agent: *\nAllow: /\nSitemap: https://www.whitebridgefind.com/sitemap.xml");
    }
  });

  app.get("/sitemap.xml", (req, res) => {
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    if (fs.existsSync(sitemapPath)) {
      res.setHeader("Content-Type", "application/xml");
      res.sendFile(sitemapPath);
    } else {
      res.status(404).send("Not found");
    }
  });

  // Helper to serve index.html with dynamic meta tags for SEO
  function serveIndexHtml(req: express.Request, res: express.Response, rawHtml: string) {
    const reqPath = req.path.replace(/\/$/, "") || "/";
    const meta = PAGE_METADATA[reqPath] || {
      title: "FCRA Compliant Background Check Services for Landlords & Employers | White Bridge Find",
      description: "White Bridge Find provides fast, reliable, and FCRA-compliant background check services, tenant screening reports, and TransUnion® credit history verifications.",
      canonical: `https://www.whitebridgefind.com${reqPath}`
    };

    let modifiedHtml = rawHtml;
    // Replace <title>
    modifiedHtml = modifiedHtml.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);
    // Replace or insert meta description
    if (modifiedHtml.includes('name="description"')) {
      modifiedHtml = modifiedHtml.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${meta.description}">`);
    } else {
      modifiedHtml = modifiedHtml.replace('</head>', `<meta name="description" content="${meta.description}">\n</head>`);
    }
    // Replace or insert canonical URL
    if (modifiedHtml.includes('rel="canonical"')) {
      modifiedHtml = modifiedHtml.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${meta.canonical}">`);
    } else {
      modifiedHtml = modifiedHtml.replace('</head>', `<link rel="canonical" href="${meta.canonical}">\n</head>`);
    }

    res.status(200).setHeader("Content-Type", "text/html; charset=utf-8").send(modifiedHtml);
  }

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

    app.use(vite.middlewares);

    // Development catch-all to ensure all routes render index.html with status 200
    app.get("*", async (req, res, next) => {
      try {
        const indexPath = path.join(process.cwd(), "index.html");
        let template = fs.readFileSync(indexPath, "utf-8");
        template = await vite.transformIndexHtml(req.originalUrl, template);
        serveIndexHtml(req, res, template);
      } catch (e) {
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static assets from dist
    app.use(express.static(distPath, { index: false }));

    // Production catch-all for all routes: 200 OK with index.html
    app.get("*", (req, res) => {
      const reqPath = req.path.replace(/\/$/, "") || "/";
      const routeFilePath = path.join(distPath, reqPath.slice(1), "index.html");
      const indexPath = path.join(distPath, "index.html");

      let rawHtml = "";
      if (reqPath !== "/" && fs.existsSync(routeFilePath)) {
        rawHtml = fs.readFileSync(routeFilePath, "utf-8");
      } else if (fs.existsSync(indexPath)) {
        rawHtml = fs.readFileSync(indexPath, "utf-8");
      } else {
        res.status(404).send("Application dist build missing.");
        return;
      }
      serveIndexHtml(req, res, rawHtml);
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`White Bridge Find server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
