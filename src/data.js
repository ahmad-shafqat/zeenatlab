export const tests=[
{id:'cbc',name:'Complete Blood Count (CBC)',category:'Blood Tests',price:850,description:'Overview of red cells, white cells and platelets.'},
{id:'lipid',name:'Lipid Profile',category:'Health Screening',price:1850,description:'Cholesterol and triglyceride measurements.'},
{id:'lft',name:'Liver Function Tests (LFT)',category:'Organ Function',price:2100,description:'Common markers used to assess liver health.'},
{id:'rft',name:'Renal Function Tests (RFT)',category:'Organ Function',price:1750,description:'Common markers used to assess kidney function.'},
{id:'tsh',name:'Thyroid Stimulating Hormone (TSH)',category:'Hormones',price:1550,description:'Thyroid function screening test.'},
{id:'hba1c',name:'HbA1c',category:'Diabetes',price:1950,description:'Average blood glucose indicator over recent months.'},
{id:'glucose',name:'Fasting Blood Sugar',category:'Diabetes',price:450,description:'Blood glucose test after fasting.'},
{id:'urine',name:'Urine Complete Examination',category:'Urine Tests',price:650,description:'Routine urine screening.'},
{id:'vitd',name:'Vitamin D (25-OH)',category:'Vitamins',price:3400,description:'Vitamin D level assessment.'},
{id:'uric',name:'Serum Uric Acid',category:'Organ Function',price:750,description:'Measures uric acid in the blood.'},
{id:'hb',name:'Hemoglobin (Hb)',category:'Blood Tests',price:400,description:'Measures hemoglobin concentration.'},
{id:'crp',name:'C-Reactive Protein (CRP)',category:'Health Screening',price:1550,description:'Marker of inflammation.'}
];
export const packages=[
{id:'basic',name:'Essential Health Check',subtitle:'A practical starting point for routine screening',price:3900,featured:false,tests:['Complete Blood Count (CBC)','Fasting Blood Sugar','Urine Complete Examination','Serum Uric Acid'],icon:'heart'},
{id:'wellness',name:'Complete Wellness',subtitle:'A broader picture of your everyday health',price:8900,featured:true,tests:['Complete Blood Count (CBC)','Lipid Profile','Liver Function Tests','Renal Function Tests','Fasting Blood Sugar','Urine Complete Examination'],icon:'activity'},
{id:'diabetes',name:'Diabetes Care',subtitle:'Key checks for blood sugar monitoring',price:4400,featured:false,tests:['Fasting Blood Sugar','HbA1c','Renal Function Tests','Urine Complete Examination'],icon:'droplets'}
];
export const gallery=[
{title:'Laboratory facilities',desc:'Illustrative photograph — replace with actual branch image',image:'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1100&q=85'},
{title:'Sample collection',desc:'Illustrative photograph — replace with actual branch image',image:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85'},
{title:'Diagnostic equipment',desc:'Illustrative photograph — replace with actual branch image',image:'https://images.unsplash.com/photo-1581093458791-9d42e3c5f0f3?auto=format&fit=crop&w=1100&q=85'},
{title:'Patient care',desc:'Illustrative photograph — replace with actual branch image',image:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1100&q=85'}
];
export const contact={
  name:'Zeenat Laboratory & Diagnostic Center',
  branch:'Wahdat Road Branch',
  phone:import.meta.env.VITE_LAB_PHONE||'0327 0288889',
  phoneRaw:'03270288889',
  whatsapp:import.meta.env.VITE_LAB_WHATSAPP||'03270288889',
  whatsappUrl:'https://wa.me/923270288889?text='+encodeURIComponent('Hello Zeenat Lab, I would like to inquire about tests and appointments.'),
  address:import.meta.env.VITE_LAB_ADDRESS||'Zeenat Laboratory & Diagnostic Center, Wahdat Rd, near Ijaz Hospital, Multan Chungi, Lahore, 54000, Pakistan',
  shortAddress:'Wahdat Rd, near Ijaz Hospital, Multan Chungi, Lahore',
  map:import.meta.env.VITE_MAP_EMBED_URL||'https://maps.google.com/maps?q=31.4967441,74.2672532&z=17&output=embed',
  mapUrl:import.meta.env.VITE_MAP_LINK||'https://maps.app.goo.gl/kR4rtCjPh5WbiDi67'
};
export const timings={
  days:'Monday – Sunday (7 Days a week)',
  hours:'8:00 AM – 10:00 PM',
  fastingNote:'Morning fasting sample collection starts at 8:00 AM daily.',
  walkIn:'Walk-ins welcome anytime during open hours.'
};
export const homeSampling={
  title:'Home Sample Collection in Lahore',
  subtitle:'Get your blood and diagnostic samples collected safely in the comfort of your home by certified phlebotomists.',
  areas:[
    'Wahdat Road & Wahdat Colony',
    'Multan Chungi & Bund Road',
    'Allama Iqbal Town (All Blocks)',
    'Muslim Town & Garden Town',
    'Mustafa Town & Mansoora',
    'Najaf Colony & University Area'
  ],
  features:[
    'Sterile, single-use vacuum collection tubes',
    'Strict cold-chain specimen handling',
    'Certified and gentle phlebotomists',
    'PDF reports delivered directly on WhatsApp',
    'Same-day results for common blood tests'
  ]
};
export const faqs=[
  {
    q:'Where is Zeenat Lab Wahdat Road located?',
    a:'We are located on Wahdat Road, near Ijaz Hospital, Multan Chungi, Lahore, 54000, Pakistan. Our location is easily accessible with convenient parking.'
  },
  {
    q:'Do you offer Home Sample Collection in Lahore?',
    a:'Yes! We provide doorstep sample collection across Wahdat Road, Multan Chungi, Allama Iqbal Town, Muslim Town, Mustafa Town, and surrounding localities. You can book home sampling with a quick WhatsApp message to 0327 0288889.'
  },
  {
    q:'How will I receive my test reports?',
    a:'Your verified laboratory reports are sent directly to your WhatsApp as high-resolution PDF documents as soon as results are ready. Hard copies are also available for collection at the branch.'
  },
  {
    q:'What are your daily laboratory timings?',
    a:'Our Wahdat Road diagnostic center is open Monday through Sunday (7 days a week) from 8:00 AM to 10:00 PM. Morning fasting blood tests begin at 8:00 AM.'
  },
  {
    q:'Can I send a picture of my doctor’s prescription on WhatsApp?',
    a:'Yes! Simply take a clear photo of your doctor’s prescription or slip and send it to our WhatsApp at 0327 0288889. Our team will read the required tests, provide pricing, and guide you on any necessary preparation.'
  },
  {
    q:'Which diagnostic tests require fasting?',
    a:'Tests such as Fasting Blood Sugar, Lipid Profile, and certain metabolic panels typically require 8 to 12 hours of overnight fasting (water is allowed). Routine tests like CBC, ESR, and HbA1c do not require fasting. You can always message us on WhatsApp to confirm instructions.'
  }
];
export const money=n=>'Rs. '+n.toLocaleString('en-PK');
