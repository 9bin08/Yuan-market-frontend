# Yuan-market-frontend

## 설치 방법

```sh
yarn install
yarn dev
```

### 1. 구현내용 / 구현 완료

- 1.  검색
  - 1. 초기 진입 시 빈 화면을 노출한다. / ✅
  - 2. 검색어를 입력 시 연관 상품 데이터 리스트를 리스팅 하고 입력한 검색어를 하이라이팅 처리한다. / ✅
  - 3. 검색 결과를 선택하거나 엔터를 입력하면 상품 리스트로 이동한다. / ✅
- 2.  상품 리스트
  - 1. 검색창에 value가 있을 경우 x 아이콘을 노출한다. / ✅
  - 2. X 아이콘을 클릭 시 초기 검색 화면을 노출한다. / ✅
  - 3. 상품 리스트는 상품명과 매칭되는 데이터를 노출한다. / ✅
  - 4. 상품 리스트마다 장바구니 추가 아이콘이 노출된다. / ✅
  - 5. 장바구니 아이콘을 클릭 시 장바구니에 추가가 되고 총 갯수를 표시한다. / ✅
  - 6. 이미 담겨있는 상품을 추가 시 validation을 통해 추가하지 않고 alert을 노출한다. / ✅
  - 7. 상품 리스트 최상단엔 필터링 아이콘을 노출한다. / ✅
  - 8. 필터링 아이콘을 클릭 시 바텀시트를 노출한다. / ✅
- 3.  바텀시트 1. 바텀시트는 3depth 구조로 구현한다.
  - 1. Tabs => Accordion => List / ✅
  - 2. list단계의 카테고라가 선택되면 선택완료 버튼으로 노출된다. / ✅
- 4.  필터링
  - 1. 바텀 시트에서 선택한 list들을 clip형태로 리스트 최상단에 노출한다. / ✅
  - 2. 가로 사이즈를 넘어가면 좌/우 스크롤이 가능하다. / ✅
  - 3. Clip 내부 x 아이콘을 클릭 하면 해당 필터링은 제거한다 / ✅
  - 4. 필터 버튼을 클릭하여 바텀시트를 다시 활성화 했을 경우 해당 아코디언은 열려있다. / ✅
  - 5. 검색, 필터링은 외부에 공유가 가능해야 한다. / ✅
- 5.  장바구니
  - 1. 아이콘 클릭 시 장바구니 페이지로 이동한다. / ✅
  - 2. 페이지를 새로고침 하여도 리스트는 유지된다. / ✅
  - 3. 상품에 있는 X 버튼을 클릭하면 장바구니에서 제거된다. / ✅
  - 4. 뒤로가기 버튼 클릭 시 이전 페이지로 돌아가고 데이터는 유지된다. / ✅

## 구현 내용

npm create vite (react v18+ + typescript)로 초기세팅 진행하였습니다. 기본 이니셜라이즈 되는 패키지 외 추가한 패키지는 다음과 같습니다.

- axios
- css-in-js (@emotion)
- react-router-dom (v6+)
- react-query (v3+)
- zustand (v4+)
- Eslint config package(devDependencies)
- typescript-eslint/eslint-plugin (devDependencies)
- MSW (devDependencies)

구현 하면서 가장 고민 했던 부분은 3가지 였습니다.

1. API가 따로 제공하지 않기 때문에 클라이언트 환경에서 MOCK데이터를 만들고 실제 백엔드 서버와 통신 로직을 유사하게 구현하여야 했습니다. 현업에서 빈번하게 일어나고 있는 일이라 최소한의 인터페이스만 협의 후 작업 가능한 환경을 구성하고, 실제 API가 개발되면 클라이언트 사이드의 로직 변화 없이 적용 가능 하도록 노력하였습니다.

2. react-query를 통해 서버데이터와 클라이언트 데이터의 분리를 통해 책임 분리를 하고 흐름 파악이 쉬운 코드 작성을 위해 노력하였습니다. 서버 데이터는 query를 통해 모두 관리하고 query에서 제공하는 캐시 전략을 이용하여 트랜젝션을 최소화 하고 클라이언트 상태를 나눠 디버깅이 쉬운 코드 작성을 위해 노력하였습니다.

3. 외부에게 검색 결과를 공유할 수 있는 구조를 위해 쿼리스트링을 이용하였습니다.

## 폴더 구조

