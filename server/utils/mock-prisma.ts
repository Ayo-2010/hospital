// Mock Prisma Client for Development
// Provides in-memory storage when real database is unavailable

interface MockData {
  users: Map<string, any>;
  patients: Map<string, any>;
  appointments: Map<string, any>;
  doctors: Map<string, any>;
  roles: Map<string, any>;
  userRoles: Map<string, any>;
  departments: Map<string, any>;
}

const data: MockData = {
  users: new Map(),
  patients: new Map(),
  appointments: new Map(),
  doctors: new Map(),
  roles: new Map(),
  userRoles: new Map(),
  departments: new Map(),
};

// Initialize with default roles
function initRoles() {
  const roles = [
    { id: '1', name: 'SUPER_ADMIN', description: 'Super Administrator' },
    { id: '2', name: 'HOSPITAL_ADMIN', description: 'Hospital Administrator' },
    { id: '3', name: 'DOCTOR', description: 'Doctor' },
    { id: '4', name: 'NURSE', description: 'Nurse' },
    { id: '5', name: 'PATIENT', description: 'Patient' },
    { id: '6', name: 'RECEPTIONIST', description: 'Receptionist' },
    { id: '7', name: 'PHARMACIST', description: 'Pharmacist' },
    { id: '8', name: 'LAB_TECHNICIAN', description: 'Lab Technician' },
  ];
  roles.forEach(r => data.roles.set(r.name, r));
}

function initDepartments() {
  const depts = [
    { id: '1', name: 'Cardiology', slug: 'cardiology', description: 'Heart and cardiovascular care', status: 'ACTIVE' },
    { id: '2', name: 'General Medicine', slug: 'general-medicine', description: 'Primary and internal medicine', status: 'ACTIVE' },
    { id: '3', name: 'Pediatrics', slug: 'pediatrics', description: 'Children healthcare', status: 'ACTIVE' },
    { id: '4', name: 'Obstetrics & Gynecology', slug: 'obstetrics-gynecology', description: 'Women health and maternity', status: 'ACTIVE' },
    { id: '5', name: 'Surgery', slug: 'surgery', description: 'General and specialized surgery', status: 'ACTIVE' },
    { id: '6', name: 'Orthopedics', slug: 'orthopedics', description: 'Bone, joint, and muscle care', status: 'ACTIVE' },
    { id: '7', name: 'Neurology', slug: 'neurology', description: 'Brain and nervous system', status: 'ACTIVE' },
    { id: '8', name: 'Dermatology', slug: 'dermatology', description: 'Skin care and treatment', status: 'ACTIVE' },
    { id: '9', name: 'Emergency Medicine', slug: 'emergency-medicine', description: '24/7 emergency services', status: 'ACTIVE' },
  ];
  depts.forEach(d => data.departments.set(d.id, d));
}

function initDoctors() {
  const doctors = [
    { id: '1', staffId: 'STAFF-1', departmentId: '1', specialization: 'Cardiology', subSpecialization: 'Interventional Cardiology', bio: 'Expert in cardiovascular medicine with 15 years experience.', yearsExperience: 15, consultationFee: 150, isAvailable: true },
    { id: '2', staffId: 'STAFF-2', departmentId: '7', specialization: 'Neurology', subSpecialization: 'Neurological Disorders', bio: 'Specialist in neurological disorders and brain health.', yearsExperience: 12, consultationFee: 180, isAvailable: true },
    { id: '3', staffId: 'STAFF-3', departmentId: '3', specialization: 'Pediatrics', subSpecialization: 'Child Development', bio: 'Dedicated to children health and development.', yearsExperience: 10, consultationFee: 120, isAvailable: true },
  ];
  doctors.forEach(d => data.doctors.set(d.id, d));
}

initRoles();
initDepartments();
initDoctors();

function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

