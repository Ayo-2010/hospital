import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const roles = await prisma.role.createMany({
    data: [
      { name: 'SUPER_ADMIN', description: 'Full system access' },
      { name: 'HOSPITAL_ADMIN', description: 'Hospital-wide operational access' },
      { name: 'MANAGEMENT', description: 'Executive management access' },
      { name: 'DOCTOR', description: 'Access to assigned patients and clinical information' },
      { name: 'SURGEON', description: 'Access to surgical patients and procedures' },
      { name: 'HEAD_OF_SURGERY', description: 'Access to surgery department operations' },
      { name: 'NURSE', description: 'Access to assigned wards/patients and nursing records' },
      { name: 'LAB_TECHNICIAN', description: 'Access to laboratory orders/results' },
      { name: 'RADIOLOGIST', description: 'Access to imaging orders/reports' },
      { name: 'PHARMACIST', description: 'Access to prescriptions and pharmacy operations' },
      { name: 'RECEPTIONIST', description: 'Appointments and patient registration' },
      { name: 'ACCOUNTANT', description: 'Billing and payments' },
      { name: 'PATIENT', description: 'Only access to own health information' },
    ],
    skipDuplicates: true,
  })

  const permissions = await prisma.permission.createMany({
    data: [
      { name: 'patients.read', resource: 'patients', action: 'read', description: 'View patients' },
      { name: 'patients.create', resource: 'patients', action: 'create', description: 'Create patients' },
      { name: 'patients.update', resource: 'patients', action: 'update', description: 'Update patients' },
      { name: 'patients.delete', resource: 'patients', action: 'delete', description: 'Delete patients' },
      { name: 'appointments.read', resource: 'appointments', action: 'read', description: 'View appointments' },
      { name: 'appointments.create', resource: 'appointments', action: 'create', description: 'Create appointments' },
      { name: 'appointments.update', resource: 'appointments', action: 'update', description: 'Update appointments' },
      { name: 'appointments.cancel', resource: 'appointments', action: 'cancel', description: 'Cancel appointments' },
      { name: 'medical_records.read', resource: 'medical_records', action: 'read', description: 'View medical records' },
      { name: 'medical_records.create', resource: 'medical_records', action: 'create', description: 'Create medical records' },
      { name: 'medical_records.update', resource: 'medical_records', action: 'update', description: 'Update medical records' },
      { name: 'prescriptions.read', resource: 'prescriptions', action: 'read', description: 'View prescriptions' },
      { name: 'prescriptions.create', resource: 'prescriptions', action: 'create', description: 'Create prescriptions' },
      { name: 'prescriptions.dispense', resource: 'prescriptions', action: 'dispense', description: 'Dispense prescriptions' },
      { name: 'laboratory.read', resource: 'laboratory', action: 'read', description: 'View laboratory data' },
      { name: 'laboratory.create', resource: 'laboratory', action: 'create', description: 'Create lab orders' },
      { name: 'laboratory.update', resource: 'laboratory', action: 'update', description: 'Update lab results' },
      { name: 'radiology.read', resource: 'radiology', action: 'read', description: 'View radiology data' },
      { name: 'radiology.create', resource: 'radiology', action: 'create', description: 'Create radiology orders' },
      { name: 'radiology.update', resource: 'radiology', action: 'update', description: 'Update radiology reports' },
      { name: 'surgery.read', resource: 'surgery', action: 'read', description: 'View surgery data' },
      { name: 'surgery.create', resource: 'surgery', action: 'create', description: 'Create surgical cases' },
      { name: 'surgery.approve', resource: 'surgery', action: 'approve', description: 'Approve surgical cases' },
      { name: 'surgery.update', resource: 'surgery', action: 'update', description: 'Update surgical cases' },
      { name: 'surgery.complete', resource: 'surgery', action: 'complete', description: 'Complete surgeries' },
      { name: 'billing.read', resource: 'billing', action: 'read', description: 'View billing data' },
      { name: 'billing.create', resource: 'billing', action: 'create', description: 'Create invoices' },
      { name: 'billing.update', resource: 'billing', action: 'update', description: 'Update invoices' },
      { name: 'users.read', resource: 'users', action: 'read', description: 'View users' },
      { name: 'users.create', resource: 'users', action: 'create', description: 'Create users' },
      { name: 'users.update', resource: 'users', action: 'update', description: 'Update users' },
      { name: 'users.delete', resource: 'users', action: 'delete', description: 'Delete users' },
    ],
    skipDuplicates: true,
  })

  const passwordHash = await bcrypt.hash('password123', 10)

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@hospital.com' },
    update: {},
    create: {
      email: 'admin@hospital.com',
      phone: '+1234567890',
      passwordHash,
      firstName: 'System',
      lastName: 'Administrator',
      status: 'ACTIVE',
      emailVerifiedAt: new Date(),
    },
  })

  const superAdminRole = await prisma.role.findUnique({ where: { name: 'SUPER_ADMIN' } })
  if (superAdminRole) {
    await prisma.userRole.upsert({
      where: { userId_roleId: { userId: adminUser.id, roleId: superAdminRole.id } },
      update: {},
      create: { userId: adminUser.id, roleId: superAdminRole.id },
    })
  }

  console.log('Seed completed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
