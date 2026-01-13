import { Solar } from 'lunar-javascript';

export const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
export const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// Relationships
// TianGan 5 Combinations (He)
export const TIAN_GAN_HE = {
  '甲': '己', '己': '甲',
  '乙': '庚', '庚': '乙',
  '丙': '辛', '辛': '丙',
  '丁': '壬', '壬': '丁',
  '戊': '癸', '癸': '戊',
};

// DiZhi 6 Clashes (Chong)
export const DI_ZHI_CHONG = {
  '子': '午', '午': '子',
  '丑': '未', '未': '丑',
  '寅': '申', '申': '寅',
  '卯': '酉', '酉': '卯',
  '辰': '戌', '戌': '辰',
  '巳': '亥', '亥': '巳',
};

// DiZhi 6 Combinations (LiuHe)
export const DI_ZHI_LIU_HE = {
  '子': '丑', '丑': '子',
  '寅': '亥', '亥': '寅',
  '卯': '戌', '戌': '卯',
  '辰': '酉', '酉': '辰',
  '巳': '申', '申': '巳',
  '午': '未', '未': '午',
};

// DiZhi 6 Harms (Hai)
export const DI_ZHI_HAI = {
  '子': '未', '未': '子',
  '丑': '午', '午': '丑',
  '寅': '巳', '巳': '寅',
  '卯': '辰', '辰': '卯',
  '申': '亥', '亥': '申',
  '酉': '戌', '戌': '酉',
};

// DiZhi 3 Harmonies (SanHe) - Groups
export const DI_ZHI_SAN_HE = [
  ['申', '子', '辰'], // Water
  ['亥', '卯', '未'], // Wood
  ['寅', '午', '戌'], // Fire
  ['巳', '酉', '丑'], // Metal
];

// DiZhi 3 Meetings (SanHui) - Seasonal
export const DI_ZHI_SAN_HUI = [
  ['亥', '子', '丑'], // Winter Water
  ['寅', '卯', '辰'], // Spring Wood
  ['巳', '午', '未'], // Summer Fire
  ['申', '酉', '戌'], // Autumn Metal
];

// DiZhi Punishments (Xing)
export const DI_ZHI_XING = [
  { group: ['寅', '巳', '申'], name: '无恩之刑 (Ungrateful Punishment)' }, // Often handled as pairs Yin-Si, Si-Shen, Shen-Yin
  { group: ['丑', '戌', '未'], name: '恃势之刑 (Bullying Punishment)' },
  { group: ['子', '卯'], name: '无礼之刑 (Uncivilized Punishment)' },
  { group: ['辰', '辰'], name: '自刑 (Self Punishment)' },
  { group: ['午', '午'], name: '自刑 (Self Punishment)' },
  { group: ['酉', '酉'], name: '自刑 (Self Punishment)' },
  { group: ['亥', '亥'], name: '自刑 (Self Punishment)' },
];

export interface PillarRef {
  chart: 'user' | 'current' | 'dayun';
  pillar: 'year' | 'month' | 'day' | 'hour' | 'luck';
  part: 'gan' | 'zhi';
}

export type Relationship = {
  type: '冲' | '合' | '刑' | '害' | '天干合';
  name: string;
  source: string; // The user's pillar part (e.g. "Year Stem")
  target: string; // The current time's pillar part
  description: string;
  refs?: PillarRef[];
};

// Helper to check relationships
export function checkRelationships(userPillar: string, currentPillar: string, userLabel: string, currentLabel: string): Relationship[] {
  const results: Relationship[] = [];
  
  // Clean inputs just in case (though we expect single chars)
  const u = userPillar.trim();
  const c = currentPillar.trim();

  // TianGan He
  if (TIAN_GAN_HE[u as keyof typeof TIAN_GAN_HE] === c) {
    results.push({
      type: '天干合',
      name: `${u}${c}合`,
      source: userLabel,
      target: currentLabel,
      description: `${u} combines with ${c}`,
    });
  }

  // DiZhi Chong
  if (DI_ZHI_CHONG[u as keyof typeof DI_ZHI_CHONG] === c) {
    results.push({
      type: '冲',
      name: `${u}${c}冲`,
      source: userLabel,
      target: currentLabel,
      description: `${u} clashes with ${c}`,
    });
  }

  // DiZhi LiuHe
  if (DI_ZHI_LIU_HE[u as keyof typeof DI_ZHI_LIU_HE] === c) {
    results.push({
      type: '合',
      name: `${u}${c}六合`,
      source: userLabel,
      target: currentLabel,
      description: `${u} combines with ${c}`,
    });
  }

  // DiZhi Hai
  if (DI_ZHI_HAI[u as keyof typeof DI_ZHI_HAI] === c) {
    results.push({
      type: '害',
      name: `${u}${c}害`,
      source: userLabel,
      target: currentLabel,
      description: `${u} harms ${c}`,
    });
  }

  // DiZhi Xing (Simple pairs logic for checking User vs Current)
  
  // Zi-Mao
  if ((u === '子' && c === '卯') || (u === '卯' && c === '子')) {
    results.push({ type: '刑', name: '子卯相刑', source: userLabel, target: currentLabel, description: 'Uncivilized Punishment' });
  }
  
  // Self Punishment
  if (u === c && ['辰', '午', '酉', '亥'].includes(u)) {
     results.push({ type: '刑', name: `${u}${u}自刑`, source: userLabel, target: currentLabel, description: 'Self Punishment' });
  }

  // Yin-Si-Shen
  const yss = ['寅', '巳', '申'];
  if (yss.includes(u) && yss.includes(c) && u !== c) {
     // Check pairs
     if ((u === '寅' && c === '巳') || (u === '巳' && c === '寅') ||
         (u === '巳' && c === '申') || (u === '申' && c === '巳') ||
         (u === '申' && c === '寅') || (u === '寅' && c === '申')) {
         results.push({ type: '刑', name: `${u}${c}相刑`, source: userLabel, target: currentLabel, description: 'Part of Ungrateful Punishment' });
     }
  }

  // Chou-Xu-Wei
  const cxw = ['丑', '戌', '未'];
  if (cxw.includes(u) && cxw.includes(c) && u !== c) {
      results.push({ type: '刑', name: `${u}${c}相刑`, source: userLabel, target: currentLabel, description: 'Part of Bullying Punishment' });
  }

  return results;
}

