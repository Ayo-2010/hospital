<body>
    HOSPITAL MANAGEMENT SYSTEM<br /><br />Technical Full-Stack Build
    Specification<br /><br />Build a production-oriented Hospital Management
    System (HMS) as a full-stack web application.<br /><br />This is NOT a
    landing-page project and NOT a collection of static dashboard mockups.<br /><br />Build
    a complete application architecture with:<br /><br />- Public hospital
    website<br />- Authentication<br />- Role-based access control<br />-
    Patient portal<br />- Doctor portal<br />- Nurse portal<br />- Surgeon
    portal<br />- Head of Surgery portal<br />- Laboratory portal<br />-
    Radiology portal<br />- Pharmacy portal<br />- Reception portal<br />-
    Billing/finance portal<br />- Hospital administration portal<br />-
    Executive management portal<br />- Electronic medical records<br />-
    Appointment management<br />- Surgery management<br />- Admission/ward
    management<br />- Laboratory management<br />- Pharmacy/inventory
    management<br />- Billing and payments<br />- Notifications<br />- Internal
    messaging<br />- Documents<br />- Reporting<br />- Analytics<br />- Audit
    logging<br /><br />The application must have a clean separation between
    public and authenticated areas.<br /><br />---<br /><br />1. TECHNOLOGY
    STACK<br /><br />Use:<br /><br />Frontend<br /><br />- Nuxt 4<br />- Vue
    3<br />- TypeScript<br />- "&lt;script setup lang="ts"&gt;"<br />- Nuxt
    UI<br />- Tailwind CSS<br />- Nuxt Icon<br />- Nuxt Image where image
    optimization is required<br />- Vue composables<br />- Pinia only where
    global client state is actually required<br /><br />Do NOT introduce
    unnecessary state-management complexity.<br /><br />Backend<br /><br />Use
    Nuxt/Nitro server routes for the application API unless the project
    architecture specifically requires a separate backend.<br /><br />Recommended:<br /><br />Nuxt
    4<br />Vue 3<br />TypeScript<br />Nitro<br />REST API<br />PostgreSQL<br />ORM<br /><br />Use
    a type-safe ORM such as Prisma or Drizzle.<br /><br />Database<br /><br />PostgreSQL.<br /><br />Validation<br /><br />Use
    a strongly typed schema validation library such as Zod or ArkType.<br /><br />Every
    important API request must be validated server-side.<br /><br />Authentication<br /><br />Use
    secure cookie/session-based authentication.<br /><br />Do not store
    sensitive authentication tokens in insecure browser storage.<br /><br />---<br /><br />2.
    CORE ARCHITECTURE<br /><br />Use a feature-oriented architecture.<br /><br />app/<br />├──
    assets/<br />├── components/<br />│&nbsp;&nbsp; ├── common/<br />│&nbsp;&nbsp;
    ├── public/<br />│&nbsp;&nbsp; ├── dashboard/<br />│&nbsp;&nbsp; ├──
    patient/<br />│&nbsp;&nbsp; ├── doctor/<br />│&nbsp;&nbsp; ├── nurse/<br />│&nbsp;&nbsp;
    ├── surgery/<br />│&nbsp;&nbsp; ├── laboratory/<br />│&nbsp;&nbsp; ├──
    pharmacy/<br />│&nbsp;&nbsp; ├── radiology/<br />│&nbsp;&nbsp; ├──
    billing/<br />│&nbsp;&nbsp; ├── admission/<br />│&nbsp;&nbsp; └──
    administration/<br />│<br />├── composables/<br />├── layouts/<br />├──
    middleware/<br />├── pages/<br />├── types/<br />├── utils/<br />└──
    stores/<br /><br />server/<br />├── api/<br />├── middleware/<br />├──
    services/<br />├── repositories/<br />├── utils/<br />├── validators/<br />└──
    database/<br /><br />Do not put business logic directly inside Vue pages.<br /><br />Pages
    should primarily:<br /><br />1. Fetch/display data.<br />2. Call
    composables/services.<br />3. Handle user interaction.<br />4. Delegate
    complex operations to reusable components.<br /><br />---<br /><br />3.
    ROUTE STRUCTURE<br /><br />Create the following route hierarchy.<br /><br />PUBLIC
    ROUTES<br /><br />/<br />
    /about<br />
    /services<br />
    /departments<br />
    /departments/[slug]<br />
    /doctors<br />
    /doctors/[id]<br />
    /facilities<br />
    /surgery<br />
    /laboratory<br />
    /pharmacy<br />
    /health-information<br />
    /health-information/[slug]<br />
    /careers<br />
    /contact<br />
    /faq<br />
    /emergency<br />
    /privacy<br />
    /terms<br /><br />---<br /><br />4. PUBLIC APPOINTMENT ROUTES<br /><br />/appointments<br />/appointments/book<br />/appointments/confirmation/[id]<br /><br />Appointment
    booking should require authentication before final confirmation.<br /><br />---<br /><br />5.
    AUTH ROUTES<br /><br />/auth/login<br />/auth/register<br />/auth/verify<br />/auth/forgot-password<br />/auth/reset-password<br />/auth/2fa<br />/auth/logout<br /><br />---<br /><br />6.
    PATIENT ROUTES<br /><br />/patient<br />/patient/profile<br />/patient/appointments<br />/patient/appointments/[id]<br />/patient/appointments/book<br />/patient/medical-records<br />/patient/medical-records/[id]<br />/patient/prescriptions<br />/patient/prescriptions/[id]<br />/patient/laboratory<br />/patient/laboratory/[id]<br />/patient/radiology<br />/patient/radiology/[id]<br />/patient/documents<br />/patient/documents/[id]<br />/patient/bills<br />/patient/bills/[id]<br />/patient/payments<br />/patient/admissions<br />/patient/admissions/[id]<br />/patient/messages<br />/patient/notifications<br />/patient/insurance<br />/patient/settings<br /><br />---<br /><br />7.
    DOCTOR ROUTES<br /><br />/doctor<br />/doctor/patients<br />/doctor/patients/[id]<br />/doctor/appointments<br />/doctor/appointments/[id]<br />/doctor/consultations<br />/doctor/consultations/[id]<br />/doctor/consultations/new<br />/doctor/prescriptions<br />/doctor/prescriptions/[id]<br />/doctor/laboratory<br />/doctor/radiology<br />/doctor/referrals<br />/doctor/procedures<br />/doctor/schedule<br />/doctor/messages<br />/doctor/notifications<br />/doctor/reports<br />/doctor/profile<br />/doctor/settings<br /><br />---<br /><br />8.
    NURSE ROUTES<br /><br />/nurse<br />/nurse/patients<br />/nurse/patients/[id]<br />/nurse/vitals<br />/nurse/notes<br />/nurse/medications<br />/nurse/tasks<br />/nurse/wards<br />/nurse/admissions<br />/nurse/discharges<br />/nurse/schedule<br />/nurse/notifications<br /><br />---<br /><br />9.
    SURGEON ROUTES<br /><br />/surgeon<br />/surgeon/patients<br />/surgeon/cases<br />/surgeon/cases/[id]<br />/surgeon/cases/[id]/pre-op<br />/surgeon/cases/[id]/intra-op<br />/surgeon/cases/[id]/post-op<br />/surgeon/schedule<br />/surgeon/operating-rooms<br />/surgeon/reports<br />/surgeon/profile<br /><br />---<br /><br />10.
    HEAD OF SURGERY ROUTES<br /><br />/head-of-surgery<br />/head-of-surgery/cases<br />/head-of-surgery/cases/[id]<br />/head-of-surgery/approvals<br />/head-of-surgery/schedule<br />/head-of-surgery/operating-rooms<br />/head-of-surgery/surgeons<br />/head-of-surgery/anesthesia<br />/head-of-surgery/outcomes<br />/head-of-surgery/reports<br />/head-of-surgery/analytics<br />/head-of-surgery/settings<br /><br />---<br /><br />11.
    LABORATORY ROUTES<br /><br />/laboratory<br />/laboratory/orders<br />/laboratory/orders/[id]<br />/laboratory/samples<br />/laboratory/results<br />/laboratory/results/[id]<br />/laboratory/tests<br />/laboratory/reports<br />/laboratory/settings<br /><br />---<br /><br />12.
    RADIOLOGY ROUTES<br /><br />/radiology<br />/radiology/orders<br />/radiology/orders/[id]<br />/radiology/schedule<br />/radiology/reports<br />/radiology/reports/[id]<br />/radiology/equipment<br />/radiology/settings<br /><br />---<br /><br />13.
    PHARMACY ROUTES<br /><br />/pharmacy<br />/pharmacy/prescriptions<br />/pharmacy/prescriptions/[id]<br />/pharmacy/dispensing<br />/pharmacy/inventory<br />/pharmacy/inventory/[id]<br />/pharmacy/suppliers<br />/pharmacy/purchase-orders<br />/pharmacy/transactions<br />/pharmacy/reports<br />/pharmacy/settings<br /><br />---<br /><br />14.
    RECEPTION ROUTES<br /><br />/reception<br />/reception/patients<br />/reception/patients/register<br />/reception/appointments<br />/reception/check-in<br />/reception/check-out<br />/reception/admissions<br />/reception/discharges<br />/reception/waiting-room<br /><br />---<br /><br />15.
    BILLING ROUTES<br /><br />/billing<br />/billing/invoices<br />/billing/invoices/[id]<br />/billing/payments<br />/billing/refunds<br />/billing/insurance<br />/billing/claims<br />/billing/reports<br />/billing/settings<br /><br />---<br /><br />16.
    ADMIN ROUTES<br /><br />/admin<br />/admin/users<br />/admin/users/[id]<br />/admin/roles<br />/admin/permissions<br />/admin/staff<br />/admin/departments<br />/admin/services<br />/admin/appointments<br />/admin/patients<br />/admin/audit-logs<br />/admin/documents<br />/admin/notifications<br />/admin/reports<br />/admin/settings<br /><br />---<br /><br />17.
    EXECUTIVE MANAGEMENT ROUTES<br /><br />/management<br />/management/overview<br />/management/departments<br />/management/staff<br />/management/finance<br />/management/patients<br />/management/operations<br />/management/surgery<br />/management/analytics<br />/management/reports<br /><br />---<br /><br />18.
    DASHBOARD LAYOUT<br /><br />Create a reusable authenticated dashboard
    layout:<br /><br />DashboardLayout<br />├── Sidebar<br />├──
    MobileSidebar<br />├── TopHeader<br />│&nbsp;&nbsp; ├── Breadcrumb<br />│&nbsp;&nbsp;
    ├── GlobalSearch<br />│&nbsp;&nbsp; ├── NotificationCenter<br />│&nbsp;&nbsp;
    └── UserMenu<br />├── PageHeader<br />├── PageContent<br />└── Footer<br /><br />Sidebar
    contents must be generated based on role permissions.<br /><br />Do not
    hard-code the same navigation for every role.<br /><br />---<br /><br />19.
    DASHBOARD DESIGN<br /><br />Every dashboard should contain:<br /><br />PageHeader<br />├──
    Title<br />├── Description<br />├── DateFilter<br />└── PrimaryAction<br /><br />StatsGrid<br /><br />MainContentGrid<br />├──
    PrimaryPanel<br />├── SecondaryPanel<br />└── ActivityPanel<br /><br />DataTable
    / Calendar / Charts<br /><br />RecentActivity<br /><br />---<br /><br />20.
    PATIENT DASHBOARD LAYOUT<br /><br />PatientDashboard<br />│<br />├──
    WelcomeHeader<br />├── EmergencyAlert<br />│<br />├── Stats<br />│&nbsp;&nbsp;
    ├── UpcomingAppointments<br />│&nbsp;&nbsp; ├── ActivePrescriptions<br />│&nbsp;&nbsp;
    ├── PendingResults<br />│&nbsp;&nbsp; └── OutstandingBalance<br />│<br />├──
    UpcomingAppointment<br />├── MedicalSummary<br />├── RecentResults<br />├──
    CurrentMedications<br />├── RecentDocuments<br />└── Notifications<br /><br />---<br /><br />21.
    DOCTOR DASHBOARD LAYOUT<br /><br />DoctorDashboard<br />│<br />├──
    WelcomeHeader<br />├── TodaySummary<br />│<br />├── Stats<br />│&nbsp;&nbsp;
    ├── Today'sPatients<br />│&nbsp;&nbsp; ├── Waiting<br />│&nbsp;&nbsp; ├──
    Completed<br />│&nbsp;&nbsp; └── FollowUps<br />│<br />├──
    Today'sAppointments<br />├── PatientQueue<br />├── PendingLabResults<br />├──
    PendingRadiology<br />├── CriticalAlerts<br />├── RecentPatients<br />└──
    Tasks<br /><br />---<br /><br />22. NURSE DASHBOARD<br /><br />NurseDashboard<br />│<br />├──
    ShiftSummary<br />├── AssignedPatients<br />├── WardStatus<br />├──
    VitalAlerts<br />├── MedicationTasks<br />├── NursingTasks<br />└──
    RecentNotes<br /><br />---<br /><br />23. HEAD OF SURGERY DASHBOARD<br /><br />This
    dashboard must be more analytical than the normal surgeon dashboard.<br /><br />HeadOfSurgeryDashboard<br />│<br />├──
    Header<br />│<br />├── KPIGrid<br />│&nbsp;&nbsp; ├── TotalSurgeries<br />│&nbsp;&nbsp;
    ├── Today<br />│&nbsp;&nbsp; ├── PendingApproval<br />│&nbsp;&nbsp; ├──
    EmergencyCases<br />│&nbsp;&nbsp; ├── ORUtilization<br />│&nbsp;&nbsp; └──
    ActiveCases<br />│<br />├── SurgeryTrendChart<br />├──
    ProcedureDistributionChart<br />├── SurgeonWorkloadChart<br />├──
    ORUtilizationChart<br />│<br />├── PendingApprovalsTable<br />├──
    UpcomingSurgeries<br />├── ActiveOperatingRooms<br />├── CriticalCases<br />└──
    RecentSurgicalActivity<br /><br />---<br /><br />24. ADMIN DASHBOARD<br /><br />AdminDashboard<br />│<br />├──
    KPIGrid<br />│&nbsp;&nbsp; ├── Patients<br />│&nbsp;&nbsp; ├── Staff<br />│&nbsp;&nbsp;
    ├── Appointments<br />│&nbsp;&nbsp; ├── Admissions<br />│&nbsp;&nbsp; ├──
    Surgeries<br />│&nbsp;&nbsp; └── Revenue<br />│<br />├──
    PatientRegistrationChart<br />├── AppointmentChart<br />├── RevenueChart<br />├──
    DepartmentPerformance<br />├── RecentActivity<br />└── SystemAlerts<br /><br />---<br /><br />25.
    DATABASE SCHEMA<br /><br />Use PostgreSQL with UUID primary keys.<br /><br />Every
    table should have:<br /><br />id<br />created_at<br />updated_at<br /><br />Where
    appropriate also include:<br /><br />created_by<br />updated_by<br />deleted_at<br /><br />Use
    soft deletion only where clinically/business appropriate.<br /><br />---<br /><br />26.
    USERS<br /><br />users<br /><br />id UUID PK<br />email VARCHAR UNIQUE<br />phone
    VARCHAR UNIQUE<br />password_hash TEXT<br />first_name VARCHAR<br />last_name
    VARCHAR<br />middle_name VARCHAR NULL<br />avatar_url TEXT NULL<br />status
    ENUM<br />email_verified_at TIMESTAMP NULL<br />phone_verified_at TIMESTAMP
    NULL<br />last_login_at TIMESTAMP NULL<br />created_at TIMESTAMP<br />updated_at
    TIMESTAMP<br /><br />Statuses:<br /><br />ACTIVE<br />INACTIVE<br />SUSPENDED<br />LOCKED<br /><br />---<br /><br />27.
    ROLES<br /><br />roles<br /><br />id UUID PK<br />name VARCHAR UNIQUE<br />description
    TEXT<br />created_at TIMESTAMP<br />updated_at TIMESTAMP<br /><br />Roles:<br /><br />SUPER_ADMIN<br />HOSPITAL_ADMIN<br />MANAGEMENT<br />DOCTOR<br />SURGEON<br />HEAD_OF_SURGERY<br />NURSE<br />LAB_TECHNICIAN<br />RADIOLOGIST<br />PHARMACIST<br />RECEPTIONIST<br />ACCOUNTANT<br />PATIENT<br /><br />---<br /><br />28.
    PERMISSIONS<br /><br />permissions<br /><br />id UUID PK<br />name VARCHAR
    UNIQUE<br />description TEXT<br />resource VARCHAR<br />action VARCHAR<br /><br />Examples:<br /><br /><a
      href="http://patients.read"
      >patients.read</a
    ><br /><a href="http://patients.create">patients.create</a><br /><a
      href="http://patients.update"
      >patients.update</a
    ><br /><a href="http://patients.delete">patients.delete</a><br /><br /><a
      href="http://medical_records.read"
      >medical_records.read</a
    ><br /><a href="http://medical_records.create">medical_records.create</a
    ><br /><a href="http://medical_records.update">medical_records.update</a
    ><br /><br /><a href="http://appointments.read">appointments.read</a
    ><br /><a href="http://appointments.create">appointments.create</a><br /><a
      href="http://appointments.update"
      >appointments.update</a
    ><br /><a href="http://appointments.cancel">appointments.cancel</a
    ><br /><br /><a href="http://surgeries.read">surgeries.read</a><br /><a
      href="http://surgeries.create"
      >surgeries.create</a
    ><br /><a href="http://surgeries.approve">surgeries.approve</a><br /><a
      href="http://surgeries.update"
      >surgeries.update</a
    ><br /><a href="http://surgeries.complete">surgeries.complete</a
    ><br /><br /><a href="http://billing.read">billing.read</a><br /><a
      href="http://billing.create"
      >billing.create</a
    ><br /><a href="http://billing.update">billing.update</a><br /><br /><a
      href="http://users.read"
      >users.read</a
    ><br /><a href="http://users.create">users.create</a><br /><a
      href="http://users.update"
      >users.update</a
    ><br /><a href="http://users.delete">users.delete</a
    ><br /><br />---<br /><br />29. ROLE_PERMISSIONS<br /><br />role_permissions<br /><br />role_id
    UUID FK<br />permission_id UUID FK<br /><br />PRIMARY KEY(role_id,
    permission_id)<br /><br />---<br /><br />30. USER_ROLES<br /><br />user_roles<br /><br />user_id
    UUID FK<br />role_id UUID FK<br /><br />PRIMARY KEY(user_id, role_id)<br /><br />Allow
    multiple roles where hospital policy requires it.<br /><br />---<br /><br />31.
    PATIENTS<br /><br />patients<br /><br />id UUID PK<br />user_id UUID FK
    NULL<br />patient_number VARCHAR UNIQUE<br />first_name VARCHAR<br />last_name
    VARCHAR<br />middle_name VARCHAR NULL<br />date_of_birth DATE<br />gender
    ENUM<br />blood_group VARCHAR NULL<br />genotype VARCHAR NULL<br />phone
    VARCHAR<br />email VARCHAR NULL<br />address TEXT<br />city VARCHAR<br />state
    VARCHAR<br />country VARCHAR<br />emergency_contact_name VARCHAR<br />emergency_contact_phone
    VARCHAR<br />emergency_contact_relationship VARCHAR<br />insurance_id UUID
    NULL<br />status ENUM<br />created_at TIMESTAMP<br />updated_at TIMESTAMP<br /><br />---<br /><br />32.
    STAFF<br /><br />staff<br /><br />id UUID PK<br />user_id UUID FK<br />staff_number
    VARCHAR UNIQUE<br />department_id UUID FK<br />job_title VARCHAR<br />qualification
    TEXT<br />license_number VARCHAR NULL<br />employment_type ENUM<br />employment_status
    ENUM<br />hire_date DATE<br />created_at TIMESTAMP<br />updated_at
    TIMESTAMP<br /><br />---<br /><br />33. DOCTORS<br /><br />doctors<br /><br />id
    UUID PK<br />staff_id UUID FK<br />specialization VARCHAR<br />sub_specialization
    VARCHAR NULL<br />bio TEXT<br />years_of_experience INTEGER<br />consultation_fee
    DECIMAL<br />license_number VARCHAR<br />is_available BOOLEAN<br />created_at
    TIMESTAMP<br />updated_at TIMESTAMP<br /><br />---<br /><br />34.
    DEPARTMENTS<br /><br />departments<br /><br />id UUID PK<br />name VARCHAR
    UNIQUE<br />slug VARCHAR UNIQUE<br />description TEXT<br />head_staff_id
    UUID NULL<br />phone VARCHAR NULL<br />location VARCHAR NULL<br />status
    ENUM<br />created_at TIMESTAMP<br />updated_at TIMESTAMP<br /><br />---<br /><br />35.
    APPOINTMENTS<br /><br />appointments<br /><br />id UUID PK<br />appointment_number
    VARCHAR UNIQUE<br />patient_id UUID FK<br />doctor_id UUID FK<br />department_id
    UUID FK<br />appointment_type ENUM<br />scheduled_start TIMESTAMP<br />scheduled_end
    TIMESTAMP<br />reason TEXT<br />status ENUM<br />notes TEXT NULL<br />created_by
    UUID FK<br />created_at TIMESTAMP<br />updated_at TIMESTAMP<br /><br />Statuses:<br /><br />PENDING<br />CONFIRMED<br />CHECKED_IN<br />IN_CONSULTATION<br />COMPLETED<br />CANCELLED<br />NO_SHOW<br /><br />---<br /><br />36.
    MEDICAL_RECORDS<br /><br />medical_records<br /><br />id UUID PK<br />patient_id
    UUID FK<br />doctor_id UUID FK<br />appointment_id UUID FK NULL<br />chief_complaint
    TEXT<br />history_of_present_illness TEXT<br />examination TEXT<br />assessment
    TEXT<br />diagnosis_summary TEXT<br />treatment_plan TEXT<br />follow_up_date
    DATE NULL<br />created_at TIMESTAMP<br />updated_at TIMESTAMP<br /><br />---<br /><br />37.
    VITAL_SIGNS<br /><br />vital_signs<br /><br />id UUID PK<br />patient_id
    UUID FK<br />recorded_by UUID FK<br />temperature DECIMAL NULL<br />systolic_bp
    INTEGER NULL<br />diastolic_bp INTEGER NULL<br />heart_rate INTEGER NULL<br />respiratory_rate
    INTEGER NULL<br />oxygen_saturation DECIMAL NULL<br />weight DECIMAL NULL<br />height
    DECIMAL NULL<br />recorded_at TIMESTAMP<br /><br />---<br /><br />38.
    ALLERGIES<br /><br />allergies<br /><br />id UUID PK<br />patient_id UUID
    FK<br />allergen VARCHAR<br />reaction TEXT<br />severity ENUM<br />status
    ENUM<br />recorded_by UUID FK<br />created_at TIMESTAMP<br />updated_at
    TIMESTAMP<br /><br />---<br /><br />39. DIAGNOSES<br /><br />diagnoses<br /><br />id
    UUID PK<br />patient_id UUID FK<br />medical_record_id UUID FK<br />diagnosis_code
    VARCHAR NULL<br />diagnosis_name VARCHAR<br />description TEXT NULL<br />status
    ENUM<br />diagnosed_by UUID FK<br />diagnosed_at TIMESTAMP<br /><br />---<br /><br />40.
    MEDICATIONS<br /><br />medications<br /><br />id UUID PK<br />name
    VARCHAR<br />generic_name VARCHAR NULL<br />strength VARCHAR NULL<br />form
    VARCHAR<br />manufacturer VARCHAR NULL<br />description TEXT NULL<br />status
    ENUM<br />created_at TIMESTAMP<br />updated_at TIMESTAMP<br /><br />---<br /><br />41.
    PRESCRIPTIONS<br /><br />prescriptions<br /><br />id UUID PK<br />prescription_number
    VARCHAR UNIQUE<br />patient_id UUID FK<br />doctor_id UUID FK<br />medical_record_id
    UUID FK NULL<br />status ENUM<br />notes TEXT NULL<br />prescribed_at
    TIMESTAMP<br />updated_at TIMESTAMP<br /><br />---<br /><br />42.
    PRESCRIPTION_ITEMS<br /><br />prescription_items<br /><br />id UUID PK<br />prescription_id
    UUID FK<br />medication_id UUID FK<br />dosage VARCHAR<br />frequency
    VARCHAR<br />route VARCHAR<br />duration VARCHAR<br />quantity DECIMAL<br />instructions
    TEXT<br />dispensed_quantity DECIMAL DEFAULT 0<br /><br />---<br /><br />43.
    LABORATORY_TESTS<br /><br />laboratory_tests<br /><br />id UUID PK<br />name
    VARCHAR<br />code VARCHAR UNIQUE<br />category VARCHAR<br />description TEXT
    NULL<br />sample_type VARCHAR<br />turnaround_minutes INTEGER<br />price
    DECIMAL<br />status ENUM<br /><br />---<br /><br />44. LABORATORY_ORDERS<br /><br />laboratory_orders<br /><br />id
    UUID PK<br />order_number VARCHAR UNIQUE<br />patient_id UUID FK<br />doctor_id
    UUID FK<br />appointment_id UUID FK NULL<br />priority ENUM<br />status
    ENUM<br />clinical_notes TEXT NULL<br />ordered_at TIMESTAMP<br />completed_at
    TIMESTAMP NULL<br /><br />---<br /><br />45. LABORATORY_ORDER_ITEMS<br /><br />laboratory_order_items<br /><br />id
    UUID PK<br />order_id UUID FK<br />test_id UUID FK<br />status ENUM<br />sample_id
    UUID NULL<br /><br />---<br /><br />46. LABORATORY_RESULTS<br /><br />laboratory_results<br /><br />id
    UUID PK<br />order_item_id UUID FK<br />result_value TEXT<br />unit VARCHAR
    NULL<br />reference_range VARCHAR NULL<br />flag ENUM NULL<br />comments
    TEXT NULL<br />performed_by UUID FK<br />verified_by UUID NULL<br />verified_at
    TIMESTAMP NULL<br />created_at TIMESTAMP<br />updated_at TIMESTAMP<br /><br />---<br /><br />47.
    RADIOLOGY_ORDERS<br /><br />radiology_orders<br /><br />id UUID PK<br />order_number
    VARCHAR UNIQUE<br />patient_id UUID FK<br />doctor_id UUID FK<br />modality
    ENUM<br />body_part VARCHAR<br />priority ENUM<br />clinical_indication
    TEXT<br />status ENUM<br />ordered_at TIMESTAMP<br />completed_at TIMESTAMP
    NULL<br /><br />---<br /><br />48. RADIOLOGY_REPORTS<br /><br />radiology_reports<br /><br />id
    UUID PK<br />order_id UUID FK<br />radiologist_id UUID FK<br />findings
    TEXT<br />impression TEXT<br />recommendations TEXT NULL<br />status ENUM<br />reported_at
    TIMESTAMP<br />verified_at TIMESTAMP NULL<br /><br />---<br /><br />49.
    SURGICAL_CASES<br /><br />surgical_cases<br /><br />id UUID PK<br />case_number
    VARCHAR UNIQUE<br />patient_id UUID FK<br />requested_by UUID FK<br />primary_surgeon_id
    UUID FK<br />department_id UUID FK<br />procedure_name VARCHAR<br />procedure_code
    VARCHAR NULL<br />diagnosis TEXT<br />priority ENUM<br />status ENUM<br />estimated_duration_minutes
    INTEGER<br />scheduled_start TIMESTAMP NULL<br />scheduled_end TIMESTAMP
    NULL<br />operating_room_id UUID NULL<br />special_requirements TEXT NULL<br />created_at
    TIMESTAMP<br />updated_at TIMESTAMP<br /><br />Priority:<br /><br />EMERGENCY<br />URGENT<br />ELECTIVE<br /><br />Status:<br /><br />REQUESTED<br />UNDER_REVIEW<br />APPROVED<br />SCHEDULED<br />PRE_OP<br />IN_PROGRESS<br />COMPLETED<br />CANCELLED<br /><br />---<br /><br />50.
    SURGICAL_STAFF<br /><br />surgical_staff<br /><br />id UUID PK<br />surgical_case_id
    UUID FK<br />staff_id UUID FK<br />role ENUM<br /><br />Roles:<br /><br />PRIMARY_SURGEON<br />ASSISTANT_SURGEON<br />ANESTHETIST<br />SCRUB_NURSE<br />CIRCULATING_NURSE<br />OTHER<br /><br />---<br /><br />51.
    OPERATING_ROOMS<br /><br />operating_rooms<br /><br />id UUID PK<br />name
    VARCHAR<br />room_number VARCHAR UNIQUE<br />location VARCHAR<br />status
    ENUM<br />capacity INTEGER<br />notes TEXT NULL<br />created_at TIMESTAMP<br />updated_at
    TIMESTAMP<br /><br />---<br /><br />52. PRE_OPERATIVE_ASSESSMENTS<br /><br />preoperative_assessments<br /><br />id
    UUID PK<br />surgical_case_id UUID FK<br />assessed_by UUID FK<br />medical_clearance
    BOOLEAN<br />anesthesia_clearance BOOLEAN<br />laboratory_clearance
    BOOLEAN<br />imaging_clearance BOOLEAN<br />consent_status ENUM<br />risk_notes
    TEXT NULL<br />instructions TEXT NULL<br />assessed_at TIMESTAMP<br /><br />---<br /><br />53.
    INTRA_OPERATIVE_RECORDS<br /><br />intraoperative_records<br /><br />id UUID
    PK<br />surgical_case_id UUID FK<br />surgeon_id UUID FK<br />anesthetist_id
    UUID NULL<br />anesthesia_type VARCHAR NULL<br />actual_start TIMESTAMP<br />actual_end
    TIMESTAMP<br />findings TEXT<br />procedure_notes TEXT<br />blood_loss_ml
    INTEGER NULL<br />specimens TEXT NULL<br />complications TEXT NULL<br />outcome
    TEXT<br />created_at TIMESTAMP<br />updated_at TIMESTAMP<br /><br />---<br /><br />54.
    POST_OPERATIVE_RECORDS<br /><br />postoperative_records<br /><br />id UUID
    PK<br />surgical_case_id UUID FK<br />recorded_by UUID FK<br />recovery_status
    VARCHAR<br />pain_assessment VARCHAR NULL<br />postoperative_diagnosis
    TEXT<br />medications TEXT<br />instructions TEXT<br />complications TEXT
    NULL<br />follow_up_date DATE NULL<br />created_at TIMESTAMP<br />updated_at
    TIMESTAMP<br /><br />---<br /><br />55. WARDS<br /><br />wards<br /><br />id
    UUID PK<br />name VARCHAR<br />department_id UUID FK<br />ward_type
    VARCHAR<br />floor VARCHAR<br />status ENUM<br /><br />---<br /><br />56.
    BEDS<br /><br />beds<br /><br />id UUID PK<br />ward_id UUID FK<br />bed_number
    VARCHAR<br />status ENUM<br /><br />Statuses:<br /><br />AVAILABLE<br />OCCUPIED<br />RESERVED<br />CLEANING<br />MAINTENANCE<br /><br />---<br /><br />57.
    ADMISSIONS<br /><br />admissions<br /><br />id UUID PK<br />admission_number
    VARCHAR UNIQUE<br />patient_id UUID FK<br />doctor_id UUID FK<br />ward_id
    UUID FK<br />bed_id UUID FK<br />admission_date TIMESTAMP<br />expected_discharge_date
    DATE NULL<br />actual_discharge_date TIMESTAMP NULL<br />reason TEXT<br />diagnosis
    TEXT<br />status ENUM<br />created_at TIMESTAMP<br />updated_at TIMESTAMP<br /><br />---<br /><br />58.
    DISCHARGES<br /><br />discharges<br /><br />id UUID PK<br />admission_id
    UUID FK<br />approved_by UUID FK<br />discharge_diagnosis TEXT<br />treatment_summary
    TEXT<br />medications TEXT<br />follow_up_instructions TEXT<br />follow_up_date
    DATE NULL<br />discharged_at TIMESTAMP<br /><br />---<br /><br />59.
    INVOICES<br /><br />invoices<br /><br />id UUID PK<br />invoice_number
    VARCHAR UNIQUE<br />patient_id UUID FK<br />status ENUM<br />subtotal
    DECIMAL<br />discount DECIMAL<br />tax DECIMAL<br />total DECIMAL<br />amount_paid
    DECIMAL<br />balance DECIMAL<br />due_date DATE NULL<br />created_at
    TIMESTAMP<br />updated_at TIMESTAMP<br /><br />---<br /><br />60.
    INVOICE_ITEMS<br /><br />invoice_items<br /><br />id UUID PK<br />invoice_id
    UUID FK<br />service_type VARCHAR<br />service_reference_id UUID NULL<br />description
    VARCHAR<br />quantity DECIMAL<br />unit_price DECIMAL<br />total DECIMAL<br /><br />---<br /><br />61.
    PAYMENTS<br /><br />payments<br /><br />id UUID PK<br />payment_reference
    VARCHAR UNIQUE<br />invoice_id UUID FK<br />patient_id UUID FK<br />amount
    DECIMAL<br />method ENUM<br />status ENUM<br />transaction_reference VARCHAR
    NULL<br />paid_at TIMESTAMP NULL<br />created_at TIMESTAMP<br /><br />Payment
    methods:<br /><br />CASH<br />CARD<br />BANK_TRANSFER<br />ONLINE<br />INSURANCE<br />OTHER<br /><br />---<br /><br />62.
    PHARMACY_INVENTORY<br /><br />pharmacy_inventory<br /><br />id UUID PK<br />medication_id
    UUID FK<br />batch_number VARCHAR<br />quantity DECIMAL<br />unit VARCHAR<br />purchase_price
    DECIMAL<br />selling_price DECIMAL<br />expiry_date DATE<br />reorder_level
    DECIMAL<br />supplier_id UUID NULL<br />created_at TIMESTAMP<br />updated_at
    TIMESTAMP<br /><br />---<br /><br />63. PHARMACY_TRANSACTIONS<br /><br />pharmacy_transactions<br /><br />id
    UUID PK<br />medication_id UUID FK<br />prescription_item_id UUID NULL<br />type
    ENUM<br />quantity DECIMAL<br />performed_by UUID FK<br />reference VARCHAR
    NULL<br />created_at TIMESTAMP<br /><br />Types:<br /><br />PURCHASE<br />DISPENSE<br />RETURN<br />ADJUSTMENT<br />EXPIRED<br /><br />---<br /><br />64.
    DOCUMENTS<br /><br />documents<br /><br />id UUID PK<br />patient_id UUID
    NULL<br />uploaded_by UUID FK<br />category ENUM<br />file_name VARCHAR<br />file_url
    TEXT<br />mime_type VARCHAR<br />file_size BIGINT<br />access_level ENUM<br />created_at
    TIMESTAMP<br /><br />Never expose raw storage URLs without authorization.<br /><br />---<br /><br />65.
    NOTIFICATIONS<br /><br />notifications<br /><br />id UUID PK<br />user_id
    UUID FK<br />type VARCHAR<br />title VARCHAR<br />message TEXT<br />priority
    ENUM<br />read_at TIMESTAMP NULL<br />action_url TEXT NULL<br />created_at
    TIMESTAMP<br /><br />---<br /><br />66. MESSAGES<br /><br />conversations<br /><br />id
    UUID PK<br />subject VARCHAR NULL<br />created_at TIMESTAMP<br />updated_at
    TIMESTAMP<br /><br />conversation_participants<br /><br />conversation_id
    UUID FK<br />user_id UUID FK<br /><br />PRIMARY KEY(conversation_id,
    user_id)<br /><br />messages<br /><br />id UUID PK<br />conversation_id UUID
    FK<br />sender_id UUID FK<br />body TEXT<br />attachment_id UUID NULL<br />created_at
    TIMESTAMP<br />read_at TIMESTAMP NULL<br /><br />---<br /><br />67. AUDIT
    LOGS<br /><br />audit_logs<br /><br />id UUID PK<br />user_id UUID FK<br />action
    VARCHAR<br />resource VARCHAR<br />resource_id UUID NULL<br />old_values
    JSONB NULL<br />new_values JSONB NULL<br />ip_address INET NULL<br />user_agent
    TEXT NULL<br />created_at TIMESTAMP<br /><br />Audit logs must be
    append-only from the application's perspective.<br /><br />---<br /><br />68.
    TYPESCRIPT CORE TYPES<br /><br />Create strongly typed domain models.<br /><br />Example:<br /><br />export
    type UserStatus =<br />&nbsp; | 'ACTIVE'<br />&nbsp; | 'INACTIVE'<br />&nbsp;
    | 'SUSPENDED'<br />&nbsp; | 'LOCKED'<br /><br />export type Role =<br />&nbsp;
    | 'SUPER_ADMIN'<br />&nbsp; | 'HOSPITAL_ADMIN'<br />&nbsp; | 'MANAGEMENT'<br />&nbsp;
    | 'DOCTOR'<br />&nbsp; | 'SURGEON'<br />&nbsp; | 'HEAD_OF_SURGERY'<br />&nbsp;
    | 'NURSE'<br />&nbsp; | 'LAB_TECHNICIAN'<br />&nbsp; | 'RADIOLOGIST'<br />&nbsp;
    | 'PHARMACIST'<br />&nbsp; | 'RECEPTIONIST'<br />&nbsp; | 'ACCOUNTANT'<br />&nbsp;
    | 'PATIENT'<br /><br />---<br /><br />69. PATIENT INTERFACE<br /><br />export
    interface Patient {<br />&nbsp; id: string<br />&nbsp; patientNumber:
    string<br />&nbsp; userId?: string<br />&nbsp; firstName: string<br />&nbsp;
    lastName: string<br />&nbsp; middleName?: string<br />&nbsp; dateOfBirth:
    string<br />&nbsp; gender: Gender<br />&nbsp; bloodGroup?: string<br />&nbsp;
    genotype?: string<br />&nbsp; phone: string<br />&nbsp; email?: string<br />&nbsp;
    address: string<br />&nbsp; city: string<br />&nbsp; state: string<br />&nbsp;
    country: string<br />&nbsp; emergencyContact: EmergencyContact<br />&nbsp;
    status: PatientStatus<br />&nbsp; createdAt: string<br />&nbsp; updatedAt:
    string<br />}<br /><br />---<br /><br />70. DOCTOR INTERFACE<br /><br />export
    interface Doctor {<br />&nbsp; id: string<br />&nbsp; staffId: string<br />&nbsp;
    firstName: string<br />&nbsp; lastName: string<br />&nbsp; specialization:
    string<br />&nbsp; subSpecialization?: string<br />&nbsp; departmentId:
    string<br />&nbsp; bio?: string<br />&nbsp; yearsOfExperience: number<br />&nbsp;
    consultationFee: number<br />&nbsp; isAvailable: boolean<br />}<br /><br />---<br /><br />71.
    APPOINTMENT INTERFACE<br /><br />export interface Appointment {<br />&nbsp;
    id: string<br />&nbsp; appointmentNumber: string<br />&nbsp; patientId:
    string<br />&nbsp; doctorId: string<br />&nbsp; departmentId: string<br />&nbsp;
    appointmentType: AppointmentType<br />&nbsp; scheduledStart: string<br />&nbsp;
    scheduledEnd: string<br />&nbsp; reason?: string<br />&nbsp; status:
    AppointmentStatus<br />&nbsp; notes?: string<br />&nbsp; createdAt:
    string<br />&nbsp; updatedAt: string<br />}<br /><br />---<br /><br />72.
    SURGICAL CASE INTERFACE<br /><br />export interface SurgicalCase {<br />&nbsp;
    id: string<br />&nbsp; caseNumber: string<br />&nbsp; patientId: string<br />&nbsp;
    requestedBy: string<br />&nbsp; primarySurgeonId: string<br />&nbsp;
    departmentId: string<br />&nbsp; procedureName: string<br />&nbsp;
    diagnosis: string<br />&nbsp; priority: SurgeryPriority<br />&nbsp; status:
    SurgeryStatus<br />&nbsp; estimatedDurationMinutes: number<br />&nbsp;
    scheduledStart?: string<br />&nbsp; scheduledEnd?: string<br />&nbsp;
    operatingRoomId?: string<br />&nbsp; specialRequirements?: string<br />&nbsp;
    createdAt: string<br />&nbsp; updatedAt: string<br />}<br /><br />---<br /><br />73.
    LAB RESULT INTERFACE<br /><br />export interface LaboratoryResult {<br />&nbsp;
    id: string<br />&nbsp; orderItemId: string<br />&nbsp; resultValue:
    string<br />&nbsp; unit?: string<br />&nbsp; referenceRange?: string<br />&nbsp;
    flag?: ResultFlag<br />&nbsp; comments?: string<br />&nbsp; performedBy:
    string<br />&nbsp; verifiedBy?: string<br />&nbsp; verifiedAt?: string<br />}<br /><br />---<br /><br />74.
    INVOICE INTERFACE<br /><br />export interface Invoice {<br />&nbsp; id:
    string<br />&nbsp; invoiceNumber: string<br />&nbsp; patientId: string<br />&nbsp;
    status: InvoiceStatus<br />&nbsp; subtotal: number<br />&nbsp; discount:
    number<br />&nbsp; tax: number<br />&nbsp; total: number<br />&nbsp;
    amountPaid: number<br />&nbsp; balance: number<br />&nbsp; dueDate?:
    string<br />&nbsp; items: InvoiceItem[]<br />&nbsp; createdAt: string<br />&nbsp;
    updatedAt: string<br />}<br /><br />---<br /><br />75. API ARCHITECTURE<br /><br />All
    APIs should be under:<br /><br />/api/v1/<br /><br />Return consistent
    responses.<br /><br />Success:<br /><br />interface ApiResponse&lt;T&gt;
    {<br />&nbsp; success: true<br />&nbsp; data: T<br />&nbsp; meta?:
    ApiMeta<br />}<br /><br />Error:<br /><br />interface ApiErrorResponse {<br />&nbsp;
    success: false<br />&nbsp; error: {<br />&nbsp;&nbsp;&nbsp; code: string<br />&nbsp;&nbsp;&nbsp;
    message: string<br />&nbsp;&nbsp;&nbsp; fields?: Record&lt;string,
    string[]&gt;<br />&nbsp; }<br />}<br /><br />---<br /><br />76. AUTH API<br /><br />POST
    /api/v1/auth/register<br />POST /api/v1/auth/login<br />POST
    /api/v1/auth/logout<br />POST /api/v1/auth/refresh<br />POST
    /api/v1/auth/forgot-password<br />POST /api/v1/auth/reset-password<br />POST
    /api/v1/auth/verify-email<br />POST /api/v1/auth/verify-otp<br />GET&nbsp;
    /api/v1/auth/me<br /><br />---<br /><br />77. PATIENT API<br /><br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/patients<br />POST&nbsp;&nbsp; /api/v1/patients<br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/patients/:id<br />PATCH&nbsp; /api/v1/patients/:id<br />DELETE
    /api/v1/patients/:id<br /><br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/patients/:id/medical-records<br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/patients/:id/appointments<br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/patients/:id/prescriptions<br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/patients/:id/laboratory<br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/patients/:id/radiology<br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/patients/:id/documents<br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/patients/:id/invoices<br /><br />Authorization must be checked on
    every endpoint.<br /><br />---<br /><br />78. APPOINTMENT API<br /><br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/appointments<br />POST&nbsp;&nbsp; /api/v1/appointments<br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/appointments/:id<br />PATCH&nbsp; /api/v1/appointments/:id<br />POST&nbsp;&nbsp;
    /api/v1/appointments/:id/confirm<br />POST&nbsp;&nbsp;
    /api/v1/appointments/:id/check-in<br />POST&nbsp;&nbsp;
    /api/v1/appointments/:id/start<br />POST&nbsp;&nbsp;
    /api/v1/appointments/:id/complete<br />POST&nbsp;&nbsp;
    /api/v1/appointments/:id/cancel<br />POST&nbsp;&nbsp;
    /api/v1/appointments/:id/reschedule<br /><br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/appointments/availability<br /><br />Prevent double-booking at the
    database/service layer.<br /><br />---<br /><br />79. MEDICAL RECORD API<br /><br />GET&nbsp;
    /api/v1/medical-records/:id<br />POST /api/v1/medical-records<br />PATCH
    /api/v1/medical-records/:id<br /><br />POST
    /api/v1/medical-records/:id/diagnoses<br />POST
    /api/v1/medical-records/:id/vitals<br />POST
    /api/v1/medical-records/:id/prescriptions<br />POST
    /api/v1/medical-records/:id/lab-orders<br />POST
    /api/v1/medical-records/:id/radiology-orders<br />POST
    /api/v1/medical-records/:id/referrals<br /><br />---<br /><br />80.
    PRESCRIPTION API<br /><br />GET&nbsp; /api/v1/prescriptions<br />POST
    /api/v1/prescriptions<br />GET&nbsp; /api/v1/prescriptions/:id<br />PATCH
    /api/v1/prescriptions/:id<br />POST /api/v1/prescriptions/:id/dispense<br />POST
    /api/v1/prescriptions/:id/cancel<br /><br />Only authorized medical
    personnel may create prescriptions.<br /><br />Only authorized pharmacy
    staff may dispense.<br /><br />---<br /><br />81. LABORATORY API<br /><br />GET&nbsp;
    /api/v1/laboratory/orders<br />POST /api/v1/laboratory/orders<br />GET&nbsp;
    /api/v1/laboratory/orders/:id<br /><br />POST
    /api/v1/laboratory/orders/:id/sample<br />POST
    /api/v1/laboratory/orders/:id/results<br />POST
    /api/v1/laboratory/results/:id/verify<br />POST
    /api/v1/laboratory/results/:id/critical-alert<br /><br />---<br /><br />82.
    RADIOLOGY API<br /><br />GET&nbsp; /api/v1/radiology/orders<br />POST
    /api/v1/radiology/orders<br />GET&nbsp; /api/v1/radiology/orders/:id<br /><br />POST
    /api/v1/radiology/orders/:id/schedule<br />POST
    /api/v1/radiology/orders/:id/report<br />POST
    /api/v1/radiology/reports/:id/verify<br /><br />---<br /><br />83. SURGERY
    API<br /><br />GET&nbsp; /api/v1/surgery/cases<br />POST
    /api/v1/surgery/cases<br />GET&nbsp; /api/v1/surgery/cases/:id<br />PATCH
    /api/v1/surgery/cases/:id<br /><br />POST
    /api/v1/surgery/cases/:id/approve<br />POST
    /api/v1/surgery/cases/:id/reject<br />POST
    /api/v1/surgery/cases/:id/pre-op<br />POST
    /api/v1/surgery/cases/:id/schedule<br />POST
    /api/v1/surgery/cases/:id/start<br />POST
    /api/v1/surgery/cases/:id/complete<br />POST
    /api/v1/surgery/cases/:id/post-op<br /><br />GET
    /api/v1/surgery/operating-rooms<br />GET /api/v1/surgery/schedule<br />GET
    /api/v1/surgery/analytics<br /><br />---<br /><br />84. ADMISSION API<br /><br />GET&nbsp;
    /api/v1/admissions<br />POST /api/v1/admissions<br />GET&nbsp;
    /api/v1/admissions/:id<br />PATCH /api/v1/admissions/:id<br /><br />POST
    /api/v1/admissions/:id/transfer<br />POST
    /api/v1/admissions/:id/discharge<br />GET&nbsp; /api/v1/wards<br />GET&nbsp;
    /api/v1/wards/:id/beds<br /><br />---<br /><br />85. PHARMACY API<br /><br />GET&nbsp;
    /api/v1/pharmacy/inventory<br />POST /api/v1/pharmacy/inventory<br />PATCH
    /api/v1/pharmacy/inventory/:id<br /><br />GET&nbsp;
    /api/v1/pharmacy/dispensing<br />POST /api/v1/pharmacy/dispensing<br /><br />GET&nbsp;
    /api/v1/pharmacy/transactions<br />GET&nbsp; /api/v1/pharmacy/low-stock<br />GET&nbsp;
    /api/v1/pharmacy/expiring<br /><br />---<br /><br />86. BILLING API<br /><br />GET&nbsp;
    /api/v1/invoices<br />POST /api/v1/invoices<br />GET&nbsp;
    /api/v1/invoices/:id<br />PATCH /api/v1/invoices/:id<br /><br />POST
    /api/v1/invoices/:id/payments<br />GET&nbsp; /api/v1/payments<br />POST
    /api/v1/refunds<br /><br />GET /api/v1/billing/reports<br /><br />---<br /><br />87.
    ADMIN API<br /><br />GET&nbsp;&nbsp;&nbsp; /api/v1/admin/users<br />POST&nbsp;&nbsp;
    /api/v1/admin/users<br />GET&nbsp;&nbsp;&nbsp; /api/v1/admin/users/:id<br />PATCH&nbsp;
    /api/v1/admin/users/:id<br />DELETE /api/v1/admin/users/:id<br /><br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/admin/roles<br />POST&nbsp;&nbsp; /api/v1/admin/roles<br />PATCH&nbsp;
    /api/v1/admin/roles/:id<br /><br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/admin/permissions<br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/admin/audit-logs<br />GET&nbsp;&nbsp;&nbsp;
    /api/v1/admin/system-settings<br />PATCH&nbsp;
    /api/v1/admin/system-settings<br /><br />---<br /><br />88. RBAC MATRIX<br /><br />Implement
    permission-based authorization.<br /><br />Feature| Patient| Doctor| Nurse|
    Surgeon| Head Surgery| Lab| Pharmacy| Reception| Accountant| Admin<br />Own
    Profile| RW| RW| RW| RW| RW| RW| RW| RW| RW| RW<br />Own Records| R| R| R*|
    R| R| R*| R*| -| -| R**<br />Patients| Own| Assigned| Assigned| Assigned|
    Department| Assigned| Relevant| R| Billing| Full<br />Appointments| Own|
    Assigned| R| R| R| -| -| RW| -| Full<br />Consultations| -| RW| R| RW| RW|
    -| -| -| -| Audit<br />Prescriptions| R| RW| R| RW| R| -| Dispense| -| -|
    Audit<br />Lab Orders| R| RW| R| RW| R| RW| -| -| -| Full<br />Lab Results|
    Own| R| R*| R| R| RW| -| -| -| Full<br />Surgery| -| R| R| RW| Full| -| -|
    -| -| Full<br />Billing| Own| R*| -| R*| R*| -| -| R| RW| Full<br />Pharmacy|
    Own meds| R| R| R| R| -| RW| -| -| Full<br />Staff| -| -| -| -| -| -| -| -|
    -| Full<br />Audit Logs| -| -| -| -| R| -| -| -| -| Full<br /><br />"R =
    Read"<br /><br />"W = Write"<br /><br />"RW = Read + Write"<br /><br />"* =
    restricted by hospital policy"<br /><br />"** = administrative access must
    still respect privacy policies and be audited"<br /><br />Do not implement
    permissions merely by hiding UI buttons.<br /><br />Every server endpoint
    must enforce permissions.<br /><br />---<br /><br />89. PERMISSION
    CHECKING<br /><br />Create:<br /><br />useAuth()<br />useCurrentUser()<br />usePermissions()<br />useRole()<br /><br />Example:<br /><br />const
    { can } = usePermissions()<br /><br />if (can('<a
      href="http://patients.read"
      >patients.read</a
    >')) {<br />&nbsp; // display patient information<br />}<br /><br />But
    frontend checks are only for UX.<br /><br />Backend authorization is
    mandatory.<br /><br />---<br /><br />90. ROUTE MIDDLEWARE<br /><br />Create:<br /><br /><a
      href="http://auth.global.ts"
      >auth.global.ts</a
    ><br /><a href="http://guest.ts">guest.ts</a><br /><a href="http://role.ts"
      >role.ts</a
    ><br /><a href="http://permission.ts">permission.ts</a><br /><br />Example
    route metadata:<br /><br />definePageMeta({<br />&nbsp; middleware: ['auth',
    'permission'],<br />&nbsp; permissions: ['<a href="http://patients.read"
      >patients.read</a
    >']<br />})<br /><br />Create a centralized authorization middleware.<br /><br />---<br /><br />91.
    COMPOSABLES<br /><br />Create reusable composables:<br /><br />useAuth()<br />usePermissions()<br />usePatients()<br />useDoctors()<br />useAppointments()<br />useMedicalRecords()<br />usePrescriptions()<br />useLaboratory()<br />useRadiology()<br />useSurgery()<br />useOperatingRooms()<br />useAdmissions()<br />useWards()<br />usePharmacy()<br />useBilling()<br />useNotifications()<br />useMessages()<br />useDocuments()<br />useReports()<br />useDashboard()<br /><br />Example:<br /><br />const
    {<br />&nbsp; patients,<br />&nbsp; loading,<br />&nbsp; error,<br />&nbsp;
    fetchPatients,<br />&nbsp; getPatient,<br />&nbsp; createPatient,<br />&nbsp;
    updatePatient<br />} = usePatients()<br /><br />---<br /><br />92. COMPONENT
    ARCHITECTURE<br /><br />Create reusable components.<br /><br />Common<br /><br />AppLogo<br />AppHeader<br />AppFooter<br />PageHeader<br />PageContainer<br />SearchInput<br />DateRangePicker<br />FilterBar<br />DataTable<br />Pagination<br />StatusBadge<br />EmptyState<br />ErrorState<br />LoadingState<br />ConfirmDialog<br />FormActions<br /><br />Dashboard<br /><br />DashboardSidebar<br />DashboardHeader<br />DashboardStatCard<br />DashboardChart<br />ActivityFeed<br />NotificationBell<br />UserMenu<br />QuickAction<br /><br />Patient<br /><br />PatientAvatar<br />PatientSummary<br />PatientHeader<br />PatientMedicalSummary<br />PatientTimeline<br />PatientVitals<br />PatientAllergies<br />PatientMedicationList<br />PatientAppointmentList<br /><br />Doctor<br /><br />DoctorCard<br />DoctorSchedule<br />DoctorAppointmentCard<br />ConsultationForm<br />DiagnosisForm<br />PrescriptionForm<br />ReferralForm<br /><br />Surgery<br /><br />SurgeryCaseCard<br />SurgeryStatusBadge<br />SurgeryTimeline<br />SurgeryApprovalPanel<br />PreOpChecklist<br />IntraOpForm<br />PostOpForm<br />OperatingRoomCard<br />OperatingRoomCalendar<br />SurgicalTeamList<br /><br />Laboratory<br /><br />LabOrderCard<br />LabResultTable<br />LabResultForm<br />SampleStatusBadge<br />CriticalResultAlert<br /><br />Pharmacy<br /><br />PrescriptionQueue<br />PrescriptionDetails<br />MedicationSearch<br />DispensingForm<br />InventoryTable<br />StockAlert<br />ExpiryAlert<br /><br />Billing<br /><br />InvoiceTable<br />InvoiceDetails<br />PaymentForm<br />PaymentHistory<br />BalanceCard<br /><br />---<br /><br />93.
    FORM ARCHITECTURE<br /><br />Use reusable typed forms.<br /><br />Every form
    must support:<br /><br />Initial state<br />Validation<br />Loading state<br />Server
    errors<br />Field errors<br />Success state<br />Reset<br />Cancel<br /><br />Example:<br /><br />const
    schema = <a href="http://z.object">z.object</a>({<br />&nbsp; firstName:
    <a href="http://z.string">z.string</a>().min(2),<br />&nbsp; lastName:
    <a href="http://z.string">z.string</a>().min(2),<br />&nbsp; dateOfBirth:
    <a href="http://z.string">z.string</a>(),<br />&nbsp; phone:
    <a href="http://z.string">z.string</a>()<br />})<br /><br />Do not rely only
    on HTML validation.<br /><br />---<br /><br />94. DATA FETCHING<br /><br />Do
    not fetch large datasets unnecessarily.<br /><br />Use:<br /><br />pagination<br />filtering<br />sorting<br />server-side
    search<br /><br />Example:<br /><br />GET
    /api/v1/patients?page=1&amp;limit=20&amp;search=abdullah<br /><br />Response:<br /><br />interface
    PaginatedResponse&lt;T&gt; {<br />&nbsp; data: T[]<br />&nbsp; meta: {<br />&nbsp;&nbsp;&nbsp;
    page: number<br />&nbsp;&nbsp;&nbsp; limit: number<br />&nbsp;&nbsp;&nbsp;
    total: number<br />&nbsp;&nbsp;&nbsp; totalPages: number<br />&nbsp; }<br />}<br /><br />---<br /><br />95.
    TABLE ARCHITECTURE<br /><br />Create one reusable data-table system.<br /><br />Support:<br /><br />-
    Columns<br />- Sorting<br />- Filtering<br />- Pagination<br />- Search<br />-
    Row actions<br />- Bulk actions<br />- Loading<br />- Empty state<br />-
    Responsive behavior<br /><br />Example:<br /><br />&lt;DataTable<br />&nbsp;
    :columns="columns"<br />&nbsp; :data="patients"<br />&nbsp;
    :loading="loading"<br />&nbsp; :pagination="pagination"<br />&nbsp;
    @update:pagination="handlePagination"<br />/&gt;<br /><br />---<br /><br />96.
    NOTIFICATION ARCHITECTURE<br /><br />Create a centralized notification
    service.<br /><br />Events include:<br /><br /><a
      href="http://appointment.created"
      >appointment.created</a
    ><br /><a href="http://appointment.confirmed">appointment.confirmed</a
    ><br /><a href="http://appointment.cancelled">appointment.cancelled</a
    ><br /><br /><a href="http://lab.result.created">lab.result.created</a
    ><br /><a href="http://lab.result.verified">lab.result.verified</a><br /><a
      href="http://lab.result.critical"
      >lab.result.critical</a
    ><br /><br /><a href="http://prescription.created">prescription.created</a
    ><br /><a href="http://prescription.dispensed">prescription.dispensed</a
    ><br /><br /><a href="http://surgery.requested">surgery.requested</a
    ><br /><a href="http://surgery.approved">surgery.approved</a><br /><a
      href="http://surgery.scheduled"
      >surgery.scheduled</a
    ><br /><a href="http://surgery.started">surgery.started</a><br /><a
      href="http://surgery.completed"
      >surgery.completed</a
    ><br /><br /><a href="http://invoice.created">invoice.created</a><br /><a
      href="http://payment.completed"
      >payment.completed</a
    ><br /><br /><a href="http://admission.created">admission.created</a
    ><br /><a href="http://discharge.completed">discharge.completed</a
    ><br /><br />---<br /><br />97. AUDIT ARCHITECTURE<br /><br />Sensitive
    operations must generate audit events.<br /><br />Examples:<br /><br />PATIENT_CREATED<br />PATIENT_UPDATED<br /><br />MEDICAL_RECORD_CREATED<br />MEDICAL_RECORD_UPDATED<br /><br />PRESCRIPTION_CREATED<br />PRESCRIPTION_DISPENSED<br /><br />LAB_RESULT_CREATED<br />LAB_RESULT_VERIFIED<br /><br />SURGERY_APPROVED<br />SURGERY_STARTED<br />SURGERY_COMPLETED<br /><br />INVOICE_CREATED<br />PAYMENT_COMPLETED<br /><br />USER_CREATED<br />USER_ROLE_CHANGED<br /><br />---<br /><br />98.
    API SERVICE LAYER<br /><br />Do not make every component directly call
    "$fetch".<br /><br />Create services:<br /><br />services/<br />├──
    <a href="http://auth.service.ts">auth.service.ts</a><br />├──
    <a href="http://patient.service.ts">patient.service.ts</a><br />├──
    <a href="http://appointment.service.ts">appointment.service.ts</a><br />├──
    <a href="http://medical-record.service.ts">medical-record.service.ts</a
    ><br />├──
    <a href="http://prescription.service.ts">prescription.service.ts</a
    ><br />├── <a href="http://laboratory.service.ts">laboratory.service.ts</a
    ><br />├── <a href="http://radiology.service.ts">radiology.service.ts</a
    ><br />├── <a href="http://surgery.service.ts">surgery.service.ts</a
    ><br />├── <a href="http://pharmacy.service.ts">pharmacy.service.ts</a
    ><br />├── <a href="http://billing.service.ts">billing.service.ts</a
    ><br />├── <a href="http://admission.service.ts">admission.service.ts</a
    ><br />├──
    <a href="http://notification.service.ts">notification.service.ts</a
    ><br />└── <a href="http://report.service.ts">report.service.ts</a
    ><br /><br />---<br /><br />99. SERVER SERVICE ARCHITECTURE<br /><br />Use:<br /><br />server/<br />├──
    api/<br />│&nbsp;&nbsp; └── v1/<br />├── services/<br />├── repositories/<br />├──
    validators/<br />├── authorization/<br />├── database/<br />└── utils/<br /><br />Example:<br /><br />API
    Route<br />&nbsp;&nbsp; ↓<br />Authentication<br />&nbsp;&nbsp; ↓<br />Authorization<br />&nbsp;&nbsp;
    ↓<br />Validation<br />&nbsp;&nbsp; ↓<br />Service<br />&nbsp;&nbsp; ↓<br />Repository<br />&nbsp;&nbsp;
    ↓<br />Database<br /><br />Never put database queries directly into Vue
    components.<br /><br />---<br /><br /><a href="tel:100">100</a>. SURGERY
    BUSINESS RULES<br /><br />Implement these rules server-side.<br /><br />Rule
    1<br /><br />A surgery cannot be scheduled without required approval.<br /><br />Rule
    2<br /><br />An operating room cannot have overlapping procedures.<br /><br />Rule
    3<br /><br />A completed surgery must have an intra-operative record.<br /><br />Rule
    4<br /><br />Post-operative documentation must be created after the
    procedure.<br /><br />Rule 5<br /><br />Only authorized Head of
    Surgery/authorized clinical roles can approve surgical cases.<br /><br />Rule
    6<br /><br />Emergency procedures can follow an expedited workflow according
    to hospital policy.<br /><br />---<br /><br /><a href="tel:101">101</a>.
    APPOINTMENT BUSINESS RULES<br /><br />Rule 1<br /><br />A doctor cannot have
    two overlapping appointments.<br /><br />Rule 2<br /><br />A cancelled
    appointment cannot be checked in.<br /><br />Rule 3<br /><br />A completed
    appointment cannot be cancelled.<br /><br />Rule 4<br /><br />Patients
    cannot book unavailable slots.<br /><br />Rule 5<br /><br />Staff schedules
    must be considered when calculating availability.<br /><br />---<br /><br /><a
      href="tel:102"
      >102</a
    >. PHARMACY BUSINESS RULES<br /><br />Rule 1<br /><br />Dispensing cannot
    exceed available stock.<br /><br />Rule 2<br /><br />Expired inventory
    cannot be dispensed.<br /><br />Rule 3<br /><br />Every dispensing
    transaction must be recorded.<br /><br />Rule 4<br /><br />Inventory
    quantity must update transactionally.<br /><br />Rule 5<br /><br />Prescription
    status should update after dispensing.<br /><br />---<br /><br /><a
      href="tel:103"
      >103</a
    >. LABORATORY BUSINESS RULES<br /><br />Rule 1<br /><br />Only valid
    laboratory orders can receive results.<br /><br />Rule 2<br /><br />Results
    should have a verification state.<br /><br />Rule 3<br /><br />Critical
    results must generate appropriate notifications.<br /><br />Rule 4<br /><br />Verified
    results should have controlled modification permissions.<br /><br />---<br /><br /><a
      href="tel:104"
      >104</a
    >. BILLING BUSINESS RULES<br /><br />Rule 1<br /><br />Invoice total must be
    calculated server-side.<br /><br />Rule 2<br /><br />Payment amount cannot
    exceed permitted balance unless overpayment handling is explicitly
    supported.<br /><br />Rule 3<br /><br />Every payment requires a unique
    transaction reference.<br /><br />Rule 4<br /><br />Refunds require
    authorization.<br /><br />---<br /><br /><a href="tel:105">105</a>. FILE
    UPLOAD SECURITY<br /><br />For medical documents:<br /><br />- Validate MIME
    type<br />- Validate extension<br />- Limit file size<br />- Generate safe
    filenames<br />- Store files outside public web root<br />- Use
    access-controlled download endpoints<br />- Scan uploads where
    infrastructure supports it<br />- Never trust the original filename<br /><br />---<br /><br /><a
      href="tel:106"
      >106</a
    >. ERROR CODES<br /><br />Create standardized errors:<br /><br />AUTH_REQUIRED<br />FORBIDDEN<br />RESOURCE_NOT_FOUND<br />VALIDATION_ERROR<br />DUPLICATE_RESOURCE<br />APPOINTMENT_UNAVAILABLE<br />SURGERY_CONFLICT<br />INVALID_STATUS_TRANSITION<br />INSUFFICIENT_STOCK<br />INVOICE_ALREADY_PAID<br />FILE_TOO_LARGE<br />INVALID_FILE_TYPE<br />INTERNAL_ERROR<br /><br />---<br /><br /><a
      href="tel:107"
      >107</a
    >. STATUS TRANSITION SYSTEM<br /><br />Do not allow arbitrary status
    changes.<br /><br />Example:<br /><br />REQUESTED<br />→ UNDER_REVIEW<br />→
    APPROVED<br />→ SCHEDULED<br />→ PRE_OP<br />→ IN_PROGRESS<br />→
    COMPLETED<br /><br />Reject invalid transitions.<br /><br />For example:<br /><br />COMPLETED
    → REQUESTED<br /><br />must fail.<br /><br />---<br /><br /><a
      href="tel:108"
      >108</a
    >. SEED DATA<br /><br />Create a development seed script.<br /><br />Include:<br /><br />1
    Super Admin<br />1 Hospital Admin<br />1 Management user<br />1 Head of
    Surgery<br />5 Doctors<br />3 Surgeons<br />8 Nurses<br />3 Lab
    technicians<br />2 Radiologists<br />3 Pharmacists<br />3 Receptionists<br />2
    Accountants<br />10+ Patients<br /><br />Generate fictional information
    only.<br /><br />Create realistic:<br /><br />- Appointments<br />- Medical
    records<br />- Lab results<br />- Prescriptions<br />- Surgical cases<br />-
    Bills<br />- Payments<br />- Inventory<br />- Admissions<br /><br />---<br /><br /><a
      href="tel:109"
      >109</a
    >. DEMO ACCOUNTS<br /><br />Create development-only credentials.<br /><br />Example:<br /><br /><a
      href="mailto:admin@demo-hospital.test"
      >admin@demo-hospital.test</a
    ><br /><a href="mailto:doctor@demo-hospital.test"
      >doctor@demo-hospital.test</a
    ><br /><a href="mailto:surgeon@demo-hospital.test"
      >surgeon@demo-hospital.test</a
    ><br /><a href="http://surgery.head">surgery.head</a>@<a
      href="http://demo-hospital.test"
      >demo-hospital.test</a
    ><br /><a href="mailto:nurse@demo-hospital.test">nurse@demo-hospital.test</a
    ><br /><a href="mailto:lab@demo-hospital.test">lab@demo-hospital.test</a
    ><br /><a href="mailto:pharmacy@demo-hospital.test"
      >pharmacy@demo-hospital.test</a
    ><br /><a href="mailto:reception@demo-hospital.test"
      >reception@demo-hospital.test</a
    ><br /><a href="mailto:billing@demo-hospital.test"
      >billing@demo-hospital.test</a
    ><br /><a href="mailto:patient@demo-hospital.test"
      >patient@demo-hospital.test</a
    ><br /><br />Never use these credentials in production.<br /><br />---<br /><br /><a
      href="tel:110"
      >110</a
    >. DASHBOARD MOCK DATA<br /><br />The dashboard must not look empty during
    development.<br /><br />Populate:<br /><br />- KPI cards<br />- Tables<br />-
    Charts<br />- Recent activities<br />- Notifications<br />- Appointments<br />-
    Patients<br />- Surgical cases<br />- Laboratory orders<br />- Pharmacy
    alerts<br /><br />Use fictional data.<br /><br />---<br /><br /><a
      href="tel:111"
      >111</a
    >. RESPONSIVE BREAKPOINTS<br /><br />Design mobile-first.<br /><br />Support:<br /><br />Mobile<br />Tablet<br />Laptop<br />Desktop<br />Large
    Desktop<br /><br />Do not allow horizontal page overflow.<br /><br />Large
    data tables should become:<br /><br />- horizontally scrollable table
    containers, or<br />- responsive cards where appropriate.<br /><br />---<br /><br /><a
      href="tel:112"
      >112</a
    >. ACCESSIBILITY<br /><br />Implement:<br /><br />- Semantic HTML<br />-
    Keyboard navigation<br />- Focus states<br />- Screen reader labels<br />-
    Proper form labels<br />- Error announcements<br />- Accessible dialogs<br />-
    Accessible dropdowns<br />- Accessible tables<br />- Sufficient contrast<br />-
    Reduced motion<br /><br />Do not communicate critical information through
    color alone.<br /><br />---<br /><br /><a href="tel:113">113</a>.
    PERFORMANCE<br /><br />Implement:<br /><br />- Lazy loading<br />-
    Pagination<br />- Server-side filtering<br />- Image optimization<br />-
    Component-level code splitting where useful<br />- Efficient database
    indexes<br />- Avoid N+1 queries<br />- Debounced searches<br />- Cached
    reference data where appropriate<br /><br />Do not load all patients,
    medical records, invoices, or laboratory results into the browser at
    once.<br /><br />---<br /><br /><a href="tel:114">114</a>. DATABASE
    INDEXES<br /><br />Add indexes for common queries.<br /><br />Examples:<br /><br /><a
      href="http://users.email"
      >users.email</a
    ><br /><a href="http://users.phone">users.phone</a
    ><br /><br />patients.patient_number<br />patients.last_name<br /><a
      href="http://patients.phone"
      >patients.phone</a
    ><br /><br />appointments.patient_id<br />appointments.doctor_id<br />appointments.scheduled_start<br /><a
      href="http://appointments.status"
      >appointments.status</a
    ><br /><br />medical_records.patient_id<br />medical_records.doctor_id<br /><br />laboratory_orders.patient_id<br /><a
      href="http://laboratory_orders.status"
      >laboratory_orders.status</a
    ><br /><br />surgical_cases.patient_id<br />surgical_cases.primary_surgeon_id<br /><a
      href="http://surgical_cases.status"
      >surgical_cases.status</a
    ><br />surgical_cases.scheduled_start<br /><br />invoices.patient_id<br /><a
      href="http://invoices.status"
      >invoices.status</a
    ><br /><br />notifications.user_id<br />notifications.read_at<br /><br />Use
    composite indexes where query patterns justify them.<br /><br />---<br /><br /><a
      href="tel:115"
      >115</a
    >. FRONTEND DIRECTORY<br /><br />Use this structure:<br /><br />app/<br />├──
    assets/<br />│&nbsp;&nbsp; └── css/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    └── <a href="http://main.css">main.css</a><br />│<br />├── components/<br />│&nbsp;&nbsp;
    ├── ui/<br />│&nbsp;&nbsp; ├── common/<br />│&nbsp;&nbsp; ├── public/<br />│&nbsp;&nbsp;
    ├── dashboard/<br />│&nbsp;&nbsp; ├── patient/<br />│&nbsp;&nbsp; ├──
    doctor/<br />│&nbsp;&nbsp; ├── nurse/<br />│&nbsp;&nbsp; ├── surgery/<br />│&nbsp;&nbsp;
    ├── laboratory/<br />│&nbsp;&nbsp; ├── radiology/<br />│&nbsp;&nbsp; ├──
    pharmacy/<br />│&nbsp;&nbsp; ├── billing/<br />│&nbsp;&nbsp; ├──
    admission/<br />│&nbsp;&nbsp; └── admin/<br />│<br />├── composables/<br />├──
    layouts/<br />│&nbsp;&nbsp; ├── <a href="http://default.vue">default.vue</a
    ><br />│&nbsp;&nbsp; ├── <a href="http://auth.vue">auth.vue</a
    ><br />│&nbsp;&nbsp; ├── <a href="http://dashboard.vue">dashboard.vue</a
    ><br />│&nbsp;&nbsp; └── <a href="http://public.vue">public.vue</a
    ><br />│<br />├── middleware/<br />├── pages/<br />├── stores/<br />├──
    types/<br />├── utils/<br />└── constants/<br /><br />---<br /><br /><a
      href="tel:116"
      >116</a
    >. SERVER DIRECTORY<br /><br />server/<br />├── api/<br />│&nbsp;&nbsp; └──
    v1/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── auth/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ├── patients/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── doctors/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ├── appointments/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──
    medical-records/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──
    prescriptions/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── laboratory/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ├── radiology/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── surgery/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ├── pharmacy/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── admissions/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ├── billing/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──
    notifications/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── messages/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    └── admin/<br />│<br />├── services/<br />├── repositories/<br />├──
    validators/<br />├── middleware/<br />├── authorization/<br />├──
    database/<br />└── utils/<br /><br />---<br /><br /><a href="tel:117">117</a
    >. COMPONENT NAMING<br /><br />Use predictable names.<br /><br />Good:<br /><br /><a
      href="http://PatientSummaryCard.vue"
      >PatientSummaryCard.vue</a
    ><br /><a href="http://AppointmentStatusBadge.vue"
      >AppointmentStatusBadge.vue</a
    ><br /><a href="http://SurgeryApprovalDialog.vue"
      >SurgeryApprovalDialog.vue</a
    ><br /><a href="http://LabResultTable.vue">LabResultTable.vue</a><br /><a
      href="http://InvoicePaymentDialog.vue"
      >InvoicePaymentDialog.vue</a
    ><br /><a href="http://OperatingRoomCalendar.vue"
      >OperatingRoomCalendar.vue</a
    ><br /><br />Avoid:<br /><br /><a href="http://Thing.vue">Thing.vue</a
    ><br /><a href="http://Card2.vue">Card2.vue</a><br /><a
      href="http://NewComponent.vue"
      >NewComponent.vue</a
    ><br /><a href="http://Test.vue">Test.vue</a><br /><br />---<br /><br /><a
      href="tel:118"
      >118</a
    >. DESIGN SYSTEM<br /><br />Create reusable tokens for:<br /><br />spacing<br />typography<br />border
    radius<br />shadows<br />status colors<br />surface colors<br />text
    colors<br />focus states<br /><br />Use Nuxt UI/Tailwind consistently.<br /><br />Avoid
    arbitrary styling duplication.<br /><br />---<br /><br /><a href="tel:119"
      >119</a
    >. DARK MODE<br /><br />Use semantic color tokens rather than hardcoded
    colors.<br /><br />Example conceptual tokens:<br /><br />background<br />foreground<br />muted<br />border<br />primary<br />success<br />warning<br />danger<br />info<br />surface<br />surface-muted<br /><br />Every
    dashboard must remain usable in dark mode.<br /><br />---<br /><br /><a
      href="tel:120"
      >120</a
    >. GLOBAL SEARCH<br /><br />Implement:<br /><br />GET /api/v1/search?q=<br /><br />Search
    only resources accessible to the current user.<br /><br />Results grouped
    by:<br /><br />Patients<br />Appointments<br />Medical Records<br />Doctors<br />Prescriptions<br />Laboratory<br />Surgery<br />Invoices<br /><br />---<br /><br /><a
      href="tel:121"
      >121</a
    >. NOTIFICATION CENTER<br /><br />Header notification button should
    display:<br /><br />Unread count<br />Recent notifications<br />Priority<br />Timestamp<br />Read/unread
    state<br />Action link<br /><br />Support:<br /><br />Mark as read<br />Mark
    all as read<br />Open notification<br /><br />---<br /><br /><a
      href="tel:122"
      >122</a
    >. ACTIVITY TIMELINE<br /><br />For patient records and surgical cases, use
    timelines.<br /><br />Example:<br /><br />10:30 AM<br />Consultation
    completed<br /><br />11:00 AM<br />Laboratory test ordered<br /><br />11:45
    AM<br />Sample collected<br /><br />1:30 PM<br />Laboratory result
    verified<br /><br />2:00 PM<br />Doctor reviewed result<br /><br />Do not
    fabricate clinical conclusions.<br /><br />---<br /><br /><a href="tel:123"
      >123</a
    >. SECURITY MODEL<br /><br />The security architecture must follow:<br /><br />User<br />
    ↓<br />Authentication<br />
    ↓<br />Session<br />
    ↓<br />Role<br />
    ↓<br />Permission<br />
    ↓<br />Resource ownership / assignment<br />
    ↓<br />Action<br /><br />Example:<br /><br />A doctor having:<br /><br /><a
      href="http://medical_records.read"
      >medical_records.read</a
    ><br /><br />does NOT automatically mean they can read every patient
    record.<br /><br />The service layer should additionally verify whether the
    doctor is authorized to access that patient.<br /><br />---<br /><br /><a
      href="tel:124"
      >124</a
    >. PRIVACY<br /><br />Treat all of the following as sensitive:<br /><br />-
    Patient identity<br />- Medical history<br />- Diagnoses<br />- Laboratory
    results<br />- Imaging<br />- Prescriptions<br />- Surgery records<br />-
    Billing<br />- Insurance<br />- Documents<br /><br />Never place sensitive
    patient information in:<br /><br />- Public URLs<br />- Public search
    engines<br />- Public page metadata<br />- Browser console logs<br />- Debug
    logs<br />- Analytics payloads<br /><br />---<br /><br /><a href="tel:125"
      >125</a
    >. TESTING<br /><br />Create tests for:<br /><br />Unit<br /><br />-
    Validation<br />- Permission checks<br />- Status transitions<br />- Billing
    calculations<br />- Appointment availability<br />- Inventory
    calculations<br /><br />Integration<br /><br />- Authentication<br />-
    Patient creation<br />- Appointment booking<br />- Prescription workflow<br />-
    Lab workflow<br />- Surgery workflow<br />- Payment workflow<br /><br />E2E<br /><br />Test
    critical workflows:<br /><br />Patient registration<br />→ Login<br />→ Book
    appointment<br />→ Doctor consultation<br />→ Prescription<br />→ Pharmacy
    dispensing<br /><br />And:<br /><br />Doctor<br />→ Surgical request<br />→
    Head of Surgery approval<br />→ OR scheduling<br />→ Pre-op<br />→
    Surgery<br />→ Post-op<br />→ Discharge<br /><br />---<br /><br /><a
      href="tel:126"
      >126</a
    >. VALIDATION TESTS<br /><br />Verify that:<br /><br />- Invalid patient
    data cannot be submitted.<br />- Unauthorized users cannot access protected
    routes.<br />- Unauthorized API requests return
    <a href="tel:403">403</a>.<br />- Unauthenticated API requests return
    <a href="tel:401">401</a>.<br />- Appointment conflicts are rejected.<br />-
    Invalid surgery transitions are rejected.<br />- Expired medications cannot
    be dispensed.<br />- Insufficient inventory is rejected.<br />- Unauthorized
    users cannot download documents.<br />- Patients cannot access another
    patient's records.<br />- Audit logs are generated for sensitive actions.<br /><br />---<br /><br /><a
      href="tel:127"
      >127</a
    >. FINAL UI REQUIREMENTS<br /><br />The finished product must NOT look like
    a generic admin template.<br /><br />It should look like a purpose-built
    healthcare operating system.<br /><br />Public pages should feel:<br /><br />Professional<br />Trustworthy<br />Modern<br />Human<br />Accessible<br /><br />Private
    dashboards should feel:<br /><br />Dense but organized<br />Information-rich<br />Fast<br />Operational<br />Clear<br />Professional<br /><br />Clinical
    interfaces should prioritize readability over decoration.<br /><br />---<br /><br /><a
      href="tel:128"
      >128</a
    >. IMPORTANT IMPLEMENTATION RULE<br /><br />Do not attempt to build
    everything as one enormous Vue component.<br /><br />Break the system
    into:<br /><br />Pages<br />↓<br />Sections<br />↓<br />Components<br />↓<br />Composables<br />↓<br />Services<br />↓<br />API<br />↓<br />Database<br /><br />Keep
    each layer responsible for its own job.<br /><br />---<br /><br /><a
      href="tel:129"
      >129</a
    >. DO NOT DO THESE THINGS<br /><br />Do NOT:<br /><br />- Build only static
    UI<br />- Use fake buttons everywhere<br />- Put all data in one JSON
    file<br />- Store medical records in localStorage<br />- Store passwords in
    plain text<br />- Trust frontend permissions<br />- expose database IDs
    without considering authorization<br />- use public URLs for private
    documents<br />- put business logic inside templates<br />- duplicate
    dashboard components<br />- load huge datasets into the browser<br />- use
    real patient information<br />- create fake medical recommendations<br />-
    allow arbitrary clinical status changes<br /><br />---<br /><br /><a
      href="tel:130"
      >130</a
    >. DEVELOPMENT ORDER<br /><br />Build the application in this exact
    order:<br /><br />STEP 1<br /><br />Initialize Nuxt 4 project.<br /><br />Install/configure:<br /><br />Nuxt
    UI<br />Tailwind CSS<br />TypeScript<br />Nuxt Icon<br />Nuxt Image<br />ORM<br />PostgreSQL
    client<br />Validation library<br />Authentication<br /><br />---<br /><br />STEP
    2<br /><br />Create design system.<br /><br />Implement:<br /><br />Colors<br />Typography<br />Spacing<br />Buttons<br />Inputs<br />Cards<br />Tables<br />Badges<br />Dialogs<br />Alerts<br />Navigation<br /><br />---<br /><br />STEP
    3<br /><br />Create database schema.<br /><br />Implement:<br /><br />Users<br />Roles<br />Permissions<br />Patients<br />Staff<br />Departments<br />Doctors<br />Appointments<br />Medical
    Records<br /><br />---<br /><br />STEP 4<br /><br />Implement authentication
    and RBAC.<br /><br />---<br /><br />STEP 5<br /><br />Build public
    website.<br /><br />---<br /><br />STEP 6<br /><br />Build patient
    portal.<br /><br />---<br /><br />STEP 7<br /><br />Build doctor portal.<br /><br />---<br /><br />STEP
    8<br /><br />Build nurse portal.<br /><br />---<br /><br />STEP 9<br /><br />Build
    laboratory and radiology.<br /><br />---<br /><br />STEP 10<br /><br />Build
    pharmacy.<br /><br />---<br /><br />STEP 11<br /><br />Build admissions and
    wards.<br /><br />---<br /><br />STEP 12<br /><br />Build surgery
    management.<br /><br />---<br /><br />STEP 13<br /><br />Build Head of
    Surgery analytics.<br /><br />---<br /><br />STEP 14<br /><br />Build
    billing.<br /><br />---<br /><br />STEP 15<br /><br />Build
    administration.<br /><br />---<br /><br />STEP 16<br /><br />Build
    management analytics.<br /><br />---<br /><br />STEP 17<br /><br />Implement
    notifications and messaging.<br /><br />---<br /><br />STEP 18<br /><br />Implement
    audit logs.<br /><br />---<br /><br />STEP 19<br /><br />Implement reports
    and document generation.<br /><br />---<br /><br />STEP 20<br /><br />Testing,
    security review, accessibility review, performance optimization, and
    production hardening.<br /><br />---<br /><br /><a href="tel:131">131</a>.
    ACCEPTANCE CRITERIA<br /><br />The application is considered complete only
    when:<br /><br />Public<br /><br />- All public pages work.<br />-
    Navigation works.<br />- Doctor directory works.<br />- Department directory
    works.<br />- Appointment booking works.<br /><br />Authentication<br /><br />-
    Registration works.<br />- Login works.<br />- Logout works.<br />- Password
    recovery works.<br />- Sessions are secure.<br /><br />Patient<br /><br />-
    Patient dashboard works.<br />- Appointments work.<br />- Medical records
    work.<br />- Prescriptions work.<br />- Laboratory results work.<br />-
    Documents work.<br />- Billing works.<br /><br />Doctor<br /><br />- Doctor
    dashboard works.<br />- Patient list works.<br />- Consultation works.<br />-
    Diagnosis works.<br />- Prescription works.<br />- Lab requests work.<br />-
    Imaging requests work.<br /><br />Nursing<br /><br />- Assigned patients
    work.<br />- Vitals work.<br />- Nursing notes work.<br />- Medication tasks
    work.<br /><br />Surgery<br /><br />- Surgical requests work.<br />-
    Approval works.<br />- Scheduling works.<br />- Operating-room management
    works.<br />- Pre-op works.<br />- Intra-op works.<br />- Post-op works.<br />-
    Head of Surgery analytics work.<br /><br />Laboratory<br /><br />- Orders
    work.<br />- Samples work.<br />- Results work.<br />- Verification
    works.<br />- Critical-result notification works.<br /><br />Pharmacy<br /><br />-
    Prescriptions appear.<br />- Dispensing works.<br />- Inventory updates
    correctly.<br />- Low-stock alerts work.<br />- Expiry tracking works.<br /><br />Billing<br /><br />-
    Invoices work.<br />- Payments work.<br />- Receipts work.<br />- Balances
    work.<br />- Refund workflow works.<br /><br />Administration<br /><br />-
    Users work.<br />- Roles work.<br />- Permissions work.<br />- Departments
    work.<br />- Audit logs work.<br />- Settings work.<br /><br />Technical<br /><br />-
    TypeScript has no avoidable errors.<br />- API authorization works.<br />-
    Database relationships work.<br />- Responsive layouts work.<br />- Dark
    mode works.<br />- Accessibility has been considered.<br />- Loading states
    exist.<br />- Empty states exist.<br />- Error states exist.<br />-
    Sensitive records are protected.<br />- No real patient data is included.<br />-
    Critical workflows have tests.<br /><br />---<br /><br /><a href="tel:132"
      >132</a
    >. FINAL BUILD INSTRUCTION<br /><br />Build this as a real modular hospital
    management platform, not as a visual prototype.<br /><br />Prioritize:<br /><br />1.
    Correct architecture<br />2. Security<br />3. Authorization<br />4. Data
    integrity<br />5. Clinical workflow<br />6. Usability<br />7. Responsive
    design<br />8. Performance<br />9. Accessibility<br />10. Maintainability<br /><br />When
    a feature is too large, divide it into smaller modules rather than
    simplifying the architecture.<br /><br />When implementing a dashboard, use
    realistic fictional data and complete UI states.<br /><br />When
    implementing a medical workflow, create explicit status transitions and
    authorization checks.<br /><br />When implementing an API, validate every
    request and enforce authorization server-side.<br /><br />When implementing
    database relationships, use proper foreign keys and indexes.<br /><br />When
    implementing frontend pages, use reusable components and typed
    composables.<br /><br />When implementing private records, ensure the server
    verifies that the current user is allowed to access the requested
    resource.<br /><br />The final result should be a cohesive, enterprise-grade
    HMS with a public hospital website and multiple specialized secure portals
    operating on one consistent platform.
  </body>
