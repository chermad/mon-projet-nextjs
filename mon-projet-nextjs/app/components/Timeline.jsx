// app/components/Timeline.jsx
export default function Timeline({ items = [] }) {
  return (
    <ol className="border-l border-slate-200 dark:border-slate-700 ml-4 pl-6">
      {items.map((it, idx) => (
        <li key={idx} className="mb-6 relative">
          <span className="absolute -left-4 top-0 bg-indigo-600 w-3 h-3 rounded-full"></span>
          <time className="text-sm text-slate-500">{it.year}</time>
          <h4 className="text-md font-semibold mt-1">{it.title}</h4>
          <p className="text-sm text-slate-600 mt-1">{it.description}</p>
        </li>
      ))}
    </ol>
  );
}
