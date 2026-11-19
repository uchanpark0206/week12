# OSS Week 12 — React Hooks Playground (Student Starter)

## 실행 방법
Node.js 20.19+ 또는 22.12+ 권장. 프로젝트 폴더에서 실행:

```bash
npm install
npm run dev
```

브라우저에 터미널의 Local URL을 열고 LAB 탭을 이동하세요. 제출 전 `npm run build`도 실행하세요.

## 수행 방법
1. `src/components/` 아래의 LAB 1~4 파일에 있는 `TODO`를 직접 완성합니다.
2. `src/App.jsx`, `src/App.css`는 공통 화면이므로 가급적 수정하지 않습니다.
3. 각 LAB의 동작 화면과 콘솔 결과를 기록합니다.
4. 한 LAB에서 다른 LAB으로 탭을 전환하면 기존 컴포넌트가 언마운트됩니다. Cleanup 결과를 관찰합니다.


## 이해도 확인 질문
1. `setCount(prev => prev + 1)`은 왜 유용한가?
2. `useEffect(fn, [])`과 `useEffect(fn)`은 어떻게 다른가?
3. Cleanup은 언제 실행되는가? 개발 환경 StrictMode 영향은?
4. `useState`와 `useRef`의 값 변경 시 렌더링 차이는?
5. LAB 2와 LAB 4에서 Timer를 관리하는 방식의 차이는?

1. Project Information: 프로젝트 소개 및 Starter Project 정보
        프로젝트 소개:
        훅 useEffect useRef 중 useEffect와Cleanup을 이해라기 위해 위한 프로젝트

        lab1:
        외부 시스템과 컴포넌트를 동기화하기 위해 사용하는 Hook 인 useEffec의 사용법을 익히고 []를 사용한것과 사용하지 않은것의 차이를 확인해 보기 위한 예제

        lab2:
        외부 시스템과 컴포넌트를 동기화하기 위해 사용하는 Hook 인 useEffec의 사용법을 중 Dependency Array에서 특정 state가 바뀔떄마다 샐행됨을 이해하기 위한 예제

        lab3:
        useRef를 사용해서 랜더링 되더라도 값이 그대로 유지됨을 이해하고

        lab4:


2. Installation: 설치·실행 방법 및 실행 화면
3. Source Code Exploration: 주요 파일 구조, useEffect 및 useRef 분석, 주요 코드 2개 설명
4. Lab Implementation: 4개 Lab 구현 내용 및 실행 결과
5. Lab Comparison: STEP 3의 비교 분석 질문 4개에 대한 답변
6. Customizing: 수정 내용 및 파일명
7. Deployment: 실제 접근 가능한 Vercel URL
8. Weekly Review:

<!--
dependen챧ㄴ: 실해되는 시점

mount

unmount

efect가 먼저 실행
 두번째 실행 직전에 클린업 실행


클린업은 정리하는 작업


useEffect(fn,[]):최초 마운트 
useEffect(fn):커밋될떄 (프롭스와 스테이트가 바뀌었을때)실행
useEffect(fn,[count]):카운트가 변결될때 마다 실행


useEffect(클린업,[]):언마운트 될떄
useEffect(클린업) 커밋되기 직전에 정리를 함
 
-->