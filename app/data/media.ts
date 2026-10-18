/**
 * Central image library for the public site.
 *
 * Every entry points at one specific photograph and is annotated with the
 * subject it actually shows, so a section can choose imagery by *meaning*
 * instead of pasting a URL. Keeping the URLs in a single module means a future
 * change of provider (or moving to self-hosted assets) is a one-file edit, and
 * it prevents the "right slot, wrong photo" drift the site previously had.
 */

/** Build a Pexels CDN URL for a photo id. */
function pexels(id: number, width = 1200, height?: number): string {
  const crop = height ? `&h=${height}&fit=crop` : ''
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}${crop}&q=80`
}

/** Square clinician headshot. */
export function portrait(id: number): string {
  return pexels(id, 480, 600)
}

export const MEDIA = {
  /** "EMERGENCY" sign mounted on a hospital building. */
  emergencyEntrance: pexels(263402),
  /** Paramedics moving a patient on a stretcher beside an ambulance. */
  paramedics: pexels(6754173),
  /** Surgical team working in an operating theatre. */
  operatingTheatre: pexels(3376790),
  /** Group of doctors and nurses standing together. */
  clinicalTeam: pexels(6129507),
  /** Two clinicians in scrubs reviewing a tablet together. */
  clinicalTeamAlt: pexels(6303645),
  /** Radiologist holding up a chest X-ray. */
  radiologist: pexels(4225880),
  /** Ultrasound scan displayed on a monitor. */
  ultrasoundScan: pexels(7088485),
  /** Clinicians reviewing images together on a screen. */
  scanReview: pexels(1170979),
  /** Clinician reviewing images on a lightboard. */
  clinicianAtScreen: pexels(6129042),
  /** Laboratory technician pipetting samples. */
  laboratory: pexels(3735747),
  /** Pharmacist at the counter in front of medicine shelves. */
  pharmacy: pexels(14797864),
  /** Clinician speaking with a patient across a desk. */
  consultation: pexels(5214997),
  /** Colleagues talking through care in a treatment room. */
  consultationRoom: pexels(7088531),
  /** Clinician checking on a patient in a hospital bed. */
  bedsideCare: pexels(6129438),
  /** Hospital room with an adjustable bed and bedside equipment. */
  inpatientWard: pexels(12081340),
  /** A patient's hand held by a member of staff. */
  compassionateCare: pexels(6129685),
  /** Blood pressure being measured on a patient's arm. */
  bloodPressure: pexels(7108344),
  /** Patient with ECG monitoring leads attached. */
  ecgMonitoring: pexels(7108345),
  /** Stethoscope held by a clinician. */
  stethoscope: pexels(4021775),
  /** Rehabilitation session using pulley equipment. */
  physiotherapy: pexels(6111613),
  /** Therapist treating a patient's back. */
  physiotherapyAlt: pexels(4506109),
  /** Facial skin treatment in progress. */
  dermatology: pexels(3985360),
  /** Eye examination with a trial frame. */
  ophthalmology: pexels(3846023),
  /** Dental treatment chair and equipment. */
  dentistry: pexels(305568),
  /** Nurse speaking with a mother and her young daughter. */
  paediatrics: pexels(7659570),
  /** Supportive conversation while notes are taken. */
  counselling: pexels(7176029),
  /** Staircase with hospital wayfinding signage. */
  wayfinding: pexels(4431986),
} as const

export type MediaKey = keyof typeof MEDIA

/**
 * Named clinician headshots. Ordered so the first entries are verified,
 * professionally styled portraits of clinicians (the ones used on the homepage,
 * the doctor directory and the featured profile pages), with the remaining
 * headshots behind them for the wider nursing and surgical directories.
 */
export const PORTRAITS = {
  women: [
    4173251, // clinician in a white coat, smiling
    5998474, // clinician with a stethoscope and glasses
    5452201, // clinician in a white coat and mask
    6098052, // clinician in scrubs holding a tablet
    5214949, // clinician putting on examination gloves
    1181686, 2381069, 1587009, 3763188, 733872, 1239291, 774909, 415829,
    1858175, 4226140, 3768115,
  ].map(portrait),
  men: [
    5722163, // clinician with a stethoscope
    4989136, // clinician in a white coat and glasses
    4270371, // clinician in scrubs
    5452293, // clinician reviewing notes on a tablet
    5452274, 5452268, 220453, 614810, 2379004, 1043471, 3778603, 1587014,
    1681010, 3785079, 532220,
  ].map(portrait),
} as const
