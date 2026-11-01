import { FinancialSummary, Resident, Transaction, AuditLog, WhatsAppNotification, Role, OrganizationOfficer } from '../types';

export function formatRupiah(nominal: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(nominal);
}

export function formatDateIndo(dateStr: string): string {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

export function formatDateTimeIndo(dateStr: string): string {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export async function getSummary(): Promise<{ summary: FinancialSummary; settings: any; officers: OrganizationOfficer[] }> {
  const res = await fetch('/api/summary');
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Gagal memuat ringkasan kas');
  return { summary: json.summary, settings: json.settings, officers: json.officers || [] };
}

export async function getResidents(params?: { group?: string; status?: string; search?: string }): Promise<Resident[]> {
  const query = new URLSearchParams();
  if (params?.group) query.append('group', params.group);
  if (params?.status) query.append('status', params.status);
  if (params?.search) query.append('search', params.search);

  const res = await fetch(`/api/residents?${query.toString()}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Gagal memuat daftar warga');
  return json.data;
}

export async function getResidentById(id: string): Promise<Resident> {
  const res = await fetch(`/api/residents/${id}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Warga tidak ditemukan');
  return json.data;
}

export async function updateResident(id: string, updates: Partial<Resident>): Promise<Resident> {
  const res = await fetch(`/api/residents/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Gagal memperbarui data warga');
  return json.data;
}

export async function updateResidentMonthStatus(
  id: string,
  month: string,
  status: string,
  amount: number = 100000
): Promise<Resident> {
  const res = await fetch(`/api/residents/${id}/month-status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ month, status, amount })
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Gagal memperbarui status bulan iuran');
  return json.data;
}


export async function getTransactions(): Promise<Transaction[]> {
  const res = await fetch('/api/transactions');
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Gagal memuat transaksi');
  return json.data;
}

export async function login(payload: {
  role: Role;
  blok?: string;
  pin?: string;
  password?: string;
}): Promise<any> {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Login gagal');
  return json.user;
}

export async function submitDigitalPayment(payload: {
  residentId: string;
  months: string[];
  amount: number;
  method: string;
  actorName: string;
}): Promise<{ transaction: Transaction; resident: Resident; notification: WhatsAppNotification }> {
  const res = await fetch('/api/payments/pay', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Pembayaran gagal');
  return json.data;
}

export async function submitExpense(payload: {
  kategori: string;
  nominal: number;
  keterangan: string;
  penanggungJawab: string;
}): Promise<Transaction> {
  const res = await fetch('/api/transactions/expense', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Pencatatan pengeluaran gagal');
  return json.data;
}

export async function sendBillingReminder(residentId?: string): Promise<{ count: number; notifications: WhatsAppNotification[] }> {
  const res = await fetch('/api/notifications/broadcast-reminder', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ residentId })
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Gagal mengirim pengingat WhatsApp');
  return json.data;
}

export async function getNotifications(): Promise<WhatsAppNotification[]> {
  const res = await fetch('/api/notifications');
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Gagal memuat notifikasi');
  return json.data;
}

export async function getAuditLogs(): Promise<AuditLog[]> {
  const res = await fetch('/api/audit-logs');
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Gagal memuat audit log');
  return json.data;
}

export async function resetDatabase(): Promise<void> {
  const res = await fetch('/api/db/reset', { method: 'POST' });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Gagal mereset database');
}
