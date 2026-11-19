import { useEffect, useState } from 'react';

// LAB 1 (Slide 07): useEffect Timer
export default function Lab1EffectTimer() {
  const [count, setCount] = useState(0);
  console.log('[LAB 1] rendered');

  useEffect(() => {
    // TODO 1: 1초마다 setCount(prev => prev + 1)을 실행할 setInterval 작성
    // TODO 2: 만든 타이머 ID를 보관
    const id = setInterval(() => {
      setCount(prev => prev + 1);//setCount(count) + 1)의 경우 에로우 함수가 없음으로 커밋이 안 됨으로(?) 버튼을 몇번 누르던지 결국 1이 나옴
      
    }, 1000);
    // TODO 3: return Cleanup 함수에서 clearInterval 호출
    return()=>clearInterval(id);
    // TODO 4: Dependency Array가 []일 때와 생략했을 때의 차이 관찰
  },[]);

  return (
    <div>
      <p className="hint">TODO를 완성하면 1초마다 자동으로 Count가 증가해야 합니다.</p>
      <div className="count">{count}</div>
      <p className="hint">Console에서 Render / Effect / Cleanup을 비교하세요.</p>
    </div>
  );
}
