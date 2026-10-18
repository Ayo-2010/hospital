export const PHARMACY_NAV = [
  { label: 'Dashboard', to: '/dashboard/pharmacy', icon: 'i-lucide-layout-dashboard' },
  { label: 'Prescriptions', to: '/pharmacy/prescriptions', icon: 'i-lucide-file-text' },
  { label: 'Dispensing', to: '/pharmacy/dispensing', icon: 'i-lucide-pill' },
  { label: 'Inventory', to: '/pharmacy/inventory', icon: 'i-lucide-package' },
  { label: 'Suppliers', to: '/pharmacy/suppliers', icon: 'i-lucide-truck' },
  { label: 'Reports', to: '/pharmacy/reports', icon: 'i-lucide-bar-chart-3' },
  { label: 'Settings', to: '/pharmacy/settings', icon: 'i-lucide-settings' },
]

export const LABORATORY_NAV = [
  { label: 'Dashboard', to: '/dashboard/laboratory', icon: 'i-lucide-flask-conical' },
  { label: 'Orders', to: '/laboratory/orders', icon: 'i-lucide-clipboard-list' },
  { label: 'Samples', to: '/laboratory/samples', icon: 'i-lucide-test-tube' },
  { label: 'Results', to: '/laboratory/results', icon: 'i-lucide-file-check' },
  { label: 'Tests', to: '/laboratory/tests', icon: 'i-lucide-beaker' },
  { label: 'Reports', to: '/laboratory/reports', icon: 'i-lucide-bar-chart-3' },
  { label: 'Settings', to: '/laboratory/settings', icon: 'i-lucide-settings' },
]

export const RADIOLOGY_NAV = [
  { label: 'Dashboard', to: '/dashboard/radiology', icon: 'i-lucide-layout-dashboard' },
  { label: 'Orders', to: '/radiology/orders', icon: 'i-lucide-clipboard-list' },
  { label: 'Schedule', to: '/radiology/schedule', icon: 'i-lucide-calendar' },
  { label: 'Reports', to: '/radiology/reports', icon: 'i-lucide-file-text' },
  { label: 'Equipment', to: '/radiology/equipment', icon: 'i-lucide-monitor' },
  { label: 'Settings', to: '/radiology/settings', icon: 'i-lucide-settings' },
]

export const NURSE_NAV = [
  { label: 'Dashboard', to: '/nurse', icon: 'i-lucide-heart-pulse' },
  { label: 'My Patients', to: '/nurse/patients', icon: 'i-lucide-users' },
  { label: 'Wards', to: '/nurse/wards', icon: 'i-lucide-bed' },
  { label: 'Vital Signs', to: '/nurse/vitals', icon: 'i-lucide-activity' },
  { label: 'Nursing Notes', to: '/nurse/notes', icon: 'i-lucide-file-text' },
  { label: 'Medicines', to: '/nurse/medications', icon: 'i-lucide-pill' },
  { label: 'Tasks', to: '/nurse/tasks', icon: 'i-lucide-square-check' },
  { label: 'Admissions', to: '/nurse/admissions', icon: 'i-lucide-log-in' },
  { label: 'Discharges', to: '/nurse/discharges', icon: 'i-lucide-log-out' },
  { label: 'Notifications', to: '/nurse/notifications', icon: 'i-lucide-bell' },
]

export const BILLING_NAV = [
  { label: 'Dashboard', to: '/billing', icon: 'i-lucide-layout-dashboard' },
  { label: 'Invoices', to: '/billing/invoices', icon: 'i-lucide-file-text' },
  { label: 'Payments', to: '/billing/payments', icon: 'i-lucide-credit-card' },
  { label: 'Refunds', to: '/billing/refunds', icon: 'i-lucide-rotate-ccw' },
  { label: 'Insurance', to: '/billing/insurance', icon: 'i-lucide-shield' },
  { label: 'Claims', to: '/billing/claims', icon: 'i-lucide-file-check' },
  { label: 'Reports', to: '/billing/reports', icon: 'i-lucide-bar-chart-3' },
  { label: 'Settings', to: '/billing/settings', icon: 'i-lucide-settings' },
]

