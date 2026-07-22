export interface Guide {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  category: string;
  readTime: string;
  updatedDate: string;
  summary: string;
  author: string;
  keyTakeaways: string[];
  sections: {
    id: string;
    heading: string;
    content: string[];
    bulletPoints?: string[];
    calloutBox?: {
      title: string;
      text: string;
      type: 'warning' | 'tip' | 'info' | 'law';
    };
    tableData?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  relatedGuidesSlugs: string[];
}

export const LANDLORD_GUIDES: Guide[] = [
  {
    slug: 'how-to-screen-tenants',
    title: 'How to Screen Tenants: Complete Landlord Guide (2026)',
    h1: 'How to Screen Tenants: The Ultimate Landlord Screening Guide',
    metaDescription: 'Master the complete step-by-step tenant screening process for landlords. Learn how to pre-screen, verify income, check references, and comply with FCRA laws.',
    category: 'Landlord Best Practices',
    readTime: '10 min read',
    updatedDate: 'July 2026',
    author: 'Legal Compliance & Screening Desk',
    summary: 'Placing the right tenant is the single most important decision a landlord makes. This comprehensive guide covers pre-screening questions, written application standards, credit & criminal checks, reference calls, and legally sound leasing decisions.',
    keyTakeaways: [
      'Always establish consistent, written screening criteria before accepting applications to comply with Fair Housing laws.',
      'Require written applicant authorization before running credit or criminal background checks under the FCRA.',
      'Target a minimum gross income-to-rent ratio of 3x (30% rent burden) to reduce default risks.',
      'Verify landlord references by calling previous property owners—not just current ones who may want a difficult tenant out.',
      'Always issue a written Adverse Action Notice if denying an applicant based on credit or background reports.'
    ],
    sections: [
      {
        id: 'pre-screening',
        heading: 'Step 1: Effective Pre-Screening Before Showing the Property',
        content: [
          'Tenant screening starts long before a formal application is submitted. Effective pre-screening during the initial phone or email inquiry saves hours of wasted property showings by filtering out non-qualifying applicants early.',
          'When listing your rental unit, clearly state your non-negotiable lease parameters directly in the advertisement (e.g., minimum income requirement, move-in date range, pet policy, occupancy limits).'
        ],
        bulletPoints: [
          'What is your target move-in date? (Ensures alignment with unit availability)',
          'What is your total monthly household income? (Verifies 3x rent threshold upfront)',
          'How many occupants will be residing in the rental unit?',
          'Do you have pets or service animals?',
          'Are you comfortable consenting to a background and credit check for all adult occupants?'
        ],
        calloutBox: {
          title: 'Fair Housing Compliance Tip',
          text: 'Never ask questions related to protected classes under the Fair Housing Act, including race, color, national origin, religion, sex, familial status, or disability. Keep all pre-screening strictly focused on financial ability, move-in timing, and tenancy rules.',
          type: 'law'
        }
      },
      {
        id: 'written-application',
        heading: 'Step 2: Collect a Standardized Rental Application & Consent',
        content: [
          'A thorough rental application collects verified biographical details, employment history, residential references, and legal permissions required for screening.',
          'Require every adult applicant (aged 18 and older) who will reside in the home to fill out an individual application and sign a standalone FCRA Disclosure & Authorization release.'
        ],
        bulletPoints: [
          'Full legal name, date of birth, and Social Security Number (SSN) or ITIN',
          'Current and previous 3 years of residential addresses with landlord contact info',
          'Current employer, job title, supervisor name, and HR contact phone number',
          'Proof of income documentation (recent pay stubs, W-2s, or tax returns)',
          'Personal references and emergency contact details'
        ]
      },
      {
        id: 'verifying-financials',
        heading: 'Step 3: Verifying Income, Employment, & Financial Stability',
        content: [
          'Income claims on rental applications must always be independently cross-checked against official records. A common landlord mistake is accepting unverified pay stubs that can be easily generated online.',
          'Standard industry practice dictates that an applicant’s gross monthly household income should equal at least 300% (3x) of the monthly rental amount. For example, a $2,000/month apartment requires $6,000/month in verified gross income.'
        ],
        bulletPoints: [
          'Request 2 to 3 consecutive pay stubs showing year-to-date earnings.',
          'For self-employed applicants, request 2 years of Federal Tax Returns (1040) and recent bank statements.',
          'Call employer HR departments directly using verified main phone numbers found on company websites, rather than numbers supplied on the application.',
          'Review bank statements to confirm regular direct deposit transfers matching reported pay stubs.'
        ],
        calloutBox: {
          title: 'Watch Out For Fake Pay Stubs',
          text: 'Inspect pay stubs closely for arithmetic errors, mismatched fonts, missing tax withholdings (FICA/Medicare), or unrealistic rounded numbers, which often signal falsified income documents.',
          type: 'warning'
        }
      },
      {
        id: 'background-credit-check',
        heading: 'Step 4: Running Comprehensive Credit & Background Reports',
        content: [
          'Once income is confirmed, order FCRA-compliant tenant screening reports through an accredited consumer reporting agency. A thorough screening package includes three core components: credit report, criminal check, and eviction history search.',
          'A credit report reveals an applicant’s debt obligations, payment punctuality, collections, and bankruptcy filings. A criminal check searches county, state, and national registries for felony and misdemeanor records. An eviction search queries multi-state court dockets for past unlawful detainer actions.'
        ]
      },
      {
        id: 'reference-checks',
        heading: 'Step 5: Conducting Thorough Landlord Reference Checks',
        content: [
          'Previous landlords offer invaluable insight into a tenant’s actual living habits, payment reliability, and property care. However, exercise caution when speaking to an applicant’s current landlord.',
          'If a current landlord is struggling with an uncooperative or non-paying tenant, they may give a glowing review just to encourage the tenant to move out. Always call the prior landlord (2nd previous address) for an honest, unbiased account.'
        ],
        bulletPoints: [
          'Did the tenant pay rent on time every month?',
          'Did the tenant cause any property damage beyond normal wear and tear?',
          'Were there noise complaints or lease violations reported by neighbors?',
          'Did the tenant give proper written notice before moving out?',
          'Would you re-rent to this individual again in the future?'
        ]
      },
      {
        id: 'approval-denial',
        heading: 'Step 6: Approval, Security Deposit, & Adverse Action Notices',
        content: [
          'If the applicant meets all your written screening standards, send a formal Approval Letter specifying the required security deposit, lease start date, first month’s rent, and utility setup steps.',
          'If you reject an applicant—or accept them conditionally with a higher deposit or co-signer requirement—based on information in their credit or background report, federal law requires you to send a written Adverse Action Notice detailing the reporting agency contact info and dispute procedures.'
        ],
        calloutBox: {
          title: 'Legal Compliance Mandate',
          text: 'Failing to send an Adverse Action Notice when rejecting an applicant based on credit data can expose landlords to statutory damages under the FCRA. Always keep copies of sent notices in your leasing records.',
          type: 'tip'
        }
      }
    ],
    faq: [
      {
        question: 'How long does a proper tenant background check take?',
        answer: 'Automated credit and eviction reports generate in minutes. Complete screening—including employer and past landlord reference verification—typically takes 24 to 48 hours.'
      },
      {
        question: 'Can I charge an application fee to cover tenant screening costs?',
        answer: 'Yes, in most states landlords can charge an application fee to cover out-of-pocket screening report costs and administrative processing time. However, some states (like New York and California) cap maximum allowed application fee amounts.'
      },
      {
        question: 'What if an applicant does not have a Social Security Number?',
        answer: 'You can accept an Individual Taxpayer Identification Number (ITIN) or passport number to perform identity and screening checks for international students or non-US citizens.'
      }
    ],
    relatedGuidesSlugs: [
      'what-landlords-look-for-in-credit-reports',
      'red-flags-in-rental-applications',
      'tenant-screening-laws-by-state'
    ]
  },
  {
    slug: 'what-landlords-look-for-in-credit-reports',
    title: 'What Landlords Look for in Credit Reports: A Complete Analysis',
    h1: 'What Landlords Look for in Credit Reports (And What Red Flags to Avoid)',
    metaDescription: 'Discover what credit score, payment history, debt-to-income ratio, and collections landlords check on rental credit reports. Learn how to evaluate applicant credit profiles.',
    category: 'Credit Analysis',
    readTime: '8 min read',
    updatedDate: 'July 2026',
    author: 'Tenant Credit Risk Analytics',
    summary: 'A tenant credit report is much more than a single 3-digit score. Learn how experienced property managers evaluate payment history, credit utilization, past-due collections, bankruptcies, and debt balances to accurately predict rental payment reliability.',
    keyTakeaways: [
      'Focus on overall payment history and utility/housing trade lines rather than just the three-digit credit score number.',
      'Prior-landlord judgments and open utility collections are far more dangerous than medical debt collections.',
      'Evaluate credit utilization ratios—high credit card balances relative to limits indicate financial stress.',
      'Differentiate between soft inquiries (which do not hurt applicant scores) and hard inquiries.',
      'Require a qualified guarantor or higher security deposit if an applicant has limited credit history but strong verified income.'
    ],
    sections: [
      {
        id: 'beyond-credit-score',
        heading: '1. Beyond the Three-Digit Score: Reading the Full Credit Profile',
        content: [
          'Many novice landlords rely solely on a target credit score cutoff (e.g., "Must have 650+ credit"). However, two applicants with identical 620 credit scores can present completely different risk profiles.',
          'Applicant A might have a 620 score due to old medical debt collections while maintaining a flawless 5-year record of on-time rent and utility payments. Applicant B might have a 620 score due to active late rental payments, recent credit card charge-offs, and an eviction judgment. Evaluating the itemized trade lines is critical.'
        ]
      },
      {
        id: 'credit-score-ranges',
        heading: '2. Typical Landlord Credit Score Benchmarks',
        content: [
          'While credit requirements vary depending on market location and monthly rent cost, standard industry risk tiers are categorized as follows:'
        ],
        tableData: {
          headers: ['Credit Score Range', 'Risk Assessment', 'Landlord Recommended Action'],
          rows: [
            ['720 - 850 (Excellent)', 'Very Low Risk', 'Fast-track approval; standard security deposit.'],
            ['650 - 719 (Good)', 'Low to Moderate Risk', 'Standard approval; verify standard 3x income.'],
            ['600 - 649 (Fair)', 'Moderate to High Risk', 'Require 3.5x income, verify past 2 landlords, or ask for co-signer.'],
            ['Below 600 (Poor)', 'High Risk', 'Requires strong guarantor, higher deposit, or conditional lease terms.']
          ]
        }
      },
      {
        id: 'key-credit-factors',
        heading: '3. The 5 Core Elements Landlords Check First',
        content: [
          'When reviewing a TransUnion or multi-bureau credit report, systematically examine these five high-priority indicators:'
        ],
        bulletPoints: [
          'Payment History Consistency: Look for 30-, 60-, or 90-day late payment marks in the past 24 months.',
          'Housing-Related Collections: Unpaid balances owed to prior landlords, apartment complexes, or utility companies (electric, water, gas) indicate direct tenancy risk.',
          'Credit Utilization Rate: Total revolving balances divided by total credit limits. High utilization (>70%) suggests an applicant is living on credit.',
          'Bankruptcies & Judgments: Note whether bankruptcies are Chapter 7 (discharged) or Chapter 13 (active repayment plan), and verify discharge dates.',
          'Public Records & Tax Liens: Search for monetary court judgments or unpaid state/federal tax obligations.'
        ],
        calloutBox: {
          title: 'Distinguishing Debt Types',
          text: 'Medical debt and student loan debt are generally treated far more leniently by experienced property owners than past-due credit cards, auto loans, or landlord collections.',
          type: 'tip'
        }
      },
      {
        id: 'no-credit-history',
        heading: '4. How to Handle Applicants with No Credit History',
        content: [
          'Young professionals, recent immigrants, and recent college graduates often have empty or "thin" credit files. A thin credit file does not equal bad credit.',
          'To safely approve an applicant with limited credit history, request alternative proof of financial responsibility, such as automated bank verification, proof of consistent utility/cellular bill payments, or an approved co-signer/guarantor.'
        ]
      }
    ],
    faq: [
      {
        question: 'Does running a tenant credit check lower the applicant’s credit score?',
        answer: 'No. When landlords run tenant screening checks through authorized portals, it is classified as a "soft inquiry," which leaves no negative footprint on applicant credit scores.'
      },
      {
        question: 'Can a landlord reject an applicant for having a low credit score?',
        answer: 'Yes, provided that low credit score thresholds are part of the landlord’s uniform, non-discriminatory screening criteria and an Adverse Action Notice is issued.'
      }
    ],
    relatedGuidesSlugs: [
      'how-to-screen-tenants',
      'red-flags-in-rental-applications',
      'tenant-screening-laws-by-state'
    ]
  },
  {
    slug: 'how-to-read-criminal-background-check',
    title: 'How to Read a Criminal Background Check: Landlord Safety Guide',
    h1: 'How to Read a Criminal Background Check & Evaluate Applicant Records',
    metaDescription: 'Learn how to interpret criminal background check reports for tenant screening. Understand felonies vs. misdemeanors, HUD fair housing guidelines, and safety compliance.',
    category: 'Background Screening & Law',
    readTime: '9 min read',
    updatedDate: 'July 2026',
    author: 'Tenant Risk Management Advisory',
    summary: 'Evaluating criminal history reports requires balancing tenant safety with strict compliance with HUD guidelines and Fair Housing laws. Learn how to distinguish arrests from convictions, assess offense severity, and conduct individualized risk reviews.',
    keyTakeaways: [
      'HUD guidelines prohibit blanket bans on applicants with criminal records; each case requires individual assessment.',
      'Arrests without conviction cannot legally be used as the sole basis to deny housing under federal guidelines.',
      'Distinguish between minor offenses (traffic infractions) and crimes directly threatening tenant safety or property damage.',
      'Assess the time elapsed since the conviction and evidence of post-conviction rehabilitation.',
      'Ensure criminal screening standards are applied consistently across all prospective applicants.'
    ],
    sections: [
      {
        id: 'hud-guidelines',
        heading: '1. HUD Guidelines on Criminal Background Screening',
        content: [
          'In 2016, the U.S. Department of Housing and Urban Development (HUD) issued critical guidance regarding the application of Fair Housing Act standards to the use of criminal records in housing decisions.',
          'Because racial and ethnic minorities are arrested and convicted at rates disproportionate to their share of the population, blanket policies that reject any applicant with a criminal record have an unlawful discriminatory "disparate impact."'
        ],
        calloutBox: {
          title: 'Crucial Legal Rule: Arrests vs. Convictions',
          text: 'An arrest record proves only that someone was taken into custody—not that they committed a crime. Under HUD rules, denying housing based solely on an arrest record without conviction violates the Fair Housing Act.',
          type: 'warning'
        }
      },
      {
        id: 'evaluating-records',
        heading: '2. How to Read Criminal Report Terminology',
        content: [
          'Criminal background reports compile court records from county, state, and federal databases. Understanding common legal classifications is essential:'
        ],
        bulletPoints: [
          'Infractions: Minor non-criminal offenses (e.g., speeding tickets, parking violations). Should not impact housing decisions.',
          'Misdemeanors: Less severe criminal offenses (e.g., minor trespass, simple disorderly conduct). Typically punishable by fines or short jail time under 1 year.',
          'Felonies: Serious criminal offenses (e.g., grand theft, violent assault, burglary, drug distribution). Punishable by state prison sentences exceeding 1 year.',
          'Disposition Status: Indicates court resolution (e.g., Convicted, Dismissed, Acquitted, Deferred Adjudication, Pending Trial).'
        ]
      },
      {
        id: 'individualized-assessment',
        heading: '3. Conducting a Legally Sound "Individualized Assessment"',
        content: [
          'Rather than enforcing automatic rejections, landlords should evaluate applicant records using a 3-factor individualized assessment framework:'
        ],
        bulletPoints: [
          'Nature and Severity of the Offense: Does the crime involve physical violence, arson, property destruction, or drug manufacturing that directly threatens neighbor safety or property integrity?',
          'Time Elapsed: How much time has passed since the conviction or release from incarceration? (e.g., a 10-year-old misdemeanor is far less relevant than a recent offense).',
          'Evidence of Rehabilitation: Has the applicant maintained steady employment, clean tenancy records, community references, or completed counseling programs since the incident?'
        ]
      }
    ],
    faq: [
      {
        question: 'Are there any criminal convictions where automatic rejection is legally allowed?',
        answer: 'Yes. Federal housing law explicitly permits landlords to reject applicants convicted of illegal manufacture or distribution of controlled substances, or those listed on registered sex offender databases.'
      },
      {
        question: 'How far back do criminal background checks go?',
        answer: 'Most state background search databases cover 7 to 10 years of criminal history, though some federal records can go back further unless limited by state privacy laws.'
      }
    ],
    relatedGuidesSlugs: [
      'how-to-screen-tenants',
      'tenant-screening-laws-by-state',
      'red-flags-in-rental-applications'
    ]
  },
  {
    slug: 'tenant-screening-laws-by-state',
    title: 'Tenant Screening Laws by State: Landlord Compliance Guide (2026)',
    h1: 'Tenant Screening Laws by State: Landlord Legal & Fee Comparison',
    metaDescription: 'Compare state-by-state tenant screening laws, application fee caps, security deposit limits, background check restrictions, and adverse action rules for landlords.',
    category: 'State Laws & Legal',
    readTime: '12 min read',
    updatedDate: 'July 2026',
    author: 'Real Estate Legal Compliance Team',
    summary: 'Tenant screening rules vary significantly from state to state. Stay compliant with application fee limits, security deposit maximums, eviction record sealing statutes, and local fair-chance housing ordinances across major U.S. states.',
    keyTakeaways: [
      'State laws dictate maximum application fee amounts and whether itemized receipts are mandatory.',
      'Several states and cities enforce "Fair Chance in Housing" laws restricting when criminal history can be reviewed.',
      'Security deposit caps range from 1 month to 3 months of rent depending on state jurisdiction.',
      'Eviction record sealing laws in states like California and New York hide dismissed eviction records from public background checks.',
      'Always consult local municipal codes, which may be stricter than federal or state regulations.'
    ],
    sections: [
      {
        id: 'state-laws-overview',
        heading: '1. Why Local Landlord-Tenant Compliance is Essential',
        content: [
          'While federal laws like the Fair Housing Act and Fair Credit Reporting Act create a baseline for all U.S. property owners, state and municipal legislatures frequently pass stricter tenant protections.',
          'Violating state application fee limits or illegal screening procedures can result in civil fines, mandatory fee refunds, and statutory damages. Below is a state-by-state summary of key screening regulations.'
        ]
      },
      {
        id: 'state-comparison-table',
        heading: '2. Major State Tenant Screening Rules Comparison',
        content: [
          'Review state regulations regarding application fees, security deposit caps, and background check restrictions:'
        ],
        tableData: {
          headers: ['State', 'Max Application Fee', 'Security Deposit Cap', 'Key Screening Restriction'],
          rows: [
            ['California', 'Capped annually by CPI (~$62/applicant)', '1 Month Rent (Effective 2024)', 'Must provide copy of report upon request; mandatory itemized fee receipts.'],
            ['New York', 'Capped at $20 (or actual cost)', '1 Month Rent', 'Landlords cannot review or consider eviction court records; strict fee limits.'],
            ['Texas', 'No statutory cap (must be reasonable)', 'No state cap', 'Must provide written notice of selection criteria prior to taking application fee.'],
            ['Florida', 'No statutory cap', 'No state cap', 'Standard FCRA rules apply; no state-wide application fee cap.'],
            ['Illinois', 'No statutory cap', 'No state cap', 'Chicago Fair Chance ordinance restricts criminal checks prior to conditional offer.'],
            ['Washington', 'Capped at actual screening cost', 'No state cap', 'Landlord must disclose custom screening criteria and reporting agency info in advance.']
          ]
        }
      },
      {
        id: 'fair-chance-housing',
        heading: '3. Understanding "Fair Chance" and "Ban the Box" Housing Laws',
        content: [
          'A growing number of municipalities (including Seattle, San Francisco, Chicago, Minneapolis, and New York City) have enacted "Fair Chance in Housing" ordinances.',
          'These local laws prohibit landlords from inquiring about or running criminal background checks until after a conditional lease offer has been extended to the applicant based on income and credit qualification.'
        ],
        calloutBox: {
          title: 'Municipal Preemption Notice',
          text: 'City ordinances often impose harsher penalties than state statutes. Always verify whether your specific city or county enforces local fair-chance housing rules.',
          type: 'law'
        }
      }
    ],
    faq: [
      {
        question: 'Am I required to give a receipt for tenant application fees?',
        answer: 'In states like California, Washington, and New York, landlords are legally required to provide applicants with an itemized receipt showing out-of-pocket screening report fees.'
      },
      {
        question: 'Can I refuse to rent to someone if they refuse a background check?',
        answer: 'Yes. Landlords have the legal right to require background checks as part of standard screening criteria, provided this requirement is applied uniformly to all applicants.'
      }
    ],
    relatedGuidesSlugs: [
      'how-to-screen-tenants',
      'how-to-read-criminal-background-check',
      'what-landlords-look-for-in-credit-reports'
    ]
  },
  {
    slug: 'red-flags-in-rental-applications',
    title: 'Top 10 Red Flags in Rental Applications Landlords Must Spot',
    h1: 'Top 10 Red Flags in Rental Applications & How to Spot Tenant Scams',
    metaDescription: 'Learn how to spot tenant screening red flags, fake pay stubs, employment scams, false landlord references, and application inconsistencies before signing a lease.',
    category: 'Fraud Prevention',
    readTime: '9 min read',
    updatedDate: 'July 2026',
    author: 'Tenant Risk & Fraud Prevention Unit',
    summary: 'Tenant fraud and deceptive rental applications are on the rise. Learn how to spot fake pay stubs, fraudulent employment contacts, temporary phone numbers, mismatched addresses, and evasive applicant behaviors before approving a lease.',
    keyTakeaways: [
      'Watch for income documents with rounded figures, incorrect tax calculations, or missing withholdings.',
      'Beware of applicants offering to pay 6 to 12 months of rent upfront in cash to bypass background checks.',
      'Cross-check supervisor phone numbers against official employer websites rather than relying on application details.',
      'Verify prior landlord identity using public property ownership tax records to ensure it is not a friend pretending to be a landlord.',
      'Pay close attention to gaps in residential history or sudden rush pressures to move in immediately.'
    ],
    sections: [
      {
        id: 'top-10-red-flags',
        heading: 'The 10 Most Common Application Red Flags',
        content: [
          'Deceptive applicants often use sophisticated methods to bypass landlord background checks. Learning to identify these ten warning indicators protects your rental property from costly lease defaults and fraud.'
        ],
        bulletPoints: [
          '1. Inconsistent Bio Data: Mismatched Social Security Numbers, dates of birth, or spelling differences across pay stubs, ID, and application forms.',
          '2. Unusually High Pressure to Move In Immediately: Applicants claiming they must move in "tonight" or "tomorrow" often are fleeing an active eviction or notice to vacate.',
          '3. Willingness to Pay 6-12 Months Upfront in Cash: While tempting, offering large lump-sum cash payments upfront is a classic tactic used to bypass credit and criminal verification.',
          '4. Falsified or Edited Pay Stubs: Using online document generators to edit PDF pay stubs, inflation of net earnings, or missing state/federal tax withholdings.',
          '5. Fake Landlord References (Friends/Relatives): Applicants listing a friend or relative as a past landlord. Always verify property ownership via county tax records.',
          '6. Unverifiable Employer Contacts: Cell phone numbers or Google Voice numbers provided for HR managers. Always contact main corporate phone numbers directly.',
          '7. Unexplained Gaps in Residential History: Missing 1 or 2 years of address records often masks periods of eviction litigation or incarceration.',
          '8. Incomplete Application Information: Blank lines left for previous addresses, SSN digits, or supervisor contacts.',
          '9. Excessive Negative Credit Trade Lines with Landlords: Open collection accounts from utility companies or prior property management firms.',
          '10. Resistance to Consenting to Background Checks: Hesitation or refusal to sign FCRA background check authorization releases.'
        ],
        calloutBox: {
          title: 'Pro Landlord Verification Hack',
          text: 'To verify if a past landlord reference is legitimate, look up the rental property address on your county tax assessor’s website to confirm the legal owner name matches the contact person provided by the applicant.',
          type: 'tip'
        }
      },
      {
        id: 'preventing-rental-fraud',
        heading: 'How to Build a Fraud-Proof Tenant Screening Workflow',
        content: [
          'To minimize exposure to rental application fraud, enforce three simple operational verification controls:'
        ],
        bulletPoints: [
          'Require Government-Issued Photo Identification: Compare physical state driver’s licenses or passports directly against application details.',
          'Automate Background Verification: Use authorized online screening portals that pull direct credit bureau and court records rather than accepting self-reported applicant PDFs.',
          'Verify Bank Statement Deposits: Match reported net income on pay stubs against recurring direct deposit transaction entries on bank statements.'
        ]
      }
    ],
    faq: [
      {
        question: 'What should I do if I catch an applicant submitting false information?',
        answer: 'Falsifying information on a rental application is valid grounds for immediate rejection. Issue a written rejection letter stating failure to satisfy application accuracy standards.'
      },
      {
        question: 'Should I accept cash payments for security deposits?',
        answer: 'Avoid taking physical cash for security deposits or rent. Always require verifiable payment methods, such as cashier’s checks, ACH transfers, or official online tenant portals.'
      }
    ],
    relatedGuidesSlugs: [
      'how-to-screen-tenants',
      'what-landlords-look-for-in-credit-reports',
      'tenant-screening-laws-by-state'
    ]
  }
];
