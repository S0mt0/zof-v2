const blogPlaceholderContent = (
  title: string,
  focus: string,
  impact: string
) => `
  <p>${title} reflects the steady, people-first work of the Zita-Onyeka Foundation. This story highlights how ${focus.toLowerCase()} is becoming more visible through practical support, thoughtful partnerships, and consistent community presence.</p>
  <p>${impact} The work described here is not only about immediate relief, but also about creating continuity, dignity, and stronger everyday outcomes for children, women, and families.</p>
  <p>Across our outreach and education efforts, we continue learning from the people closest to the need. Those lessons shape how we respond, what we improve, and how we remain accountable to the communities we serve.</p>
`;

const eventPlaceholderDetail = (
  name: string,
  emphasis: string,
  outcome: string
) => `
  <p>${name} is designed as a community-centered event that brings people together around ${emphasis.toLowerCase()}. The goal is to make support feel practical, welcoming, and visible.</p>
  <p>${outcome} Participants can expect a thoughtful atmosphere, clear coordination, and a structure built around learning, connection, and meaningful follow-through.</p>
  <p>Like many of our programs, this event is shaped by local needs and by the belief that lasting impact grows from respectful, people-first action.</p>
`;

export const placeholderBlogs: IBlog[] = [
  {
    id: "blog-placeholder-01",
    title: "What community care looks like after the cameras leave",
    slug: "what-community-care-looks-like-after-the-cameras-leave",
    excerpt:
      "A reflection on the quiet follow-through that makes outreach feel trustworthy, practical, and human.",
    content: blogPlaceholderContent(
      "What community care looks like after the cameras leave",
      "community care",
      "It explores the kind of support that continues after public moments pass."
    ),
    bannerImage: "/assets/img/zof_led_community.jpg",
    status: "published",
    featured: true,
    tags: ["community", "outreach"],
    comments: [],
    views: 0,
    createdBy: "placeholder",
    authorId: null,
    createdAt: new Date("2026-04-20"),
    updatedAt: new Date("2026-04-20"),
    publishedAt: new Date("2026-04-20"),
    author: { name: "ZOF Editorial", email: "", image: "" },
  },
  {
    id: "blog-placeholder-02",
    title: "Inside a classroom visit shaped by listening first",
    slug: "inside-a-classroom-visit-shaped-by-listening-first",
    excerpt:
      "Why educational support starts with understanding what children, teachers, and caregivers actually need.",
    content: blogPlaceholderContent(
      "Inside a classroom visit shaped by listening first",
      "education support",
      "The story follows how listening changes the way programs are designed and delivered."
    ),
    bannerImage: "/assets/img/classroom.jpg",
    status: "published",
    featured: true,
    tags: ["education", "children"],
    comments: [],
    views: 0,
    createdBy: "placeholder",
    authorId: null,
    createdAt: new Date("2026-04-12"),
    updatedAt: new Date("2026-04-12"),
    publishedAt: new Date("2026-04-12"),
    author: { name: "Programs Team", email: "", image: "" },
  },
  {
    id: "blog-placeholder-03",
    title: "The women building confidence through shared skill spaces",
    slug: "the-women-building-confidence-through-shared-skill-spaces",
    excerpt:
      "Stories from practical empowerment sessions where learning, dignity, and income readiness meet.",
    content: blogPlaceholderContent(
      "The women building confidence through shared skill spaces",
      "women empowerment",
      "It captures how practical skill spaces can restore confidence and widen opportunity."
    ),
    bannerImage: "/assets/img/ZOF_WOMEN_SKILL_AQ.jpg",
    status: "published",
    featured: false,
    tags: ["women", "skills"],
    comments: [],
    views: 0,
    createdBy: "placeholder",
    authorId: null,
    createdAt: new Date("2026-04-05"),
    updatedAt: new Date("2026-04-05"),
    publishedAt: new Date("2026-04-05"),
    author: { name: "Impact Desk", email: "", image: "" },
  },
  {
    id: "blog-placeholder-04",
    title: "A small outreach day that meant a great deal to families",
    slug: "a-small-outreach-day-that-meant-a-great-deal-to-families",
    excerpt:
      "Looking back at a modest but deeply felt intervention rooted in consistency rather than spectacle.",
    content: blogPlaceholderContent(
      "A small outreach day that meant a great deal to families",
      "family outreach",
      "It shows how small, well-organized interventions can have lasting emotional and practical value."
    ),
    bannerImage: "/assets/img/sharing-food.jpg",
    status: "published",
    featured: false,
    tags: ["families", "outreach"],
    comments: [],
    views: 0,
    createdBy: "placeholder",
    authorId: null,
    createdAt: new Date("2026-03-28"),
    updatedAt: new Date("2026-03-28"),
    publishedAt: new Date("2026-03-28"),
    author: { name: "Field Notes", email: "", image: "" },
  },
  {
    id: "blog-placeholder-05",
    title: "Why youth programs work better when they feel collaborative",
    slug: "why-youth-programs-work-better-when-they-feel-collaborative",
    excerpt:
      "Young people respond differently when support is built with them instead of simply delivered to them.",
    content: blogPlaceholderContent(
      "Why youth programs work better when they feel collaborative",
      "youth development",
      "The piece looks at participation, ownership, and trust as essential ingredients of stronger programming."
    ),
    bannerImage: "/assets/img/zof_empower_youth.jpg",
    status: "published",
    featured: false,
    tags: ["youth", "programs"],
    comments: [],
    views: 0,
    createdBy: "placeholder",
    authorId: null,
    createdAt: new Date("2026-03-18"),
    updatedAt: new Date("2026-03-18"),
    publishedAt: new Date("2026-03-18"),
    author: { name: "Youth Desk", email: "", image: "" },
  },
  {
    id: "blog-placeholder-06",
    title: "The volunteers who make logistics feel like care",
    slug: "the-volunteers-who-make-logistics-feel-like-care",
    excerpt:
      "Behind every smooth outreach effort is a team making practical coordination feel warm and humane.",
    content: blogPlaceholderContent(
      "The volunteers who make logistics feel like care",
      "volunteer coordination",
      "It emphasizes how planning, transport, timing, and hospitality all shape the dignity of service."
    ),
    bannerImage: "/assets/img/zof_volunteer.jpg",
    status: "published",
    featured: false,
    tags: ["volunteers", "coordination"],
    comments: [],
    views: 0,
    createdBy: "placeholder",
    authorId: null,
    createdAt: new Date("2026-03-10"),
    updatedAt: new Date("2026-03-10"),
    publishedAt: new Date("2026-03-10"),
    author: { name: "Volunteer Team", email: "", image: "" },
  },
  {
    id: "blog-placeholder-07",
    title: "Children remind us why hope should feel practical",
    slug: "children-remind-us-why-hope-should-feel-practical",
    excerpt:
      "Moments from the field that show how encouragement matters most when it arrives with real support.",
    content: blogPlaceholderContent(
      "Children remind us why hope should feel practical",
      "child-focused support",
      "The piece reflects on pairing encouragement with resources, continuity, and safe learning environments."
    ),
    bannerImage: "/assets/img/child_group.jpg",
    status: "published",
    featured: false,
    tags: ["children", "hope"],
    comments: [],
    views: 0,
    createdBy: "placeholder",
    authorId: null,
    createdAt: new Date("2026-03-02"),
    updatedAt: new Date("2026-03-02"),
    publishedAt: new Date("2026-03-02"),
    author: { name: "Community Journal", email: "", image: "" },
  },
  {
    id: "blog-placeholder-08",
    title: "What sustainability means in a people-first nonprofit",
    slug: "what-sustainability-means-in-a-people-first-nonprofit",
    excerpt:
      "A grounded look at how responsible growth, trust, and long-term planning strengthen our mission.",
    content: blogPlaceholderContent(
      "What sustainability means in a people-first nonprofit",
      "sustainable impact",
      "It connects stewardship, pacing, and thoughtful partnerships to stronger outcomes over time."
    ),
    bannerImage: "/assets/img/support-on-sunset.jpg",
    status: "published",
    featured: false,
    tags: ["sustainability", "mission"],
    comments: [],
    views: 0,
    createdBy: "placeholder",
    authorId: null,
    createdAt: new Date("2026-02-23"),
    updatedAt: new Date("2026-02-23"),
    publishedAt: new Date("2026-02-23"),
    author: { name: "ZOF Editorial", email: "", image: "" },
  },
  {
    id: "blog-placeholder-09",
    title: "Community portraits from a day of shared encouragement",
    slug: "community-portraits-from-a-day-of-shared-encouragement",
    excerpt:
      "A quieter visual and written recap of a foundation moment centered on presence, care, and belonging.",
    content: blogPlaceholderContent(
      "Community portraits from a day of shared encouragement",
      "community presence",
      "It documents how visible solidarity can help people feel seen, welcomed, and remembered."
    ),
    bannerImage: "/assets/img/zof_groupie_01.jpg",
    status: "published",
    featured: false,
    tags: ["community", "portraits"],
    comments: [],
    views: 0,
    createdBy: "placeholder",
    authorId: null,
    createdAt: new Date("2026-02-16"),
    updatedAt: new Date("2026-02-16"),
    publishedAt: new Date("2026-02-16"),
    author: { name: "Media Desk", email: "", image: "" },
  },
  {
    id: "blog-placeholder-10",
    title: "What we keep learning about dignity in service",
    slug: "what-we-keep-learning-about-dignity-in-service",
    excerpt:
      "An editorial note on language, respect, and designing support that feels as thoughtful as it is useful.",
    content: blogPlaceholderContent(
      "What we keep learning about dignity in service",
      "dignity in service",
      "It reflects on how tone, process, and consistency shape whether help feels respectful."
    ),
    bannerImage: "/assets/img/team-on-sunset.jpg",
    status: "published",
    featured: false,
    tags: ["dignity", "service"],
    comments: [],
    views: 0,
    createdBy: "placeholder",
    authorId: null,
    createdAt: new Date("2026-02-08"),
    updatedAt: new Date("2026-02-08"),
    publishedAt: new Date("2026-02-08"),
    author: { name: "Foundation Notes", email: "", image: "" },
  },
];

