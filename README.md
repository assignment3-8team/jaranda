# 프리온보딩 Assignment 3 - [jaranda]
[🏄🏻 Assignment3 자란다](https://www.notion.so/Assignment-3-9fdda37ca68a4748a3e034d80e4533ef)

## Objective

![화면 기록 2021-08-06 오후 4 08 02](https://user-images.githubusercontent.com/61695175/128471332-356e4ac6-a3d6-4a87-a346-4e33853441a2.gif)



## 1. 팀원별 과제 구현 파트 😎

| 이름   | 구현파트                                                                                    |
| ------ | ------------------------------------------------------------------------------------------- |
| 김준영 | 로그인 기능 구현, input validation 및 form validation 기능, strapi를 사용한 api 개발        |
| 박민혁 | 검색기능 컴포넌트 구현 및 적용                                                              |
| 서희영 | 회원가입(SignUp) 관련 및 Modal 팝업 컴포넌트 구현, Register 페이지 구성 및 api 연동         |
| 조영후 | main Header, Page Header, user Table, table Pagination, admin TablePage, RouteIf            |
| 이선화 | strapi를 사용한 api개발, 허용메뉴 설정 컴포넌트 UI구성 및 api 연동, UserDetails 페이지 작업 |

## 2. 설치 및 시작하는 법

이 프로젝트는 Create React App으로 생성되었습니다.

> This project was bootstrapped with Create React App.

#### `npm i`

프로젝트에 필요한 npm packages, node_modules 다운로드

#### `npm run start`

개발모드로 웹 환경을 시작하는 명령어로
접속주소는 http://localhost:3000 입니다.

#### `npm run build`

빌드하는 명령어로 현재 설정되어있는 환경 변수에 따라 빌드 됩니다.
(cra 기본설정)

## 3. 프로젝트 폴더구조

```
📦 jaranda
💾 components 컴포넌트 구성요소
💾 config 전역 설정 파일(env)
💾 constants 프로젝트 내부에서 사용하는 공통 상수
💾 container unstated-next 기반의 공유 상태 관리 container
💾 hooks 공통적으로 사용되는 커스텀 hooks
💾 pages 각 Router 에 매칭되는 실제 Page
💾 Router 라우터 설정
💾 utils 공통 함수, apis 관리
```

## 4. 전역상태 관리 라이브러리(unstated-next)

> 로그인한 유저의 uesrInfo를 전역으로 관리하기 위함

1. Admin Page의 manageMenu에 의한 상태값 변화에 따른 menuList 부분 연동 작업에 전역상태 관리자를 이용
2. 권한이 필요한 페이지에 링크로 접속할 경우를 제한하기 위해 hoc을 만들 때 사용
3. api 통신 Authorization에 사용

## 5. 배포

> Netlify 무료배포 사이트를 이용하였습니다.

[자란다 사이트 GO 🏄🏻](https://reverent-leavitt-b468d2.netlify.app)

어드민 계정 정보 
| ID              | P/W           |
| ----------------|-------------- |
| admin@admin.com | string12      |

## Reference

미팅로그 참조 - [미팅로그](https://www.notion.so/jaranda-b6d2e1e0c0504191a68795bfbd17f3c4)

디자인 참조 - [피그마](https://www.figma.com/file/OL0x0hPOjonwF0Vl9jVuKD/Untitled?node-id=5%3A2)

api 참조 (테스트 계정 정보 포함) - [api명세서](https://alpine-principle-c26.notion.site/api-b50d60e7dd3f47c4878fdc0b12a5e176)
