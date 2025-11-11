/* 
Main Stage Session ID -> "MS-1"
Demo Pod 1 Session ID -> "DP1-1"
Demo Pod 1 Session ID -> "DP2-1"
Auditorium Session ID -> "A-1"
Cafeteria Session ID -> "C-1" 
*/
var proposalLineupJson = [
  {
    id: "MS-1",
     title:
      "Streamlining Local App Previews: Virtual Endpoints for Seamless Development",
    type: "presentation_short",
    description:
      "In this session, you'll explore how the preview middleware improves application development by replacing traditional sandbox files with dynamic virtual endpoints, significantly reducing maintenance efforts for app developers. This evolution supports virtual endpoints for local Fiori Launchpad, QUnit, OPA5, and the Testsuite, ensuring a comprehensive and efficient development experience.\n \nNewly created applications can harness this capability out-of-the-box, while existing apps can be converted with just a single click. The SAP Fiori Tools for SAP Business Application Studio and VSCode further enhance this by offering e.g. Run Configurations, allowing developers to adjust preview setups without modifying ui5.yaml, package.json, or other code.\n \nJoin us to discover how these and other advancements will streamline your local development workflow, making it more flexible, efficient, and future-proof.\n \nDisclaimer: This session contains no neural networks and no machine learning, just pure, unadulterated human expertise. So, if you're looking for a no-AI safe space at the conference, this is the session for you.",
    location: "audimax",
    startTime: "11:00",
    endTime: "12:00",
    speakers: [
      {
        firstName: "Gaurav",
        lastName: "Rawat",
        company: "SAP",
        bio: "I am a business applications and tools developer with in-depth experience in UI/UX design. My expertise lies within cloud-native apps and middlewares, and the main languages in my tech stack are TypeScript and JavaScript.\n\nI am an active member of the UI5 community and I love cats 🐱",
        linkedInUrl: "dominik-heim-494aa9145",
        githubUrl: "https://github.com/heimwege",
        hasPhoto: true,
        photoUrl: "Gaurav",
      },
      {
        firstName: "Rounak",
        lastName: "Roy",
        company: "SAP",
        bio: "I’m a developer for Fiori tools with expertise in front end development and middlewares. I enjoy the sun, and I like cats.",
        hasPhoto: true,
        photoUrl: "Rounak-Roy",
      }
    ],
    presentationLinks: [{
        linkType: "Github Project",
        url: "https://github.com/heimwege/UI5con_2025",
      },
      {
        linkType: "Slides",
        url: "https://github.com/heimwege/UI5con_2025/blob/main/resources/UI5con_2025_preview%20middleware.pdf",
      },
      { linkType: "Recording", url: "https://youtu.be/YktsHqYJtwk" },],
  },
  {
    id: "DP1-1",
    title:
      "Demo Pod Session 1",
    type: "presentation_short",
    description:
      "Description for Demo Pod Session 1.",
    location: "room_w1",
    startTime: "11:00",
    endTime: "11:30",
    speakers: [
      {
        firstName: "FirtsName",
        lastName: "LastName",
        company: "SAP",
        bio: "Description about the speaker.",
        hasPhoto: true,
        photoUrl: "Placeholder",
      },
    ],
    presentationLinks: [],
  },
  {
    id: "DP2-1",
    title:
      "Demo Pod Session 2",
    type: "presentation_short",
    description:
      "Description for Demo Pod Session 2.",
    location: "room_w3",
    startTime: "11:00",
    endTime: "11:30",
    speakers: [
      {
        firstName: "FirtsName",
        lastName: "LastName",
        company: "SAP",
        bio: "Description about the speaker.",
        linkedInUrl: "www.sap.com",
        githubUrl: "www.sap.com",
        hasPhoto: true,
        photoUrl: "Placeholder",
      },
    ],
    presentationLinks: [],
  },
  {
    id: "A-1",
    title: "KeyNote",
    type: "catering",
    description: "Welcome Note from MD SAP Labs India",
    location: "expert",
    startTime: "9:30",
    endTime: "10:30",
    speakers: [],
    presentationLinks: [],
  },
  {
    id: "C-1",
    title: "Lunch",
    type: "catering",
    description: "Lunch time!",
    location: "canteen",
    startTime: "12:00",
    endTime: "13:00",
    speakers: [
    ],
    presentationLinks: [],
  },
  /* {
    id: "id-1738312218698-964",
    title:
      "Streamlining Local App Previews: Virtual Endpoints for Seamless Development",
    type: "presentation_short",
    description:
      "In this session, you'll explore how the preview middleware improves application development by replacing traditional sandbox files with dynamic virtual endpoints, significantly reducing maintenance efforts for app developers. This evolution supports virtual endpoints for local Fiori Launchpad, QUnit, OPA5, and the Testsuite, ensuring a comprehensive and efficient development experience.\n \nNewly created applications can harness this capability out-of-the-box, while existing apps can be converted with just a single click. The SAP Fiori Tools for SAP Business Application Studio and VSCode further enhance this by offering e.g. Run Configurations, allowing developers to adjust preview setups without modifying ui5.yaml, package.json, or other code.\n \nJoin us to discover how these and other advancements will streamline your local development workflow, making it more flexible, efficient, and future-proof.\n \nDisclaimer: This session contains no neural networks and no machine learning, just pure, unadulterated human expertise. So, if you're looking for a no-AI safe space at the conference, this is the session for you.",
    location: "room_w1",
    startTime: "16:05",
    endTime: "16:30",
    speakers: [
      {
        firstName: "Dominik",
        lastName: "Heim",
        company: "SAP",
        bio: "I am a business applications and tools developer with in-depth experience in UI/UX design. My expertise lies within cloud-native apps and middlewares, and the main languages in my tech stack are TypeScript and JavaScript.\n\nI am an active member of the UI5 community and I love cats 🐱",
        linkedInUrl: "dominik-heim-494aa9145",
        githubUrl: "https://github.com/heimwege",
        hasPhoto: true,
        photoUrl: "8d9567c6ac4a105b6b9a2f09f82fd47777919d11",
      },
      {
        firstName: "Annemarie",
        lastName: "Frank",
        company: "SAP",
        bio: "I’m a developer for Fiori tools with expertise in front end development and middlewares. I enjoy the sun, and I like cats.",
        hasPhoto: true,
        photoUrl: "1eb7ac52c58dd2b75634fdb037533ca9ecb4f170",
      },
    ],
    presentationLinks: [
      {
        linkType: "Github Project",
        url: "https://github.com/heimwege/UI5con_2025",
      },
      {
        linkType: "Slides",
        url: "https://github.com/heimwege/UI5con_2025/blob/main/resources/UI5con_2025_preview%20middleware.pdf",
      },
      { linkType: "Recording", url: "https://youtu.be/YktsHqYJtwk" },
    ],
    proficiencyLevel: "intermediate",
  }, */
  
];
