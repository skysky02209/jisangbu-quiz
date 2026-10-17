// 웹툰 에피소드 데이터 (지상부환경관리)
// 패널: {t:'talk', bg, L:[who,face], R:[who,face], prop, cap, lines:[[who,text],...]} / {t:'board', title, html} / {t:'fig', title, svg, cap}
// who: 'doc'(햇살박사) | 'kid'(새싹이),  face: smile | wow | sad | think | cool
window.CAST = {doc:['햇살박사','온실에서 사는 농대 선배'], kid:['새싹이','시험 앞둔 원예과 신입생']};

window.FIG = {
 history:`<svg viewBox="0 0 600 170" font-size="14" text-anchor="middle"><line x1="30" y1="70" x2="570" y2="70" stroke="var(--g)" stroke-width="4"/>
 ${[['1920','유지온실','시작'],['1960','대나무 비닐','태동기'],['1970','철재 단동','확대기'],['1980','아연도금강관','성장발전기'],['1990','벤로형·1-2W','현대화기'],['2000','수직농장','신기술']].map((d,i)=>{const x=60+i*96;return `<circle cx="${x}" cy="70" r="11" fill="var(--g)"/><text x="${x}" y="45" font-weight="800" fill="var(--g)">${d[0]}</text><text x="${x}" y="100" font-weight="700" fill="currentColor">${d[1]}</text><text x="${x}" y="120" fill="var(--sub)">${d[2]}</text>`;}).join('')}
 <text x="300" y="155" fill="var(--sub)">면적 최대: 2000년 90,627ha → 이후 감소, 생산액은 상승</text></svg>`,
 chloro:`<svg viewBox="0 0 600 220" font-size="16" text-anchor="middle"><ellipse cx="300" cy="110" rx="280" ry="95" fill="#e8f5e9" stroke="#66bb6a" stroke-width="3"/>
 <g fill="#81c784" stroke="#2e7d32">${[0,1,2,3,4].map(i=>`<ellipse cx="160" cy="${60+i*20}" rx="55" ry="8"/>`).join('')}</g>
 <text x="160" y="175" font-weight="800" fill="#2e7d32">그라나 · 틸라코이드 막</text><text x="160" y="195" fill="#2e7d32">명반응: 빛 → ATP·NADPH, O₂</text>
 <path d="M225 100 h80" stroke="#ef6c00" stroke-width="3" marker-end="url(#ar)"/><text x="265" y="90" fill="#ef6c00">ATP·NADPH</text>
 <circle cx="420" cy="100" r="45" fill="none" stroke="#1565c0" stroke-width="5" stroke-dasharray="20 8"/><text x="420" y="96" font-weight="800" fill="#1565c0">캘빈 회로</text><text x="420" y="114" fill="#1565c0">루비스코</text>
 <text x="420" y="175" font-weight="800" fill="#1565c0">스트로마</text><text x="420" y="195" fill="#1565c0">암반응: CO₂ → 당</text>
 <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8z" fill="#ef6c00"/></marker></defs></svg>`,
 curve:`<svg viewBox="0 0 600 230" font-size="16"><line x1="60" y1="20" x2="60" y2="200" stroke="currentColor"/><line x1="60" y1="150" x2="570" y2="150" stroke="currentColor"/>
 <path d="M60 190 C140 90, 260 50, 560 45" fill="none" stroke="#e53935" stroke-width="4"/>
 <circle cx="98" cy="150" r="7" fill="#1565c0"/><text x="105" y="175" fill="#1565c0" font-weight="800">광보상점 (광합성 = 호흡)</text>
 <line x1="330" y1="20" x2="330" y2="150" stroke="#ef6c00" stroke-dasharray="5 5"/><text x="340" y="35" fill="#ef6c00" font-weight="800">광포화점 (더 밝아도 그대로)</text>
 <text x="70" y="212" fill="var(--sub)">암호흡 구간 (CO₂ 내뱉음)</text><text x="570" y="170" text-anchor="end" fill="var(--sub)">광도 (PPFD) →</text>
 <text x="20" y="30" fill="var(--sub)" transform="rotate(-90 20 30)" text-anchor="end">순광합성 속도</text></svg>`,
 c34:`<svg viewBox="0 0 600 170" font-size="16" text-anchor="middle">${[['C3','대부분 원예작물','루비스코가 바로 고정','#2e7d32'],['C4','옥수수','유관속초로 CO₂ 농축 (공간 분리)','#1565c0'],['CAM','선인장·다육·파인애플','밤에 기공 (시간 분리)','#6a1b9a']].map((d,i)=>{const x=100+i*200;return `<rect x="${x-90}" y="15" width="180" height="140" rx="16" fill="none" stroke="${d[3]}" stroke-width="3"/><text x="${x}" y="55" font-size="26" font-weight="800" fill="${d[3]}">${d[0]}</text><text x="${x}" y="90" font-weight="700" fill="currentColor">${d[1]}</text><text x="${x}" y="120" fill="var(--sub)">${d[2]}</text>`;}).join('')}</svg>`,
 phyto:`<svg viewBox="0 0 600 190" font-size="17" text-anchor="middle"><circle cx="140" cy="95" r="55" fill="#ffcdd2" stroke="#e53935" stroke-width="3"/><text x="140" y="90" font-size="24" font-weight="800" fill="#c62828">Pr</text><text x="140" y="115" fill="#c62828">비활성</text>
 <circle cx="460" cy="95" r="55" fill="#c62828"/><text x="460" y="90" font-size="24" font-weight="800" fill="#fff">Pfr</text><text x="460" y="115" fill="#fff">활성</text>
 <path d="M200 70 Q300 20 400 70" fill="none" stroke="#e53935" stroke-width="4" marker-end="url(#a2)"/><text x="300" y="35" font-weight="800" fill="#e53935">적색광 (660nm)</text>
 <path d="M400 125 Q300 175 200 125" fill="none" stroke="#6d4c41" stroke-width="4" marker-end="url(#a3)"/><text x="300" y="182" font-weight="800" fill="#6d4c41">원적색광 (730nm) · 암조건</text>
 <defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8z" fill="#e53935"/></marker><marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8z" fill="#6d4c41"/></marker></defs></svg>`,
 spectrum:`<svg viewBox="0 0 600 150" font-size="16" text-anchor="middle"><defs><linearGradient id="sp"><stop offset="0" stop-color="#7b1fa2"/><stop offset=".2" stop-color="#1e88e5"/><stop offset=".45" stop-color="#43a047"/><stop offset=".6" stop-color="#fdd835"/><stop offset=".8" stop-color="#e53935"/><stop offset="1" stop-color="#4e1010"/></linearGradient></defs>
 <rect x="30" y="40" width="540" height="40" rx="8" fill="url(#sp)"/>
 ${[['UV','~400'],['청색','400-500'],['녹색','500-600'],['적색','600-700'],['원적색','700-800']].map((d,i)=>`<text x="${84+i*108}" y="30" font-weight="800" fill="currentColor">${d[0]}</text><text x="${84+i*108}" y="100" fill="var(--sub)">${d[1]}</text>`).join('')}
 <line x1="138" y1="115" x2="462" y2="115" stroke="var(--g)" stroke-width="3"/><text x="300" y="138" font-weight="800" fill="var(--g)">PAR 400-700nm (광합성)</text></svg>`,
 cover:`<svg viewBox="0 0 600 170" font-size="17" text-anchor="middle"><text x="300" y="30" font-weight="800" fill="currentColor">입사광 100 = 투과 + 반사 + 흡수</text>
 <rect x="80" y="60" width="440" height="22" fill="#90caf9" opacity=".7"/><text x="300" y="76" fill="#0d47a1" font-weight="700">피복재</text>
 <path d="M150 20 L230 60" stroke="#fb8c00" stroke-width="4"/><path d="M230 60 L310 20" stroke="#fb8c00" stroke-width="3" stroke-dasharray="6 4"/><text x="330" y="50" fill="#fb8c00">반사</text>
 <path d="M230 82 L300 150" stroke="#fb8c00" stroke-width="4"/><text x="320" y="150" fill="#fb8c00">투과</text><text x="200" y="110" fill="#1565c0">흡수 → 열</text>
 <text x="470" y="125" fill="var(--sub)">흡수율 = 100 − 투과 − 반사</text><text x="470" y="148" fill="var(--sub)">산란율 = 산란 ÷ (직달+산란)</text></svg>`,
 orient:`<svg viewBox="0 0 600 190" font-size="16" text-anchor="middle"><text x="150" y="25" font-weight="800" fill="#ef6c00">동서동</text>
 <rect x="50" y="45" width="200" height="60" fill="none" stroke="#ef6c00" stroke-width="3"/>${[0,1,2,3].map(i=>`<line x1="${90+i*40}" y1="45" x2="${90+i*40}" y2="105" stroke="#ef6c00"/>`).join('')}
 <text x="150" y="130" fill="currentColor">겨울 투과율 ↑ (84%)</text><text x="150" y="150" fill="var(--sub)">광 분포 불균일 · 촉성재배</text>
 <text x="450" y="25" font-weight="800" fill="#1565c0">남북동</text>
 <rect x="420" y="40" width="60" height="70" fill="none" stroke="#1565c0" stroke-width="3"/>${[0,1].map(i=>`<line x1="420" y1="${63+i*23}" x2="480" y2="${63+i*23}" stroke="#1565c0"/>`).join('')}
 <text x="450" y="130" fill="currentColor">광 분포 균일</text><text x="450" y="150" fill="var(--sub)">연중재배 · 연동온실 권장</text>
 <text x="300" y="182" fill="var(--sub)">차광 커튼까지 동서 방향이면 → 광 분포 불균일</text></svg>`,
 light:`<svg viewBox="0 0 600 170" font-size="16" text-anchor="middle">${[['백열등','원적색↑ 도장','2014 중단','#ef6c00'],['형광등','PAR 20-25%','육묘·엽채','#5e35b1'],['HPS','PAR 30%','보광 최다','#f9a825'],['LED','단색광 조합','수명 5만h','#00897b']].map((d,i)=>{const x=80+i*147;return `<circle cx="${x}" cy="55" r="34" fill="${d[3]}" opacity=".85"/><text x="${x}" y="60" font-weight="800" fill="#fff">${d[0]}</text><text x="${x}" y="115" font-weight="700" fill="currentColor">${d[1]}</text><text x="${x}" y="137" fill="var(--sub)">${d[2]}</text>`;}).join('')}</svg>`
};

