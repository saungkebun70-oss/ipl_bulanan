/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
import { MobileHeader } from './components/MobileHeader';
import { DashboardOverview } from './components/DashboardOverview';
import { DatabaseWarga } from './components/DatabaseWarga';
import { ResidentDirectory } from './components/ResidentDirectory';
import { WargaPortal } from './components/WargaPortal';
import { BendaharaAdmin } from './components/BendaharaAdmin';
import { KetuaAdmin } from './components/KetuaAdmin';
import { AccountSwitcherModal } from './components/AccountSwitcherModal';
import { PaymentModal } from './components/PaymentModal';
import { DigitalReceiptModal } from './components/DigitalReceiptModal';
import { WhatsAppLogModal } from './components/WhatsAppLogModal';
import { AuditTrailModal } from './components/AuditTrailModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { Resident, Transaction, AuditLog, WhatsAppNotification, FinancialSummary, Role, OrganizationOfficer } from './types';
import { getSummary, getResidents, getTransactions, getAuditLogs, getNotifications } from './lib/api';
import { testFirestoreConnection } from './lib/firebase';
import { Building2, Shield, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'residents' | 'warga-portal' | 'admin'>('overview');
  
  // Current active user session
  const [currentUser, setCurrentUser] = useState<{
    role: Role;
    name: string;
    title: string;
    blok?: string;
    residentId?: string;
    phone?: string;
    resident?: Resident;
  }>({
    role: 'WARGA',
    residentId: 'res-a-01',
    name: 'Bpk. Hendra Gunawan',
    title: 'Warga Blok A-01',
    blok: 'A-01',
    phone: '081289123456'
  });

  // Data states
  const [summary, setSummary] = useState<FinancialSummary | null>(null);
  const [residents, setResidents] = useState<Resident[]>([]);
  const [officers, setOfficers] = useState<OrganizationOfficer[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [notifications, setNotifications] = useState<WhatsAppNotification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Modals
  const [isSwitchAccountOpen, setIsSwitchAccountOpen] = useState(false);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [payTargetResident, setPayTargetResident] = useState<Resident | null>(null);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [selectedTxForReceipt, setSelectedTxForReceipt] = useState<Transaction | null>(null);
  const [isWhatsAppLogsOpen, setIsWhatsAppLogsOpen] = useState(false);
  const [isAuditLogsOpen, setIsAuditLogsOpen] = useState(false);
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);

  // Admin subview toggle (Bendahara vs Ketua)
  const [adminView, setAdminView] = useState<'BENDAHARA' | 'KETUA'>('BENDAHARA');

  const loadAllData = async () => {
    try {
      const [sumRes, resRes, txRes, logsRes, notifRes] = await Promise.all([
        getSummary(),
        getResidents(),
        getTransactions(),
        getAuditLogs(),
        getNotifications()
      ]);

      setSummary(sumRes.summary);
      setResidents(resRes);
      setOfficers(sumRes.officers || []);
      setTransactions(txRes);
      setAuditLogs(logsRes);
      setNotifications(notifRes);

      // Keep current resident object updated
      if (currentUser.role === 'WARGA' && currentUser.residentId) {
        const updatedRes = resRes.find(r => r.id === currentUser.residentId);
        if (updatedRes) {
          setCurrentUser(prev => ({
            ...prev,
            name: updatedRes.nama,
            blok: updatedRes.blok,
            resident: updatedRes
          }));
        }
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
    testFirestoreConnection();
  }, []);

  const handleSelectUser = (user: any) => {
    setCurrentUser(user);
    if (user.role === 'WARGA') {
      setActiveTab('warga-portal');
    } else if (user.role === 'BENDAHARA') {
      setAdminView('BENDAHARA');
      setActiveTab('admin');
    } else if (user.role === 'KETUA') {
      setAdminView('KETUA');
      setActiveTab('admin');
    }
  };

  const handleOpenPayForResident = (resident: Resident) => {
    setPayTargetResident(resident);
    setIsPayModalOpen(true);
  };

  const handleOpenReceipt = (tx: Transaction) => {
    setSelectedTxForReceipt(tx);
    setIsReceiptOpen(true);
  };

  const handlePaymentSuccess = () => {
    loadAllData();
  };

  const activeResident = residents.find(r => r.id === currentUser.residentId) || null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col lg:flex-row font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Desktop Aesthetic Sidebar (Sticky on Left) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentUser={currentUser}
        totalWarga={residents.length}
        totalUnpaid={summary?.totalWargaBelumBayar || 0}
        waNotifCount={notifications.length}
        onOpenSwitchAccount={() => setIsSwitchAccountOpen(true)}
        onOpenPayModal={() => {
          setPayTargetResident(activeResident);
          setIsPayModalOpen(true);
        }}
        onOpenWhatsAppLogs={() => setIsWhatsAppLogsOpen(true)}
        onOpenAuditLogs={() => setIsAuditLogsOpen(true)}
        onOpenArchitecture={() => setIsArchitectureOpen(true)}
      />

      {/* Main Viewport Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile & Tablet Header */}
        <MobileHeader
          currentUser={currentUser}
          waNotifCount={notifications.length}
          onOpenSwitchAccount={() => setIsSwitchAccountOpen(true)}
          onOpenWhatsAppLogs={() => setIsWhatsAppLogsOpen(true)}
          onOpenAuditLogs={() => setIsAuditLogsOpen(true)}
          onOpenArchitecture={() => setIsArchitectureOpen(true)}
        />

        {/* Main Content Area - with pb-24 for mobile/tablet dock clearance */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-6 pb-24 lg:pb-8">
          {isLoading ? (
            <div className="py-24 text-center">
              <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm font-semibold text-slate-700">Memuat Buku Kas Saung Kebun...</p>
              <p className="text-xs text-slate-400 mt-1">Menghubungkan ke database server real-time</p>
            </div>
          ) : (
            <>
              {activeTab === 'overview' && (
                <DashboardOverview
                  summary={summary}
                  transactions={transactions}
                  residents={residents}
                  officers={officers}
                  onOpenReceipt={handleOpenReceipt}
                  onOpenPayModal={() => {
                    setPayTargetResident(activeResident);
                    setIsPayModalOpen(true);
                  }}
                  onOpenAddExpense={() => {
                    setAdminView('BENDAHARA');
                    setActiveTab('admin');
                  }}
                  isBendaharaOrKetua={currentUser.role === 'BENDAHARA' || currentUser.role === 'KETUA'}
                />
              )}

              {activeTab === 'residents' && (
                <DatabaseWarga
                  residents={residents}
                  onSelectResident={(res) => {
                    setCurrentUser({
                      role: 'WARGA',
                      residentId: res.id,
                      name: res.nama,
                      blok: res.blok,
                      title: `Warga Blok ${res.blok}`,
                      phone: res.noWhatsapp,
                      resident: res
                    });
                    setActiveTab('warga-portal');
                  }}
                  onPayForResident={handleOpenPayForResident}
                  onResidentUpdated={loadAllData}
                />
              )}

              {activeTab === 'warga-portal' && (
                <WargaPortal
                  currentResident={activeResident || residents.find(r => r.blok === 'B05/21') || residents[0]}
                  residents={residents}
                  transactions={transactions}
                  onSelectResident={(res) => {
                    setCurrentUser({
                      role: 'WARGA',
                      residentId: res.id,
                      name: res.nama,
                      blok: res.blok,
                      title: `Warga Blok ${res.blok}`,
                      phone: res.noWhatsapp,
                      resident: res
                    });
                  }}
                  onOpenPayModal={handleOpenPayForResident}
                  onOpenReceipt={handleOpenReceipt}
                  onOpenSwitchAccount={() => setIsSwitchAccountOpen(true)}
                />
              )}

              {activeTab === 'admin' && (
                <div className="space-y-4">
                  {/* Admin Subview Switcher */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 bg-white rounded-2xl border border-slate-200/90 gap-2">
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                      <button
                        onClick={() => setAdminView('BENDAHARA')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[40px] ${
                          adminView === 'BENDAHARA'
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        💼 Panel Bendahara (Pembukuan)
                      </button>
                      <button
                        onClick={() => setAdminView('KETUA')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[40px] ${
                          adminView === 'KETUA'
                            ? 'bg-purple-600 text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        👔 Panel Ketua (Supervisi)
                      </button>
                    </div>

                    <span className="text-[11px] text-slate-500 mr-2 hidden md:block">
                      Akses Khusus Pengurus Perumahan Saung Kebun
                    </span>
                  </div>

                  {adminView === 'BENDAHARA' ? (
                    <BendaharaAdmin
                      residents={residents}
                      transactions={transactions}
                      onOpenPayForResident={handleOpenPayForResident}
                      onRefreshData={loadAllData}
                    />
                  ) : (
                    <KetuaAdmin
                      summary={summary}
                      residents={residents}
                      transactions={transactions}
                      auditLogs={auditLogs}
                      onRefreshData={loadAllData}
                    />
                  )}
                </div>
              )}
            </>
          )}
        </main>

        {/* Desktop Footer (Hidden on mobile/tablet to avoid cluttering bottom thumb space) */}
        <footer className="hidden lg:block bg-white border-t border-slate-200/80 mt-auto no-print">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-slate-700">Perumahan Saung Kebun · Paguyuban Warga</span>
              <span>·</span>
              <span>Sistem Transparansi Iuran IPL Mandiri</span>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <span>115 Akun Warga Terdaftar</span>
              <span>·</span>
              <span>WhatsApp Notifikasi Otomatis</span>
              <span>·</span>
              <span className="text-emerald-700 font-medium">100% Bebas Biaya Server</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile & Tablet Fixed Bottom Navigation Dock */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPayModal={() => {
          setPayTargetResident(activeResident);
          setIsPayModalOpen(true);
        }}
        userRole={currentUser.role}
        unpaidCount={summary?.totalWargaBelumBayar || 0}
      />

      {/* Global Modals */}
      <AccountSwitcherModal
        isOpen={isSwitchAccountOpen}
        onClose={() => setIsSwitchAccountOpen(false)}
        residents={residents}
        currentRole={currentUser.role}
        currentResidentId={currentUser.residentId}
        onSelectUser={handleSelectUser}
      />

      <PaymentModal
        isOpen={isPayModalOpen}
        onClose={() => setIsPayModalOpen(false)}
        resident={payTargetResident}
        residents={residents}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <DigitalReceiptModal
        isOpen={isReceiptOpen}
        onClose={() => setIsReceiptOpen(false)}
        transaction={selectedTxForReceipt}
        resident={residents.find(r => r.id === selectedTxForReceipt?.wargaId) || null}
      />

      <WhatsAppLogModal
        isOpen={isWhatsAppLogsOpen}
        onClose={() => setIsWhatsAppLogsOpen(false)}
        notifications={notifications}
      />

      <AuditTrailModal
        isOpen={isAuditLogsOpen}
        onClose={() => setIsAuditLogsOpen(false)}
        logs={auditLogs}
      />

      <ArchitectureModal
        isOpen={isArchitectureOpen}
        onClose={() => setIsArchitectureOpen(false)}
        residents={residents}
        onTriggerWebhookSuccess={loadAllData}
      />
    </div>
  );
}
