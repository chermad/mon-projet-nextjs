// app/components/ValueCard.jsx
export default function ValueCard({ icon, title, children }) {
  return (
    <div className="bg-white dark:bg-slate-800 border rounded-lg p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4 mb-3">
        <div className="text-2xl">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{children}</p>
    </div>
  );
}
