import { getCalorieLevel, referenceCalories } from '../data/drinks';

/** 热量区间条形图 */
function CalorieBar({ calMin, calMax, calMid }) {
  const maxRef = referenceCalories.hamburger; // 500
  const minPct = Math.min((calMin / maxRef) * 100, 100);
  const maxPct = Math.min((calMax / maxRef) * 100, 100);
  const midPct = Math.min((calMid / maxRef) * 100, 100);
  const level = getCalorieLevel(calMid);

  return (
    <div className="calorie-bar-wrap">
      <div className="calorie-bar-track">
        {/* 区间范围（浅色） */}
        <div
          className="calorie-bar-range"
          style={{
            left: `${minPct}%`,
            width: `${maxPct - minPct}%`,
            background: level.color + '30',
          }}
        />
        {/* 中间估算值（深色短线） */}
        <div
          className="calorie-bar-mid"
          style={{
            left: `${midPct}%`,
            background: level.color,
          }}
        />
      </div>
      <div className="calorie-bar-refs">
        <span className="ref-mark" style={{ left: `${(referenceCalories.rice / maxRef) * 100}%` }}>
          🍚
        </span>
        <span className="ref-mark" style={{ left: `${(referenceCalories.hamburger / maxRef) * 100}%` }}>
          🍔
        </span>
      </div>
    </div>
  );
}

export default function DrinkCard({ drink, brandLogo, brandColor }) {
  const levelInfo = getCalorieLevel(drink.calMid);
  // 宽区间（超过30%）标明不确定性更大
  const range = drink.calMax - drink.calMin;
  const isWideRange = range > drink.calMid * 0.5;

  return (
    <div className="drink-card">
      <div className="drink-card-header">
        <div className="drink-info">
          <span className="drink-brand-logo">{brandLogo}</span>
          <div>
            <h3 className="drink-name">{drink.name}</h3>
            <div className="drink-meta">
              <span className="drink-size">{drink.size}</span>
              <span className="drink-sugar">{drink.sugar}</span>
              {drink.note && <span className="drink-note">{drink.note}</span>}
            </div>
          </div>
        </div>
        <div className="drink-calories" style={{ color: levelInfo.color }}>
          <span className="cal-range">
            {drink.calMin}~{drink.calMax}
          </span>
          <span className="cal-unit">kcal</span>
          {isWideRange && <span className="cal-note">浮动较大</span>}
        </div>
      </div>

      <div className="drink-card-body">
        <div className="drink-tags">
          <span className={`cal-tag ${levelInfo.class}`} style={{ background: levelInfo.color }}>
            {levelInfo.level}
          </span>
          <span className="cat-tag">{drink.category}</span>
          {drink.tags.map((tag, i) => (
            <span key={i} className="info-tag">{tag}</span>
          ))}
        </div>
      </div>

      <CalorieBar calMin={drink.calMin} calMax={drink.calMax} calMid={drink.calMid} />
    </div>
  );
}