export const RECEPTION_NAV = [
  { label: 'Dashboard', to: '/reception', icon: 'i-lucide-layout-dashboard' },
  { label: 'Appointments', to: '/reception/appointments', icon: 'i-lucide-calendar' },
  { label: 'Patients', to: '/reception/patients', icon: 'i-lucide-users' },
  { label: 'Check-in', to: '/reception/check-in', icon: 'i-lucide-log-in' },
  { label: 'Check-out', to: '/reception/check-out', icon: 'i-lucide-log-out' },
  { label: 'Admissions', to: '/reception/admissions', icon: 'i-lucide-bed' },
  { label: 'Discharges', to: '/reception/discharges', icon: 'i-lucide-file-check' },
  { label: 'Waiting Room', to: '/reception/waiting-room', icon: 'i-lucide-clock' },
]

export const ADMIN_NAV = [
  { label: 'Dashboard', to: '/admin', icon: 'i-lucide-layout-dashboard' },
  { label: 'Users', to: '/admin/users', icon: 'i-lucide-users' },
  { label: 'Roles', to: '/admin/roles', icon: 'i-lucide-shield' },
  { label: 'Permissions', to: '/admin/permissions', icon: 'i-lucide-lock' },
  { label: 'Staff', to: '/admin/staff', icon: 'i-lucide-user-cog' },
  { label: 'Departments', to: '/admin/departments', icon: 'i-lucide-building' },
  { label: 'Audit Logs', to: '/admin/audit-logs', icon: 'i-lucide-file-search' },
  { label: 'Documents', to: '/admin/documents', icon: 'i-lucide-folder' },
  { label: 'Notifications', to: '/admin/notifications', icon: 'i-lucide-bell' },
  { label: 'Reports', to: '/admin/reports', icon: 'i-lucide-bar-chart-3' },
  { label: 'Settings', to: '/admin/settings', icon: 'i-lucide-settings' },
]

export const MANAGEMENT_NAV = [
  { label: 'Overview', to: '/management', icon: 'i-lucide-layout-dashboard' },
  { label: 'Departments', to: '/management/departments', icon: 'i-lucide-building' },
  { label: 'Staff', to: '/management/staff', icon: 'i-lucide-users' },
  { label: 'Finance', to: '/management/finance', icon: 'i-lucide-dollar-sign' },
  { label: 'Patients', to: '/management/patients', icon: 'i-lucide-user' },
  { label: 'Operations', to: '/management/operations', icon: 'i-lucide-activity' },
  { label: 'Surgery', to: '/management/surgery', icon: 'i-lucide-scissors' },
  { label: 'Analytics', to: '/management/analytics', icon: 'i-lucide-bar-chart-3' },
  { label: 'Reports', to: '/management/reports', icon: 'i-lucide-file-text' },
]

export const SURGERY_NAV = [
  { label: 'Dashboard', to: '/dashboard/surgery', icon: 'i-lucide-layout-dashboard' },
  { label: 'Surgery Schedule', to: '/surgery/schedule', icon: 'i-lucide-calendar' },
  { label: 'Patients', to: '/surgery/patients', icon: 'i-lucide-users' },
  { label: 'Operating Theatres', to: '/surgery/operating-rooms', icon: 'i-lucide-door-open' },
  { label: 'Surgical Cases', to: '/surgery/cases', icon: 'i-lucide-clipboard-list' },
  { label: 'Pre-Op', to: '/surgery/pre-op', icon: 'i-lucide-file-check' },
  { label: 'Intra-Op', to: '/surgery/intra-op', icon: 'i-lucide-activity' },
  { label: 'Post-Op', to: '/surgery/post-op', icon: 'i-lucide-file-text' },
  { label: 'Surgeons', to: '/surgery/surgeons', icon: 'i-lucide-user' },
  { label: 'Anaesthesia', to: '/surgery/anesthesia', icon: 'i-lucide-wind' },
  { label: 'Reports', to: '/surgery/reports', icon: 'i-lucide-bar-chart-3' },
  { label: 'Equipment', to: '/surgery/equipment', icon: 'i-lucide-monitor' },
  { label: 'Inventory', to: '/surgery/inventory', icon: 'i-lucide-package' },
  { label: 'Analytics', to: '/surgery/analytics', icon: 'i-lucide-trending-up' },
]

