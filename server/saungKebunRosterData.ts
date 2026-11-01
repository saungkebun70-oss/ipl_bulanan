import { Resident, MonthKey, MonthlyLedgerItem, MonthPaymentStatus } from '../src/types/index';

export interface RawResidentRow {
  blok: string;
  no: number;
  nama: string;
  months?: Partial<Record<MonthKey, MonthPaymentStatus>>;
}

export const MONTH_KEYS: MonthKey[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'
];

export const MONTH_LABELS: Record<MonthKey, string> = {
  Jan: 'Januari 2026',
  Feb: 'Februari 2026',
  Mar: 'Maret 2026',
  Apr: 'April 2026',
  Mei: 'Mei 2026',
  Jun: 'Juni 2026',
  Jul: 'Juli 2026',
  Agt: 'Agustus 2026',
  Sep: 'September 2026',
  Okt: 'Oktober 2026',
  Nov: 'November 2026',
  Des: 'Desember 2026'
};

// Data mentah sensus & matriks setoran IPL perumahan Saung Kebun
// Aturan:
// - Tarif Iuran: Rp 100.000 / bulan
// - Merah dan putih tanpa nilai = KOSONG
// - Kuning = MENUNGGAK
// - 100.000 = LUNAS
export const RAW_ROSTER_DATA: RawResidentRow[] = [
  // ==========================================
  // 1. BLOK B3 (1 s/d 23)
  // ==========================================
  {
    blok: 'B3', no: 1, nama: 'ASEP SUKARMA',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B3', no: 2, nama: 'SUBHAN HUMAMI',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B3', no: 3, nama: '' }, // Merah KOSONG
  {
    blok: 'B3', no: 4, nama: 'ADITYA PRAYOGA',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B3', no: 5, nama: '' }, // Merah KOSONG
  {
    blok: 'B3', no: 6, nama: 'AFAN',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B3', no: 7, nama: 'DION YULIANA (BP ERLANGGA - KETUA)',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B3', no: 8, nama: 'RAKA',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B3', no: 9, nama: '' }, // Merah KOSONG
  {
    blok: 'B3', no: 10, nama: 'DEVA CAHYONO',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'KOSONG' }
  },
  { blok: 'B3', no: 11, nama: '' }, // Merah KOSONG
  {
    blok: 'B3', no: 12, nama: 'PUGUH DWI',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B3', no: 13, nama: '' }, // Merah KOSONG
  {
    blok: 'B3', no: 14, nama: 'ARDI MAULANA',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B3', no: 15, nama: 'WENDY ROCHIMAT S',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'MENUNGGAK', Jul: 'MENUNGGAK', Agt: 'MENUNGGAK', Sep: 'MENUNGGAK' }
  },
  {
    blok: 'B3', no: 16, nama: 'TRI SEPTIONO',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'MENUNGGAK', Sep: 'MENUNGGAK' }
  },
  { blok: 'B3', no: 17, nama: '' }, // Merah KOSONG
  {
    blok: 'B3', no: 18, nama: 'CASMAT',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B3', no: 19, nama: 'SARMA',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B3', no: 20, nama: 'ARDIANSYAH ZEIN',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B3', no: 21, nama: 'CECEP SUGIANTO',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'MENUNGGAK' }
  },
  {
    blok: 'B3', no: 22, nama: 'DICKY YANDA ALVIANA',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B3', no: 23, nama: 'FAISAL',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },

  // ==========================================
  // 2. BLOK B5 (1 s/d 26) - Seluruhnya Putih/Kosong
  // ==========================================
  { blok: 'B5', no: 1, nama: '' },
  { blok: 'B5', no: 2, nama: '' },
  { blok: 'B5', no: 3, nama: '' },
  { blok: 'B5', no: 4, nama: '' },
  { blok: 'B5', no: 5, nama: '' },
  { blok: 'B5', no: 6, nama: '' },
  { blok: 'B5', no: 7, nama: '' },
  { blok: 'B5', no: 8, nama: '' },
  { blok: 'B5', no: 9, nama: '' },
  { blok: 'B5', no: 10, nama: '' },
  { blok: 'B5', no: 11, nama: '' },
  { blok: 'B5', no: 12, nama: '' },
  { blok: 'B5', no: 13, nama: '' },
  { blok: 'B5', no: 14, nama: '' },
  { blok: 'B5', no: 15, nama: '' },
  { blok: 'B5', no: 16, nama: '' },
  { blok: 'B5', no: 17, nama: '' },
  { blok: 'B5', no: 18, nama: 'DARMA' },
  { blok: 'B5', no: 19, nama: '' },
  { blok: 'B5', no: 20, nama: 'DWI ARDIYANTO' },
  { blok: 'B5', no: 21, nama: 'HARTONO (BP DONI - HUMAS)' },
  { blok: 'B5', no: 22, nama: 'TOMA' },
  { blok: 'B5', no: 23, nama: 'ADITYA' },
  { blok: 'B5', no: 24, nama: 'DEDI WAHYUDI (BP WAHYU - HUMAS)' },
  { blok: 'B5', no: 25, nama: 'SIGIT' },
  { blok: 'B5', no: 26, nama: '' },

  // ==========================================
  // 3. BLOK B6 (1 s/d 23)
  // ==========================================
  { blok: 'B6', no: 1, nama: 'IKBAL' }, // Seluruh baris Merah (KOSONG, Total 0)
  {
    blok: 'B6', no: 2, nama: 'DEFRY',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'MENUNGGAK' }
  },
  {
    blok: 'B6', no: 3, nama: 'BUDYANTO',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B6', no: 4, nama: 'RIDWAN' }, // Merah KOSONG (Total 0)
  {
    blok: 'B6', no: 5, nama: 'ABIDZAR',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B6', no: 6, nama: 'ANGKASA',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B6', no: 7, nama: 'NOVI',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'MENUNGGAK', Sep: 'LUNAS' }
  },
  {
    blok: 'B6', no: 8, nama: 'M JODI RAMADHAN',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B6', no: 9, nama: 'HASMI',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B6', no: 10, nama: 'AJE',
    months: { Feb: 'KOSONG', Mar: 'KOSONG', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'MENUNGGAK' }
  },
  {
    blok: 'B6', no: 11, nama: 'JODI KURNIAWAN',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B6', no: 12, nama: 'RULLY',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B6', no: 13, nama: '' }, // Merah KOSONG
  {
    blok: 'B6', no: 14, nama: 'ADE JUHDI',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B6', no: 15, nama: '' }, // Merah KOSONG
  {
    blok: 'B6', no: 16, nama: 'WIDODO',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B6', no: 17, nama: '' }, // Merah KOSONG
  {
    blok: 'B6', no: 18, nama: 'SUTRISMAN',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B6', no: 19, nama: 'MUHAMMAD SIDIK',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'MENUNGGAK' }
  },
  { blok: 'B6', no: 20, nama: '' }, // KOSONG
  {
    blok: 'B6', no: 21, nama: 'CHOLIL',
    months: {
      Feb: 'LUNAS',
      Mar: 'MENUNGGAK',
      Apr: 'LUNAS',
      Mei: 'MENUNGGAK',
      Jun: 'MENUNGGAK',
      Jul: 'MENUNGGAK',
      Agt: 'LUNAS',
      Sep: 'MENUNGGAK'
    }
  },
  { blok: 'B6', no: 22, nama: '' }, // KOSONG
  {
    blok: 'B6', no: 23, nama: 'MULYONO',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'KOSONG', Sep: 'LUNAS' }
  },

  // ==========================================
  // 4. BLOK B7 (1 s/d 23)
  // ==========================================
  { blok: 'B7', no: 1, nama: '' }, // Merah KOSONG
  { blok: 'B7', no: 2, nama: 'NOVAL' }, // Putih KOSONG
  {
    blok: 'B7', no: 3, nama: 'DEDE NURHIDAYAT',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B7', no: 4, nama: 'DEVI',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'MENUNGGAK', Mei: 'MENUNGGAK', Jun: 'MENUNGGAK', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B7', no: 5, nama: '' }, // Merah KOSONG
  {
    blok: 'B7', no: 6, nama: 'ANDRI',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B7', no: 7, nama: 'BAGAS A',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B7', no: 8, nama: 'CECEP',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'MENUNGGAK', Sep: 'LUNAS' }
  },
  { blok: 'B7', no: 9, nama: '' }, // Merah KOSONG
  {
    blok: 'B7', no: 10, nama: 'AKBAR',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B7', no: 11, nama: 'YUKI',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B7', no: 12, nama: 'ARGA',
    months: { Feb: 'KOSONG', Mar: 'KOSONG', Apr: 'KOSONG', Mei: 'KOSONG', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B7', no: 13, nama: '' }, // KOSONG
  {
    blok: 'B7', no: 14, nama: 'ABDU NAFI',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B7', no: 15, nama: '' }, // Merah KOSONG
  {
    blok: 'B7', no: 16, nama: 'ANDRIANSYAH (BP ANDRI - BENDAHARA)',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B7', no: 17, nama: 'MUTIARA',
    months: { Feb: 'KOSONG', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B7', no: 18, nama: 'MUHAMMAD DAUD SYAH',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'MENUNGGAK', Agt: 'MENUNGGAK', Sep: 'MENUNGGAK' }
  },
  {
    blok: 'B7', no: 19, nama: 'SAMSURI',
    months: { Feb: 'MENUNGGAK', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B7', no: 20, nama: 'RISKY ALVIN NOVIANTO',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B7', no: 21, nama: 'RIZKI NURMANSYAH',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B7', no: 22, nama: '' }, // KOSONG
  {
    blok: 'B7', no: 23, nama: 'SUGIH',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },

  // ==========================================
  // 5. BLOK B8 (1 s/d 23)
  // ==========================================
  {
    blok: 'B8', no: 1, nama: 'CANDRA ARIS SANDI',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B8', no: 2, nama: '' }, // Merah KOSONG
  {
    blok: 'B8', no: 3, nama: 'DICKY',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B8', no: 4, nama: '' }, // Merah KOSONG
  {
    blok: 'B8', no: 5, nama: 'BP IWAN (PEMBINA)',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B8', no: 6, nama: 'BP DENI / DENY (SEKSI OLAH RAGA)',
    months: { Feb: 'LUNAS', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B8', no: 7, nama: 'ANI FATIMAH',
    months: { Feb: 'KOSONG', Mar: 'KOSONG', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  {
    blok: 'B8', no: 8, nama: 'BINTANG',
    months: { Feb: 'KOSONG', Mar: 'LUNAS', Apr: 'LUNAS', Mei: 'LUNAS', Jun: 'LUNAS', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS' }
  },
  { blok: 'B8', no: 9, nama: '' }, // Merah KOSONG
  { blok: 'B8', no: 10, nama: '' }, // Merah KOSONG
  {
    blok: 'B8', no: 11, nama: 'PA HUSNI',
    months: { Feb: 'KOSONG', Mar: 'KOSONG', Apr: 'KOSONG', Mei: 'KOSONG', Jun: 'KOSONG', Jul: 'LUNAS', Agt: 'LUNAS', Sep: 'LUNAS', Okt: 'LUNAS', Nov: 'LUNAS' }
  },
  { blok: 'B8', no: 12, nama: '' },
  { blok: 'B8', no: 13, nama: '' },
  { blok: 'B8', no: 14, nama: '' },
  { blok: 'B8', no: 15, nama: '' },
  { blok: 'B8', no: 16, nama: '' },
  { blok: 'B8', no: 17, nama: '' },
  { blok: 'B8', no: 18, nama: '' },
  { blok: 'B8', no: 19, nama: '' },
  { blok: 'B8', no: 20, nama: '' },
  { blok: 'B8', no: 21, nama: '' },
  { blok: 'B8', no: 22, nama: '' },
  { blok: 'B8', no: 23, nama: '' },

  // ==========================================
  // 6. BLOK B8 TAHAP 2 / CADANGAN (1 s/d 23)
  // Seluruhnya Jan merah, Feb-Des putih kosong
  // ==========================================
  { blok: 'B8-Ext', no: 1, nama: '' },
  { blok: 'B8-Ext', no: 2, nama: '' },
  { blok: 'B8-Ext', no: 3, nama: '' },
  { blok: 'B8-Ext', no: 4, nama: '' },
  { blok: 'B8-Ext', no: 5, nama: '' },
  { blok: 'B8-Ext', no: 6, nama: '' },
  { blok: 'B8-Ext', no: 7, nama: '' },
  { blok: 'B8-Ext', no: 8, nama: '' },
  { blok: 'B8-Ext', no: 9, nama: '' },
  { blok: 'B8-Ext', no: 10, nama: '' },
  { blok: 'B8-Ext', no: 11, nama: '' },
  { blok: 'B8-Ext', no: 12, nama: '' },
  { blok: 'B8-Ext', no: 13, nama: '' },
  { blok: 'B8-Ext', no: 14, nama: '' },
  { blok: 'B8-Ext', no: 15, nama: '' },
  { blok: 'B8-Ext', no: 16, nama: '' },
  { blok: 'B8-Ext', no: 17, nama: '' },
  { blok: 'B8-Ext', no: 18, nama: '' },
  { blok: 'B8-Ext', no: 19, nama: '' },
  { blok: 'B8-Ext', no: 20, nama: '' },
  { blok: 'B8-Ext', no: 21, nama: '' },
  { blok: 'B8-Ext', no: 22, nama: '' },
  { blok: 'B8-Ext', no: 23, nama: '' }
];

export const IPL_TARIFF = 100000; // Rp 100.000 / bulan standar sesuai mandat paguyuban Saung Kebun

// Helper untuk men-generate Resident records lengkap untuk Saung Kebun
export function buildResidentsFromRoster(): Resident[] {
  return RAW_ROSTER_DATA.map((row, index) => {
    const numPadded = row.no < 10 ? `0${row.no}` : `${row.no}`;
    
    // Format Blok: B03/01, B05/21, B06/14, B07/16, B08/05
    let blokNumber = row.blok.replace('B', '');
    if (blokNumber.length === 1 && !isNaN(Number(blokNumber))) {
      blokNumber = `0${blokNumber}`;
    }
    const blokFormatted = row.blok === 'B8-Ext'
      ? `B08-Ext/${numPadded}`
      : `B${blokNumber}/${numPadded}`;

    const isHook = row.no === 1 || row.no === 23 || (row.blok === 'B5' && row.no === 26);
    const hasName = Boolean(row.nama && row.nama.trim().length > 0);

    // Nomor telepon pengurus atau format deterministik
    let phone = '-';
    if (blokFormatted === 'B03/07') phone = '081298765432';
    else if (blokFormatted === 'B07/16') phone = '081287654321';
    else if (blokFormatted === 'B08/05') phone = '081289550805';
    else if (blokFormatted === 'B08/06') phone = '081234567806';
    else if (blokFormatted === 'B05/21') phone = '081234567821';
    else if (blokFormatted === 'B05/24') phone = '081234567824';
    else if (hasName) {
      const suffix = (1000 + (index * 73) % 9000).toString().padStart(4, '0');
      phone = `0812-8800-${suffix}`;
    }

    // Bangun 12 bulan matriks pembayaran
    const monthlyLedger: Record<MonthKey, MonthlyLedgerItem> = {
      Jan: { status: 'KOSONG', amount: 0 }, // Jan adalah MERAH (KOSONG) untuk semua unit per sheet
      Feb: { status: 'KOSONG', amount: 0 },
      Mar: { status: 'KOSONG', amount: 0 },
      Apr: { status: 'KOSONG', amount: 0 },
      Mei: { status: 'KOSONG', amount: 0 },
      Jun: { status: 'KOSONG', amount: 0 },
      Jul: { status: 'KOSONG', amount: 0 },
      Agt: { status: 'KOSONG', amount: 0 },
      Sep: { status: 'KOSONG', amount: 0 },
      Okt: { status: 'BELUM_BAYAR', amount: 0 },
      Nov: { status: 'BELUM_BAYAR', amount: 0 },
      Des: { status: 'BELUM_BAYAR', amount: 0 }
    };

    let totalSetoran = 0;
    const bulanMenunggakList: string[] = [];

    // Jika memiliki data bulan yang terisi
    if (row.months) {
      MONTH_KEYS.forEach(mKey => {
        const rawStatus = row.months?.[mKey];
        if (rawStatus === 'LUNAS') {
          monthlyLedger[mKey] = {
            status: 'LUNAS',
            amount: IPL_TARIFF,
            paidDate: `2026-${(MONTH_KEYS.indexOf(mKey) + 1).toString().padStart(2, '0')}-05`
          };
          totalSetoran += IPL_TARIFF;
        } else if (rawStatus === 'MENUNGGAK') {
          monthlyLedger[mKey] = {
            status: 'MENUNGGAK',
            amount: IPL_TARIFF,
            note: 'Tagihan belum dibayar'
          };
          bulanMenunggakList.push(MONTH_LABELS[mKey]);
        } else if (rawStatus === 'KOSONG') {
          monthlyLedger[mKey] = { status: 'KOSONG', amount: 0 };
        } else {
          // Jika kosong di bulan yang sudah lewat (Feb-Sep), tandai KOSONG atau BELUM_BAYAR
          const idx = MONTH_KEYS.indexOf(mKey);
          if (idx <= 8) { // Jan - Sep
            monthlyLedger[mKey] = { status: 'KOSONG', amount: 0 };
          } else {
            monthlyLedger[mKey] = { status: 'BELUM_BAYAR', amount: 0 };
          }
        }
      });
    } else {
      // Unit tanpa entri bulan (rumah kosong atau kavling belum masuk)
      MONTH_KEYS.forEach(mKey => {
        monthlyLedger[mKey] = { status: 'KOSONG', amount: 0 };
      });
    }

    const totalTunggakan = bulanMenunggakList.length * IPL_TARIFF;

    // Status ringkasan bulan ini (September 2026 periode berjalan sesuai sheet)
    let statusBulanIni: 'Lunas' | 'Belum Bayar' | 'Menunggak' = 'Belum Bayar';
    if (monthlyLedger.Sep.status === 'LUNAS') {
      statusBulanIni = 'Lunas';
    } else if (monthlyLedger.Sep.status === 'MENUNGGAK' || totalTunggakan > 0) {
      statusBulanIni = 'Menunggak';
    } else if (hasName) {
      statusBulanIni = 'Belum Bayar';
    } else {
      statusBulanIni = 'Belum Bayar';
    }

    // Status hunian
    const isOccupied = hasName && (totalSetoran > 0 || bulanMenunggakList.length > 0 || ['B05/21', 'B05/24'].includes(blokFormatted));

    return {
      id: `res-${row.blok.toLowerCase()}-${numPadded}`,
      blok: blokFormatted,
      blokGroup: row.blok,
      nomorRumah: numPadded,
      nama: hasName ? row.nama : '(Belum Tercatat / Kosong)',
      noWhatsapp: phone,
      statusHunian: isOccupied ? 'Dihuni Tetap' : 'Rumah Kosong',
      tipeRumah: isHook ? 'Hook' : 'Standar',
      tagihanBulanan: IPL_TARIFF,
      statusBulanIni,
      bulanMenunggak: bulanMenunggakList,
      totalTunggakan,
      lastPaymentDate: totalSetoran > 0 ? '2026-09-05' : undefined,
      pin: '1234',
      monthlyLedger,
      totalSetoran
    };
  });
}
