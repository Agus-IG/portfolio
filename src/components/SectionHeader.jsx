export default function SectionHeader({ index, label, title }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{index} / {label}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
