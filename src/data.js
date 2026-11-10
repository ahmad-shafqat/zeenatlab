export { tests } from './test-catalogue';

export const packages=[
  {id:'basic',name:'Essential Health Check',subtitle:'A practical starting point for routine screening',price:3900,featured:false,tests:['Complete Blood Count (CBC)','Fasting Blood Sugar','Urine Complete Examination','Serum Uric Acid'],icon:'heart'},
  {id:'wellness',name:'Complete Wellness Package',subtitle:'Comprehensive evaluation of heart, liver, kidneys and blood health',price:8900,featured:true,tests:['Complete Blood Count (CBC)','Lipid Profile','Liver Function Tests (LFT)','Renal Function Tests (RFT)','Fasting Blood Sugar','Urine Complete Examination'],icon:'activity'},
  {id:'diabetes',name:'Diabetes Care Package',subtitle:'Essential diagnostic checks for diabetic health monitoring',price:4400,featured:false,tests:['Fasting Blood Sugar','HbA1c Glycated Hemoglobin','Renal Function Tests (RFT)','Urine Complete Examination'],icon:'droplets'}
];

export const gallery=[
  {title:'Laboratory facilities',desc:'Modern diagnostic analyzers and sterile sample testing environment',image:'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1100&q=85'},
  {title:'Gentle sample collection',desc:'Safe and sterile phlebotomy collection using single-use vacutainers',image:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85'},
  {title:'Automated diagnostic equipment',desc:'Precision pathology and biochemistry instruments for reliable results',image:'https://images.unsplash.com/photo-1581093458791-9d42e3c5f0f3?auto=format&fit=crop&w=1100&q=85'},
  {title:'Patient care & reception',desc:'Comfortable outpatient reception and swift digital report dispatch',image:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1100&q=85'}
];

export const branches=[
  {
    id:'wahdat-road',
    name:'Wahdat Road Branch',
    shortName:'Wahdat Road',
    tag:'Diagnostic Center & Sample Collection',
    address:'Wahdat Rd, near Ijaz Hospital, Multan Chungi, Lahore, 54000, Pakistan',
    shortAddress:'Wahdat Rd, near Ijaz Hospital, Multan Chungi, Lahore',
    landmark:'Near Ijaz Hospital, Multan Chungi',
    phone:'0327 0288889',
    phoneRaw:'03270288889',
    whatsapp:'923270288889',
    whatsappUrl:'https://wa.me/923270288889?text='+encodeURIComponent('Hello Zeenat Laboratories (Wahdat Road Branch), I would like to inquire about tests and appointments.'),
    timings:'Monday – Sunday: 7:30 AM – 12:00 midnight',
    days:'Monday to Sunday (Open 7 Days)',
    hours:'7:30 AM – 12:00 midnight',
    fastingNote:'Morning fasting sample draws begin at 7:30 AM daily.',
    walkIn:'Walk-ins welcome all day with no appointment required.',
    mapEmbed:'https://maps.google.com/maps?q=31.4967441,74.2672532&z=17&output=embed',
    mapUrl:'https://maps.app.goo.gl/kR4rtCjPh5WbiDi67',
    featured:true,
    badge:'Open 7 Days',
    services:[
      'Routine & Specialized Blood Tests',
      'Full-Body Health Screening Packages',
      'Morning Fasting Draws from 7:30 AM',
      'Doorstep Home Sample Collection',
      'Instant WhatsApp PDF Report Delivery'
    ]
  }
];

export const contact={
  name:'Zeenat Laboratories',
  tagline:'The Medical Laboratories · Diagnostic Centers',
  phone:'0327 0288889',
  phoneRaw:'03270288889',
  whatsapp:'923270288889',
  whatsappUrl:'https://wa.me/923270288889?text='+encodeURIComponent('Hello Zeenat Laboratories, I would like to inquire about lab tests and sample collection.'),
  mainBranch:'Wahdat Road Branch',
  branchesSummary:'Wahdat Road Branch, Lahore',
  // Default primary location for backwards compatibility
  address:'Wahdat Rd, near Ijaz Hospital, Multan Chungi, Lahore, 54000, Pakistan',
  shortAddress:'Wahdat Rd, near Ijaz Hospital, Multan Chungi, Lahore',
  map:'https://maps.google.com/maps?q=31.4967441,74.2672532&z=17&output=embed',
  mapUrl:'https://maps.app.goo.gl/kR4rtCjPh5WbiDi67'
};

export const timings={
  days:'Monday – Sunday: 7:30 AM – 12:00 midnight',
  hours:'Morning fasting sample collection from 7:30 AM',
  fastingNote:'Morning fasting sample collection starts at 7:30 AM at our Wahdat Road branch.',
  walkIn:'Walk-ins welcome at our Wahdat Road branch during open hours.'
};

export const homeSampling={
  title:'Home Sample Collection across Lahore',
  subtitle:'Get your blood and diagnostic samples collected safely in the comfort of your home by certified phlebotomists.',
  phone:'0327 0288889',
  areas:[
    'Wahdat Road & Wahdat Colony',
    'Multan Chungi & Bund Road',
    'Allama Iqbal Town (All Blocks)',
    'Muslim Town & Garden Town',
    'Mustafa Town & Mansoora',
    'Awan Town & Marghzar Colony',
    'Najaf Colony & University Area'
  ],
  features:[
    'Sterile, single-use vacuum collection tubes',
    'Strict cold-chain specimen transport',
    'Certified and gentle phlebotomists',
    'PDF reports delivered directly on WhatsApp',
    'Same-day results for routine blood tests'
  ]
};

export const faqs=[
  {
    q:'Where is Zeenat Laboratories Wahdat Road located?',
    a:'Our Wahdat Road branch is located on Wahdat Road, near Ijaz Hospital, Multan Chungi, Lahore, 54000, Pakistan. It is open 7 days a week from 7:30 AM to 12:00 midnight.'
  },
  {
    q:'Do you offer Home Sample Collection in Lahore?',
    a:'Yes! We provide doorstep sample collection across Wahdat Road, Multan Chungi, Allama Iqbal Town, Muslim Town, Mustafa Town, and surrounding localities. You can book home sampling via WhatsApp at 0327 0288889 or call 0327 0288889.'
  },
  {
    q:'How will I receive my test reports?',
    a:'Your verified laboratory reports are sent directly to your WhatsApp as high-resolution PDF documents as soon as results are ready. Hard copies can also be collected from our Wahdat Road branch.'
  },
  {
    q:'Can I send a picture of my doctor’s prescription on WhatsApp?',
    a:'Yes! Simply take a clear photo of your doctor’s prescription or slip and send it to our WhatsApp at 0327 0288889. Our laboratory staff will review required tests, provide pricing, and guide you on fasting or sample preparation.'
  },
  {
    q:'Which diagnostic tests require fasting?',
    a:'Tests such as Fasting Blood Sugar, Lipid Profile, and metabolic panels typically require 8 to 12 hours of overnight fasting (water is allowed). Routine tests like Complete Blood Count (CBC), ESR, and HbA1c do not require fasting. Message us on WhatsApp to confirm instructions.'
  }
];

export const aboutData={
  heritage:{
    established:'1964',
    legalName:'The Medical Laboratories (Pvt.) Ltd.',
    origin:'34 Lawrence Road, Lahore',
    summary:'Founded in 1964 in Lahore from a modest two-room clinic on Lawrence Road, Zeenat Laboratories grew into one of Pakistan’s earliest and most trusted private diagnostic institutions.'
  },
  founder:{
    name:'Dr. Zeenat Hussain',
    role:'Founder & Pioneering Pathologist',
    badge:'Founder · Est. 1964',
    initials:'ZH',
    image:'/images/zeenat.jfif',
    imageAlt:'Portrait of Dr. Zeenat Hussain, Founder of Zeenat Laboratories',
    bio:'Recognized as Punjab’s first qualified female doctor (1963) and the region’s first pathologist, Dr. Zeenat Hussain laid the foundation of private clinical diagnostics in Lahore with an unwavering commitment to accuracy and patient dignity.',
    highlights:[
      'Established Zeenat Laboratories (The Medical Laboratories) in 1964',
      'Pioneered private pathology and diagnostic standards in Lahore',
      'Over six decades of trusted medical testing heritage'
    ]
  },
  centerHead:{
    name:'Muhammad Zain',
    role:'Center Head · Wahdat Road Branch',
    experience:'2 Years of Experience',
    initials:'MZ',
    image:'/images/zain.jfif',
    imageAlt:'Portrait of Muhammad Zain, Center Head at Zeenat Laboratories Wahdat Road',
    bio:'Leading daily operations and patient care at our Wahdat Road (Multan Chungi) diagnostic center, Muhammad Zain brings 2 years of hands-on experience in clinical lab coordination, sterile sample workflows, and patient service.',
    highlights:[
      'Oversees walk-in reception & morning fasting schedules (from 7:30 AM)',
      'Ensures strict sterile sampling & cold-chain specimen handling',
      'Coordinates rapid WhatsApp PDF report delivery & patient guidance'
    ]
  },
  pillars:[
    {
      title:'Precision & Hygiene',
      desc:'Single-use sterile vacuum tubes, barcoded sample tracking, and strict quality checks for dependable results.'
    },
    {
      title:'Open 7 Days a Week',
      desc:'Serving Wahdat Road and Multan Chungi daily from 7:30 AM to 12:00 midnight, with walk-ins always welcome.'
    },
    {
      title:'Doorstep Home Sampling',
      desc:'Trained phlebotomists collect blood and routine samples comfortably from your home across nearby Lahore blocks.'
    },
    {
      title:'Direct WhatsApp Reports',
      desc:'Receive verified high-resolution PDF test reports straight on WhatsApp, or collect printed copies at reception.'
    }
  ]
};

export const money=n=>'Rs. '+n.toLocaleString('en-PK');
