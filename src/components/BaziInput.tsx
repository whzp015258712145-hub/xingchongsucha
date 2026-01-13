import { useState, useRef, useEffect } from 'react';
import { Solar } from 'lunar-javascript';

interface BaziInputProps {
  onBaziChange: (
    bazi: { year: string, month: string, day: string, hour: string } | null,
    solarDate?: { y: number, m: number, d: number, h: number }
  ) => void;
}

const STORAGE_KEY = 'last_bazi_input';
const STORAGE_DATE_KEY = 'last_bazi_solar_date';

export const BaziInput = ({ onBaziChange }: BaziInputProps) => {
  const [inputs, setInputs] = useState({
    year: '',
    month: '',
    day: '',
    hour: ''
  });

  const [placeholders, setPlaceholders] = useState({
    year: '',
    month: '',
    day: '',
    hour: ''
  });

  const yearRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLInputElement>(null);
  const hourRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const now = new Date();
    const solar = Solar.fromDate(now);
    const lunar = solar.getLunar();
    
    const currentTimePlaceholders = {
      year: `${now.getFullYear()} / ${lunar.getYearInGanZhi()}`,
      month: `${now.getMonth() + 1} / ${lunar.getMonthInGanZhi()}`,
      day: `${now.getDate()} / ${lunar.getDayInGanZhi()}`,
      hour: `${now.getHours()} / ${lunar.getTimeInGanZhi()}`
    };

    // Load from localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    
    if (saved) {
      try {
        const lastBazi = JSON.parse(saved);
        setPlaceholders({
          year: lastBazi.year,
          month: lastBazi.month,
          day: lastBazi.day,
          hour: lastBazi.hour
        });
        
        // If we also have a saved solar date, we should probably trigger it? 
        // No, just set placeholders. User can Tab to restore.
      } catch (e) {
        setPlaceholders(currentTimePlaceholders);
      }
    } else {
      setPlaceholders(currentTimePlaceholders);
    }
  }, []);

  const handleChange = (field: keyof typeof inputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const saveBazi = (bazi: typeof inputs, solarDate?: any) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bazi));
    if (solarDate) {
      localStorage.setItem(STORAGE_DATE_KEY, JSON.stringify(solarDate));
    } else {
      localStorage.removeItem(STORAGE_DATE_KEY);
    }
    setPlaceholders(bazi);
  };

  const handleGenerate = () => {
    const { year, month, day, hour } = inputs;

    // Handle Empty / Reset
    if (!year && !month && !day && !hour) {
      onBaziChange(null);
      return;
    }
    
    // Check if Year is numeric (implies Date input intent)
    if (/^\d+$/.test(year)) {
      // Parse as Date
      const y = parseInt(year);
      const m = parseInt(month || '1');
      const d = parseInt(day || '1');
      const h = parseInt(hour || '0'); // Default to midnight if missing

      // Validate simple bounds
      if (y < 1900 || y > 2100) {
        alert('请输入有效年份 (1900-2100)');
        return;
      }

      // Convert
      const solar = Solar.fromYmdHms(y, m, d, h, 0, 0);
      const lunar = solar.getLunar();
      
      const newBazi = {
        year: lunar.getYearInGanZhi(),
        month: lunar.getMonthInGanZhi(),
        day: lunar.getDayInGanZhi(),
        hour: lunar.getTimeInGanZhi(),
      };

      const solarDateObj = { y, m, d, h };

      // Update UI with the calculated GanZhi
      setInputs(newBazi);
      // Save to history
      saveBazi(newBazi, solarDateObj);
      // Trigger Analysis
      onBaziChange(newBazi, solarDateObj);
      
    } else {
      // Assume manual GanZhi input
      // Send as-is if filled
      if (year && month && day && hour) {
        saveBazi(inputs);
        onBaziChange(inputs);
      } else {
        onBaziChange(inputs);
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    currentField: keyof typeof inputs,
    nextRef?: React.RefObject<HTMLInputElement>,
    prevRef?: React.RefObject<HTMLInputElement>
  ) => {
    if (e.key === 'Tab') {
      // If field is empty and we have a placeholder (last bazi)
      const saved = localStorage.getItem(STORAGE_KEY);
      const savedDate = localStorage.getItem(STORAGE_DATE_KEY);
      if (!inputs[currentField] && saved) {
        e.preventDefault();
        try {
          const lastBazi = JSON.parse(saved);
          setInputs(lastBazi);
          // Focus the last field
          if (hourRef.current) {
            hourRef.current.focus();
          }
          // Immediately trigger analysis
          const solarDate = savedDate ? JSON.parse(savedDate) : undefined;
          onBaziChange(lastBazi, solarDate);
        } catch (e) {
          // ignore
        }
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
      } else {
        handleGenerate();
      }
    } else if (e.key === 'Backspace') {
      // Only jump back if current input is empty
      if (!inputs[currentField] && prevRef && prevRef.current) {
        e.preventDefault();
        prevRef.current.focus();
      }
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-stone-900 shadow-sm rounded-lg border border-stone-200 dark:border-stone-800 mt-4 transition-all">
      <div className="grid grid-cols-4 gap-4">
         {/* Year */}
         <div className="flex flex-col space-y-1">
           <label className="text-xs text-center text-stone-400 dark:text-stone-500">年</label>
           <input
             ref={yearRef}
             type="text"
             className="w-full text-center border border-stone-300 dark:border-stone-700 rounded-md p-2 focus:ring-2 focus:ring-stone-500 focus:outline-none font-serif placeholder-stone-300 dark:placeholder-stone-600 bg-transparent dark:bg-stone-800 text-stone-900 dark:text-stone-100"
             value={inputs.year}
             onChange={(e) => handleChange('year', e.target.value)}
             onKeyDown={(e) => handleKeyDown(e, 'year', monthRef)}
             placeholder={placeholders.year}
           />
         </div>
         
         {/* Month */}
         <div className="flex flex-col space-y-1">
           <label className="text-xs text-center text-stone-400 dark:text-stone-500">月</label>
           <input
             ref={monthRef}
             type="text"
             className="w-full text-center border border-stone-300 dark:border-stone-700 rounded-md p-2 focus:ring-2 focus:ring-stone-500 focus:outline-none font-serif placeholder-stone-300 dark:placeholder-stone-600 bg-transparent dark:bg-stone-800 text-stone-900 dark:text-stone-100"
             value={inputs.month}
             onChange={(e) => handleChange('month', e.target.value)}
             onKeyDown={(e) => handleKeyDown(e, 'month', dayRef, yearRef)}
             placeholder={placeholders.month}
           />
         </div>

         {/* Day */}
         <div className="flex flex-col space-y-1">
           <label className="text-xs text-center text-stone-400 dark:text-stone-500">日</label>
           <input
             ref={dayRef}
             type="text"
             className="w-full text-center border border-stone-300 dark:border-stone-700 rounded-md p-2 focus:ring-2 focus:ring-stone-500 focus:outline-none font-serif placeholder-stone-300 dark:placeholder-stone-600 bg-transparent dark:bg-stone-800 text-stone-900 dark:text-stone-100"
             value={inputs.day}
             onChange={(e) => handleChange('day', e.target.value)}
             onKeyDown={(e) => handleKeyDown(e, 'day', hourRef, monthRef)}
             placeholder={placeholders.day}
           />
         </div>

         {/* Hour */}
         <div className="flex flex-col space-y-1">
           <label className="text-xs text-center text-stone-400 dark:text-stone-500">时</label>
           <input
             ref={hourRef}
             type="text"
             className="w-full text-center border border-stone-300 dark:border-stone-700 rounded-md p-2 focus:ring-2 focus:ring-stone-500 focus:outline-none font-serif placeholder-stone-300 dark:placeholder-stone-600 bg-transparent dark:bg-stone-800 text-stone-900 dark:text-stone-100"
             value={inputs.hour}
             onChange={(e) => handleChange('hour', e.target.value)}
             onKeyDown={(e) => handleKeyDown(e, 'hour', undefined, dayRef)}
             placeholder={placeholders.hour}
           />
         </div>
      </div>
    </div>
  );
};