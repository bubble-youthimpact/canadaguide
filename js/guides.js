/* ============ GUIDE DATA ============
   Guides are organised as TRACKS (a reader's goal) → STAGES (in the order people go through them) → GUIDES.
   The order of GUIDES below is the reading order inside each track.

   Each guide: id (letters, numbers, dashes), track, stage, title, summary, body.
   Body format:
     ## Heading          section heading (also listed in "On this page")
     ### Subheading
     Plain line          paragraph
     - item              bullet (indent 2 spaces per level to nest)
     1. item             numbered item
     [ ] item            checkbox the reader can tick (progress is tracked)
     > text              highlighted note
     | a | b |           table row (first row is the header)
     **bold**   [link text](https://...)   [another guide](#guide-ID)
   Every guide ends with "## Checklist" so readers always finish with clear actions.
*/
const TRACKS = [
  { id:"newcomer", name:"Moving to Canada", short:"Newcomers",
    desc:"Visas, your first weeks, and the path to permanent residence.",
    stages:[
      { id:"before",  name:"Before you arrive" },
      { id:"first",   name:"Your first weeks" },
      { id:"stay",    name:"Staying for good" }
    ]},
  { id:"founder", name:"Starting a business", short:"Founders",
    desc:"From choosing an idea to registering, paying taxes, and growing a Canadian company.",
    stages:[
      { id:"explore", name:"Explore opportunities" },
      { id:"plan",    name:"Plan and qualify" },
      { id:"setup",   name:"Set up legally" },
      { id:"money",   name:"Taxes and money" },
      { id:"grow",    name:"Run and grow" }
    ]}
];