window.TOON = [
{ep:1, w:1, title:'온실은 언제부터 있었을까', sub:'시설원예 현황 · 역사 · 스마트팜', color:'#2e7d32', emoji:'🏠',
 quiz:['시설현대화사업','존 이블린','산가요록','벤로형 유리온실','2세대 스마트팜','파프리카'],
 memo:['면적 최대 2000년 90,627ha → 감소, 생산액은 상승','채소 경남 · 화훼 경기 · 과수 제주','존 이블린 = greenhouse + 1691 온풍난방 / 산가요록 1459 = 가온·보온·채광·가습','스마트팜 1세대 편리성 · 2세대 생산성(네덜란드 추격) · 3세대 플랜트 수출'],
 panels:[
 {t:'talk',bg:'#e8f5e9',L:['kid','sad'],R:['doc','smile'],prop:'🏠❓',cap:'연암대 유리온실 앞',lines:[['kid','선배, 온실은 그냥 비닐 씌운 집 아니에요?'],['doc','그 비닐 하나에 <b>600년 역사</b>가 들어 있어. 오늘은 현황부터 스마트팜까지 한 번에 가자!']]},
 {t:'talk',bg:'#fff8e1',L:['doc','cool'],R:['kid','think'],prop:'📉📈',lines:[['doc','우리나라 시설원예 면적은 <b>2000년 90,627ha</b>가 최대였고 그 뒤로 <b>줄고 있어</b>.'],['kid','그럼 망한 거예요?'],['doc','아니! <b>생산액은 계속 올라</b>. 생산성이 좋아졌고 특히 <b>과채류</b> 비중이 커졌거든.']]},
 {t:'board',title:'어디서 뭘 키울까',html:`<table><tr><th>작물</th><th>주요 지역</th><th>비율(2019)</th></tr><tr><td class="hl">채소</td><td>경남</td><td>83.5%</td></tr><tr><td class="hl">과수</td><td>제주</td><td>13.3%</td></tr><tr><td class="hl">화훼</td><td>경기</td><td>3.2%</td></tr></table><p class="tip">💡 수출 1위: 과채 = <b>파프리카</b>, 화훼 = <b>백합</b></p>`},
 {t:'talk',bg:'#e3f2fd',L:['kid','wow'],R:['doc','smile'],prop:'📜',lines:[['kid','옛날 사람들도 온실을 썼어요?'],['doc','로마는 <b>운모판</b>, 17세기 <b>존 이블린</b>은 <b>greenhouse</b>라는 말을 처음 쓰고 1691년 <b>온풍난방</b>을 만들었어.'],['doc','우리나라엔 <b>1459년 산가요록</b>이 있어. 가온·보온·채광·가습 개념이 다 들어 있지!']]},
 {t:'fig',title:'한국 시설원예 발달 순서',svg:'history',cap:'1920 유지온실(대전) → 1960 태동기 → 1970 확대기 → 1980 성장 발전기 → 1990 현대화기(벤로형, 네덜란드) → 2000 수직농장'},
 {t:'talk',bg:'#fce4ec',L:['doc','think'],R:['kid','think'],prop:'📱🤖',lines:[['doc','농촌은 고령화로 일손이 없어. 그래서 IoT·빅데이터·AI·로봇으로 관리하는 <b>스마트팜</b>이 나왔어.'],['kid','세대가 있다면서요?']]},
 {t:'board',title:'한국형 스마트팜 3세대',html:`<table><tr><th>세대</th><th>목표</th><th>핵심</th></tr><tr><td class="hl">1세대 (16)</td><td>편리성</td><td>원격 감시 + 원격 제어</td></tr><tr><td class="hl">2세대 (18)</td><td>생산성, 네덜란드 추격</td><td>복합환경제어 + 클라우드</td></tr><tr><td class="hl">3세대 (20)</td><td>글로벌, 플랜트 수출</td><td>에너지관리 + 로봇 농작업</td></tr></table><p class="tip">💡 네덜란드는 온실의 <b>99%가 유리온실</b></p>`},
 {t:'talk',bg:'#f1f8e9',L:['kid','smile'],R:['doc','cool'],prop:'⭐',lines:[['kid','발전 방향도 외워야 해요?'],['doc','교수님이 빨간 글씨로 강조한 건 하나야. <b>양보다 고품질, 부가가치 향상!</b>']]}
 ]},
{ep:2, w:2, title:'루비스코의 실수', sub:'광합성 · 광호흡 · C3/C4/CAM · 광포화점', color:'#1565c0', emoji:'🌿',
 quiz:['틸라코이드 막','루비스코','광호흡','C4 식물','CAM 식물','광보상점','광포화점','CO₂ 시비'],
 memo:['명반응 = 틸라코이드 막 / 암반응 = 스트로마 루비스코','광호흡 = 루비스코가 O₂를 잡는 실수, 고온·고광도·저습도 (정상 25%, 스트레스 50%)','C4 공간 분리(옥수수) / CAM 시간 분리(선인장)','CO₂ 대기 400 · 최적 600-900 · 포화 1,200ppm / 시비하면 최적온도 +6℃'],
 panels:[
 {t:'talk',bg:'#e3f2fd',L:['kid','think'],R:['doc','smile'],prop:'☀️🍃',cap:'유리온실 토마토 앞',lines:[['kid','광합성은 중학교 때 배웠는데요?'],['doc','시험은 <b>위치</b>랑 <b>농민 입장</b>을 물어봐. 농민은 호흡은 줄이고 <b>생장과 저장</b>은 늘려야 돈을 벌어!']]},
 {t:'talk',bg:'#fff8e1',L:['doc','cool'],R:['kid','wow'],prop:'🍬',lines:[['doc','광합성으로 만든 당의 <b>60%는 생장</b>, <b>40%는 호흡</b>에 써.'],['kid','40%나 버려요?'],['doc','살아 있으려면 어쩔 수 없어. 대신 <b>광호흡</b>은 줄일 수 있지. 그건 이따가!']]},
 {t:'fig',title:'엽록체 안에서 벌어지는 일',svg:'chloro',cap:'빛 → 화학에너지 저장 = 틸라코이드 막(PPT 퀴즈 정답). 그라나가 층층인 건 햇빛을 많이 받으려고!'},
 {t:'talk',bg:'#e8f5e9',L:['doc','think'],R:['kid','think'],prop:'🚪',lines:[['doc','CO₂는 <b>기공</b>으로 들어와. 기공은 <b>저광도, 수분 스트레스, 고농도 CO₂</b>에서 닫혀.'],['kid','그럼 농민은 기공이 열려 있는 게 좋겠네요.'],['doc','정답! 들어온 CO₂는 <b>루비스코</b>가 잡아. 지구에서 제일 많은 단백질, 엽록체 단백질의 <b>50%</b>야.']]},
 {t:'talk',bg:'#ffebee',L:['kid','sad'],R:['doc','cool'],prop:'🧱💥',lines:[['kid','루비스코가 실수도 해요?'],['doc','해! 덥고(<b>고온</b>) CO₂가 부족하면(<b>저농도</b>) CO₂ 대신 <b>O₂를 잘못 잡아</b>. 블록을 쌓다 부숴 버리는 거지. 이게 <b>광호흡</b>.'],['doc','정상일 때 <b>25%</b>, 스트레스 받으면 <b>50%</b>까지 올라가.']]},
 {t:'fig',title:'C3 · C4 · CAM',svg:'c34',cap:'원예작물은 보통 C3. C4는 CO₂만 있게 공간 분리, CAM은 밤에만 기공을 여는 시간 분리'},
 {t:'fig',title:'광도와 광합성',svg:'curve',cap:'광보상점 = CO₂ 유입·유출이 없는 점(교수님 동그라미). 강광 적응 식물은 보상점·포화점 둘 다 높다.'},
 {t:'board',title:'온도와 CO₂',html:`<table><tr><th>항목</th><th>핵심</th></tr><tr><td class="hl">고온</td><td>루비스코 고장 → 호흡·광호흡↑, 생장 저해</td></tr><tr><td class="hl">CO₂ 농도</td><td>대기 400 / 최적 600-900 / 포화 1,200ppm</td></tr><tr><td class="hl">CO₂ 시비</td><td>최적 온도 상한 <b>+6℃</b>, 야간엔 효과 적음</td></tr><tr><td class="hl">속도 단위</td><td>μmol CO₂/m²/s</td></tr></table><p class="tip">💡 CO₂를 주면 일을 더 하니까 온도도 조금 올려줘야 소화한다!</p>`}
 ]},
{ep:3, w:3, title:'빛의 색깔이 모양을 바꾼다', sub:'광수용체 · 피토크롬 · 적·원적·청·녹색광 · UV', color:'#c62828', emoji:'🌈',
 quiz:['광형태형성','피토크롬','크립토크롬','포토트로핀','Pfr','PPS','그늘회피반응','EOD far-red','녹색광'],
 memo:['광형태형성 = 광도·광주기·광질 → 형태와 발달','Pr 적색 흡수(비활성) ↔ Pfr 원적색 흡수(활성), PPS = Pfr/Ptotal','원적색 → 그늘회피, 피토크롬은 Pr로 / 청색 → 신장 억제·굴광성','녹색광 반사 5-10%, 청색 효과 소거 / UV-B 하배축 신장 억제'],
 panels:[
 {t:'talk',bg:'#fce4ec',L:['kid','wow'],R:['doc','smile'],prop:'🥬🔴🔵',cap:'수직농장 LED 앞',lines:[['kid','여기 LED는 왜 보라색이에요?'],['doc','빛 <b>색깔(광질)</b>에 따라 식물 <b>모양</b>이 바뀌거든. 이걸 <b>광형태형성</b>이라고 해.']]},
 {t:'board',title:'광수용체 5종',html:`<table><tr><th>광수용체</th><th>빛</th><th>하는 일</th></tr><tr><td class="hl">피토크롬</td><td>적·원적색</td><td>발아, 탈황화, 신장, 개화</td></tr><tr><td class="hl">크립토크롬</td><td>청색</td><td>+ <b>플라보노이드</b> (향·맛)</td></tr><tr><td class="hl">포토트로핀</td><td>청색</td><td>잎 편평화, 굴광성, 기공</td></tr><tr><td>자이트루페(ZTL)</td><td>청색</td><td>-</td></tr><tr><td class="hl">UVR8</td><td>자외선</td><td>-</td></tr></table>`},
 {t:'fig',title:'피토크롬 스위치',svg:'phyto',cap:'Pr의 r = red를 먹어서. 적색광 → Pfr(활성), 원적색광·어두우면 → Pr(비활성). PPS = Pfr ÷ 전체'},
 {t:'talk',bg:'#fff3e0',L:['doc','cool'],R:['kid','think'],prop:'🌹📏',lines:[['doc','촘촘하게 심으면 위 잎이 적색을 먹어서 아래는 <b>원적색</b>만 남아. 그럼 키를 쭉 늘리는 <b>그늘회피반응</b>!'],['kid','그럼 장미는 일부러 원적색을 주면 길어지겠네요?'],['doc','바로 그거! 일몰 무렵 원적색을 주는 <b>EOD far-red</b>로 토마토 대목 하배축이 <b>20-40%</b> 늘어.']]},
 {t:'talk',bg:'#e3f2fd',L:['kid','think'],R:['doc','smile'],prop:'🔵',lines:[['kid','파란색은요?'],['doc','청색광은 <b>줄기신장 억제</b>, <b>굴광성</b>. 적색광에 <b>10-20%</b>만 섞어도 모양이 잡혀.'],['doc','근데 함정! 배추·상추·무는 억제되지만 <b>오이·토마토</b>는 단일 청색광에서 오히려 길어져.']]},
 {t:'fig',title:'파장 순서',svg:'spectrum',cap:'자외선 → 청색 → 녹색 → 적색 → 원적색. 파장이 짧을수록 에너지가 크다.'},
 {t:'board',title:'녹색광 · 자외선',html:`<table><tr><th>빛</th><th>꼭 외울 것</th></tr><tr><td class="hl">녹색광</td><td>반사 5-10%, <b>85% 이상 흡수·투과</b>, 그늘회피 유발, <b>청색광 효과 소거</b></td></tr><tr><td class="hl">UV-B</td><td><b>하배축 신장 억제</b>, 초장·엽면적↓, 엽수·분지↑, 병충해 저항</td></tr><tr><td class="hl">UV</td><td>총 페놀·플라보노이드·항산화능↑ (PPT 퀴즈)</td></tr></table><p class="tip">💡 LUE = D ÷ PAR. "빛을 이만큼 줬는데 이만큼 컸다"</p>`}
 ]},
{ep:4, w:4, title:'비닐도 다 같은 비닐이 아니다', sub:'피복재 특성 · 유리 · 필름 · 경질판', color:'#00838f', emoji:'🧴',
 quiz:['광흡수율','산란율','인열강도','무적성','투습성','PE 필름','PO계 필름','PC판','PMMA판','FRP·FRA판'],
 memo:['흡수율 = 100 − 투과 − 반사 / 산란율 = 산란 ÷ (직달+산란)','열전도율·열팽창계수 낮을수록 좋음 / 인열강도 = 찢김 저항','PE 최다(77%)·저렴·단명 / PVC 보온·투습 / PO 무적성 3년+','PC 황변 없음 / FRP·FRA 백화 / 수명 PE1-2 EVA2-3 PO3-5 PMMA·유리10'],
 panels:[
 {t:'talk',bg:'#e0f7fa',L:['kid','sad'],R:['doc','smile'],prop:'🎞️',cap:'자재 창고',lines:[['kid','비닐 이름이 PE, PO, EVA… 알파벳 수프예요.'],['doc','특성 4가지로 정리하면 쉬워. <b>광학, 열, 내구성, 기능성</b>!']]},
 {t:'fig',title:'빛이 피복재를 만나면',svg:'cover',cap:'광투과율 · 광반사율 · 광흡수율 · 분광투과율(파장별) · 산란율(Haze factor)'},
 {t:'talk',bg:'#fff8e1',L:['doc','think'],R:['kid','think'],prop:'🌡️',lines:[['doc','<b>열전도율</b>은 열이 <b>나가는</b> 정도라 낮을수록 좋아. <b>열팽창계수</b>도 작을수록 좋고, 경질판이 유리보다 커.'],['kid','인열강도는요?'],['doc','뾰족한 걸로 찔렀을 때 <b>찢어지느냐</b>야.']]},
 {t:'talk',bg:'#e8f5e9',L:['kid','wow'],R:['doc','cool'],prop:'💧',lines:[['kid','기능성도 있어요?'],['doc','<b>무적성</b>(물방울이 흘러내림, 유적성), <b>투습성</b>(수증기 배출, PVC), <b>광전환성</b>, <b>방진성</b>(먼지 안 붙음)!']]},
 {t:'board',title:'연질 필름 비교',html:`<table><tr><th>필름</th><th>장점</th><th>단점</th></tr><tr><td class="hl">PE</td><td>최다(77%), 저렴, 먼지 적음</td><td>수명 1-2년, 보온력↓</td></tr><tr><td class="hl">EVA</td><td>투과율↑, PE와 PO 중간</td><td>PE보다 비쌈</td></tr><tr><td class="hl">PVC</td><td>보온력↑, 투습 → 터널</td><td>가소제로 먼지 부착</td></tr><tr><td class="hl">PO계</td><td>무적성↑, 3-5년</td><td>비쌈</td></tr></table>`},
 {t:'board',title:'유리와 경질판',html:`<table><tr><th>자재</th><th>꼭 외울 것</th></tr><tr><td class="hl">판유리</td><td>3mm, 610×914 / 벤로형 4mm / 91%</td></tr><tr><td class="hl">형판유리</td><td>산광유리, 빛 고르게</td></tr><tr><td class="hl">PC판</td><td>황변 없음, UV 차단 → 가지 착색·벌 문제</td></tr><tr><td class="hl">FRP·FRA</td><td>유리섬유 <b>백화</b> → PC로 대체</td></tr><tr><td class="hl">PMMA</td><td>10년, 내충격성 약함</td></tr><tr><td class="hl">불소(ETFE)</td><td>10년 92%, 폐기 주의</td></tr></table><p class="tip">💡 연암대 스마트팜 유리온실 = <b>유리 + PMMA판</b></p>`},
 {t:'talk',bg:'#fce4ec',L:['doc','smile'],R:['kid','smile'],prop:'🍅🏆',lines:[['doc','마지막 함정! <b>고급 과채류</b>는 연질 필름이 아니라 <b>고기능성 필름이나 유리온실</b>이야.'],['kid','PPT 퀴즈 그대로네요!']]}
 ]},
{ep:5, w:5, title:'빛을 재는 세 가지 자', sub:'광의 종류 · PPFD · DLI · 일장', color:'#f9a825', emoji:'📏',
 quiz:['복사','PAR','PPFD','조도','DLI','호광성 식물','호음성 식물','장일식물','단일식물'],
 memo:['광선 = 경로, 광파 = 파동, 복사(방사) = 에너지 전달','일사량 W(에너지) / PPFD μmol(광양자, 광합성) / 조도 lux(사람)','DLI = PPFD × 3600 × 시간 × 10⁻⁶ (500, 12h → 21.6)','서울 하지 15.6 · 동지 10.5 · 춘추분 12.6h / 감자 괴경 = 단일'],
 panels:[
 {t:'talk',bg:'#fffde7',L:['kid','think'],R:['doc','smile'],prop:'💡',cap:'광센서 앞',lines:[['kid','빛 세기 단위가 왜 이렇게 많아요?'],['doc','빛은 <b>양(에너지)</b>이기도 하고 <b>신호</b>이기도 해서 재는 자가 달라.']]},
 {t:'board',title:'빛 이름 구분 (PPT 퀴즈)',html:`<table><tr><th>이름</th><th>쓰는 때</th></tr><tr><td class="hl">광선</td><td>에너지 전달 <b>경로</b></td></tr><tr><td class="hl">광파</td><td><b>파동</b> 성질 강조</td></tr><tr><td class="hl">복사 = 방사</td><td>광파에 의한 <b>에너지 전달</b></td></tr></table><p class="tip">💡 "방사 = 광양자 전달"은 <b>틀린 말</b></p>`},
 {t:'board',title:'빛을 재는 세 가지 자',html:`<table><tr><th>자</th><th>재는 것</th><th>단위</th><th>용도</th></tr><tr><td class="hl">일사량</td><td>복사에너지</td><td>W·m⁻²</td><td>에너지 수지</td></tr><tr><td class="hl">PPFD</td><td>400-700nm 광양자 수</td><td>μmol·m⁻²·s⁻¹</td><td>광합성</td></tr><tr><td class="hl">조도</td><td>사람이 느끼는 밝기</td><td>lux</td><td>부적절</td></tr></table><p class="tip">💡 1 μmol = 5.02 촉광 = 54 lux = 4.57 W·m⁻²</p>`},
 {t:'talk',bg:'#e8f5e9',L:['doc','cool'],R:['kid','wow'],prop:'🧮',lines:[['doc','하루 동안 받은 빛을 다 더하면 <b>DLI</b>(mol·m⁻²·d⁻¹). 500 μmol을 12시간 비추면?'],['kid','500 × 3600 × 12 ÷ 100만 = <b>21.6</b>!'],['doc','완벽! 계산 문제 탭에서 숫자 바꿔가며 연습해.']]},
 {t:'talk',bg:'#e3f2fd',L:['kid','think'],R:['doc','smile'],prop:'🍉🌿',lines:[['kid','작물마다 좋아하는 빛도 달라요?'],['doc','<b>호광성</b>: 수박·토마토·토란·장미·국화. <b>호음성</b>: <b>머위</b>·생강·삼엽채·호접란·관엽식물.'],['doc','빛이 부족하면 잎이 얇고 넓어지고 절간이 길어져. 이게 <b>도장</b>!']]},
 {t:'talk',bg:'#fff3e0',L:['doc','think'],R:['kid','wow'],prop:'🌅',lines:[['doc','<b>장일식물</b>은 한계일장보다 <b>길 때</b>, <b>단일식물</b>은 <b>짧을 때</b> 꽃이 펴. 식물은 <b>4 lux</b>만 돼도 신호로 느껴.'],['kid','서울은요?'],['doc','북위 37.5°, 하지 <b>15.6h</b>, 동지 <b>10.5h</b>, 춘추분 <b>12.6h</b>.']]},
 {t:'board',title:'일장과 작물',html:`<table><tr><th>작물</th><th>장일</th><th>단일</th></tr><tr><td class="hl">배추</td><td>-</td><td>결구 촉진</td></tr><tr><td class="hl">무</td><td>지상부↑ T/R↑</td><td>뿌리 비대↑</td></tr><tr><td class="hl">마늘·양파</td><td>인경 형성</td><td>안 됨 (벌마늘)</td></tr><tr><td class="hl">감자</td><td>-</td><td>괴경 비대</td></tr><tr><td class="hl">오이</td><td>수꽃↑</td><td>암꽃↑</td></tr></table>`}
 ]},
{ep:6, w:6, title:'온실 방향 정하는 법', sub:'광량 감소 · 동서동/남북동 · 일장 조절 · 인공광', color:'#6a1b9a', emoji:'🧭',
 quiz:['입사각','동서동','남북동','광전환 필름','전조재배','광중단','일광온실','골조율','고압나트륨등','발광다이오드'],
 memo:['광량 감소 3요인: 반사·흡수 / 오염·노화 / 구조물 (광질 변화는 아님!)','차광률 유리 15% · 플라스틱 5% · 에어하우스 0%','동서동 투과율↑(겨울 84%) 촉성 / 남북동 균일, 연동 권장','전조: 들깻잎·국화 억제·딸기 휴면타파 / HPS 30% 보광 최다 / LED 5만h'],
 panels:[
 {t:'talk',bg:'#f3e5f5',L:['kid','think'],R:['doc','smile'],prop:'🧭',cap:'온실 부지 앞',lines:[['kid','땅 모양 따라 온실을 지으면 되죠?'],['doc','땅이랑 똑같이 짓지 마! <b>빛</b>을 보고 방향을 정해야 해.']]},
 {t:'board',title:'온실 안 빛이 줄어드는 이유',html:`<table><tr><th>요인</th><th>내용</th></tr><tr><td class="hl">피복재 반사·흡수</td><td><b>입사각</b>과 재료에 따라</td></tr><tr><td class="hl">오염·노화</td><td>먼지·특수성분·물방울, PVC 먼지 잘 붙음</td></tr><tr><td class="hl">구조물 차광</td><td>유리 15% / 플라스틱 5% / 에어하우스 0%</td></tr></table><p class="tip">💡 "광질의 변화"는 빛의 <b>색</b>이지 양이 아님 → PPT 퀴즈 오답</p>`},
 {t:'fig',title:'동서동 vs 남북동',svg:'orient',cap:'투과율은 동서동 > 남북동, 균일함은 남북동. 남북동 커튼은 홈통과 평행!'},
 {t:'talk',bg:'#e8f5e9',L:['doc','cool'],R:['kid','wow'],prop:'🪞',lines:[['doc','중국 <b>일광온실</b>은 북쪽 벽에 <b>반사판</b>을 달아서 빠져나가는 빛을 되돌려.'],['kid','유리나 PC 온실은요?'],['doc','<b>자외선</b>이 잘 안 들어와서 가지·장미 착색 불량, 도장, <b>수정벌</b>이 일을 안 해.']]},
 {t:'talk',bg:'#fff8e1',L:['kid','think'],R:['doc','smile'],prop:'🌙💡',lines:[['kid','밤에 불 켜는 하우스는 뭐예요?'],['doc','<b>전조재배</b>(장일처리)! 들깻잎, <b>국화 억제재배</b>, <b>딸기 휴면타파</b>. 수 μmol이면 충분해.'],['doc','단일처리는 반대로 <b>100% 암막</b>을 쳐.']]},
 {t:'board',title:'장일처리 조명법',html:`<table><tr><th>방법</th><th>시간</th></tr><tr><td class="hl">연속조명</td><td>일몰 ~ 일출</td></tr><tr><td class="hl">일장연장</td><td>일몰 후 4-8시간</td></tr><tr><td class="hl">광중단 (야파)</td><td>한밤중 2-5시간</td></tr><tr><td class="hl">간헐조명</td><td>야간 2-5시간 켰다 껐다</td></tr></table>`},
 {t:'fig',title:'보광 광원 4총사',svg:'light',cap:'수은등 = 원적색 적어 도장 없음 / 메탈할라이드 = 자연광과 비슷, 열↑ 수명↓'}
 ]}
];
