/* ============ GUIDE DATA ============
   Guides are organised as TRACKS (a reader's goal) → STAGES (in the order people go through them) → GUIDES.
   The order of GUIDES below is the reading order inside each track.

   Two kinds of guide:
     type:"howto"     something you DO. Has an "At a glance" box (glance) and numbered steps.
     type:"explainer" something you UNDERSTAND or DECIDE. Starts with a short answer (answer).

   Fields: id, track, stage, type, title, summary, body
           glance: { who, time, cost, where, result }   (how-to only; leave out any you don't know)
           answer: "Two or three sentences."            (explainer only)

   Body format:
     ## Heading          section heading (also listed in "On this page")
     ### Subheading
     Plain line          paragraph
     + Step title        a numbered step with a "Mark done" button; lines under it belong to the step
     [ ] item            checkbox (use for "What you need")
     - item              bullet (indent 2 spaces per level to nest)
     1. item             numbered item
     > text              tip / note
     !> text             watch out (warning)
     | a | b |           table row (first row is the header)
     **bold**   [link text](https://...)   [another guide](#guide-ID)
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
{ id:"visa", track:"newcomer", stage:"before", type:"howto", title:"Getting a Canadian Visa",
  summary:"Work out which visa or permit you need, gather your documents, apply through the IRCC portal, and complete your biometrics.",
  glance:{ who:"Visitors, students, workers, and future permanent residents", where:"Online through the IRCC portal, plus a biometrics appointment in person", result:"A visa or permit approval to show at the border" },
  body:`
## What You Need
[ ] **Valid passport and passport photos**
[ ] **Proof of funds**: recent bank statements showing you can support yourself.
[ ] **Documents for your purpose**
  - **Visiting**: your travel itinerary or an invitation letter.
  - **Studying**: an official acceptance letter from your school.
  - **Working**: a job offer letter, if you have one.

## Steps
+ Choose your stream
Decide whether you need a Visitor Visa, Study Permit, Work Permit, or Permanent Residence (PR).
> Coming to start a business? Read [Entrepreneur Immigration Pathways](#guide-entrepreneur-pathways) for the founder routes.
+ Check that you're eligible
Read the requirements for your stream on the official IRCC website before you pay anything.
+ Create an IRCC portal account
Register on the Government of Canada's secure immigration portal. This is where you apply and get updates.
+ Upload your documents and pay
Upload digital copies of everything in "What you need" and pay the application fees online.
+ Give your biometrics
Wait for your instruction letter, then visit an official collection point to give your fingerprints and photo.
!> Book your biometrics appointment soon after the letter arrives. It must be done within the required time.
+ Get your decision and travel
Keep your approval documents with your passport. The border officer will ask for them when you land.
`},

{ id:"cost-of-living", track:"newcomer", stage:"before", type:"explainer", title:"Cost of Living in Canada",
  summary:"Monthly estimates for housing, groceries, utilities, and transportation, and how much costs change between provinces.",
  answer:"Plan for about **$2,150–$3,900 a month for one person** and **$4,250–$6,950 for a family of four**. Toronto and Vancouver cost the most; the Prairies and Atlantic Canada cost noticeably less.",
  body:`
## Monthly Costs (CAD)
| Expense | One Person | Family of 4 | Good to Know |
|---|---|---|---|
| Housing & Rent | $1,400 – $2,500 | $2,400 – $4,000 | Varies a lot by city. Toronto and Vancouver are highest. |
| Groceries | $400 – $650 | $1,200 – $1,600 | Cooking at home keeps this down. |
| Utilities & Internet | $200 – $350 | $350 – $550 | Heating, electricity, and Wi-Fi. Higher in winter. |
| Transportation | $150 – $400 | $300 – $800 | A transit pass costs far less than owning a car (gas + insurance). |
| **Total per month** | **$2,150 – $3,900** | **$4,250 – $6,950** | Doesn't include business costs or an emergency fund. |

## Where You Live Matters
Living costs in big cities like Toronto and Vancouver are much higher than in the Prairie provinces (Alberta, Saskatchewan, Manitoba) or Atlantic Canada. If you're flexible about location, compare a few cities before you decide.

## Prices Don't Include Tax
Store prices in Canada don't include sales tax. Depending on the province, GST, PST, or HST adds **5% to 15%** at the checkout.

## Starting a Business?
Your personal living costs are part of your business plan. Before the business makes a profit, you need enough money to cover these monthly costs. This is often called your "runway."
`},

/* ---- Your first weeks ---- */
{ id:"sin", track:"newcomer", stage:"first", type:"howto", title:"Getting a Social Insurance Number (SIN)",
  summary:"Get the 9-digit number you need to work and file taxes. Go to a Service Canada Centre with your passport and immigration document.",
  glance:{ who:"Permanent residents and temporary residents allowed to work or study", time:"Same day if you go in person", where:"In person at Service Canada (fastest) or online", result:"Your 9-digit SIN" },
  body:`
> Do this first. Your bank and your employer will both ask for your SIN.

## What You Need
[ ] **Your valid passport**
[ ] **One status document**
  - Permanent Resident Card or Confirmation of Permanent Residence (COPR), or
  - A valid work permit, or
  - A valid study permit that says you're allowed to work.

## Steps
+ Choose how to apply
**In person** at a Service Canada Centre is the fastest, with same-day service. You can also apply **online** by uploading scans through the Service Canada portal.
+ Show your original documents
Bring your original passport and immigration document, not copies, and give them to the Service Canada officer.
+ Keep your SIN safe
You'll get a paper SIN confirmation. Store it somewhere safe at home.
!> Never share your SIN unless the law requires it, such as with your employer or bank.
+ Give your SIN to your employer
When you're hired, give your 9-digit SIN to HR or payroll so they can handle your taxes.
`},

{ id:"phones", track:"newcomer", stage:"first", type:"howto", title:"Phone & Mobile Plans",
  summary:"Get a Canadian phone number for less by choosing a budget carrier and bringing your own unlocked phone.",
  glance:{ who:"Newcomers who want a Canadian number", cost:"Budget brands cost much less than premium ones, with the same coverage", where:"A carrier store or kiosk", result:"A Canadian SIM card and monthly plan" },
  body:`
## What You Need
[ ] **Government-issued ID**: your passport is best.
[ ] **Status document**: COPR, work permit, or study permit.
[ ] **Proof of your Canadian address**: a rental agreement or utility bill. Some carriers only ask you to write your address down.
[ ] **An unlocked phone**: the phone you brought from home.

## Steps
+ Check that your phone is unlocked
Do this before you leave home. A locked phone won't work with a Canadian SIM card.
+ Compare carriers
| Tier | Brands | What You Get |
|---|---|---|
| Premium | Rogers, Bell, Telus | Fastest, most expensive |
| Budget / Mid-tier | Fido, Virgin Plus, Koodo, Freedom Mobile | Same coverage as premium, much cheaper |
Compare monthly plans online from the budget brands before you go to a store.
+ Ask for a BYOD plan
At the store, ask for a **"Bring Your Own Device" (BYOD) postpaid monthly plan**. This way you don't pay for a new phone up front.
+ Insert your SIM and test it
Put in your new Canadian SIM card and check that calls and mobile data work before you leave the store.
+ Set up voicemail right away
Follow the prompts to set up your voicemail and greeting. Doctors and businesses in Canada often leave voice messages, so don't skip this.
`},