const GUIDES = [

/* =================== MOVING TO CANADA =================== */

/* ---- Before you arrive ---- */
{ id:"visa", track:"newcomer", stage:"before", title:"Getting a Canadian Visa",
  summary:"Navigate the Canadian visa and immigration application process by determining your appropriate stream, gathering required supporting documents, and managing online submissions alongside biometric appointments through the IRCC portal.",
  body:`
## Required Materials
[ ] **Valid Passport & Passport Photos**
[ ] **Proof of Funds**: Recent bank statements proving you can support yourself.
[ ] **Purpose-Specific Documents**
  - **For Visitors**: Travel itinerary or an invitation letter.
  - **For Students**: An official school acceptance letter.
  - **For Workers**: A valid job offer letter (if applicable).

## Instructions
[ ] **1. Determine Your Stream**: Identify whether you need a Visitor Visa, Study Permit, Work Permit, or Permanent Residence (PR).
[ ] **2. Verify Eligibility**: Check requirements directly on the official IRCC website.
[ ] **3. Create an IRCC Portal Account**: Register on the secure Canadian government immigration portal.
[ ] **4. Submit and Pay**: Upload your digital documents and pay the application fees online.
[ ] **5. Submit Biometrics**: Wait for your instruction letter, then visit an official collection point to submit your fingerprints and photo.
[ ] **6. Await Decision & Travel**: Keep your approval documents safely organized alongside your passport for the border officer upon landing.

> Coming to start a business? Read [Entrepreneur Immigration Pathways](#guide-entrepreneur-pathways) for the founder-specific streams.

## Checklist
[ ] Confirm your specific visa category on the official IRCC website.
[ ] Gather your passport, photos, and proof of funds.
[ ] Create your online IRCC portal profile.
[ ] Upload documents, pay fees, and submit the application.
[ ] Complete your biometrics appointment within the required timeframe.
`},

{ id:"cost-of-living", track:"newcomer", stage:"before", title:"Cost of Living in Canada",
  summary:"Budget your first months in Canada with monthly estimates for housing, groceries, utilities, and transportation, and see how costs change from province to province.",
  body:`
Understanding monthly living expenses lets you budget before you arrive. If you are starting a business, it also tells you how much runway you need before the business becomes profitable.

## Monthly Expense Estimates (CAD)
| Expense Category | Single Person (Est. Monthly) | Family of 4 (Est. Monthly) | Key Notes |
|---|---|---|---|
| Housing & Rent | $1,400 – $2,500 | $2,400 – $4,000 | Varies heavily by region (Toronto/Vancouver are highest). |
| Groceries | $400 – $650 | $1,200 – $1,600 | Cooking at home helps keep food budgets manageable. |
| Utilities & Internet | $200 – $350 | $350 – $550 | Includes heating (higher in winter), electricity, and Wi-Fi. |
| Transportation | $150 – $400 | $300 – $800 | Public transit pass vs. car ownership (gas + insurance). |
| **Total Est. Monthly** | **$2,150 – $3,900** | **$4,250 – $6,950** | Excludes business overhead & personal emergency funds. |

## Key Tips for Newcomers
- **Regional Differences**: Living costs in major metro hubs (Toronto, Vancouver) are significantly higher than in the prairie provinces (Alberta, Saskatchewan, Manitoba) or Atlantic Canada.
- **Taxes**: Posted prices in stores do not include sales tax (GST/PST/HST), which adds 5% to 15% depending on the province.

## Checklist
[ ] Estimate your monthly budget for your household size using the table above.
[ ] Compare costs in the cities or provinces you are considering.
[ ] Add 5% to 15% sales tax to any shopping estimates.
[ ] Set aside an emergency fund on top of your monthly budget.
`},

/* ---- Your first weeks ---- */
{ id:"sin", track:"newcomer", stage:"first", title:"Getting a Social Insurance Number (SIN)",
  summary:"Obtain your essential 9-digit Social Insurance Number (SIN) for tax and employment purposes by visiting a Service Canada Centre with your original passport and valid immigration status documents.",
  body:`
> Do this first. Banks and employers will both ask for your SIN.

## Required Materials
[ ] **Primary Identity Document**: Valid Passport.
[ ] **Status Document** (one of the following)
  - Permanent Resident Card or COPR.
  - Valid Work Permit.
  - Valid Study Permit stating you are authorized to work.

## Instructions
[ ] **1. Pick Your Application Method**
  - **In Person (Recommended/Fastest)**: Visit a local Service Canada Centre for same-day service.
  - **Online**: Submit digital scans via the Service Canada portal.
[ ] **2. Present Documents**: Hand your original passport and immigration documents to the Service Canada officer.
[ ] **3. Secure Your Number**: Take the printed paper SIN confirmation document and store it securely. Never share this number unless legally required.
[ ] **4. Provide to Employer**: Share your 9-digit SIN with your employer when hired so they can properly process payroll taxes.

## Checklist
[ ] Locate the nearest Service Canada Centre to your location.
[ ] Gather your original passport and valid immigration permit.
[ ] Attend Service Canada in person (or submit clear copies online).
[ ] Safely store your paper SIN confirmation sheet at home.
[ ] Provide the number to your employer's HR/Payroll department.
`},

{ id:"phones", track:"newcomer", stage:"first", title:"Phone & Mobile Plans",
  summary:"Navigate setting up a cost-effective Canadian mobile plan by comparing budget-friendly carrier tiers, preparing essential identification, and securing a Bring Your Own Device (BYOD) option.",
  body:`
## Required Materials
[ ] **Government-issued ID**: Passport (highly recommended).
[ ] **Legal Status Document**: Confirmation of Permanent Residence (COPR), work permit, or study permit.
[ ] **Proof of Canadian Address**: A rental agreement or a utility bill (though some carriers just need you to write down your address).
[ ] **An Unlocked Phone**: Your current phone brought from home.

## Instructions
[ ] **1. Choose Your Brand Tier**
  - **Premium**: Rogers, Bell, Telus (fastest, most expensive).
  - **Budget/Mid-Tier**: Fido, Virgin Plus, Koodo, Freedom Mobile (identical coverage to premium, much cheaper).
[ ] **2. Request a BYOD Plan**: Walk into a carrier kiosk and specifically ask for a "Bring Your Own Device" (BYOD) postpaid monthly plan. This avoids expensive upfront phone financing.
[ ] **3. Set Up Voicemail Immediately**: Follow the on-screen or audio prompts to set up your voicemail inbox. Canadian doctors and businesses rely heavily on voice messages to contact you.

## Checklist
[ ] Check if your current phone is unlocked before leaving home.
[ ] Compare monthly plans online for Fido, Virgin Plus, Koodo, and Freedom.
[ ] Visit a store/kiosk with your ID, status document, and address.
[ ] Insert your new Canadian SIM card and test your data connection.
[ ] Set up your voicemail greeting.
`},

{ id:"banking", track:"newcomer", stage:"first", title:"Banking",
  summary:"Establish Canadian banking by choosing a major financial institution, unlocking newcomer packages to waive monthly fees, and setting up essential accounts alongside a beginner credit card to build credit history.",
  body:`
## Required Materials
[ ] **Primary ID**: Passport.
[ ] **Legal Status Document**: PR card/COPR, Work Permit, or Study Permit.
[ ] **Social Insurance Number (SIN)**: Required by banks for tax purposes if your account earns interest. See [Getting a SIN](#guide-sin).

## Instructions
[ ] **1. Select a "Big Five" Bank**: Choose from RBC, TD Canada Trust, Scotiabank, BMO, or CIBC.
[ ] **2. Ask for the Newcomer Package**: Explicitly request their dedicated "Newcomer Package" to have all monthly banking fees waived for your first 1 to 2 years.
[ ] **3. Open Three Key Components**
  - **Chequing Account**: For everyday spending, salary deposits, and bill payments.
  - **Savings Account**: For emergency funds or financial goals.
  - **Credit Card**: Request a beginner credit card (usually approved without Canadian credit history under newcomer programs) to start building your Canadian credit score.
[ ] **4. Build Credit Responsibly**: Use the credit card for small, daily purchases and pay the balance off in full every single month.

## Checklist
[ ] Obtain your SIN from Service Canada first.
[ ] Research which of the Big Five banks has a branch closest to your housing.
[ ] Book an appointment online with a newcomer financial advisor at your chosen bank.
[ ] Attend the meeting with your passport, immigration document, and SIN.
[ ] Download the bank's mobile app and set up your online banking password.
`},

{ id:"healthcare", track:"newcomer", stage:"first", title:"Healthcare",
  summary:"Navigate the transition to Canadian healthcare by applying immediately for your provincial health card, managing any required private coverage waiting periods, and identifying local emergency and walk-in care options.",
  body:`
## Required Materials
[ ] **Identification**: Passport.
[ ] **Legal Status Document**: PR Card/COPR, Work Permit, or Study Permit.
[ ] **Proof of Residency**: A lease agreement, utility bill, or driver's license matching your current province.
[ ] **Private Travel/Expatriate Medical Insurance**: Only required if landing in a province with a waiting period.

## Instructions
[ ] **1. Apply Immediately**: File an application for your specific provincial health card (e.g., OHIP in Ontario, MSP in British Columbia, AHCIP in Alberta) the week you arrive.
[ ] **2. Manage the Waiting Period**: Check your province's rules. If there is a waiting period (like the 3-month wait in BC or Quebec), make sure you purchase private insurance to bridge the gap.
[ ] **3. Navigate Care Options**
  - **For Emergencies**: Go straight to a hospital Emergency Room (ER) or dial 911.
  - **For Non-Emergencies**: Look for a local Walk-In Clinic or dial 811 to speak to a registered nurse via provincial telehealth.

## Checklist
[ ] Verify if your landing province has a 3-month healthcare waiting period.
[ ] (If applicable) Purchase private health insurance for your first 90 days.
[ ] Submit your application for your provincial health card online or at a designated provincial office.
[ ] Save the address of the nearest hospital ER and walk-in clinic to your phone.
[ ] Look into your employer's extended private health benefits for dental and vision care.
`},

/* ---- Staying for good ---- */
{ id:"student-to-pr", track:"newcomer", stage:"stay", title:"From Student to Permanent Resident",
  summary:"Map the path from international student to Post-Graduation Work Permit, Canadian work or business experience, and Permanent Residence through Express Entry, PNP, or entrepreneur streams.",
  body:`
Transitioning from an international student or temporary resident to a Permanent Resident (PR) and business owner requires a clear strategy.

## The Step-by-Step Transition
1. International Student
2. Post-Graduation Work Permit (PGWP)
3. Gain Canadian Experience / Launch a Business
4. Apply for PR (Express Entry / PNP / Entrepreneur Streams)
5. Permanent Resident Status

## 1. Study Permit & Graduation
- **Post-Graduation Work Permit (PGWP)**: Upon graduating from an eligible Designated Learning Institution (DLI), students can apply for an open work permit valid for up to 3 years.

## 2. Gaining Experience & Launching a Business
- **C11 Entrepreneur Work Permit**: Allows entrepreneurs and self-employed individuals to operate their business in Canada if it creates significant economic, social, or cultural benefits.
- **Start-up Visa (SUV) Program**: Connects immigrant entrepreneurs with private sector investors (angel groups or venture capital funds) to establish businesses in Canada. Check its current status first; see [Entrepreneur Immigration Pathways](#guide-entrepreneur-pathways).

## 3. Securing Permanent Residency
- **Express Entry (Canadian Experience Class, CEC)**: A points-based system evaluating age, education, language skills (IELTS/CELPIP/TEF), and skilled work experience.
- **Provincial Nominee Program (PNP) Entrepreneur Streams**: Many provinces (e.g., BC PNP, OINP, AAIP) have streams tailored for foreign business owners who invest local capital and create local jobs.

## Checklist
[ ] Confirm your school is an eligible Designated Learning Institution (DLI).
[ ] Apply for your Post-Graduation Work Permit after you graduate.
[ ] Build Canadian work experience or launch your business.
[ ] Take an approved language test (IELTS, CELPIP, or TEF).
[ ] Choose your PR route: Express Entry, a PNP, or an entrepreneur stream.
`},

/* =================== STARTING A BUSINESS =================== */

/* ---- Explore opportunities ---- */
{ id:"growing-industries", track:"founder", stage:"explore", title:"Growing Industries in Canada",
  summary:"Where demand is growing: technology and AI, healthcare and senior services, construction and housing, and logistics, with niche opportunities in each.",
  body:`
Canada's economy is heavily shaped by federal housing targets, clean energy transitions, labour shortages, and an aging population. Understanding these drivers lets founders enter sectors backed by market demand and municipal or federal grants.

## Technology & AI Integration
- **Market Drivers**: Major tech hubs in Toronto-Waterloo, Vancouver, Montreal, and Calgary are supported by research institutions, venture capital, and tax credits (such as the SR&ED tax incentive).
- **Niche Opportunities**
  - **B2B SaaS & Automation**: Software that helps traditional small businesses (e.g., HVAC firms, local logistics, dental offices) automate admin workflows, client booking, or billing.
  - **Cybersecurity Solutions**: Mid-sized firms face growing requirements to protect consumer data, creating demand for managed security service providers (MSSPs).
  - **AI Operational Integration**: Consulting services that help non-tech businesses adopt AI tools for customer service, inventory forecasting, and content management.

## Healthcare & Senior Services
- **Market Drivers**: Over 20% of Canada's population is aged 65 or older, putting pressure on public healthcare and opening space for private support services.
- **Niche Opportunities**
  - **Home Healthcare Agencies**: Non-medical home care (meal preparation, companionship, mobility support) and licensed nursing care agencies.
  - **Senior Living Support**: Services that retrofit homes for aging in place (installing ramps, walk-in tubs, smart monitoring systems).
  - **Digital Health Software**: Remote patient monitoring, electronic health record (EHR) integrations, and medical appointment scheduling platforms.

## Construction, Housing & Infrastructure
- **Market Drivers**: Severe national housing shortages have led federal and provincial governments to speed up housing starts, fast-track permits, and fund green retrofits.
- **Niche Opportunities**
  - **Subcontracting & Specialized Trades**: Framing, electrical, plumbing, HVAC, and drywall. Many trades require provincial trade certification or Red Seal licensing.
  - **Sustainable & Modular Construction**: Off-site prefab housing, net-zero retrofits, energy audits, and green insulation installation.
  - **Building Materials Supply & Import**: Sourcing construction materials, fixtures, or finishing supplies to ease domestic supply chain bottlenecks.

## Logistics, Warehousing & Cold Chain
- **Market Drivers**: The vast distances between urban centres and regional hubs require constant supply chain support, reinforced by steady growth in e-commerce and imported food distribution.
- **Niche Opportunities**
  - **Last-Mile Delivery**: Urban and suburban delivery networks serving major retailers or local food distributors.
  - **Cold Storage & Micro-Fulfillment**: Temperature-controlled warehousing for imported foods, pharmaceuticals, and perishable goods near major transport nodes (e.g., Peel Region in Ontario or Surrey in BC).
  - **Freight Brokerage**: Digital freight matching that connects independent truckers with commercial shippers.

## Checklist
[ ] Pick the one or two sectors that match your skills and experience.
[ ] Check whether your trade or profession needs provincial certification or Red Seal licensing.
[ ] Look for federal or municipal grants tied to your sector.
[ ] List three niche ideas and the customers each one would serve.
`},

{ id:"franchising", track:"founder", stage:"explore", title:"Franchising Opportunities",
  summary:"Lower your risk with a proven model: the top franchise sectors in Canada, typical fees, investment and royalties, and why franchises are easier to finance for newcomers.",
  body:`
Franchising reduces market entry risk by providing a proven business model, established brand recognition, structured staff training, and pre-negotiated supplier relationships.

## Top Commercial Franchise Sectors
- **Quick Service Restaurants (QSR)**: Popular across suburban plazas, transportation hubs, and university towns. Brands range from international chains to growing regional concepts.
- **Commercial & Residential Services**: Cleaning, carpet restoration, pest control, handyman services, and home painting. These lower-overhead franchises often run from mobile vans rather than storefronts.
- **Children's Education & Childcare**: Early learning centres, tutoring (STEM, math, coding), and daycare operations, with demand reinforced by government childcare subsidies.
- **Automotive Maintenance**: Quick-lube centres, auto detailing, tire changes, and windshield repair.

## Investment Requirements & Financials
| Cost | Typical Range |
|---|---|
| Franchise Fee | $20,000 to over $100,000 CAD, depending on the brand |
| Initial Capital Investment | $100,000 CAD (home-based services) to $500,000 – $1,500,000+ CAD (restaurants, daycares) |
| Ongoing Royalties | 4% to 8% of gross monthly sales, plus 1% to 3% for national advertising |
| Liquidity Check | Proof of liquid cash, often 30–50% of the total project cost, plus a baseline net worth |

## Key Advantages for Immigrants
- **Easier Bank Financing**: Canada's "Big Five" banks have franchise lending departments that offer up to 70–80% financing on approved franchise models under government-backed loan programs like the Canada Small Business Financing Program (CSBFP).
- **Built-In Compliance**: Operating manuals cover Canadian labour laws, health and safety standards, and tax collection, lowering the learning curve for newcomers.

## Checklist
[ ] Choose a franchise sector that fits your budget and experience.
[ ] Confirm you meet the franchisor's liquid cash and net worth requirements.
[ ] Compare the franchise fee, total setup cost, and royalties of two or three brands.
[ ] Ask a Big Five bank's franchise lending team about CSBFP-backed financing.
`},

{ id:"ecommerce", track:"founder", stage:"explore", title:"E-Commerce & Online Businesses",
  summary:"Test products without a long commercial lease: e-commerce models that work in Canada, fulfillment through Amazon FBA or 3PLs, keeping shipping costs down, and collecting sales tax automatically.",
  body:`
E-commerce lets new founders test products and build a brand without the heavy overhead of long-term commercial leases.

## Key Models & Opportunities
- **Specialized Imports & Cultural Goods**: Sourcing unique packaged foods, fashion, home decor, or beauty products from home countries to serve Canada's multicultural market.
- **B2B Digital Services Agencies**: Offering services remotely to Canadian and global clients, such as digital marketing, custom software development, translation/localization, graphic design, and virtual bookkeeping.
- **Private Labeling & Niche E-Commerce**: Developing consumer brands for specific Canadian lifestyles (e.g., outdoor equipment, eco-friendly household goods, pet accessories).

## Fulfillment & Shipping
- **Amazon FBA Canada**: Store inventory in Canadian fulfillment centres for access to local Prime shipping.
- **Third-Party Logistics (3PL)**: Partner with local 3PL providers (in logistics hubs like Mississauga, Brampton, Richmond, or Calgary) to handle storage, pick-and-pack, and shipping.
- **Canadian Shipping Realities**: High domestic postal and courier rates require careful pricing. Successful stores use shipping aggregators (e.g., Stallion Express, Chit Chats) to get discounted Canada Post, UPS, and FedEx rates.

## Payments & Sales Tax
- Set up payment processors (Shopify Payments, Stripe, PayPal) with Canadian tax settings to automatically collect GST, HST, or PST based on the customer's shipping address. See [GST/HST & Sales Tax](#guide-gst-hst).
- Importing goods to sell? You also need a CBSA import/export account. See [CRA Business Number & Tax Accounts](#guide-cra-accounts).

## Checklist
[ ] Pick your model: imports, digital services, or a private-label brand.
[ ] Decide between Amazon FBA and a local 3PL for fulfillment.
[ ] Get quotes from a shipping aggregator and build shipping into your prices.
[ ] Turn on automatic Canadian sales tax collection in your payment platform.
`},

{ id:"success-stories", track:"founder", stage:"explore", title:"Immigrant Entrepreneur Success Stories",
  summary:"Real examples of immigrants who built successful Canadian businesses, from a single shawarma shop to a fintech company, and the lessons behind each one.",
  body:`
Real stories show future founders what is possible with dedication and community support.

## Mohamad Fakih: Paramount Fine Foods
- **The Story**: After arriving in Canada from Lebanon, Mohamad bought a struggling shawarma shop in Mississauga, Ontario. Through high quality, strong community involvement, and business sense, he grew it into a global Middle Eastern halal restaurant chain.
- **Key Takeaway**: Community engagement and high standards can scale a small food spot into an international brand.

## Hamed Abbasi & Masood Mohajeri: Plooto
- **The Story**: Immigrants who launched a B2B financial technology company that streamlines payment workflows for small and medium businesses across North America.
- **Key Takeaway**: Spotting the friction points local businesses face can unlock big tech opportunities.

## The Local Community Entrepreneur
- **The Story**: Many newcomers start with specialty grocery stores, catering companies, or professional consulting agencies that serve both their local diaspora and the broader Canadian population.
- **Key Takeaway**: Start by serving a niche market you understand well, then expand as your confidence grows.

## Checklist
[ ] Write down a niche market you understand well.
[ ] Note one friction point local businesses or customers face that you could solve.
[ ] Find one local community group or event where your first customers gather.
`},

/* ---- Plan and qualify ---- */
{ id:"entrepreneur-pathways", track:"founder", stage:"plan", title:"Entrepreneur Immigration Pathways",
  summary:"Compare the immigration routes for foreign founders, from provincial entrepreneur streams and C11 or ICT work permits to the current status of the Start-Up Visa, plus where to find support.",
  body:`
If you want to move to Canada, a business plan alone won't grant you entry. You must apply through a business immigration stream. If you will run the business completely remotely, you can skip this guide.

## Provincial Nominee Program (PNP) Entrepreneur Streams
- **How it works**: Most provinces (e.g., British Columbia, Saskatchewan, Manitoba, Nova Scotia) operate dedicated entrepreneur streams. You apply to the province with a business plan, receive a work permit to establish the company, fulfill a Business Performance Agreement, and then receive a nomination for Permanent Residence (PR).
- **Typical Criteria**
  - **Personal Net Worth**: $300,000 to $600,000+ CAD (verified by third-party accounting firms).
  - **Minimum Equity Investment**: $150,000 to $200,000+ CAD invested directly into the business.
  - **Active Management**: You must actively manage the business day-to-day from inside the province.
  - **Job Creation**: Must create at least 1 to 2 full-time jobs for Canadian citizens or permanent residents.

## Federal Work Permit Routes for Founders
- **C11 Significant Benefit Work Permit**: Allows self-employed individuals or business owners to obtain an LMIA-exempt work permit if they can prove their business will create significant economic, social, or cultural benefit to Canada (e.g., job creation, regional economic development, innovation). Founders generally must own at least 50% of the business.
- **Intra-Company Transferee (ICT)**: If you already own an active, established business outside Canada, you can open a Canadian parent company, branch, or subsidiary and transfer yourself as an executive or senior manager on a specialized work permit.

## Federal Start-Up Visa (SUV)
The SUV program is designed for innovative, scalable tech or product businesses. You must secure a Letter of Support from an accredited Canadian angel group, venture capital fund, or incubator.

> **Current Status Notice**: The Start-Up Visa program has gone through major operational pauses and annual application caps set by Immigration, Refugees and Citizenship Canada (IRCC). Existing applications continue to process, but prospective founders should treat provincial (PNP) or work permit streams (like C11 or ICT) as their primary options.

## Where to Get Support
- **Business Development Bank of Canada (BDC)**: A Crown corporation offering small business loans, working capital financing, and advisory services for growth-stage businesses.
- **Immigrant Settlement Agencies**: Non-profit settlement organizations (such as ACCES Employment, COSTI, S.U.C.C.E.S.S., and ISSofBC) run "Entrepreneurship for Newcomers" workshops covering Canadian business culture, legalities, and local networking events.
- For loans and grants, see [Funding Your Business](#guide-funding).

## Checklist
[ ] Decide whether you will relocate to Canada or run the business remotely.
[ ] Compare the PNP entrepreneur streams in the provinces you are considering.
[ ] Check your net worth and planned investment against each stream's criteria.
[ ] If you own a business abroad, ask an immigration professional about the ICT route.
[ ] Book a free "Entrepreneurship for Newcomers" workshop at a settlement agency.
`},

{ id:"business-planning", track:"founder", stage:"plan", title:"Business Planning",
  summary:"Define your strategy with Lean Canvas, Business Model Canvas, SWOT and PESTLE, then build a bank-ready business plan, SMART goals, and a risk assessment.",
  body:`
> **Goal**: Define your strategy, operational framework, and risk mitigation plan. Immigration streams and banks will both ask to see this plan.

## 1. Choose a Planning Framework
- **Lean Canvas (Early-Stage Startups)**
  - Draft a 1-page document detailing 9 key building blocks: Problem, Solution, Unique Value Proposition (UVP), Unfair Advantage, Customer Segments, Key Metrics, Channels, Cost Structure, and Revenue Streams.
  - Use this to test assumptions quickly before committing capital.
- **Business Model Canvas (Established Workflows)**
  - Detail Key Partners (local suppliers, software vendors), Key Activities (production, delivery), Key Resources (staff, IP), Channels (e-commerce, physical storefronts), and Revenue Streams (one-time sales, subscriptions).
- **SWOT & PESTLE Analysis**
  - **SWOT**: List internal Strengths (e.g., proprietary software) and Weaknesses (e.g., limited budget) alongside external Opportunities (e.g., underserved market gap) and Threats (e.g., new competitors).
  - **PESTLE**: Analyze external factors affecting your business in Canada: Political (provincial regulations), Economic (inflation, interest rates), Sociocultural (bilingual market demographics), Technological (cloud tools), Legal (PIPEDA, employment standards), and Environmental (sustainability/carbon footprint policies).

## 2. Draft a Traditional Business Plan (For Bank Loans & Grants)
- **Executive Summary**: Summarize your mission, leadership team, product/service, and financial ask.
- **Company Description & Market Analysis**: Define your target demographic in Canada, industry size, and direct/indirect competitors.
- **Operations Plan**: Detail location, equipment, supply chain logistics, and staffing models.
- **Financial Projections**: Prepare 3-to-5-year financial statements including an Income Statement (P&L), Cash Flow Forecast, and Balance Sheet. Banks (e.g., RBC, TD, Scotiabank, BDC) require these for financing approvals.

## 3. Set SMART Goals
- Structure goals using the Specific, Measurable, Achievable, Relevant, and Time-bound framework.
- **Example**: "Increase sales of Product X in the Greater Vancouver Area by 15% (Measurable) over the next 90 days (Time-bound) by running targeted LinkedIn ad campaigns (Achievable/Relevant)."

## 4. Assess Your Risks
- **Identify Hazards**: Categorize risks into operational (e.g., key supplier failure), financial (e.g., cash flow shortfall), or regulatory (e.g., tax/compliance changes).
- **Create Mitigation Strategies**: Establish backup suppliers, maintain a 3-to-6-month cash buffer, and review compliance updates quarterly.

## Checklist
[ ] Fill in a one-page Lean Canvas for your idea.
[ ] Run a SWOT and PESTLE analysis for the Canadian market.
[ ] Write the full business plan with 3-to-5-year financial projections.
[ ] Set three SMART goals for your first 90 days.
[ ] List your top risks and a backup plan for each.
`},

{ id:"funding", track:"founder", stage:"plan", title:"Funding Your Business",
  summary:"Compare bootstrapping, investors, crowdfunding, newcomer loans, microloans, and government grants, then get investor-ready with a pitch deck and a due-diligence data room.",
  body:`
> **Goal**: Choose the right capital strategy and prepare for financial scrutiny.

## 1. Your Capital Options
- **Bootstrapping**: Use personal savings and early client revenue to fund growth, keeping 100% equity ownership and decision-making control.
- **Angel Investors**: Pitch high-net-worth individuals for early-stage capital in exchange for equity or convertible debt notes.
- **Venture Capital (VC)**: Target venture capital firms when building high-growth, highly scalable technology startups that need large investments to capture market share quickly.
- **Crowdfunding**: Use rewards-based or pre-order platforms (e.g., Kickstarter, Indiegogo) to validate consumer demand and raise capital at the same time.

## 2. Loans for Newcomers
Startup loans in Canada are much easier to access through government-backed programs and specialized non-profits.
- **BDC Newcomer Entrepreneur Loan**: From the Business Development Bank of Canada (BDC), offering repayable financing between $25,000 and $50,000 for permanent residents or protected persons who have been in Canada for less than 3 years.
- **Futurpreneur Canada (Newcomer Program)**: For entrepreneurs aged 18–39 who have lived in Canada for less than 60 months and have limited credit history. Offers startup loans paired with 2 years of 1-on-1 mentorship, with no collateral required.
- **Canada Small Business Financing Program (CSBFP)**: The federal government guarantees up to 85% of loans issued by traditional banks for equipment, leasehold improvements, and working capital, up to $1.15 million.
- **Windmill Microlending**: Low-interest microloans up to $15,000 for foreign-trained immigrants looking to restart their professional practice or launch a business requiring Canadian accreditation.
- **ACORN Canada / Community Microfinance**: Local regional funds offering low-barrier microloans ($1,000 – $10,000) for newcomer micro-entrepreneurs.

## 3. Grants & Subsidies (Non-Repayable)
- **CanExport Grants**: Cover up to 50% of eligible costs (up to $50,000) for businesses exporting products or building an international market presence.
- **Industrial Research Assistance Program (NRC IRAP)**: Non-repayable grants and funding support for small and medium businesses developing innovative technology.
- **Wage Subsidies (e.g., Canada Summer Jobs)**: Regional government incentives that refund 50%–75% of wages when hiring eligible Canadian workers or newcomers.
- **Regional Innovation Funds**: Provincial and regional programs for businesses in priority sectors.

## 4. Get Investor-Ready
- **Investor Pitch Deck**: Design a 10-to-15 slide presentation covering:
  1. Problem & Market Opportunity
  2. Product/Solution & Demo
  3. Market Size (TAM, SAM, SOM)
  4. Business & Revenue Model
  5. Traction & Key Metrics
  6. Competitive Advantage
  7. Financial Forecasts (3–5 years)
  8. Team Bios
  9. Capital Requirement & Use of Funds
- **Data Room for Due Diligence**: Organize a secure cloud folder with clean financial records, incorporation documents, cap tables, IP ownership records, key customer contracts, and tax filings for prospective investors to review.

## Checklist
[ ] Decide how much you need and whether to bootstrap, borrow, or raise equity.
[ ] Check your eligibility for the BDC, Futurpreneur, and CSBFP programs.
[ ] Look for grants that match your sector (CanExport, IRAP, regional funds).
[ ] Build a 10-to-15 slide pitch deck if you plan to approach investors.
[ ] Set up a data room with your financial and legal documents.
`},

/* ---- Set up legally ---- */
{ id:"business-structure", track:"founder", stage:"setup", title:"Choosing a Business Structure",
  summary:"Compare sole proprietorships, partnerships, and corporations, decide between federal and provincial incorporation, and learn which options are open to non-residents.",
  body:`
In Canada, there are three primary business structures (plus cooperatives). The right one depends on your tolerance for risk, investment scale, tax strategy, and immigration plans.

> **Important Note for Immigrants**: Unlike the United States, Canada does not have a standard "LLC" (Limited Liability Company) structure. The Canadian equivalent for liability protection is a Corporation.

## The Three Structures at a Glance
| Structure | Ownership | Legal Liability | Tax Implications | Best For |
|---|---|---|---|---|
| Sole Proprietorship | 1 person | Unlimited personal liability (personal assets at risk) | Business income reported on personal tax return | Freelancers, low-risk micro-businesses, testing an idea |
| Partnership | 2+ partners | Unlimited joint/several liability (unless formed as LP or LLP) | Income flows through to partners' individual returns | Co-founders, professional services (lawyers, accountants) |
| Corporation | 1+ shareholders | Limited liability (shareholders generally not personally liable) | Separate tax entity; lower corporate tax rates | Businesses seeking growth, funding, or higher risk management |

## Sole Proprietorship
An unincorporated business owned and operated by one person. There is no legal distinction between the owner and the business.
- **Pros**
  - **Simplicity & Low Cost**: Fastest and least expensive option to set up; minimal regulatory filing.
  - **Tax Simplicity**: Net income or loss is reported directly on your personal T1 income tax return (Form T2125). Business losses can offset other personal income.
  - **Full Control**: Direct authority over all operational and financial decisions.
- **Cons**
  - **Unlimited Personal Liability**: You are personally responsible for all business debts, lawsuits, and contractual obligations. Personal assets (home, savings, car) can be seized to satisfy business debts.
  - **Financing Limitations**: Banks and investors rarely grant substantial commercial credit or venture capital to sole proprietorships.
  - **Immigration Limitations**: Generally unsuitable for business immigration pathways (such as C11, ICT, or PNP Entrepreneur streams) that require a formal corporate equity structure.

## Partnership
Established when two or more individuals or corporations carry on a business together with a view to profit.
- **Main Types**
  - **General Partnership**: All partners share management duties and are jointly and severally liable for all debts and liabilities of the business.
  - **Limited Partnership (LP)**: General partner(s) with full liability and management duties, plus limited partners whose liability is restricted to their capital contribution (investors without operational control).
  - **Limited Liability Partnership (LLP)**: Typically reserved for licensed professionals (lawyers, CPAs, physicians), where partners are protected from negligence or malpractice claims caused by other partners.
- **Pros**: Shared startup capital, combined expertise, and straightforward tax pass-through to personal tax returns.
- **Cons**: Unlimited personal liability for general partners; potential for partner conflicts (requires a comprehensive Partnership Agreement).

## Corporation
A distinct legal entity separate from its shareholders, directors, and officers. It can own property, enter contracts, incur debt, and sue or be sued.
- **Pros**
  - **Limited Liability Protection**: Shareholders are generally not personally liable for the debts or liabilities of the corporation beyond their investment.
  - **Lower Corporate Tax Rates**: Access to Canada's Small Business Deduction (SBD), often around 9% to 12.2% combined federal and provincial rate on the first $500,000 CAD of active business income, depending on the province.
  - **Capital Raising & Equity Distribution**: Ability to issue shares to investors, co-founders, or key employees.
  - **Immigration Alignment**: Essential for pathways like PNP Entrepreneur Streams, ICT, or C11 work permits, where ownership is proven via share certificates.
- **Cons**
  - **Higher Cost & Maintenance**: Requires legal/incorporation fees, annual corporate filings, detailed minute books, and separate annual corporate tax returns (T2).
  - **Complexity**: Strict administrative rules under corporate law regarding board resolutions, shareholder meetings, and director duties.

## Federal vs. Provincial Incorporation
| Feature | Federal Incorporation | Provincial Incorporation |
|---|---|---|
| Name Protection | Cross-Canada name protection. Prevents others from incorporating under the same name anywhere in Canada. | Provincial protection only. Name is protected only within that province. |
| Operating Scope | Grants the right to carry on business under your name in all Canadian provinces and territories. | Designed primarily for local operation; expanding to other provinces requires extra-provincial registration. |
| Director Residency Rules | At least 25% of directors must be Canadian residents (or at least 1 resident director if fewer than 4). | Varies by province (e.g., BC and Alberta have no Canadian residency requirement for directors; Ontario eliminated its 25% requirement in 2021). |
| Registration Steps | Must also register extra-provincially in the province where your office or operations are located. | Registered directly with the provincial registry. |
| Best Used For | Businesses planning national expansion, e-commerce brands, or companies seeking prestige with international investors. | Local brick-and-mortar storefronts, regional service providers, or single-province operations. |

## If You Live Outside Canada
- You cannot open a Sole Proprietorship unless you are a resident. Your best option is to incorporate.
- Federal incorporation is difficult without a local co-founder or nominee director because of the 25% resident director rule.
- British Columbia, Ontario, and Alberta allow 100% foreign directors.

> **Recommendation**: If you do not have a Canadian partner, incorporating provincially in Ontario or British Columbia is typically the easiest and fastest route.

## Checklist
[ ] Decide how much personal liability you are willing to take on.
[ ] Check whether your immigration pathway requires a corporation.
[ ] Choose your structure: sole proprietorship, partnership, or corporation.
[ ] If incorporating, choose federal or provincial and confirm the director residency rules.
`},

{ id:"register-business", track:"founder", stage:"setup", title:"Registering Your Business",
  summary:"Get your business name approved with a NUANS search, file with the right registry, appoint an agent for service if you live abroad, and set up your corporate minute book.",
  body:`
## 1. Choose and Approve Your Name
Before registering, your proposed name must be approved unless you operate under your exact legal name (e.g., Jane Doe vs. Jane Doe Consulting).
- **Corporate Suffix**: A corporation's name must end with a legal designation like Ltd., Inc., or Corp.
- **NUANS Name Search**: In most provinces and at the federal level, you must obtain a NUANS (Newly Upgraded Automated Name Search) report to make sure your name isn't confusingly similar to registered Canadian trademarks or businesses.
- **Numbered Corporations**: You can choose a numbered name (e.g., 12345678 Canada Inc.) to skip name reservation fees and speed up registration.
- **"Doing Business As" (DBA) / Trade Name**: Operating under a name different from your legal corporate name requires registering a trade/operating name with the province.

## 2. Register With the Right Registry
- **Sole Proprietorship / Partnership**: Register directly through the provincial business registry (e.g., ServiceOntario, BC Registries, Registraire des entreprises du Québec).
- **Corporation (Provincial)**: File with the provincial registry. Registers the business only in that province; ideal for local businesses.
- **Corporation (Federal)**: File through Corporations Canada. Lets you operate in every province and territory under the same name, but you must also register extra-provincially in the province where you operate.

## 3. File Articles of Incorporation
Draft the Articles of Incorporation detailing:
- Official corporate name.
- Registered corporate address within Canada.
- Share structure (e.g., Class A Voting, Class B Non-Voting, preferred shares).
- Transfer restrictions and number of directors.

Submit the filing along with the required fees to Corporations Canada or the provincial registry.

> **Non-residents**: You must appoint an **Agent for Service**, a local individual or service provider with a physical address in your chosen province who can legally receive government mail and legal notices for your corporation.

## 4. Set Up Your Minute Book
Once incorporated, set up the company's internal corporate records (Minute Book), including:
- First resolutions of directors and shareholders.
- Corporate bylaws.
- Share certificates and the register of directors/officers.
- Register of Significant Control (RSC), which tracks individuals owning 25% or more of voting shares.

## Next Step
Registration automatically leads to a CRA Business Number. Continue with [CRA Business Number & Tax Accounts](#guide-cra-accounts).

## Checklist
[ ] Pick a name (or choose a numbered company) and add the legal suffix.
[ ] Order a NUANS name search report.
[ ] Appoint an Agent for Service if you live outside Canada.
[ ] File your registration or Articles of Incorporation and pay the fee.
[ ] Set up your minute book, bylaws, share certificates, and Register of Significant Control.
[ ] Register a trade name if you will operate under a different name.
`},

{ id:"cra-accounts", track:"founder", stage:"setup", title:"CRA Business Number & Tax Accounts",
  summary:"Get your 9-digit Business Number from the Canada Revenue Agency and open the right program accounts for GST/HST, payroll, corporate tax, and importing.",
  body:`
Once you register, the Canada Revenue Agency (CRA) issues a **Business Number (BN)**: a unique 9-digit identifier used to track all your federal and provincial business tax accounts. You then activate 15-digit program accounts based on what your business does.

## The Program Accounts
| Account | When You Need It |
|---|---|
| **GST/HST (RT0001)** | Required once taxable sales exceed $30,000 CAD in one calendar quarter or across four consecutive quarters. Often worth opening voluntarily from day one. |
| **Payroll Deductions (RP0001)** | Required before paying wages or salaries to yourself or employees. Used to remit Income Tax, Employment Insurance (EI), and Canada Pension Plan (CPP) deductions. |
| **Import/Export (RM0001)** | Required if you import equipment, raw materials, or goods into Canada through the Canada Border Services Agency (CBSA). |
| **Corporate Income Tax (RC0001)** | Created automatically when you incorporate. Even a dormant corporation with zero profit must file an annual T2 return. |

## Why Register for GST/HST Early
Voluntary registration lets you recover the GST/HST you pay on startup expenses, rent, and inventory through Input Tax Credits (ITCs). See [GST/HST & Sales Tax](#guide-gst-hst).

## Provincial Sales Tax
If you operate in a province with a separate sales tax (BC, Saskatchewan, Manitoba, or Quebec), you must also register for a provincial tax account (PST, RST, or QST) in addition to GST.

> **Non-residents**: If you don't have a Canadian Social Insurance Number (SIN), register using the CRA's Non-Resident Business Registration online portal or paper Form RC1.

## Checklist
[ ] Confirm your 9-digit Business Number from the CRA.
[ ] Open a GST/HST account (now, or as soon as you near $30,000 in sales).
[ ] Open a payroll account before paying any wages, including to yourself.
[ ] Open an import/export account if you will bring goods into Canada.
[ ] Register for provincial sales tax if your province requires it.
`},

{ id:"business-banking", track:"founder", stage:"setup", title:"Business Bank Account & Credit",
  summary:"Open a Canadian business bank account without local credit history, choose between a big bank and an online fintech, and build business credit from scratch.",
  body:`
A Canadian business bank account is the foundation of your operations, and it is often the hardest step for foreign founders. Anti-money laundering (AML) laws make Canadian banks cautious, but newcomers can get through smoothly with the right documents.

## Big Bank or Fintech?
- **Traditional Banks** (RBC, TD, Scotiabank, BMO, CIBC): Almost always require at least one director to walk into a Canadian branch with two forms of government ID.
- **Online Fintech Platforms**: Platforms built for international entrepreneurs (like Venn or other online business banking platforms) let you open multi-currency Canadian business accounts entirely online.

## Documents to Bring
[ ] **Two Forms of Personal Identification**: Passport, Permanent Resident (PR) Card, Provincial ID, or Work Permit.
[ ] **Proof of Status in Canada**: PR card, valid work visa, or official landing documents.
[ ] **Business Registration Documents**
  - **Sole Proprietorship**: Master Business Licence or Provincial Trade Name Registration.
  - **Corporation**: Certificate of Incorporation, Articles of Incorporation, and Federal/Provincial Corporate Profile.
[ ] **CRA Business Number (BN)**: Issued by the Canada Revenue Agency.
[ ] **Proof of Business Operations**: Invoices, supplier contracts, an office lease agreement, or a clear business plan outlining expected cash flow and transaction volumes.

## Common Newcomer Obstacles
- **International Tax Filings**: Be ready to provide your foreign Tax Identification Number (TIN) because of Common Reporting Standard (CRS) and FATCA rules.
- **Shareholder Thresholds**: Banks require identification for all beneficial owners holding 25% or more of corporate shares.
- **Credit History Gaps**: Business deposit accounts do not depend on credit scores. However, banks may place hold periods (5 to 10 business days) on cheques or incoming international wires until your account has some history.

## Building Business Credit From Scratch
Business credit in Canada is tracked separately from personal credit by commercial bureaus like Equifax Canada and Dun & Bradstreet (D&B).
[ ] **1. Get a Secured Business Credit Card**
  - Deposit collateral (e.g., $2,000–$5,000 cash) with your bank.
  - Make sure the bank reports monthly payment activity to Equifax Commercial.
[ ] **2. Set Up Vendor Credit (Net-30 Terms)**
  - Negotiate Net-30 terms with key suppliers, office vendors, or utility providers.
  - On-time payments on trade accounts build a strong commercial credit (Paydex) score.
[ ] **3. Register for a D-U-N-S Number**
  - Apply for a free 9-digit Dun & Bradstreet D-U-N-S number to establish your company in global credit systems.
[ ] **4. Keep Credit Utilization Low**
  - Keep credit card balances below 30% of your total limits.
[ ] **5. Pay Every Obligation On Time**
  - Avoid late CRA filings (GST/HST and payroll). Tax liens or CRA arrears hurt your business credit profile.

## Checklist
[ ] Choose a big bank or an online fintech account.
[ ] Gather your ID, status, registration documents, and Business Number.
[ ] Open the business account and keep it separate from personal money.
[ ] Apply for a secured business credit card that reports to Equifax.
[ ] Register for a free D-U-N-S number.
`},

{ id:"licenses-compliance", track:"founder", stage:"setup", title:"Licenses, Permits & Annual Filings",
  summary:"Registration is not a licence to operate. Find the municipal, provincial, and federal permits you need, register with your workplace safety board, and keep up with yearly filings.",
  body:`
Registering federally or provincially does not automatically give you permission to operate from a specific location or in a regulated industry.

## Find Every Permit You Need
- **BizPaL**: Start with [BizPaL](https://bizpal-perle.ca), a free government tool that lists all federal, provincial, and municipal permits required for your location and industry.
- **Municipal Business Licences**: Cities (e.g., Toronto, Vancouver, Calgary) issue operating licences by sector (e.g., food handling, retail, personal services), plus home occupation permits and health inspections for food businesses.
- **Zoning Bylaws**: Check that your commercial lease or home office complies with local land-use and zoning rules for your activity.
- **Provincial Licences**: Required for regulated industries (e.g., liquor sales, daycare services, construction trades).
- **Importing Goods**: Set up an import/export account with the Canada Border Services Agency (CBSA).

## Before You Hire
- **Workers' Compensation (WCB / WSIB)**: Most provinces require employers to register with the provincial workplace safety board (e.g., WSIB in Ontario, WorkSafeBC in BC) for workplace injury insurance before hiring.

## Annual Filing Requirements
| Filing | Who | When |
|---|---|---|
| Annual Return (registry) | Corporations | Every year, to confirm your registered address and directors. Separate from tax returns. |
| Corporate Tax Return (T2) | Corporations | Within 6 months of fiscal year-end. |
| Personal Tax Return (T1) | Sole proprietors and partners | June 15 for self-employed (tax owed is due April 30). |
| GST/HST Return | GST/HST registrants | Monthly, quarterly, or annually, depending on revenue. |

## Checklist
[ ] Run a BizPaL search for your city and industry.
[ ] Apply for your municipal business licence.
[ ] Confirm your location's zoning allows your business.
[ ] Apply for any provincial licence your industry requires.
[ ] Register with WCB/WSIB before hiring your first employee.
[ ] Put your annual return and tax deadlines in your calendar.
`},

/* ---- Taxes and money ---- */
{ id:"business-taxes", track:"founder", stage:"money", title:"How Business Taxes Work",
  summary:"How your structure decides your taxes, the Small Business Deduction and CCPC status, payroll taxes, and the filing and payment deadlines you must meet.",
  body:`
## Your Structure Decides Your Taxes
- **Sole Proprietorships & Partnerships**: Business income is treated as personal income and reported on your personal tax return (T1).
- **Corporations**: The business is a separate legal entity and files its own corporate tax return (T2).

| Tax Type | Who Pays It? | Key Feature |
|---|---|---|
| Personal Income Tax | Sole proprietors, partners, and employees | Graduated tax rates (the more you earn, the higher your rate). |
| Corporate Income Tax | Incorporated businesses | Lower flat rate on active business income (Small Business Deduction up to $500,000). |

## Corporate Tax Rates
Canada uses a dual system: Federal Tax + Provincial Tax, paid on net business income (revenue minus allowable expenses). Your rate depends on whether your company is a Canadian-Controlled Private Corporation (CCPC):
- **CCPC Status**: A private corporation incorporated in Canada where non-residents or public corporations do not hold voting control.
- **Small Business Rate**: Applies to active business income up to $500,000 a year (the "Business Limit").
- **General Rate**: Applies to income above $500,000, or to corporations that are not CCPCs.

> **Key Rule for Immigrants**: If non-residents (e.g., family members back home or foreign investment firms) control more than 50% of voting shares, the company loses CCPC status and pays the General Rate (approx. 23%–27%) from its first dollar earned.

## Payroll Taxes
If you hire employees, you need a CRA payroll account. As an employer, you deduct and remit:
- Canada Pension Plan (CPP) contributions
- Employment Insurance (EI) premiums
- Income tax withholdings

## Key Tax Calendar
| What | Deadline |
|---|---|
| Personal Tax Return (sole proprietor) | Filing due June 15; any balance owing due April 30 |
| Corporate Tax Return (T2) | Due 6 months after fiscal year-end |
| Corporate Tax Payment | Within 3 months of year-end (qualifying CCPCs) or 2 months (other corporations) |
| Payroll Remittances (PD7A) | Monthly, typically by the 15th of the following month |
| GST/HST Returns | Monthly, quarterly, or annually, depending on your reporting period |

## Get Professional Help
Hire a Canadian CPA. Tax rules vary significantly depending on immigration status, foreign asset disclosures (Form T1135), and cross-border transactions.

## Checklist
[ ] Confirm how your structure is taxed (T1 or T2).
[ ] Check whether your company qualifies as a CCPC.
[ ] Open a payroll account before paying any wages.
[ ] Add every filing and payment deadline to your calendar.
[ ] Hire a Canadian CPA.
`},

{ id:"gst-hst", track:"founder", stage:"money", title:"GST/HST & Sales Tax",
  summary:"When you must register for GST/HST, why registering early can save money, how place of supply decides the rate, and how Input Tax Credits get you refunds.",
  body:`
## The $30,000 Small Supplier Rule
- You don't have to register for GST/HST while your total worldwide gross revenue across four consecutive quarters is under $30,000 CAD.
- Once you cross $30,000, you must register with the Canada Revenue Agency (CRA) within 29 days and start charging sales tax.
- **Voluntary Registration**: You can register before you reach $30,000. This lets you claim back the sales tax you paid on startup expenses through Input Tax Credits (ITCs).

## Which Rate to Charge
Sales tax depends on the province where your customer receives the product or service (the "Place of Supply" rule). Depending on the province, you charge GST, HST, or GST plus a provincial tax (PST or QST). Combined rates range from 5% to 15%.

## How Input Tax Credits (ITCs) Work
When you are registered, sales tax passes through your business:
> **Net Tax Payable or Refund** = GST/HST collected from clients − GST/HST paid on business purchases

If you paid more GST/HST on eligible purchases than you collected, the CRA refunds you the difference.

## Filing
GST/HST returns are filed monthly, quarterly, or annually, depending on your revenue. Selling online? Set your payment platform to collect the right tax automatically based on the shipping address.

## Checklist
[ ] Track your total sales against the $30,000 threshold.
[ ] Decide whether to register voluntarily to claim ITCs on startup costs.
[ ] Register within 29 days of crossing $30,000.
[ ] Charge the correct rate for each customer's province.
[ ] Keep receipts for every purchase you claim an ITC on.
`},

{ id:"bookkeeping", track:"founder", stage:"money", title:"Bookkeeping, Expenses & Cash Flow",
  summary:"Keep CRA-ready records, know which expenses you can deduct, manage cash flow, choose accounting software, and read your P&L, balance sheet, and break-even point.",
  body:`
## Bookkeeping Basics
1. **Separate Accounts**: Never mix personal and business money. Open a dedicated Canadian business bank account immediately.
2. **Keep Records for 6 Years**: The CRA requires you to keep receipts, invoices, and bank statements for at least 6 years. Scan or photograph paper receipts, since heat-sensitive receipts fade.
3. **Reconcile Monthly**: Match your accounting records against bank and credit card statements every month.
4. **Double-Entry**: Most accounting software uses double-entry bookkeeping to keep assets, liabilities, and equity balanced.

## Common Deductible Expenses
To be deductible, an expense must be incurred to earn business income.
| Expense | How Much You Can Deduct |
|---|---|
| Commercial Rent & Utilities | Fully deductible for office, retail, or warehouse space. |
| Motor Vehicle | The share of business kilometres vs. total kilometres, tracked in a logbook (gas, insurance, repairs). |
| Meals & Entertainment | Generally 50% when entertaining clients or travelling for business. |
| Home Office | The share of square footage used strictly for business, if it is your principal place of business. |
| Software, Marketing & Professional Fees | 100% (legal, accounting, advertising, CRM tools). |
| Equipment, Computers & Vehicles | Not all in year one. Deducted a set percentage per year through Capital Cost Allowance (CCA). |

## Cash Flow Management
Cash flow tracks the money coming in versus going out.
> **Pro Tip**: Being profitable on paper doesn't help if you don't have cash in hand to pay rent or suppliers today.

- **Emergency Fund**: Reserve 3 to 6 months of essential operating expenses in a separate high-interest business account.
- **Budget Planning**: Project future income and expenses to guide spending decisions.

## Software & Apps
- **QuickBooks Online / Xero**: Industry-standard accounting software that syncs with Canadian bank accounts.
- **Wave**: A budget-friendly option for new sole proprietors and freelancers.
- **Float / Pulse**: Tools built for cash flow forecasting.

## Reading Your Financial Statements
- **Profit & Loss Statement (P&L / Income Statement)**: Your revenue, costs, and net profit over a period (e.g., a month or year).
- **Balance Sheet**: A snapshot at a single point in time, showing that Assets = Liabilities + Equity.
- **Break-Even Analysis**: The exact sales volume needed to cover all fixed and variable costs (where profit = $0).

## Checklist
[ ] Set up accounting software connected to your business bank account.
[ ] Start a system for scanning and storing receipts.
[ ] Start a vehicle logbook if you drive for business.
[ ] Reconcile your accounts at the end of every month.
[ ] Build a cash reserve covering 3 to 6 months of expenses.
`},

/* ---- Run and grow ---- */
{ id:"marketing", track:"founder", stage:"grow", title:"Marketing, Branding & Advertising",
  summary:"Build a brand and customer personas, then reach Canadian customers with local SEO, CASL-compliant email, social media, community advertising, and local networking.",
  body:`
> **Goal**: Establish your identity and reach your target audience with cost-effective, culturally relevant marketing.

## 1. Define Your Brand
- **Personality & Voice**: Decide your tone (e.g., professional, conversational, authoritative) and visual assets (colors, typography, image guidelines).
- **Logo Guidelines**: Create a brand kit specifying minimum display sizes, margin spacing, and approved color variations (CMYK for print, RGB/HEX for digital).
- **Positioning Statement**: Define who you serve, what specific benefit you provide, and why customers should choose you over local alternatives.

## 2. Know Your Customers
- **Demographics**: Age, location (e.g., urban vs. rural Canadian markets), household income, and occupation.
- **Psychographics**: Primary goals, daily pain points, purchasing motivations, and preferred media habits.

## 3. Get Found Online
- **Google Business Profile**: Set up and verify your profile so customers find you on Google Maps.
- **Local SEO**: Optimize web pages with local keywords (e.g., "accounting services Calgary").
- **Email Marketing**: Build an email list through website opt-ins, following CASL (below).

## 4. Social Media & Content
- **Platform Selection**: LinkedIn for B2B services, consulting, and networking; Instagram, TikTok, and Facebook for local services, retail, and restaurants.
- **Content Strategy**: Create useful, non-promotional content (educational blogs, how-to videos, case studies) that addresses your customers' pain points.

## 5. Community Advertising & Networking
- **Ethnic Media & Radio**: Advertising in community newspapers or radio stations that serve specific diaspora communities builds immediate trust.
- **Sponsorships**: Sponsor local sports teams, community centre events, or neighbourhood festivals.
- **Local Networks**: Join your local Chamber of Commerce or business improvement area (BIA), and partner with complementary, non-competing businesses.

## Follow Canada's Advertising Rules
- Show clear pricing in your ads and respect privacy rules.
- **CASL (Canada's Anti-Spam Legislation)**: Get clear express consent (an opt-in checkbox that is not pre-checked) or documented implied consent (a business transaction within the last 24 months). Every commercial message must include your business name, mailing address, contact info, and a 1-click unsubscribe that is processed within 10 business days.

## Checklist
[ ] Write your brand positioning statement.
[ ] Create one or two customer personas.
[ ] Set up and verify your Google Business Profile.
[ ] Add a CASL-compliant opt-in to your email sign-up.
[ ] Pick the two social platforms your customers use most.
[ ] Join your local Chamber of Commerce or BIA.
`},

{ id:"sales-customers", track:"founder", stage:"grow", title:"Sales & Customer Management",
  summary:"Turn leads into revenue with a defined sales funnel, a CRM, a pricing strategy that fits the Canadian market, and retention and negotiation habits that keep customers coming back.",
  body:`
> **Goal**: Convert leads into revenue and build long-term customer loyalty.

## 1. Build a Sales Funnel
- **Awareness**: Reach prospects through digital marketing, content, networking, or targeted ad campaigns.
- **Consideration**: Provide product demos, pitch presentations, whitepapers, or free consultations.
- **Decision**: Offer clear quotes, standard service agreements, or risk-free trial terms.

## 2. Track Leads in a CRM
- Set up a Customer Relationship Management (CRM) platform (e.g., HubSpot, Salesforce, Zoho).
- Define lead stages (New Lead, Contacted, Proposal Sent, Won/Lost) to track potential revenue and automate follow-up reminders.

## 3. Set Your Pricing
- **Cost-Plus Pricing**: Total cost of goods/services sold (COGS) plus overhead, then add a target profit margin.
- **Value-Based Pricing**: Price based on the value or ROI you deliver to the customer rather than your input costs.
- **Competitive Pricing**: Benchmark against regional Canadian rates to position as premium, mid-tier, or budget-friendly.

## 4. Keep Customers and Negotiate Well
- **Retention**: Post-sale check-ins, loyalty incentives, fast customer service, and regular satisfaction surveys.
- **Negotiation**: Aim for "win-win" outcomes. Offer flexible payment terms (e.g., Net-30/Net-60 billing, staged milestones) or adjusted deliverables rather than discounting prices upfront.

## Checklist
[ ] Map out the three stages of your sales funnel.
[ ] Set up a CRM and define your lead stages.
[ ] Choose a pricing method and benchmark against local competitors.
[ ] Schedule a check-in with every new customer after their first purchase.
`},

{ id:"operations", track:"founder", stage:"grow", title:"Operations Management",
  summary:"Create reliable daily systems with written SOPs, FIFO inventory and domestic sourcing, quality control checkpoints, and task boards that surface bottlenecks.",
  body:`
> **Goal**: Create reliable, efficient daily operating systems.

## 1. Write Standard Operating Procedures (SOPs)
- Document recurring tasks (e.g., client onboarding, order processing, inventory audits) using written templates or video walkthroughs (e.g., Loom).
- Keep all SOPs in one internal wiki (e.g., Notion, Confluence).

## 2. Manage Inventory & Supply Chain
- **FIFO Inventory Control**: Use First-In, First-Out (FIFO) to avoid aging or obsolete stock. Connect your point-of-sale (POS) system (e.g., Square, Lightspeed) directly to your inventory software.
- **Source Locally**: Find primary or backup suppliers inside Canada to reduce border checks, customs tariffs, and shipping delays at the Canada Border Services Agency (CBSA).
- **Resource**: CBSA step-by-step import guide.

## 3. Quality Control & Workflow
- **QC Checklists**: Add formal sign-off steps at receiving, production, and before shipping or delivery.
- **Task Boards**: Use visual boards (e.g., Trello, Asana, Monday.com) to track work stages, assign owners, and spot bottlenecks.
- **Resource**: Federally regulated industries in Canada.

## Checklist
[ ] Write SOPs for your three most frequent tasks.
[ ] Connect your POS system to your inventory software.
[ ] Identify at least one Canadian backup supplier.
[ ] Add QC sign-off steps before anything ships.
`},

{ id:"human-resources", track:"founder", stage:"grow", title:"Hiring & Human Resources",
  summary:"Build a fair team under Canadian labour standards: compliant job descriptions, structured interviews and onboarding, provincial employment standards, and performance reviews.",
  body:`
> **Goal**: Build an equitable team while following Canadian labour standards. Before your first hire, open a CRA payroll account and register with WCB/WSIB (see [Licenses, Permits & Annual Filings](#guide-licenses-compliance)).

## 1. Write Compliant Job Descriptions
- Base job descriptions only on objective skills, education, and essential functions to prevent discrimination.
- State the work format (fully remote, hybrid, or in-office) and required languages (English, French, or bilingual).
- **Resource**: Government of Canada, Hire Temporary Foreign Workers.

## 2. Interview and Onboard Properly
- **Interviews**: Never ask about topics protected by Canadian human rights law (e.g., age, marital/family status, sexual orientation, religion, disability, or plans for a family).
- **Onboarding**: Prepare a structured Day 1 orientation covering company culture, system logins, job expectations, and workplace health and safety.

## 3. Follow Provincial Employment Standards (ESA)
- Follow your province's rules on minimum wage, overtime, statutory holiday pay, paid vacation, and termination notice/severance.
- Write company policies on workplace health and safety, remote work, and anti-harassment/discrimination.
- **Resource**: ADP, Employment Standards by Canadian Province & Territory.

## 4. Manage Performance
- Hold a formal review near the end of the 90-day probation period.
- Schedule twice-yearly or annual reviews tied to clear KPIs or OKRs.

## Checklist
[ ] Open a CRA payroll account and register with WCB/WSIB.
[ ] Write a job description based only on skills and essential duties.
[ ] Prepare a list of structured, legally safe interview questions.
[ ] Check your province's employment standards for wages, overtime, and holidays.
[ ] Write your anti-harassment and health and safety policies.
[ ] Book a 90-day review for every new hire.
`},

{ id:"legal-compliance", track:"founder", stage:"grow", title:"Legal Protection, IP & Privacy",
  summary:"Protect your business with CIPO trademarks, copyrights and patents, solid NDAs and client contracts, and a privacy setup that follows PIPEDA.",
  body:`
> **Goal**: Protect your business assets, data, and contractual relationships.

## 1. Protect Your Intellectual Property (CIPO)
- **Trademarks**: Search existing registers and file with the Canadian Intellectual Property Office (CIPO) to secure brand names, logos, and slogans.
- **Copyrights**: Copyright applies automatically when you create something, but registering written works, software code, or creative assets with CIPO strengthens your position in court.
- **Patents**: File with CIPO to claim exclusive commercial rights over new, non-obvious inventions or industrial processes.

## 2. Use Proper Contracts
- **Non-Disclosure Agreements (NDAs)**: Sign mutual or one-way NDAs before sharing trade secrets, financial details, or proprietary ideas with contractors, suppliers, or potential partners.
- **Service & Sales Contracts**: Standardize client contracts with clear terms on scope of work, milestones, payment schedules, intellectual property ownership, limitation of liability, and termination.

## 3. Follow Privacy Law (PIPEDA)
- **Privacy Policy**: Publish an easy-to-find Privacy Policy explaining what personal data you collect, why, how you use it, where it is stored, and who it is shared with.
- **Consent & User Rights**: Add cookie consent (accept/reject tracking), appoint a Privacy Officer, and set up a way for people to request access to or deletion of their personal information.
- **Resource**: Office of the Privacy Commissioner of Canada, PIPEDA compliance help.

## Checklist
[ ] Search CIPO and file a trademark for your business name.
[ ] Prepare a standard NDA and a standard client contract.
[ ] Publish a privacy policy on your website.
[ ] Add cookie consent and appoint a Privacy Officer.
`},

{ id:"business-technology", track:"founder", stage:"grow", title:"Technology & Cybersecurity",
  summary:"Pick core software for accounting, communication, storage and AI, and protect your business with MFA, password managers, staff training, and 3-2-1 backups.",
  body:`
> **Goal**: Work more efficiently and keep your digital assets secure.

## 1. Choose Your Core Software
- **Accounting & Invoicing**: Cloud accounting software (e.g., QuickBooks Online, Xero) set up for Canadian sales taxes (GST, PST, HST, QST).
- **Communication & Projects**: Team messaging (e.g., Slack, Microsoft Teams) plus project tracking (e.g., Asana, Trello, Monday.com).
- **Cloud Storage**: Google Workspace, Microsoft 365, or Dropbox, with role-based access permissions.
- **Artificial Intelligence (AI)**: AI tools (e.g., ChatGPT, Claude) to speed up first drafts, analyze business data, or handle first-line customer questions.

## 2. Protect Your Business
- **Access Control**: Turn on multi-factor authentication (MFA) for every tool. Use a password manager (e.g., 1Password, Bitwarden) to create and store strong passwords.
- **Staff Training**: Teach your team to recognize phishing, social engineering, and unsafe remote work habits.
- **Backups (3-2-1 Rule)**: Keep 3 copies of your data, on 2 different types of storage, with 1 copy off-site or in the cloud.

## Checklist
[ ] Set up accounting software with Canadian sales tax settings.
[ ] Turn on MFA for email, banking, and every business tool.
[ ] Move all passwords into a password manager.
[ ] Set up automatic 3-2-1 backups.
[ ] Run a short phishing awareness session with your team.
`}

];
