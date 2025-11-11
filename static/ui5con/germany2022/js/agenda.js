var agendaJson = [
    {
        "id": 164637138439146560,
        "title": "Error logging in Fiori/UI5 apps",
        "type": "presentation_short",
        "description": "Today, all javascript errors in a Fiori/UI5 app live and die in the browser. They are not logged in anywhere else. They mostly go unnoticed until a user complains that something is not working. A developer needs to ask users to provide screenshots from DevTools or jump in a screenshare session.\n\nServices such as DataDog and LogRocket could help in this scenario, but pretty much nobody uses that in SAP. To close this gap, I have created a module that helps developers in capturing all frontend errors and sending them to a backend for proper logging. Having it in a logging system helps the Tech Team to identify and fix issues earlier and faster.\n\nThe module, openui5-error-collector, is a simple plug&amp;play with no dependencies. It's backend agnostic, one can send data to anywhere: SAP Gateway, SAP SolMan, SAP BTP Alert Notification Service, AWS CloudWatch, etc",
        "location": "FRI",
        "startTime": "11:55",
        "endTime": "12:15",
        "speakers": [
            {
                "firstName": "Mauricio",
                "lastName": "Lauffer",
                "company": "SAP",
                "bio": "SAP Certified Cloud Platform/ABAP/HANA/Workflow/Fiori with +15 years of experience. Love open source, have created and contributed in multiple projects, SAP and non-SAP related.",
                "twitterHandle": "@mauriciolauffer",
                "linkedInUrl": "mauriciolauffer",
                "githubUrl": "https://github.com/mauriciolauffer",
                "photoUrl": "images/speakers/ed55a20cf2d7ea9601ef7590000bdec1a259e548"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "GitHub",
                "url": "https://github.com/mauriciolauffer/openui5-error-collector",
                "_id": "62ccadf61d3e10566062c5dd"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/c94ZGEDwGUI",
                "_id": "62f0cb2620ffebda9b8fbc8e"
            }
        ]
    },
    {
        "id": 164637386144851000,
        "title": "Increase Re-Usability with UI5 Custom Controls  - D&amp;D Dashboard",
        "type": "handson",
        "description": "In this session I will showcase the benefits of using UI5 Custom Controls including integration of 3rd party library and how we can build them as a highly re-usable control and maintain across organization.  In the Hands on demo , I will showcase how we can build a custom drag &amp; drop dashboard using UI5 custom controls and consume in multiple projects.\nResources : \nSAP BTP Trial, VS Code\nFor preparation, please see https://gist.github.com/pinakipatrapro/3e6f71c510cfa10638c31482b5894fb3",
        "location": "FRI2",
        "startTime": "13:20",
        "endTime": "15:20",
        "speakers": [
            {
                "firstName": "Pinaki",
                "lastName": "Patra",
                "company": "T-Systems",
                "bio": "Pinaki is s seasoned SAP consultant working in the areas of product development and consulting including technologies like SAP BTP, SAPUI5 and SAP HANA etc. He is fascinated about emerging trends like ML, Sustainability, Industry 4.0 and is helping organizations in their journey towards digitization.",
                "twitterHandle": "@pinakisap",
                "linkedInUrl": "https://www.linkedin.com/in/pinakipatra/",
                "githubUrl": "https://github.com/pinakipatrapro",
                "photoUrl": "images/speakers/dd5271ad587497cbcb29593492d99ad82eb44af0"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/Workshop-Pinaki-Patra-Session-Slides.pdf",
                "_id": "62cc29538e8fe7fc56187668"
            },
            {
                "linkType": "Pre-Requisites",
                "url": "https://gist.github.com/pinakipatrapro/3e6f71c510cfa10638c31482b5894fb3",
                "_id": "62cd87f81d3e10566062cf5d"
            },
            {
                "linkType": "Step-by-Step Guide",
                "url": "https://gist.github.com/pinakipatrapro/db95b037849f869f8592f4282e32d415",
                "_id": "62cd87f81d3e10566062cf5e"
            },
            {
                "linkType": "Sample Application",
                "url": "https://github.com/pinakipatrapro/ui5.con.myDashboard",
                "_id": "62cd87f81d3e10566062cf5f"
            },
            {
                "linkType": "ui5-cc-dndashboard Library",
                "url": "https://www.npmjs.com/package/ui5-cc-dndashboard",
                "_id": "62cd87f81d3e10566062cf60"
            }
        ]
    },
    {
        "id": 16464656097605580,
        "title": "Testing galore: use wdi5 for testing UI5 JS-, TS-, and FE-ap",
        "type": "handson",
        "description": "Let‘s explore the capabilities of wdi5 hands-on, both from a DevX perspective and in a CI/CD environment setup.\n\nWe‘ll equip \n- a freestyle UI5 app written in JS\n- a UI5 app in TypeScript (incl UI5 web components)\n- a Fiori Elements app\nfrom scratch with wdi5 tests.\n\nWe‘ll practice debugging tests and morphing into TDD mode.\n\nAdditionally, the tests will be enhanced to run:\n- in a docker environment \n- on a cloud testing service (browserstack/saucelabs)\n- multiremote (think different users in different browsers).\n\nParticipants need to have installed the following:\n- Node 16 (or greater) → https://nodejs.org/en/\n- git → https://git-scm.com\n- Docker (desktop) → https://www.docker.com/products/docker-desktop/\n- Google Chrome → https://www.google.com/intl/en_us/chrome/\n- an IDE/Editor (we'll demo with VS Code)\n\nApp sources will all be provided.",
        "location": "THU2",
        "startTime": "14:40",
        "endTime": "16:40",
        "speakers": [
            {
                "firstName": "Volker",
                "lastName": "Buzek",
                "company": "J&amp;S-Soft GmbH",
                "bio": "Development Architect working in the SAP web/mobile cosmos, often at the boundary SAP/non-SAP. Focus on UI5, CAP (Node.js) and BTP + Azure, faible for Open Source, Testing and CI/CD. Good in web tech + JS/TS/Node, interested in Deno and AR, really bad on Windows. SAP Mentor, maintainer wdi5 + cds-pg, organizer reCAP conference, co-host ui5-community, DSAG UI5 best practice guide contributor.",
                "twitterHandle": "https://twitter.com/vobu",
                "linkedInUrl": "https://www.linkedin.com/in/volkerbuzek/",
                "githubUrl": "https://github.com/vobu",
                "photoUrl": "images/speakers/d0a5f200bc27f0c411afa54e988380809dc3b676"
            },
            {
                "firstName": "Simon",
                "lastName": "Coen",
                "company": "J&amp;S-Soft GmbH",
                "linkedInUrl": "https://www.linkedin.com/in/simon-coen-49b656181/",
                "githubUrl": "https://github.com/Siolto",
                "photoUrl": "images/speakers/0b0741c9f3b52f05c4d2f7d37eecad07ea2a9554"
            },
            {
                "firstName": "Dominik",
                "lastName": "Feininger",
                "company": "J&amp;S-Soft GmbH",
                "githubUrl": "https://github.com/dominikfeininger",
                "photoUrl": "images/speakers/6d8eaf7e9d3771566ccf7a548737c79a40c224cc"
            },
            {
                "firstName": "Stanislaw",
                "lastName": "Hüll",
                "company": "J&amp;S-Soft GmbH",
                "photoUrl": "images/speakers/c3cab6dac870aa6e20199e677803a478b48ab5d0"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "GitHub Project",
                "url": "https://github.com/ui5-community/wdi5-workshop",
                "_id": "62c4776f5f9d4c9e50f14adc"
            }
        ]
    },
    {
        "id": 164806029403264580,
        "title": "UI5 Web Components using React and Serverless first",
        "type": "presentation_short",
        "description": "Live coding of a React web application using UI5 Web Components for React only, including react-router and CRUD forms using Shell, Analytical Table, Dialog and Form components.\nBonus: I can demonstrate the usage of user authentication flow (register, verification, sign-in and sign-off) provided by Amazon Cognito as well. ",
        "location": "THU",
        "startTime": "17:25",
        "endTime": "17:45",
        "speakers": [
            {
                "firstName": "Thiago",
                "lastName": "Sasai",
                "company": "Birlasoft",
                "bio": "I believe sharing knowledge open space for learn new things and move you forward. \nI work architecting solution using SAP technologies for projects and big companies, but code is my hobby, so never stopped coding and hope will never do.",
                "twitterHandle": "@tsasai7",
                "linkedInUrl": "thiago-sasai-90449770",
                "githubUrl": "https://github.com/tsasai7",
                "photoUrl": "images/speakers/8581bb89c2ea87acf0bf771fe36d50af5d28df7d"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-1_6-Thiago-Sasai.pdf",
                "_id": "62c700565f9d4c9e50f24cfa"
            },
            {
                "linkType": "GitHub Project",
                "url": "https://github.com/tsasai7/ui5con-crud",
                "_id": "62cc2d6e8e8fe7fc56187838"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/KOxF8RGXkVY",
                "_id": "62f1186920ffebda9b8fbd61"
            }
        ]
    },
    {
        "id": 164914728056667740,
        "title": "UI5 Web Components - Version 1.0 is Here!",
        "type": "presentation_long",
        "description": "Hello, there! We would like to share cool insights from the UI5 Web Components project, from basics to more advanced topics.\n\nWe will share:\n- the latest development with highlight on the 1.0 official stable release\n- many new components and themes\n- dedicated section for Accessibility of WebComponents, or the way to provide full-fledge Accessibility support in UI5 Web Components\n- our future plans\n\nNote: The session is suitable for application and component developers, with or without experience in UI5 Web Components.",
        "location": "THU",
        "startTime": "15:35",
        "endTime": "16:15",
        "speakers": [
            {
                "firstName": "Ilhan",
                "lastName": "Myumyun",
                "company": "SAP",
                "bio": "Ilhan is an enthusiastic software engineer, who worked his way up at SAP from an intern 7 years ago to a Product Owner of UI5 Web Components. He is part of the project since the very beginning, and also one of the main contributors. Ilhan is a strong Open Source supporter, passionate about technology, science, history and sport.",
                "twitterHandle": "@ilhanorhan007",
                "githubUrl": "https://github.com/SAP/ui5-webcomponents",
                "photoUrl": "images/speakers/f8bf8432135b305b102082dd1f1fadda2c089db4"
            },
            {
                "firstName": "Elena",
                "lastName": "Stoyanova",
                "company": "SAP",
                "bio": "Developer and accessibility expert for UI5 Controls and UI5 Web Components.",
                "twitterHandle": "@stoyanova_elly",
                "photoUrl": "images/speakers/4ae775144155a43facd49341c1fff8299233f6c6"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-1_4-UI5WebComponents_1.0.pdf",
                "_id": "62c6fdc05f9d4c9e50f24add"
            },
            {
                "linkType": "GitHub Project",
                "url": "https://github.com/ilhan007/ui5con-app",
                "_id": "62eb7803203f2bff023199ef"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/xhrK2Rmv5ts",
                "_id": "62eb7803203f2bff023199f0"
            }
        ]
    },
    {
        "id": 164915282668133660,
        "title": "Developing with SAPUI5 smart controls - Time is money",
        "type": "presentation_short",
        "description": "SAPUI5 smart controls are OData protocol driven controls. This means that their behavior and visuals will depend on OData EDM data type and provided annotations by the backend. Applications cut their development time when using smart controls by reducing the necessary code on processing the user interactions. This way application can focus on the development of the business logic. Especially when handling currencies, unit of measure, date and time data there can be many pitfalls where applications might fail to deliver expected user experience. This is even more obvious when having fleet of applications, to provide necessary alignment across the board. \n \nWe want to show all the latest advancements for some of the OData V2 smart controls like, smart filter bar, smart field and value help. Specifically, what coding and configurations are needed when using date and time fields, when someone needs date/time semantics for single dates like today, tomorrow or ranges like next week, next quarter, etc.  We’ll showcase, how currency and unit of measure can have customized definition by the backend using annotation. So that proper validation, scale and precision can be achieved on the UI side. Along these you’ll see number of other highlights that improve accessibility and user experience in general.\n",
        "location": "THU",
        "startTime": "15:10",
        "endTime": "15:30",
        "speakers": [
            {
                "firstName": "Dobromira",
                "lastName": "Boycheva",
                "company": "SAP Labs Bulgaria",
                "bio": "I'm developer in Smart Control V2 team base in Sofia, Bulgaria.",
                "githubUrl": "https://github.com/dobromiraboycheva/UI5Con2022Demo",
                "photoUrl": "images/speakers/45815527324e8492c4765fdcac7fdb1f09cd49eb"
            },
            {
                "firstName": "Evdokia",
                "lastName": "Yordanova",
                "company": "SAP Labs Bulgaria",
                "bio": "Working as UI5 developer. Passionate about accessibility.",
                "photoUrl": "images/speakers/27f79ad2bbaf4472ff27025f1ece7655d1e4082f"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-1_3-Evdokia-Yordanova-Time_Is_Money.pdf",
                "_id": "62c6fe135f9d4c9e50f24b24"
            },
            {
                "linkType": "GitHub project",
                "url": "https://github.com/dobromiraboycheva/UI5Con2022Demo",
                "_id": "62d502a9f1aa03cea8fdf2c6"
            },
            {
                "linkType": "Deployed application",
                "url": "https://dobromiraboycheva.github.io/UI5Con2022Demo/",
                "_id": "62d502a9f1aa03cea8fdf2c7"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/WaSM-V9sfus",
                "_id": "62e90941203f2bff02319290"
            }
        ]
    },
    {
        "id": 164917738892767840,
        "title": "Building SAP Fiori apps with flexible open-source modules",
        "type": "presentation_long",
        "description": "The Open UX tools project aims to provide open-source modules that make developing SAP Fiori applications more efficient and flexible through community collaboration and transparency. Learn how these modules offer full flexibility for developers to create an app powered by SAP Fiori elements flexible programming model with the convenience of the SAP Fiori tools.",
        "location": "THU",
        "startTime": "17:50",
        "endTime": "18:30",
        "speakers": [
            {
                "firstName": "Ashley",
                "lastName": "Tung",
                "company": "SAP ",
                "bio": "Area Product Owner for SAP Fiori tools focusing on accelerating SAP Fiori developments",
                "photoUrl": "images/speakers/3e2bcfb84ff0be606cab78da777aebd83634cfce"
            },
            {
                "firstName": "Tobias",
                "lastName": "Queck",
                "company": "SAP",
                "bio": "Chief Architect, SAP UX Engineering. Responsible for the technical direction of SAP Fiori elements and SAP Fiori tools. Very passionate about open sourcing any tools and libs developers need to build SAP Fiori applications.",
                "twitterHandle": "@Q82",
                "linkedInUrl": "tobiasqueck",
                "githubUrl": "https://github.com/tobiasqueck",
                "photoUrl": "images/speakers/9f270cbbac44564179c869b5b19e6be656e9e8e1"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-1_7-Ashley-Tung-Final.pdf",
                "_id": "62c700ad5f9d4c9e50f24d93"
            },
            {
                "linkType": "Demo Script",
                "url": "https://github.com/tobiasqueck/ui5con2022",
                "_id": "62ebc31b203f2bff02319bb1"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/rkVQ-kOo1G0",
                "_id": "62ebc31b203f2bff02319bb2"
            }
        ]
    },
    {
        "id": 164918861955226080,
        "title": "Unleash the power of SAP Fiori elements for SAPUI5 freestyle apps",
        "type": "presentation_long",
        "description": "Many of you have been using smart controls when creating UI5 apps - either in an extension to an SAP Fiori elements apps or within your SAPUI5 freestyle apps. For OData V4 based apps, we now offer an evolution of the smart controls: the SAP Fiori elements building blocks. Learn about how you can leverage the SAP Fiori elements framework in your SAPUI5 freestyle apps based on a real-life productive implementation by our partner UNIORG. ",
        "location": "FRI",
        "startTime": "11:05",
        "endTime": "11:45",
        "speakers": [
            {
                "firstName": "Holger",
                "lastName": "Schaefer",
                "company": "UNIORG Group",
                "bio": "Chief Technology Innovation Officer for the UNIORG Group",
                "twitterHandle": "@hschaefer123",
                "linkedInUrl": "holger-schaefer-483ba73",
                "photoUrl": "images/speakers/f5a43b7e1bf2b638d04ee762c91ca479d8d92d75"
            },
            {
                "firstName": "Marius",
                "lastName": "Freitag",
                "company": "SAP",
                "bio": "Senior Developer for SAP Fiori elements",
                "linkedInUrl": "https://www.linkedin.com/in/marius-f-444285208/",
                "photoUrl": "images/speakers/3f6999f5c239240adaecb8b8bd7d987147c4c90d"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-2_3-Marius-Freitag-Unleash_the_power_of_SAP_Fiori_elements_for_SAPUI5_freestyle_apps.pdf",
                "_id": "62cc2a988e8fe7fc5618773d"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/YtKa8kJii1M",
                "_id": "62ed6ca920ffebda9b8fba58"
            }
        ]
    },
    {
        "id": 164923979913078180,
        "title": "SAP Graph + SAPUI5",
        "type": "presentation_short",
        "description": "UI5 developers know the challenge of developing apps for complex business landscapes: their app should be simple to use while the data they need to work with is distributed across different systems. In addition, different authentication methods, data protocols and missing references are additional challenges originating in the complex landscape that developers have to solve in their app. With SAP Graph - the new unified API for all business data - developers can use a single API with one authentication mechanism, one protocol and an interconnected data model to help them focus on building great apps.\nIn this session, we want to show UI5 developers how to build an app across different SAP systems with SAP UI5 and SAP Graph. Developers will learn what SAP Graph is, what is required to use it and how to consume it from SAP UI5.",
        "location": "FRI",
        "startTime": "10:35",
        "endTime": "10:55",
        "speakers": [
            {
                "firstName": "Johannes",
                "lastName": "Rupieper",
                "company": "SAP",
                "bio": "Product Owner at SAP Graph",
                "photoUrl": "images/speakers/d385dd3ac0c0826d11f65388f3e21e04bc4007ae"
            },
            {
                "firstName": "Pedro",
                "lastName": "Rodrigues",
                "company": "SAP",
                "bio": "I've been developing SAP applications for 20 years now, from ABAP, BSPs and Web Dynpros to Java iViews. And for the last 6 years, UI5/Fiori apps. I recently joined the SAP Graph team and I love Lego!",
                "photoUrl": "images/speakers/85d07a970869865262d300daee2fcfd83e920843"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-2_2-SAP_Graph.pdf",
                "_id": "62cc2ad48e8fe7fc5618775f"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/cehFQWgC8sk",
                "_id": "62f6c9aa3c090512e6ed9a34"
            }
        ]
    },
    {
        "id": 164927936694398660,
        "title": "My experience with TypeScript in UI5",
        "type": "presentation_long",
        "description": "We are going to take you on a journey through the entirety of the UI5 TypeScript jungle! Starting from the basics to more advanced concepts to get the most out of it:\n-\tBootstrap a new UI5 TypeScript app\n-\tProject setup\n-\tReusable helper functions\n-\tUI5 Libraries with UI5 Custom Controls\n-\t3th party libraries\n-\tTesting of UI5 TypeScript apps\nWe will bring you everything you need to know to cover the full project scope with TypeScript!",
        "location": "FRI",
        "startTime": "13:40",
        "endTime": "14:20",
        "speakers": [
            {
                "firstName": "Wouter",
                "lastName": "Lemaire",
                "company": "LemTech BV",
                "bio": "Independent SAP solution architect, developer &amp; consultant who loves to make beautiful UI5 apps with some technical challenges and push UI5 to it limits ;)",
                "twitterHandle": "https://twitter.com/wouter_lemaire",
                "linkedInUrl": "https://www.linkedin.com/in/wouterlemaire/",
                "githubUrl": "https://github.com/lemaiwo",
                "photoUrl": "images/speakers/d2bd2b0c262e83366102609025c858d1523427ac"
            },
            {
                "firstName": "Volker",
                "lastName": "Buzek",
                "company": "J&amp;S-Soft GmbH",
                "bio": "Development Architect working in the SAP web/mobile cosmos, often at the boundary SAP/non-SAP. Focus on UI5, CAP (Node.js) and BTP + Azure, faible for Open Source, Testing and CI/CD. Good in web tech + JS/TS/Node, interested in Deno and AR, really bad on Windows. SAP Mentor, maintainer wdi5 + cds-pg, organizer reCAP conference, co-host ui5-community, DSAG UI5 best practice guide contributor.",
                "twitterHandle": "https://twitter.com/vobu",
                "linkedInUrl": "https://www.linkedin.com/in/volkerbuzek/",
                "githubUrl": "https://github.com/vobu",
                "photoUrl": "images/speakers/d0a5f200bc27f0c411afa54e988380809dc3b676"
            },
            {
                "firstName": "Peter",
                "lastName": "Muessig",
                "company": "SAP",
                "bio": "One of the obstetricians of UI5 continuously working on the evolution of the Framework, the Controls, and the Tooling as well as UI5 Web Components and being an active member of the awesome UI5 community!",
                "twitterHandle": "https://twitter.com/pmuessig",
                "linkedInUrl": "https://www.linkedin.com/in/peter-muessig-7b40576/",
                "githubUrl": "https://github.com/petermuessig",
                "photoUrl": "images/speakers/a0ee149f7ca30247da0dc69a05255441ec1f75d6"
            },
            {
                "firstName": "Andreas",
                "lastName": "Kunz",
                "company": "SAP",
                "bio": "Now a lead architect and doing a little bit of everything, Andreas has been in UI5 development since its creation in late 2008 in various roles, developing dozens of controls in the early years, working on core concepts, creating the sap.m library, giving conference presentations and video lectures. \nHe also was one of the drivers behind open-sourcing UI5 as \"OpenUI5\" and is happy to help the community grow and prosper.",
                "twitterHandle": "@aku_dev",
                "linkedInUrl": "andreas-kunz-dev",
                "githubUrl": "https://github.com/akudev",
                "photoUrl": "images/speakers/84e5cca74c6e57ba2ed2b537de588fd3dcce4197"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-2_6-Wouter-Lemaire.pdf",
                "_id": "62cc2b018e8fe7fc56187787"
            },
            {
                "linkType": "GitHub",
                "url": "https://github.com/ui5-community/hacking-away-sampleapp",
                "_id": "62cdb3cc1d3e10566062d109"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/QcmHYUa5-Q0",
                "_id": "62f4d5db7efd386f93dec870"
            }
        ]
    },
    {
        "id": 164941623468939870,
        "title": "Sort out your UI5 tooling extensions in a flash",
        "type": "presentation_short",
        "description": "Tired of always adding the same tooling extensions to your projects?\nThis session will show you how to use a newly created yeoman generator to implement UI5 tooling extensions like middlewares and tasks. This is mean to speed up your initial setup and be able to quickly get cracking on the fun bits.",
        "location": "FRI",
        "startTime": "14:30",
        "endTime": "14:50",
        "speakers": [
            {
                "firstName": "Jakob",
                "lastName": "Kjaer",
                "company": "SAP",
                "bio": "Full time nerd and developer in disguise. I've been on the UI5 wagon since the very beginning and it's been my mission to make sap easier to use for the end users since 2012.",
                "twitterHandle": "Uxkjaer",
                "photoUrl": "images/speakers/5da13b5f2af388eee51f75e9b78c936cc0eb7c65"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-2_7-Jakob-Kjaer-Sort_out_your_UI5_tooling_extensions_in_a_flash.pdf",
                "_id": "62cc2c718e8fe7fc561877ab"
            },
            {
                "linkType": "GitHub",
                "url": "https://github.com/ui5-community/generator-ui5-add-extension",
                "_id": "62f2d9c320ffebda9b8fc0ca"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/Yvez_jAqkXc",
                "_id": "62f2d9c320ffebda9b8fc0cb"
            }
        ]
    },
    {
        "id": 164942842628543580,
        "title": "P13nify Everything - Personalization for Any Control",
        "type": "handson",
        "description": "We would like to show you how you can add personalization to almost every control. If you have a custom control that you would like to enhance with filtering, sorting, or other options this workshop is for you. We are going to lead you through the enablement of a custom control using the assets provided by UI5 according to the latest UX Guidelines. You should be able to apply your knowledge afterwards in your own application or control development. \n\nPrerequisites: Intermediate UI5 knowledge, current version of git, Node.js (incl. npm), and a code editor (we are going to use Visual Studio Code). ",
        "location": "THU2",
        "startTime": "17:00",
        "endTime": "19:00",
        "speakers": [
            {
                "firstName": "Benedikt",
                "lastName": "Schölch",
                "company": "SAP SE",
                "bio": "Product Owner @ UI5 with focus on metadata driven controls.",
                "twitterHandle": "@bendkt",
                "linkedInUrl": "benedikt-schoelch",
                "photoUrl": "images/speakers/808b97d4bafb450bffa0c01fa2bb8225260c704e"
            },
            {
                "firstName": "Martin",
                "lastName": "Häuser",
                "company": "SAP SE",
                "bio": "UI5 Smart Controls developer",
                "photoUrl": "images/speakers/c895bb97a2617bb369ad5015d870b1b8b5542bb0"
            },
            {
                "firstName": "Christopher",
                "lastName": "Pielka",
                "company": "SAP SE",
                "bio": "I'm a developer for the UI5 SmartControls &amp; MDC Team at SAP.\nOn my occasional personal projects I mainly use Js, Java, Kotlin &amp; C# depending on what I'm doing. ",
                "photoUrl": "images/speakers/f97dece62f48e65f93f56e7b3b7cf99e359bb349"
            },
            {
                "firstName": "Janik",
                "lastName": "Köppel",
                "company": "SAP SE",
                "bio": "Control developer for SAPUI5 SmartControls",
                "photoUrl": "images/speakers/5762197aa80e3130e2fdab3b3e23bda6a68ca1f8"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://sap-my.sharepoint.com/:b:/p/benedikt_schoelch/EZq60Q0q_PFHnWfEVgMKsGEBiWpdNc4qNFogwQhuDiVIRw?e=c4JFj3",
                "_id": "62c435c83ebb61bd813ca183"
            },
            {
                "linkType": "Tutorial",
                "url": "https://bendkt.github.io/ui5con2022-p13n-ws/",
                "_id": "62c435c83ebb61bd813ca184"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/LclKOae-ts0",
                "_id": "62c535c75f9d4c9e50f15ba6"
            }
        ]
    },
    {
        "id": 164943484406666020,
        "title": "UI5 Community – Best of UI5",
        "type": "presentation_short",
        "description": "\"Best of UI5\" has been started as the new entry page for the ui5-community GitHub organization. Its purpose is to lookup any kind of UI5 projects, be it applications, libraries, custom controls, tooling extensions, middlewares, tasks, Easy UI5 generators, … Everyone will be able to register his/her projects at Best of UI5. The projects will be ranked by various information and filterable by important criteria.  This should help to find the best suited reuse project for your development needs! Join us to learn more about Best of UI5, how to contribute your projects and the benefits of the ui5-community GitHub organization. Let’s tackle it and help to shape the development experience of the UI5 community! ",
        "location": "THU",
        "startTime": "18:35",
        "endTime": "18:55",
        "speakers": [
            {
                "firstName": "Marian",
                "lastName": "Zeis",
                "company": "",
                "bio": "SAP Full Stack Developer with Special interest in UI5 and the whole Fiori Ecosystem",
                "twitterHandle": "@mianbsp",
                "linkedInUrl": "https://www.linkedin.com/in/marianzeis",
                "githubUrl": "https://github.com/marianfoo",
                "photoUrl": "images/speakers/d954e915a17cd61944687e7154366efc5fc80447"
            },
            {
                "firstName": "Peter",
                "lastName": "Muessig",
                "company": "SAP",
                "bio": "One of the obstetricians of UI5 continuously working on the evolution of the Framework, the Controls, and the Tooling as well as UI5 Web Components and being an active member of the awesome UI5 community!",
                "twitterHandle": "https://twitter.com/pmuessig",
                "linkedInUrl": "https://www.linkedin.com/in/peter-muessig-7b40576/",
                "githubUrl": "https://github.com/petermuessig",
                "photoUrl": "images/speakers/a0ee149f7ca30247da0dc69a05255441ec1f75d6"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-1_8-Marian-Zeis-Best_of_UI5.pdf",
                "_id": "62c6fef85f9d4c9e50f24b81"
            },
            {
                "linkType": "BestOfUI5 Website",
                "url": "https://bestofui5.org/",
                "_id": "62cd9d1a1d3e10566062d03c"
            },
            {
                "linkType": "Frontend GitHub",
                "url": "https://github.com/ui5-community/bestofui5-website#readme",
                "_id": "62cd9d1a1d3e10566062d03d"
            },
            {
                "linkType": "Backend GitHub",
                "url": "https://github.com/ui5-community/bestofui5-data",
                "_id": "62cd9d1a1d3e10566062d03e"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/pOE3NKO_gk4",
                "_id": "62f21b5220ffebda9b8fbf3a"
            }
        ]
    },
    {
        "id": 164951325882559900,
        "title": "Panel Discussion: UI5 Community – Contributor Experiences",
        "type": "presentation_short",
        "description": "The ui5-community GitHub organization evolved to a central place to develop and share UI5 projects. It has become a great place to find ideas, to pick-up and continue ideas and finally make them available for the whole UI5 community. Starting with the UI5 Ecosystem Showcase mono repository hosting several tooling extensions it now hosts more and more individual projects for different purposes: applications, libraries, custom controls, tooling extensions, middlewares, tasks, Easy UI5 generators, … Many developers contributed over the last year and during the panel discussion the moderators will interview some of the very active contributors to the ui5-community GitHub organization to share their experiences.",
        "location": "FRI",
        "startTime": "14:55",
        "endTime": "15:15",
        "speakers": [
            {
                "firstName": "Volker",
                "lastName": "Buzek",
                "company": "J&amp;S-Soft GmbH",
                "bio": "Development Architect working in the SAP web/mobile cosmos, often at the boundary SAP/non-SAP. Focus on UI5, CAP (Node.js) and BTP + Azure, faible for Open Source, Testing and CI/CD. Good in web tech + JS/TS/Node, interested in Deno and AR, really bad on Windows. SAP Mentor, maintainer wdi5 + cds-pg, organizer reCAP conference, co-host ui5-community, DSAG UI5 best practice guide contributor.",
                "twitterHandle": "https://twitter.com/vobu",
                "linkedInUrl": "https://www.linkedin.com/in/volkerbuzek/",
                "githubUrl": "https://github.com/vobu",
                "photoUrl": "images/speakers/d0a5f200bc27f0c411afa54e988380809dc3b676"
            },
            {
                "firstName": "Peter",
                "lastName": "Muessig",
                "company": "SAP",
                "bio": "One of the obstetricians of UI5 continuously working on the evolution of the Framework, the Controls, and the Tooling as well as UI5 Web Components and being an active member of the awesome UI5 community!",
                "twitterHandle": "https://twitter.com/pmuessig",
                "linkedInUrl": "https://www.linkedin.com/in/peter-muessig-7b40576/",
                "githubUrl": "https://github.com/petermuessig",
                "photoUrl": "images/speakers/a0ee149f7ca30247da0dc69a05255441ec1f75d6"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Recording",
                "url": "https://youtu.be/KOsQt-arDzs",
                "_id": "62fbf4ed3c090512e6eda025"
            }
        ]
    },
    {
        "id": 164951663099330660,
        "title": "Learn App Development in UI5 and TypeScript",
        "type": "handson",
        "description": "This workshop walks through a comprehensive tutorial to introduce developers to UI5 application development in TypeScript. It includes creating a basic application from the TypeScript template using the \"easy-UI5\" generator, TypeScript coding in regular UI controllers, as well as advanced topics like custom control development and using third-party libraries.\n\nThe workshop basically follows https://github.com/SAP-samples/ui5-typescript-tutorial, with additional explanations by the authors. \n\nPrerequisites are: a current version of Node.js and a code editor supporting TypeScript development (preferably the free Microsoft Visual Studio Code). TypeScript knowledge is not required, but basic UI5 knowledge will help understand what you are doing.",
        "location": "FRI2",
        "startTime": "10:45",
        "endTime": "12:45",
        "speakers": [
            {
                "firstName": "Andreas",
                "lastName": "Kunz",
                "company": "SAP",
                "bio": "Now a lead architect and doing a little bit of everything, Andreas has been in UI5 development since its creation in late 2008 in various roles, developing dozens of controls in the early years, working on core concepts, creating the sap.m library, giving conference presentations and video lectures. \nHe also was one of the drivers behind open-sourcing UI5 as \"OpenUI5\" and is happy to help the community grow and prosper.",
                "twitterHandle": "@aku_dev",
                "linkedInUrl": "andreas-kunz-dev",
                "githubUrl": "https://github.com/akudev",
                "photoUrl": "images/speakers/84e5cca74c6e57ba2ed2b537de588fd3dcce4197"
            },
            {
                "firstName": "Peter",
                "lastName": "Muessig",
                "company": "SAP",
                "bio": "One of the obstetricians of UI5 continuously working on the evolution of the Framework, the Controls, and the Tooling as well as UI5 Web Components and being an active member of the awesome UI5 community!",
                "twitterHandle": "https://twitter.com/pmuessig",
                "linkedInUrl": "https://www.linkedin.com/in/peter-muessig-7b40576/",
                "githubUrl": "https://github.com/petermuessig",
                "photoUrl": "images/speakers/a0ee149f7ca30247da0dc69a05255441ec1f75d6"
            },
            {
                "firstName": "Martin",
                "lastName": "Häuser",
                "company": "SAP SE",
                "bio": "UI5 Smart Controls developer",
                "photoUrl": "images/speakers/c895bb97a2617bb369ad5015d870b1b8b5542bb0"
            },
            {
                "firstName": "Oliver",
                "lastName": "Stoyanovski",
                "company": "SAP",
                "bio": "Software Developer UI5 Framework (Team Tables)",
                "photoUrl": "images/speakers/70cc412e188137237306b458285f34b67544b361"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Exercises",
                "url": "https://github.com/SAP-samples/ui5-typescript-tutorial",
                "_id": "62c4556c3ebb61bd813ca69b"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/NvgryupcPGQ",
                "_id": "62fbf4923c090512e6eda005"
            }
        ]
    },
    {
        "id": 164968182628573250,
        "title": "Boost your UI5 skills for creating accessible apps",
        "type": "presentation_short",
        "description": "Visit the session to find out the best places in UI5 Demo Kit and documentation to upgrade your accessibility skills. We will explore the latest news around accessibility in UI5 and share some new tips and tricks.",
        "location": "FRI",
        "startTime": "12:20",
        "endTime": "12:40",
        "speakers": [
            {
                "firstName": "Dobrin",
                "lastName": "Dimchev",
                "company": "SAP Labs Bulgaria",
                "bio": "JavaScript Developer and Accessibility Expert ",
                "photoUrl": "images/speakers/b46c414da2bdc9dc51704f57c1dfce7acaca95a8"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-2_5-Dobrin-Dimchev.pdf",
                "_id": "62cc2d088e8fe7fc561877fd"
            },
            {
                "linkType": "Accessibility Best Practice Application",
                "url": "https://ui5.sap.com/test-resources/sap/m/demokit/accessibilityGuide/webapp/index.html",
                "_id": "62cc3b4b8e8fe7fc56187c2d"
            },
            {
                "linkType": "Accessibility Mission",
                "url": "https://discovery-center.cloud.sap/missiondetail/3530/3571/",
                "_id": "62cc3b4b8e8fe7fc56187c2e"
            },
            {
                "linkType": "Accessibility Documentation",
                "url": "https://ui5.sap.com/#/topic/322f55d0cf1e4b459cc1911c899b7a5f",
                "_id": "62cc3b4b8e8fe7fc56187c2f"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/O6TIu3REHxc",
                "_id": "62f6def43c090512e6ed9a7d"
            }
        ]
    },
    {
        "id": 164968224453644220,
        "title": "Uncovering the hidden gem -  UI5 developer tools",
        "type": "presentation_short",
        "description": "Although not talked about much, OpenUI5 offers one of the best debugging tools out of the box for a UI framework. In this session, we revisit and provide a comprehensive guide to this hidden gem.\nIn this lighting talk, you will be learning how to use the combination of \"UI5 diagnosis tool\", \"UI5 inspector\", browser developer tools effectively to upgrade your developer experience.",
        "location": "THU",
        "startTime": "14:40",
        "endTime": "15:00",
        "speakers": [
            {
                "firstName": "Nitish",
                "lastName": "Mehta",
                "company": "INTEGRTR",
                "bio": "A travelling techie on a constant journey to explore the world outside and within !\nCoFounder @ INTEGRTR | Ex-SAP | Working with UI5 since 2012",
                "twitterHandle": "@nitish_mehta",
                "linkedInUrl": "nitishmehta08",
                "githubUrl": "https://github.com/nitish-mehta",
                "otherSocialMedia": "https://instagram.com/nitishmehta08",
                "photoUrl": "images/speakers/cfebc4b69a4af360fcd04dba103056e9d8ec526d"
            },
            {
                "firstName": "Vivek",
                "lastName": "Gowda",
                "company": "INTEGRTR",
                "bio": "JavaScript developer who works on SAP stuff | Exploring modern UI solutions for SAP customers &amp; users | Developer at INTEGRTR",
                "twitterHandle": "@TheVivekGowda",
                "linkedInUrl": "TheVivekGowda",
                "photoUrl": "images/speakers/24c3ed15f67dd1b54b82d43249a6ad9db3dbd475"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-1_2-Nitish-Mehta-Uncovering_the_hidden_gem-UI5_developer_tools.pdf",
                "_id": "62c6ff955f9d4c9e50f24c48"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/wIP7PQzW74U",
                "_id": "62e90991203f2bff023192c0"
            }
        ]
    },
    {
        "id": 16496955268509600,
        "title": "Component reuse and \"micro-frontend\" concepts in a SPA - a report",
        "type": "presentation_short",
        "description": "In the last few years we have seen significant improvements for component-reuse in UI5 since its emergence.\nComponents from our recent development projects feature different modes of operation, varying places of use and configurable output designs.\nHowever, there are points to consider, wrong turns to come back from and tales of (un)expected behaviour to tell.\n\nIn this talk, we'd like to share our experiences, refinements and pitfalls in (re)using components in a UI5 SPA.",
        "location": "THU",
        "startTime": "17:00",
        "endTime": "17:20",
        "speakers": [
            {
                "firstName": "Andreas",
                "lastName": "Pflugrad",
                "company": "eXXcellent solutions GmbH",
                "bio": "My day-to-day business is designing and developing freestyle UI5 apps that satisfy the needs of our customers in various industry and public sectors.\nBut every so often I pick up my other business passion: acting as an inhouse speaker for eXXcellent solutions or as a public trainer for SAP where I will cast my UI5-knowledge upon unsuspecting colleagues and course participants alike.",
                "photoUrl": "images/speakers/a26f451502fe9dbbec7d1b85a79103c0f98116d2"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "GitHub Project",
                "url": "https://github.com/exxcellent/UI5con2022-Demo",
                "_id": "62c590bf5f9d4c9e50f17640"
            },
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-1_5-Pflugrad-Andreas.pdf",
                "_id": "62c701865f9d4c9e50f24e5c"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/6xzqcjIjSPU",
                "_id": "62eb7b95203f2bff02319a3b"
            }
        ]
    },
    {
        "id": 165330860314148670,
        "title": "What's New in UI5",
        "type": "keynote",
        "description": "Tune in and learn the latest about SAPUI5, OpenUI5 and their related projects.",
        "location": "THU",
        "startTime": "14:05",
        "endTime": "14:35",
        "speakers": [
            {
                "firstName": "Stefan",
                "lastName": "Beck",
                "company": "SAP",
                "bio": "Since 2009, I'm very enthusiastic about UI5  ",
                "twitterHandle": "@StefanBeck3",
                "linkedInUrl": "https://www.linkedin.com/in/stefan-beck-a9319a82/",
                "photoUrl": "images/speakers/45a7f96f54109bfb9b4aca5e0e70bbfa58daa9cf"
            },
            {
                "firstName": "Peter",
                "lastName": "Muessig",
                "company": "SAP",
                "bio": "One of the obstetricians of UI5 continuously working on the evolution of the Framework, the Controls, and the Tooling as well as UI5 Web Components and being an active member of the awesome UI5 community!",
                "twitterHandle": "https://twitter.com/pmuessig",
                "linkedInUrl": "https://www.linkedin.com/in/peter-muessig-7b40576/",
                "githubUrl": "https://github.com/petermuessig",
                "photoUrl": "images/speakers/a0ee149f7ca30247da0dc69a05255441ec1f75d6"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-1_1-Keynote_Day_1.pdf",
                "_id": "62c6fcd25f9d4c9e50f249ec"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/QYQxjgwVtCI",
                "_id": "62e29883f1aa03cea8fe184c"
            }
        ]
    },
    {
        "id": 165330947866222940,
        "title": "What's New in SAP Fiori Elements and SAP Fiori Tools",
        "type": "keynote",
        "description": "Join us for an exciting second day of UI5con. Katja and Sebastian the two co-Chief-Product-Owners for the UX Engineering product portfolio will be giving a quick tour of SAP Fiori elements and SAP Fiori tools as well as a glimpse of the exciting changes coming to the SAP S/4HANA user experience.",
        "location": "FRI",
        "startTime": "10:00",
        "endTime": "10:30",
        "speakers": [
            {
                "firstName": "Katja ",
                "lastName": "Zoch",
                "company": "SAP",
                "bio": "Vice President UX Engineering, SAP. In her role as Co-Chief-Product-Owner for the UX Engineering portfolio Katja is responsible to the products, tools and frameworks that enable customers, partners and SAP internal developers to create a great user experience. Katja strongly believes in open sourcing development tools and products needed to build SAP Fiori applications.",
                "twitterHandle": "@KatjaZoch",
                "linkedInUrl": "katjazoch",
                "photoUrl": "images/speakers/60cf8cb8f96332c06fd7bc6bd26bb5e668321f65"
            },
            {
                "firstName": "Sebastian",
                "lastName": "Steinhauer",
                "company": "SAP",
                "bio": "Vice President UX Engineering, SAP. In his role as Co-Chief-Product-Owner for the UX Engineering portfolio Sebastian is responsible to the products, tools and frameworks that enable customers, partners and SAP internal developers to create a great user experience. Sebastian strongly believes in open sourcing development tools and products needed to build SAP Fiori applications.",
                "twitterHandle": "@ideacone",
                "linkedInUrl": "steinhauer",
                "photoUrl": "images/speakers/e2a723d92a79df131131ab072d70edea7c2bff26"
            }
        ],
        "presentationLinks": [
            {
                "linkType": "Slides",
                "url": "https://openui5.org/ui5con/germany2022/slides/2022-UI5con-2_1-Keynote_Day_2.pdf",
                "_id": "62ceb98d1d3e10566062dc83"
            },
            {
                "linkType": "Recording",
                "url": "https://youtu.be/cFv_pkVcB4Y",
                "_id": "62eccfed203f2bff02319dd4"
            }
        ]
    },
    {
        "id": 165470438470553250,
        "title": "After Party (On-site)",
        "type": "after-party",
        "description": "Join the UI5con crew and attendees on-site in winding down the first day of UI5con HYBRID.",
        "location": "THU",
        "startTime": "19:10",
        "endTime": "22:00",
        "speakers": [],
        "presentationLinks": []
    },
    {
        "id": 165470451842849150,
        "title": "Break",
        "type": "snack_break",
        "description": "Time to have a break and follow up on the topics you have questions about with speakers or attendees. We will be waiting for you with upcoming sessions.",
        "location": "THU",
        "startTime": "16:20",
        "endTime": "17:00",
        "speakers": [],
        "presentationLinks": []
    },
    {
        "id": 165470454737611330,
        "title": "Break",
        "type": "break",
        "description": "Time to have a break and follow up on the topics you have questions about with speakers or attendees. We will be waiting for you with upcoming sessions.",
        "location": "THU2",
        "startTime": "16:40",
        "endTime": "17:00",
        "speakers": [],
        "presentationLinks": []
    },
    {
        "id": 165470516855187460,
        "title": "Break",
        "type": "lunch_break",
        "description": "Don't forget to stretch up not only your brain but your body as well. Time for physical activities and making a cup of coffee also counts :) ",
        "location": "FRI",
        "startTime": "12:45",
        "endTime": "13:40",
        "speakers": [],
        "presentationLinks": []
    },
    {
        "id": 16547051953332096,
        "title": "Break",
        "type": "break",
        "description": "Don't forget to stretch up not only your brain but your body as well. Time for physical activities and making a cup of coffee also counts :) ",
        "location": "FRI2",
        "startTime": "12:45",
        "endTime": "13:05",
        "speakers": [],
        "presentationLinks": []
    },
    {
        "id": 165470568354138140,
        "title": "Opening",
        "type": "other",
        "description": "Join our opening announcements to kick-start Day 1 of UI5con full of invigorating sessions with new and returning speakers. We will go over the format of the Hybrid event for both days.",
        "location": "THU",
        "startTime": "14:00",
        "endTime": "14:05",
        "speakers": [],
        "presentationLinks": []
    },
    {
        "id": 165470570912289060,
        "title": "Closing Day 1",
        "type": "other",
        "description": "Join us to wrap up Day 1 of UI5con, where we summarize the day's sessions and what to look forward to for Day 2.",
        "location": "THU",
        "startTime": "19:00",
        "endTime": "19:05",
        "speakers": [],
        "presentationLinks": []
    },
    {
        "id": 165470586303071580,
        "title": "Closing UI5con 2022",
        "type": "other",
        "description": "Join us to wrap up our 2-days journey of UI5con'22, where we summarize the day's sessions and we are looking forward to your feedback!",
        "location": "FRI",
        "startTime": "15:20",
        "endTime": "15:25",
        "speakers": [],
        "presentationLinks": []
    }
]