{ id:"banking", track:"newcomer", stage:"first", type:"howto", title:"Banking",
  summary:"Open your Canadian accounts at a major bank, get monthly fees waived with a newcomer package, and start building credit.",
  glance:{ who:"All newcomers", cost:"Monthly fees waived for your first 1 to 2 years with a newcomer package", where:"A bank branch (book the appointment online)", result:"A chequing account, a savings account, and a starter credit card" },
  body:`
## What You Need
[ ] **Your passport**
[ ] **Status document**: PR card/COPR, work permit, or study permit.
[ ] **Your SIN**: banks need it for tax reporting if your account earns interest. See [Getting a SIN](#guide-sin).

## Steps
+ Choose a "Big Five" bank
The Big Five are **RBC, TD Canada Trust, Scotiabank, BMO, and CIBC**. Pick the one with a branch closest to where you live.
+ Book a newcomer appointment
Book online with a newcomer financial advisor at your chosen bank.
+ Ask for the Newcomer Package
Ask for it by name. It usually waives all monthly banking fees for your first 1 to 2 years.
+ Open your three key products
- **Chequing account**: for everyday spending, your salary, and paying bills.
- **Savings account**: for emergencies and goals.
- **Credit card**: a beginner card, usually approved without Canadian credit history under newcomer programs.
+ Set up mobile banking
Download the bank's app and set up your online banking password.
+ Build credit the right way
Use the credit card for small, everyday purchases and **pay the full balance every month**. This builds your Canadian credit score.
`},

{ id:"healthcare", track:"newcomer", stage:"first", type:"howto", title:"Healthcare",
  summary:"Apply for your provincial health card the week you arrive, cover any waiting period with private insurance, and know where to go for care.",
  glance:{ who:"New residents of any province", time:"Some provinces, like BC and Quebec, have a waiting period of up to 3 months", where:"Online or at a provincial office", result:"Your provincial health card" },
  body:`
## What You Need
[ ] **Your passport**
[ ] **Status document**: PR card/COPR, work permit, or study permit.
[ ] **Proof that you live in the province**: a lease, a utility bill, or a driver's licence from your province.
[ ] **Private medical insurance**: only if your province has a waiting period.

## Steps
+ Check your province's waiting period
Some provinces make you wait before public coverage starts. For example, BC and Quebec have a 3-month wait.
+ Buy private insurance if there's a wait
If your province has a waiting period, buy private travel or expat medical insurance for your first 90 days so you aren't left uncovered.
+ Apply for your health card the week you arrive
Each province has its own card, for example OHIP in Ontario, MSP in British Columbia, and AHCIP in Alberta. Apply online or at a provincial office.
+ Know where to go for care
- **Emergencies**: go straight to a hospital Emergency Room (ER) or call **911**.
- **Everything else**: go to a walk-in clinic, or call **811** to talk to a registered nurse through provincial telehealth.
Save the address of your nearest ER and walk-in clinic in your phone.
+ Check your workplace benefits
Public health cards don't usually cover dental and vision care. Ask your employer about extended health benefits.
`},

/* ---- Staying for good ---- */
{ id:"student-to-pr", track:"newcomer", stage:"stay", type:"howto", title:"From Student to Permanent Resident",
  summary:"The path from international student to work permit, Canadian experience, and permanent residence through Express Entry or a provincial program.",
  glance:{ who:"International students and recent graduates", time:"Your Post-Graduation Work Permit can last up to 3 years", result:"Permanent Resident status" },
  body:`
## The Path at a Glance
1. International student
2. Post-Graduation Work Permit (PGWP)
3. Canadian work experience, or launching a business
4. Apply for PR (Express Entry, a provincial program, or an entrepreneur stream)
5. Permanent Resident

## Steps
+ Graduate from an eligible school
Your school must be an eligible Designated Learning Institution (DLI) for you to qualify for a PGWP. Check this early.
+ Apply for your Post-Graduation Work Permit
After you graduate, apply for a PGWP. It's an open work permit that can last up to 3 years.
+ Build Canadian experience or start a business
Get skilled work experience in Canada. If you want to run your own business instead, look at:
- **C11 Entrepreneur Work Permit**: for entrepreneurs and self-employed people whose business brings significant economic, social, or cultural benefit to Canada.
- **Start-up Visa (SUV)**: connects founders with Canadian angel groups or venture capital funds.
!> Check the Start-up Visa's current status before planning around it. See [Entrepreneur Immigration Pathways](#guide-entrepreneur-pathways).
+ Take a language test
Express Entry scores your language skills. Take an approved test: IELTS, CELPIP, or TEF.
+ Apply for permanent residence
Choose your route:
- **Express Entry (Canadian Experience Class)**: a points system based on age, education, language, and skilled work experience.
- **Provincial Nominee Program (PNP) entrepreneur streams**: many provinces (e.g., BC PNP, OINP, AAIP) have streams for business owners who invest locally and create jobs.
`},

/* =================== STARTING A BUSINESS =================== */

/* ---- Explore opportunities ---- */
{ id:"growing-industries", track:"founder", stage:"explore", type:"explainer", title:"Growing Industries in Canada",
  summary:"Where demand is growing: technology and AI, healthcare and senior services, construction and housing, and logistics, with niche ideas in each.",
  answer:"Demand is strongest in four areas: **technology and AI**, **healthcare and senior services**, **construction and housing**, and **logistics**. Each is backed by a long-term trend, like the housing shortage or an aging population, and many have government funding behind them.",
  body:`
## At a Glance
| Industry | Why It's Growing | Niche Ideas |
|---|---|---|
| Technology & AI | Tech hubs, research, venture capital, tax credits like SR&ED | Small-business software, cybersecurity, AI consulting |
| Healthcare & Seniors | Over 20% of Canadians are 65 or older | Home care, aging-in-place renovations, digital health |
| Construction & Housing | A national housing shortage and faster permits | Skilled trades, modular building, building supplies |
| Logistics | Long distances, e-commerce, imported food | Last-mile delivery, cold storage, freight brokerage |

## Technology & AI
Tech hubs in Toronto-Waterloo, Vancouver, Montreal, and Calgary are supported by universities, venture capital, and tax credits such as the SR&ED incentive.
- **Software for small businesses**: tools that help HVAC firms, local logistics companies, or dental offices automate admin, booking, or billing.
- **Cybersecurity**: mid-sized companies need to protect customer data, so managed security providers (MSSPs) are in demand.
- **AI consulting**: helping non-tech businesses use AI for customer service, inventory forecasting, and content.

## Healthcare & Senior Services
Over 20% of Canada's population is 65 or older. This puts pressure on public healthcare and opens space for private services.
- **Home care agencies**: meals, companionship, mobility support, and licensed nursing care.
- **Aging-in-place renovations**: ramps, walk-in tubs, and smart monitoring systems.
- **Digital health software**: remote patient monitoring, health record integrations, and appointment booking.

## Construction & Housing
A severe housing shortage has led governments to speed up building, fast-track permits, and fund green renovations.
- **Skilled trades**: framing, electrical, plumbing, HVAC, and drywall.
- **Sustainable and modular building**: prefab housing, net-zero renovations, energy audits, and insulation.
- **Building supplies**: importing materials, fixtures, and finishes where supply is short.
!> Many trades need provincial certification or Red Seal licensing before you can work.

## Logistics & Warehousing
Canada's long distances between cities, plus growing e-commerce and imported food, keep supply chains busy.
- **Last-mile delivery**: delivery networks for retailers or local food distributors.
- **Cold storage**: temperature-controlled warehouses near transport hubs like Peel Region (Ontario) or Surrey (BC).
- **Freight brokerage**: matching independent truckers with shippers.

## How to Decide
- If you already have a trade or professional skill, start with the industry that uses it, and check the licensing rules first.
- If you have a tech background, small-business software and AI consulting have low startup costs.
- If you have capital but little Canadian experience, compare these ideas with a [franchise](#guide-franchising).
`},