export interface BaziChart {
  year: string;
  month: string;
  day: string;
  hour: string;
}

export function calculateDayun(solarDate: { y: number, m: number, d: number, h: number }, gender: 'male' | 'female'): { gan: string, zhi: string } {
    try {
      const solar = Solar.fromYmdHms(solarDate.y, solarDate.m, solarDate.d, solarDate.h, 0, 0);
      const lunar = solar.getLunar();
      const eightChar = lunar.getEightChar();
      
      const yun = eightChar.getYun(gender === 'male' ? 1 : 0);
      const daYunList = yun.getDaYun();
      
      const now = new Date();
      const currentDaYun = daYunList.find((dy: any) => {
         const startYear = dy.getStartYear();
         const endYear = dy.getEndYear();
         return now.getFullYear() >= startYear && now.getFullYear() <= endYear;
      });

      if (currentDaYun) {
        const gz = currentDaYun.getGanZhi();
        return { gan: gz.charAt(0), zhi: gz.charAt(1) };
      }
    } catch (e) {
      console.error("DaYun calculation error", e);
    }
    return { gan: '', zhi: '' };
}

export function compareCharts(userBazi: BaziChart, currentBazi: BaziChart, dayun?: string): Relationship[] {
  let allRelationships: Relationship[] = [];

  const pillars = ['year', 'month', 'day', 'hour'] as const;
  const labels: Record<string, string> = { year: '年柱', month: '月柱', day: '日柱', hour: '时柱', luck: '大运' };

  // Prepare Source Pillars (User + Dayun)
  const sourcePillars: { type: 'year'|'month'|'day'|'hour'|'luck', val: string, chart: 'user'|'dayun' }[] = [];
  
  pillars.forEach(p => {
    if (userBazi[p]) sourcePillars.push({ type: p, val: userBazi[p], chart: 'user' });
  });
  
  if (dayun && dayun.length >= 2) {
    sourcePillars.push({ type: 'luck', val: dayun, chart: 'dayun' });
  }

  // Loop through Source Pillars
  sourcePillars.forEach(src => {
    const uGanZhi = src.val;
    const uGan = uGanZhi.charAt(0);
    const uZhi = uGanZhi.charAt(1);

    // Loop through Current Pillars
    pillars.forEach(cP => {
      const cGanZhi = currentBazi[cP];
      if (!cGanZhi) return;
      const cGan = cGanZhi.charAt(0);
      const cZhi = cGanZhi.charAt(1);

      const uLabel = src.type === 'luck' ? '大运' : `命主${labels[src.type]} (${uGanZhi})`;
      const cLabel = `流时${labels[cP]} (${cGanZhi})`;

      // Compare Gans
      const ganRels = checkRelationships(uGan, cGan, uLabel, cLabel);
      // Filter for only TianGan He or relevant Stem interactions
      const validGanRels = ganRels.filter(r => r.type === '天干合'); 
      // Attach Refs
      validGanRels.forEach(r => {
        r.refs = [
          { chart: src.chart, pillar: src.type, part: 'gan' },
          { chart: 'current', pillar: cP, part: 'gan' }
        ];
      });
      allRelationships = [...allRelationships, ...validGanRels];

      // Compare Zhis
      const zhiRels = checkRelationships(uZhi, cZhi, uLabel, cLabel);
      // Filter for Branch interactions (Chong, He, Xing, Hai)
      const validZhiRels = zhiRels.filter(r => ['冲', '合', '刑', '害'].includes(r.type));
      // Attach Refs
      validZhiRels.forEach(r => {
        r.refs = [
          { chart: src.chart, pillar: src.type, part: 'zhi' },
          { chart: 'current', pillar: cP, part: 'zhi' }
        ];
      });
      allRelationships = [...allRelationships, ...validZhiRels];
    });
  });

  // Check for Three Harmonies (SanHe) and Three Meetings (SanHui)
  // Need to track which pillars contributed to the set
  const userBranchMap = new Map<string, Array<{chart: 'user'|'dayun', pillar: 'year'|'month'|'day'|'hour'|'luck'}>>();
  
  sourcePillars.forEach(src => {
    const b = src.val.charAt(1);
    if (!userBranchMap.has(b)) userBranchMap.set(b, []);
    userBranchMap.get(b)?.push({ chart: src.chart, pillar: src.type });
  });

  const currentBranchMap = new Map<string, Array<'year'|'month'|'day'|'hour'>>();
  pillars.forEach(p => { 
    if (currentBazi[p]) {
      const b = currentBazi[p].charAt(1);
      if (!currentBranchMap.has(b)) currentBranchMap.set(b, []);
      currentBranchMap.get(b)?.push(p);
    } 
  });
  
  const allBranches = new Set([...userBranchMap.keys(), ...currentBranchMap.keys()]);

  // Helper to check sets
  const checkSet = (group: string[], typeName: string, descName: string) => {
    const hasAll = group.every(b => allBranches.has(b));
    if (hasAll) {
      // Check if it involves BOTH charts (at least one from user, one from current)
      // Actually, if it involves both, we highlight ALL occurrences.
      // But we need to verify it's not just purely Natal or purely Transit (though those are valid SanHe, 
      // the app focus is "Relationships between User and Time").
      // Let's strictly require mixed origin for the "Relationship" report.
      
      const userHas = group.some(b => userBranchMap.has(b));
      const currentHas = group.some(b => currentBranchMap.has(b));

      if (userHas && currentHas) {
        // Construct refs for ALL participating branches
        const refs: PillarRef[] = [];
        group.forEach(b => {
          if (userBranchMap.has(b)) {
            userBranchMap.get(b)?.forEach(ref => refs.push({ chart: ref.chart, pillar: ref.pillar, part: 'zhi' }));
          }
          if (currentBranchMap.has(b)) {
            currentBranchMap.get(b)?.forEach(p => refs.push({ chart: 'current', pillar: p, part: 'zhi' }));
          }
        });

        allRelationships.push({
          type: '合',
          name: `${typeName} (${group.join('')})`,
          source: '命主八字/大运',
          target: '当前时间',
          description: `组成${descName}局`,
          refs: refs
        });
      }
    }
  };

  DI_ZHI_SAN_HE.forEach(group => checkSet(group, '三合', 'Three Harmony'));
  DI_ZHI_SAN_HUI.forEach(group => checkSet(group, '三会', 'Three Meeting'));

  return allRelationships;
}

