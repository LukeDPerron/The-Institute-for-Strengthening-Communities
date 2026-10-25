export type TeamMember = {
  name: string;
  title: string;
  imageSrc: string;
};

export type HomepageCarouselItem = {
  image: string;
  caption: string;
  title?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  imageScale?: number;
};

export type HomepageContent = {
  missionQuote: string;
  missionBg: string;
  mainPhotos: HomepageCarouselItem[];
  programPhotos: HomepageCarouselItem[];
  testimonies: HomepageCarouselItem[];
};

export const boardMembers: TeamMember[] = [
  {
    name: "David A. Bloom, M.D.",
    title: "Board Chair",
    imageSrc: "/images/boardAndStaff/DABheadshot.png",
  },
  {
    name: "Amy B. Bloom",
    title: "President & Chair",
    imageSrc: "/images/boardAndStaff/AmyBloom.png",
  },
  {
    name: "David Deutsch",
    title: "Board Member",
    imageSrc: "/images/boardAndStaff/DavidDeutsch.jpg",
  },
  {
    name: "Kelly Carey",
    title: "Treasurer & Director",
    imageSrc: "/images/boardAndStaff/KellyCarey.JPG",
  },
  {
    name: "Julie McDaniel-Muldoon",
    title: "Secretary & Director",
    imageSrc: "/images/boardAndStaff/JEMMuldoon_Headshot.jpg",
  },
  {
    name: "Sierra Pilarski",
    title: "Assistant to the President",
    imageSrc: "/images/boardAndStaff/Pilarski.png",
  },
  {
    name: "Lucas Perron",
    title: "Web Master",
    imageSrc: "/images/boardAndStaff/Hailey_headshot.jpg",
  },
];

