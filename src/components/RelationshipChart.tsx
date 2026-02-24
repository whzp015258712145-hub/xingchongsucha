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
    
    // 验证输入是否为有效的干支
    if (value && value.length === 2) {
      const gan = value[0];
      const zhi = value[1];
      const validGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
      const validZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
      
      if (validGan.includes(gan) && validZhi.includes(zhi)) {
        onPillarChange(editing.chart, editing.col, value);
      }
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
        <div className={`relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-3xl md:text-4xl font-serif rounded-xl transition-all duration-300 ${
          isHighlighted(chartType, col, 'gan') 
            ? 'border-2 shadow-[0_0_20px_rgba(193,122,111,0.3)] z-10' 
            : 'border-transparent'
        }`} style={{ 
          color: '#4a3f2f',
          borderColor: isHighlighted(chartType, col, 'gan') ? '#c17a6f' : 'transparent',
          background: isHighlighted(chartType, col, 'gan') ? '#fefdfb' : 'transparent'
        }}>
          {isEditingThis ? (
            <input
              ref={inputRef}
              type="text"
              defaultValue={ganZhiValue}
              maxLength={2}
              className="w-full h-full text-center text-3xl md:text-4xl font-serif outline-none border-none rounded-xl"
              style={{ 
                background: 'rgba(254, 253, 251, 0.95)',
                color: '#4a3f2f'
              }}
              onFocus={(e) => e.target.select()}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <span style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>{gan}</span>
          )}
        </div>
        {/* Zhi */}
        <div className={`relative w-14 h-14 md:w-20 md:h-20 mt-4 flex items-center justify-center text-3xl md:text-4xl font-serif rounded-xl transition-all duration-300 ${
          isHighlighted(chartType, col, 'zhi') 
            ? 'border-2 shadow-[0_0_20px_rgba(193,122,111,0.3)] z-10' 
            : 'border-transparent'
        } ${isEditingThis ? 'opacity-0' : ''}`} style={{ 
          color: '#4a3f2f',
          borderColor: isHighlighted(chartType, col, 'zhi') ? '#c17a6f' : 'transparent',
          background: isHighlighted(chartType, col, 'zhi') ? '#fefdfb' : 'transparent'
        }}>
          <span style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>{zhi}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row backdrop-blur-sm rounded-2xl overflow-hidden mt-20 shadow-[0_4px_20px_rgba(107,93,71,0.08)]" style={{ background: 'rgba(250, 247, 237, 0.6)', border: '1px solid #d9cdb3' }}>
      
      {/* LEFT PANEL: The Chart (70%) */}
      <div className="flex-[7] p-12 md:p-20 border-b lg:border-b-0 lg:border-r flex flex-col" style={{ borderColor: '#d9cdb3' }}>
        
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
            <span className="font-serif font-bold tracking-[0.2em]" style={{ fontSize: '30px', color: '#5a4d3a' }}>天</span>
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
                <span className="text-[10px] mb-4 font-serif uppercase tracking-widest" style={{ color: '#8b7355' }}>{COL_LABELS[col]}</span>
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
            <span className="font-serif font-bold tracking-[0.2em]" style={{ fontSize: '30px', color: '#5a4d3a' }}>人</span>
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
                      className="text-[10px] mb-4 font-serif uppercase tracking-widest transition-colors font-bold hover:text-red-600 cursor-pointer bg-transparent border-none p-0 outline-none focus:ring-0"
                      style={{ color: '#b85a4f' }}
                    >
                      {label}
                    </button>
                  ) : (
                    <span className="text-[10px] mb-4 font-serif uppercase tracking-widest" style={{ color: '#8b7355' }}>
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
      <div className="flex-[3] p-10 flex flex-col min-h-[500px]" style={{ background: 'rgba(245, 240, 225, 0.5)' }}>
        {relationships.length === 0 ? (
          <div className="flex-1 flex items-center justify-center italic font-serif text-xs tracking-widest" style={{ color: '#9d8b6f' }}>
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
                      ? 'shadow-sm' 
                      : 'border border-transparent'
                  }`}
                  style={{
                    background: isActive ? '#fefdfb' : 'transparent',
                    color: isActive ? '#b85a4f' : '#6b5d47',
                    borderColor: isActive ? '#e8dcc4' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(254, 253, 251, 0.6)';
                      e.currentTarget.style.color = '#4a3f2f';
                      e.currentTarget.style.borderColor = '#e8dcc4';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#6b5d47';
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'scale-125' : ''
                  }`} style={{ 
                    background: isActive ? '#c17a6f' : '#9d8b6f'
                  }}></div>
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

