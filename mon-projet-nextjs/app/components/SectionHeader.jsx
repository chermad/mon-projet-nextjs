export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <header className="max-w-3xl mx-auto text-center mb-8">
      {eyebrow && <p className="text-sm text-gray-500 mb-2">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{title}</h2>
      {description && (
        <p className="text-base text-slate-600">{description}</p>
      )}
    </header>
  );
}