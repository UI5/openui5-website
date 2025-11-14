var proposalLineupJson = [
  {
    id: "id-1708611655292-754",
    title:
      "Extreme Freestyle: pushing the boundaries of reusability and extensibility",
    type: "presentation_short",
    description:
      "If you try to build software with OpenUI5 outside of the SAP ecosystem, how far can you go? What are the pitfalls and dangers of doing this? Is it even possible?\n\nMany would dismiss the idea. After all, it is an enterprise framework for SAP systems only, right? Well, we decided to take a shot anyways and journeyed into the unknown. In this session, we share key insights on some emerging patterns that we discovered after more than 5000 developer hours into the project. Turns out, the means to scale, maintain and expand such a system are available today, natively. \n\nKey points include:\n\n- Fully embracing TypeScript - for controls, libraries and applications.\n- Prioritizing library development. Most new functionalities go in libraries, enhancing reusability across client apps\n- Modular architecture through controller extensions, service layer classes and enhanced OOP support\n- Strongly typed, safe and extensible state management achieved natively without third-party software\n- Adoption of inversion of control principles, including dependency injection &amp; service locator\n\nJoin this session for a fresh perspective on what a TypeScript based OpenUI5 project can do.",
    location: "room_w1",
    startTime: "15:30",
    endTime: "15:55",
    speakers: [
      {
        firstName: "Dimitar",
        lastName: "Fenerski",
        company: "SproutSoft",
        bio: "With over five years of experience in UI5 development, I serve as the architect for a SaaS product using UI5 on the frontend. My expertise encompasses integrating UI5 with backend systems such as NestJS, Azure, and Kubernetes. Skilled in technical implementation and solution design, I also have a keen interest in mathematics and problem-solving, which shapes my approach to challenges in the technology sector.",
        twitterHandle: "@dfenersky",
        linkedInUrl: "dimitar-fenerski-b91610181",
        githubUrl: "https://github.com/dfenerski",
        hasPhoto: true,
        photoUrl: "223f5f9436f4c01c1cc7670e5356650afb1d6f52",
      },
    ],
    presentationLinks: [
      {
        linkType: "Slides",
        url: "https://github.com/dfenerski/ui5con2024/blob/master/ExtremeFreestyle.pdf",
      },
      {
        linkType: "Custom state library",
        url: "https://github.com/dfenerski/ui5-state",
      },
      {
        linkType: "Custom DI library",
        url: "https://github.com/dfenerski/ui5-di",
      },
      {
        linkType: "Recording",
        url: "https://www.youtube.com/watch?v=Yw5BbUfKLHs",
      },
    ],
  },
  {
    id: "id-1706096758741-367",
    title: "Let's test UI5 in 2024",
    type: "presentation_long",
    description:
      "UI5 has evolved over the years and so has testing! New tools were developed, others sunsetted and frameworks changed. In this session, we will tackle the whole testing pyramid of UI5 with all the current tools and frameworks to write good automated tests. Starting from the bottom we will work us through all the different layers finishing with the E2E-Tests. Fasten your seatbelts and let's dive into the world of testing!",
    location: "room_w1",
    startTime: "16:15",
    endTime: "17:00",
    speakers: [
      {
        firstName: "Simon",
        lastName: "Coen",
        company: "j&amp;s-soft GmbH",
        bio: "UI5 Developer and wdi5 core contributor with strong focus on test automation. Loves to push the framework to its limits and beyond.",
        twitterHandle: "@scoen98",
        linkedInUrl: "simon-coen-49b656181",
        githubUrl: "https://github.com/Siolto",
        hasPhoto: true,
        photoUrl: "0b0741c9f3b52f05c4d2f7d37eecad07ea2a9554",
      },
    ],
    presentationLinks: [
      {
        linkType: "GitHub Project",
        url: "https://github.com/Siolto/UI5Con2024/tree/main",
      },
      {
        linkType: "Slides",
        url: "https://github.com/Siolto/UI5Con2024/blob/main/Let's%20test%20UI5.pdf",
      },
      {
        linkType: "Recording",
        url: "https://youtu.be/wlYa6xaZc0w",
      },
    ],
  },
  {
    id: "id-1706283381535-527",
    title: "UI5 Unveiled: A Decade of Love, Lessons, and Elegance",
    type: "presentation_short",
    description:
      "Dive into a 10-year journey where our relationship with UI5 blossomed, faced challenges, and matured. From a React and Angular look-a-like to seamless integrations with Web Components and GraphQL, we've traversed diverse landscapes. Despite the trials and tribulations, our commitment to UI5's elegance remains unwavering.\n\nJoin me in this candid session where I'll unveil the highs and lows of UI5, drawn from a decade of our hands-on experience. Through code snippets and visuals, I'll dissect what worked and what didn't—be it the Flux Pattern, MicroApps, various integrations.\n\nDiscover how UI5 has weathered the test of time and how it stands tall, offering unique benefits when compared to React or Angular. Let's celebrate the beauty, acknowledge the challenges, and explore why UI5 remains a steadfast choice.",
    location: "room_w1",
    startTime: "17:15",
    endTime: "17:40",
    speakers: [
      {
        firstName: "Oliver",
        lastName: "Pehnke",
        company: "eXXcellent solutions GmbH",
        bio: "Oliver, a Software Architect at eXXcellent solutions GmbH in Ulm since 2005, boasts over 15 years of software development experience. He's led key projects, such as Germany's education portal, showcasing his adeptness with technologies like SAPUI5 and OpenUI5. Oliver effortlessly transitions between roles, from hands-on coding to client-facing training, driven by his passion for innovation. His commitment to quality and willingness to blend technologies without bias make him a valuable asset.",
        linkedInUrl: "https://www.linkedin.com/in/oliver-pehnke-5711718",
        githubUrl: "https://github.com/oliverp",
        hasPhoto: true,
        photoUrl: "803542bc6c5b8f0bf0b1f1b329d9cceb49308ba7",
      },
    ],
    presentationLinks: [
      {
        linkType: "Slides",
        url: "https://tech-blog.exxcellent.de/assets/ui5con-unveiled-06_06_2024.pdf",
      },
      {
        linkType: "Recording",
        url: "https://youtu.be/Qz42xrU9NMM?",
      },
    ],
  },
  {
    id: "id-1707770725752-217",
    title: "Results of a comprehensive survey on UI5 app usage in Production",
    type: "presentation_short",
    description:
      "In an effort to harness the collective wisdom of the UI5 community and provide actionable insights to SAP, the German SAP User Group (DSAG) conducted a thorough survey exploring the real-world application of UI5-based apps across various enterprises. \nThis talk will unveil the findings of this survey, which spans freestyle UI5 apps, Fiori Elements, and standard Fiori app usage in production environments. \nFrom deployment practices to development tools, and from integration tests to bootstrapping methods, we'll delve into the current state of UI5 app productivity. \n\nBy participating, attendees will gain invaluable feedback on UI5's practical usage, uncover trends and patterns in app development and deployment, and learn about the community's preferences for IDEs, testing, and more. \nJoin us to discover how your peers are maximizing the potential of UI5 apps and how these insights can shape the future of UI5 development.",
    location: "audimax",
    startTime: "12:00",
    endTime: "12:25",
    speakers: [
      {
        firstName: "Marian",
        lastName: "Zeis",
        company: "IT Consulting Marian Zeis",
        bio: "Independent SAP Full Stack Developer with special interest in UI5 and the whole SAP Fiori ecosystem",
        blueskyHandle: "@mianbsp.bsky.social",
        mastodonHandle: "@Mianbsp@saptodon.org",
        twitterHandle: "@mianbsp",
        linkedInUrl: "marianzeis",
        githubUrl: "https://github.com/marianfoo",
        hasPhoto: true,
        photoUrl: "8f3524f01665bed693331dff98545a2f2869fa5c",
      },
      {
        firstName: "Volker",
        lastName: "Buzek",
        company: "j&amp;s-soft",
        bio: "Development Architect in the SAP mobile/web cosmos. Faible for async code, Continuous Integration and Testing. SAP Mentor.",
        blueskyHandle: "@vobu.bsky.social",
        mastodonHandle: "@vobu@saptodon.org",
        twitterHandle: "@vobu",
        linkedInUrl: "volkerbuzek",
        githubUrl: "https://github.com/vobu",
        hasPhoto: true,
        photoUrl: "eb6f8a62dd78081e14665d4cf2fe4f0447916324",
      },
    ],
    presentationLinks: [
      {
        linkType: "Slides",
        url: "https://github.com/marianfoo/marianfoo/raw/main/ui5con-2024-survey.pdf",
      },
      {
        linkType: "Raw Survey Data",
        url: "https://github.com/marianfoo/marianfoo/raw/main/ui5con-2024.xlsx",
      },
      {
        linkType: "Recording",
        url: "https://youtu.be/aiahbh9noKk",
      },

    ],
  },
  {
    id: "id-1707997655371-934",
    title:
      "Easy UI5 project generator 2.0 - a new implementation and best practices",
    type: "presentation_short",
    description:
      "In this talk we will dive into the newest implementation of the Easy UI5 project generator (generator-ui5-project) and its benefits. We will also talk about new best practices for project architectures with multiple UI(5) modules and how you can follow them using the new generator-ui5-project.",
    location: "audimax",
    startTime: "15:00",
    endTime: "15:25",
    speakers: [
      {
        firstName: "Nico",
        lastName: "Schoenteich",
        company: "SAP",
        bio: "Nico focuses on web development technologies and is interested in all things SAP Business Technology Platform. Before joining the team, he studied Psychology and therefore likes to focus on the user as well as the developer experience.",
        twitterHandle: "https://twitter.com/NicoSchoenteich",
        linkedInUrl: "https://www.linkedin.com/in/nico-schoenteich/",
        githubUrl: "https://github.com/nicoschoenteich",
        hasPhoto: true,
        photoUrl: "30c1a2b1088988886d14b05e855c836566d0088f",
      },
    ],
    presentationLinks: [
      {
        linkType: "Pull Request on GitHub",
        url: "https://github.com/ui5-community/generator-ui5-project/pull/75",
      },
      {
        linkType: "Recording",
        url: "https://www.youtube.com/watch?v=kjXSOA2sNHw",
      },

    ],
  },
  {
    id: "id-1708099621068-922",
    title: "Experience AI-powered SAP Fiori development with SAP Build Code",
    type: "hands_on_120",
    description:
      "Learn how to unleash the power of SAP Build Code, our innovative turn-key environment designed for coding, testing, integrations, and application lifecycle management, equipped with AI code generation by Joule Copilot. In this hands-on workshop, you'll learn how to create an SAP Fiori application from start to finish using SAP Build Code. You'll begin by creating a SAP Cloud Application Programming (CAP) service with AI, then generate an SAP Fiori Elements UI on top using SAP Fiori tools. Next, you'll deploy the app to SAP Business Technology Platform (BTP) and add it to SAP Build Work Zone. Here, business users can further personalize and adapt the application to their specific needs with SAPUI5 Flexibility. Join us to deep dive into a truly end-to-end experience of SAP BTP development with SAP Build Code!\n\nTo prepare for the session, please try to have the following ready:\n1) SAP BTP Trial account (https://developers.sap.com/tutorials/hcp-create-trial-account.html)\n2) SAP Build Code subscription in Trial (https://developers.sap.com/tutorials/build-code-setup.html)\n3) Optional for integration with Git: GitHub account and repository for the exercise (https://github.com/)",
    location: "room_w3",
    startTime: "11:00",
    endTime: "13:00",
    speakers: [
      {
        firstName: "Marc",
        lastName: "Huber",
        company: "SAP",
        bio: "Marc Huber is part of the Product Management team of SAP Build in Application Development, focusing on low-code / no-code (LCNC), AI and fusion development. Formerly he was founder of an AI software company in Germany for predicting fresh food demands in supermarkets and bakeries.",
        linkedInUrl: "https://www.linkedin.com/in/marc-huber-91276145/",
        hasPhoto: true,
        photoUrl: "9a55ac68291fbd13eeee70c36a0286465a530b18",
      },
      {
        firstName: "Vitor Eduardo",
        lastName: "Seifert Bazzo",
        company: "SAP",
        bio: "Developer @ SAP, working for the SAPUI5 Flexibility Team.",
        hasPhoto: true,
        photoUrl: "5b38fb066166e5590ed3b42d8995066c4d5b39f9",
      },
      {
        firstName: "Mikhail",
        lastName: "Benderskiy",
        company: "SAP",
        bio: "Mikhail started his journey as a frontend developer for SAPUI5 ten years ago and has since transitioned to the role of product owner for SAPUI5 flexibility.",
        hasPhoto: true,
        photoUrl: "d547b51337ed629b7a16651c732350baea97186a",
      },
      {
        firstName: "Ido",
        lastName: "Perez",
        company: "SAP",
        bio: "Lead architect at SAP Business Application Studio.",
        twitterHandle: "@idoprz",
        linkedInUrl: "https://www.linkedin.com/in/idoprz/",
        githubUrl: "https://github.com/idoprz",
        hasPhoto: true,
        photoUrl: "8dd5130fefff984cb9b9d38873abd580d69e92fd",
      },
    ],
    presentationLinks: [
      {
        linkType: "Tutorial (in GitHub)",
        url: "https://github.com/SAP-samples/build-code-connect-2024/",
      },
    ],
  },
  {
    id: "id-1708334334350-282",
    title: "UI5 Web Components Reloaded",
    type: "presentation_long",
    description:
      "Join us for an exclusive session to explore the latest advancements in UI5 Web Components.\nPrepare for an exciting surprise that we plan to unveil at the session! As always, we are packed with features and eager to show demos on our biggest achievements, framework features and new components since the last UI5con. Plus, we'll be discussing our roadmap and plans until the end of the year. So, stay at the forefront and gain insights into the presence and future of UI5 Web Components!",
    location: "audimax",
    startTime: "9:50",
    endTime: "10:35",
    speakers: [
      {
        firstName: "Ilhan",
        lastName: "Myumyun",
        company: "SAP",
        bio: "Ilhan is an enthusiastic software engineer, product owner and main contributor of UI5 Web Components.\nHe is part of the project since the very beginning. Ilhan is a strong Open Source supporter, passionate about technology, science, history and sport.",
        twitterHandle: "https://twitter.com/ilhanorhan007",
        githubUrl: "https://github.com/ilhan007",
        hasPhoto: true,
        photoUrl: "f8bf8432135b305b102082dd1f1fadda2c089db4",
      },
      {
        firstName: "Nayden",
        lastName: "Naydenov",
        company: "SAP",
        bio: "Developer for UI5 Controls and UI5 Web Components.",
        hasPhoto: true,
        photoUrl: "4f87e1f12fb724ca17c79f38e84f7146108c0710",
      },
    ],
    presentationLinks: [
      {
        linkType: "Recording",
        url: "https://youtu.be/af5notlphms",
      },
    ],
  },
  {
    id: "id-1708350299680-244",
    title:
      "Migrating an existing freestyle UI5 project from JavaScript to TypeScript",
    type: "presentation_short",
    description:
      "In this quickfire Presentation, we'll explore the process of transitioning a unique UI5 project, packed with custom controls and features, from JavaScript to TypeScript. Inspired by insights from the previous UI5con, we'll tackle the challenges and benefits encountered along the way.\n\nOur project is a freestyle UI5 Application, featuring a variety of custom controls developt to our specific requirements. From dynamic data visualization components to interactive interfaces, each element reflects our distinct approach to UI development.\n\nThe decision to migrate stemmed from the core principles highlighted at the last UI5con: improving maintainability, scalability, and overall code quality. On this modern development practices, we focused to ensure the project's longevity and enhance our competitiveness in the UI5 community.\n\nDuring the presentation, we'll share practical insights and decision-making processes, guiding attendees through the migration journey. Whether it's understanding type definitions or exploiting advanced language features, our aim is to provide actionable advice to help others navigate their own migration projects successfully.",
    location: "audimax",
    startTime: "12:30",
    endTime: "12:55",
    speakers: [
      {
        firstName: "Törehan",
        lastName: "Gören",
        company: "TGW Systems Integration GmbH",
        bio: "Experienced full-stack SAP developer with over 8 years with a passion for building user interfaces with UI5, particularly Freestyle applications. I bring expertise to both the backend logic and the frontend user experience, ensuring seamless SAP solutions.",
        twitterHandle: "@torehangoren",
        linkedInUrl: "toerehan-goeren",
        githubUrl: "https://github.com/torehangoren/",
        hasPhoto: true,
        photoUrl: "35f093c200d5a79a1643c75f9d89125febbb27f6",
      },
    ],
    presentationLinks: [
      {
        linkType: "Slides",
        url: "https://github.com/torehangoren/torehangoren/blob/main/2024_UI5con_TypeScript_Migration.pdf",
      },
      {
        linkType: "Recording",
        url: "https://youtu.be/YiQGW3HADsc",
      },

    ],
  },
  {
    id: "id-1708375917418-128",
    title: "Modern JavaScript and UI5 - Part II",
    type: "presentation_long",
    description:
      "Today's JavaScript has evolved into an immensely powerful and adaptable programming language, with many of its most compelling features and capabilities introduced in the last decade. But even with modern JavaScript and TypeScript around, certain aspects of the UI5 ecosystem, like its official documentation, haven't fully embraced these modern enhancements.\nIn last year's session on Modern JavaScript, I provided an overview of the reasons for adopting modern JavaScript practices and highlighted a selection of key features. This year, we will delve deeper into the latest developments and techniques, including those from ES 2024. We'll explore concrete examples, demonstrating not only when but also how to effectively utilize these advanced features while building UI5 apps.",
    location: "audimax",
    startTime: "17:15",
    endTime: "18:00",
    speakers: [
      {
        firstName: "Mike",
        lastName: "Zaschka",
        company: "p36 GmbH",
        bio: "Business Unit Lead Cloud Consulting @ p36 GmbH",
        twitterHandle: "@mike_zaschka",
        linkedInUrl: "mike-zaschka-7395949",
        githubUrl: "https://github.com/mikezaschka",
        hasPhoto: true,
        photoUrl: "a9f6ce84d23b6e526969da09e85c80509a13766d",
      },
    ],
    presentationLinks: [
      {
        linkType: "Recording",
        url: "https://www.youtube.com/watch?v=RAu7LsEjRxg",
      },
    ],
  },
  {
    id: "id-1708455148912-300",
    title:
      "Bring Your Own Design System - Integration of Web Components in SAPUI5",
    type: "presentation_long",
    description:
      "The presentation shows how to combine the OpenUI5/SAPUI5 programming model with a design system that makes its controls available as Web Components. Since OpenUI5/SAPUI5 1.120, the framework supports the integration of any Web Components. This makes it possible, for example, to natively embed own Web Components of your design system which are created with Stencil. The integration embeds the Web Components in a way that they can be used naturally in XMLViews, like with standard UI5 controls, and can be bound with data binding. Learn how you can also make use of the Web Components base class in OpenUI5/SAPUI5 to also integrate your Web Components and get inspired by the solution to generate a custom UI5 library providing the Web Components control wrappers for the native ones.",
    location: "audimax",
    startTime: "14:00",
    endTime: "14:45",
    speakers: [
      {
        firstName: "Peter",
        lastName: "Muessig",
        company: "SAP",
        bio: "Initial member of the UI5 project, stumbled into the role of as Chief Architect for SAPUI5, pushing the evolution of the UI5 framework, its tooling, and its programming model pushing the framework closer to web standards to benefit from the innovation of the web stack...",
        blueskyHandle: "@pmuessig.bsky.social",
        mastodonHandle: "@pmuessig@mastodon.online",
        twitterHandle: "@pmuessig",
        linkedInUrl: "pmuessig",
        githubUrl: "https://github.com/petermuessig",
        hasPhoto: true,
        photoUrl: "a0ee149f7ca30247da0dc69a05255441ec1f75d6",
      },
    ],
    presentationLinks: [
      {
        linkType: "Slides",
        url: "https://www.slideshare.net/slideshow/ui5con-2024-bring-your-own-design-system/269619724",
      },
      {
        linkType: "GitHub",
        url: "https://github.com/petermuessig/ui5con2024-byods",
      },
      {
        linkType: "Recording",
        url: "https://www.youtube.com/watch?v=dziHWwdLYUk",
      },

    ],
  },
  {
    id: "id-1708466557444-965",
    title: "Simplifying UI5 Control Development",
    type: "presentation_short",
    description:
      "Controls are one of the most important aspects of the UI5 framework, making it crucial to understand how and when to create your own UI5 controls. Creating UI5 controls can be quite intensive, particularly when writing HTML using the UI5 renderer API. In this session, I’ll demonstrate how to simplify this process using my UI5 Control Generator, which makes it super easy to create UI5 controls.\n\nAdditionally, I will clarify the different options available for creating a UI5 control and when to use each option, whether it be a UI5 Control or a UI5 Web Component. I'll explain the advantages and disadvantages  of each option, comparing them based on reusability, UX strategy, company policy, and performance.",
    location: "room_w1",
    startTime: "15:00",
    endTime: "15:25",
    speakers: [
      {
        firstName: "Wouter",
        lastName: "Lemaire",
        company: "Independent Consultant",
        bio: "Independent SAP solution architect, developer &amp; consultant who loves to make beautiful UI5 apps on top of CAP with some technical challenges and push UI5 &amp; CAP to it limits ;)",
        twitterHandle: "@wouter_lemaire",
        linkedInUrl: "wouterlemaire",
        githubUrl: "https://github.com/lemaiwo",
        hasPhoto: true,
        photoUrl: "d2bd2b0c262e83366102609025c858d1523427ac",
      },
      {
        firstName: "Jérémy",
        lastName: "Coppey",
        company: "Independent Consultant",
        bio: "SAP ABAP developer became webdynpro developer turned UI5 developer",
        twitterHandle: "@JeremyCoppey",
        linkedInUrl: "jeremycoppey",
        hasPhoto: true,
        photoUrl: "e00ba543c01c6664b09866c161e97067b282f506",
      },
    ],
    presentationLinks: [
      {
        linkType: "Slides",
        url: "https://www.slideshare.net/slideshow/ui5-controls-simplified-ui5con2024-presentation/269578085",
      },
      {
        linkType: "Web Component Package",
        url: "https://github.com/lemaiwo/ui5-webc-space-package",
      },
      {
        linkType: "Web Component Library",
        url: "https://github.com/lemaiwo/ui5-webc-space-library",
      },
      {
        linkType: "Web Component Demo App",
        url: "https://github.com/lemaiwo/ui5-webc-space-demoapp",
      },
      {
        linkType: "UI5 Control Library",
        url: "https://github.com/lemaiwo/ui5-control-space-library",
      },
      {
        linkType: "UI5 Control Demo App",
        url: "https://github.com/lemaiwo/ui5-control-space-demoapp",
      },
      {
        linkType: "Control Generator Demo App",
        url: "https://github.com/lemaiwo/ui5-simple-control",
      },
      {
        linkType: "Recording",
        url: "https://youtu.be/V7ur_kPx8nE",
      },
    ],
  },
  {
    id: "id-1708496322573-107",
    title: "Mastering Metadata-Driven Apps: A Practical Workshop on sap.ui.mdc",
    type: "hands_on_60",
    description:
      "Dive into the world of metadata-driven application development in our interactive 60-minute workshop, specifically designed for mastering sap.ui.mdc. Gain a comprehensive understanding of foundational principles and learn to flawlessly connect key components. Be prepared to roll up your sleeves and join us to accelerate your journey in app development with sap.ui.mdc.\n\nPrerequisites: Editor, node.js, git (UI5 and TypeScript knowledge is helpful, but not mandatory) - see https://github.com/SAP-samples/ui5-mdc-json-tutorial",
    location: "room_w3",
    startTime: "14:00",
    endTime: "15:00",
    speakers: [
      {
        firstName: "Benedikt",
        lastName: "Schölch",
        company: "SAP",
        bio: "Product Owner @ UI5 with focus on metadata driven controls.",
        hasPhoto: true,
        photoUrl: "808b97d4bafb450bffa0c01fa2bb8225260c704e",
      },
      {
        firstName: "Janik",
        lastName: "Köppel",
        company: "SAP",
        bio: "UI5 (Smart)Control developer. I'm interested in various frontend frameworks and (web)application development. Besides UI5 I'm currently working on a flutter based cook book application in my free time :)",
        githubUrl: "https://github.com/koeppel",
        hasPhoto: false,
        photoUrl: "5762197aa80e3130e2fdab3b3e23bda6a68ca1f8",
      },
      {
        firstName: "Martin",
        lastName: "Häuser",
        company: "SAP",
        bio: "UI5 control developer for smart controls.",
        hasPhoto: true,
        photoUrl: "c895bb97a2617bb369ad5015d870b1b8b5542bb0",
      },
    ],
    presentationLinks: [
      {
        linkType: "GitHub Project",
        url: "https://github.com/SAP-samples/ui5-mdc-json-tutorial",
      },
      {
        linkType: "Slides",
        url: "https://github.com/bendkt/ui5con2024-graphql-mdc/blob/458853c5a0a7c22941741e4a67bde536cf325e5d/2024_UI5con_MDC_GQL.pdf",
      },
    ],
  },
  {
    id: "id-1708497897242-439",
    title: "GraphQL and sap.ui.mdc: A Powerful Team for Metadata-Driven Apps",
    type: "presentation_long",
    description:
      "In this enlightening 40-minute presentation, we will delve into the inner workings of a metadata-driven application powered by GraphQL and sap.ui.mdc. We will dissect each component's role in exploiting the adaptability offered by the GraphQL service. Prepare to gain deep insights into the synergy between these technologies and how they combine to create robust and flexible applications.",
    location: "room_w1",
    startTime: "11:00",
    endTime: "11:45",
    speakers: [
      {
        firstName: "Benedikt",
        lastName: "Schölch",
        company: "SAP",
        bio: "Product Owner @ UI5 with focus on metadata driven controls.",
        hasPhoto: true,
        photoUrl: "808b97d4bafb450bffa0c01fa2bb8225260c704e",
      },
      {
        firstName: "Thomas",
        lastName: "Büchler",
        company: "SAP",
        bio: "Fullstack-Dev with frontend focus since 20+ years. Currently working as a Development Architect on Metadata Driven Controls in OpenUI5",
        linkedInUrl: "thomas-b%C3%BCchler-3420073b",
        hasPhoto: true,
        photoUrl: "55125e9e045f0175a3d91151f39cc087a65e3d2b",
      },
    ],
    presentationLinks: [
      {
        linkType: "Recording",
        url: "https://www.youtube.com/watch?v=LTyrsSLLnm4",
      },
    ],
  },
  {
    id: "id-1708692111875-744",
    title: "Embedded Analytics using UI5, BTP and HANA in the Cloud",
    type: "presentation_long",
    description:
      "We develop a number of applications in the context of Enterprise Cloud Solutions based on BTP addressing various scenarios in the context of sustainability, regulation and risk. \nSAPUI5 is the technology of choice for the UI Implementation. All these applications cover a number of analytical scenarios. These analytical functions are executed using the data which is created and maintained during the operative usage of these applications. That's why the UI components supporting these scenarios have been tightly integrated into the applications themselves. For that purpose we created a solution architecture called embedded analytics using SAPUI5 controls and SAP CAP infrastructure including HANA in the Cloud. \nWe want to present this architecture in this session.",
    location: "room_w1",
    startTime: "10:00",
    endTime: "10:45",
    speakers: [
      {
        firstName: "Andreas",
        lastName: "Fink",
        company: "PricewaterhouseCoopers GmbH Wirtschaftsprüfungsgesellschaft",
        bio: "UI5 Developer with focus on reusable components and controls.",
        hasPhoto: true,
        photoUrl: "95720aa9952f15cadc8e7aece98ee4fa5294c042",
      },
      {
        firstName: "Wolfgang",
        lastName: "Pfeifer",
        company: "Thunderhill Software GmbH",
        bio: "In IT since 1992\nwith SAP from 1999 to 2015\nRun own business since 2015\nworking for PwC in ECS since 2021\nSQL, Databases and Analytics are one focus. Building cool applications with SAP stacks the other ( ABAP, HANA, SAP BAS , BTP ...)",
        linkedInUrl: "https://www.linkedin.com/in/wolfgang-pfeifer-2592092/",
        hasPhoto: true,
        photoUrl: "a31c721b321a2df484fd116b9af6efcee242b4a5",
      },
      {
        firstName: "Oliver",
        lastName: "Merk",
        company: "PricewaterhouseCoopers GmbH Wirtschaftsprüfungsgesellschaft",
        bio: "Specializing in developing cutting-edge solutions for ESG, Risk Management, and Regulatory Compliance, I leverage the SAP Business Technology Platform to drive innovation at PwC. With experience spanning back to the initial release of SAPUI5 in 2013, I bring a depth of expertise to my projects. Beyond my professional pursuits, I am passionate about technology, science, and sports.",
        linkedInUrl: "oliver-merk-de-8824212a0",
        hasPhoto: true,
        photoUrl: "ca1b9645f51706d6941cb00b41bed22382f54324",
      },
    ],
    presentationLinks: [
      {
        linkType: "Recording",
        url: "https://www.youtube.com/watch?v=Y0nkvSuKXH0",
      },
    ],
  },
  {
    id: "id-1708699296287-161",
    title: "Empowering Developer Extensibility with SAPUI5 Adaptation Projects",
    type: "hands_on_120",
    description:
      "Are you looking to enhance your application customization skills? Join us for this hands-on workshop where we will delve into the world of SAPUI5 Adaptation Projects and discover how they can revolutionize the way you extend SAPUI5 applications.\n \nIn this workshop, we will guide you through a compact tutorial that will equip you with practical knowledge on creating adaptation projects from scratch. You will learn how to leverage low-code techniques to extend released SAPUI5 applications in a structured and efficient manner. By the end of the session, you will have a solid understanding of how to utilize controller and fragment extensions to unlock new levels of usability and functionality.\n \nWhether you are a seasoned SAPUI5 developer or have prior experience with adaptation projects, this workshop is designed to take your skills to the next level. You will gain hands-on experience and learn best practices for creating powerful and flexible adaptations that meet the unique needs of your applications.\n \nPrerequisites to follow along in the SAP Business Application Studio:\n- Create a trial account on SAP BTP in US10 - https://developers.sap.com/tutorials/hcp-create-trial-account.html\n- Set up your SAP BTP, ABAP environment - https://developers.sap.com/tutorials/abap-environment-trial-onboarding.html\nℹ️ This will automatically set up a SAP Business Application Studio as well as an SAP BTP, ABAP environment!\n- Optional for integration with Git: GitHub account and repository for the exercise (https://github.com/)\n\nPrerequisites to follow along the deployment and SAP Fiori Launchpad configuration in SAP BTP, ABAP environment\n- Download and install the latest ABAP Development Tools (ADT) - https://tools.hana.ondemand.com/#abap\n- Create an ABAP Cloud Project - https://developers.sap.com/tutorials/abap-environment-create-abap-cloud-project.html\n\nGitHub repository for hands-on chapters and materials - https://github.com/GDamyanov/adaptation-project-exercise\n",
    location: "room_w3",
    startTime: "15:10",
    endTime: "17:10",
    speakers: [
      {
        firstName: "Angelika",
        lastName: "Kirilin",
        company: "SAP",
        bio: "Enthusiastic UI5 developer and product owner for SAPUI5 flexibility. Passionate about intuitive and easy to use UIs, clean code and testing.",
        linkedInUrl: "https://www.linkedin.com/in/angelika-kirilin-96b5b4231/",
        hasPhoto: true,
        photoUrl: "69f17511c24aaed58e7b434900b3dfe98bf52b24",
      },
      {
        firstName: "Hristo",
        lastName: "Tsolev",
        company: "SAP",
        bio: "Product Owner @ SAP",
        hasPhoto: true,
        photoUrl: "c13413b55d4dcf21913e67af1a874fa03ed10039",
      },
      {
        firstName: "Georgi",
        lastName: "Damyanov",
        company: "SAP",
        bio: "Part of Team Plana located in Bulgaria. Working on SAPUI5 Adaptation Project.",
        hasPhoto: true,
        photoUrl: "20891fce8469104e16963eb636a16bbbc165af5e",
      },
      {
        firstName: "Matthias",
        lastName: "Schmalz",
        company: "SAP",
        bio: "Matthias Schmalz has worked on different extensibility frameworks at SAP within the last 17 years.\nNow he is a Development expert / architect in SAPUI5 flexibility.\nPassionate about intuitive and easy to use UIs, clean code and automated testing.\n",
        linkedInUrl: "matthias-schmalz-00859bab",
        hasPhoto: true,
        photoUrl: "0c4cff83a8c41980a0a3c721f928ab2109800dd7",
      },
    ],
    presentationLinks: [
      {
        linkType: "Create a trial account on SAP BTP in US East",
        url: "https://developers.sap.com/tutorials/hcp-create-trial-account.html",
      },
      {
        linkType: "Set up your SAP BTP, ABAP environment",
        url: "https://developers.sap.com/tutorials/abap-environment-trial-onboarding.html",
      },
      {
        linkType: "ABAP Development Tools (ADT)",
        url: "https://tools.hana.ondemand.com/#abap",
      },
      {
        linkType: "Create an ABAP Cloud Project",
        url: "https://developers.sap.com/tutorials/abap-environment-create-abap-cloud-project.html",
      },
      {
        linkType: "Tutorial (GitHub)",
        url: "https://github.com/GDamyanov/adaptation-project-exercise",
      },
      {
        linkType: "Slides",
        url: "https://github.com/SAP-samples/adaptation-project-exercises/blob/main/presentations/2024UI5con_Empowering%20Developer%20Extensibility%20with%20SAPUI5%20Adaptation%20Projects.pdf",
      },
    ],
  },
  {
    id: "id-1708720571878-651",
    title:
      "Adding AI to SAP Fiori elements apps at both design time and runtime",
    type: "presentation_long",
    description:
      "SAPUI5 provides a great foundation for embedding AI into your applications. In this session, we will show how AI improves the application development experience as well as simplifying how people interact with SAP Fiori elements applications. Demos in this session will include how to use AI to generate a CAP project from your business requirements, using AI to build an SAP Fiori elements application based on your written or graphical description, summarizing the content in apps using AI, and using natural language filtering to find information in your list report application. We will also discuss how to generate cards for SAPUI5 apps and add them to My Home using Joule.",
    location: "audimax",
    startTime: "16:15",
    endTime: "17:00",
    speakers: [
      {
        firstName: "Klaus",
        lastName: "Keller",
        company: "SAP",
        bio: "With 19 years of dedicated experience in SAP, I specialize in crafting innovative UI frameworks and tools. Recently, I've participated in integrating AI technologies into our UI stack. Excited to share insights and collaborate at UI5con.",
        linkedInUrl: "https://www.linkedin.com/in/klaus-keller-ba3876141/",
        hasPhoto: true,
        photoUrl: "2eca991e90392a614ca27f8631986190dc878fdd",
      },
      {
        firstName: "Katrin",
        lastName: "Polloczek",
        company: "SAP",
        bio: "Katrin Polloczek is the area product owner for SAP Fiori elements V4 together with Marita Kruempelmann as part of the SAP UX Engineering team. Prior to this she was a product owner for SAP Screen Personas and the personalization capabilities in SAP S/4HANA Cloud for classic applications. Before that she spent many years in various customer-oriented roles at SAP supporting customers on their UX journey and driving projects to provide solutions that address customer needs in the UX space.",
        hasPhoto: true,
        photoUrl: "777c82b012ddd6ee46fdf7d4c2594452e1ecadb3",
      },
    ],
    presentationLinks: [
      {
        linkType: "Slides",
        url: "https://d.dam.sap.com/a/izHPFNY/UI5con_June_5_AI_Fiori_Elements.pdf?inline=true&amp;rc=10&amp;doi=SAP1085398",
      },
      {
        linkType: "Recording",
        url: "https://youtu.be/sTzLT1QKyhY",
      },
    ],
  },
  {
    id: "id-1708808913510-73",
    title:
      "Seamless Integration: Crafting the Perfect UI5 Development Environment",
    type: "presentation_long",
    description:
      "UI5 applications are rarely standalone applications without external dependencies. Libraries, controls, components, or external third-party libraries are utilized. Along with the use of TypeScript, middleware, or other custom steps, the development environment quickly becomes complex and cluttered. When backend development with CAP is also involved, it becomes difficult to manage all dependencies and to have a good development environment.\n\nFortunately, a lot has happened in this area over the last year, making development easier for developers. New open-source tools have emerged that simply support developers in managing dependencies easily and quickly and in developing libraries/components/UI5 apps.\n\nIn this talk, we will introduce the latest tools and technologies that simplify and accelerate the development of UI5 applications. \nUsing a realistic scenario, we will show the setup of a project with UI5 apps libraries and a CAP backend, and how developers are supported in this process.\n",
    location: "audimax",
    startTime: "11:00",
    endTime: "11:45",
    speakers: [
      {
        firstName: "Marian",
        lastName: "Zeis",
        company: "IT Consulting Marian Zeis",
        bio: "Independent SAP Full Stack Developer with special interest in UI5 and the whole SAP Fiori ecosystem",
        blueskyHandle: "@mianbsp.bsky.social",
        mastodonHandle: "@Mianbsp@saptodon.org",
        twitterHandle: "@mianbsp",
        linkedInUrl: "marianzeis",
        githubUrl: "https://github.com/marianfoo",
        hasPhoto: true,
        photoUrl: "8f3524f01665bed693331dff98545a2f2869fa5c",
      },
    ],
    presentationLinks: [
      {
        linkType: "GitHub",
        url: "https://github.com/marianfoo/ui5con24-dev-env",
      },
      {
        linkType: "Slides",
        url: "https://github.com/marianfoo#seamless-integration-crafting-the-perfect-ui5-development-environment",
      },
      {
        linkType: "Recording",
        url: "https://youtu.be/dYRtAlyE0tc",
      },
    ],
  },
  {
    id: "id-1708847758459-166",
    title: "Boost Your Development Experience with UI5 Tooling Extensions",
    type: "presentation_short",
    description:
      "The UI5 tooling is the development and build tooling of UI5. It is built in a modular and extensible way so that it can be easily extended by your needs. This session will showcase various tooling extensions which can boost your development experience by far so that you can really work offline, transpile your code in your project to use even newer versions of EcmaScript (than 2022 which is supported right now by the UI5 tooling), consume any npm package of your choice in your project, using different kind of proxies, and even stitching UI5 projects during development together to mimic your target environment.",
    location: "room_w1",
    startTime: "12:00",
    endTime: "12:25",
    speakers: [
      {
        firstName: "Peter",
        lastName: "Muessig",
        company: "SAP",
        bio: "Initial member of the UI5 project, stumbled into the role of as Chief Architect for SAPUI5, pushing the evolution of the UI5 framework, its tooling, and its programming model pushing the framework closer to web standards to benefit from the innovation of the web stack...",
        blueskyHandle: "@pmuessig.bsky.social",
        mastodonHandle: "@pmuessig@mastodon.online",
        twitterHandle: "@pmuessig",
        linkedInUrl: "pmuessig",
        githubUrl: "https://github.com/petermuessig",
        hasPhoto: true,
        photoUrl: "a0ee149f7ca30247da0dc69a05255441ec1f75d6",
      },
    ],
    presentationLinks: [
      {
        linkType: "Slides",
        url: "https://www.slideshare.net/slideshow/ui5con-2024-boost-your-development-experience-with-ui5-tooling-extensions/269619716",
      },
      {
        linkType: "GitHub",
        url: "https://github.com/petermuessig/ui5con2024-bydxp",
      },
      {
        linkType: "Recording",
        url: "https://youtu.be/UDFAadHyAbE",
      },
    ],
  },
  {
    id: "id-1708954197459-642",
    title: "Evolving Developer Extensibility with SAPUI5 Flexibility",
    type: "presentation_long",
    description:
      "This in-depth session provides a 360-degree perspective on the topic of developer adaptation for SAPUI5 applications. It offers everything from an informative overview and best practices to the freshest updates and forthcoming developments. Discover recent innovations like developer extensibility for S/4HANA Cloud and the use of our extensions in Visual Studio Code. We will share insights on creating seamless upgrades through compatibility measures, and give participants a glimpse into future innovations via our detailed roadmap.",
    location: "room_w1",
    startTime: "14:00",
    endTime: "14:45",
    speakers: [
      {
        firstName: "Hristo",
        lastName: "Tsolev",
        company: "SAP",
        bio: "Product Owner @ SAP",
        hasPhoto: true,
        photoUrl: "c13413b55d4dcf21913e67af1a874fa03ed10039",
      },
      {
        firstName: "Angelika",
        lastName: "Kirilin",
        company: "SAP",
        bio: "Enthusiastic UI5 developer and product owner for SAPUI5 flexibility. Passionate about intuitive and easy to use UIs, clean code and testing.",
        linkedInUrl: "https://www.linkedin.com/in/angelika-kirilin-96b5b4231/",
        hasPhoto: true,
        photoUrl: "69f17511c24aaed58e7b434900b3dfe98bf52b24",
      },
      {
        firstName: "Mikhail",
        lastName: "Benderskiy",
        company: "SAP",
        bio: "Mikhail started his journey as a frontend developer for SAPUI5 ten years ago and has since transitioned to the role of product owner for SAPUI5 flexibility.",
        hasPhoto: true,
        photoUrl: "d547b51337ed629b7a16651c732350baea97186a",
      },
    ],
    presentationLinks: [
      {
        linkType: "Slides",
        url: "https://github.com/SAP-samples/adaptation-project-exercises/blob/main/presentations/2024UI5con-Evolving%20Developer%20Extensibility%20with%20SAPUI5%20Flexibility%20.pdf",
      },
      {
        linkType: "Recording",
        url: "https://youtu.be/YNzrSAx1X7w",
      },

    ],
  },
  {
    id: "id-1708958417508-666",
    title: "Get your projects ready for UI5 2.x using UI5 linter",
    type: "presentation_short",
    description:
      "This session will provide a detailed guide on preparing UI5 projects for UI5 2.x using the UI5 linter tool. Key topics include identifying deprecated APIs, comprehending the new UI5 APIs, and practical application of required changes in a project.",
    location: "audimax",
    startTime: "15:30",
    endTime: "15:55",
    speakers: [
      {
        firstName: "Yavor",
        lastName: "Ivanov",
        company: "SAP",
        bio: "Yavor Ivanov is software developer from SAP Labs Bulgaria, mainly involved in SAPUI5 framework development.\nHe has passion in Frontend development, Architecture and AI.\nAt UI5con 2024, Yavor looks forward to sharing his insights, exchanging knowledge with fellow developers, and contributing to the advancement of SAPUI5 development practices.",
        hasPhoto: true,
        photoUrl: "5a84d297f56ea778defcee0ab9e3c72aed58800a",
      },
      {
        firstName: "Thorsten",
        lastName: "Hochreuter",
        company: "SAP",
        bio: "Hello, my name is Thorsten and I'm a Software-Engineer at SAP's UI5 Core team.",
        githubUrl: "https://github.com/Thodd/",
        hasPhoto: true,
        photoUrl: "060172b240119670633733aba4519a266f399ff1",
      },
    ],
    presentationLinks: [
      {
        linkType: "Recording",
        url: "https://youtu.be/7HsH2JLL9HU",
      },
    ],
  },
  {
    id: "id-1708959093630-929",
    title:
      "On the road to general adoption of OData V4: Hierarchy support, ...",
    type: "presentation_short",
    description:
      "Support of hierarchies is one of the last topics that had been missing for general adoption of the OData V4 stack. In the session we are going to show how enhancements of the OData V4 protocol and the OData V4 model of OpenUI5 have made hierarchy display and hierarchy maintenance possible. We will also address further obstacles that we are aware of.",
    location: "room_w1",
    startTime: "12:30",
    endTime: "12:55",
    speakers: [
      {
        firstName: "Mathias",
        lastName: "Uhlmann",
        company: "SAP",
        bio: "Product Owner in UI5 Core responsible for Models, Bindings, Types, Formatters, ...",
        linkedInUrl: "mathias-uhlmann-a22abb95",
        hasPhoto: true,
        photoUrl: "9a2195e9de9d7e492e171bfa1a2e881bde0e661f",
      },
      {
        firstName: "Thomas",
        lastName: "Chadzelek",
        company: "SAP",
        bio: "Team architect for V4 OData model. With SAP for almost 25 years, with OpenUI5 almost from the beginning. Loves cycling.",
        hasPhoto: true,
        photoUrl: "577252704bb1062ced9d7fa9c3eb1e8acdabc8df",
      },
    ],
    presentationLinks: [
      {
        linkType: "Slides",
        url: "https://github.com/uhlmannm/Presentations/blob/master/2024.06.05_UI5con_Rot/2024_UI5con_On_the_road_to_general_adoption_of_OData_V4.pdf",
      },
      {
        linkType: "Recording",
        url: "https://youtu.be/djcvJGpjEWc",
      },
    ],
  },
  {
    id: "id-1708965655185-333",
    title: "Building your first UI5 tooling extension",
    type: "hands_on_60",
    description:
      "With seamless integration to the most common development environments for UI5 - namely VScode and BAS, the UI5 tooling tasks can help save countless hours for your organisation. While the ui5-ecosystem hosts a lot of relevant and useful tasks, as a team you might have some nuanced custom requirements. \n\nIn this talk, we will delve into the process of how you can build your own custom middleware or custom task to automate repetitive tasks, enforce coding standards, and/or optimize collaboration. We will be covering the best practices for developing these custom tools and contributing back to the community. \n\nIn addition to showcasing custom development tools, we'll also share our firsthand experience of contributing to the UI5 community and how it has enriched our development journey.\n\nPRE-REQUISITES: \n1. NodeJS installed on your laptop (Download LTS from here if not : https://nodejs.org/en/about/releases/ )\n2. VS Code studio locally installed (https://code.visualstudio.com/)\n3. Beginner JavaScript and UI5 experience\n",
    location: "room_w3",
    startTime: "9:50",
    endTime: "10:50",
    speakers: [
      {
        firstName: "Nitish",
        lastName: "Mehta",
        company: "INTEGRTR",
        bio: "Using technology to simplify things since 2012 . ",
        twitterHandle: "@nitish_mehta",
        linkedInUrl: "nitish.mehta08",
        hasPhoto: true,
        photoUrl: "cfebc4b69a4af360fcd04dba103056e9d8ec526d",
      },
      {
        firstName: "Vivek",
        lastName: "KC",
        company: "INTEGRTR",
        bio: "SAP Consultant who cherishes JavaScript and UI5, finding joy in simplifying intricate business scenarios into user-friendly interfaces.",
        linkedInUrl: "thevivekgowda",
        githubUrl: "https://github.com/TheVivekGowda",
        hasPhoto: true,
        photoUrl: "24c3ed15f67dd1b54b82d43249a6ad9db3dbd475",
      },
    ],
    presentationLinks: [
      {
        linkType: "Feedback",
        url: "https://ui5con2024.cfapps.eu10.hana.ondemand.com/#/event/components/3589/agenda_items/11297/show",
      },
      {
        linkType: "Slides",
        url: "https://github.com/integrtr/UI5Con2024-Workshop/blob/main/INTEGRTR%20at%20UI5Con%202024%20%20WorkShop.pdf",
      },
      {
        linkType: "GitHub ",
        url: "https://github.com/integrtr/UI5Con2024-Workshop",
      },
    ],
  },
  {
    id: "id-1713193198646-617",
    title: "Welcome &amp; Opening",
    type: "other",
    description:
      "Vice President of UI Technology Development at SAP, kicks off UI5con 2024!",
    location: "audimax",
    startTime: "09:00",
    endTime: "9:10",
    speakers: [
      {
        firstName: "Frederic",
        lastName: "Berg",
        company: "SAP",
        bio: "Vice President of UI Technology Development at SAP, responsible for SAPUI5 and OpenUI5 development, as well as all other major UI technologies at SAP",
        twitterHandle: "frdrcbrg",
        linkedInUrl: "fredericb",
        hasPhoto: true,
        photoUrl: "ecc9ddc593bd0a46cc0d65a529a3ba210920ab1f",
      },
    ],
    presentationLinks: [],
  },
  {
    id: "id-1713193222891-623",
    title: "Keynote",
    type: "keynote",
    description:
      "Tune in and learn about the latest innovations in and around OpenUI5/SAPUI5!",
    location: "audimax",
    startTime: "09:10",
    endTime: "09:40",
    speakers: [
      {
        firstName: "Stefan",
        lastName: "Beck",
        company: "SAP",
        bio: "Chief Product Owner and Senior Manager leading the UI5 product family. I'm already looking forward to meet you at UI5con to share and learn a lot about UI5 in combination with having a wonderful time together.",
        twitterHandle: "@StefanBeck3",
        linkedInUrl: "https://www.linkedin.com/in/stefan-beck-a9319a82",
        hasPhoto: true,
        photoUrl: "45a7f96f54109bfb9b4aca5e0e70bbfa58daa9cf",
      },
      {
        firstName: "Peter",
        lastName: "Muessig",
        company: "SAP",
        bio: "Initial member of the UI5 project, stumbled into the role of as Chief Architect for SAPUI5, pushing the evolution of the UI5 framework, its tooling, and its programming model pushing the framework closer to web standards to benefit from the innovation of the web stack...",
        blueskyHandle: "@pmuessig.bsky.social",
        mastodonHandle: "@pmuessig@mastodon.online",
        twitterHandle: "@pmuessig",
        linkedInUrl: "pmuessig",
        githubUrl: "https://github.com/petermuessig",
        hasPhoto: true,
        photoUrl: "a0ee149f7ca30247da0dc69a05255441ec1f75d6",
      },
    ],
    presentationLinks: [
      {
        linkType: "Slides",
        url: "https://www.slideshare.net/slideshow/ui5con-2024-keynote-latest-news-about-ui5-and-it-s-ecosystem/269619678",
      },
      {
        linkType: "Recording",
        url: "https://www.youtube.com/watch?v=WwFSGuKw0k4",
      },
    ],
  },
  {
    id: "id-1713193329837-31",
    title: "Wrap-Up",
    type: "other",
    description: "Wrapping up UI5con 2024",
    location: "audimax",
    startTime: "18:00",
    endTime: "18:10",
    speakers: [
      {
        firstName: "Frederic",
        lastName: "Berg",
        company: "SAP",
        bio: "Vice President of UI Technology Development at SAP, responsible for SAPUI5 and OpenUI5 development, as well as all other major UI technologies at SAP",
        twitterHandle: "frdrcbrg",
        linkedInUrl: "fredericb",
        hasPhoto: true,
        photoUrl: "ecc9ddc593bd0a46cc0d65a529a3ba210920ab1f",
      },
    ],
    presentationLinks: [],
  },
  {
    id: "id-1713193952455-707",
    title: "Accessibility",
    type: "expert_corner",
    description: "Experts: Nikolay Kolarov, Oliver Stoyanovski",
    location: "experts_3",
    startTime: "13:40",
    endTime: "15:00",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713193966385-747",
    title: "SAP Fiori Elements / SAP Fiori Tools",
    type: "expert_corner",
    description:
      "Experts: Stefan Engelhardt, Katrin Polloczek, Christian Kolbowski",
    location: "experts_2",
    startTime: "13:40",
    endTime: "15:00",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713193980534-901",
    title: "SAPUI5 Flexibility",
    type: "expert_corner",
    description:
      "Experts: Angelika Kirilin, Mikhail Benderskiy, Vitor Eduardo Seifert Bazzo",
    location: "experts_3",
    startTime: "9:40",
    endTime: "11:00",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713193995446-528",
    title: "Tables",
    type: "expert_corner",
    description:
      "Everything around tables\nExperts: Sebastian Bender, Duc Vo Ngoc",
    location: "experts_3",
    startTime: "11:45",
    endTime: "13:15",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713194937987-394",
    title: "UI5 Tooling",
    type: "expert_corner",
    description:
      "Developer tools related to UI5 such as UI5 CLI and the new UI5 linter.\nExperts: Yavor Ivanov, Florian Vogt, Merlin Beutlberger, Matthias Osswald",
    location: "experts_3",
    startTime: "15:55",
    endTime: "17:15",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713195007740-327",
    title: "UI5 Architecture",
    type: "expert_corner",
    description:
      "SAPUI5/OpenUI5 architecture and overarching technical topics.\nExperts: Peter Muessig, Andreas Kunz",
    location: "experts_2",
    startTime: "15:55",
    endTime: "17:15",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713196014329-264",
    title: "SAPUI5/OpenUI5 2.0 and UI5 Product Family: Goals and strategy",
    type: "expert_corner",
    description:
      "Answer your questions on SAPUI5/OpenUI5 2.x like:\n- What’s in SAPUI5/OpenUI5 2.x?\n- How can I engage with SAPUI5/OpenUI5 2.x?\n- What is the impact on existing and new applications and the landscape?\n\nAnswer your questions on the UI5 product family like:\n- What are the goals in 2024?\n- What is the overall product strategy?\n\nFeedback, recommendations, or anything else that you’d like to address 😊\n\nExperts: Stefan Beck, Oliver Graeff, Jens Ittel",
    location: "experts_1",
    startTime: "15:55",
    endTime: "17:15",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713196062963-266",
    title: "Smart Controls &amp; MDC",
    type: "expert_corner",
    description:
      "Visit our experts to learn about SAPUI5 Smart Controls and the sap.ui.mdc library. Smart Controls are designed to streamline development time by providing pre-built, reusable UI components for OData V2. The sap.ui.mdc library offers additional functionality and extension options without coupling to OData. Our experts will be on hand to answer your questions and demonstrate how these controls can help you create powerful and efficient UI5 applications.\nExperts: Martin Häuser, Thomas Büchler, Benedikt Schölch",
    location: "experts_2",
    startTime: "11:45",
    endTime: "13:15",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713445359264-502",
    title: "UI5 Web Components",
    type: "expert_corner",
    description: "Experts: Ilhan Myumyun, Nayden Naydenov",
    location: "experts_1",
    startTime: "11:45",
    endTime: "13:15",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713445399577-923",
    title: "SAP Build Code / SAP Business Application Studio",
    type: "expert_corner",
    description:
      "Creating Full-Stack applications on SAP BTP with GenAI capabilities\nExperts: Marc Huber, Ido Perez",
    location: "experts_1",
    startTime: "13:40",
    endTime: "15:00",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713449159105-571",
    title: "SAP Fiori Launchpad",
    type: "expert_corner",
    description:
      "Knowledge about FLP Plugin development and FLP-specific APIs, e.g. for enhancing the FLP or using intent-based navigation.\nExperts: Oliver Rooke, Aaron Bruch",
    location: "experts_2",
    startTime: "9:40",
    endTime: "11:00",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713649434090-75",
    title: "Models",
    type: "expert_corner",
    description: "Experts: Mathias Uhlmann, Lars Kissel",
    location: "experts_1",
    startTime: "9:40",
    endTime: "11:00",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713794311787-141",
    title: "Afterparty",
    type: "z_catering",
    description:
      "Unwind after a day of insightful sessions and engaging workshops at our afterparty. This is the perfect opportunity to foster connections with fellow attendees, speakers, and experts, exchange ideas, and discuss emerging trends in a relaxed, informal setting. Enjoy food, drinks, craft beer, and entertainment while you build valuable relationships within our developer community.",
    location: "z_canteen",
    startTime: "18:10",
    endTime: "22:00",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "id-1713794442518-198",
    title: "Lunch",
    type: "z_catering",
    description:
      "Take this opportunity to relax, refresh, and refuel for the afternoon sessions. A catered lunch will be provided, allowing time for networking and informal discussions.",
    location: "z_canteen",
    startTime: "12:30",
    endTime: "14:00",
    speakers: [],
    presentationLinks: [],
  },
];
