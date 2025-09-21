// app/components/TeamCard.jsx
export default function TeamCard({ img = "/team1.jpg", name, role }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:translate-y-[-4px] transition-transform">
      <img src={img} alt={name} className="w-24 h-24 rounded-full object-cover mb-3" />
      <strong className="block">{name}</strong>
      <span className="text-sm text-slate-500">{role}</span>
    </div>
  );
}