{ id:"franchising", track:"founder", stage:"explore", type:"explainer", title:"Franchising Opportunities",
  summary:"How franchising lowers your risk, which sectors are popular in Canada, what it costs, and why franchises are easier to finance for newcomers.",
  answer:"A franchise gives you a proven business model, a known brand, training, and easier bank financing. In return, you pay a large upfront investment and ongoing royalties of **4% to 8% of sales**. Budget about **$100,000** for a home-based service franchise and **$500,000 or more** for a restaurant or daycare.",
  body:`
## Popular Franchise Sectors
- **Quick-service restaurants**: suburban plazas, transit hubs, and university towns.
- **Home and commercial services**: cleaning, carpet restoration, pest control, handyman work, and painting. These often run from a van instead of a storefront, which keeps costs lower.
- **Children's education and childcare**: early learning centres, tutoring (STEM, math, coding), and daycares, supported by government childcare subsidies.
- **Car maintenance**: quick-lube, detailing, tire changes, and windshield repair.

## What It Costs
| Cost | Typical Range |
|---|---|
| Franchise fee | $20,000 to over $100,000 CAD, depending on the brand |
| Total startup cost | $100,000 CAD (home-based services) to $500,000 – $1,500,000+ CAD (restaurants, daycares) |
| Royalties | 4% to 8% of monthly sales, plus 1% to 3% for national advertising |
| Cash you must show | Often 30–50% of the total project cost in cash, plus a minimum net worth |

## Why It Can Suit Newcomers
- **Easier financing**: the Big Five banks have franchise lending teams that can finance up to **70–80%** of approved franchises, often through the government-backed Canada Small Business Financing Program (CSBFP).
- **Rules already built in**: franchise manuals cover Canadian labour law, health and safety, and tax collection, so there's less to learn on your own.

## How to Decide
- If you have savings but little Canadian business experience, a franchise lowers your risk.
- If you want full control over your brand and prices, or don't want to pay royalties, start independently instead.
- Compare at least two or three brands' total costs, not just the franchise fee.
`},

{ id:"ecommerce", track:"founder", stage:"explore", type:"explainer", title:"E-Commerce & Online Businesses",
  summary:"Online business models that work in Canada, how to handle fulfillment and high shipping costs, and how to collect sales tax automatically.",
  answer:"Selling online lets you test an idea without signing a commercial lease. The three things to plan carefully are **fulfillment** (who stores and ships your products), Canada's **high shipping costs**, and **collecting the right sales tax** for each province.",
  body:`
## Business Models That Work
- **Imports and cultural goods**: foods, fashion, home decor, or beauty products from your home country for Canada's multicultural market.
- **Digital services**: marketing, software development, translation, graphic design, or virtual bookkeeping for Canadian and global clients.
- **Your own brand (private label)**: products for Canadian lifestyles, like outdoor gear, eco-friendly household goods, or pet accessories.

## Fulfillment Options
| Option | How It Works | Good For |
|---|---|---|
| Amazon FBA Canada | Amazon stores and ships your stock from Canadian warehouses with Prime delivery | Selling mainly on Amazon |
| Third-party logistics (3PL) | A local company stores, packs, and ships for you, in hubs like Mississauga, Brampton, Richmond, or Calgary | Your own online store or several sales channels |

## Shipping Costs
Shipping inside Canada is expensive, so build it into your prices. Shipping aggregators like **Stallion Express** or **Chit Chats** get you discounted Canada Post, UPS, and FedEx rates.

## Payments and Sales Tax
Set up your payment processor (Shopify Payments, Stripe, or PayPal) with Canadian tax settings so it collects GST, HST, or PST automatically based on the customer's address. See [GST/HST & Sales Tax](#guide-gst-hst).
> Importing products to sell? You'll also need an import/export account. See [CRA Business Number & Tax Accounts](#guide-cra-accounts).

## How to Decide
- If you sell mainly on Amazon, start with FBA.
- If you have your own website or sell in several places, use a local 3PL.
- If you sell services, not products, you can skip fulfillment entirely.
`},

{ id:"success-stories", track:"founder", stage:"explore", type:"explainer", title:"Immigrant Entrepreneur Success Stories",
  summary:"Immigrants who built successful Canadian businesses, from a single shawarma shop to a fintech company, and the lesson from each.",
  answer:"Many successful immigrant founders started small, served a market they understood well, and grew through community ties. Here are three examples and what you can learn from them.",
  body:`
## Mohamad Fakih: Paramount Fine Foods
After arriving from Lebanon, Mohamad bought a struggling shawarma shop in Mississauga, Ontario. Through high quality, strong community involvement, and good business sense, he grew it into a global Middle Eastern halal restaurant chain.
> **Lesson**: Community involvement and high standards can turn a small food spot into an international brand.

## Hamed Abbasi & Masood Mohajeri: Plooto
These immigrant founders launched a financial technology company that makes payments easier for small and medium businesses across North America.
> **Lesson**: Problems that local businesses deal with every day can become big tech opportunities.

## The Local Community Entrepreneur
Many newcomers start with specialty grocery stores, catering companies, or consulting firms that serve both their own community and the wider Canadian market.
> **Lesson**: Start with a niche you understand well, then grow as your confidence grows.
`},

