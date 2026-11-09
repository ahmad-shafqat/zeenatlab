// Transcribed from the owner-supplied two-page rate list. Keep distinct assays separate.
const sections = [
  ['Routine Chemistry', `Blood Sugar Fasting/R|Glucose Vial|300
Uric Acid|Serum|600
Cholesterol|Serum|600
LFT’s|Serum|1800
ALT (SGPT)|Serum|600
AST (SGOT)|Serum|600
RFT’s|Serum|1200
S/Electrolyte|Serum|1200
Chloride|Serum|600
Amylase|Serum|1100
Lipase|Serum|1100
Calcium|Serum|600
Magnesium|Serum|700
Phosphate|Serum|600
AMA|Serum|2500
Anti ds DNA|Serum|3000
Lipid Profile|Serum|2000`],
  ['Hormones Analysis', `T3|Serum|1200
T4|Serum|1200
TSH|Serum|1400
Free T3|Serum|1700
Free T4|Serum|1700
IPTH|Serum|3000
Growth Hormone|Serum|2500
Prolactin|Serum|1800
Beta HCG|Serum|2000
FSH|Serum|1800
LH|Serum|1800
Testosterone|Serum|2500
Progesterone|Serum|2500
Folic Acid|Serum|2000
Insulin (Fasting)|Serum|2500
AMH|Serum|5500
Hydroxy Vitamin D|Serum|3000
Vitamin B12|Serum|2000`],
  ['PCR Tests', `HBV DNA (Qualitative)|EDTA|6000
HBV DNA (Quantitative)|EDTA|8000
COVID-19 PCR|Naso/Oropharyngeal Swab|4500
MTB DNA (PCR)|Sputum|6000
HCV RNA (Qualitative)|EDTA|6000
HCV RNA (Quantitative)|EDTA|8000
HIV (Quantitative)|6CC EDTA|12000
QuantiFERON TB-GOLD|6CC Lithium Heparin|11000`],
  ['Iron Profile', `Iron|Serum|900
Ferritin|Serum|1800
TIBC|Serum|1000
Transferrin|Serum|2000`],
  ['Histopathology', `Biopsy Small|Biopsy|3500
Biopsy Medium|Biopsy|4500
Biopsy Large|Biopsy|6000
FNAC|FNAC|5000`],
  ['Glucose', `BSR|Glucose Vial|300
BSF|Glucose Vial|300
OGGT|Glucose Vial|1500
HbA1c|EDTA|2000
GCT|Glucose Vial|1500`],
  ['Hematology', `CBC|EDTA|600
ESR|EDTA|400
Hb-Electrophoresis|EDTA|2200
Malarial Parasite (ICT)|EDTA|1000
CBC for Dengue|EDTA|100
Dengue NS1|Serum|1500
Blood Group|EDTA|400
CBC with Peripheral smear|EDTA|1100
Coomb’s Test (Direct)|EDTA|1200`],
  ['Coagulation Profile', `PT with INR|Sodium Citrate|1000
APTT|Sodium Citrate|500
FibrinoGen Level|Codium Citrate|2000`],
  ['Cardiac Profile', `Trop-I|EDTA|2500
CPK|Serum|900
Gamma-GT|Serum|600
LDL (Low Density Lipoprotein)|Serum|800
Triglycerides|Serum|600
Cardiac Enzymes|Serum|2500`],
  ['Tumor Markers', `PSA|Serum|3500
AFP|Serum|3500
CA-125|Serum|4000
CA 19-9|Serum|4500`],
  ['Microbiology, Stool & Urine', `Blood Culture/S|B/C Vial|2200
Urine C/E|Urine|500
Urine Culture/S|Urine|2200
Sputum for AFB ZN|Sputum|1000
Semen Analysis|Semen|2500
Stool R/E|Stool|500
Sputum for Culture/S|Sputum|2200
Pus for Culture/S|Pus|2200
Swab for Culture/S|Swab|2200
Stool for Culture/S|Stool|2200
Stool for H-Pylori|Stool|3500
Stool for Occult Blood|Stool|600
Urine for 24hrs Protein|24hrs Urine|700
Urine for Pregnancy|Urine|500
Stone Analysis|Stone|2000`],
  ['Serology / Immunology', `R.A Factor QNT|Serum|1400
Anti H. Pylori|Serum|2000
C-Reactive Protein (CRP)|Serum|1700
ASO Titre|Serum|1500
C-Peptide|Serum|2500
TORCH Profile|Serum|7000
ENA-Profile|Serum|7000
Anti CCP antibodies|Serum|2800
ANA (Anti-Nuclear Antibodies)|Serum|2000
HBsAg (ELISA)|Serum|1800
Anti HCV (ELISA)|Serum|1800
Anti-HIV (ELISA)|Serum|2000
H. pylori IgG & IGM|Serum|4000
VDRL / Syphilis|Serum|1500
Allergy Profile|Serum|8000
H. pylori IgA|Serum|2000
Mycodot Test (IgG & IgM)|Serum|3000
Anti HAV IgG & IgM (ELISA)|Serum|5000
Anti HDV (ELISA)|Serum|2500
Anti HEV IgG & IgM (ELISA)|Serum|5000
Hbs Ag (Screening)|Serum|1050
HCV (Screening)|Serum|1050
HIV (Screening)|Serum|1050
Anti TTG IgG & IgA|Serum|4400
IgE (Allergy)|Serum|1500`],
];

const aliases = {
  CBC: 'Complete Blood Count', TSH: 'Thyroid Stimulating Hormone',
  'LFT’s': 'Liver Function Tests LFT', 'RFT’s': 'Renal Kidney Function Tests RFT',
  BSF: 'Fasting Blood Sugar Glucose', BSR: 'Random Blood Sugar Glucose',
  HbA1c: 'Glycated Hemoglobin Diabetes', 'Urine C/E': 'Urine Complete Examination',
};

export const tests = sections.flatMap(([category, rows]) => rows.split('\n').map((row) => {
  const [name, specimen, price] = row.split('|');
  return {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), name, category,
    price: Number(price), specimen, aliases: aliases[name] || '',
    description: `Specimen: ${specimen}. Ask the laboratory about preparation and collection.`,
  };
}));