export const placeholderEvents: IEvent[] = [
  {
    id: "event-placeholder-01",
    name: "Community Learning Support Day",
    slug: "community-learning-support-day",
    detail: eventPlaceholderDetail(
      "Community Learning Support Day",
      "education readiness and family support",
      "It creates a helpful setting for school-focused encouragement, supplies guidance, and local connection."
    ),
    excerpt:
      "A practical education-centered gathering focused on helping children and caregivers prepare well for learning.",
    organizer: "Zita-Onyeka Foundation",
    date: new Date("2026-06-08"),
    startTime: "10:00",
    endTime: "14:00",
    location: "Garki Area 11, Abuja",
    maxAttendees: 120,
    currentAttendees: 58,
    bannerImage: "/assets/img/classroom.jpg",
    status: "upcoming",
    featured: true,
    tags: ["education", "community"],
    ticketPrice: "Free",
    registrationRequired: true,
    createdBy: "placeholder",
    createdAt: new Date("2026-05-01"),
    updatedAt: new Date("2026-05-01"),
    createdByUser: { name: "ZOF Events", email: "", image: "" },
  },
  {
    id: "event-placeholder-02",
    name: "Women’s Skills and Confidence Circle",
    slug: "womens-skills-and-confidence-circle",
    detail: eventPlaceholderDetail(
      "Women’s Skills and Confidence Circle",
      "practical empowerment and peer support",
      "The session is structured to leave participants encouraged, connected, and better positioned for growth."
    ),
    excerpt:
      "A people-first session that combines conversation, learning, and encouragement for women building new pathways.",
    organizer: "Zita-Onyeka Foundation",
    date: new Date("2026-06-15"),
    startTime: "11:00",
    endTime: "15:00",
    location: "Wuse 2, Abuja",
    maxAttendees: 90,
    currentAttendees: 47,
    bannerImage: "/assets/img/ZOF_WOMEN_SKILL_AQ.jpg",
    status: "upcoming",
    featured: true,
    tags: ["women", "skills"],
    ticketPrice: "Free",
    registrationRequired: true,
    createdBy: "placeholder",
    createdAt: new Date("2026-05-01"),
    updatedAt: new Date("2026-05-01"),
    createdByUser: { name: "ZOF Events", email: "", image: "" },
  },
  {
    id: "event-placeholder-03",
    name: "Youth Leadership and Mentorship Meetup",
    slug: "youth-leadership-and-mentorship-meetup",
    detail: eventPlaceholderDetail(
      "Youth Leadership and Mentorship Meetup",
      "confidence-building and guided mentorship",
      "The aim is to create a generous space where young people can ask questions, find direction, and feel supported."
    ),
    excerpt:
      "A youth-centered meetup designed around mentorship, confidence, and honest conversation about growth.",
    organizer: "Zita-Onyeka Foundation",
    date: new Date("2026-06-22"),
    startTime: "09:30",
    endTime: "13:00",
    location: "Utako, Abuja",
    maxAttendees: 110,
    currentAttendees: 76,
    bannerImage: "/assets/img/zof_empower_youth.jpg",
    status: "happening",
    featured: false,
    tags: ["youth", "mentorship"],
    ticketPrice: "Free",
    registrationRequired: true,
    createdBy: "placeholder",
    createdAt: new Date("2026-05-01"),
    updatedAt: new Date("2026-05-01"),
    createdByUser: { name: "ZOF Events", email: "", image: "" },
  },
  {
    id: "event-placeholder-04",
    name: "Children’s Reading and Activity Morning",
    slug: "childrens-reading-and-activity-morning",
    detail: eventPlaceholderDetail(
      "Children’s Reading and Activity Morning",
      "joyful literacy and child-friendly engagement",
      "It pairs reading moments with playful structure so children can learn in ways that feel safe and encouraging."
    ),
    excerpt:
      "A warm morning program combining reading, guided activities, and encouragement for children.",
    organizer: "Zita-Onyeka Foundation",
    date: new Date("2026-07-05"),
    startTime: "09:00",
    endTime: "12:30",
    location: "Maitama, Abuja",
    maxAttendees: 80,
    currentAttendees: 32,
    bannerImage: "/assets/img/child_group.jpg",
    status: "upcoming",
    featured: false,
    tags: ["children", "reading"],
    ticketPrice: "Free",
    registrationRequired: true,
    createdBy: "placeholder",
    createdAt: new Date("2026-05-01"),
    updatedAt: new Date("2026-05-01"),
    createdByUser: { name: "ZOF Events", email: "", image: "" },
  },
  {
    id: "event-placeholder-05",
    name: "Volunteer Coordination and Outreach Briefing",
    slug: "volunteer-coordination-and-outreach-briefing",
    detail: eventPlaceholderDetail(
      "Volunteer Coordination and Outreach Briefing",
      "service readiness and team alignment",
      "The event focuses on clarity, hospitality, and the kind of preparation that helps field work run smoothly."
    ),
    excerpt:
      "A planning-focused session for volunteers preparing to support upcoming community outreach moments.",
    organizer: "Zita-Onyeka Foundation",
    date: new Date("2026-07-12"),
    startTime: "13:00",
    endTime: "16:00",
    location: "Jabi, Abuja",
    maxAttendees: 60,
    currentAttendees: 24,
    bannerImage: "/assets/img/zof_volunteer.jpg",
    status: "upcoming",
    featured: false,
    tags: ["volunteers", "planning"],
    ticketPrice: "Free",
    registrationRequired: true,
    createdBy: "placeholder",
    createdAt: new Date("2026-05-01"),
    updatedAt: new Date("2026-05-01"),
    createdByUser: { name: "ZOF Events", email: "", image: "" },
  },
  {
    id: "event-placeholder-06",
    name: "Family Care Outreach Distribution",
    slug: "family-care-outreach-distribution",
    detail: eventPlaceholderDetail(
      "Family Care Outreach Distribution",
      "direct support and dignified delivery",
      "The structure of the day is meant to feel orderly, respectful, and responsive to the realities families face."
    ),
    excerpt:
      "An outreach event focused on practical support for families through a calm and well-coordinated distribution day.",
    organizer: "Zita-Onyeka Foundation",
    date: new Date("2026-04-14"),
    startTime: "10:00",
    endTime: "15:00",
    location: "Kubwa, Abuja",
    maxAttendees: 150,
    currentAttendees: 150,
    bannerImage: "/assets/img/sharing-food.jpg",
    status: "completed",
    featured: false,
    tags: ["families", "distribution"],
    ticketPrice: "Free",
    registrationRequired: false,
    createdBy: "placeholder",
    createdAt: new Date("2026-03-20"),
    updatedAt: new Date("2026-04-14"),
    createdByUser: { name: "ZOF Events", email: "", image: "" },
  },
  {
    id: "event-placeholder-07",
    name: "Back-to-School Preparation Workshop",
    slug: "back-to-school-preparation-workshop",
    detail: eventPlaceholderDetail(
      "Back-to-School Preparation Workshop",
      "school readiness and caregiver guidance",
      "It helps families think through the practical and emotional preparation children need for a stronger start."
    ),
    excerpt:
      "A workshop for caregivers and students focused on returning to school with clarity, confidence, and support.",
    organizer: "Zita-Onyeka Foundation",
    date: new Date("2026-04-28"),
    startTime: "09:30",
    endTime: "13:30",
    location: "Lugbe, Abuja",
    maxAttendees: 100,
    currentAttendees: 100,
    bannerImage: "/assets/img/zof_child.jpg",
    status: "completed",
    featured: false,
    tags: ["school", "caregivers"],
    ticketPrice: "Free",
    registrationRequired: true,
    createdBy: "placeholder",
    createdAt: new Date("2026-04-01"),
    updatedAt: new Date("2026-04-28"),
    createdByUser: { name: "ZOF Events", email: "", image: "" },
  },
  {
    id: "event-placeholder-08",
    name: "Community Health and Support Conversation",
    slug: "community-health-and-support-conversation",
    detail: eventPlaceholderDetail(
      "Community Health and Support Conversation",
      "wellbeing, awareness, and trusted dialogue",
      "The program brings people together for accessible information and practical next-step support."
    ),
    excerpt:
      "A discussion-centered event designed to make wellbeing information feel clear, practical, and close to home.",
    organizer: "Zita-Onyeka Foundation",
    date: new Date("2026-03-30"),
    startTime: "11:00",
    endTime: "14:00",
    location: "Gwarinpa, Abuja",
    maxAttendees: 75,
    currentAttendees: 75,
    bannerImage: "/assets/img/zof_led_community.jpg",
    status: "completed",
    featured: false,
    tags: ["health", "community"],
    ticketPrice: "Free",
    registrationRequired: false,
    createdBy: "placeholder",
    createdAt: new Date("2026-03-12"),
    updatedAt: new Date("2026-03-30"),
    createdByUser: { name: "ZOF Events", email: "", image: "" },
  },
  {
    id: "event-placeholder-09",
    name: "Girls’ Confidence and Learning Circle",
    slug: "girls-confidence-and-learning-circle",
    detail: eventPlaceholderDetail(
      "Girls’ Confidence and Learning Circle",
      "safe learning spaces and encouragement",
      "It is built to help girls feel seen, supported, and more confident about their next steps."
    ),
    excerpt:
      "A supportive gathering for girls centered on confidence, shared learning, and practical encouragement.",
    organizer: "Zita-Onyeka Foundation",
    date: new Date("2026-07-19"),
    startTime: "10:30",
    endTime: "13:30",
    location: "Asokoro, Abuja",
    maxAttendees: 70,
    currentAttendees: 38,
    bannerImage: "/assets/img/zof_child1.jpg",
    status: "upcoming",
    featured: false,
    tags: ["girls", "confidence"],
    ticketPrice: "Free",
    registrationRequired: true,
    createdBy: "placeholder",
    createdAt: new Date("2026-05-01"),
    updatedAt: new Date("2026-05-01"),
    createdByUser: { name: "ZOF Events", email: "", image: "" },
  },
  {
    id: "event-placeholder-10",
    name: "Partners Breakfast for Sustainable Community Action",
    slug: "partners-breakfast-for-sustainable-community-action",
    detail: eventPlaceholderDetail(
      "Partners Breakfast for Sustainable Community Action",
      "partnership, stewardship, and long-term impact",
      "It creates space for supporters and collaborators to think together about responsible growth and shared purpose."
    ),
    excerpt:
      "A partnership gathering focused on collaboration, stewardship, and the next chapter of practical impact.",
    organizer: "Zita-Onyeka Foundation",
    date: new Date("2026-08-02"),
    startTime: "08:30",
    endTime: "11:00",
    location: "Central Area, Abuja",
    maxAttendees: 50,
    currentAttendees: 19,
    bannerImage: "/assets/img/shake-hands.png",
    status: "upcoming",
    featured: false,
    tags: ["partners", "sustainability"],
    ticketPrice: "Invitation",
    registrationRequired: true,
    createdBy: "placeholder",
    createdAt: new Date("2026-05-01"),
    updatedAt: new Date("2026-05-01"),
    createdByUser: { name: "ZOF Events", email: "", image: "" },
  },
];

export function withPlaceholderBlogs(blogs: IBlog[] = [], min = 10) {
  const merged = [...blogs];
  const seen = new Set(blogs.map((blog) => blog.slug));

  for (const placeholder of placeholderBlogs) {
    if (merged.length >= min) break;
    if (seen.has(placeholder.slug)) continue;
    merged.push(placeholder);
    seen.add(placeholder.slug);
  }

  return merged;
}

export function withPlaceholderEvents(events: IEvent[] = [], min = 10) {
  const merged = [...events];
  const seen = new Set(events.map((event) => event.slug));

  for (const placeholder of placeholderEvents) {
    if (merged.length >= min) break;
    if (seen.has(placeholder.slug)) continue;
    merged.push(placeholder);
    seen.add(placeholder.slug);
  }

  return merged;
}

export function findPlaceholderBlog(slug: string) {
  return placeholderBlogs.find((blog) => blog.slug === slug);
}

export function findPlaceholderEvent(slug: string) {
  return placeholderEvents.find((event) => event.slug === slug);
}