export const HEAD_OF_SURGERY_NAV = [
  { label: 'Dashboard', to: '/head-of-surgery', icon: 'i-lucide-layout-dashboard' },
  { label: 'Surgical Cases', to: '/head-of-surgery/cases', icon: 'i-lucide-clipboard-list' },
  { label: 'Approvals', to: '/head-of-surgery/approvals', icon: 'i-lucide-circle-check' },
  { label: 'Schedule', to: '/head-of-surgery/schedule', icon: 'i-lucide-calendar' },
  { label: 'Operating Theatres', to: '/head-of-surgery/operating-rooms', icon: 'i-lucide-door-open' },
  { label: 'Surgeons', to: '/head-of-surgery/surgeons', icon: 'i-lucide-users' },
  { label: 'Anaesthesia', to: '/head-of-surgery/anesthesia', icon: 'i-lucide-wind' },
  { label: 'Outcomes', to: '/head-of-surgery/outcomes', icon: 'i-lucide-trending-up' },
  { label: 'Reports', to: '/head-of-surgery/reports', icon: 'i-lucide-bar-chart-3' },
  { label: 'Analytics', to: '/head-of-surgery/analytics', icon: 'i-lucide-pie-chart' },
  { label: 'Settings', to: '/head-of-surgery/settings', icon: 'i-lucide-settings' },
]

export const DOCTOR_NAV = [
  { label: 'Dashboard', to: '/doctor', icon: 'i-lucide-layout-dashboard' },
  { label: 'My Patients', to: '/doctor/patients', icon: 'i-lucide-users' },
  { label: 'Appointments', to: '/doctor/appointments', icon: 'i-lucide-calendar' },
  { label: 'Consultations', to: '/doctor/consultations', icon: 'i-lucide-stethoscope' },
  { label: 'Medical Records', to: '/doctor/medical-records', icon: 'i-lucide-file-text' },
  { label: 'Prescriptions', to: '/doctor/prescriptions', icon: 'i-lucide-pill' },
  { label: 'Laboratory', to: '/doctor/laboratory', icon: 'i-lucide-flask-conical' },
  { label: 'Radiology', to: '/doctor/radiology', icon: 'i-lucide-scan' },
  { label: 'Procedures', to: '/doctor/procedures', icon: 'i-lucide-scissors' },
  { label: 'Referrals', to: '/doctor/referrals', icon: 'i-lucide-share-2' },
  { label: 'Messages', to: '/doctor/messages', icon: 'i-lucide-message-square' },
  { label: 'Schedule', to: '/doctor/schedule', icon: 'i-lucide-calendar-clock' },
  { label: 'Reports', to: '/doctor/reports', icon: 'i-lucide-bar-chart-3' },
  { label: 'Profile', to: '/doctor/profile', icon: 'i-lucide-user' },
  { label: 'Settings', to: '/doctor/settings', icon: 'i-lucide-settings' },
]

export const PATIENT_NAV = [
  { label: 'Dashboard', to: '/patient', icon: 'i-lucide-layout-dashboard' },
  { label: 'My Profile', to: '/patient/profile', icon: 'i-lucide-user' },
  { label: 'Appointments', to: '/patient/appointments', icon: 'i-lucide-calendar' },
  { label: 'Medical Records', to: '/patient/medical-records', icon: 'i-lucide-file-text' },
  { label: 'Prescriptions', to: '/patient/prescriptions', icon: 'i-lucide-pill' },
  { label: 'Laboratory', to: '/patient/laboratory', icon: 'i-lucide-flask-conical' },
  { label: 'Radiology', to: '/patient/radiology', icon: 'i-lucide-scan' },
  { label: 'Documents', to: '/patient/documents', icon: 'i-lucide-folder' },
  { label: 'Bills', to: '/patient/bills', icon: 'i-lucide-credit-card' },
  { label: 'Messages', to: '/patient/messages', icon: 'i-lucide-message-square' },
  { label: 'Notifications', to: '/patient/notifications', icon: 'i-lucide-bell' },
  { label: 'Insurance', to: '/patient/insurance', icon: 'i-lucide-shield' },
  { label: 'Settings', to: '/patient/settings', icon: 'i-lucide-settings' },
]

