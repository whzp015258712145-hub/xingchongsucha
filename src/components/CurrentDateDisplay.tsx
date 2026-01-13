import { useEffect, useState, useRef } from 'react';
import { Solar } from 'lunar-javascript';

interface CurrentDateDisplayProps {
  onDateChange: (bazi: { year: string, month: string, day: string, hour: string }) => void;
}

export const CurrentDateDisplay = ({ onDateChange }: CurrentDateDisplayProps) => {
  const [now, setNow] = useState(new Date());
  const [bazi, setBazi] = useState({ year: '', month: '', day: '', hour: '' });
  const lastBaziRef = useRef<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const solar = Solar.fromDate(now);
    const lunar = solar.getLunar();
    
    // Calculate pillars
    const year = lunar.getYearInGanZhi();
    const month = lunar.getMonthInGanZhi();
    const day = lunar.getDayInGanZhi();
    const hour = lunar.getTimeInGanZhi();

    const newBazi = { year, month, day, hour };
    const baziString = `${year}-${month}-${day}-${hour}`;

    setBazi(newBazi);

    // Only notify parent if Bazi actually changed to prevent infinite loops
    if (baziString !== lastBaziRef.current) {
      lastBaziRef.current = baziString;
      onDateChange(newBazi);
    }
  }, [now, onDateChange]);

  return (
    <div className="text-center p-6 bg-white dark:bg-stone-900 shadow-sm rounded-lg border border-stone-200 dark:border-stone-800 transition-colors duration-300">
      <div className="text-4xl md:text-5xl font-serif font-bold text-stone-800 dark:text-stone-100 space-x-4">
        <span>{bazi.year}</span>
        <span className="text-stone-400 dark:text-stone-500 text-2xl">年</span>
        <span>{bazi.month}</span>
        <span className="text-stone-400 dark:text-stone-500 text-2xl">月</span>
        <span>{bazi.day}</span>
        <span className="text-stone-400 dark:text-stone-500 text-2xl">日</span>
        <span>{bazi.hour}</span>
        <span className="text-stone-400 dark:text-stone-500 text-2xl">时</span>
      </div>
      <div className="mt-2 text-stone-400 dark:text-stone-500 font-mono text-xs">
        {now.toLocaleString('zh-CN')}
      </div>
    </div>
  );
};