export function findDateFromGanZhi(
  yearGZ: string, 
  monthGZ: string, 
  dayGZ: string, 
  hourGZ: string
): { y: number, m: number, d: number, h: number } | null {
  const nowYear = new Date().getFullYear();
  const startYear = nowYear - 80;
  const endYear = nowYear + 20;

  for (let y = startYear; y <= endYear; y++) {
    // Check Year GanZhi quickly (optimization)
    // Lunar year GanZhi usually changes around Feb 4 (Lichun).
    // We can check mid-year to be safe or just check the Lunar object of a specific date.
    // Let's iterate months for this year.
    for (let m = 1; m <= 12; m++) {
      // Optimization: Check Month GanZhi?
      // Month GanZhi depends on Year GanZhi (Wu Hu Dun).
      // Let's iterate days.
      // We need to be careful about performance. 100 years * 12 months * 30 days = 36,000 checks.
      // That's fine for client side JS, but let's try to fail fast.
      
      // We are looking for SOLAR date that produces these GanZhis.
      // Standard Bazi is usually Solar-based (Lichun). lunar-javascript handles this via Solar->Lunar->EightChar.
      
      // Let's iterate days in Solar Month.
      // const solarDays = Solar.fromYmd(y, m, 1).getWeek() ? 31 : 31; // Simplification, just loop 1-31
      const maxDays = new Date(y, m, 0).getDate(); // standard JS days in month

      for (let d = 1; d <= maxDays; d++) {
         // Create Solar object
         // Check Year/Month/Day GanZhi
         // We check Hour only if Day matches
         const solar = Solar.fromYmdHms(y, m, d, 12, 0, 0); // Noon
         const lunar = solar.getLunar();
         
         if (lunar.getYearInGanZhi() !== yearGZ) {
           // If year doesn't match, we can skip the rest of this lunar year?
           // Year GanZhi changes at Lichun. So some part of the solar year might match.
           // So we continue, but this check is fast.
           continue; 
         }
         
         if (lunar.getMonthInGanZhi() !== monthGZ) continue;
         if (lunar.getDayInGanZhi() !== dayGZ) continue;
         
         // If we are here, Y/M/D match. Now find Hour.
         for (let h = 0; h < 24; h += 2) {
            const solarH = Solar.fromYmdHms(y, m, d, h, 0, 0);
            const lunarH = solarH.getLunar();
            if (lunarH.getTimeInGanZhi() === hourGZ) {
              return { y, m, d, h };
            }
         }
      }
    }
  }
  return null;
}
