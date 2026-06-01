export default function BrandFilter({ brands, activeBrand, onSelect }) {
  return (
    <div className="brand-filter">
      <button
        className={`brand-chip ${activeBrand === 'all' ? 'active' : ''}`}
        onClick={() => onSelect('all')}
      >
        <span className="chip-icon">🏪</span>
        <span className="chip-text">全部品牌</span>
      </button>
      {brands.map((brand) => (
        <button
          key={brand.id}
          className={`brand-chip ${activeBrand === brand.id ? 'active' : ''}`}
          onClick={() => onSelect(brand.id)}
          style={activeBrand === brand.id ? { '--chip-color': brand.color } : {}}
        >
          <span className="chip-icon">{brand.logo}</span>
          <span className="chip-text">{brand.name}</span>
        </button>
      ))}
    </div>
  );
}
