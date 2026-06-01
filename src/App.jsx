import { useState, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import BrandFilter from './components/BrandFilter';
import CategoryFilter from './components/CategoryFilter';
import DrinkList from './components/DrinkList';
import drinksData from './data/drinks';
import './App.css';

/** 热量估算说明横幅 */
function DisclaimerBanner() {
  return (
    <div className="disclaimer-banner">
      <span className="disclaimer-icon">⚠️</span>
      <div className="disclaimer-text">
        <strong>热量数据均为估算值，仅供参考</strong>
        <span>实际热量因糖量、配料、杯型不同会有较大浮动</span>
      </div>
    </div>
  );
}

/** 降热量小贴士 */
function TipsCard() {
  return (
    <details className="tips-card">
      <summary className="tips-summary">
        <span>💡 点单时如何降低热量？</span>
        <span className="tips-arrow">▶</span>
      </summary>
      <ul className="tips-list">
        <li><strong>糖度选三分或无糖</strong> — 减 80~150 kcal</li>
        <li><strong>去掉奶盖/芝士</strong> — 减 70~120 kcal</li>
        <li><strong>少加小料（珍珠/椰果/芋圆）</strong> — 减 50~100 kcal</li>
        <li><strong>选鲜奶替代奶精</strong> — 热量相近但更健康</li>
        <li><strong>中杯代替大杯</strong> — 减 30%~50% 热量</li>
        <li><strong>纯茶/美式几乎零卡</strong> — 最安心的选择</li>
      </ul>
    </details>
  );
}

export default function App() {
  const [query, setQuery] = useState('');
  const [activeBrand, setActiveBrand] = useState('all');
  const [activeCategory, setActiveCategory] = useState('全部');

  const brandMap = useMemo(() => {
    const map = {};
    drinksData.forEach((b) => (map[b.id] = b));
    return map;
  }, []);

  const filteredDrinks = useMemo(() => {
    const q = query.trim().toLowerCase();
    return drinksData.flatMap((brand) => {
      if (activeBrand !== 'all' && brand.id !== activeBrand) return [];

      return brand.drinks
        .filter((drink) => {
          if (activeCategory !== '全部' && drink.category !== activeCategory) return false;

          if (q) {
            const haystack = [
              drink.name,
              brand.name,
              drink.category,
              ...drink.tags,
              drink.note || '',
              drink.sugar,
            ]
              .join(' ')
              .toLowerCase();
            if (!haystack.includes(q)) return false;
          }

          return true;
        })
        .map((drink) => ({ drink, brandId: brand.id }));
    });
  }, [query, activeBrand, activeCategory]);

  // 按 calMid 从低到高排序
  const sortedDrinks = useMemo(() => {
    return [...filteredDrinks].sort((a, b) => a.drink.calMid - b.drink.calMid);
  }, [filteredDrinks]);

  const totalDrinks = drinksData.reduce((sum, b) => sum + b.drinks.length, 0);

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-top">
          <h1 className="app-title">
            <span className="title-icon">🧋</span>
            热量查询
          </h1>
          <p className="app-subtitle">喝前查一查，热量不超标</p>
        </div>
        <SearchBar
          value={query}
          onChange={setQuery}
          onClear={() => setQuery('')}
        />
      </header>

      {/* 免责声明 */}
      <DisclaimerBanner />

      {/* 品牌筛选 */}
      <section className="filter-section">
        <h2 className="filter-label">品牌</h2>
        <BrandFilter
          brands={drinksData}
          activeBrand={activeBrand}
          onSelect={(id) => {
            setActiveBrand(id);
            setActiveCategory('全部');
          }}
        />
      </section>

      {/* 品类筛选 */}
      <section className="filter-section">
        <h2 className="filter-label">品类</h2>
        <CategoryFilter
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
      </section>

      {/* 数据概览 */}
      {!query && activeBrand === 'all' && activeCategory === '全部' && (
        <div className="summary-bar">
          <span>📊 共收录 <strong>{drinksData.length}</strong> 个品牌 · <strong>{totalDrinks}</strong> 款饮品</span>
        </div>
      )}

      {/* 饮品列表 */}
      <main className="main-content">
        <DrinkList
          drinks={sortedDrinks}
          brandMap={brandMap}
          query={query}
          activeBrand={activeBrand}
          activeCategory={activeCategory}
        />
      </main>

      {/* 降热量小贴士 */}
      <TipsCard />

      {/* Footer */}
      <footer className="app-footer">
        <p>⚠️ 所有热量数据均为行业通用配方估算值，不代表品牌官方信息，仅供参考</p>
        <p>参考：🍚 一碗米饭 ≈ 200 kcal &nbsp;|&nbsp; 🍔 一个汉堡 ≈ 500 kcal</p>
      </footer>
    </div>
  );
}