export const SURGEON_NAV = [
  { label: 'Dashboard', to: '/surgeon', icon: 'i-lucide-layout-dashboard' },
  { label: 'My Patients', to: '/surgeon/patients', icon: 'i-lucide-users' },
  { label: 'Surgical Cases', to: '/surgeon/cases', icon: 'i-lucide-clipboard-list' },
  { label: 'Schedule', to: '/surgeon/schedule', icon: 'i-lucide-calendar' },
  { label: 'Operating Theatres', to: '/surgeon/operating-rooms', icon: 'i-lucide-door-open' },
  { label: 'Reports', to: '/surgeon/reports', icon: 'i-lucide-bar-chart-3' },
  { label: 'Profile', to: '/surgeon/profile', icon: 'i-lucide-user' },
]

export function getNavForRole(role: string) {
  const map: Record<string, any> = {
    PATIENT: PATIENT_NAV,
    DOCTOR: DOCTOR_NAV,
    SURGEON: SURGEON_NAV,
    HEAD_OF_SURGERY: HEAD_OF_SURGERY_NAV,
    NURSE: NURSE_NAV,
    LAB_TECHNICIAN: LABORATORY_NAV,
    RADIOLOGIST: RADIOLOGY_NAV,
    PHARMACIST: PHARMACY_NAV,
    RECEPTIONIST: RECEPTION_NAV,
    ACCOUNTANT: BILLING_NAV,
    HOSPITAL_ADMIN: ADMIN_NAV,
    MANAGEMENT: MANAGEMENT_NAV,
    SURGERY: SURGERY_NAV,
    SUPER_ADMIN: ADMIN_NAV,
  }

  return map[role] || []
}

/**
 * The first path segment of a workspace route mapped to the role that owns it.
 *
 * The sidebar previously derived the role straight from the URL, which broke
 * for workspaces whose name is not the role name (for example
 * `/head-of-surgery` -> HEAD_OF_SURGERY) and for the staff dashboards that live
 * under `/dashboard/*` so they do not collide with the public information
 * pages of the same name.
 */
export const ROLE_BY_SEGMENT: Record<string, string> = {
  patient: 'PATIENT',
  doctor: 'DOCTOR',
  nurse: 'NURSE',
  surgeon: 'SURGEON',
  'head-of-surgery': 'HEAD_OF_SURGERY',
  reception: 'RECEPTIONIST',
  billing: 'ACCOUNTANT',
  admin: 'HOSPITAL_ADMIN',
  management: 'MANAGEMENT',
  laboratory: 'LAB_TECHNICIAN',
  radiology: 'RADIOLOGIST',
  pharmacy: 'PHARMACIST',
  surgery: 'SURGERY',
}

/** Human-readable name for each staff workspace, used in breadcrumbs. */
export const WORKSPACE_LABELS: Record<string, string> = {
  patient: 'Patient portal',
  doctor: 'Doctor workspace',
  nurse: 'Nursing workspace',
  surgeon: 'Surgeon workspace',
  'head-of-surgery': 'Head of surgery workspace',
  reception: 'Reception',
  billing: 'Billing',
  admin: 'Administration',
  management: 'Management',
  laboratory: 'Laboratory',
  radiology: 'Radiology',
  pharmacy: 'Pharmacy',
  surgery: 'Surgery',
}

/** Resolve the workspace key from a route path, e.g. `/lab/orders` -> `laboratory`. */
export function workspaceKeyFromPath(path: string) {
  const segments = path.split('/').filter(Boolean)
  if (segments[0] === 'dashboard' && segments[1]) return segments[1]
  return segments[0] ?? ''
}

/** Nav items for the workspace that owns a route path. */
export function getNavForPath(path: string) {
  const key = workspaceKeyFromPath(path)
  return getNavForRole(ROLE_BY_SEGMENT[key] ?? '')
}

/** Every nav item across every workspace, keyed by its route path. */
export function findNavItem(path: string) {
  const all = [
    ...PHARMACY_NAV,
    ...LABORATORY_NAV,
    ...RADIOLOGY_NAV,
    ...NURSE_NAV,
    ...BILLING_NAV,
    ...RECEPTION_NAV,
    ...ADMIN_NAV,
    ...MANAGEMENT_NAV,
    ...SURGERY_NAV,
    ...HEAD_OF_SURGERY_NAV,
    ...DOCTOR_NAV,
    ...PATIENT_NAV,
    ...SURGEON_NAV,
  ]

  const normalised = path.length > 1 ? path.replace(/\/+$/, '') : path
  return all.find(item => item.to === normalised)
}
