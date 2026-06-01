import { useState, useRef, useEffect } from 'react';

export default function SearchBar({ value, onChange, onClear }) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  // 允许键盘快捷搜索
  useEffect(() => {
    function handleKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className={`search-bar ${focused ? 'focused' : ''}`}>
      <span className="search-icon">🔍</span>
      <input
        ref={inputRef}
        type="text"
        placeholder="搜索饮品、品牌..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {value && (
        <button className="search-clear" onClick={onClear} aria-label="清除搜索">
          ✕
        </button>
      )}
      <kbd className="search-shortcut">Ctrl+K</kbd>
    </div>
  );
}
