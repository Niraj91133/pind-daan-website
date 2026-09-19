export interface SewaRequestItem {
  id: string;
  customerName: string;
  mobile: string;
  whatsapp: string;
  city: string;
  gotra?: string;
  sewaId: string;
  sewaTitle: string;
  preferredDate: string;
  peopleCount: number;
  assistanceOptions: string[];
  notes?: string;
  status: 'REQUEST RECEIVED' | 'COORDINATOR CONTACT' | 'DETAILS CONFIRMED' | 'PANDIT ASSIGNED' | 'TRAVEL READY' | 'SEWA DAY' | 'COMPLETED';
  assignedPandit?: string;
  hotelAssigned?: string;
  createdAt: string;
}

const STORAGE_KEY = 'pind_daan_sewa_requests_v2';

export const INITIAL_MOCK_REQUESTS: SewaRequestItem[] = [
  {
    id: 'PDS-884920',
    customerName: 'Shri Rajesh Sharma',
    mobile: '9199342604',
    whatsapp: '9199342604',
    city: 'Patna, Bihar',
    gotra: 'Kashyap',
    sewaId: '1-day-pind-daan',
    sewaTitle: '1 Din Mein Pind Daan Sewa',
    preferredDate: '2026-10-05',
    peopleCount: 4,
    assistanceOptions: ['Pickup Assistance', 'Hotel Assistance', 'Senior Assistance'],
    notes: 'Aging parents with us, need minimum walking guidance near Vishnupad.',
    status: 'PANDIT ASSIGNED',
    assignedPandit: 'Pandit Ramakant Jha Shastri',
    hotelAssigned: 'Hotel Vishnupad Heritage (Confirmed)',
    createdAt: '2026-09-15 10:30 AM'
  },
  {
    id: 'PDS-942103',
    customerName: 'Smt. Sunita Mukhopadhyay',
    mobile: '9123456789',
    whatsapp: '9123456789',
    city: 'Kolkata, WB',
    gotra: 'Vatsa',
    sewaId: '3-day-pind-daan',
    sewaTitle: '3 Din Ki Purna Gaya Ji Sewa',
    preferredDate: '2026-10-12',
    peopleCount: 6,
    assistanceOptions: ['Hotel Assistance', 'Local Transport', 'Pandit Guidance'],
    notes: 'Bengali ritual paddhati preferred.',
    status: 'COORDINATOR CONTACT',
    assignedPandit: 'Acharya Shambhu Nath Giri',
    createdAt: '2026-09-16 02:15 PM'
  },
  {
    id: 'PDS-773192',
    customerName: 'Amitabh Roy (NRI)',
    mobile: '+1 408 555 0192',
    whatsapp: '+1 408 555 0192',
    city: 'California, USA',
    gotra: 'Sandilya',
    sewaId: '1-day-pind-daan',
    sewaTitle: 'Parivaar / NRI Care Sewa',
    preferredDate: '2026-11-01',
    peopleCount: 2,
    assistanceOptions: ['Pickup Assistance', 'Senior Assistance'],
    notes: 'Parents traveling from Delhi to Gaya directly.',
    status: 'REQUEST RECEIVED',
    createdAt: '2026-09-17 08:45 AM'
  }
];

export function getStoredRequests(): SewaRequestItem[] {
  if (typeof window === 'undefined') return INITIAL_MOCK_REQUESTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw || raw.trim() === '') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MOCK_REQUESTS));
      return INITIAL_MOCK_REQUESTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_MOCK_REQUESTS;
  } catch (e) {
    return INITIAL_MOCK_REQUESTS;
  }
}

export function saveNewRequest(requestData: Omit<SewaRequestItem, 'id' | 'createdAt' | 'status'>): SewaRequestItem {
  const current = getStoredRequests();
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  const newReq: SewaRequestItem = {
    ...requestData,
    id: `PDS-${randomNum}`,
    status: 'REQUEST RECEIVED',
    createdAt: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
  };
  const updated = [newReq, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return newReq;
}

export function updateRequestStatus(id: string, newStatus: SewaRequestItem['status'], assignedPandit?: string, hotelAssigned?: string): SewaRequestItem[] {
  const current = getStoredRequests();
  const updated = current.map(r => {
    if (r.id === id) {
      return {
        ...r,
        status: newStatus,
        assignedPandit: assignedPandit !== undefined ? assignedPandit : r.assignedPandit,
        hotelAssigned: hotelAssigned !== undefined ? hotelAssigned : r.hotelAssigned,
      };
    }
    return r;
  });
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return updated;
}
