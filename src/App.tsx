import { useState, useEffect, useCallback } from 'react';
import { CurrentDateDisplay } from './components/CurrentDateDisplay';
import { BaziInput } from './components/BaziInput';
import { RelationshipChart } from './components/RelationshipChart';
import { BaziChart, compareCharts, Relationship, calculateDayun, findDateFromGanZhi } from './utils/relationships';

function App() {
  const [currentBazi, setCurrentBazi] = useState<BaziChart>({ year: '', month: '', day: '', hour: '' });
  const [userBazi, setUserBazi] = useState<BaziChart | null>(null);
  const [userSolarDate, setUserSolarDate] = useState<{ y: number, m: number, d: number, h: number } | undefined>();
  const [relationships, setRelationships] = useState<Relationship[]>([]);
  
  // Lifted state
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [dayun, setDayun] = useState<string>('');
  const [isTimeFrozen, setIsTimeFrozen] = useState(false);

  // Auto-calculate Dayun when date or gender changes
  useEffect(() => {
    if (userSolarDate) {
      const calculated = calculateDayun(userSolarDate, gender);
      if (calculated.gan && calculated.zhi) {
        setDayun(calculated.gan + calculated.zhi);
      }
    } else if (userBazi && userBazi.year && userBazi.month && userBazi.day && userBazi.hour) {
      // Manual input case: No solar date, but full Bazi. Try to reverse lookup.
      const foundDate = findDateFromGanZhi(userBazi.year, userBazi.month, userBazi.day, userBazi.hour);
      if (foundDate) {
         const calculated = calculateDayun(foundDate, gender);
         if (calculated.gan && calculated.zhi) {
           setDayun(calculated.gan + calculated.zhi);
         }
      }
    }
  }, [userSolarDate, gender, userBazi]);

  useEffect(() => {
    if (userBazi && currentBazi.year) {
      const rels = compareCharts(userBazi, currentBazi, dayun);
      setRelationships(rels);
    } else {
      setRelationships([]);
    }
  }, [userBazi, currentBazi, dayun]);

  const handlePillarChange = (chart: 'user' | 'dayun' | 'current', pillar: string, value: string) => {
     if (chart === 'dayun') {
       setDayun(value);
     } else if (chart === 'user' && userBazi) {
       setUserBazi(prev => prev ? ({ ...prev, [pillar]: value }) : null);
     } else if (chart === 'current') {
       setIsTimeFrozen(true); // Freeze time if user manually edits current
       setCurrentBazi(prev => ({ ...prev, [pillar]: value }));
     }
  };

  const handleDateChange = useCallback((bazi: BaziChart) => {
    if (!isTimeFrozen) {
      setCurrentBazi(bazi);
    }
  }, [isTimeFrozen]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans bg-stone-50 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            刑冲速查
          </h1>
        </header>

        <main className="space-y-8">
          <section>
            <CurrentDateDisplay onDateChange={handleDateChange} />
          </section>

          <section>
            <BaziInput onBaziChange={(bazi, date) => {
              setUserBazi(bazi);
              setUserSolarDate(date);
              // Reset dayun if manual input without date?
              if (!date) setDayun('');
            }} />
          </section>

          {userBazi && (
            <section>
              <RelationshipChart 
                relationships={relationships} 
                userBazi={userBazi} 
                currentBazi={currentBazi}
                userSolarDate={userSolarDate}
                gender={gender}
                dayun={dayun}
                onGenderChange={setGender}
                onPillarChange={handlePillarChange}
              />
            </section>
          )}
        </main>

        <footer className="mt-16 text-center text-stone-400 dark:text-stone-600 text-xs">
          <p>&copy; 刑冲速查 大道至易</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
