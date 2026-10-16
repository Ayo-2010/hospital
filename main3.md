  <body>
    HOSPITAL MANAGEMENT SYSTEM<br /><br />DATABASE + ARCHITECTURE IMPLEMENTATION
    PACKAGE<br /><br />Stack<br /><br />Nuxt 4<br />Vue 3<br />TypeScript<br />Nuxt
    UI<br />Tailwind CSS<br />Nitro<br />PostgreSQL<br />Prisma ORM<br />Zod/ArkType
    validation<br />Cookie-based authentication<br />REST API<br /><br />---<br /><br />1.
    DATABASE ARCHITECTURE<br /><br />The database is divided into the following
    domains:<br /><br />AUTHENTICATION<br />├── User<br />├── Role<br />├──
    Permission<br />├── UserRole<br />└── RolePermission<br /><br />HOSPITAL<br />├──
    Department<br />├── Staff<br />├── Doctor<br />├── Ward<br />├── Bed<br />└──
    OperatingRoom<br /><br />PATIENT<br />├── Patient<br />├──
    EmergencyContact<br />├── Allergy<br />├── MedicalRecord<br />├──
    VitalSign<br />└── Diagnosis<br /><br />APPOINTMENTS<br />└── Appointment<br /><br />PHARMACY<br />├──
    Medication<br />├── Prescription<br />├── PrescriptionItem<br />├──
    PharmacyInventory<br />└── PharmacyTransaction<br /><br />LABORATORY<br />├──
    LaboratoryTest<br />├── LaboratoryOrder<br />├── LaboratoryOrderItem<br />├──
    LaboratorySample<br />└── LaboratoryResult<br /><br />RADIOLOGY<br />├──
    RadiologyOrder<br />└── RadiologyReport<br /><br />SURGERY<br />├──
    SurgicalCase<br />├── SurgicalStaff<br />├── PreoperativeAssessment<br />├──
    IntraoperativeRecord<br />└── PostoperativeRecord<br /><br />ADMISSION<br />├──
    Ward<br />├── Bed<br />├── Admission<br />└── Discharge<br /><br />FINANCE<br />├──
    Invoice<br />├── InvoiceItem<br />├── Payment<br />├── InsuranceProvider<br />└──
    InsuranceClaim<br /><br />COMMUNICATION<br />├── Notification<br />├──
    Conversation<br />├── ConversationParticipant<br />└── Message<br /><br />DOCUMENTS<br />└──
    Document<br /><br />SECURITY<br />└── AuditLog<br /><br />---<br /><br />2.
    ERD<br /><br />Use this conceptual relationship structure.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ┌───────────────┐<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp; Role&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    └───────┬───────┘<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    UserRole│<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />┌───────────────┐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ┌──────▼───────┐<br />│&nbsp; Permission&nbsp;&nbsp;
    │◄──RolePermission│&nbsp;&nbsp;&nbsp;&nbsp; User&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />└───────────────┘&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    └──────┬───────┘<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ┌────────────────────┼─────────────────────┐<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Patient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Staff&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Notification<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ┌────────────┼────────────┐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──────── Doctor<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;
    MedicalRecord&nbsp;&nbsp; Allergy&nbsp;&nbsp;&nbsp;&nbsp; VitalSign&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──
    Diagnosis&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Department<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ├────────────── Appointment ◄──────── Doctor<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──────────────
    Prescription<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    PrescriptionItem<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Medication<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ├────────────── LaboratoryOrder<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    LaboratoryOrderItem<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    LaboratoryResult<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ├────────────── RadiologyOrder<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    RadiologyReport<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ├────────────── SurgicalCase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ┌────────────┼───────────────┐<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │&nbsp;&nbsp;&nbsp;&nbsp;
    Preoperative&nbsp;&nbsp; Intraoperative&nbsp;&nbsp; Postoperative<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Assessment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Record&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Record<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──────────────
    Admission<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Ward/Bed<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ├────────────── Invoice<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Payment<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    └────────────── Document<br /><br />---<br /><br />3. AUTHENTICATION &amp;
    RBAC ERD<br /><br />User<br />
    │<br />
    ├────────&lt; UserRole &gt;──────── Role<br />
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    RolePermission<br />
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Permission<br />
    │<br />
    ├────────&lt; Notification<br />
    ├────────&lt; AuditLog<br />
    ├────────&lt; Message<br />
    └────────&lt; Document<br /><br />A user may have multiple roles.<br /><br />Example:<br /><br />User<br />
    ├── DOCTOR<br />
    └── DEPARTMENT_HEAD<br /><br />Do not assume that a user has exactly one
    role.<br /><br />---<br /><br />4. PRISMA CONFIGURATION<br /><br />Create:<br /><br />prisma/<br />├──
    <a href="http://schema.prisma">schema.prisma</a><br />├──
    <a href="http://seed.ts">seed.ts</a><br />└── migrations/<br /><br />"<a
      href="http://schema.prisma"
      >schema.prisma</a
    >" should begin with:<br /><br />generator client {<br />&nbsp; provider =
    "prisma-client-js"<br />}<br /><br />datasource db {<br />&nbsp; provider =
    "postgresql"<br />&nbsp; url&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
    env("DATABASE_URL")<br />}<br /><br />---<br /><br />5. ENUMS<br /><br />enum
    UserStatus {<br />&nbsp; ACTIVE<br />&nbsp; INACTIVE<br />&nbsp;
    SUSPENDED<br />&nbsp; LOCKED<br />}<br /><br />enum Gender {<br />&nbsp;
    MALE<br />&nbsp; FEMALE<br />&nbsp; OTHER<br />&nbsp; UNDISCLOSED<br />}<br /><br />enum
    PatientStatus {<br />&nbsp; ACTIVE<br />&nbsp; INACTIVE<br />&nbsp;
    DECEASED<br />&nbsp; ARCHIVED<br />}<br /><br />enum EmploymentType {<br />&nbsp;
    FULL_TIME<br />&nbsp; PART_TIME<br />&nbsp; CONTRACT<br />&nbsp; LOCUM<br />&nbsp;
    VOLUNTEER<br />}<br /><br />enum EmploymentStatus {<br />&nbsp; ACTIVE<br />&nbsp;
    ON_LEAVE<br />&nbsp; SUSPENDED<br />&nbsp; TERMINATED<br />}<br /><br />enum
    AppointmentType {<br />&nbsp; IN_PERSON<br />&nbsp; TELEMEDICINE<br />&nbsp;
    FOLLOW_UP<br />&nbsp; SPECIALIST<br />&nbsp; EMERGENCY<br />}<br /><br />enum
    AppointmentStatus {<br />&nbsp; PENDING<br />&nbsp; CONFIRMED<br />&nbsp;
    CHECKED_IN<br />&nbsp; IN_CONSULTATION<br />&nbsp; COMPLETED<br />&nbsp;
    CANCELLED<br />&nbsp; NO_SHOW<br />}<br /><br />enum AllergySeverity {<br />&nbsp;
    MILD<br />&nbsp; MODERATE<br />&nbsp; SEVERE<br />&nbsp; LIFE_THREATENING<br />}<br /><br />enum
    AllergyStatus {<br />&nbsp; ACTIVE<br />&nbsp; RESOLVED<br />&nbsp;
    INACTIVE<br />}<br /><br />enum DiagnosisStatus {<br />&nbsp; ACTIVE<br />&nbsp;
    RESOLVED<br />&nbsp; HISTORICAL<br />&nbsp; RULED_OUT<br />}<br /><br />enum
    PrescriptionStatus {<br />&nbsp; ACTIVE<br />&nbsp; PARTIALLY_DISPENSED<br />&nbsp;
    DISPENSED<br />&nbsp; CANCELLED<br />&nbsp; EXPIRED<br />}<br /><br />enum
    OrderPriority {<br />&nbsp; ROUTINE<br />&nbsp; URGENT<br />&nbsp; STAT<br />&nbsp;
    EMERGENCY<br />}<br /><br />enum LabOrderStatus {<br />&nbsp; ORDERED<br />&nbsp;
    SAMPLE_PENDING<br />&nbsp; SAMPLE_COLLECTED<br />&nbsp; PROCESSING<br />&nbsp;
    COMPLETED<br />&nbsp; CANCELLED<br />}<br /><br />enum ResultFlag {<br />&nbsp;
    NORMAL<br />&nbsp; LOW<br />&nbsp; HIGH<br />&nbsp; CRITICAL<br />&nbsp;
    ABNORMAL<br />}<br /><br />enum VerificationStatus {<br />&nbsp;
    UNVERIFIED<br />&nbsp; VERIFIED<br />&nbsp; AMENDED<br />}<br /><br />enum
    SurgeryPriority {<br />&nbsp; ELECTIVE<br />&nbsp; URGENT<br />&nbsp;
    EMERGENCY<br />}<br /><br />enum SurgeryStatus {<br />&nbsp; REQUESTED<br />&nbsp;
    UNDER_REVIEW<br />&nbsp; APPROVED<br />&nbsp; REJECTED<br />&nbsp;
    SCHEDULED<br />&nbsp; PRE_OP<br />&nbsp; IN_PROGRESS<br />&nbsp;
    COMPLETED<br />&nbsp; CANCELLED<br />}<br /><br />enum SurgicalStaffRole
    {<br />&nbsp; PRIMARY_SURGEON<br />&nbsp; ASSISTANT_SURGEON<br />&nbsp;
    ANESTHETIST<br />&nbsp; SCRUB_NURSE<br />&nbsp; CIRCULATING_NURSE<br />&nbsp;
    OTHER<br />}<br /><br />enum OperatingRoomStatus {<br />&nbsp; AVAILABLE<br />&nbsp;
    RESERVED<br />&nbsp; PREPARING<br />&nbsp; IN_SURGERY<br />&nbsp;
    CLEANING<br />&nbsp; MAINTENANCE<br />&nbsp; OUT_OF_SERVICE<br />}<br /><br />enum
    BedStatus {<br />&nbsp; AVAILABLE<br />&nbsp; OCCUPIED<br />&nbsp;
    RESERVED<br />&nbsp; CLEANING<br />&nbsp; MAINTENANCE<br />}<br /><br />enum
    AdmissionStatus {<br />&nbsp; ACTIVE<br />&nbsp; TRANSFERRED<br />&nbsp;
    DISCHARGED<br />&nbsp; CANCELLED<br />}<br /><br />enum InvoiceStatus {<br />&nbsp;
    DRAFT<br />&nbsp; UNPAID<br />&nbsp; PARTIALLY_PAID<br />&nbsp; PAID<br />&nbsp;
    OVERDUE<br />&nbsp; CANCELLED<br />&nbsp; REFUNDED<br />}<br /><br />enum
    PaymentMethod {<br />&nbsp; CASH<br />&nbsp; CARD<br />&nbsp;
    BANK_TRANSFER<br />&nbsp; ONLINE<br />&nbsp; INSURANCE<br />&nbsp; OTHER<br />}<br /><br />enum
    PaymentStatus {<br />&nbsp; PENDING<br />&nbsp; SUCCESS<br />&nbsp;
    FAILED<br />&nbsp; REFUNDED<br />}<br /><br />enum PharmacyTransactionType
    {<br />&nbsp; PURCHASE<br />&nbsp; DISPENSE<br />&nbsp; RETURN<br />&nbsp;
    ADJUSTMENT<br />&nbsp; EXPIRED<br />}<br /><br />enum DocumentCategory {<br />&nbsp;
    LAB_REPORT<br />&nbsp; RADIOLOGY_REPORT<br />&nbsp; PRESCRIPTION<br />&nbsp;
    DISCHARGE_SUMMARY<br />&nbsp; MEDICAL_CERTIFICATE<br />&nbsp; REFERRAL<br />&nbsp;
    SURGICAL_REPORT<br />&nbsp; CONSENT_FORM<br />&nbsp; OTHER<br />}<br /><br />enum
    DocumentAccessLevel {<br />&nbsp; PATIENT<br />&nbsp; CLINICAL<br />&nbsp;
    DEPARTMENT<br />&nbsp; ADMIN<br />&nbsp; PRIVATE<br />}<br /><br />enum
    NotificationPriority {<br />&nbsp; NORMAL<br />&nbsp; IMPORTANT<br />&nbsp;
    URGENT<br />&nbsp; CRITICAL<br />}<br /><br />enum StaffRole {<br />&nbsp;
    PRIMARY_SURGEON<br />&nbsp; ASSISTANT_SURGEON<br />&nbsp; ANESTHETIST<br />&nbsp;
    SCRUB_NURSE<br />&nbsp; CIRCULATING_NURSE<br />&nbsp; OTHER<br />}<br /><br />enum
    ConsentStatus {<br />&nbsp; NOT_REQUIRED<br />&nbsp; PENDING<br />&nbsp;
    SIGNED<br />&nbsp; REFUSED<br />}<br /><br />enum WardStatus {<br />&nbsp;
    ACTIVE<br />&nbsp; INACTIVE<br />&nbsp; MAINTENANCE<br />}<br /><br />---<br /><br />6.
    USER MODEL<br /><br />model User {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String&nbsp;&nbsp;&nbsp;&nbsp; @id @default(uuid())<br />&nbsp;
    email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String&nbsp;&nbsp;&nbsp;&nbsp; @unique<br />&nbsp;
    phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?&nbsp;&nbsp;&nbsp; @unique<br />&nbsp; passwordHash&nbsp;&nbsp;&nbsp;
    String<br />&nbsp; firstName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    lastName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    middleName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    avatarUrl&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UserStatus
    @default(ACTIVE)<br /><br />&nbsp; emailVerifiedAt DateTime?<br />&nbsp;
    phoneVerifiedAt DateTime?<br />&nbsp; lastLoginAt&nbsp;&nbsp;&nbsp;&nbsp;
    DateTime?<br /><br />&nbsp;
    patient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Patient?<br />&nbsp;
    staff&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Staff?<br /><br />&nbsp;
    roles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    UserRole[]<br /><br />&nbsp; notifications&nbsp;&nbsp; Notification[]<br />&nbsp;
    sentMessages&nbsp;&nbsp;&nbsp; Message[]<br />&nbsp;
    documents&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Document[]<br />&nbsp;
    auditLogs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AuditLog[]<br /><br />&nbsp;
    createdAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime @default(now())<br />&nbsp;
    updatedAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime @updatedAt<br /><br />&nbsp;
    @@index([lastName])<br />&nbsp; @@index([status])<br />}<br /><br />---<br /><br />7.
    ROLE MODEL<br /><br />model Role {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id
    @default(uuid())<br />&nbsp; name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @unique<br />&nbsp; description String?<br /><br />&nbsp;
    users&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UserRole[]<br />&nbsp; permissions
    RolePermission[]<br /><br />&nbsp; createdAt DateTime @default(now())<br />&nbsp;
    updatedAt DateTime @updatedAt<br />}<br /><br />---<br /><br />8. PERMISSION
    MODEL<br /><br />model Permission {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id
    @default(uuid())<br />&nbsp; name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @unique<br />&nbsp; resource&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp; description
    String?<br /><br />&nbsp; roles RolePermission[]<br /><br />&nbsp; createdAt
    DateTime @default(now())<br /><br />&nbsp; @@index([resource])<br />&nbsp;
    @@index([action])<br />}<br /><br />---<br /><br />9. USER ROLE<br /><br />model
    UserRole {<br />&nbsp; userId String<br />&nbsp; roleId String<br /><br />&nbsp;
    user User @relation(fields: [userId], references: [id], onDelete:
    Cascade)<br />&nbsp; role Role @relation(fields: [roleId], references: [id],
    onDelete: Cascade)<br /><br />&nbsp; assignedAt DateTime @default(now())<br /><br />&nbsp;
    @@id([userId, roleId])<br />}<br /><br />---<br /><br />10. ROLE
    PERMISSION<br /><br />model RolePermission {<br />&nbsp;
    roleId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp; permissionId
    String<br /><br />&nbsp; role&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Role&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @relation(fields: [roleId],
    references: [id], onDelete: Cascade)<br />&nbsp; permission Permission
    @relation(fields: [permissionId], references: [id], onDelete: Cascade)<br /><br />&nbsp;
    @@id([roleId, permissionId])<br />}<br /><br />---<br /><br />11.
    DEPARTMENT<br /><br />model Department {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id
    @default(uuid())<br />&nbsp; name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @unique<br />&nbsp; slug&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @unique<br />&nbsp; description String?<br />&nbsp;
    phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    location&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @default("ACTIVE")<br /><br />&nbsp;
    staff&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Staff[]<br />&nbsp;
    doctors&nbsp;&nbsp;&nbsp;&nbsp; Doctor[]<br />&nbsp;
    wards&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ward[]<br />&nbsp;
    surgeries&nbsp;&nbsp; SurgicalCase[]<br /><br />&nbsp; createdAt DateTime
    @default(now())<br />&nbsp; updatedAt DateTime @updatedAt<br />}<br /><br />---<br /><br />12.
    STAFF<br /><br />model Staff {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @id
    @default(uuid())<br />&nbsp;
    userId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @unique<br />&nbsp; departmentId&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    staffNumber&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    @unique<br />&nbsp; jobTitle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp; qualification&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    licenseNumber&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    employmentType&nbsp;&nbsp; EmploymentType<br />&nbsp; employmentStatus
    EmploymentStatus @default(ACTIVE)<br />&nbsp;
    hireDate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime?<br /><br />&nbsp;
    user&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @relation(fields: [userId],
    references: [id], onDelete: Cascade)<br />&nbsp; department Department?
    @relation(fields: [departmentId], references: [id])<br /><br />&nbsp; doctor
    Doctor?<br /><br />&nbsp;
    surgicalStaff&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SurgicalStaff[]<br />&nbsp;
    performedLabResults&nbsp; LaboratoryResult[]<br />&nbsp;
    verifiedLabResults&nbsp;&nbsp; LaboratoryResult[]
    @relation("LabVerifier")<br /><br />&nbsp; createdAt DateTime
    @default(now())<br />&nbsp; updatedAt DateTime @updatedAt<br /><br />&nbsp;
    @@index([departmentId])<br />&nbsp; @@index([employmentStatus])<br />}<br /><br />---<br /><br />13.
    DOCTOR<br /><br />model Doctor {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String&nbsp; @id @default(uuid())<br />&nbsp;
    staffId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String&nbsp; @unique<br />&nbsp; specialization&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    subSpecialization String?<br />&nbsp;
    bio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp; yearsExperience&nbsp;&nbsp; Int&nbsp;&nbsp;&nbsp;&nbsp;
    @default(0)<br />&nbsp; consultationFee&nbsp;&nbsp; Decimal @<a
      href="http://db.Decimal"
      >db.Decimal</a
    >(12, 2)<br />&nbsp; isAvailable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Boolean
    @default(true)<br /><br />&nbsp; staff Staff @relation(fields: [staffId],
    references: [id], onDelete: Cascade)<br /><br />&nbsp; appointments
    Appointment[]<br />&nbsp; medicalRecords MedicalRecord[]<br />&nbsp;
    prescriptions Prescription[]<br />&nbsp; labOrders LaboratoryOrder[]<br />&nbsp;
    radiologyOrders RadiologyOrder[]<br /><br />&nbsp; surgicalCases
    SurgicalCase[] @relation("PrimarySurgeon")<br /><br />&nbsp; createdAt
    DateTime @default(now())<br />&nbsp; updatedAt DateTime @updatedAt<br /><br />&nbsp;
    @@index([specialization])<br />&nbsp; @@index([isAvailable])<br />}<br /><br />---<br /><br />14.
    PATIENT<br /><br />model Patient {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @id @default(uuid())<br />&nbsp;
    userId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @unique<br />&nbsp;
    patientNumber&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @unique<br /><br />&nbsp;
    firstName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    lastName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    middleName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp;
    dateOfBirth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    DateTime<br />&nbsp;
    gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Gender<br /><br />&nbsp;
    bloodGroup&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp;
    genotype&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp;
    phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp;
    address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp;
    city&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp;
    state&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp;
    country&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    PatientStatus @default(ACTIVE)<br /><br />&nbsp;
    user&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    User? @relation(fields: [userId], references: [id])<br /><br />&nbsp;
    emergencyContacts&nbsp;&nbsp;&nbsp;&nbsp; EmergencyContact[]<br />&nbsp;
    allergies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Allergy[]<br />&nbsp;
    medicalRecords&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MedicalRecord[]<br />&nbsp;
    vitalSigns&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    VitalSign[]<br />&nbsp;
    diagnoses&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Diagnosis[]<br /><br />&nbsp;
    appointments&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Appointment[]<br />&nbsp;
    prescriptions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Prescription[]<br /><br />&nbsp;
    laboratoryOrders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LaboratoryOrder[]<br />&nbsp;
    radiologyOrders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RadiologyOrder[]<br /><br />&nbsp;
    surgicalCases&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    SurgicalCase[]<br />&nbsp;
    admissions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Admission[]<br /><br />&nbsp;
    invoices&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Invoice[]<br />&nbsp;
    payments&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Payment[]<br /><br />&nbsp;
    documents&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Document[]<br /><br />&nbsp;
    createdAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    DateTime @default(now())<br />&nbsp;
    updatedAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    DateTime @updatedAt<br /><br />&nbsp; @@index([lastName])<br />&nbsp;
    @@index([phone])<br />&nbsp; @@index([status])<br />}<br /><br />---<br /><br />15.
    EMERGENCY CONTACT<br /><br />model EmergencyContact {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id
    @default(uuid())<br />&nbsp; patientId&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    relationship String<br /><br />&nbsp; patient Patient @relation(fields:
    [patientId], references: [id], onDelete: Cascade)<br /><br />&nbsp;
    createdAt DateTime @default(now())<br /><br />&nbsp; @@index([patientId])<br />}<br /><br />---<br /><br />16.
    MEDICAL RECORD<br /><br />model MedicalRecord {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp;
    patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    doctorId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp; appointmentId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp; chiefComplaint&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp; historyOfIllness&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    examination&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    assessment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    diagnosisSummary&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    treatmentPlan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br /><br />&nbsp;
    followUpDate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime?<br /><br />&nbsp;
    patient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Patient&nbsp;&nbsp;&nbsp;&nbsp; @relation(fields: [patientId], references:
    [id])<br />&nbsp;
    doctor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Doctor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @relation(fields: [doctorId],
    references: [id])<br />&nbsp;
    appointment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Appointment?
    @relation(fields: [appointmentId], references: [id])<br /><br />&nbsp;
    diagnoses&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Diagnosis[]<br />&nbsp; prescriptions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Prescription[]<br /><br />&nbsp;
    createdAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    DateTime @default(now())<br />&nbsp;
    updatedAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    DateTime @updatedAt<br /><br />&nbsp; @@index([patientId])<br />&nbsp;
    @@index([doctorId])<br />&nbsp; @@index([createdAt])<br />}<br /><br />---<br /><br />17.
    VITAL SIGNS<br /><br />model VitalSign {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp;
    patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    recordedBy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    temperature&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Decimal?<br />&nbsp;
    systolicBP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Int?<br />&nbsp;
    diastolicBP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Int?<br />&nbsp;
    heartRate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Int?<br />&nbsp;
    respiratoryRate&nbsp;&nbsp;&nbsp; Int?<br />&nbsp;
    oxygenSaturation&nbsp;&nbsp; Decimal?<br />&nbsp;
    weight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Decimal?<br />&nbsp;
    height&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Decimal?<br /><br />&nbsp; patient Patient @relation(fields: [patientId],
    references: [id], onDelete: Cascade)<br /><br />&nbsp; recordedAt DateTime
    @default(now())<br /><br />&nbsp; @@index([patientId])<br />&nbsp;
    @@index([recordedAt])<br />}<br /><br />---<br /><br />18. ALLERGY<br /><br />model
    Allergy {<br />&nbsp; id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp; patientId&nbsp; String<br /><br />&nbsp;
    allergen&nbsp;&nbsp; String<br />&nbsp; reaction&nbsp;&nbsp; String?<br />&nbsp;
    severity&nbsp;&nbsp; AllergySeverity<br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp; AllergyStatus @default(ACTIVE)<br /><br />&nbsp;
    patient Patient @relation(fields: [patientId], references: [id], onDelete:
    Cascade)<br /><br />&nbsp; createdAt DateTime @default(now())<br />&nbsp;
    updatedAt DateTime @updatedAt<br /><br />&nbsp; @@index([patientId])<br />}<br /><br />---<br /><br />19.
    DIAGNOSIS<br /><br />model Diagnosis {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp;
    patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    medicalRecordId&nbsp; String<br /><br />&nbsp;
    diagnosisCode&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    diagnosisName&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    DiagnosisStatus<br /><br />&nbsp;
    patient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Patient
    @relation(fields: [patientId], references: [id])<br />&nbsp;
    medicalRecord&nbsp;&nbsp;&nbsp; MedicalRecord @relation(fields:
    [medicalRecordId], references: [id])<br /><br />&nbsp; diagnosedAt DateTime
    @default(now())<br /><br />&nbsp; @@index([patientId])<br />&nbsp;
    @@index([medicalRecordId])<br />}<br /><br />---<br /><br />20.
    APPOINTMENT<br /><br />model Appointment {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp; appointmentNumber String @unique<br /><br />&nbsp;
    patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    doctorId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    departmentId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    appointmentType&nbsp;&nbsp; AppointmentType<br />&nbsp;
    scheduledStart&nbsp;&nbsp;&nbsp; DateTime<br />&nbsp;
    scheduledEnd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime<br /><br />&nbsp;
    reason&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    AppointmentStatus @default(PENDING)<br />&nbsp;
    notes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp;
    patient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Patient
    @relation(fields: [patientId], references: [id])<br />&nbsp;
    doctor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Doctor @relation(fields: [doctorId], references: [id])<br />&nbsp;
    department&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Department
    @relation(fields: [departmentId], references: [id])<br /><br />&nbsp;
    medicalRecords&nbsp;&nbsp;&nbsp; MedicalRecord[]<br /><br />&nbsp; createdAt
    DateTime @default(now())<br />&nbsp; updatedAt DateTime @updatedAt<br /><br />&nbsp;
    @@index([patientId])<br />&nbsp; @@index([doctorId])<br />&nbsp;
    @@index([departmentId])<br />&nbsp; @@index([scheduledStart])<br />&nbsp;
    @@index([status])<br />}<br /><br />---<br /><br />21. MEDICATION<br /><br />model
    Medication {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id
    @default(uuid())<br />&nbsp;
    name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    genericName&nbsp; String?<br />&nbsp; strength&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp; form&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp; manufacturer String?<br />&nbsp; description&nbsp;
    String?<br /><br />&nbsp; prescriptions PrescriptionItem[]<br />&nbsp;
    inventory&nbsp;&nbsp;&nbsp;&nbsp; PharmacyInventory[]<br />&nbsp;
    transactions&nbsp; PharmacyTransaction[]<br /><br />&nbsp; createdAt
    DateTime @default(now())<br />&nbsp; updatedAt DateTime @updatedAt<br /><br />&nbsp;
    @@index([name])<br />&nbsp; @@index([genericName])<br />}<br /><br />---<br /><br />22.
    PRESCRIPTION<br /><br />model Prescription {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp; prescriptionNumber String @unique<br /><br />&nbsp;
    patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    doctorId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp; medicalRecordId&nbsp;&nbsp;&nbsp; String?<br /><br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    PrescriptionStatus @default(ACTIVE)<br />&nbsp;
    notes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp;
    patient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Patient @relation(fields: [patientId], references: [id])<br />&nbsp;
    doctor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Doctor @relation(fields: [doctorId], references: [id])<br />&nbsp;
    medicalRecord&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MedicalRecord? @relation(fields:
    [medicalRecordId], references: [id])<br /><br />&nbsp;
    items&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    PrescriptionItem[]<br /><br />&nbsp; prescribedAt DateTime
    @default(now())<br />&nbsp; updatedAt DateTime @updatedAt<br /><br />&nbsp;
    @@index([patientId])<br />&nbsp; @@index([doctorId])<br />&nbsp;
    @@index([status])<br />}<br /><br />---<br /><br />23. PRESCRIPTION ITEM<br /><br />model
    PrescriptionItem {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp;
    prescriptionId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    medicationId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    dosage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    frequency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    route&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp;
    duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Decimal<br />&nbsp; instructions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp; dispensedQuantity&nbsp;&nbsp; Decimal
    @default(0)<br /><br />&nbsp; prescription Prescription @relation(fields:
    [prescriptionId], references: [id], onDelete: Cascade)<br />&nbsp;
    medication&nbsp;&nbsp; Medication&nbsp;&nbsp; @relation(fields:
    [medicationId], references: [id])<br /><br />&nbsp; transactions
    PharmacyTransaction[]<br /><br />&nbsp; @@index([prescriptionId])<br />&nbsp;
    @@index([medicationId])<br />}<br /><br />---<br /><br />24. LABORATORY
    TEST<br /><br />model LaboratoryTest {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp;
    name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @unique<br />&nbsp;
    category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp; description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp;
    sampleType&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    turnaroundMinutes&nbsp; Int<br />&nbsp;
    price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Decimal @<a href="http://db.Decimal">db.Decimal</a>(12, 2)<br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @default("ACTIVE")<br /><br />&nbsp; orderItems
    LaboratoryOrderItem[]<br /><br />&nbsp; createdAt DateTime
    @default(now())<br />&nbsp; updatedAt DateTime @updatedAt<br />}<br /><br />---<br /><br />25.
    LABORATORY ORDER<br /><br />model LaboratoryOrder {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp;
    orderNumber&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @unique<br /><br />&nbsp;
    patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    doctorId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    appointmentId&nbsp;&nbsp;&nbsp;&nbsp; String?<br /><br />&nbsp;
    priority&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OrderPriority
    @default(ROUTINE)<br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    LabOrderStatus @default(ORDERED)<br /><br />&nbsp;
    clinicalNotes&nbsp;&nbsp;&nbsp;&nbsp; String?<br /><br />&nbsp;
    patient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Patient
    @relation(fields: [patientId], references: [id])<br />&nbsp;
    doctor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Doctor @relation(fields: [doctorId], references: [id])<br />&nbsp;
    appointment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Appointment?
    @relation(fields: [appointmentId], references: [id])<br /><br />&nbsp;
    items&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    LaboratoryOrderItem[]<br /><br />&nbsp;
    orderedAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime
    @default(now())<br />&nbsp; completedAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    DateTime?<br /><br />&nbsp; @@index([patientId])<br />&nbsp;
    @@index([doctorId])<br />&nbsp; @@index([status])<br />}<br /><br />---<br /><br />26.
    LAB ORDER ITEM<br /><br />model LaboratoryOrderItem {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id
    @default(uuid())<br /><br />&nbsp; orderId&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    testId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LabOrderStatus @default(ORDERED)<br /><br />&nbsp;
    order&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LaboratoryOrder @relation(fields:
    [orderId], references: [id], onDelete: Cascade)<br />&nbsp;
    test&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LaboratoryTest
    @relation(fields: [testId], references: [id])<br /><br />&nbsp;
    sample&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LaboratorySample?<br />&nbsp;
    result&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LaboratoryResult?<br /><br />&nbsp;
    @@index([orderId])<br />&nbsp; @@index([testId])<br />}<br /><br />---<br /><br />27.
    LAB SAMPLE<br /><br />model LaboratorySample {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp; orderItemId&nbsp;&nbsp;&nbsp;
    String @unique<br />&nbsp; sampleNumber&nbsp;&nbsp; String @unique<br />&nbsp;
    sampleType&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    collectedAt&nbsp;&nbsp;&nbsp; DateTime<br />&nbsp;
    collectedBy&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp; orderItem
    LaboratoryOrderItem @relation(fields: [orderItemId], references: [id])<br /><br />&nbsp;
    createdAt DateTime @default(now())<br />}<br /><br />---<br /><br />28. LAB
    RESULT<br /><br />model LaboratoryResult {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp; orderItemId&nbsp;&nbsp;&nbsp;
    String @unique<br /><br />&nbsp; resultValue&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    unit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    referenceRange String?<br />&nbsp;
    flag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ResultFlag?<br />&nbsp; comments&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp; performedById&nbsp; String<br />&nbsp;
    verifiedById&nbsp;&nbsp; String?<br /><br />&nbsp; verificationStatus
    VerificationStatus @default(UNVERIFIED)<br /><br />&nbsp; orderItem
    LaboratoryOrderItem @relation(fields: [orderItemId], references: [id])<br /><br />&nbsp;
    performedBy Staff @relation(fields: [performedById], references: [id])<br />&nbsp;
    verifiedBy&nbsp; Staff? @relation("LabVerifier", fields: [verifiedById],
    references: [id])<br /><br />&nbsp; createdAt DateTime @default(now())<br />&nbsp;
    updatedAt DateTime @updatedAt<br /><br />&nbsp; @@index([performedById])<br />&nbsp;
    @@index([verifiedById])<br />}<br /><br />---<br /><br />29. RADIOLOGY
    ORDER<br /><br />model RadiologyOrder {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp;
    orderNumber&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @unique<br /><br />&nbsp;
    patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    doctorId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br /><br />&nbsp;
    modality&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    bodyPart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    priority&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    OrderPriority<br />&nbsp; clinicalIndication String?<br /><br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @default("ORDERED")<br /><br />&nbsp; patient Patient
    @relation(fields: [patientId], references: [id])<br />&nbsp; doctor&nbsp;
    Doctor&nbsp; @relation(fields: [doctorId], references: [id])<br /><br />&nbsp;
    report RadiologyReport?<br /><br />&nbsp; orderedAt DateTime
    @default(now())<br />&nbsp; completedAt DateTime?<br /><br />&nbsp;
    @@index([patientId])<br />&nbsp; @@index([doctorId])<br />&nbsp;
    @@index([status])<br />}<br /><br />---<br /><br />30. RADIOLOGY REPORT<br /><br />model
    RadiologyReport {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp;
    orderId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @unique<br />&nbsp;
    radiologistId&nbsp;&nbsp; String<br /><br />&nbsp;
    findings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    impression&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp; recommendations
    String?<br /><br />&nbsp; verificationStatus VerificationStatus
    @default(UNVERIFIED)<br /><br />&nbsp; order RadiologyOrder
    @relation(fields: [orderId], references: [id])<br /><br />&nbsp; reportedAt
    DateTime @default(now())<br />&nbsp; verifiedAt DateTime?<br />}<br /><br />---<br /><br />31.
    OPERATING ROOM<br /><br />model OperatingRoom {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id
    @default(uuid())<br />&nbsp; name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp; roomNumber&nbsp; String @unique<br />&nbsp;
    location&nbsp;&nbsp;&nbsp; String?<br />&nbsp; capacity&nbsp;&nbsp;&nbsp;
    Int @default(1)<br /><br />&nbsp; status OperatingRoomStatus
    @default(AVAILABLE)<br /><br />&nbsp; surgicalCases SurgicalCase[]<br /><br />&nbsp;
    createdAt DateTime @default(now())<br />&nbsp; updatedAt DateTime
    @updatedAt<br />}<br /><br />---<br /><br />32. SURGICAL CASE<br /><br />model
    SurgicalCase {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp;
    caseNumber&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @unique<br /><br />&nbsp;
    patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    requestedBy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    primarySurgeonId&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    departmentId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    procedureName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    procedureCode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    diagnosis&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br /><br />&nbsp;
    priority&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    SurgeryPriority<br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    SurgeryStatus @default(REQUESTED)<br /><br />&nbsp; estimatedDurationMinutes
    Int<br /><br />&nbsp; scheduledStart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    DateTime?<br />&nbsp;
    scheduledEnd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime?<br /><br />&nbsp;
    operatingRoomId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br /><br />&nbsp;
    specialRequirements&nbsp; String?<br /><br />&nbsp;
    patient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Patient @relation(fields: [patientId], references: [id])<br />&nbsp;
    primarySurgeon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Doctor
    @relation("PrimarySurgeon", fields: [primarySurgeonId], references: [id])<br />&nbsp;
    department&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Department @relation(fields: [departmentId], references: [id])<br />&nbsp;
    operatingRoom&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OperatingRoom?
    @relation(fields: [operatingRoomId], references: [id])<br /><br />&nbsp;
    staff&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    SurgicalStaff[]<br />&nbsp;
    preoperative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    PreoperativeAssessment?<br />&nbsp;
    intraoperative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IntraoperativeRecord?<br />&nbsp;
    postoperative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    PostoperativeRecord?<br /><br />&nbsp; createdAt DateTime @default(now())<br />&nbsp;
    updatedAt DateTime @updatedAt<br /><br />&nbsp; @@index([patientId])<br />&nbsp;
    @@index([primarySurgeonId])<br />&nbsp; @@index([departmentId])<br />&nbsp;
    @@index([status])<br />&nbsp; @@index([scheduledStart])<br />}<br /><br />---<br /><br />33.
    SURGICAL STAFF<br /><br />model SurgicalStaff {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp; surgicalCaseId String<br />&nbsp;
    staffId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    role&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    SurgicalStaffRole<br /><br />&nbsp; surgicalCase SurgicalCase
    @relation(fields: [surgicalCaseId], references: [id], onDelete: Cascade)<br />&nbsp;
    staff&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Staff @relation(fields:
    [staffId], references: [id])<br /><br />&nbsp; @@unique([surgicalCaseId,
    staffId, role])<br />}<br /><br />---<br /><br />34. PREOPERATIVE
    ASSESSMENT<br /><br />model PreoperativeAssessment {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp;
    surgicalCaseId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @unique<br /><br />&nbsp;
    assessedBy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br /><br />&nbsp; medicalClearance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Boolean @default(false)<br />&nbsp; anesthesiaClearance&nbsp;&nbsp; Boolean
    @default(false)<br />&nbsp; laboratoryClearance&nbsp;&nbsp; Boolean
    @default(false)<br />&nbsp; imagingClearance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Boolean @default(false)<br /><br />&nbsp;
    consentStatus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ConsentStatus
    @default(PENDING)<br /><br />&nbsp;
    riskNotes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp;
    instructions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp; surgicalCase SurgicalCase @relation(fields:
    [surgicalCaseId], references: [id], onDelete: Cascade)<br /><br />&nbsp;
    assessedAt DateTime @default(now())<br />}<br /><br />---<br /><br />35.
    INTRAOPERATIVE RECORD<br /><br />model IntraoperativeRecord {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp; surgicalCaseId&nbsp;&nbsp; String
    @unique<br /><br />&nbsp;
    surgeonId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    anesthetistId&nbsp;&nbsp;&nbsp; String?<br /><br />&nbsp;
    anesthesiaType&nbsp;&nbsp; String?<br /><br />&nbsp;
    actualStart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime<br />&nbsp;
    actualEnd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime?<br /><br />&nbsp;
    findings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    procedureNotes&nbsp;&nbsp; String?<br /><br />&nbsp;
    bloodLossMl&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Int?<br />&nbsp;
    specimens&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    complications&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    outcome&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br /><br />&nbsp;
    surgicalCase SurgicalCase @relation(fields: [surgicalCaseId], references:
    [id], onDelete: Cascade)<br /><br />&nbsp; createdAt DateTime
    @default(now())<br />&nbsp; updatedAt DateTime @updatedAt<br />}<br /><br />---<br /><br />36.
    POSTOPERATIVE RECORD<br /><br />model PostoperativeRecord {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp;
    surgicalCaseId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @unique<br /><br />&nbsp;
    recordedBy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    recoveryStatus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    painAssessment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    postoperativeDiagnosis String?<br />&nbsp;
    medications&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    instructions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    complications&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    followUpDate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime?<br /><br />&nbsp;
    surgicalCase SurgicalCase @relation(fields: [surgicalCaseId], references:
    [id], onDelete: Cascade)<br /><br />&nbsp; createdAt DateTime
    @default(now())<br />&nbsp; updatedAt DateTime @updatedAt<br />}<br /><br />---<br /><br />37.
    WARD<br /><br />model Ward {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id
    @default(uuid())<br />&nbsp;
    name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    departmentId String?<br />&nbsp; wardType&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    floor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; WardStatus @default(ACTIVE)<br /><br />&nbsp;
    department Department? @relation(fields: [departmentId], references:
    [id])<br />&nbsp; beds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bed[]<br />&nbsp;
    admissions Admission[]<br /><br />&nbsp; createdAt DateTime
    @default(now())<br />&nbsp; updatedAt DateTime @updatedAt<br />}<br /><br />---<br /><br />38.
    BED<br /><br />model Bed {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id @default(uuid())<br />&nbsp;
    wardId&nbsp;&nbsp;&nbsp; String<br />&nbsp; bedNumber String<br /><br />&nbsp;
    status BedStatus @default(AVAILABLE)<br /><br />&nbsp;
    ward&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ward @relation(fields: [wardId],
    references: [id])<br />&nbsp; admissions Admission[]<br /><br />&nbsp;
    @@unique([wardId, bedNumber])<br />&nbsp; @@index([status])<br />}<br /><br />---<br /><br />39.
    ADMISSION<br /><br />model Admission {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp;
    admissionNumber&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @unique<br /><br />&nbsp;
    patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    doctorId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    wardId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp;
    bedId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br /><br />&nbsp;
    admissionDate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime
    @default(now())<br />&nbsp; expectedDischargeDate DateTime?<br /><br />&nbsp;
    actualDischargeDate&nbsp;&nbsp; DateTime?<br /><br />&nbsp;
    reason&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp;
    diagnosis&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp; status AdmissionStatus @default(ACTIVE)<br /><br />&nbsp;
    patient Patient @relation(fields: [patientId], references: [id])<br />&nbsp;
    ward&nbsp;&nbsp;&nbsp; Ward&nbsp;&nbsp;&nbsp; @relation(fields: [wardId],
    references: [id])<br />&nbsp; bed&nbsp;&nbsp;&nbsp;&nbsp;
    Bed&nbsp;&nbsp;&nbsp;&nbsp; @relation(fields: [bedId], references: [id])<br /><br />&nbsp;
    discharge Discharge?<br /><br />&nbsp; @@index([patientId])<br />&nbsp;
    @@index([wardId])<br />&nbsp; @@index([bedId])<br />&nbsp;
    @@index([status])<br />}<br /><br />---<br /><br />40. DISCHARGE<br /><br />model
    Discharge {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp;
    admissionId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @unique<br /><br />&nbsp;
    approvedBy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br /><br />&nbsp; dischargeDiagnosis&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    treatmentSummary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    medications&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br />&nbsp; followUpInstructions&nbsp; String?<br />&nbsp;
    followUpDate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    DateTime?<br /><br />&nbsp;
    dischargedAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime
    @default(now())<br /><br />&nbsp; admission Admission @relation(fields:
    [admissionId], references: [id])<br />}<br /><br />---<br /><br />41.
    INVOICE<br /><br />model Invoice {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp; invoiceNumber&nbsp; String
    @unique<br /><br />&nbsp; patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; InvoiceStatus
    @default(DRAFT)<br /><br />&nbsp;
    subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Decimal @<a
      href="http://db.Decimal"
      >db.Decimal</a
    >(12, 2)<br />&nbsp; discount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Decimal
    @default(0) @<a href="http://db.Decimal">db.Decimal</a>(12, 2)<br />&nbsp;
    tax&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Decimal @default(0) @<a href="http://db.Decimal">db.Decimal</a>(12, 2)<br /><br />&nbsp;
    total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Decimal @<a
      href="http://db.Decimal"
      >db.Decimal</a
    >(12, 2)<br />&nbsp; amountPaid&nbsp;&nbsp;&nbsp;&nbsp; Decimal @default(0)
    @<a href="http://db.Decimal">db.Decimal</a>(12, 2)<br />&nbsp;
    balance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Decimal @<a
      href="http://db.Decimal"
      >db.Decimal</a
    >(12, 2)<br /><br />&nbsp; dueDate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    DateTime?<br /><br />&nbsp;
    patient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Patient @relation(fields:
    [patientId], references: [id])<br /><br />&nbsp;
    items&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; InvoiceItem[]<br />&nbsp;
    payments&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Payment[]<br /><br />&nbsp;
    createdAt DateTime @default(now())<br />&nbsp; updatedAt DateTime
    @updatedAt<br /><br />&nbsp; @@index([patientId])<br />&nbsp;
    @@index([status])<br />}<br /><br />---<br /><br />42. INVOICE ITEM<br /><br />model
    InvoiceItem {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp;
    invoiceId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    serviceType&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    serviceReferenceId String?<br /><br />&nbsp;
    description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Decimal<br />&nbsp;
    unitPrice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Decimal @<a
      href="http://db.Decimal"
      >db.Decimal</a
    >(12, 2)<br />&nbsp;
    total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Decimal @<a href="http://db.Decimal">db.Decimal</a>(12, 2)<br /><br />&nbsp;
    invoice Invoice @relation(fields: [invoiceId], references: [id], onDelete:
    Cascade)<br /><br />&nbsp; @@index([invoiceId])<br />}<br /><br />---<br /><br />43.
    PAYMENT<br /><br />model Payment {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br />&nbsp; paymentReference&nbsp;&nbsp; String
    @unique<br /><br />&nbsp;
    invoiceId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Decimal @<a href="http://db.Decimal">db.Decimal</a>(12, 2)<br /><br />&nbsp;
    method&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    PaymentMethod<br />&nbsp;
    status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    PaymentStatus @default(PENDING)<br /><br />&nbsp; transactionReference
    String?<br /><br />&nbsp;
    paidAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    DateTime?<br /><br />&nbsp; invoice Invoice @relation(fields: [invoiceId],
    references: [id])<br />&nbsp; patient Patient @relation(fields: [patientId],
    references: [id])<br /><br />&nbsp; createdAt DateTime @default(now())<br /><br />&nbsp;
    @@index([invoiceId])<br />&nbsp; @@index([patientId])<br />&nbsp;
    @@index([status])<br />}<br /><br />---<br /><br />44. PHARMACY INVENTORY<br /><br />model
    PharmacyInventory {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp; medicationId&nbsp;&nbsp;
    String<br />&nbsp; batchNumber&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Decimal<br />&nbsp;
    unit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    purchasePrice&nbsp; Decimal @<a href="http://db.Decimal">db.Decimal</a>(12,
    2)<br />&nbsp; sellingPrice&nbsp;&nbsp; Decimal @<a href="http://db.Decimal"
      >db.Decimal</a
    >(12, 2)<br /><br />&nbsp; expiryDate&nbsp;&nbsp;&nbsp;&nbsp; DateTime<br />&nbsp;
    reorderLevel&nbsp;&nbsp; Decimal<br /><br />&nbsp; medication Medication
    @relation(fields: [medicationId], references: [id])<br /><br />&nbsp;
    createdAt DateTime @default(now())<br />&nbsp; updatedAt DateTime
    @updatedAt<br /><br />&nbsp; @@unique([medicationId, batchNumber])<br />&nbsp;
    @@index([expiryDate])<br />&nbsp; @@index([quantity])<br />}<br /><br />---<br /><br />45.
    PHARMACY TRANSACTION<br /><br />model PharmacyTransaction {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp;
    medicationId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    prescriptionItemId&nbsp; String?<br /><br />&nbsp;
    type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    PharmacyTransactionType<br />&nbsp;
    quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Decimal<br /><br />&nbsp;
    performedBy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    reference&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp;
    medication&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Medication
    @relation(fields: [medicationId], references: [id])<br />&nbsp;
    prescriptionItem&nbsp;&nbsp;&nbsp; PrescriptionItem? @relation(fields:
    [prescriptionItemId], references: [id])<br /><br />&nbsp; createdAt DateTime
    @default(now())<br /><br />&nbsp; @@index([medicationId])<br />&nbsp;
    @@index([type])<br />&nbsp; @@index([createdAt])<br />}<br /><br />---<br /><br />46.
    DOCUMENT<br /><br />model Document {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp;
    patientId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String?<br />&nbsp;
    uploadedBy&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DocumentCategory<br />&nbsp;
    accessLevel&nbsp;&nbsp;&nbsp; DocumentAccessLevel<br /><br />&nbsp;
    fileName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    fileUrl&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    mimeType&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    fileSize&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BigInt<br /><br />&nbsp;
    patient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Patient? @relation(fields:
    [patientId], references: [id])<br />&nbsp;
    uploader&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; User @relation(fields:
    [uploadedBy], references: [id])<br /><br />&nbsp; createdAt DateTime
    @default(now())<br /><br />&nbsp; @@index([patientId])<br />&nbsp;
    @@index([category])<br />&nbsp; @@index([accessLevel])<br />}<br /><br />---<br /><br />47.
    NOTIFICATION<br /><br />model Notification {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id
    @default(uuid())<br /><br />&nbsp; userId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br /><br />&nbsp; type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String<br />&nbsp; title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp;
    message&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    priority&nbsp;&nbsp;&nbsp; NotificationPriority @default(NORMAL)<br /><br />&nbsp;
    readAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DateTime?<br />&nbsp;
    actionUrl&nbsp;&nbsp; String?<br /><br />&nbsp; user User @relation(fields:
    [userId], references: [id], onDelete: Cascade)<br /><br />&nbsp; createdAt
    DateTime @default(now())<br /><br />&nbsp; @@index([userId])<br />&nbsp;
    @@index([readAt])<br />&nbsp; @@index([createdAt])<br />}<br /><br />---<br /><br />48.
    CONVERSATION<br /><br />model Conversation {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id
    @default(uuid())<br />&nbsp; subject&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String?<br /><br />&nbsp; participants ConversationParticipant[]<br />&nbsp;
    messages&nbsp;&nbsp;&nbsp;&nbsp; Message[]<br /><br />&nbsp; createdAt
    DateTime @default(now())<br />&nbsp; updatedAt DateTime @updatedAt<br />}<br /><br />---<br /><br />49.
    CONVERSATION PARTICIPANT<br /><br />model ConversationParticipant {<br />&nbsp;
    conversationId String<br />&nbsp;
    userId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    conversation Conversation @relation(fields: [conversationId], references:
    [id], onDelete: Cascade)<br />&nbsp;
    user&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @relation(fields:
    [userId], references: [id], onDelete: Cascade)<br /><br />&nbsp; joinedAt
    DateTime @default(now())<br /><br />&nbsp; @@id([conversationId, userId])<br />}<br /><br />---<br /><br />50.
    MESSAGE<br /><br />model Message {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    String @id @default(uuid())<br /><br />&nbsp; conversationId String<br />&nbsp;
    senderId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    body&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String<br /><br />&nbsp;
    conversation Conversation @relation(fields: [conversationId], references:
    [id], onDelete: Cascade)<br />&nbsp;
    sender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; User @relation(fields:
    [senderId], references: [id])<br /><br />&nbsp; createdAt DateTime
    @default(now())<br />&nbsp; readAt&nbsp;&nbsp;&nbsp; DateTime?<br /><br />&nbsp;
    @@index([conversationId])<br />&nbsp; @@index([senderId])<br />}<br /><br />---<br /><br />51.
    AUDIT LOG<br /><br />model AuditLog {<br />&nbsp;
    id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String @id
    @default(uuid())<br /><br />&nbsp; userId&nbsp;&nbsp;&nbsp;&nbsp; String?<br /><br />&nbsp;
    action&nbsp;&nbsp;&nbsp;&nbsp; String<br />&nbsp; resource&nbsp;&nbsp;
    String<br />&nbsp; resourceId String?<br /><br />&nbsp; oldValues&nbsp;
    Json?<br />&nbsp; newValues&nbsp; Json?<br /><br />&nbsp; ipAddress&nbsp;
    String?<br />&nbsp; userAgent&nbsp; String?<br /><br />&nbsp; user User?
    @relation(fields: [userId], references: [id])<br /><br />&nbsp; createdAt
    DateTime @default(now())<br /><br />&nbsp; @@index([userId])<br />&nbsp;
    @@index([resource])<br />&nbsp; @@index([resourceId])<br />&nbsp;
    @@index([createdAt])<br />}<br /><br />---<br /><br />52. COMPLETE PROJECT
    TREE<br /><br />Use this structure.<br /><br />hospital-management-system/<br />│<br />├──
    app/<br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp; ├── assets/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; └── css/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └──
    <a href="http://main.css">main.css</a><br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp;
    ├── components/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; │<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── ui/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://AppButton.vue">AppButton.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├── <a href="http://AppCard.vue">AppCard.vue</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://AppModal.vue">AppModal.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://AppTable.vue">AppTable.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://AppEmptyState.vue">AppEmptyState.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://AppLoading.vue">AppLoading.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │&nbsp;&nbsp; └──
    <a href="http://AppError.vue">AppError.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── public/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://PublicHeader.vue">PublicHeader.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://PublicFooter.vue">PublicFooter.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://HeroSection.vue">HeroSection.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://DepartmentCard.vue">DepartmentCard.vue</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://DoctorCard.vue">DoctorCard.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │&nbsp;&nbsp; └──
    <a href="http://ServiceCard.vue">ServiceCard.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── dashboard/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://DashboardSidebar.vue">DashboardSidebar.vue</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://DashboardHeader.vue">DashboardHeader.vue</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://DashboardStatCard.vue">DashboardStatCard.vue</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://DashboardChart.vue">DashboardChart.vue</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://NotificationCenter.vue">NotificationCenter.vue</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; │&nbsp;&nbsp; └──
    <a href="http://ActivityFeed.vue">ActivityFeed.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; │<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── patient/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── doctor/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── nurse/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── surgery/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    laboratory/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── radiology/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── pharmacy/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── billing/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── admission/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; └── admin/<br />│&nbsp;&nbsp;
    │<br />│&nbsp;&nbsp; ├── composables/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://useAuth.ts">useAuth.ts</a><br />│&nbsp;&nbsp; │&nbsp;&nbsp;
    ├── <a href="http://usePermissions.ts">usePermissions.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://usePatients.ts">usePatients.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://useDoctors.ts">useDoctors.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://useAppointments.ts">useAppointments.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://useMedicalRecords.ts">useMedicalRecords.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://usePrescriptions.ts">usePrescriptions.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://useLaboratory.ts">useLaboratory.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://useRadiology.ts">useRadiology.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://useSurgery.ts">useSurgery.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://usePharmacy.ts">usePharmacy.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://useBilling.ts">useBilling.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://useAdmissions.ts">useAdmissions.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://useNotifications.ts">useNotifications.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; └──
    <a href="http://useDocuments.ts">useDocuments.ts</a><br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp;
    ├── layouts/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://default.vue">default.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://public.vue">public.vue</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── <a href="http://auth.vue">auth.vue</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; └──
    <a href="http://dashboard.vue">dashboard.vue</a><br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp;
    ├── middleware/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://auth.ts">auth.ts</a><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://guest.ts">guest.ts</a><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://permission.ts">permission.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; └── <a href="http://role.ts">role.ts</a><br />│&nbsp;&nbsp;
    │<br />│&nbsp;&nbsp; ├── pages/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://index.vue">index.vue</a><br />│&nbsp;&nbsp; │&nbsp;&nbsp;
    ├── <a href="http://about.vue">about.vue</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://services.vue">services.vue</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── departments/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── doctors/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    appointments/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── auth/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── patient/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── doctor/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── nurse/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── surgeon/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── head-of-surgery/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    laboratory/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── radiology/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── pharmacy/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    reception/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├── billing/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── admin/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; └── management/<br />│&nbsp;&nbsp;
    │<br />│&nbsp;&nbsp; ├── stores/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://auth.ts">auth.ts</a><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://notification.ts">notification.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; └── <a href="http://ui.ts">ui.ts</a><br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp;
    ├── types/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://auth.ts">auth.ts</a><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://patient.ts">patient.ts</a><br />│&nbsp;&nbsp; │&nbsp;&nbsp;
    ├── <a href="http://doctor.ts">doctor.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://appointment.ts">appointment.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://medical-record.ts">medical-record.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://laboratory.ts">laboratory.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://radiology.ts">radiology.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://surgery.ts">surgery.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://pharmacy.ts">pharmacy.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://billing.ts">billing.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; └── <a href="http://api.ts">api.ts</a
    ><br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp; ├── utils/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://dates.ts">dates.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://currency.ts">currency.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://permissions.ts">permissions.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; └── <a href="http://status.ts">status.ts</a
    ><br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp; └── constants/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ├── <a href="http://roles.ts">roles.ts</a
    ><br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──
    <a href="http://permissions.ts">permissions.ts</a
    ><br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──
    <a href="http://statuses.ts">statuses.ts</a
    ><br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └──
    <a href="http://navigation.ts">navigation.ts</a><br />│<br />├── server/<br />│&nbsp;&nbsp;
    │<br />│&nbsp;&nbsp; ├── api/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; └── v1/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── auth/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── patients/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── doctors/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── appointments/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── medical-records/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── prescriptions/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── laboratory/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── radiology/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── surgery/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── pharmacy/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── admissions/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── billing/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── notifications/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── messages/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── admin/<br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp;
    ├── middleware/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://auth.ts">auth.ts</a><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://request-id.ts">request-id.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; └── <a href="http://security.ts">security.ts</a
    ><br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp; ├── authorization/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://authorize.ts">authorize.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://permissions.ts">permissions.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; └── <a href="http://ownership.ts">ownership.ts</a
    ><br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp; ├── services/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://auth.service.ts">auth.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://patient.service.ts">patient.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://appointment.service.ts">appointment.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://medical-record.service.ts">medical-record.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://prescription.service.ts">prescription.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://laboratory.service.ts">laboratory.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://radiology.service.ts">radiology.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://surgery.service.ts">surgery.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://pharmacy.service.ts">pharmacy.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://billing.service.ts">billing.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://admission.service.ts">admission.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://notification.service.ts">notification.service.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; └──
    <a href="http://audit.service.ts">audit.service.ts</a><br />│&nbsp;&nbsp;
    │<br />│&nbsp;&nbsp; ├── repositories/<br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://patient.repository.ts">patient.repository.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://appointment.repository.ts">appointment.repository.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://surgery.repository.ts">surgery.repository.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://laboratory.repository.ts">laboratory.repository.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; └──
    <a href="http://billing.repository.ts">billing.repository.ts</a
    ><br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp; ├── validators/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://auth.ts">auth.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://patient.ts">patient.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://appointment.ts">appointment.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://surgery.ts">surgery.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://laboratory.ts">laboratory.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; └── <a href="http://billing.ts">billing.ts</a
    ><br />│&nbsp;&nbsp; │<br />│&nbsp;&nbsp; ├── utils/<br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; ├── <a href="http://api-response.ts">api-response.ts</a
    ><br />│&nbsp;&nbsp; │&nbsp;&nbsp; ├──
    <a href="http://errors.ts">errors.ts</a><br />│&nbsp;&nbsp; │&nbsp;&nbsp;
    ├── <a href="http://pagination.ts">pagination.ts</a><br />│&nbsp;&nbsp;
    │&nbsp;&nbsp; └── <a href="http://audit.ts">audit.ts</a><br />│&nbsp;&nbsp;
    │<br />│&nbsp;&nbsp; └── database/<br />│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    └── <a href="http://prisma.ts">prisma.ts</a><br />│<br />├── prisma/<br />│&nbsp;&nbsp;
    ├── <a href="http://schema.prisma">schema.prisma</a><br />│&nbsp;&nbsp; ├──
    <a href="http://seed.ts">seed.ts</a><br />│&nbsp;&nbsp; └── migrations/<br />│<br />├──
    tests/<br />│&nbsp;&nbsp; ├── unit/<br />│&nbsp;&nbsp; ├── integration/<br />│&nbsp;&nbsp;
    └── e2e/<br />│<br />├── public/<br />│&nbsp;&nbsp; ├── images/<br />│&nbsp;&nbsp;
    ├── icons/<br />│&nbsp;&nbsp; └──
    <a href="http://favicon.ico">favicon.ico</a><br />│<br />├── .<a
      href="http://env.example"
      >env.example</a
    ><br />├── <a href="http://nuxt.config.ts">nuxt.config.ts</a><br />├──
    <a href="http://package.json">package.json</a><br />├──
    <a href="http://tsconfig.json">tsconfig.json</a><br />└──
    <a href="http://README.md">README.md</a><br /><br />---<br /><br />53. RBAC
    PERMISSION NAMING<br /><br />Use:<br /><br /><a
      href="http://resource.action"
      >resource.action</a
    ><br /><br />Examples:<br /><br /><a href="http://patients.read"
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
    ><br />appointments.check_in<br /><br /><a href="http://prescriptions.read"
      >prescriptions.read</a
    ><br /><a href="http://prescriptions.create">prescriptions.create</a
    ><br /><a href="http://prescriptions.dispense">prescriptions.dispense</a
    ><br /><a href="http://prescriptions.cancel">prescriptions.cancel</a
    ><br /><br /><a href="http://laboratory.read">laboratory.read</a><br /><a
      href="http://laboratory.create"
      >laboratory.create</a
    ><br /><a href="http://laboratory.result">laboratory.result</a><br /><a
      href="http://laboratory.verify"
      >laboratory.verify</a
    ><br /><br /><a href="http://radiology.read">radiology.read</a><br /><a
      href="http://radiology.create"
      >radiology.create</a
    ><br /><a href="http://radiology.report">radiology.report</a><br /><a
      href="http://radiology.verify"
      >radiology.verify</a
    ><br /><br /><a href="http://surgery.read">surgery.read</a><br /><a
      href="http://surgery.create"
      >surgery.create</a
    ><br /><a href="http://surgery.approve">surgery.approve</a><br /><a
      href="http://surgery.schedule"
      >surgery.schedule</a
    ><br /><a href="http://surgery.start">surgery.start</a><br /><a
      href="http://surgery.complete"
      >surgery.complete</a
    ><br /><a href="http://surgery.cancel">surgery.cancel</a><br /><br /><a
      href="http://billing.read"
      >billing.read</a
    ><br /><a href="http://billing.create">billing.create</a><br /><a
      href="http://billing.update"
      >billing.update</a
    ><br /><a href="http://billing.payment">billing.payment</a><br /><a
      href="http://billing.refund"
      >billing.refund</a
    ><br /><br /><a href="http://inventory.read">inventory.read</a><br /><a
      href="http://inventory.create"
      >inventory.create</a
    ><br /><a href="http://inventory.update">inventory.update</a><br /><a
      href="http://inventory.dispense"
      >inventory.dispense</a
    ><br /><br /><a href="http://users.read">users.read</a><br /><a
      href="http://users.create"
      >users.create</a
    ><br /><a href="http://users.update">users.update</a><br /><a
      href="http://users.delete"
      >users.delete</a
    ><br /><br /><a href="http://roles.read">roles.read</a><br /><a
      href="http://roles.create"
      >roles.create</a
    ><br /><a href="http://roles.update">roles.update</a><br /><br /><a
      href="http://audit_logs.read"
      >audit_logs.read</a
    ><br /><br /><a href="http://reports.read">reports.read</a><br /><a
      href="http://reports.export"
      >reports.export</a
    ><br /><br />---<br /><br />54. RBAC MATRIX<br /><br />Patient<br /><br /><a
      href="http://patients.read.own"
      >patients.read.own</a
    ><br /><a href="http://patients.update.own">patients.update.own</a
    ><br /><br /><a href="http://appointments.read.own">appointments.read.own</a
    ><br /><a href="http://appointments.create.own">appointments.create.own</a
    ><br /><a href="http://appointments.cancel.own">appointments.cancel.own</a
    ><br /><br /><a href="http://medical_records.read.own"
      >medical_records.read.own</a
    ><br /><a href="http://prescriptions.read.own">prescriptions.read.own</a
    ><br /><a href="http://laboratory.read.own">laboratory.read.own</a><br /><a
      href="http://radiology.read.own"
      >radiology.read.own</a
    ><br /><br /><a href="http://documents.read.own">documents.read.own</a
    ><br /><a href="http://invoices.read.own">invoices.read.own</a><br /><a
      href="http://payments.create.own"
      >payments.create.own</a
    ><br /><br /><a href="http://notifications.read.own"
      >notifications.read.own</a
    ><br /><a href="http://messages.read.own">messages.read.own</a><br /><a
      href="http://messages.create.own"
      >messages.create.own</a
    ><br /><br />---<br /><br />55. DOCTOR<br /><br /><a
      href="http://patients.read.assigned"
      >patients.read.assigned</a
    ><br /><a href="http://medical_records.read.assigned"
      >medical_records.read.assigned</a
    ><br /><a href="http://medical_records.create">medical_records.create</a
    ><br /><a href="http://medical_records.update">medical_records.update</a
    ><br /><br /><a href="http://appointments.read.assigned"
      >appointments.read.assigned</a
    ><br /><a href="http://appointments.update">appointments.update</a
    ><br /><br /><a href="http://prescriptions.read">prescriptions.read</a
    ><br /><a href="http://prescriptions.create">prescriptions.create</a
    ><br /><a href="http://prescriptions.update">prescriptions.update</a
    ><br /><br /><a href="http://laboratory.read">laboratory.read</a><br /><a
      href="http://laboratory.create"
      >laboratory.create</a
    ><br /><br /><a href="http://radiology.read">radiology.read</a><br /><a
      href="http://radiology.create"
      >radiology.create</a
    ><br /><br /><a href="http://referrals.create">referrals.create</a><br /><a
      href="http://documents.read.clinical"
      >documents.read.clinical</a
    ><br /><a href="http://documents.create.clinical"
      >documents.create.clinical</a
    ><br /><br /><a href="http://notifications.read">notifications.read</a
    ><br /><a href="http://messages.read">messages.read</a><br /><a
      href="http://messages.create"
      >messages.create</a
    ><br /><br />---<br /><br />56. NURSE<br /><br /><a
      href="http://patients.read.assigned"
      >patients.read.assigned</a
    ><br /><br /><a href="http://medical_records.read.assigned"
      >medical_records.read.assigned</a
    ><br /><br /><a href="http://appointments.read">appointments.read</a
    ><br /><br /><a href="http://vitals.read">vitals.read</a><br /><a
      href="http://vitals.create"
      >vitals.create</a
    ><br /><a href="http://vitals.update">vitals.update</a><br /><br /><a
      href="http://nursing_notes.read"
      >nursing_notes.read</a
    ><br /><a href="http://nursing_notes.create">nursing_notes.create</a
    ><br /><a href="http://nursing_notes.update">nursing_notes.update</a
    ><br /><br /><a href="http://medication_tasks.read">medication_tasks.read</a
    ><br /><a href="http://medication_tasks.update">medication_tasks.update</a
    ><br /><br /><a href="http://admissions.read">admissions.read</a><br /><a
      href="http://admissions.update"
      >admissions.update</a
    ><br /><br /><a href="http://notifications.read">notifications.read</a
    ><br /><br />---<br /><br />57. SURGEON<br /><br /><a
      href="http://patients.read.assigned"
      >patients.read.assigned</a
    ><br /><br /><a href="http://medical_records.read.assigned"
      >medical_records.read.assigned</a
    ><br /><a href="http://medical_records.create">medical_records.create</a
    ><br /><a href="http://medical_records.update">medical_records.update</a
    ><br /><br /><a href="http://surgery.read.assigned">surgery.read.assigned</a
    ><br /><a href="http://surgery.create">surgery.create</a><br /><a
      href="http://surgery.update"
      >surgery.update</a
    ><br /><a href="http://surgery.schedule">surgery.schedule</a><br /><br /><a
      href="http://surgery.preop"
      >surgery.preop</a
    ><br /><a href="http://surgery.intraop">surgery.intraop</a><br /><a
      href="http://surgery.postop"
      >surgery.postop</a
    ><br /><br /><a href="http://operating_rooms.read">operating_rooms.read</a
    ><br /><br /><a href="http://prescriptions.create">prescriptions.create</a
    ><br /><br /><a href="http://laboratory.read">laboratory.read</a><br /><a
      href="http://radiology.read"
      >radiology.read</a
    ><br /><br />---<br /><br />58. HEAD OF SURGERY<br /><br /><a
      href="http://surgery.read.department"
      >surgery.read.department</a
    ><br /><a href="http://surgery.create">surgery.create</a><br /><a
      href="http://surgery.update"
      >surgery.update</a
    ><br /><a href="http://surgery.approve">surgery.approve</a><br /><a
      href="http://surgery.reject"
      >surgery.reject</a
    ><br /><a href="http://surgery.schedule">surgery.schedule</a><br /><a
      href="http://surgery.start"
      >surgery.start</a
    ><br /><a href="http://surgery.complete">surgery.complete</a><br /><a
      href="http://surgery.cancel"
      >surgery.cancel</a
    ><br /><br /><a href="http://operating_rooms.read">operating_rooms.read</a
    ><br /><a href="http://operating_rooms.manage">operating_rooms.manage</a
    ><br /><br /><a href="http://surgical_staff.read">surgical_staff.read</a
    ><br /><a href="http://surgical_staff.manage">surgical_staff.manage</a
    ><br /><br /><a href="http://surgery.analytics.read"
      >surgery.analytics.read</a
    ><br /><a href="http://surgery.reports.read">surgery.reports.read</a
    ><br /><a href="http://surgery.reports.export">surgery.reports.export</a
    ><br /><br /><a href="http://patients.read.department"
      >patients.read.department</a
    ><br /><a href="http://medical_records.read.department"
      >medical_records.read.department</a
    ><br /><br />---<br /><br />59. LABORATORY<br /><br /><a
      href="http://laboratory.orders.read"
      >laboratory.orders.read</a
    ><br /><a href="http://laboratory.samples.read">laboratory.samples.read</a
    ><br /><a href="http://laboratory.samples.create"
      >laboratory.samples.create</a
    ><br /><br /><a href="http://laboratory.results.create"
      >laboratory.results.create</a
    ><br /><a href="http://laboratory.results.update"
      >laboratory.results.update</a
    ><br /><a href="http://laboratory.results.verify"
      >laboratory.results.verify</a
    ><br /><br /><a href="http://laboratory.reports.read"
      >laboratory.reports.read</a
    ><br /><a href="http://laboratory.reports.export"
      >laboratory.reports.export</a
    ><br /><br /><a href="http://patients.read.lab">patients.read.lab</a
    ><br /><br />---<br /><br />60. RADIOLOGY<br /><br /><a
      href="http://radiology.orders.read"
      >radiology.orders.read</a
    ><br /><a href="http://radiology.schedule.read">radiology.schedule.read</a
    ><br /><a href="http://radiology.schedule.manage"
      >radiology.schedule.manage</a
    ><br /><br /><a href="http://radiology.reports.create"
      >radiology.reports.create</a
    ><br /><a href="http://radiology.reports.update">radiology.reports.update</a
    ><br /><a href="http://radiology.reports.verify">radiology.reports.verify</a
    ><br /><br /><a href="http://radiology.reports.read"
      >radiology.reports.read</a
    ><br /><br /><a href="http://patients.read.radiology"
      >patients.read.radiology</a
    ><br /><br />---<br /><br />61. PHARMACY<br /><br /><a
      href="http://prescriptions.read"
      >prescriptions.read</a
    ><br /><a href="http://prescriptions.dispense">prescriptions.dispense</a
    ><br /><br /><a href="http://inventory.read">inventory.read</a><br /><a
      href="http://inventory.create"
      >inventory.create</a
    ><br /><a href="http://inventory.update">inventory.update</a><br /><br /><a
      href="http://inventory.dispense"
      >inventory.dispense</a
    ><br /><a href="http://inventory.adjust">inventory.adjust</a><br /><br /><a
      href="http://suppliers.read"
      >suppliers.read</a
    ><br /><a href="http://suppliers.create">suppliers.create</a><br /><a
      href="http://suppliers.update"
      >suppliers.update</a
    ><br /><br /><a href="http://pharmacy.reports.read">pharmacy.reports.read</a
    ><br /><a href="http://pharmacy.reports.export">pharmacy.reports.export</a
    ><br /><br />---<br /><br />62. RECEPTION<br /><br /><a
      href="http://patients.read"
      >patients.read</a
    ><br /><a href="http://patients.create">patients.create</a><br /><a
      href="http://patients.update"
      >patients.update</a
    ><br /><br /><a href="http://appointments.read">appointments.read</a
    ><br /><a href="http://appointments.create">appointments.create</a><br /><a
      href="http://appointments.update"
      >appointments.update</a
    ><br /><a href="http://appointments.cancel">appointments.cancel</a
    ><br />appointments.check_in<br /><br /><a href="http://admissions.read"
      >admissions.read</a
    ><br /><a href="http://admissions.create">admissions.create</a
    ><br /><br /><a href="http://discharges.read">discharges.read</a
    ><br /><br /><a href="http://waiting_room.read">waiting_room.read</a
    ><br /><a href="http://waiting_room.manage">waiting_room.manage</a
    ><br /><br />---<br /><br />63. ACCOUNTANT<br /><br /><a
      href="http://billing.read"
      >billing.read</a
    ><br /><a href="http://billing.create">billing.create</a><br /><a
      href="http://billing.update"
      >billing.update</a
    ><br /><br /><a href="http://billing.payment">billing.payment</a><br /><a
      href="http://billing.refund"
      >billing.refund</a
    ><br /><br /><a href="http://insurance.read">insurance.read</a><br /><a
      href="http://insurance.create"
      >insurance.create</a
    ><br /><a href="http://insurance.update">insurance.update</a><br /><br /><a
      href="http://billing.reports.read"
      >billing.reports.read</a
    ><br /><a href="http://billing.reports.export">billing.reports.export</a
    ><br /><br />---<br /><br />64. HOSPITAL ADMIN<br /><br /><a
      href="http://users.read"
      >users.read</a
    ><br /><a href="http://users.create">users.create</a><br /><a
      href="http://users.update"
      >users.update</a
    ><br /><a href="http://users.delete">users.delete</a><br /><br /><a
      href="http://roles.read"
      >roles.read</a
    ><br /><a href="http://roles.create">roles.create</a><br /><a
      href="http://roles.update"
      >roles.update</a
    ><br /><br /><a href="http://departments.read">departments.read</a><br /><a
      href="http://departments.create"
      >departments.create</a
    ><br /><a href="http://departments.update">departments.update</a
    ><br /><br /><a href="http://patients.read">patients.read</a><br /><a
      href="http://staff.read"
      >staff.read</a
    ><br /><a href="http://staff.create">staff.create</a><br /><a
      href="http://staff.update"
      >staff.update</a
    ><br /><br /><a href="http://appointments.read">appointments.read</a
    ><br /><a href="http://admissions.read">admissions.read</a><br /><a
      href="http://surgery.read"
      >surgery.read</a
    ><br /><br /><a href="http://billing.read">billing.read</a><br /><a
      href="http://reports.read"
      >reports.read</a
    ><br /><a href="http://reports.export">reports.export</a><br /><br /><a
      href="http://audit_logs.read"
      >audit_logs.read</a
    ><br /><a href="http://system_settings.read">system_settings.read</a
    ><br /><a href="http://system_settings.update">system_settings.update</a
    ><br /><br />---<br /><br />65. SUPER ADMIN<br /><br />The Super Admin has
    all system permissions.<br /><br />However:<br /><br />Do not bypass audit
    logging because a user is a Super Admin.<br /><br />Sensitive administrative
    operations must still generate audit records.<br /><br />---<br /><br />66.
    SEED DATA ARCHITECTURE<br /><br />Create:<br /><br />prisma/<br />└──
    seed/<br />&nbsp;&nbsp;&nbsp; ├── <a href="http://index.ts">index.ts</a
    ><br />&nbsp;&nbsp;&nbsp; ├── <a href="http://roles.ts">roles.ts</a
    ><br />&nbsp;&nbsp;&nbsp; ├──
    <a href="http://permissions.ts">permissions.ts</a><br />&nbsp;&nbsp;&nbsp;
    ├── <a href="http://departments.ts">departments.ts</a
    ><br />&nbsp;&nbsp;&nbsp; ├── <a href="http://users.ts">users.ts</a
    ><br />&nbsp;&nbsp;&nbsp; ├── <a href="http://patients.ts">patients.ts</a
    ><br />&nbsp;&nbsp;&nbsp; ├──
    <a href="http://appointments.ts">appointments.ts</a><br />&nbsp;&nbsp;&nbsp;
    ├── <a href="http://medical-records.ts">medical-records.ts</a
    ><br />&nbsp;&nbsp;&nbsp; ├──
    <a href="http://laboratory.ts">laboratory.ts</a><br />&nbsp;&nbsp;&nbsp; ├──
    <a href="http://pharmacy.ts">pharmacy.ts</a><br />&nbsp;&nbsp;&nbsp; ├──
    <a href="http://surgery.ts">surgery.ts</a><br />&nbsp;&nbsp;&nbsp; ├──
    <a href="http://admissions.ts">admissions.ts</a><br />&nbsp;&nbsp;&nbsp; └──
    <a href="http://billing.ts">billing.ts</a><br /><br />---<br /><br />67.
    SEED DEPARTMENTS<br /><br />Create:<br /><br />Emergency Medicine<br />General
    Medicine<br />General Surgery<br />Cardiology<br />Pediatrics<br />Obstetrics
    &amp; Gynecology<br />Orthopedics<br />Neurology<br />Dermatology<br />Ophthalmology<br />Dentistry<br />Radiology<br />Laboratory<br />Pharmacy<br />Physiotherapy<br /><br />---<br /><br />68.
    SEED USERS<br /><br />Create fictional development users.<br /><br />Super
    Admin<br />Hospital Admin<br />Management Executive<br /><br />Head of
    Surgery<br />General Surgeon<br />Orthopedic Surgeon<br />Cardiologist<br />Pediatrician<br />General
    Physician<br /><br />Nurses<br /><br />Laboratory Technicians<br /><br />Radiologists<br /><br />Pharmacists<br /><br />Receptionists<br /><br />Accountants<br /><br />Patients<br /><br />Never
    use real people's information.<br /><br />---<br /><br />69. DEVELOPMENT
    LOGIN ACCOUNTS<br /><br />Use development-only addresses such as:<br /><br /><a
      href="mailto:superadmin@hms.local"
      >superadmin@hms.local</a
    ><br /><a href="mailto:admin@hms.local">admin@hms.local</a><br /><a
      href="mailto:management@hms.local"
      >management@hms.local</a
    ><br /><br /><a href="http://surgery.head">surgery.head</a>@<a
      href="http://hms.local"
      >hms.local</a
    ><br /><a href="mailto:surgeon@hms.local">surgeon@hms.local</a><br /><a
      href="mailto:doctor@hms.local"
      >doctor@hms.local</a
    ><br /><br /><a href="mailto:nurse@hms.local">nurse@hms.local</a
    ><br /><br /><a href="mailto:laboratory@hms.local">laboratory@hms.local</a
    ><br /><a href="mailto:radiology@hms.local">radiology@hms.local</a><br /><a
      href="mailto:pharmacy@hms.local"
      >pharmacy@hms.local</a
    ><br /><br /><a href="mailto:reception@hms.local">reception@hms.local</a
    ><br /><a href="mailto:accountant@hms.local">accountant@hms.local</a
    ><br /><br /><a href="mailto:patient@hms.local">patient@hms.local</a
    ><br /><br />Use one development password generated by the seed script and
    clearly document it as development-only.<br /><br />Never hard-code
    production credentials.<br /><br />---<br /><br />70. SEED SURGERY DATA<br /><br />Create
    fictional cases such as:<br /><br />SC-<a href="tel:0001">0001</a
    ><br />Elective procedure<br />General Surgery<br />Approved<br />Scheduled<br /><br />SC-<a
      href="tel:0002"
      >0002</a
    ><br />Emergency procedure<br />Orthopedics<br />In Progress<br /><br />SC-<a
      href="tel:0003"
      >0003</a
    ><br />Elective procedure<br />General Surgery<br />Under Review<br /><br />Create
    associated:<br /><br />- Surgeons<br />- Surgical staff<br />- Operating
    rooms<br />- Pre-op assessments<br />- Intra-op records<br />- Post-op
    records<br /><br />---<br /><br />71. SEED LAB DATA<br /><br />Create
    fictional tests:<br /><br />CBC<br />Fasting Blood Glucose<br />Lipid
    Profile<br />Liver Function Test<br />Kidney Function Test<br />Urinalysis<br />Malaria
    Test<br />Electrolytes<br /><br />Generate realistic but explicitly
    fictional result values.<br /><br />---<br /><br />72. SEED PHARMACY DATA<br /><br />Create
    fictional medications and inventory.<br /><br />Include:<br /><br />-
    Multiple batches<br />- Different expiry dates<br />- Low-stock medicines<br />-
    Normal-stock medicines<br />- Near-expiry medicines<br /><br />This allows
    the pharmacy dashboard to demonstrate:<br /><br />Low Stock<br />Expiring
    Soon<br />Out of Stock<br />Normal<br /><br />---<br /><br />73. SEED
    BILLING DATA<br /><br />Create:<br /><br />Paid invoices<br />Partially paid
    invoices<br />Unpaid invoices<br />Overdue invoices<br /><br />Create
    payment records for appropriate invoices.<br /><br />---<br /><br />74. SEED
    APPOINTMENTS<br /><br />Create appointments across several dates.<br /><br />Include:<br /><br />Pending<br />Confirmed<br />Checked
    In<br />Completed<br />Cancelled<br />No Show<br /><br />This allows
    dashboard status components to be tested.<br /><br />---<br /><br />75. SEED
    NOTIFICATIONS<br /><br />Create sample notifications:<br /><br />New
    appointment confirmed.<br /><br />Laboratory result is ready.<br /><br />Prescription
    has been dispensed.<br /><br />Surgery approval required.<br /><br />Operating
    room schedule updated.<br /><br />Invoice payment received.<br /><br />Critical
    laboratory result requires review.<br /><br />Use fictional patient data.<br /><br />---<br /><br />76.
    SEED AUDIT LOGS<br /><br />Create sample logs:<br /><br />PATIENT_CREATED<br />APPOINTMENT_CREATED<br />MEDICAL_RECORD_CREATED<br />PRESCRIPTION_CREATED<br />LAB_RESULT_VERIFIED<br />SURGERY_APPROVED<br />SURGERY_SCHEDULED<br />PAYMENT_COMPLETED<br /><br />---<br /><br />77.
    DATABASE TRANSACTION RULES<br /><br />Use database transactions for
    operations involving multiple records.<br /><br />Examples:<br /><br />Pharmacy
    dispensing<br /><br />BEGIN<br />↓<br />Validate prescription<br />↓<br />Validate
    inventory<br />↓<br />Create dispensing transaction<br />↓<br />Decrease
    inventory<br />↓<br />Update prescription item<br />↓<br />Update
    prescription status<br />↓<br />Create audit log<br />↓<br />COMMIT<br /><br />If
    anything fails:<br /><br />ROLLBACK<br /><br />---<br /><br />78. SURGERY
    TRANSACTION<br /><br />When approving/scheduling surgery:<br /><br />BEGIN<br />↓<br />Validate
    permissions<br />↓<br />Validate surgical case<br />↓<br />Validate surgeon
    availability<br />↓<br />Validate operating room availability<br />↓<br />Validate
    required pre-op conditions<br />↓<br />Update surgical case<br />↓<br />Reserve
    operating room<br />↓<br />Create audit log<br />↓<br />Create
    notifications<br />↓<br />COMMIT<br /><br />---<br /><br />79. APPOINTMENT
    TRANSACTION<br /><br />BEGIN<br />↓<br />Check doctor schedule<br />↓<br />Check
    existing appointments<br />↓<br />Check appointment duration<br />↓<br />Create
    appointment<br />↓<br />Create notification<br />↓<br />Create audit log<br />↓<br />COMMIT<br /><br />---<br /><br />80.
    CRITICAL DATABASE RULES<br /><br />Do not allow:<br /><br />- Duplicate
    patient numbers<br />- Duplicate appointment numbers<br />- Duplicate
    invoice numbers<br />- Duplicate prescription numbers<br />- Duplicate
    laboratory order numbers<br />- Duplicate surgical case numbers<br />-
    Duplicate payment references<br />- Duplicate operating room numbers<br />-
    Duplicate bed numbers within a ward<br /><br />Use database-level unique
    constraints.<br /><br />---<br /><br />81. SOFT DELETE POLICY<br /><br />Do
    not blindly use hard deletes.<br /><br />For clinical records, prefer
    immutable/history-preserving behavior.<br /><br />For example:<br /><br />Do
    NOT allow:<br /><br />DELETE medical_record<br /><br />Instead:<br /><br />AMEND<br />VOID<br />ARCHIVE<br /><br />with
    an audit record.<br /><br />User accounts can be deactivated rather than
    physically deleted where appropriate.<br /><br />---<br /><br />82.
    IMMUTABILITY<br /><br />The following records should be treated as
    historical/controlled records:<br /><br />Medical records<br />Laboratory
    results<br />Radiology reports<br />Surgical records<br />Payments<br />Audit
    logs<br />Discharge summaries<br /><br />If correction is necessary:<br /><br />-
    Create amendment<br />- Record who changed it<br />- Record when<br />-
    Preserve previous information where required by policy<br /><br />---<br /><br />83.
    FINAL DATABASE COMMANDS<br /><br />After implementing the schema:<br /><br />npx
    prisma generate<br /><br />Then:<br /><br />npx prisma migrate dev --name
    init<br /><br />Then seed:<br /><br />npx prisma db seed<br /><br />For
    development inspection:<br /><br />npx prisma studio<br /><br />---<br /><br />84.
    FINAL IMPLEMENTATION CHECKLIST<br /><br />Before moving to UI
    implementation, verify:<br /><br />Database<br /><br />- [ ] PostgreSQL
    configured<br />- [ ] Prisma configured<br />- [ ] Schema compiles<br />- [
    ] Migrations work<br />- [ ] Seed works<br />- [ ] Foreign keys work<br />-
    [ ] Unique constraints work<br />- [ ] Indexes added<br />- [ ] Transactions
    implemented<br /><br />Authentication<br /><br />- [ ] Users<br />- [ ]
    Roles<br />- [ ] Permissions<br />- [ ] User-role relationships<br />- [ ]
    Role-permission relationships<br />- [ ] Session management<br /><br />Clinical<br /><br />-
    [ ] Patients<br />- [ ] Medical records<br />- [ ] Diagnoses<br />- [ ]
    Allergies<br />- [ ] Vitals<br />- [ ] Appointments<br />- [ ]
    Prescriptions<br />- [ ] Laboratory<br />- [ ] Radiology<br /><br />Surgery<br /><br />-
    [ ] Surgical cases<br />- [ ] Surgical staff<br />- [ ] Operating rooms<br />-
    [ ] Pre-op<br />- [ ] Intra-op<br />- [ ] Post-op<br />- [ ] Scheduling<br />-
    [ ] Approval<br /><br />Hospital Operations<br /><br />- [ ] Wards<br />- [
    ] Beds<br />- [ ] Admissions<br />- [ ] Discharges<br /><br />Finance<br /><br />-
    [ ] Invoices<br />- [ ] Invoice items<br />- [ ] Payments<br />- [ ]
    Insurance architecture<br /><br />Pharmacy<br /><br />- [ ] Medications<br />-
    [ ] Inventory<br />- [ ] Transactions<br />- [ ] Dispensing<br /><br />Security<br /><br />-
    [ ] RBAC<br />- [ ] Resource ownership<br />- [ ] Audit logs<br />- [ ]
    Private document access<br />- [ ] Server-side authorization<br />- [ ]
    Sensitive data protection<br /><br />---<br /><br />85. FINAL
    ARCHITECTURE<br /><br />The completed application should follow this
    architecture:<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ┌───────────────────────┐<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp; PUBLIC WEBSITE&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    └───────────┬───────────┘<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ┌───────────────────────┐<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp; AUTHENTICATION&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    └───────────┬───────────┘<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ┌───────────────────────┐<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    RBAC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    └───────────┬───────────┘<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ┌──────────────────┼──────────────────┐<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PATIENT
    PORTAL&nbsp;&nbsp;&nbsp;&nbsp; CLINICAL PORTALS&nbsp;&nbsp;&nbsp; ADMIN
    PORTALS<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ┌─────────┼─────────┐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Doctor&nbsp;&nbsp;&nbsp;
    Nurse&nbsp;&nbsp;&nbsp; Surgery&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Head of Surgery&nbsp; │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    └──────────────────┬───────────────────┘<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    NITRO REST API<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ┌───────────┴───────────┐<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    SERVICE LAYER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    AUTHORIZATION<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    REPOSITORY LAYER<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    PRISMA<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    │<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ▼<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    POSTGRESQL<br /><br />The key principle is:<br /><br />The UI is only one
    layer. The real HMS logic lives in the API, service, authorization, and
    database layers.<br /><br />Build each module against this architecture
    rather than creating isolated dashboard pages.
  </body>