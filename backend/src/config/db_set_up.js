const { mongoClient, db } = require('./mongoClient');  // Import your MongoDB client and db
const bcrypt = require('bcrypt');


async function setUpDatabase(universities, majors, scholarships) {
  try {
    // Ensure the database connection is established
    if (!db) {
      throw new Error('MongoDB connection is not established');
    }

    const usersCollection = db.collection('users'); // Get the users collection
    const deleteUserResult = await usersCollection.deleteMany({});
    console.log(`Deleted ${deleteUserResult.deletedCount} documents from the collection.`);
    // Hash passwords before inserting users
    const usersWithHashedPasswords = await Promise.all(
      users.map(async user => ({
      ...user,
      password: await bcrypt.hash(user.password, 10)
      }))
    );
    const userResult = await usersCollection.insertMany(usersWithHashedPasswords);
    console.log(`Inserted ${userResult.insertedCount} users into the database`);

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

const users = [
  {
    _id: "user-001",
    email: "tokata453@gmail.com",
    password: "tokata123",
    name: "TOKATA",
    role: "admin",
  },
  {
    _id: "user-002",
    email: "panhaseth453@gmail.com",
    password: "user123",
    name: "Panhaseth SUY",
    role: "user",
  }
];

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
      address: "Russian Federation Blvd (110), Phnom Penh 120404",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.649324573174!2d104.88816677280163!3d11.568681244085747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e1!3m2!1sen!2skh!4v1758380535802!5m2!1sen!2skh"
    },
   events:[
      { id: "uni-002-1",
        title: "Distinguished Talk on MATERIALS FOR THE FUTURE Shaping Science, Technology and Society",
        date: "08 September 2025",
        time: "9:00 AM  - 10:30 AM",
        location: "RUPP Campus",
        image: "./images/pic/universities/event/rupp-distinguised-talk.jpg",
        description: "The Royal University of Phnom Penh is pleased to co-host a distinguished talk by Prof. Dr. Konstantin Novoselov, Nobel Laureate in Physics (2010)",
        link: "https://rupp.edu.kh/news/index.php?display=173"
      },
      { id: "uni-002-2",
        title: "Job Fair 2024",
        date: "28 July 2024",
        time: "8:00 AM - 5:00 PM",
        location: "CJCC",
        image: "./images/pic/universities/event/rupp-Job-Fair-2024.jpg",
        description: "ជួបគ្នាជាថ្មីនៅក្នុងកម្មវិធី CJCC ពិព័រណ៏ការងារ ខែកក្កដា ឆ្នាំ២០២៤  ដែលរៀបចំឡើងដោយ មជ្ឈមណ្ឌលសហប្រតិបត្ដិការកម្ពុជា-ជប៉ុន (CJCC)",
        link: "https://rupp.edu.kh/news/index.php?display=170"
      },
      { id: "uni-002-3",
        title: "Workshop on the 21st Century Skills - Leadership Mindset",
        date: "23 November 2023",
        time: "1:00 AM - 3:00 PM",
        location: "Online",
        image: "./images/pic/universities/event/rupp-workshop_leadership_activities_01.png",
        description: "On 23 November 2023, RUPP conducted workshop on the 21st Century Skills - Leadership Mindset to students, companies staffs, teachers, and school principles (in Cambodia).",
        link: "https://rupp.edu.kh/news/index.php?display=168"
      }
    ],
    contact: {
      phone: "023 883 640",
      email: "info@rupp.edu.kh"
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
      size: "10 acres"
    },
    accreditation: "Accredited by the Cambodian Ministry of Education, Youth and Sport",
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
      address: "Russian Conf Norodom Boulevard, Phnom Penh 120404",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.6330146401256!2d104.8955107728016!3d11.570402744051778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517388680e15%3A0x63057e6682968f5!2sInstitute%20of%20Technology%20of%20Cambodia!5e1!3m2!1sen!2skh!4v1758382752773!5m2!1sen!2skh"
    },
    events:[
      { id: "uni-003-1",
        title: "សេចក្តីជូនដំណឹងថ្មី ស្តីពីការជ្រើសរើសនិស្សិតចូលរៀន កម្រិតបរិញ្ញាបត្ររង",
        date: "26 Sep - 07 Nov 2025",
        time: "1:00 PM  - 5:00 PM",
        location: "ITC Campus",
        image: "./images/pic/universities/event/itc-recruite_new_strudents_25-26.jpg",
        description: "សេចក្តីជូនដំណឹង(ថ្មី) ស្តីពីការជ្រើសរើសនិស្សិតចូលរៀន កម្រិតបរិញ្ញាបត្ររង (មិនប្រឡង) នៅសាលាតិចណូ ភ្នំពេញ សម្រាប់ឆ្នាំសិក្សា​2025-2026",
        link: "https://itc.edu.kh/newsevent/%e1%9e%9f%e1%9f%81%e1%9e%85%e1%9e%80%e1%9f%92%e1%9e%8f%e1%9e%b8%e1%9e%87%e1%9e%bc%e1%9e%93%e1%9e%8a%e1%9f%86%e1%9e%8e%e1%9e%b9%e1%9e%84%e1%9e%90%e1%9f%92%e1%9e%98%e1%9e%b8-%e1%9e%9f%e1%9f%92-3/"
      },
      { id: "uni-003-2",
        title: "កម្មវិធីសិក្សាកម្រិតវិស្វករនៃមហាវិទ្យាល័យវារីសាស្ត្រ",
        date: "5 November 2024",
        time: "10:00 AM - 12:00 PM",
        location: "ITC Campus",
        image: "./images/pic/universities/event/itc-new_programme.png",
        description: "កម្មវិធីសិក្សាកម្រិតវិស្វករនៃមហាវិទ្យាល័យវារីសាស្ត្រ",
        link: "http://127.0.0.1:5501/frontend/public/index.html#/universities/uni-003"
      },
      { id: "uni-003-3",
        title: "សេចក្តីជូនដំណឹងថ្មី ស្តីពីការប្រឡងជ្រើសរើសនិស្សិតចូលរៀនឆ្នាំទី១",
        date: "25 Sep - 11 Oct 2025",
        time: "9:00 AM - 4:00 PM",
        location: "ITC Campus",
        image: "./images/pic/universities/event/itc-student-recruitment-25-26.jpg",
        description: "សេចក្តីជូនដំណឹង(ថ្មី) ស្តីពីការប្រឡងជ្រើសរើស និស្សិតចូលរៀនឆ្នាំទី១ កម្រិតវិស្វករ នៅសាលាតិចណូភ្នំពេញ",
        link: "https://itc.edu.kh/newsevent/%e1%9e%9f%e1%9f%81%e1%9e%85%e1%9e%80%e1%9f%92%e1%9e%8f%e1%9e%b8%e1%9e%87%e1%9e%bc%e1%9e%93%e1%9e%8a%e1%9f%86%e1%9e%8e%e1%9e%b9%e1%9e%84%e1%9e%90%e1%9f%92%e1%9e%98%e1%9e%b8-%e1%9e%9f%e1%9f%92/"
      }
    ],

    contact: {
      phone: "023880370",
      email: "graduate@itc.edu.kh"
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
    accreditation: "Accredited by the Cambodian Ministry of Education, Youth and Sport",
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
      address: "2nd Bridge Prek Leap, National Road Number 6, Phnom Penh 12252",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10603.400385671805!2d104.9021236790243!3d11.652744081592994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109516bdea989b3%3A0x372d2c5e0e14b706!2sCambodia%20Academy%20of%20Digital%20Technology%20(CADT)!5e1!3m2!1sen!2skh!4v1758385782138!5m2!1sen!2skh"
    },
      events:[
      { id: "uni-004-1",
        title: "Conference on Information Technology and its Applications 2025",
        date: "14,15 July 2025",
        time: "8:00 AM  - 5:00 PM",
        location: "CADT Campus",
        image: "./images/pic/universities/event/cadt-cita.png",
        description: "CITA 2025 will be co-organized by Vietnam-Korea University of Information and Communication Technology (Vietnam), Cambodia Academy of Digital Technology (Cambodia) and King Mongkut’s University of Technology North Bangkok (Thailand).",
        link: "https://cadt.edu.kh/cita-2025/"
      },
      { id: "uni-004-2",
        title: "DIGITAL INSIGHTS – THE FUTURE OF EDUCATION",
        date: "21 November 2023",
        time: "5:00 AM - 9:00 PM",
        location: "The TRIBE Hotel",
        image: "./images/pic/universities/event/cadt-digital_insight.png",
        description: "This year´s edition of Digital Insights was compiled to analyze all these topics and shed light on the state of digitalization in the educational system in Cambodia and the region.",
        link: "https://cadt.edu.kh/digital-insights-the-future-of-education/"
      },
      { id: "uni-004-3",
        title: "CADT Open House",
        date: "29 September 2025",
        time: "1:30 PM - 5:30 PM",
        location: "CADT Campus",
        image: "./images/pic/universities/event/cadt-open-houese.jpg",
        description: "Open House Week will allow students interested in learning more about our Bachelor’s Programs in Digital Business, Computer Science, and Telecoms & Networking to visit our campus.",
        link: "https://cadt.edu.kh/cadt-open-house/"
      }

    ],
    contact: {
      phone: "010340000",
      email: "pr@cadt.edu.kh"
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
      address: "អាគារលេខ ៨, សង្កាត់បឹងកក់១, St 315, Phnom Penh",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.5192077400693!2d104.8954066728019!3d11.582407943815067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517bf7757d23%3A0x965c34888684bf1!2sParagon%20International%20University!5e1!3m2!1sen!2skh!4v1758387590321!5m2!1sen!2skh"
    },
      events:[
      { id: "uni-005-1",
        title: "Scholarships Offering to Students Returning from Thailand",
        date: "31 August 2025",
        time: "8:00 AM  - 5:00 PM",
        location: "Paragon Campus",
        image: "./images/pic/universities/event/paragon-scholarship_for_students.png",
        description: "Paragon International University has announced scholarships of up to 100% for Cambodian students returning from Thailand due to the recent Cambodia–Thailand border conflict.",
        link: "https://paragoniu.edu.kh/paragon-international-university-offers-up-to-100-scholarships-for-students-returning-from-thailand/"
      },
      { id: "uni-005-2",
        title: "The Department of Civil Engineering Scholarship is open!",
        date: "18 September 2025",
        time: "8:00 AM  - 5:00 PM",
        location: "Paragon Campus",
        image: "./images/pic/universities/event/paragon-new_department.jpg",
        description: "Department of Civil Engineering at Paragon International University is calling for applications for the 2025 Departmental Scholarship with scholarship offered up to 100% for all high school graduates.",
        link: "https://paragoniu.edu.kh/the-department-of-civil-engineering-scholarship-is-open/"
      },
      { id: "uni-005-3",
        title: "សាកលវិទ្យាល័យអន្តរជាតិ​ ផារ៉ាហ្គន ប្រកាសផ្ដល់អាហារូបករណ៍ផ្អែកលើនិទ្ទេស",
        date: "1,2 October 2025",
        time: "8:00 AM - 5:00 PM",
        location: "Paragon Campus",
        image: "./images/pic/universities/event/paragon-scholarship.png",
        description: "Connect with top employers at the AUPP Career Fair 2024. Bring your resume and prepare for on-the-spot interviews.",
        link: "https://www.aupp.edu.kh/events/career-fair-2024"
      }

    ],
    contact: {
      phone: "023996111",
      email: "admission@paragoniu.edu.kh"
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
      size: "10 acres"
    },
    accreditation: "Accredited by the Cambodian Ministry of Education, Youth and Sport",
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
      address: "Keo Chenda St, Phnom Penh 12000",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.465055258031!2d104.927545572802!3d11.588116043702447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310953fd9f9a51e9%3A0xc26eafcd2ed5ca29!2sNorton%20University!5e1!3m2!1sen!2skh!4v1758464061240!5m2!1sen!2skh"
    },
    events:[
      { id: "uni-006-1",
        title: "ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគីរី",
        date: "3 August 2023",
        time: "1:00 PM  - 5:00 PM",
        location: "Modulkiri",
        image: "./images/pic/universities/event/norton-school_trip.webp",
        description: "គណៈគ្រប់គ្រង សាស្រ្តាចារ្យ និងបុគ្គលិកផ្នែកពាណិជ្ជសាស្រ្ត និងវិទ្យាសាស្រ្តសេដ្ឋកិច្ចបានដឹកនាំនិស្សិតចុះទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគីរីកាលពីថ្ងៃទី៣១ ខែមិនា ដល់ ថ្ងៃទី០២ ខែមេសា ឆ្នាំ២០២៣ ដែលមានចំនួន ២យប់ ៣ថ្ងៃ។",
        link: "https://blog.norton-u.com/article/88"
      },
      { id: "uni-006-2",
        title: "និស្សិតន័រតុនចូលរួមប្រកួតប្រជែង ក្នុងកម្មវិធី CAMEL’s Future Engineer Program",
        date: "18 September 2024",
        time: "10:00 AM - 12:00 PM",
        location: "Norton Campus",
        image: "./images/pic/universities/event/norton-competition.webp",
        description: "ថ្ងៃទី១៨ ខែកញ្ញា ឆ្នាំ២០២៤  ជាវគ្គប្រកួតប្រជែង ក្នុងកម្មវិធី CAMEL’s Future Engineer Program  ដែលរៀបចំឡើង ដោយក្រុមហ៊ុនផលិតស៊ីម៉ង៍ ជីប ម៉ុង អុិនស៊ី ស៊ីមេន ដោយមានការចូលរួមពីសាកលវិទ្យាល័យចំនួន ៥។",
        link: "https://blog.norton-u.com/article/89"
      },
      { id: "uni-006-3",
        title: "Russia XXVIII Moscow International Salon of Inventions and Innovative Technologies",
        date: "18, 20 March 2025",
        time: "9:00 AM - 4:00 PM",
        location: "Moscow, Russia",
        image: "./images/pic/universities/event/norton-moscow.webp",
        description: "និស្សិតផ្នែកស្ថាបត្យកម្ម ផ្នែកអគ្គីសនី និងផ្នែកកុំព្យូទ័រវិទ្យា នៃសាកលវិទ្យាល័យន័រតុន បានចូលរួមកម្មវិធីគំនិតច្នៃប្រឌិត និងការបង្កើតថ្មីនៅទីក្រុងMocow ប្រទេសRussia ក្នុងកម្មវិធីឈ្មោះ XXVIII Moscow International Salon of Inventions and Innovative Technologies (ARCHIMEDES - 2025) ",
        link: "https://blog.norton-u.com/article/90"
      }

    ],
    contact: {
      phone: "023432075",
      email: "info@norton-u.com"
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
    accreditation: "Accredited by the Cambodian Ministry of Education, Youth and Sport",
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
      address: "Lot 10, Alley of, 144C Preah Norodom Blvd (41), Phnom Penh",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48395.5452753364!2d104.85928378639544!3d11.569518147787852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109512fa7280c61%3A0x31ecb11eb27a35cc!2zUGHDscOxxIFzxIFzdHJhIFVuaXZlcnNpdHkgb2YgQ2FtYm9kaWE!5e1!3m2!1sen!2skh!4v1758466497270!5m2!1sen!2skh"
    },
    events:[
      { id: "uni-007-1",
        title: "Education Fair 2025 & Scholarship",
        date: "4 October 2025",
        time: "8:00 AM  - 5:00 PM",
        location: "PUC Toul Kork Campus",
        image: "./images/pic/universities/event/puc-edu_job_fair.jpg",
        description: "Full Scholarship Announcement for the students!",
        link: "https://www.puc.edu.kh/scholarship-announcement/education-fair-2025-scholarship-09-2025/"
      },
      { id: "uni-007-2",
        title: "Fully-Covered Scholarship Announcement for PUC Students!",
        date: "17 August 2025",
        time: "8:00 AM - 5:00 PM",
        location: "PUC Campus",
        image: "./images/pic/universities/event/puc-japan_scholarship.jpg",
        description: "Under the mutual cooperation between Paññāsāstra University of Cambodia (PUC) and Teikyo University (TU) on Student Exchange, now we are pleased to announce the fully-funded scholarship for our 2 PUC students",
        link: "https://www.puc.edu.kh/tokyo/fully-covered-scholarship-announcement-for-puc-students-08-2025/"
      },
      { id: "uni-007-3",
        title: "5-Month-Student Exchange Program to the University of A Coruña (UDC), Spain",
        date: "9 June 2025",
        time: "8:00 AM - 5:00 PM",
        location: "PUC Campus",
        image: "./images/pic/universities/event/puc-spain_exchange_programme.png",
        description: "កម្មវិធីផ្លាស់ប្តូរការសិក្សាទៅកាន់សាកលវិទ្យាល័យ THE UNIVERSITY OF A CORUÑA (UDC) ប្រទេសអេស្ប៉ាញ បានមកដល់ទៀតហើយ សម្រាប់និស្សិតនៃសាកលវិទ្យាល័យបញ្ញាសាស្រ្តកម្ពុជា",
        link: "https://www.aupp.edu.kh/events/career-fair-2024"
      }

    ],
    contact: {
      phone: "023993956",
      email: "info@puc.edu.kh"
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
    accreditation: "Accredited by the Cambodian Ministry of Education, Youth and Sport",
    ranking: 4,
    images: {
      logo: "./images/pic/universities/logo/PUC_Logo.png",
      cover: "./images/pic/universities/cover/PUC_Campus.jpg"
    },
    scholarships: ["PUC Merit Scholarship", "PUC Leadership Scholarship"],
    last_updated: "2024-06-01"
  },
  {
    id: "uni-008",
    name: "University of Cambodia",
    aliases: ["UC"],
    location: {
      city: "Phnom Penh",
      address: "វិថី ណតប្រ៊ីតដ៍, ភូមិ ស្លែងរលឹង, សង្កាត់ ទឹកថ្លា រាជធានី​ភ្នំពេញ, 12102",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.747502097308!2d104.86851047280142!3d11.558313344289944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951b83795d97b%3A0x735f8f7a3e5bc507!2sThe%20University%20of%20Cambodia!5e1!3m2!1sen!2skh!4v1759111542508!5m2!1sen!2skh"
    },
    events:[
      { id: "uni-008-1",
        title: "Open House",
        date: "3 October 2025",
        time: "8:00 PM  - 10:00 AM",
        location: "UC Campus",
        image: "./images/pic/universities/event/uc-open_house.jpg",
        description: "សាកលវិទ្យាល័យកម្ពុជានឹងរៀបចំកម្មវិធី ស្វាគមន៍ឆ្នាំសិក្សាថ្មី (Open House) ដែលនឹងប្រព្រឹត្តទៅនៅថ្ងៃទី៣ ខែតុលា ឆ្នាំ២០២៥ខាងមុខនេះ។",
        link: "https://www.facebook.com/photo?fbid=1249847753848676&set=a.557667303066728"
      },
      { id: "uni-008-2",
        title: "SFL Department(School of Foerign Language) Academic Programs",
        date: "25 September 2025",
        time: "8:00 AM - 5:00 PM",
        location: "UC Campus",
        image: "./images/pic/universities/event/Explore-UA-at-AUPP-Info-Networking-Session.jpg",
        description: "Celebrate International Education Week with us! Attend seminars on global education trends and opportunities.",
        link: "https://www.aupp.edu.kh/events/international-education-week"
      },
      { id: "uni-008-3",
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
      phone: "023993276",
      email: " info@uc.edu.kh"
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
    accreditation: "Accredited by the Cambodian Ministry of Education, Youth and Sport",
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
      address: "Samdach Sothearos Blvd (3), Phnom Penh",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21214.269668136432!2d104.89781401083984!3d11.554487500000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095132064d579f%3A0x4893f37adc6c5f92!2sBuild%20Bright%20University!5e1!3m2!1sen!2skh!4v1759113553529!5m2!1sen!2skh",
    },
    events:[
      { id: "uni-009-1",
        title: "ចុះទស្សនកិច្ចសិក្សា នៅក្នុង vKirirom Pine Resort",
        date: "9 August 2025",
        time: "8:00 PM  - 10:00 AM",
        location: "Kampong Speu",
        image: "./images/pic/universities/event/bbu-field_trip.avif",
        description: "នៅថៃ្ងទី៩ ខែសីហា ឆ្នាំ២០២៥ និស្សិតមហាវិទ្យាល័យវិទ្យាសាស្រ្តនិងបច្ចេកវិទ្យា នៃសាកលវិទ្យាល័យបៀលប្រាយ សរុបចំនួន៧១នាក់ ទៅឧទ្យានជាតិគីរីរម្យ ខេត្តកំពង់ស្ពឺ  បានចុះទស្សនកិច្ចសិក្សា",
        link: "https://web.bbu.edu.kh/Visit-to-study-and-understand-the-information-technology-network-and-operation-management-system-in-the-hotel-tourism-sector-at-vKirirom-Pine-Resort-401"
      },
      { id: "uni-009-2",
        title: "បវេសនកាលថ្មី! ឆ្នាំសិក្សា២០២៥-២០២៦ ជំនាន់ទី២៦",
        date: "15 October 2025",
        time: "8:00 AM - 5:00 PM",
        location: "BBU Campus",
        image: "./images/pic/universities/event/bbu-new_semester.avif",
        description: "សិស្សានុសិស្សទាំងអ្នកជាប់បាក់ឌុប និងធ្លាក់បាក់ឌុប អាចបន្តការសិក្សាកម្រិតបរិញ្ញាបត្ររង និងបរិញ្ញាបត្រ សិក្សានៅសាកលវិទ្យាល័យបៀលប្រាយ",
        link: "https://web.bbu.edu.kh/New-Year-Academic-Year-2025-2026-26th-Generation-Build-Bright-University-all-9-provincial-and-capital-branches-welcome-392"
      },
      { id: "uni-009-3",
        title: "អាហារូបករណ៍សិក្សា១០០% ជូនដល់កូនៗ របស់យោធិនពលីជីវិត ដើម្បីបុព្វហេតុការពារជាតិ",
        date: "15 October 2024",
        time: "9:00 AM - 4:00 PM",
        location: "AUPP Gymnasium",
        image: "./images/pic/universities/event/Exploring-FHSU-Event.jpg",
        description: "Connect with top employers at the AUPP Career Fair 2024. Bring your resume and prepare for on-the-spot interviews.",
        link: "https://www.aupp.edu.kh/events/career-fair-2024"
      }
    ],

    contact: {
      phone: "023987700",
      email: "info@bbu.edu.kh"
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
    accreditation: "Accredited by the Cambodian Ministry of Education, Youth and Sport",
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
    accreditation: "Accredited by the Cambodian Ministry of Education, Youth and Sport",
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
    image: "./images/pic/majors/what-can-you-do-with-a-computer-science-degree-e1643881127644.jpg",
    keywords: ["programming","software","AI"],
    description: "Study of computers and computational systems.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_102",
    name: "Business Administration",
    discripline: "Business",
    image: "./images/pic/majors/resize.jpeg",
    keywords: ["management","marketing","finance"],
    description: "Focus on business operations and management.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_103",
    name: "Civil Engineering",
    discripline: "Engineering",
    image: "./images/pic/majors/Gorodenkoff-construction-1.jpg",
    keywords: ["infrastructure","construction","design"],
    description: "Design and construction of infrastructure.",
    last_updated: "2024-06-01"
  },
  {
    _id: "major_104",
    name: "Accounting",
    discripline: "Business",
    image: "./images/pic/majors/challenges-faced-and-lessons-learned-in-the-accounting-profession.webp",
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