function createMockModel<T extends { id: string }>(store: Map<string, T>) {
  return {
    findUnique: async ({ where }: { where: { id: string } | { email: string } }) => {
      if ('id' in where) return store.get(where.id) || null;
      if ('email' in where) return Array.from(store.values()).find(u => u.email === where.email) || null;
      return null;
    },
    findMany: async ({ where = {}, take, skip = 0, orderBy, include }: any = {}) => {
      let results = Array.from(store.values());
      
      // Simple where filtering
      if (where.OR) {
        results = results.filter(item => 
          where.OR.some((condition: any) => {
            const key = Object.keys(condition)[0];
            const value = condition[key];
            if (value.contains) {
              return String(item[key] || '').toLowerCase().includes(value.contains.toLowerCase());
            }
            return item[key] === value;
          })
        );
      } else if (where) {
        Object.entries(where).forEach(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
            // Handle { in: [...] }
            if ('in' in value) {
              results = results.filter(item => (value as any).in.includes(item[key]));
            }
          } else {
            results = results.filter(item => item[key] === value);
          }
        });
      }
      
      if (orderBy) {
        const key = Object.keys(orderBy)[0];
        const dir = orderBy[key];
        results.sort((a, b) => dir === 'asc' ? 
          (a[key] > b[key] ? 1 : -1) : (a[key] < b[key] ? 1 : -1));
      }
      
      if (skip) results = results.slice(skip);
      if (take) results = results.slice(0, take);
      
      return results;
    },
    findFirst: async ({ where }: any) => {
      const results = await this.findMany({ where, take: 1 });
      return results[0] || null;
    },
    count: async ({ where = {} }: any) => {
      const results = await this.findMany({ where });
      return results.length;
    },
    create: async ({ data: itemData }: { data: Partial<T> }) => {
      const id = generateId();
      const newItem = { id, ...itemData, createdAt: new Date(), updatedAt: new Date() } as T;
      store.set(id, newItem);
      return newItem;
    },
    update: async ({ where, data: itemData }: { where: { id: string }, data: Partial<T> }) => {
      const existing = store.get(where.id);
      if (!existing) throw new Error('Not found');
      const updated = { ...existing, ...itemData, updatedAt: new Date() };
      store.set(where.id, updated);
      return updated;
    },
    delete: async ({ where }: { where: { id: string } }) => {
      const existing = store.get(where.id);
      if (!existing) throw new Error('Not found');
      store.delete(where.id);
      return existing;
    },
    // Include is not fully implemented - returns the item as-is
  };
}

export const mockPrisma = {
  user: createMockModel(data.users),
  patient: createMockModel(data.patients),
  appointment: createMockModel(data.appointments),
  doctor: createMockModel(data.doctors),
  role: createMockModel(data.roles),
  userRole: createMockModel(data.userRoles),
  department: createMockModel(data.departments),
  
  // Add missing models
  staff: createMockModel(new Map()),
  medicalRecord: createMockModel(new Map()),
  vitalSign: createMockModel(new Map()),
  allergy: createMockModel(new Map()),
  diagnosis: createMockModel(new Map()),
  prescription: createMockModel(new Map()),
  prescriptionItem: createMockModel(new Map()),
  medication: createMockModel(new Map()),
  laboratoryTest: createMockModel(new Map()),
  laboratoryOrder: createMockModel(new Map()),
  laboratoryOrderItem: createMockModel(new Map()),
  laboratorySample: createMockModel(new Map()),
  laboratoryResult: createMockModel(new Map()),
  radiologyOrder: createMockModel(new Map()),
  radiologyReport: createMockModel(new Map()),
  surgicalCase: createMockModel(new Map()),
  surgicalStaff: createMockModel(new Map()),
  operatingRoom: createMockModel(new Map()),
  preOperativeAssessment: createMockModel(new Map()),
  intraOperativeRecord: createMockModel(new Map()),
  postOperativeRecord: createMockModel(new Map()),
  ward: createMockModel(new Map()),
  bed: createMockModel(new Map()),
  admission: createMockModel(new Map()),
  discharge: createMockModel(new Map()),
  invoice: createMockModel(new Map()),
  invoiceItem: createMockModel(new Map()),
  payment: createMockModel(new Map()),
  pharmacyInventory: createMockModel(new Map()),
  pharmacyTransaction: createMockModel(new Map()),
  notification: createMockModel(new Map()),
  conversation: createMockModel(new Map()),
  conversationParticipant: createMockModel(new Map()),
  message: createMockModel(new Map()),
  document: createMockModel(new Map()),
  auditLog: createMockModel(new Map()),
  emergencyContact: createMockModel(new Map()),
  
  $connect: async () => {},
  $disconnect: async () => {},
  $on: () => {},
};

export type MockPrismaClient = typeof mockPrisma;

// Export a function to get the appropriate client
export async function getPrismaClient() {
  // Try to use real Prisma if available, otherwise use mock
  try {
    const { PrismaClient } = await import('@prisma/client');
    return new PrismaClient();
  } catch {
    return mockPrisma;
  }
}

// For now, always use mock in development
export const prisma = mockPrisma;