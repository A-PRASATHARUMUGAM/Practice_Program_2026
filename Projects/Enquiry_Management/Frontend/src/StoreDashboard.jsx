import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  IndianRupee,
  Users,
  Store as StoreIcon,
  Tag,
  Receipt,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";    

/* ============================================================================
   MOCK DATA LAYER
   ----------------------------------------------------------------------------
   Everything below this line, down to "API LAYER", is sample JSON standing
   in for your database. When the backend is ready, delete this block and the
   functions in the API LAYER section, and replace them with real fetch calls
   that return the same shapes. Nothing in the components below needs to
   change — they only ever talk to the functions in the API LAYER.
   ============================================================================ */

const SAMPLE_STORES = [
  { id: "ST001", name: "Store 1", location: "Chennai" },
  { id: "ST002", name: "Store 2", location: "Bengaluru" },
  { id: "ST003", name: "Store 3", location: "Hyderabad" },
];

const SAMPLE_TRANSACTIONS = [
  { id: "TXN001", storeId: "ST001", customer: "John",   discount: 10, finalAmount: 900,  status: "Completed" },
  { id: "TXN002", storeId: "ST002", customer: "David",  discount: 5,  finalAmount: 1425, status: "Pending" },
  { id: "TXN003", storeId: "ST003", customer: "Sarah",  discount: 15, finalAmount: 850,  status: "Completed" },
  { id: "TXN004", storeId: "ST001", customer: "Priya",  discount: 0,  finalAmount: 2100, status: "Completed" },
  { id: "TXN005", storeId: "ST001", customer: "Arjun",  discount: 20, finalAmount: 640,  status: "Failed" },
  { id: "TXN006", storeId: "ST002", customer: "Meera",  discount: 10, finalAmount: 1180, status: "Completed" },
  { id: "TXN007", storeId: "ST003", customer: "Kabir",  discount: 5,  finalAmount: 990,  status: "Pending" },
  { id: "TXN008", storeId: "ST002", customer: "Fatima", discount: 0,  finalAmount: 3050, status: "Completed" },
  { id: "TXN009", storeId: "ST003", customer: "Ravi",   discount: 12, finalAmount: 770,  status: "Completed" },
  { id: "TXN010", storeId: "ST001", customer: "Anita",  discount: 8,  finalAmount: 1340, status: "Pending" },
];

// Per-store user & offer counts — in a real backend these would live in their
// own tables. Kept separate from transactions since they're not derivable
// from transaction rows alone.
const SAMPLE_STORE_STATS = {
  ST001: { users: 128, offers: 6 },
  ST002: { users: 94,  offers: 4 },
  ST003: { users: 152, offers: 9 },
};

const SIMULATED_LATENCY_MS = 350;

/* ============================================================================
   API LAYER
   ----------------------------------------------------------------------------
   This is the seam you'll swap for real endpoints later. Every function
   already returns a Promise with the exact shape the UI expects, so once a
   backend exists you can rewrite the bodies (e.g. `return fetch('/api/...')
   .then(r => r.json())`) without touching a single component below.
   ============================================================================ */

const api = {
  // GET /api/stores
  getStores: () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(SAMPLE_STORES), SIMULATED_LATENCY_MS)
    ),

  // GET /api/transactions?storeId=optional
  getTransactions: (storeId = null) =>
    new Promise((resolve) =>
      setTimeout(() => {
        const rows = storeId
          ? SAMPLE_TRANSACTIONS.filter((t) => t.storeId === storeId)
          : SAMPLE_TRANSACTIONS;
        resolve(rows);
      }, SIMULATED_LATENCY_MS)
    ),

  // GET /api/summary?storeId=optional
  // Aggregates revenue/users/stores/offers/transactions for either the whole
  // business or a single store. On a real backend this would likely be one
  // dedicated endpoint that does the aggregation server-side.
  getSummary: (storeId = null) =>
    new Promise((resolve) =>
      setTimeout(() => {
        if (storeId) {
          const storeTxns = SAMPLE_TRANSACTIONS.filter((t) => t.storeId === storeId);
          const stats = SAMPLE_STORE_STATS[storeId] || { users: 0, offers: 0 };
          resolve({
            totalRevenue: storeTxns.reduce((sum, t) => sum + t.finalAmount, 0),
            totalUsers: stats.users,
            totalStores: 1,
            totalOffers: stats.offers,
            totalTransactions: storeTxns.length,
          });
        } else {
          resolve({
            totalRevenue: SAMPLE_TRANSACTIONS.reduce((sum, t) => sum + t.finalAmount, 0),
            totalUsers: Object.values(SAMPLE_STORE_STATS).reduce((s, v) => s + v.users, 0),
            totalStores: SAMPLE_STORES.length,
            totalOffers: Object.values(SAMPLE_STORE_STATS).reduce((s, v) => s + v.offers, 0),
            totalTransactions: SAMPLE_TRANSACTIONS.length,
          });
        }
      }, SIMULATED_LATENCY_MS)
    ),
};

