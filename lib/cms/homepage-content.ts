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
    imageSrc: "/images/about/mrBloom.png",
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
    imageSrc: "/images/boardAndStaff/KellyCarey.jpg",
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
      image: "/images/LandingPhotosNew/1.Landing2025.jpg",
      title: "West Bloomfield",
      caption: "Students from Bentley High School (Burton, MI) arrive at the Damon Keith Center for Civil Rights at Wayne State University’s Law School. Elevating Student Voices Conference 2025",
    },
    {
      image: "/images/LandingPhotosNew/2.Landing2023.jpg",
      title: "Student Voting",
      caption: "High school students from The School at Marygrove, West Bloomfield High School, Novi High School, and Bentley High School check-in to the conference. Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/LandingPhotosNew/3.Landing2023.jpg",
      title: "Skubal",
      caption: "Smiles all around as the lobby brimmed with excitement about the day ahead. Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/LandingPhotosNew/4.Landing2023.jpg",
      title: "Presentations Plenary",
      caption: "Students contribute thoughts about the upcoming experience before heading to the plenary session. Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/LandingPhotosNew/5.Landing2024.Intro.jpg",
      title: "Presentations 5",
      caption: "Introduction of schools and participants. Elevating Student Voices Conference 2024",
    },
    {
      image: "/images/LandingPhotosNew/6.Landing.2024.OrganizingbreakoutLC.jpg",
      title: "Presentations 4",
      caption: "Students organizing themselves for the first breakout session. Elevating Student Voices Conference 2024",
    },
    {
      image: "/images/LandingPhotosNew/7.Landing.LC2025.JPG",
      title: "Presentations 3",
      caption: "Students capture their ideas on charts. Elevating Student Voices Conference 2025",
      imagePosition: "center 25%",
    },
    {
      image: "/images/LandingPhotosNew/8.Landing2023.jpg",
      title: "Presentations 2",
      caption: "Students engage in a listening circle around COVID and return to in-person learning. Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/LandingPhotosNew/9.Landing2023COVIDThemes.jpeg",
      title: "Presentations 1",
      caption: "Small group artifact of common themes about COVID at the plenary session. Elevating Student Voices Conference 2025",
    },
    {
      image: "/images/LandingPhotosNew/10.Landing2023.Studentperspective.jpeg",
      title: "Plenary",
      caption: "Word cloud containing student reflections of the conference. Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/LandingPhotosNew/11.Landing2024.LCbreakout.jpg",
      title: "Mumford",
      caption: "Students engage in a listening circle around COVID and return to in-person learning. Elevating Student Voices Conference 2024",
      imagePosition: "center 25%",
    },
    {
      image: "/images/LandingPhotosNew/12.Landing.Photo2024.LCpresent.jpg",
      title: "Levin",
      caption: "Students presenting their ideas in a plenary session. Elevating Student Voices Conference 2024",
    },
    {
      image: "/images/LandingPhotosNew/13.Landing.2025.SponsorsTshirt.jpg",
      title: "Julie and Amy",
      caption: "T-shirt with sponsors from the 2025 Elevating Student Voices Conference.",
    },
    {
      image: "/images/LandingPhotosNew/14.Landing.Photo2025LevinCenterTeam.jpg",
      title: "Group Session 5",
      caption: "The Levin Center for Oversight and Democracy’s Education Team provides incredible support for the conference.",
      imagePosition: "center 25%",
    },
    {
      image: "/images/LandingPhotosNew/15.Landing.2023.CitDia.jpg",
      title: "Group Session 4",
      caption: "Students engage in a structured conversation about a controversial public issue they identified prior to the conference. Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/LandingPhotosNew/16.Landing2023.CDia.jpg",
      title: "Group Session 3",
      caption: "Students engage in a structured conversation about a controversial public issue they identified prior to the conference. Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/LandingPhotosNew/19.Landing.2023.HeadingtoBreakout.jpg",
      title: "ESV Shirt",
      caption: "Students head off to breakouts in the Student Center at Wayne State University. Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/LandingPhotosNew/20.Landing.2023Delib.jpg",
      title: "Bentley",
      caption: "Students engage in naming the issues they face in education as part of the deliberative process. Elevating Student Voices Conference 2023",
    },
    {
      image: "/images/LandingPhotosNew/21.Landing.Deliberation.2024.jpg",
      title: "After Party",
      caption: "Students engage in naming the issues they face in education as part of the deliberative process. Elevating Student Voices Conference 2024",
    },
    {
      image: "/images/LandingPhotosNew/22.Landing2023deliberationartifact.jpg",
      title: "Deliberation Artifact",
      caption: "Student artifact on the biggest problems in education. Elevating Student Voices Conference 2023",
    },  
    {
      image: "/images/LandingPhotosNew/24.Landing2025celebraton.jpg",
      title: "Celebration",
      caption: "Welcoming students to the after-conference party at the McGregor Memorial Conference Center. Elevating Student Voices Conference 2025",
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
    {
      image: "/images/EvidenceOfImpact/1.EI_Conf.Goals.jpg",
      title: "Evidence of Impact",
      caption: "",
    },
    {
      image: "/images/EvidenceOfImpact/2.EI_StudentQuote.CivicActor2.jpg",
      title: "Evidence of Impact",
      caption: "Student Reflection: Post-Conference Interview",
    },
    {
      image: "/images/EvidenceOfImpact/3.EI.2024Data.LC.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Storytelling and Listening 2024",
    },
    {
      image: "/images/EvidenceOfImpact/4.EI_StudentQuote.Agency.jpg",
      title: "Evidence of Impact",
      caption: "Student Reflection: Post-Conference Interview",
    },
    {
      image: "/images/EvidenceOfImpact/5.EI_2025DataLC.JPG",
      title: "Evidence of Impact",
      caption: "Impact of Storytelling and Listening 2025",
    },
    {
      image: "/images/EvidenceOfImpact/6.EI_StudentQuoteBelonging.jpg",
      title: "Evidence of Impact",
      caption: "Student Reflection: Post-Conference Interview",
    },
    {
      image: "/images/EvidenceOfImpact/7.EI_2024DataRespecfulConv.final.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Citizen Dialogue (2024) - Unpacking a Public Issue",
    },
    {
      image: "/images/EvidenceOfImpact/8.EI_2025DataRespectfulConv.final.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Citizen Dialogue (2025) - Unpacking a Public Issue",
    },
    {
      image: "/images/EvidenceOfImpact/9.EI_StudentQuote.agency.CitDia.jpg",
      title: "Evidence of Impact",
      caption: "Student Reflection: Post-Conference Interview",
    },
    {
      image: "/images/EvidenceOfImpact/10.EI_2024Data.DiscussCit.JPG",
      title: "Evidence of Impact",
      caption: "Impact of Discussing Public Issues on Educating for Citizenship (2024)",
    },
    {
      image: "/images/EvidenceOfImpact/11.EI.2025Data.DiscussCit.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Discussing Public Issues on Educating for Citizenship (2025)",
    },
    {
      image: "/images/EvidenceOfImpact/12.EI_StudentQVoiceAgency.jpg",
      title: "Evidence of Impact",
      caption: "Student Reflection: Post-Conference Interview",
    },
    {
      image: "/images/EvidenceOfImpact/13.EI_2024Data.RespectfulDial.final.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Conference on Experiences with Respectful Conversations (2024)",
    },
    {
      image: "/images/EvidenceOfImpact/14.EI_2025Data.RespectfulDial.final.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Conference on Experiences with Respectful Conversations (2025)",
    },
    {
      image: "/images/EvidenceOfImpact/15.EI.StudentQuote.CCivic Actor.jpg",
      title: "Evidence of Impact",
      caption: "Student Reflection: Post-Conference Interview",
    },
    {
      image: "/images/EvidenceOfImpact/16.EI.2024Data.IdeasEd.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Problem-Solving Experience on Idea Formation (2024)",
    },
    {
      image: "/images/EvidenceOfImpact/17..EI_2025.Data.IdeasEd.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Problem-Solving Experience on Idea Formation (2025)",
    },
    {
      image: "/images/EvidenceOfImpact/18.EI__Agency Quote.jpg",
      title: "Evidence of Impact",
      caption: "Student Reflection: Post-Conference Interview",
    },
    {
      image: "/images/EvidenceOfImpact/19.EI_Data2024.Problemsolvpositivelearning.final.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Problem-Solving Session on Students’ View of Learning (2024)",
    },
    {
      image: "/images/EvidenceOfImpact/20.EI_2025Data.problsolv.ED.final.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Problem-Solving Session on Students’ View of Learning (2025)",
    },
    {
      image: "/images/EvidenceOfImpact/21.EI_.Quote2.jpg",
      title: "Evidence of Impact",
      caption: "Student Reflection: Post-Conference Interview",
    },
    {
      image: "/images/EvidenceOfImpact/22.EI_2025DataWorldviewdiscourse.final.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Students’ Cross-District Conversations (2025)",
    },
    {
      image: "/images/EvidenceOfImpact/23.EI_.StudentQuote.civicactor.jpg",
      title: "Evidence of Impact",
      caption: "Student Reflection: Post-Conference Interview",
    },
    {
      image: "/images/EvidenceOfImpact/24.EI.2024Data.Voting.JPG",
      title: "Evidence of Impact",
      caption: "Impact of Conference on Importance of Voting (2024)",
    },
    {
      image: "/images/EvidenceOfImpact/25.EI_2025DataVoting.jpg",
      title: "Evidence of Impact",
      caption: "Impact of Conference on Importance of Voting (2025)",
    },
    {
      image: "/images/EvidenceOfImpact/26.EI_.StudentQuote.Future.jpg",
      title: "Evidence of Impact",
      caption: "Student Reflection: Post-Conference Interview",
    },
    {
      image: "/images/EvidenceOfImpact/27.EI_StudentQuote.CivicEd.jpg",
      title: "Evidence of Impact",
      caption: "Student Reflection: Post-Conference Interview",
    },
  ],
};