/* ---- Plan and qualify ---- */
{ id:"entrepreneur-pathways", track:"founder", stage:"plan", type:"explainer", title:"Entrepreneur Immigration Pathways",
  summary:"The immigration routes for foreign founders: provincial entrepreneur streams, C11 and ICT work permits, and the current status of the Start-Up Visa.",
  answer:"For most foreign founders today, the realistic routes are a **provincial entrepreneur stream (PNP)** or a **work permit (C11 or ICT)**. The federal Start-Up Visa has been paused and capped, so don't rely on it alone. If you'll run your business from outside Canada, you don't need any of these.",
  body:`
## Compare the Routes
| Route | Best For | Key Requirements |
|---|---|---|
| PNP Entrepreneur Stream | Founders who want PR and can invest in one province | $300,000–$600,000+ net worth, $150,000–$200,000+ investment, 1–2 local jobs |
| C11 Work Permit | Self-employed people or owners whose business benefits Canada | Significant economic, social, or cultural benefit; usually own at least 50% |
| Intra-Company Transfer (ICT) | People who already run an established business abroad | Open a Canadian branch or subsidiary and transfer yourself as an executive |
| Start-Up Visa (SUV) | Innovative, scalable tech or product businesses | A Letter of Support from an accredited angel group, VC fund, or incubator |

## Provincial Nominee Program (PNP) Entrepreneur Streams
Most provinces (e.g., British Columbia, Saskatchewan, Manitoba, Nova Scotia) have a stream for entrepreneurs. It usually works like this:
1. Apply to the province with your business plan.
2. Get a work permit and set up the business.
3. Meet the terms of your Business Performance Agreement.
4. Get nominated for permanent residence.

Typical requirements:
- **Net worth**: $300,000 to $600,000+ CAD, checked by an accounting firm.
- **Investment**: $150,000 to $200,000+ CAD put directly into the business.
- **Hands-on management**: you must run the business day to day from inside the province.
- **Jobs**: create at least 1 to 2 full-time jobs for Canadian citizens or permanent residents.

## Work Permit Routes
- **C11 (Significant Benefit)**: an LMIA-exempt work permit for owners whose business will create real benefit, such as jobs, regional development, or innovation. You usually need to own at least 50%.
- **Intra-Company Transfer (ICT)**: if you own an established business outside Canada, open a Canadian parent, branch, or subsidiary and transfer yourself as an executive or senior manager.

## The Start-Up Visa
!> The Start-Up Visa has gone through major pauses and yearly application caps set by IRCC. Applications already in the system are still being processed, but new founders should treat a PNP stream, C11, or ICT as their main option.

## Where to Get Help
- **BDC (Business Development Bank of Canada)**: loans, working capital, and advice for growing businesses.
- **Settlement agencies**: non-profits like ACCES Employment, COSTI, S.U.C.C.E.S.S., and ISSofBC run "Entrepreneurship for Newcomers" workshops on Canadian business culture, legal basics, and networking.
- For loans and grants, see [Funding Your Business](#guide-funding).

## How to Decide
- If you'll run the business remotely, you don't need an immigration stream.
- If you already own a business abroad, look at ICT first.
- If you want permanent residence and can meet the investment amounts, compare PNP streams in the provinces you'd live in.
- If your business clearly benefits Canada and you own at least half, ask an immigration professional about C11.
`},

{ id:"business-planning", track:"founder", stage:"plan", type:"howto", title:"Business Planning",
  summary:"Test your idea on one page, write a bank-ready business plan, set SMART goals, and plan for your biggest risks.",
  glance:{ who:"Every founder. Banks, investors, and immigration streams will ask for your plan.", result:"A business plan with 3-to-5-year financial projections" },
  body:`
## Steps
+ Test your idea on one page
Fill in a **Lean Canvas**: Problem, Solution, Unique Value Proposition, Unfair Advantage, Customer Segments, Key Metrics, Channels, Cost Structure, and Revenue Streams. It lets you test assumptions before you spend money.
> Already running? Use a **Business Model Canvas** instead. It focuses on partners, activities, resources, channels, and revenue streams.
+ Analyze your market
- **SWOT**: your Strengths and Weaknesses, plus outside Opportunities and Threats.
- **PESTLE**: outside factors in Canada, including Political (provincial rules), Economic (inflation, interest rates), Social (bilingual markets), Technological, Legal (privacy and employment law), and Environmental.
+ Write your business plan
Banks and lenders (e.g., RBC, TD, Scotiabank, BDC) expect these sections:
- **Executive summary**: your mission, team, product, and how much money you need.
- **Company and market**: your target customers in Canada, market size, and competitors.
- **Operations**: location, equipment, suppliers, and staffing.
- **Financial projections**: 3-to-5-year Income Statement (P&L), Cash Flow Forecast, and Balance Sheet.
+ Set SMART goals
Make each goal Specific, Measurable, Achievable, Relevant, and Time-bound.
> **Example**: "Increase sales of Product X in Greater Vancouver by 15% over the next 90 days with targeted LinkedIn ads."
+ Plan for your biggest risks
List risks by type: operational (a key supplier fails), financial (you run short of cash), and regulatory (tax or rule changes). For each, write a backup plan, such as a second supplier, a **3-to-6-month cash buffer**, and a quarterly check of rule changes.
`},

{ id:"funding", track:"founder", stage:"plan", type:"explainer", title:"Funding Your Business",
  summary:"Compare savings, investors, crowdfunding, newcomer loans, microloans, and grants, and learn how to get investor-ready.",
  answer:"Start with options that let you keep control: **your own savings and revenue, newcomer loans, and grants**. Approach angel investors or venture capital only if you're building a fast-growing, scalable company and are willing to give up some ownership.",
  body:`
## Compare Your Options
| Option | You Give Up | Best For |
|---|---|---|
| Bootstrapping (savings + revenue) | Nothing. You keep 100% ownership | Most small businesses |
| Loans | Nothing, but you repay with interest | Equipment, setup costs, working capital |
| Grants and subsidies | Nothing, and you don't repay | Exporting, innovation, hiring |
| Crowdfunding | Product rewards or pre-orders | Testing demand for a consumer product |
| Angel investors | Ownership (equity) or convertible notes | Early-stage startups |
| Venture capital | A significant ownership share | Fast-growing tech startups |

## Loans for Newcomers
- **BDC Newcomer Entrepreneur Loan**: $25,000 to $50,000 for permanent residents or protected persons who've been in Canada less than 3 years.
- **Futurpreneur Canada**: startup loans plus 2 years of one-on-one mentoring for founders aged 18–39, including newcomers who've lived in Canada less than 60 months with limited credit history. No collateral needed.
- **Canada Small Business Financing Program (CSBFP)**: the government guarantees up to 85% of a bank loan for equipment, renovations, and working capital, up to $1.15 million.
- **Windmill Microlending**: low-interest loans up to $15,000 for foreign-trained immigrants restarting their careers or launching a business that needs Canadian accreditation.
- **ACORN Canada / community microfinance**: small loans ($1,000 – $10,000) for newcomer micro-businesses.

## Grants and Subsidies
- **CanExport**: covers up to 50% of eligible costs (up to $50,000) to sell your products internationally.
- **NRC IRAP**: funding for small and medium businesses developing new technology.
- **Wage subsidies** (e.g., Canada Summer Jobs): refunds 50% to 75% of wages when you hire eligible workers.
- **Regional innovation funds**: provincial programs for priority sectors.

## Getting Investor-Ready
If you do approach investors, prepare two things:
- **A pitch deck** of 10 to 15 slides:
  1. Problem and market opportunity
  2. Product or solution, with a demo
  3. Market size (TAM, SAM, SOM)
  4. Business and revenue model
  5. Traction and key numbers
  6. Competitive advantage
  7. Financial forecasts (3–5 years)
  8. Team
  9. How much you're raising and how you'll use it
- **A data room**: a secure folder with your financial records, incorporation documents, cap table, IP ownership records, key customer contracts, and tax filings.

## How to Decide
- If you can start small, bootstrap and add a newcomer loan when you need equipment or stock.
- If you'll export or develop technology, check grants first, since you don't repay them.
- If you need a lot of money fast to grow, that's when angel investors or VCs make sense.
`},

