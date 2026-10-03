// Project content for the home page, the work index and the case studies.
// Keep everything here factual: what exists, what's in progress, what's next.

export const projects = [
  {
    slug: `isgobite`,
    name: `IsGoBite`,
    kicker: `Small-business platform`,
    tagline: `A digital presence platform for small businesses.`,
    summary: `Owners describe their business once. IsGoBite turns that into a website, content, and a presence on the channels their customers already use.`,
    status: `Live · in active development`,
    statusTone: `live`,
    diagram: `presence`,
    links: [{ label: `isgobite.com`, href: `https://isgobite.com` }],
    meta: [
      { label: `Role`, value: `Founder · product, design, engineering` },
      { label: `Platform`, value: `Web app, API, iOS in progress` },
      { label: `Status`, value: `Live at isgobite.com` },
    ],
    problem: [
      `Small business owners know their business better than anyone: who they serve, what they offer, what makes them different. Turning that into a website, regular content, and a consistent presence online takes time and skills most of them don't have.`,
      `The usual answer is a website builder. That solves one piece. The owner still has to figure out what to say, where to say it, and how to keep it going.`,
    ],
    product: {
      intro: `IsGoBite is a digital presence platform. An owner fills in one Business Profile. Name, industry, audience, and offer. Every other part of the platform builds from it.`,
      features: [
        {
          title: `Website Builder`,
          text: `Industry blueprints for salons, mechanics, food trucks, photographers, fitness studios and more. A business starts from sections that fit, not a blank page.`,
        },
        {
          title: `Content Studio`,
          text: `Create posts, guides, and infographics. “Turn Into” repurposes one piece of content into formats for other channels.`,
        },
        {
          title: `Publishing`,
          text: `Publish directly to LinkedIn, YouTube, TikTok, and X from inside the platform.`,
        },
        {
          title: `Go-to-market setup`,
          text: `Define audience and message once. That strategy feeds straight into content generation.`,
        },
        {
          title: `Local guides`,
          text: `A restaurant can publish a food guide. A mechanic can publish a vehicle care guide. Same platform, different industries.`,
        },
        {
          title: `Sophia workspace`,
          text: `An assistant that drafts work for the owner inside the platform. Its actions go through an approval step before anything changes.`,
        },
      ],
    },
    role: {
      intro: `I'm the founder. I defined the product, designed the flows, and built the platform.`,
      items: [
        `Product direction, scope, and the move from consumer app to business platform`,
        `Business Profile onboarding and the data model behind it`,
        `React frontend and Node.js / Express API`,
        `Supabase for Postgres, auth, and row-level security`,
        `Integrations: Stripe billing, Google Places, and social publishing APIs`,
        `Deployment on Netlify and Heroku, plus automated tests`,
      ],
    },
    howItWorks: [
      {
        title: `One profile, many outputs`,
        text: `The Business Profile is the single source of truth. The website, content, and strategy all read from it, so an owner never has to explain their business twice.`,
      },
      {
        title: `Industry is configuration, not code`,
        text: `Industry blueprints are data. Adding a new kind of business means adding a configuration, not building a new module. The planned booking engine follows the same rule: one engine, configured per business.`,
      },
      {
        title: `Strategy drives content`,
        text: `The go-to-market setup connects directly to the Content Studio. Content follows a plan instead of being produced one post at a time.`,
      },
      {
        title: `The owner stays in control`,
        text: `Generated drafts and assistant actions wait for approval. Nothing is published or changed on the owner's behalf without a decision from them.`,
      },
      {
        title: `Built from a pivot`,
        text: `IsGoBite started as a consumer app for deciding where to eat. It now serves the businesses themselves. The local-guide features carry that origin forward.`,
      },
    ],
    result: {
      intro: `IsGoBite is live at isgobite.com and in active development.`,
      shipped: [
        `Business Profile onboarding`,
        `Website Builder with industry blueprints`,
        `Content Studio with repurposing and infographics`,
        `Publishing to LinkedIn, YouTube, TikTok, and X`,
        `Go-to-market strategy setup`,
        `Subscription billing with Stripe`,
      ],
      next: [`A configurable booking engine for any business type`, `iOS app`],
    },
    stack: [
      `React`,
      `Node.js`,
      `Express`,
      `Supabase`,
      `Stripe`,
      `Google Places API`,
      `OpenAI API`,
      `Capacitor`,
      `Netlify`,
      `Heroku`,
    ],
  },
  {
    slug: `fleetfav`,
    name: `FleetFav`,
    kicker: `Fleet operations`,
    tagline: `Load, driver, and profit tracking for trucking companies.`,
    summary: `Once a broker approves a load, a carrier still has to assign it, pay the driver, track costs, and prove delivery. FleetFav runs that work in one system.`,
    status: `In development · preparing for pilot`,
    statusTone: `building`,
    diagram: `loads`,
    links: [
      { label: `fleetfav.com`, href: `https://fleetfav.com` },
      { label: `Demo video`, href: `https://fleetfav.com/demo` },
    ],
    meta: [
      { label: `Role`, value: `Founder · product, design, engineering` },
      { label: `Platform`, value: `Web app, driver mobile app, API` },
      { label: `Status`, value: `In development, preparing for pilot` },
    ],
    problem: [
      `For a small carrier, a broker approving a load is where the work starts. Someone has to assign a driver and agree on pay. Someone has to track fuel, tolls, and repairs, confirm the delivery happened, and work out whether the load made money.`,
      `That work usually lives across spreadsheets, text messages, and paper. Drivers aren't sure what they'll earn. Owners don't know their real profit per load until long after the fact.`,
    ],
    product: {
      intro: `FleetFav is an operations platform for carriers. It covers everything that happens after broker approval, with a web app for the office and a mobile app for drivers.`,
      features: [
        {
          title: `Load management`,
          text: `Enter loads by hand or import them in bulk from CSV. The groundwork for connecting to TMS platforms is in place.`,
        },
        {
          title: `Driver assignment`,
          text: `Set pay per load as flat, percentage, or per-mile. Drivers see their expected earnings before they accept.`,
        },
        {
          title: `Cost tracking`,
          text: `Record fuel, tolls, lumper fees, repairs, and other costs against each load.`,
        },
        {
          title: `Delivery verification`,
          text: `Each delivery records time, driver, truck, and location. Drivers upload proof-of-delivery photos from their phones.`,
        },
        {
          title: `Financial rollup`,
          text: `Revenue, driver pay, expenses, and profit, per load and across the fleet.`,
        },
        {
          title: `Maintenance handoff`,
          text: `Open a vehicle's repair context in Workshop OS, a companion maintenance product, in one click.`,
        },
      ],
    },
    role: {
      intro: `I'm the founder. I scoped the product, designed the workflows and roles, and built all three parts of the system.`,
      items: [
        `Product scope, user roles, and the end-to-end load workflow`,
        `Web app for company admins and dispatchers (React)`,
        `Driver mobile app with location, notifications, and photo capture (React Native / Expo)`,
        `API for loads, dispatch, and tracking (Node.js / Express)`,
        `Supabase schema, auth, and invite-only onboarding`,
        `Usage-based billing with Stripe, deployment, and end-to-end tests`,
      ],
    },
    howItWorks: [
      {
        title: `A deliberately narrow scope`,
        text: `FleetFav is not a load board, a broker, or a dispatch service. It starts where broker approval ends. That line keeps the product focused on the carrier's own operations.`,
      },
      {
        title: `Pay before assignment`,
        text: `A load can't be assigned until driver pay is set. The same calculation drives what the driver sees and what payroll records, so the number shown is the number paid.`,
      },
      {
        title: `Each role gets its own workflow`,
        text: `Company admins, dispatchers, fleet managers, and drivers each see the work that belongs to them. Drivers see their active loads ordered by stage. Admins see money and operations.`,
      },
      {
        title: `Pricing follows the work`,
        text: `Billing is tied to completed loads. A small fleet can start without a large upfront commitment.`,
      },
      {
        title: `Systems share identifiers, not data`,
        text: `The handoff to Workshop OS passes only record identifiers and the vehicle plate. Each product keeps ownership of its own data.`,
      },
    ],
    result: {
      intro: `FleetFav is in active development and being prepared for pilot use with carriers.`,
      shipped: [
        `Web platform for admins and dispatchers`,
        `Driver mobile app`,
        `Fleet API for loads, dispatch, and GPS tracking`,
        `Company registration and invite-based onboarding`,
        `Bulk CSV import for loads and drivers`,
        `Financial dashboards and completion-based billing`,
      ],
      next: [`Integrations with multiple TMS platforms`],
    },
    stack: [
      `React`,
      `React Native`,
      `Expo`,
      `Node.js`,
      `Express`,
      `Supabase`,
      `Redis`,
      `Stripe`,
      `Netlify`,
      `Heroku`,
      `Playwright`,
    ],
  },
]

export const getProject = slug => projects.find(p => p.slug === slug)
