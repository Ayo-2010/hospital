import { PORTRAITS } from './media'

/**
 * Shared directory entries for the nursing and surgical teams.
 *
 * Both the listing page and the profile page read from here so a person is
 * described once, in one place, and a link from the listing always resolves to
 * a real profile (the profile pages return 404 for unknown slugs).
 */
export interface TeamMember {
  id: string
  slug: string
  name: string
  title: string
  specialty: string
  image: string
  experience: string
  bio: string
}

export const NURSES: TeamMember[] = [
  {
    id: '1',
    slug: 'chiamaka-obi',
    name: 'Chiamaka Obi',
    title: 'Chief Nursing Officer',
    specialty: 'Nursing Administration',
    image: PORTRAITS.women[6]!,
    experience: '20+ years',
    bio: 'Advocate for nursing excellence and patient-centred care. Leads our nursing development programme with two decades of clinical and administrative experience.',
  },
  {
    id: '2',
    slug: 'yetunde-alabi',
    name: 'Yetunde Alabi',
    title: 'RN, Critical Care',
    specialty: 'Critical Care',
    image: PORTRAITS.women[7]!,
    experience: '12 years',
    bio: 'Critical care nurse specialising in intensive care management and post-operative recovery.',
  },
  {
    id: '3',
    slug: 'ibrahim-musa',
    name: 'Ibrahim Musa',
    title: 'RN, Accident & Emergency',
    specialty: 'Emergency Nursing',
    image: PORTRAITS.men[6]!,
    experience: '9 years',
    bio: 'Emergency department nurse with expertise in trauma care, rapid response and triage.',
  },
  {
    id: '4',
    slug: 'blessing-etim',
    name: 'Blessing Etim',
    title: 'RN, Labour Ward',
    specialty: 'Labour & Delivery',
    image: PORTRAITS.women[8]!,
    experience: '8 years',
    bio: 'Labour ward nurse supporting mothers and newborns through birth and postnatal care.',
  },
  {
    id: '5',
    slug: 'olumide-adebayo',
    name: 'Olumide Adebayo',
    title: 'RN, Theatre',
    specialty: 'Perioperative Nursing',
    image: PORTRAITS.men[7]!,
    experience: '14 years',
    bio: 'Perioperative nurse assisting in surgical procedures across general, orthopaedic and cardiac surgery.',
  },
  {
    id: '6',
    slug: 'hauwa-ibrahim',
    name: 'Hauwa Ibrahim',
    title: 'RN, Paediatrics',
    specialty: 'Paediatric Nursing',
    image: PORTRAITS.women[9]!,
    experience: '11 years',
    bio: 'Paediatric nurse dedicated to child health, family-centred care and adolescent medicine.',
  },
]

export const SURGEONS: TeamMember[] = [
  {
    id: '1',
    slug: 'chidi-okonkwo',
    name: 'Dr. Chidi Okonkwo',
    title: 'Chief of Surgery',
    specialty: 'General Surgery',
    image: PORTRAITS.men[8]!,
    experience: '22 years',
    bio: 'Pioneer in minimally invasive surgical techniques. Has published over 100 peer-reviewed articles and leads our registrar training programme.',
  },
  {
    id: '2',
    slug: 'babatunde-salami',
    name: 'Dr. Babatunde Salami',
    title: 'Cardiothoracic Surgeon',
    specialty: 'Cardiothoracic Surgery',
    image: PORTRAITS.men[9]!,
    experience: '18 years',
    bio: 'Specialist in heart and lung surgery with expertise in complex cardiovascular procedures and transplant surgery.',
  },
  {
    id: '3',
    slug: 'aisha-mohammed',
    name: 'Dr. Aisha Mohammed',
    title: 'Orthopaedic Surgeon',
    specialty: 'Orthopaedic Surgery',
    image: PORTRAITS.women[10]!,
    experience: '15 years',
    bio: 'Joint replacement and sports medicine specialist performing over 200 joint replacements each year with excellent outcomes.',
  },
  {
    id: '4',
    slug: 'ifeanyi-okeke',
    name: 'Dr. Ifeanyi Okeke',
    title: 'Neurosurgeon',
    specialty: 'Neurosurgery',
    image: PORTRAITS.men[10]!,
    experience: '14 years',
    bio: 'Brain and spine surgery specialist with expertise in minimally invasive neurosurgical techniques and tumour removal.',
  },
  {
    id: '5',
    slug: 'kemi-ajayi',
    name: 'Dr. Kemi Ajayi',
    title: 'Plastic Surgeon',
    specialty: 'Plastic & Reconstructive Surgery',
    image: PORTRAITS.women[11]!,
    experience: '11 years',
    bio: 'Reconstructive and aesthetic surgeon specialising in post-cancer reconstruction, burn care and cosmetic procedures.',
  },
  {
    id: '6',
    slug: 'yakubu-danladi',
    name: 'Dr. Yakubu Danladi',
    title: 'Vascular Surgeon',
    specialty: 'Vascular Surgery',
    image: PORTRAITS.men[11]!,
    experience: '16 years',
    bio: 'Vascular and endovascular surgeon treating arterial disease, aneurysms and circulation disorders.',
  },
]

export function findNurse(slug: string): TeamMember | undefined {
  return NURSES.find(member => member.slug === slug)
}

export function findSurgeon(slug: string): TeamMember | undefined {
  return SURGEONS.find(member => member.slug === slug)
}