export const homepageContent: HomepageContent = {
  missionQuote:
    "The Institute for Strengthening Communities' mission is to educate individuals, communities, and local leaders in democratic and restorative principles and practices that strengthen trust, civic engagement, and collaboration. ",
  missionBg: "/images/about/Mission.png",
  mainPhotos: [
    {
      image: "/images/Finalized_Landing_Photos/1.Landing2025.jpg",
      title: "West Bloomfield",
      caption: "Students from Bentley High School (Burton, MI) arrive at the Damon Keith Center for Civil Rights at Wayne State University’s Law School.  Elevating Student Voices Conference 2025",
    },
    {
      image: "/images/Finalized_Landing_Photos/2.Landing2023.jpg",
      title: "Student Voting",
      caption: "High school students from The School at Marygrove, West Bloomfield High School, Novi High School, and  Bentley High School check-in to the conference.  Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/Finalized_Landing_Photos/3.Landing2023.jpg",
      title: "Skubal",
      caption: "Smiles all around as the lobby brimmed with excitement about the day ahead.  Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/Finalized_Landing_Photos/4.Landing2023.jpg",
      title: "Presentations Plenary",
      caption: "Students contribute thoughts about the upcoming experience before heading to the plenary session.  Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/Finalized_Landing_Photos/5.Landing2024.Intro.jpg",
      title: "Presentations 5",
      caption: "Introduction of schools and participants. Elevating Student Voices Conference 2024",
    },
    {
      image: "/images/Finalized_Landing_Photos/6.Landing.LC2025.JPG",
      title: "Presentations 4",
      caption: "Students capture their ideas on charts.  Elevating Student Voices Conference 2025",
    },
    {
      image: "/images/Finalized_Landing_Photos/7.Landing2023.jpg",
      title: "Presentations 3",
      caption: "Students engage in a listening circle around COVID and return to in-person learning. Elevating Student Voices Conference 2023",
      imagePosition: "center 25%",
    },
    {
      image: "/images/Finalized_Landing_Photos/8.Landing.2025.SponsorsTshirt.jpg",
      title: "Presentations 2",
      caption: "T-shirt with sponsors from the 2025 Elevating Student Voices Conference.",
    },
    {
      image: "/images/Finalized_Landing_Photos/9.Landing2024.LCbreakout.jpg",
      title: "Presentations 1",
      caption: "Students engage in a listening circle around COVID and return to in-person learning.  Elevating Student Voices Conference 2024",
    },
    {
      image: "/images/Finalized_Landing_Photos/10.Landing2023COVIDThemes.jpeg",
      title: "Plenary",
      caption: "Small group artifact of common themes about COVID at the plenary session.  Elevating Student Voices Conference 2025",
    },
    {
      image: "/images/Finalized_Landing_Photos/11.GroupActivity2026.jpg",
      title: "Mumford",
      caption: "Past participants reconvene in 2026, now as college students or in the workforce to build on what they had started.  Elevating Student Voices Conference 2026",
      imagePosition: "center 25%",
    },
    {
      image: "/images/Finalized_Landing_Photos/12.Landing.Photo2024.LCpresent.jpg",
      title: "Levin",
      caption: "Students presenting their ideas in a plenary session.  Elevating Student Voices Conference 2024",
    },
    {
      image: "/images/Finalized_Landing_Photos/13.Landing2023.Studentperspective.jpeg",
      title: "Julie and Amy",
      caption: "A Word cloud containing student reflections of the conference.  Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/Finalized_Landing_Photos/14.Landing.2026.ISC.jpg",
      title: "Group Session 5",
      caption: "Students from Elevating Voices 2026 help launch the Institute for Strengthening Communities with a mission. ",
      imagePosition: "center 25%",
    },
    {
      image: "/images/Finalized_Landing_Photos/15.Landing.deliberation.jpg",
      title: "Group Session 4",
      caption: "Students engage in a deliberation about education.  Elevating Student Voices 2026",
    },
    {
      image: "/images/Finalized_Landing_Photos/16. Reflecting.jpg",
      title: "Group Session 3",
      caption: "Students share feedback about the draft issue guide on education.",
    },
    {
      image: "/images/Finalized_Landing_Photos/17.Bentley2026.jpg",
      title: "ESV Shirt",
      caption: "The 2026 Elevating Student Voices participants get ready to head to Detroit from Burton, with plans to pick up other participants along the way.  Elevating Student Voices 2026",
    },
    {
      image: "/images/Finalized_Landing_Photos/18.Landing2026.jpg",
      title: "Bentley",
      caption: "Students develop and commit to community agreements. Elevating Student Voices Conference 2025",
    },
    {
      image: "/images/Finalized_Landing_Photos/19.Delibinaction2026.jpg",
      title: "After Party",
      caption: "Students consider their values and trade-offs of different actions in exploring their ideas about improving education. Elevating Student Voices 2026",
    },
    {
      image: "/images/Finalized_Landing_Photos/20.learning2026.jpg",
      title: "Deliberation Artifact",
      caption: "Our young people know that learning can be fun!  Elevating Student Voices 2026",
    },  
    {
      image: "/images/Finalized_Landing_Photos/21.Landing.Deliberation.2024.jpg",
      title: "Celebration",
      caption: "Students engage in naming the issues they face in education as part of the deliberative process.  Elevating Student Voices Conference 2024",
    },
    {
      image: "/images/Finalized_Landing_Photos/22.deliberation 3.jpg",
      title: "Deliberation",
      caption: "Students explore ideas from previous conferences and reflect on them collaboratively.  Elevating Student Voices 2026",
    },
    {
      image: "/images/Finalized_Landing_Photos/23.StdTest.Landing2023deliberationartifact.jpg",
      title: "Student Deliberation",
      caption: "Student artifact on the biggest problems in education.  Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/Finalized_Landing_Photos/24.deliberation_4.jpg",
      title: "Deliberation",
      caption: "Participants consider potential solutions to a shared problem.  Elevating Student Voices 2026",
    },
    {
      image: "/images/Finalized_Landing_Photos/25. Reflection after a Citizen Dialogue_.jpg",
      title: "Reflection",
      caption: "Participants provide feedback on structured conversations. 2016 Citizen Dialogue.",
    },
    {
      image: "/images/Finalized_Landing_Photos/26.deliberation_2.jpg",
      title: "Deliberation",
      caption: "Participants navigate tensions among options and actions.  Elevating Student Voices 2026",
    },
    {
      image: "/images/Finalized_Landing_Photos/27.Landing2025celebraton.jpg",
      title: "Celebration",
      caption: "Celebration after a successful conference Elevating Student Voices 2025",
    },
    {
      image: "/images/Finalized_Landing_Photos/28.ESV2026.jpg",
      title: "Elevating Student Voices",
      caption: "Participants wrap up a productive conference after a full day of work. Elevating Student Voices 2026",
    },
  ],
  programPhotos: [
    {
      image: "/images/about/header1.png",
      title: "Programs & Events",
      caption: "Students go to a Tigers Game after meeting",
    },
    {
      image: "/images/about/Our-Story.png",
      title: "Programs & Events",
      caption: "Filler text 5",
    },
    {
      image: "/images/about/Header.jpg",
      title: "Programs & Events",
      caption: "Filler text 6",
    },
  ],
  testimonies: [
    { image: "/images/EvidenceOfImpact/A.0.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/A.1.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/A.2.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/A.3.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/A.4.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/A.5.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/B.0.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/B.1.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/B.2.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/B.3.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/C.0.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/C.1.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/C.2.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/C.3.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/C.4.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/D.0.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/D.1.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/D.2.EI.png", title: "Evidence of Impact", caption: "" },
    { image: "/images/EvidenceOfImpact/D.3.EI.png", title: "Evidence of Impact", caption: "" },
  ],
};