/* ---- Set up legally ---- */
{ id:"business-structure", track:"founder", stage:"setup", type:"explainer", title:"Choosing a Business Structure",
  summary:"Sole proprietorship, partnership, or corporation: how they compare, federal vs. provincial incorporation, and which options work if you live outside Canada.",
  answer:"If you plan to grow, raise money, or use a business immigration stream, **incorporate**. If you're testing a low-risk idea on your own and live in Canada, a sole proprietorship is the simplest start. If you live outside Canada with no Canadian partner, incorporating **provincially in Ontario or British Columbia** is usually easiest.",
  body:`
> Canada has no "LLC" like the United States. The Canadian structure that protects your personal assets is a **corporation**.

## The Three Structures
| Structure | Owners | Your Personal Risk | Taxes | Best For |
|---|---|---|---|---|
| Sole proprietorship | 1 person | Unlimited: your personal assets are at risk | Reported on your personal tax return | Freelancers, low-risk small businesses, testing an idea |
| Partnership | 2 or more | Unlimited for general partners (unless LP or LLP) | Each partner reports their share | Co-founders, professional firms |
| Corporation | 1 or more shareholders | Limited: usually only what you invested | Separate tax return, lower small business rate | Growth, investors, higher-risk businesses |

## Sole Proprietorship
A business owned and run by one person, with no legal separation between you and the business.
- **Pros**: the fastest and cheapest to set up; income or losses go on your personal tax return (Form T2125); you make every decision.
- **Cons**: you're personally responsible for all debts and lawsuits, so your home, savings, and car are at risk; banks and investors rarely lend much; and it usually **doesn't qualify** for business immigration streams (C11, ICT, PNP).

## Partnership
Two or more people or companies running a business together for profit.
- **General partnership**: all partners manage the business and share full liability for its debts.
- **Limited partnership (LP)**: general partners manage and carry full liability; limited partners only invest and risk only what they put in.
- **Limited liability partnership (LLP)**: usually for licensed professionals (lawyers, accountants, doctors), protecting each partner from the others' mistakes.
!> Always sign a written Partnership Agreement. Partner disputes are the biggest risk.

## Corporation
A separate legal entity that can own property, sign contracts, borrow, and sue or be sued.
- **Pros**: limited personal liability; the Small Business Deduction, often about **9% to 12.2%** combined federal and provincial tax on the first $500,000 of active business income; you can issue shares to investors, co-founders, or staff; and it **works for** PNP, ICT, and C11 because share certificates prove ownership.
- **Cons**: higher setup and yearly costs, a minute book, annual filings, a separate corporate tax return (T2), and stricter rules for directors and shareholder decisions.

## Federal or Provincial?
| | Federal | Provincial |
|---|---|---|
| Name protection | Across all of Canada | Only in that province |
| Where you can operate | Every province and territory | That province; other provinces need extra registration |
| Resident directors | At least 25% must be Canadian residents (or 1 if fewer than 4 directors) | Varies. BC and Alberta don't require any; Ontario dropped its 25% rule in 2021 |
| Registration | Also register in the province where you operate | Register once with the province |
| Best for | National or online brands, international investors | Local shops and services in one province |

## If You Live Outside Canada
- You can't open a sole proprietorship unless you live in Canada, so incorporate.
- Federal incorporation is hard without a Canadian co-founder because of the resident director rule.
- **British Columbia, Ontario, and Alberta** allow 100% foreign directors.

## How to Decide
- Testing an idea alone, low risk, living in Canada? **Sole proprietorship.**
- Starting with co-founders? **Partnership with a written agreement**, or a corporation.
- Want to grow, raise money, or need it for immigration? **Corporation.**
- Living abroad with no Canadian partner? **Provincial corporation in Ontario or BC.**

Next: [Registering Your Business](#guide-register-business).
`},

{ id:"register-business", track:"founder", stage:"setup", type:"howto", title:"Registering Your Business",
  summary:"Approve your business name, file with the right registry, appoint an agent for service if you live abroad, and set up your minute book.",
  glance:{ who:"Founders who've chosen their structure", where:"Your provincial registry, or Corporations Canada for federal", result:"A registered business or corporation" },
  body:`
> Haven't chosen a structure yet? Read [Choosing a Business Structure](#guide-business-structure) first.

## Steps
+ Choose your business name
- A corporation's name must end with **Ltd., Inc., or Corp.**
- To save time and fees, you can use a **numbered name** instead (e.g., 12345678 Canada Inc.).
- If you operate under your exact legal name (e.g., Jane Doe), you don't need name approval. "Jane Doe Consulting" does need it.
+ Run a NUANS name search
Order a **NUANS** (Newly Upgraded Automated Name Search) report to make sure your name isn't too similar to an existing business or trademark. Most provinces and the federal government require it. Skip this step if you're using a numbered name.
+ Appoint an agent for service (if you live abroad)
Non-residents must appoint an **Agent for Service**: a person or company with a physical address in your province who can receive legal and government mail for you.
+ File with the right registry
- **Sole proprietorship or partnership**: register with your provincial registry (e.g., ServiceOntario, BC Registries, Registraire des entreprises du Québec).
- **Provincial corporation**: file with the provincial registry.
- **Federal corporation**: file with Corporations Canada, then also register in the province where you operate.
+ File your Articles of Incorporation (corporations)
Include your corporate name, a registered address in Canada, your share structure (e.g., Class A voting, Class B non-voting, preferred shares), share transfer restrictions, and the number of directors. Pay the filing fee.
+ Set up your minute book
Keep your company records together:
- First resolutions of directors and shareholders
- Bylaws
- Share certificates and a register of directors and officers
- **Register of Significant Control**: everyone who owns 25% or more of voting shares
+ Register a trade name if you need one
If you'll operate under a name different from your legal name (a "Doing Business As" name), register it with your province.

Next: [CRA Business Number & Tax Accounts](#guide-cra-accounts).
`},

