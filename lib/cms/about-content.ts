export type AboutImageSources = {
  hero: string;
  mission: string;
  story: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
};

export type StorySectionContent = {
  id: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  justifyDescription?: boolean;
  showSeeMore?: boolean;
  seeMoreHref?: string;
};

export const aboutImageSources: AboutImageSources = {
  hero: "/images/about/header.jpg",
  mission: "/images/about/mission.png",
  story: "/images/about/Our-Story.png",
};

export const boardMembers: TeamMember[] = [
  {
    name: "David A. Bloom, M.D.",
    role: "Board Chair",
    bio: "",
    imageSrc: "/images/about/mrBloom.png",
  },
  {
    name: "Amy B. Bloom",
    role: "President & Director",
    bio: "Amy B. Bloom, JD is a lawyer and civic education leader with over 30 years in K-12 education, including lecturing at the graduate education level. Currently, she serves as Research Scholar in Deliberative Democracy at the Center for the Study of Citizenship at Wayne State University. Amy’s focus is on educating for democracy through the nexus of literacy, civic and history education, and social-emotional learning. She served as the K-12 social studies and history consultant for Oakland Schools from 2001-2018. She brings a wealth of experience including work with the Kettering Foundation, the Shoah Foundation at the University of Southern California, state and federal judicial systems in Michigan and Massachusetts, the United States Senate, Detroit Future City, Detroit Public Schools, Detroit Police Department, Wayne State University School of Medicine, and the National Issues Forum Institute. ",
    imageSrc: "/images/boardAndStaff/AmyBloom.png",
  },
  {
    name: "David Deutsch",
    role: "Board Member",
    bio: "",
    imageSrc: "/images/boardAndStaff/DavidDeutsch.jpg",
  },
  {
    name: "Kelly Carey",
    role: "Board Member & Treasurer",
    bio: "Kelly Carey, MBA is a Curriculum Production Consultant for Oakland Schools, a regional educational service agency in Michigan, and has over 30 years experience in public education. She is a trainer through the International Institute for Restorative Practices and regularly provides restorative practices training at the county and local district level. Kelly is currently adapting the social-emotional curriculum units from the Michigan Model for Health into restorative sessions at the middle and high school levels. She has worked with a variety of Detroit-based non-profit organizations as lead facilitator and currently facilitates conversations for several communities under a grant from the Michigan Health Endowment Fund. Kelly believes that a community-focused approach is essential to any successful endeavor.",
    imageSrc: "/images/boardAndStaff/KellyCarey.jpg",
  },

        {
    name: "Sierra Pilarski",
    role: "Assistant to the President",
    bio: "",
    imageSrc: "/images/boardAndStaff/Pilarski.png",
  },
    {
    name: "Michael Steinback",
    role: "Director",
    bio: "Michael Steinback, a founding member of Oakland Bay Area CARES, has been with Detroit CARES since 2013 serving as executive director, program administrator, mentor, trainer, and coach. His work with CARES earned him the distinguished Men of Excellence in 2017 by the Michigan Chronicle. Michael currently serves as the Director of Enterprise Risk Management for the historic Julian C. Madison Building, LLC, in downtown Detroit. His business career includes risk management, small business consulting, commercial bank lending and community development. Michael has also been active in moderating and facilitating deliberative dialogue discourse, conducting wellness training around the US and in Kenya, while serving on youth and mental health focused organization boards.",
    imageSrc: "/images/boardAndStaff/michael-steinback-headshot.jpg",
  },

    {
    name: "Julie McDaniel-Muldoon",
    role: "Secretary & Director",
    bio: "Julie McDaniel-Muldoon, PhD, ACTP is a career public educator with over 40 years in K-12 education. She is a certified trainer for Bully-Free Schools, a program supported by the Michigan Department of Education, and since 2018 has served as the Social Media Content Coordinator for the International Bullying Prevention Association. Julie is a graduate certified restorative practitioner and trainer for the International Institute for Restorative Practices and is an Advanced Certified Trauma Practitioner and trainer for Starr Commonwealth. She recently retired from her position as a Safety and Well-Being Consultant at Oakland Schools, a regional educational service agency in Michigan. Julie remains committed to and passionate about creating safe and supportive learning environments that fully engage and empower all students and the adults who serve them.",
    imageSrc: "/images/boardAndStaff/JEMMuldoon_Headshot.jpg",
  },

    {
    name: "Hailey",
    role: "Therapy Dog",
    bio: "",
    imageSrc: "/images/about/Hailey_headshot.jpg",
  },


];

export const staffMembers: TeamMember[] = [

];

export const aboutStorySections: StorySectionContent[] = [
  {
    id: "mission",
    title: "Mission Statement",
    paragraphs: [
      "The organization’s mission is to educate individuals, communities, and local leaders in democratic and restorative principles that strengthen trust, civic engagement, and collaboration. Through workshops, trainings, community dialogues, and educational resources, the organization promotes civic responsibility, restorative practices, collective problem-solving, and constructive participation in community improvement efforts. Its work focuses on fostering healing, accountability, shared decision-making, and stronger community relationships through nonpartisan education and collaborative action.",
    ],
    imageSrc: aboutImageSources.mission,
    imageAlt: "Placeholder image for mission-driven community work",
    justifyDescription: true,
  },
  {
    id: "story",
    title: "Our Story",
    paragraphs: [
      "When you find your people, you can create something amazing together.",
      "Amy, Julie, and Kelly met during their time working for Oakland Schools, a regional educational service agency located in Oakland County, Michigan. Starting in 2014, they created the Citizen Dialogue program for the Center for the Study of Citizenship at Wayne State University to help people discuss controversial issues.",
      "Wanting to deepen their impact, they put their expertise in restorative and democratic practices together to create a multi-faceted approach to building community and addressing shared concerns together during the 2019-20 school year through a partnership with the Center for the Study of Citizenship. See: https://csc.wayne.edu/programs/institute-for-strengthening-communities and https://www.nationalcivicleague.org/ncr-article/building-civic-capacity-in-schools-and-communities/",
      "As COVID closed down school buildings in the spring of 2020, Amy met Michael through an online convening by Patricia Moore Harbour from the Kettering Foundation. Michael is the Executive Director of Detroit Cares Mentoring Movement and has been involved with the Kettering Foundation since the 1970s when he lived in the California bay area.  Both saw diversity as a strength in problem-solving. They became fast friends and paved a way for them to work together to educate for democratic public life.",
      "After COVID, Amy returned to a high school classroom to close out her teaching career. Dr. Kristy Spann from Bentley Community Schools hired her with the understanding that she would be able to create a class that focused on educating for democratic public life. Using Peter Levine’s book, “What Should We Do?,” she created a class that culminated in a student-led conference with the help of Julie and Kelly.  See https://lessenberryink.com/2024/01/18/making-the-constitution-relevant-and-fun/",
      "The team received a grant from the Kresge Foundation to run the conference in 2023 and invited Michael to join the effort. They obtained funding for a student-led conference for the next two years, including a scale up grant.  Given the data coming from the pre- and post- event surveys as well as student interviews, they recruited David and David to help create a new non-profit organization - The Institute for Strengthening Communities - to bring this work to places throughout Michigan and beyond.",
    ],
    imageSrc: aboutImageSources.story,
    imageAlt: "Placeholder image representing the organization story",
    reverse: true,
    justifyDescription: true,
  },
];
