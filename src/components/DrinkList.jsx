import DrinkCard from './DrinkCard';

export default function DrinkList({ drinks, brandMap, query, activeBrand, activeCategory }) {
  if (drinks.length === 0) {
    const hasFilter = query || activeBrand !== 'all' || activeCategory !== '全部';
    return (
      <div className="empty-state">
        <span className="empty-icon">{hasFilter ? '😔' : '🧋'}</span>
        <p className="empty-text">
          {hasFilter ? '没有找到匹配的饮品' : '加载中...'}
        </p>
        {hasFilter && (
          <p className="empty-hint">试试换一个品牌、品类，或调整搜索关键词</p>
        )}
      </div>
    );
  }

  return (
    <div className="drink-list">
      <p className="result-count">
        找到 <strong>{drinks.length}</strong> 款饮品
        {query && <span> — 搜索「{query}」</span>}
      </p>
      {drinks.map((item) => {
        const brand = brandMap[item.brandId];
        return (
          <DrinkCard
            key={item.drink.id}
            drink={item.drink}
            brandLogo={brand.logo}
            brandColor={brand.color}
          />
        );
      })}
    </div>
  );
}