{ id:"cra-accounts", track:"founder", stage:"setup", type:"howto", title:"CRA Business Number & Tax Accounts",
  summary:"Get your 9-digit Business Number from the Canada Revenue Agency and open the accounts you need for GST/HST, payroll, corporate tax, and importing.",
  glance:{ who:"Every registered business", where:"The Canada Revenue Agency (CRA)", result:"A 9-digit Business Number plus the tax accounts you need" },
  body:`
Your **Business Number (BN)** is a 9-digit number the CRA uses to track all your business tax accounts. Each account adds a 2-letter code and 4 digits to it (for example, RT0001).

## Which Accounts You Need
| Account | When You Need It |
|---|---|
| **GST/HST (RT0001)** | Once your sales pass $30,000 in a quarter or over four quarters in a row. Often worth opening from day one. |
| **Payroll (RP0001)** | Before you pay any wages, including to yourself. |
| **Import/Export (RM0001)** | If you bring equipment, materials, or goods into Canada. |
| **Corporate Income Tax (RC0001)** | Created automatically when you incorporate. |

## Steps
+ Get your Business Number
You'll get it when you register your business. Keep it with your registration documents.
!> **Living outside Canada without a SIN?** Register through the CRA's Non-Resident Business Registration online portal or with paper **Form RC1**.
+ Open a GST/HST account
You must register once your sales pass $30,000. Registering early lets you claim back the GST/HST you pay on startup costs, rent, and inventory. See [GST/HST & Sales Tax](#guide-gst-hst).
+ Open a payroll account before paying anyone
You'll use it to send employees' income tax, Employment Insurance (EI), and Canada Pension Plan (CPP) deductions to the CRA.
+ Open an import/export account if you import
You need it to bring goods through the Canada Border Services Agency (CBSA).
+ Register for provincial sales tax if your province has one
BC, Saskatchewan, Manitoba, and Quebec have their own sales tax (PST, RST, or QST). Register for it separately from GST.
+ Plan for your corporate tax return
Your corporate tax account is created automatically. **Even if your corporation earns nothing, you must file a T2 return every year.**
`},

{ id:"business-banking", track:"founder", stage:"setup", type:"howto", title:"Business Bank Account & Credit",
  summary:"Open a Canadian business bank account without local credit history, choose between a big bank and an online platform, and build business credit.",
  glance:{ who:"Founders with a registered business", time:"Banks may hold cheques and international wires for 5 to 10 business days at first", where:"A bank branch, or online with a fintech platform", result:"A business account and a growing credit history" },
  body:`
This is often the hardest step for foreign founders. Anti-money laundering rules make Canadian banks careful, but you can get through it smoothly with the right documents.

## What You Need
[ ] **Two pieces of ID**: passport, PR card, provincial ID, or work permit.
[ ] **Proof of status in Canada**: PR card, work permit, or landing documents.
[ ] **Registration documents**
  - **Sole proprietorship**: Master Business Licence or provincial trade name registration.
  - **Corporation**: Certificate and Articles of Incorporation, plus your corporate profile.
[ ] **Your CRA Business Number**
[ ] **Proof the business is real**: invoices, supplier contracts, an office lease, or a business plan showing expected cash flow.
[ ] **Your foreign Tax Identification Number (TIN)**: banks ask for it under international tax rules (CRS and FATCA).

## Steps
+ Choose a big bank or an online platform
- **Big banks** (RBC, TD, Scotiabank, BMO, CIBC) almost always need at least one director to visit a Canadian branch with two pieces of ID.
- **Online platforms** for international founders (such as Venn) let you open multi-currency Canadian business accounts completely online.
+ Bring ID for every major owner
Banks need ID for everyone who owns **25% or more** of the company's shares.
+ Open the account and keep it separate
Use this account only for the business. Never mix personal and business money.
> No Canadian credit history? That's fine. Business deposit accounts don't depend on your credit score.
+ Get a secured business credit card
Put down a cash deposit (for example, $2,000–$5,000) as security. Make sure the bank reports your payments to **Equifax Commercial**.
+ Set up supplier credit (Net-30)
Ask key suppliers, office vendors, or utility providers for Net-30 terms. Paying them on time builds your commercial credit (Paydex) score.
+ Get a free D-U-N-S number
Register with Dun & Bradstreet for a free 9-digit D-U-N-S number. It puts your company into global credit systems.
+ Protect your credit
Keep credit card balances **below 30%** of your limits, and never file GST/HST or payroll late. CRA debts and tax liens damage your business credit.
`},

{ id:"licenses-compliance", track:"founder", stage:"setup", type:"howto", title:"Licenses, Permits & Annual Filings",
  summary:"Registering isn't a licence to operate. Find the permits you need, register with your workplace safety board, and keep up with yearly filings.",
  glance:{ who:"Every business, before it opens", where:"BizPaL, your city hall, and provincial agencies", result:"Permission to operate legally, and a calendar of yearly filings" },
  body:`
Registering your business federally or provincially doesn't give you permission to operate in a specific location or in a regulated industry. You need the right licences and permits too.

## Steps
+ Find every permit you need on BizPaL
[BizPaL](https://bizpal-perle.ca) is a free government tool. Enter your location and industry, and it lists the federal, provincial, and municipal permits you need.
+ Get your municipal business licence
Cities like Toronto, Vancouver, and Calgary issue licences by type of business (food, retail, personal services). Home businesses may need a home occupation permit, and food businesses need a health inspection.
+ Check your zoning
Make sure your commercial space or home office is zoned for your type of business before you sign a lease.
+ Get any provincial licence your industry needs
Regulated industries, like liquor sales, daycares, and construction trades, need a provincial licence.
+ Register with your workplace safety board before hiring
Most provinces require employers to register with their workplace safety board (e.g., **WSIB** in Ontario, **WorkSafeBC** in BC) for injury insurance before the first hire.
+ Add your yearly filings to your calendar
| Filing | Who | When |
|---|---|---|
| Annual Return (business registry) | Corporations | Every year, to confirm your address and directors. Separate from taxes. |
| Corporate tax return (T2) | Corporations | Within 6 months of your fiscal year-end |
| Personal tax return (T1) | Sole proprietors and partners | June 15 (any tax owed is due April 30) |
| GST/HST return | GST/HST registrants | Monthly, quarterly, or yearly, depending on revenue |
`},