```sh
src
 ┣ __mocks__
 ┃ ┣ browser.ts
 ┃ ┣ handlers.ts
 ┃ ┣ index.ts
 ┃ ┗ server.ts
 ┣ api
 ┃ ┣ README.md
 ┃ ┣ category.ts
 ┃ ┣ categoryHandler.ts
 ┃ ┣ categoryResultData.ts
 ┃ ┣ client.ts
 ┃ ┣ endpoints.ts
 ┃ ┣ goods.ts
 ┃ ┣ goodsHandler.ts
 ┃ ┣ goodsResultData.ts
 ┃ ┣ search.ts
 ┃ ┗ searchHandler.ts
 ┣ assets
 ┃ ┣ font
 ┃ ┃ ┣ Pretendard-Bold.woff2
 ┃ ┃ ┣ Pretendard-Medium.woff2
 ┃ ┃ ┗ Pretendard-Regular.woff2
 ┃ ┣ icons
 ┃ ┃ ┣ arrow_default_black.png
 ┃ ┃ ┣ arrow_down_gray.png
 ┃ ┃ ┣ arrow_leftup_gray.png
 ┃ ┃ ┣ cart_black.png
 ┃ ┃ ┣ check_white.png
 ┃ ┃ ┣ close_default_gray.png
 ┃ ┃ ┣ close_key.png
 ┃ ┃ ┗ filtered_black.png
 ┃ ┗ react.svg
 ┣ components
 ┃ ┣ @shared
 ┃ ┃ ┣ Button
 ┃ ┃ ┃ ┣ index.tsx
 ┃ ┃ ┃ ┗ styles.tsx
 ┃ ┃ ┣ Checkbox
 ┃ ┃ ┃ ┣ index.tsx
 ┃ ┃ ┃ ┗ styles.tsx
 ┃ ┃ ┣ Icon
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┣ Image
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┗ Input
 ┃ ┃ ┃ ┣ index.tsx
 ┃ ┃ ┃ ┗ styles.tsx
 ┃ ┣ Accordion
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ styles.tsx
 ┃ ┣ Clip
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ styles.tsx
 ┃ ┣ ErrorBoundary
 ┃ ┃ ┗ index.tsx
 ┃ ┣ HighlightedText
 ┃ ┃ ┗ index.tsx
 ┃ ┣ Tabs
 ┃ ┃ ┣ TabList.tsx
 ┃ ┃ ┣ TabPanel.tsx
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ styles.tsx
 ┃ ┣ .DS_Store
 ┃ ┗ README.md
 ┣ constants
 ┃ ┣ README.md
 ┃ ┗ icons.ts
 ┣ layout
 ┃ ┣ README.md
 ┃ ┣ index.tsx
 ┃ ┗ styles.tsx
 ┣ pages
 ┃ ┣ CartPage
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ styles.tsx
 ┃ ┣ MarketPage
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ BottomSheet
 ┃ ┃ ┃ ┃ ┣ index.tsx
 ┃ ┃ ┃ ┃ ┗ styles.tsx
 ┃ ┃ ┃ ┗ SearchBar
 ┃ ┃ ┃ ┃ ┣ index.tsx
 ┃ ┃ ┃ ┃ ┗ styles.tsx
 ┃ ┃ ┣ queries
 ┃ ┃ ┃ ┣ useCategoryList.ts
 ┃ ┃ ┃ ┣ useGoodsList.ts
 ┃ ┃ ┃ ┗ useSearchList.ts
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ styles.tsx
 ┃ ┗ README.md
 ┣ router
 ┃ ┗ index.tsx
 ┣ store
 ┃ ┣ middleware
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ withSelector.ts
 ┃ ┣ README.md
 ┃ ┗ useCartStore.ts
 ┣ styles
 ┃ ┣ README.md
 ┃ ┣ colors.ts
 ┃ ┗ typography.ts
 ┣ .DS_Store
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ vite-env.d.ts
```

## 카테고리 MOCK 데이터 예시

export const category = [
{
category: '텐트/타프',
subCategory: [
{ type: '텐트', goods: ['돔텐트', '터널텐트', '팝업텐트', '백패킹텐트', '차박텐트'] },
{ type: '타프', goods: ['헥사타프', '렉타타프', '윈드스크린'] },
{ type: '텐트용품', goods: ['그라운드시트', '이너텐트', '폴대', '팩', '해먹'] },
],
},
{
category: '취사용품',
subCategory: [
{ type: '버너/스토브', goods: ['가스버너', '휴대용스토브', '고체연료버너', '버너스탠드'] },
{ type: '취사도구', goods: ['코펠', '프라이팬', '주전자', '그릴', '더치오븐'] },
{ type: '식기류', goods: ['접시', '컵/머그', '수저/포크', '식기세트', '컵받침'] },
],
},
{
category: '캠핑가구',
subCategory: [
{ type: '테이블', goods: ['접이식테이블', '롤테이블', '화로테이블', '사이드테이블'] },
{ type: '의자', goods: ['접이식의자', '경량의자', '릴렉스체어', '로우체어'] },
{ type: '수납가구', goods: ['캠핑박스', '폴딩박스', '선반', '행거'] },
],
},
{
category: '침낭/매트',
subCategory: [
{ type: '침낭', goods: ['머미형', '사각형', '덕다운', '키즈침낭'] },
{ type: '매트', goods: ['에어매트', '폼매트', '자충매트', '코트매트'] },
{ type: '베개/쿠션', goods: ['캠핑베개', '쿠션', '방석'] },
],
},
{
category: '캠핑소품',
subCategory: [
{ type: '조명', goods: ['랜턴', '헤드랜턴', '걸이용조명', '태양광조명'] },
{ type: '캠핑공구', goods: ['멀티툴', '해머', '톱', '삽', '나이프'] },
{ type: '캠핑가전', goods: ['파워뱅크', '휴대용선풍기', '캠핑용냉장고', '캠핑용히터'] },
],
},
]