/* ============================================================================
   PRESENTATION HELPERS
   ============================================================================ */

const formatINR = (n) => `₹${n.toLocaleString("en-IN")}`;

const STATUS_STYLES = {
  Completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
  Failed: "bg-rose-50 text-rose-700 ring-rose-600/20",
};

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${
        STATUS_STYLES[status] || "bg-slate-100 text-slate-700 ring-slate-600/20"
      }`}
    >
      {status}
    </span>
  );
}

function SummaryCard({ icon: Icon, label, value, accent, active, clickable, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!clickable}
      className={`text-left rounded-xl border bg-white p-5 shadow-sm transition-all
        ${clickable ? "hover:shadow-md hover:-translate-y-0.5 cursor-pointer" : "cursor-default"}
        ${active ? "border-teal-600 ring-2 ring-teal-600/20" : "border-slate-200"}
      `}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">{label}</span>
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${accent}`}>
          <Icon size={18} className="text-white" strokeWidth={2} />
        </span>
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </div>
    </button>
  );
}

/* ============================================================================
   MAIN DASHBOARD
   ============================================================================ */

export default function StoreDashboard() {
  const [stores, setStores] = useState([]);
  const [summary, setSummary] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [selectedStoreId, setSelectedStoreId] = useState(null); // null = whole business
  const [panel, setPanel] = useState(null); // null | 'stores' | 'transactions'
  const [loadingSummary, setLoadingSummary] = useState(true);
  const [loadingPanel, setLoadingPanel] = useState(false);

  // Stores only need to be fetched once.
  useEffect(() => {
    api.getStores().then(setStores);
  }, []);

  // Re-fetch summary whenever the selected store changes.
  useEffect(() => {
    setLoadingSummary(true);
    api.getSummary(selectedStoreId).then((data) => {
      setSummary(data);
      setLoadingSummary(false);
    });
  }, [selectedStoreId]);

  // When a store is selected, default the panel to that store's transactions.
  const loadTransactionsPanel = useCallback((storeId) => {
    setLoadingPanel(true);
    setPanel("transactions");
    api.getTransactions(storeId).then((rows) => {
      setTransactions(rows);
      setLoadingPanel(false);
    });
  }, []);

  const handleTotalStoresClick = () => {
    setPanel("stores");
  };

  const handleStoreRowClick = (storeId) => {
    setSelectedStoreId(storeId);
    loadTransactionsPanel(storeId);
  };

  const handleReset = () => {
    setSelectedStoreId(null);
    setPanel(null);
  };

  const selectedStore = useMemo(
    () => stores.find((s) => s.id === selectedStoreId) || null,
    [stores, selectedStoreId]
  );

  const scopeLabel = selectedStore ? selectedStore.name : "All Stores";

  const cards = summary
    ? [
        { key: "revenue", icon: IndianRupee, label: "Total Revenue", value: formatINR(summary.totalRevenue), accent: "bg-teal-600" },
        { key: "users", icon: Users, label: "Total Users", value: summary.totalUsers.toLocaleString("en-IN"), accent: "bg-indigo-600" },
        { key: "stores", icon: StoreIcon, label: "Total Stores", value: summary.totalStores, accent: "bg-amber-600", clickable: !selectedStoreId },
        { key: "offers", icon: Tag, label: "Total Offers", value: summary.totalOffers, accent: "bg-fuchsia-600" },
        { key: "transactions", icon: Receipt, label: "Total Transactions", value: summary.totalTransactions, accent: "bg-slate-700" },
      ]
    : [];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className={selectedStore ? "cursor-pointer hover:text-teal-700" : ""} onClick={selectedStore ? handleReset : undefined}>
                Dashboard
              </span>  
              {selectedStore && (
                <>
                  <ChevronRight size={14} />
                  <span className="font-medium text-slate-700">{selectedStore.name}</span>
                </>
              )}
            </div>
            <h1 className="mt-1 text-2xl font-semibold text-slate-900">{scopeLabel} Overview</h1>
          </div>
          {selectedStore && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50"
            >
              <ArrowLeft size={15} />
              All Stores
            </button>
          )}
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {loadingSummary
            ? Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-[104px] animate-pulse rounded-xl border border-slate-200 bg-white" />
              ))
            : cards.map((c) => (
                <SummaryCard
                  key={c.key}
                  icon={c.icon}
                  label={c.label}
                  value={c.value}
                  accent={c.accent}
                  clickable={c.clickable}
                  active={c.key === "stores" && panel === "stores"}
                  onClick={c.key === "stores" ? handleTotalStoresClick : undefined}
                />
              ))}
        </div>

        {/* Drill-down panel */}
        {panel && (
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <h2 className="text-base font-semibold text-slate-900">
                {panel === "stores" ? "All Stores" : `Transactions — ${selectedStore?.name}`}
              </h2>
              <p className="text-sm text-slate-500">
                {panel === "stores"
                  ? "Click a store to see its individual dashboard."
                  : "Filtered to this store only."}
              </p>
            </div>

            {panel === "stores" && (
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                    <th className="px-5 py-3">Store ID</th>
                    <th className="px-5 py-3">Store Name</th>
                    <th className="px-5 py-3">Location</th>
                    <th className="px-5 py-3 text-right">Users</th>
                    <th className="px-5 py-3 text-right">Offers</th>
                    <th className="px-5 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {stores.map((s) => (
                    <tr
                      key={s.id}
                      onClick={() => handleStoreRowClick(s.id)}
                      className="cursor-pointer hover:bg-teal-50/60"
                    >
                      <td className="px-5 py-3 text-slate-500">{s.id}</td>
                      <td className="px-5 py-3 font-medium text-slate-900">{s.name}</td>
                      <td className="px-5 py-3 text-slate-600">{s.location}</td>
                      <td className="px-5 py-3 text-right text-slate-600">
                        {(SAMPLE_STORE_STATS[s.id]?.users ?? "—").toLocaleString?.("en-IN") ?? "—"}
                      </td>
                      <td className="px-5 py-3 text-right text-slate-600">
                        {SAMPLE_STORE_STATS[s.id]?.offers ?? "—"}
                      </td>
                      <td className="px-5 py-3 text-right text-teal-700">
                        View <ChevronRight size={14} className="inline" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {panel === "transactions" &&
              (loadingPanel ? (
                <div className="space-y-2 p-5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-8 animate-pulse rounded bg-slate-100" />
                  ))}
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                      <th className="px-5 py-3">Transaction ID</th>
                      <th className="px-5 py-3">Store</th>
                      <th className="px-5 py-3">Customer</th>
                      <th className="px-5 py-3 text-right">Discount</th>
                      <th className="px-5 py-3 text-right">Final Amount</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {transactions.map((t) => (
                      <tr key={t.id} className="hover:bg-slate-50/60">
                        <td className="px-5 py-3 font-medium text-slate-900">{t.id}</td>
                        <td className="px-5 py-3 text-slate-600">{selectedStore?.name}</td>
                        <td className="px-5 py-3 text-slate-600">{t.customer}</td>
                        <td className="px-5 py-3 text-right text-slate-600">{t.discount}%</td>
                        <td className="px-5 py-3 text-right font-medium text-slate-900">
                          {formatINR(t.finalAmount)}
                        </td>
                        <td className="px-5 py-3">
                          <StatusBadge status={t.status} />
                        </td>
                      </tr>
                    ))}
                    {transactions.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-5 py-6 text-center text-slate-400">
                          No transactions for this store yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