/* ---- Taxes and money ---- */
{ id:"business-taxes", track:"founder", stage:"money", type:"explainer", title:"How Business Taxes Work",
  summary:"How your structure decides your taxes, the small business rate and CCPC status, payroll taxes, and every filing and payment deadline.",
  answer:"If you're a sole proprietor or partner, your business profit is taxed as **personal income**. If you're incorporated, the corporation pays a **lower small business rate** on its first $500,000 of income, but only if it qualifies as a **Canadian-Controlled Private Corporation (CCPC)**.",
  body:`
## Personal vs. Corporate Tax
| | Personal Income Tax | Corporate Income Tax |
|---|---|---|
| Who pays | Sole proprietors, partners, and employees | Corporations |
| Tax return | T1 (personal) | T2 (corporate) |
| How the rate works | Goes up as you earn more | A lower flat rate on active business income (Small Business Deduction up to $500,000) |

Canada taxes in two layers: **federal tax + provincial tax**, both on your net income (revenue minus allowable expenses).

## The Small Business Rate and CCPC Status
- **CCPC**: a private corporation set up in Canada that isn't controlled by non-residents or public companies.
- **Small business rate**: applies to a CCPC's first **$500,000** of active business income each year.
- **General rate**: applies above $500,000, or to any corporation that isn't a CCPC.
!> If non-residents (for example, family back home or a foreign investment company) control **more than 50% of the voting shares**, your company isn't a CCPC. It pays the general rate, about **23%–27%**, from its first dollar.

## Payroll Taxes
If you have employees, you need a CRA payroll account. You take these out of each paycheque and send them to the CRA:
- Canada Pension Plan (CPP) contributions
- Employment Insurance (EI) premiums
- Income tax

## Tax Calendar
| What | When |
|---|---|
| Personal return (sole proprietor) | File by June 15; pay any tax owed by April 30 |
| Corporate return (T2) | File within 6 months of your fiscal year-end |
| Corporate tax payment | Within 3 months of year-end (qualifying CCPCs) or 2 months (other corporations) |
| Payroll remittances (PD7A) | Monthly, usually by the 15th of the next month |
| GST/HST returns | Monthly, quarterly, or yearly, depending on your reporting period |

## Get a Canadian CPA
Taxes get complicated fast for immigrants, especially with foreign assets (Form T1135) or money moving across borders. A Canadian CPA is worth it from your first year.
`},

{ id:"gst-hst", track:"founder", stage:"money", type:"howto", title:"GST/HST & Sales Tax",
  summary:"When you must register for GST/HST, why registering early can save money, which rate to charge, and how to get refunds through Input Tax Credits.",
  glance:{ who:"Businesses nearing $30,000 in sales, or anyone who wants to register early", time:"Register within 29 days of passing $30,000", where:"The Canada Revenue Agency (CRA)", result:"A GST/HST account and refunds on the tax you pay" },
  body:`
## Steps
+ Track your sales against $30,000
You don't have to register while your **total worldwide sales over four quarters in a row** stay under **$30,000 CAD**.
+ Decide whether to register early
You can register before $30,000. The benefit: you can claim back the GST/HST you paid on startup costs through **Input Tax Credits (ITCs)**. The trade-off: you have to charge your customers tax and file returns.
+ Register on time
Once you pass $30,000, register with the CRA **within 29 days** and start charging sales tax.
+ Charge the right rate
The rate depends on where your customer receives the product or service (the "place of supply" rule). Depending on the province, you charge GST, HST, or GST plus provincial tax (PST or QST). Combined rates range from **5% to 15%**.
> Selling online? Set your payment platform to calculate tax from the customer's shipping address.
+ Claim your Input Tax Credits
Keep receipts for every business purchase you paid GST/HST on.
> **Net tax to pay (or refund)** = GST/HST you collected − GST/HST you paid on business purchases

If you paid more than you collected, the CRA refunds the difference.
+ File your returns
File monthly, quarterly, or yearly, depending on your revenue. Late filing hurts your [business credit](#guide-business-banking).
`},

{ id:"bookkeeping", track:"founder", stage:"money", type:"howto", title:"Bookkeeping, Expenses & Cash Flow",
  summary:"Keep CRA-ready records, know which expenses you can deduct, manage cash flow, choose accounting software, and read your financial statements.",
  glance:{ who:"Every business owner", time:"Keep records for 6 years and reconcile every month", result:"CRA-ready records and a clear view of your cash" },
  body:`
## Steps
+ Keep business and personal money separate
Open a dedicated Canadian business bank account and use it only for the business. See [Business Bank Account & Credit](#guide-business-banking).
+ Choose accounting software
- **QuickBooks Online or Xero**: the standard choices; they sync with Canadian bank accounts.
- **Wave**: a budget-friendly option for new sole proprietors and freelancers.
- **Float or Pulse**: for forecasting your cash flow.
Most software uses **double-entry bookkeeping**, which keeps your assets, liabilities, and equity balanced.
+ Save every receipt for 6 years
The CRA requires you to keep receipts, invoices, and bank statements for at least **6 years**. Scan or photograph paper receipts, because heat-printed receipts fade.
+ Track your deductible expenses
An expense is deductible if you spent it to earn business income.
| Expense | How Much You Can Deduct |
|---|---|
| Commercial rent & utilities | All of it, for office, retail, or warehouse space |
| Vehicle (gas, insurance, repairs) | The business share of kilometres. Keep a logbook |
| Meals & entertainment | Usually 50% |
| Home office | The share of your home used only for business, if it's your main workplace |
| Software, marketing & professional fees | All of it (legal, accounting, advertising, CRM tools) |
| Equipment, computers & vehicles | Not all in year one. Deducted a set percentage each year (Capital Cost Allowance) |
+ Reconcile every month
Match your accounting records against your bank and credit card statements at the end of each month.
+ Watch your cash flow
Cash flow is the money coming in versus going out.
> Being profitable on paper doesn't help if you can't pay rent or suppliers today.

Keep **3 to 6 months** of essential expenses in a separate high-interest business account, and plan future income and spending with a budget.
+ Read your financial statements
- **Profit & Loss (Income Statement)**: revenue, costs, and profit over a period.
- **Balance Sheet**: a snapshot showing that Assets = Liabilities + Equity.
- **Break-even point**: how much you need to sell to cover all costs (where profit = $0).
`},

/* ---- Run and grow ---- */
{ id:"marketing", track:"founder", stage:"grow", type:"howto", title:"Marketing, Branding & Advertising",
  summary:"Build your brand and customer profiles, get found online, use social media and community advertising, and follow Canada's anti-spam rules.",
  glance:{ who:"Founders ready to find customers", result:"A clear brand and a low-cost plan to reach Canadian customers" },
  body:`
## Steps
+ Define your brand
- **Voice**: choose your tone (professional, friendly, expert) and your colours, fonts, and image style.
- **Brand kit**: set logo sizes, spacing, and approved colours (CMYK for print, RGB/HEX for screens).
- **Positioning statement**: who you serve, what you do for them, and why they should choose you over local competitors.
+ Describe your customers
Write one or two customer profiles:
- **Who they are**: age, location (city or rural), income, and job.
- **What drives them**: goals, daily frustrations, why they buy, and where they get information.
+ Get found on Google
- Set up and verify your **Google Business Profile** so you appear on Google Maps.
- Use local keywords on your website (e.g., "accounting services Calgary").
+ Choose your social platforms
- **LinkedIn**: business-to-business services, consulting, and networking.
- **Instagram, TikTok, Facebook**: local services, retail, and restaurants.
Share useful, non-salesy content, like how-to videos, tips, and customer stories, that solves your customers' problems.
+ Advertise in your community
- **Ethnic media and radio**: community newspapers and stations that serve specific communities build trust fast.
- **Sponsorships**: local sports teams, community centre events, or neighbourhood festivals.
- **Local networks**: join your Chamber of Commerce or business improvement area (BIA), and partner with businesses that complement yours.
+ Follow the anti-spam law (CASL) for email
- Get clear permission with an opt-in checkbox that **isn't pre-ticked**, or have a business transaction with the person in the last 24 months.
- Every marketing email must include your business name, mailing address, contact details, and a one-click unsubscribe.
!> Unsubscribe requests must be processed within **10 business days**. Your ads must also show clear pricing and respect privacy rules.
`},

