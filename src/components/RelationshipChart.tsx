import { useState, useRef, useEffect } from 'react';
import { Relationship, BaziChart } from '../utils/relationships';
import xiangyun from '../assets/xiangyun.png';

interface RelationshipChartProps {
  relationships: Relationship[];
  userBazi: BaziChart;
  currentBazi: BaziChart;
  userSolarDate?: { y: number, m: number, d: number, h: number };
  gender: 'male' | 'female';
  dayun: string;
  onGenderChange: (g: 'male' | 'female') => void;
  onPillarChange: (chart: 'user' | 'dayun' | 'current', pillar: string, value: string) => void;
}

const HEAVEN_COLS = ['year', 'month', 'day', 'hour'] as const;
const HUMAN_COLS = ['luck', 'year', 'month', 'day', 'hour'] as const;

const COL_LABELS = { luck: '大运', year: '年', month: '月', day: '日', hour: '时' };

export const RelationshipChart = ({ relationships, userBazi, currentBazi, gender, dayun, onGenderChange, onPillarChange }: RelationshipChartProps) => {
  const [activeRel, setActiveRel] = useState<Relationship | null>(null);
  const [editing, setEditing] = useState<{ chart: 'user' | 'dayun' | 'current', col: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const isHighlighted = (chartType: 'user' | 'current' | 'dayun', pillar: string, part: 'gan' | 'zhi') => {
    if (!activeRel || !activeRel.refs) return false;
    return activeRel.refs.some(ref => 
      ref.chart === chartType && ref.pillar === pillar && ref.part === part
    );
  };

  const toggleRel = (rel: Relationship) => {
    if (activeRel === rel) {
      setActiveRel(null);
    } else {
      setActiveRel(rel);
    }
  };

  const handleDoubleClick = (chart: 'user' | 'dayun' | 'current', col: string) => {
    setEditing({ chart, col });
  };

  const handleEditComplete = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!editing) return;
    const value = (e.target as HTMLInputElement).value.trim();
    // Only save if Enter is pressed (explicit commit)
    if (value) {
      onPillarChange(editing.chart, editing.col, value);
    }
    setEditing(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditComplete(e);
    }
    if (e.key === 'Escape') {
      setEditing(null); // Cancel
    }
  };

  const handleBlur = () => {
    setEditing(null); // Cancel on blur
  };

  // Helper to render a pillar (Gan + Zhi)
  const renderPillar = (chartType: 'user' | 'current' | 'dayun', col: string, ganZhiValue: string, isInteractive: boolean) => {
    const isEditingThis = editing?.chart === chartType && editing?.col === col;
    
    // Split for display
    const gan = ganZhiValue?.[0] || '-';
    const zhi = ganZhiValue?.[1] || '-';

    if (isEditingThis) {
      return (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/90 backdrop-blur rounded-xl">
           <input
             ref={inputRef}
             type="text"
             defaultValue={ganZhiValue}
             className="w-full h-full text-center text-3xl md:text-4xl font-serif text-stone-900 dark:text-stone-100 bg-transparent outline-none p-0 selection:bg-red-100 selection:text-red-900 dark:selection:bg-red-900 dark:selection:text-red-100"
             onFocus={(e) => e.target.select()}
             onBlur={handleBlur}
             onKeyDown={handleKeyDown}
             autoFocus
           />
        </div>
      );
    }

    return (
      <div 
        className="w-full flex flex-col items-center cursor-pointer relative"
        onDoubleClick={() => {
          if (isInteractive) {
            handleDoubleClick(chartType as any, col);
          }
        }}
      >
        {/* Gan */}
        <div className={`relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-3xl md:text-4xl font-serif text-stone-800 dark:text-stone-100 rounded-xl transition-all duration-300 ${
          isHighlighted(chartType, col, 'gan') 
            ? 'border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)] z-10 bg-white dark:bg-stone-800' 
            : 'border-transparent'
        }`}>
          {gan}
        </div>
        {/* Zhi */}
        <div className={`relative w-14 h-14 md:w-20 md:h-20 mt-4 flex items-center justify-center text-3xl md:text-4xl font-serif text-stone-800 dark:text-stone-100 rounded-xl transition-all duration-300 ${
          isHighlighted(chartType, col, 'zhi') 
            ? 'border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)] z-10 bg-white dark:bg-stone-800' 
            : 'border-transparent'
        }`}>
          {zhi}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white/40 dark:bg-stone-900/60 backdrop-blur-sm border border-stone-200/60 dark:border-stone-800 rounded-2xl overflow-hidden mt-20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-colors duration-300">
      
      {/* LEFT PANEL: The Chart (70%) */}
      <div className="flex-[7] p-12 md:p-20 border-b lg:border-b-0 lg:border-r border-stone-100 dark:border-stone-800 flex flex-col">
        
        {/* Heaven Section (Current - 4 Pillars) */}
        <div className="flex flex-col items-center" style={{ paddingTop: '3rem' }}>
          <div className="flex items-center gap-4 mb-16">
            <img 
              src={xiangyun} 
              alt="" 
              style={{ width: '64px', height: 'auto', opacity: 0.8 }} 
              draggable={false}
              className="select-none pointer-events-none"
            />
            <span className="font-serif font-bold text-stone-600 dark:text-stone-400 tracking-[0.2em]" style={{ fontSize: '30px' }}>天</span>
            <img 
              src={xiangyun} 
              alt="" 
              style={{ width: '64px', height: 'auto', opacity: 0.8, transform: 'scaleX(-1)' }} 
              draggable={false}
              className="select-none pointer-events-none"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-6 md:gap-12 max-w-xl w-full justify-items-center">
            {HEAVEN_COLS.map(col => (
              <div key={`heaven-${col}`} className="flex flex-col items-center relative w-14 md:w-20">
                <span className="text-[10px] text-stone-300 dark:text-stone-500 mb-4 font-serif uppercase tracking-widest">{COL_LABELS[col]}</span>
                {renderPillar('current', col, currentBazi[col as keyof BaziChart] || '', true)}
              </div>
            ))}
          </div>
        </div>

        {/* SPACER: Explicit vertical separation */}
        <div className="h-32 md:h-60 w-full"></div>

        {/* Human Section (User + DaYun - 5 Pillars) */}
        <div className="flex flex-col items-center" style={{ paddingBottom: '3rem' }}>
          <div className="flex items-center gap-4 mb-16">
            <img 
              src={xiangyun} 
              alt="" 
              style={{ width: '64px', height: 'auto', opacity: 0.8 }} 
              draggable={false}
              className="select-none pointer-events-none"
            />
            <span className="font-serif font-bold text-stone-600 dark:text-stone-400 tracking-[0.2em]" style={{ fontSize: '30px' }}>人</span>
            <img 
              src={xiangyun} 
              alt="" 
              style={{ width: '64px', height: 'auto', opacity: 0.8, transform: 'scaleX(-1)' }} 
              draggable={false}
              className="select-none pointer-events-none"
            />
          </div>
          
          <div className="grid grid-cols-5 gap-6 md:gap-12 max-w-2xl w-full justify-items-center">
            {HUMAN_COLS.map(col => {
              const label = col === 'luck' ? (gender === 'male' ? '男大运' : '女大运') : COL_LABELS[col];
              const isLuck = col === 'luck';
              
              return (
                <div key={`human-${col}`} className="flex flex-col items-center relative w-14 md:w-20">
                  {isLuck ? (
                    <button 
                      onClick={() => onGenderChange(gender === 'male' ? 'female' : 'male')}
                      className="text-[10px] mb-4 font-serif uppercase tracking-widest transition-colors text-red-800 dark:text-red-400 font-bold hover:text-red-600 dark:hover:text-red-300 cursor-pointer bg-transparent border-none p-0 outline-none focus:ring-0"
                    >
                      {label}
                    </button>
                  ) : (
                    <span className="text-[10px] text-stone-300 dark:text-stone-500 mb-4 font-serif uppercase tracking-widest">
                      {label}
                    </span>
                  )}
                  
                  {isLuck 
                    ? renderPillar('dayun', 'luck', dayun, true)
                    : renderPillar('user', col, userBazi[col as keyof BaziChart] || '', true)
                  }
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Analysis (30%) */}
      <div className="flex-[3] bg-stone-50/30 dark:bg-stone-900/30 p-10 flex flex-col min-h-[500px]">
        {relationships.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-stone-300 dark:text-stone-600 italic font-serif text-xs tracking-widest">
            无明显刑冲合害
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {relationships.map((rel, idx) => {
              const isActive = activeRel === rel;
              return (
                <button
                  key={idx}
                  onClick={() => toggleRel(rel)}
                  className={`text-left py-3 px-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                    isActive 
                      ? 'bg-white dark:bg-stone-800 text-red-800 dark:text-red-400 shadow-sm border border-red-100 dark:border-red-900' 
                      : 'hover:bg-white/60 dark:hover:bg-stone-800/60 text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 border border-transparent hover:border-stone-100 dark:hover:border-stone-700'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-red-500 dark:bg-red-600 scale-125' : 'bg-stone-200 dark:bg-stone-700 group-hover:bg-stone-400 dark:group-hover:bg-stone-500'
                  }`}></div>
                  <span className={`font-serif text-xl tracking-wide ${isActive ? 'font-bold' : 'font-medium'}`}>
                    {rel.name}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};

