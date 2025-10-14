



let lang = localStorage.getItem('lang') || 'km';

export function t(key) {
  const dict = {
    en: {
      home: 'Home',
      universities: 'Universities',
      majors: 'Majors',
      opportunities: 'Opportunities',
      forum: 'Forum',
      about: 'About',
      register: 'Register',
      login: 'Login',
      logout: 'Logout',
      profile: 'Profile',
      settings: 'Settings',
      adminDashboard: 'Admin Dashboard',
      contact: 'Contact',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      privacy_policy: 'Privacy Policy',
      terms_conditions: 'Terms & Conditions',
      cookie_policy: 'Cookie Policy',
      disclaimer: 'Disclaimer',
      faqs: 'FAQs',
      copyright: 'Copyright Notice',
      all_rights_reserved: 'All Rights Reserved',
      foot_desc: 'UniSites is a platform dedicated to helping students find the best universities, majors, and scholarships in Cambodia. We also provide a forum for students to connect and share their experiences.',
      foot_address: 'Kilometer 6, 278H, Street 201R, Kroalkor Village, Phnom Penh',
      home_title: 'Discover Your Future with UniSites',
      home_subtitle: 'Explore universities, majors, scholarships, and connect with peers.',
      pop_universities: 'Popular Universities',
      pop_majors: 'Popular Majors',
      pop_scholarships: 'Popular Scholarships',
      join_community: 'Join Our Community',
      connect_with_friends: 'Connect with friends and alumni in our forum.',
      visit_forum: 'Visit Forum',
      location: 'Location',
      type: 'Type',
      tuition: 'Tuition',
      ranking: 'Ranking',
      visit_details: 'Visit Details',
      provider: 'Provider',
      amount: 'Amount',
      deadline: 'Deadline',
      search: 'Search',
      search_placeholder: 'Search for universities, majors, scholarships...',
    },
    km: {
      home: 'ទំព័រដើម',
      universities: 'សាកលវិទ្យាល័យ',
      majors: 'ជំនាញ',
      opportunities: 'ឱកាស',
      forum: 'វេទិកា',
      about: 'អំពីយើង',
      register: 'ចុះឈ្មោះ',
      login: 'ចូលគណនី',
      logout: 'ចាកចេញ',
      profile: 'ប្រវត្តិរូប',
      settings: 'ការកំណត់',
      adminDashboard: 'ផ្ទាំងគ្រប់គ្រងរបស់អ្នកគ្រប់គ្រង',
      email: 'អ៊ីមែល',
      phone: 'លេខទូរស័ព្ទ',
      address: 'អាសយដ្ឋាន',
      privacy_policy: 'គោលការណ៍ ឯកជនភាព',
      terms_conditions: 'គោលការណ៍ និងលក្ខខណ្ឌផ្សេងៗ',
      cookie_policy: 'គោលការណ៍ នៃគូគី',
      disclaimer: 'ការបដិសេធ',
      faqs: 'សំណួរដែលសួរញឹកញាប់',
      copyright: 'កម្មសិទ្ធិបញ្ញា',
      all_rights_reserved: 'រក្សាសិទ្ធិគ្រប់យ៉ាង',
      foot_desc: 'UniSites គឺជាវេទិកាមួយដែលមានគោលបំណងជួយសិស្សានុសិស្សក្នុងការស្វែងរកសាកលវិទ្យាល័យ ជំនាញ និងអាហារូបករណ៍ដ៏ល្អបំផុតនៅកម្ពុជា។ យើងក៏ផ្តល់នូវវេទិកាសម្រាប់សិស្សានុសិស្សក្នុងការតភ្ជាប់ និងចែករំលែកបទពិសោធន៍របស់ពួកគេផងដែរ។',
      foot_address: 'គីឡូម៉ែត្រ ៦, ផ្លូវ ២៧៨ហេតុ, ផ្លូវ ២០១អា, ភូមិគោកលក់, រាជធានីភ្នំពេញ',
      home_title: 'ឆ្ពោះទៅរកអនាគតរបស់អ្នកជាមួយ UniSites',
      home_subtitle: 'ស្វែងរកសាកលវិទ្យាល័យ ជំនាញ អាហារូបករណ៍ និងតភ្ជាប់ជាមួយមិត្តភក្តិ',
      pop_universities: 'សាកលវិទ្យាល័យពេញនិយម',
      pop_majors: 'ជំនាញពេញនិយម',
      pop_scholarships: 'អាហារូបករណ៍ពេញនិយម',
      join_community: 'ចូលរួមជាមួយសហគមន៍របស់យើង',
      connect_with_friends: 'តភ្ជាប់ជាមួយមិត្តភក្តិ និងបងប្អូនរួមសិក្សារបស់អ្នកនៅក្នុងវេទិការបស់យើង',
      visit_forum: 'ទៅកាន់វេទិកា',
      location: 'ទីតាំង',
      type: 'ប្រភេទ',
      tuition: 'ថ្លៃសិក្សា',
      ranking: 'ចំណាត់ថ្នាក់',
      visit_details: 'ទៅកាន់ព័ត៌មានលម្អិត',
      provider: 'ផ្ដល់ជូនដោយ',
      amount: 'តម្លៃ',
      deadline: 'កាលបរិច្ឆេទផុតកំណត់',
      search: 'ស្វែងរក',
      search_placeholder: 'ស្វែងរកសាកលវិទ្យាល័យ ជំនាញ អាហារូបករណ៍...',
    }
  };
  return dict[lang][key] || key;
}

export function setLang(lang) {
  localStorage.setItem('lang', lang);
}

export function currentLang() { return lang; }