{ id:"sales-customers", track:"founder", stage:"grow", type:"howto", title:"Sales & Customer Management",
  summary:"Turn interest into sales with a simple sales funnel, a CRM, the right pricing, and habits that keep customers coming back.",
  glance:{ who:"Founders with leads to convert", result:"A repeatable way to win and keep customers" },
  body:`
## Steps
+ Map your sales funnel
- **Awareness**: people find you through marketing, content, networking, or ads.
- **Consideration**: they try a demo, see a presentation, read a guide, or get a free consultation.
- **Decision**: they get a clear quote, a standard agreement, or a risk-free trial.
+ Track leads in a CRM
Use a Customer Relationship Management tool (e.g., HubSpot, Salesforce, Zoho). Set stages like New Lead → Contacted → Proposal Sent → Won/Lost, and turn on follow-up reminders.
+ Set your prices
| Method | How It Works |
|---|---|
| Cost-plus | Your costs plus overhead, plus a profit margin |
| Value-based | What your product is worth to the customer |
| Competitive | Based on local Canadian prices, positioned as premium, mid-range, or budget |
+ Keep your customers
Check in after each sale, reward loyalty, reply quickly, and send short satisfaction surveys.
+ Negotiate for win-win
Instead of cutting your price, offer flexible payment terms (Net-30 or Net-60, staged payments) or adjust what's included.
`},

{ id:"operations", track:"founder", stage:"grow", type:"howto", title:"Operations Management",
  summary:"Run your day-to-day reliably with written procedures, smart inventory and local suppliers, quality checks, and task boards.",
  glance:{ who:"Businesses with repeating daily work", result:"Reliable daily operations that don't depend on memory" },
  body:`
## Steps
+ Write down how you do things (SOPs)
Document your regular tasks, like onboarding a client, processing an order, or counting inventory, as written steps or short videos (e.g., Loom). Keep them in one place (e.g., Notion or Confluence).
+ Manage inventory first-in, first-out
Sell older stock first (FIFO) so products don't expire or go out of date. Connect your point-of-sale system (e.g., Square, Lightspeed) to your inventory software.
+ Find Canadian suppliers
Have at least one main or backup supplier inside Canada. It cuts customs fees, border checks, and shipping delays. If you import, read the Canada Border Services Agency (CBSA) import guide.
+ Add quality checks
Add a sign-off step when goods arrive, during production, and before anything ships.
+ Track work on a task board
Use a visual board (e.g., Trello, Asana, Monday.com) to see each job's stage, who owns it, and where things get stuck.
> Some industries are federally regulated. Check whether yours is before you scale up.
`},

{ id:"human-resources", track:"founder", stage:"grow", type:"howto", title:"Hiring & Human Resources",
  summary:"Hire fairly under Canadian law: compliant job posts, safe interview questions, proper onboarding, provincial employment standards, and reviews.",
  glance:{ who:"Founders making their first hires", result:"A fair, legal hiring process and team policies" },
  body:`
## Steps
+ Get ready before your first hire
Open a CRA payroll account and register with your workplace safety board (WCB/WSIB). See [Licenses, Permits & Annual Filings](#guide-licenses-compliance).
+ Write a fair job description
Base it only on the skills, education, and duties the job needs. State whether the job is remote, hybrid, or in-office, and which languages are required (English, French, or both).
> Hiring from abroad? See the Government of Canada's guidance on hiring temporary foreign workers.
+ Interview with legal questions only
!> Never ask about age, marital or family status, sexual orientation, religion, disability, or plans to have children. These are protected under Canadian human rights law.
Use the same structured questions for every candidate.
+ Onboard properly
Plan Day 1: company culture, logins, what you expect, and workplace health and safety.
+ Follow your province's employment standards
Each province sets its own rules for minimum wage, overtime, statutory holiday pay, paid vacation, and notice or severance when someone leaves. Write policies for health and safety, remote work, and anti-harassment.
+ Review performance
Hold a formal review near the end of the **90-day probation period**, then once or twice a year based on clear goals (KPIs or OKRs).
`},

{ id:"legal-compliance", track:"founder", stage:"grow", type:"howto", title:"Legal Protection, IP & Privacy",
  summary:"Protect your brand and ideas with CIPO, use proper contracts, and handle customer data the way Canada's privacy law (PIPEDA) requires.",
  glance:{ who:"Every business with a brand, ideas, or customer data", where:"The Canadian Intellectual Property Office (CIPO)", result:"Protected IP, solid contracts, and a privacy setup" },
  body:`
## Steps
+ Trademark your brand
Search CIPO's register, then file to protect your business name, logo, and slogan.
+ Protect your other IP
- **Copyright** applies automatically when you create something, but registering written work, code, or creative assets with CIPO makes it easier to defend in court.
- **Patents** protect new, non-obvious inventions or processes. File with CIPO.
+ Use an NDA before sharing secrets
Sign a Non-Disclosure Agreement before you share trade secrets, finances, or new ideas with contractors, suppliers, or potential partners.
+ Standardize your client contracts
Every contract should cover the scope of work, milestones, payment schedule, who owns the IP, limits on liability, and how either side can end it.
+ Publish a privacy policy
Under PIPEDA, explain what personal data you collect, why, how you use it, where it's stored, and who you share it with.
+ Handle consent and requests
Add cookie consent so visitors can accept or reject tracking. Name a Privacy Officer, and set up a way for people to ask to see or delete their personal information.
> The Office of the Privacy Commissioner of Canada has PIPEDA compliance help for small businesses.
`},

{ id:"business-technology", track:"founder", stage:"grow", type:"howto", title:"Technology & Cybersecurity",
  summary:"Choose core software for accounting, teamwork, storage, and AI, and protect your business with MFA, password managers, training, and backups.",
  glance:{ who:"Every business", result:"The right tools and basic protection against data loss and hacking" },
  body:`
## Steps
+ Pick your core tools
- **Accounting**: QuickBooks Online or Xero, set up for Canadian sales taxes (GST, PST, HST, QST).
- **Teamwork**: Slack or Microsoft Teams, plus Asana, Trello, or Monday.com for projects.
- **Storage**: Google Workspace, Microsoft 365, or Dropbox, with access based on each person's role.
- **AI**: tools like ChatGPT or Claude to draft content, analyze data, or answer simple customer questions.
+ Turn on multi-factor authentication
Turn on MFA for email, banking, and every business tool.
+ Use a password manager
Use a password manager (e.g., 1Password, Bitwarden) to create and store strong passwords for everyone.
+ Train your team
Teach staff to spot phishing emails, scams that impersonate people, and unsafe habits when working remotely.
+ Back up with the 3-2-1 rule
Keep **3** copies of your data, on **2** different types of storage, with **1** copy off-site or in the cloud. Make backups automatic.
`}

];
