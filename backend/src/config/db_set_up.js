const { mongoClient, db } = require('./mongoClient');  // Import your MongoDB client and db

async function setUpDatabase(universities, majors, scholarships) {
  try {
    // Ensure the database connection is established
    if (!db) {
      throw new Error('MongoDB connection is not established');
    }

    const universitiesCollection = db.collection('universities'); // Get the universities collection
    const deleteResult = await universitiesCollection.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} documents from the collection.`);
    const result = await universitiesCollection.insertMany(universities);
    console.log(`Inserted ${result.insertedCount} universities into the database`);

    const majorsCollection = db.collection('majors'); // Get the majors collection
    const deleteMajorResult = await majorsCollection.deleteMany({});
    console.log(`Deleted ${deleteMajorResult.deletedCount} documents from the collection.`);
    const majorResult = await majorsCollection.insertMany(majors);
    console.log(`Inserted ${majorResult.insertedCount} majors into the database`);

    const scholarshipsCollection = db.collection('scholarships'); // Get the scholarships collection
    const deleteScholarResult = await scholarshipsCollection.deleteMany({});
    console.log(`Deleted ${deleteScholarResult.deletedCount} documents from the collection.`);
    const scholarResult = await scholarshipsCollection.insertMany(scholarships);
    console.log(`Inserted ${scholarResult.insertedCount} scholarships into the database`);

    console.log("Database setup completed successfully");
  } catch (error) {
    console.error("Error setting up the database:", error);
  } finally {
    await mongoClient.close();  // Close the MongoDB connection
    console.log("MongoDB connection closed");
  }
}


const universities = [
  {
    _id: "uni-001",
    name: "American University of Phnom Penh",
    aliases: ["AUPP"],
    location: {
      city: "Phnom Penh",
      address: "Kilometer 6, 278H, Street 201R, Kroalkor Village, Unnamed Road, Phnom Penh",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4534.010138757573!2d104.8983707756259!3d11.616005343145648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095177ee61fd7d%3A0xa66cfdf83a58b2ae!2sAmerican%20University%20of%20Phnom%20Penh!5e1!3m2!1sen!2skh!4v1758355586711!5m2!1sen!2skh"
    },
    events:[
      { id: "uni-001-1",
        title: "AUPP Campus Connect: Open House 2025",
        date: "17 September 2024",
        time: "1:00 PM  - 5:00 PM",
        location: "AUPP Campus",
        image: "./images/pic/universities/event/Campus-Connect-Open-House.jpg",
        description: "Join us for a day of exploration and discovery at AUPP's Open House 2025. Meet faculty, tour the campus, and learn about our programs.",
        link: "https://www.aupp.edu.kh/events/open-house-2025"
      },
      { id: "uni-001-2",
        title: "Explore UA at AUPP: Info & Networking Session",
        date: "5 November 2024",
        time: "10:00 AM - 12:00 PM",
        location: "AUPP Auditorium",
        image: "./images/pic/universities/event/Explore-UA-at-AUPP-Info-Networking-Session.jpg",
        description: "Celebrate International Education Week with us! Attend seminars on global education trends and opportunities.",
        link: "https://www.aupp.edu.kh/events/international-education-week"
      },
      { id: "uni-001-3",
        title: "Exploring FHSU Info and Networking Session",
        date: "15 October 2024",
        time: "9:00 AM - 4:00 PM",
        location: "AUPP Gymnasium",
        image: "./images/pic/universities/event/Exploring-FHSU-Event.jpg",
        description: "Connect with top employers at the AUPP Career Fair 2024. Bring your resume and prepare for on-the-spot interviews.",
        link: "https://www.aupp.edu.kh/events/career-fair-2024"
      }

    ],
    contact: {
      phone: "+855 23 964 777",
      email: "info@aupp.edu.kh"
    },
    website: "https://www.aupp.edu.kh/",
    type: "Private",
    established: 2013,
    admissions: {
      deadlines: "Rolling Admissions",
      requirements: ["High school diploma", "English proficiency test (TOEFL/IELTS)", "Letters of recommendation"]
    },
    tuition: {
      min: 6000,
      max: 9000,
      currency: "USD",
      period: "annual"
    },
    description: "AUPP offers American-style education in Cambodia. It provides undergraduate and graduate programs in partnership with Fort Hays State University, USA. AUPP emphasizes critical thinking, creativity, and global perspectives. The campus features modern facilities, including a library, labs, and recreational areas. AUPP is committed to academic excellence and community engagement.",
    student_population: 1500,
    campus: {
      size: "10 acres"
    },
    accreditation: "Accredited by the Cambodian Ministry of Education, Youth and Sport",
    ranking: 5,
    images: {
      logo: "./images/pic/universities/logo/aupp.png",
      cover: "./images/pic/universities/cover/AUPP-Building.jpg",
      albums: ['']
    },
    last_updated: "2024-06-01"
  },
  {
    _id: "uni-002",
    name: "Royal University of Phnom Penh",
    aliases: ["RUPP"],
    location: {
      city: "Phnom Penh",
      address: "",
      map: ""
    },
    contact: {
      phone: "",
      email: ""
    },
    website: "http://www.rupp.edu.kh/",
    type: "Public",
    established: 1960,
    admissions: {
      deadlines: "",
      requirements: []
    },
    tuition: {
      min: 500,
      max: 1500,
      currency: "USD",
      period: "annual"
    },
    description: "The largest and oldest university in Cambodia.",
    student_population: null,
    campus: {
      size: ""
    },
    accreditation: "",
    ranking: 4,
    images: {
      logo: "./images/pic/universities/logo/rupp.png",
      cover: "./images/pic/universities/cover/img_ifl_doe.jpg"
    },
    scholarships: ["RUPP Excellence Scholarship", "RUPP Sports Scholarship"],
    last_updated: "2024-06-01"
  },
  {
    _id: "uni-003",
    name: "Institute of Technology of Cambodia",
    aliases: ["ITC"],
    location: {
      city: "Phnom Penh",
      address: "",
      map: ""
    },
    contact: {
      phone: "",
      email: ""
    },
    website: "https://itc.edu.kh/?amp",
    type: "Public",
    established: 1964,
    admissions: {
      deadlines: "",
      requirements: []
    },
    tuition: {
      min: 800,
      max: 2000,
      currency: "USD",
      period: "annual"
    },
    description: "Leading engineering and technology university in Cambodia.",
    student_population: null,
    campus: {
      size: ""
    },
    accreditation: "",
    ranking: 4,
    images: {
      logo: "./images/pic/universities/logo/itc.png",
      cover: "./images/pic/universities/cover/batiment_a_1.jpg"
    },
    scholarships: ["ITC Merit Scholarship", "ITC Research Scholarship"],
    last_updated: "2024-06-01"
  },
  {
    _id: "uni-004",
    name: "Cambodia Academy of Digital Technology",
    aliases: ["CADT"],
    location: {
      city: "Phnom Penh",
      address: "",
      map: ""
    },
    contact: {
      phone: "",
      email: ""
    },
    website: "http://www.cadt.edu.kh/",
    type: "Private",
    established: 2009,
    admissions: {
      deadlines: "",
      requirements: []
    },
    tuition: {
      min: 1000,
      max: 2500,
      currency: "USD",
      period: "annual"
    },
    description: "A private university focusing on technology and science.",
    student_population: null,
    campus: {
      size: ""
    },
    accreditation: "",
    ranking: 3,
    images: {
      logo: "./images/pic/universities/logo/cadt.png",
      cover: "./images/pic/universities/cover/5a549845f529e0764c24627e2d9671717bd65d22_2_663x500.jpeg"
    },
    scholarships: ["CUTS Academic Scholarship", "CUTS Leadership Scholarship"],
    last_updated: "2024-06-01"
  },
  {
    _id: "uni-005",
    name: "Paragon University",
    aliases: ["Zaman University"],
    location: {
      city: "Phnom Penh",
      address: "",
      map: ""
    },
    contact: {
      phone: "",
      email: ""
    },
    website: "https://zamanuniversity.edu.kh/",
    type: "Private",
    established: 2010,
    admissions: {
      deadlines: "",
      requirements: []
    },
    tuition: {
      min: 1200,
      max: 3000,
      currency: "USD",
      period: "annual"
    },
    description: "A private university offering diverse programs.",
    student_population: null,
    campus: {
      size: ""
    },
    accreditation: "",
    ranking: 3,
    images: {
      logo: "./images/pic/universities/logo/paragon.jpg",
      cover: "./images/pic/universities/cover/paragon-campus.jpg"
    },
    scholarships: ["Zaman Merit Scholarship", "Zaman Sports Scholarship"],
    last_updated: "2024-06-01"
  },
  {
    _id: "uni-006",
    name: "Norton University",
    aliases: ["Norton"],
    location: {
      city: "Phnom Penh",
      address: "",
      map: ""
    },
    contact: {
      phone: "",
      email: ""
    },
    website: "https://www.norton-u.com/",
    type: "Private",
    established: 1996,
    admissions: {
      deadlines: "",
      requirements: []
    },
    tuition: {
      min: 1500,
      max: 3500,
      currency: "USD",
      period: "annual"
    },
    description: "One of the leading private universities in Cambodia.",
    student_population: null,
    campus: {
      size: ""
    },
    accreditation: "",
    ranking: 4,
    images: {
      logo: "./images/pic/universities/logo/norton.png",
      cover: "./images/pic/universities/cover/norton-campus.jpg"
    },
    scholarships: ["Norton Academic Scholarship", "Norton Community Service Scholarship"],
    last_updated: "2024-06-01"
  },
  {
    _id: "uni-007",
    name: "Pannasastra University of Cambodia",
    aliases: ["PUC"],
    location: {
      city: "Phnom Penh",
      address: "",
      map: ""
    },
    contact: {
      phone: "",
      email: ""
    },
    website: "https://www.puc.edu.kh/",
    type: "Private",
    established: 1997,
    admissions: {
      deadlines: "",
      requirements: []
    },
    tuition: {
      min: 1300,
      max: 2800,
      currency: "USD",
      period: "annual"
    },
    description: "A private university with a focus on humanities and social sciences.",
    student_population: null,
    campus: {
      size: ""
    },
    accreditation: "",
    ranking: 4,
    images: {
      logo: "./images/pic/universities/logo/PUC_Logo.png",
      cover: "./images/pic/universities/cover/PUC_Campus.jpg"
    },
    scholarships: ["PUC Merit Scholarship", "PUC Leadership Scholarship"],
    last_updated: "2024-06-01"
  },
  {
    _id: "uni-008",
    name: "University of Cambodia",
    aliases: ["UC"],
    location: {
      city: "Phnom Penh",
      address: "",
      map: ""
    },
    contact: {
      phone: "",
      email: ""
    },
    website: "https://uc.edu.kh/",
    type: "Private",
    established: 2003,
    admissions: {
      deadlines: "",
      requirements: []
    },
    tuition: {
      min: 1000,
      max: 2500,
      currency: "USD",
      period: "annual"
    },
    description: "A private university offering a wide range of programs.",
    student_population: null,
    campus: {
      size: ""
    },
    accreditation: "",
    ranking: 3,
    images: {
      logo: "./images/pic/universities/logo/uc.png",
      cover: "./images/pic/universities/cover/UC-Campus.jpg"
    },
    scholarships: ["UC Academic Scholarship", "UC Sports Scholarship"],
    last_updated: "2024-06-01"
  },
  {
    _id: "uni-009",
    name: "Build Bright University",
    aliases: ["BBU"],
    location: {
      city: "Phnom Penh",
      address: "",
      map: ""
    },
    contact: {
      phone: "",
      email: ""
    },
    website: "https://www.bbu.edu.kh/",
    type: "Private",
    established: 2000,
    admissions: {
      deadlines: "",
      requirements: []
    },
    tuition: {
      min: 800,
      max: 2000,
      currency: "USD",
      period: "annual"
    },
    description: "A private university with multiple campuses across Cambodia.",
    student_population: null,
    campus: {
      size: ""
    },
    accreditation: "",
    ranking: 3,
    images: {
      logo: "./images/pic/universities/logo/bbu_logo.jpg",
      cover: "./images/pic/universities/cover/bbu-campus.jpg"
    },
    scholarships: ["BBU Merit Scholarship", "BBU Community Service Scholarship"],
    last_updated: "2024-06-01"
  },
  {
    _id: "uni-010",
    name: "Asia Europe University",
    aliases: ["AEU"],
    location: {
      city: "Phnom Penh",
      address: "",
      map: ""
    },
    contact: {
      phone: "",
      email: ""
    },
    website: "http://www.aeu.edu.kh/",
    type: "Private",
    established: 2005,
    admissions: {
      deadlines: "",
      requirements: []
    },
    tuition: {
      min: 900,
      max: 2200,
      currency: "USD",
      period: "annual"
    },
    description: "A private university focusing on business and technology.",
    student_population: null,
    campus: {
      size: ""
    },
    accreditation: "",
    ranking: 3,
    images: {
      logo: "./images/pic/universities/logo/aeu.png",
      cover: "./images/pic/universities/cover/aeu-campus.jpg"
    },
    scholarships: [],
    last_updated: "2024-06-01"
  }
];

const scholarships = [
  {
    _id: 1,
    uni_id: ['uni-001'],
    name: "AUPP Merit Scholarship",
    provider: "American University of Phnom Penh",
    cover_image: "./images/pic/universities/cover/aupp_merit_scholarship.jpg",
    amount: "$1,000 - $5,000",
    eligibility: "Outstanding academic achievement, usually top 10% of applicants. May require entrance exam and interview.",
    deadline: "June 30, 2024",
    description: "Awarded to incoming students with exceptional academic records and leadership potential at AUPP.",
    link: "https://aupp.edu.kh/scholarships/merit-scholarship"
  },
  {
    _id: 2,
    uni_id: ['uni-001', 'uni-002', 'uni-003', 'uni-008', 'uni-009', 'uni-010'],
    name: "អាហារូបករណ៍ អ.ម.ត",
    provider: "សម្ដេចតេជោ ហ៊ុន សែន តាមរយៈសម្ដេចធិបតី ហ៊ុន ម៉ាណែត",
    cover_image: "./images/pic/universities/cover/amt_scholarship.jpg",
    amount: "$500 - $3,000",
    eligibility: "Cambodian citizens graduating in the top 10% of high school. Must pass national scholarship exam.",
    deadline: "July 15, 2024",
    description: "Supports outstanding Cambodian high school graduates to pursue undergraduate studies in Cambodia.",
    link: "https://amt.edu.kh/scholarships/amt-scholarship"
  },
  {
    _id: 3,
    uni_id: ['uni-001', 'uni-002', 'uni-003'],
    name: "Digital Techo Talent Scholarship",
    provider: "Ministry of Post and Telecommunications",
    cover_image: "./images/pic/universities/cover/Techo_Digital_Talent_scholarship_2025_at_National_University_of_f7092c5110.webp",
    amount: "$1,500 - $4,000",
    eligibility: "Students pursuing IT, engineering, or digital technology fields. Must show involvement in research or innovation.",
    deadline: "August 1, 2024",
    description: "Encourages Cambodian students to excel in digital technology and innovation through financial support.",
    link: "https://digitaltecho.edu.kh/scholarships/digital-techo-talent-scholarship"
  },
  {
    _id: 4,
    uni_id: ['uni-001', 'uni-002', 'uni-003', 'uni-008', 'uni-009', 'uni-010'],
    name: "Chenzi Scholarship",
    provider: "Chenzi Group",
    cover_image: "./images/pic/universities/cover/Chen Zhi Scholarship - Registration.jpg",
    amount: "$1,000 - $2,500",
    eligibility: "Demonstrated leadership, community service, and academic excellence. Open to all majors.",
    deadline: "July 31, 2024",
    description: "Recognizes and supports students who show strong leadership and commitment to community development.",
    link: "https://chenzi.com.kh/scholarships/chenzi-scholarship"
  }
];

const majors = [
  {
    _id: "major_101",
    name: "Computer Science",
    discripline: "STEM",
    keywords: ["programming","software","AI"],
    description: "Study of computers and computational systems.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_102",
    name: "Business Administration",
    discripline: "Business",
    keywords: ["management","marketing","finance"],
    description: "Focus on business operations and management.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_103",
    name: "Civil Engineering",
    discripline: "Engineering",
    keywords: ["infrastructure","construction","design"],
    description: "Design and construction of infrastructure.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_104",
    name: "Accounting",
    discripline: "Business",
    keywords: ["finance","taxation","auditing"],
    description: "Focus on financial reporting and analysis.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_105",
    name: "Information Technology",
    discripline: "STEM",
    keywords: ["networks","databases","cybersecurity"],
    description: "Study of computer systems and networks.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_106",
    name: "Marketing",
    discripline: "Business",
    keywords: ["advertising","branding","digital marketing"],
    description: "Focus on market research and promotional strategies.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_107",
    name: "Mechanical Engineering",
    discripline: "Engineering",
    keywords: ["machines","thermodynamics","manufacturing"],
    description: "Design and analysis of mechanical systems.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_108",
    name: "Finance",
    discripline: "Business",
    keywords: ["investment","banking","financial analysis"],
    description: "Study of financial markets and investment strategies.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_109",
    name: "Electrical Engineering",
    discripline: "Engineering",
    keywords: ["circuits","electronics","signal processing"],
    description: "Study of electrical systems and electronic devices.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_110",
    name: "Human Resource Management",
    discripline: "Business",
    keywords: ["recruitment","training","employee relations"],
    description: "Focus on managing organizational workforce.",
    last_updated: "2024-06-01"
  }
];


// Call the setUpDatabase function to set up the database and insert the data
setUpDatabase(universities, majors, scholarships);