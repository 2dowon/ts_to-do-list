# TO DO LIST

<img src="./public/ts_to-do-list.gif" />

<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/> <img alt="Next.js" src ="https://img.shields.io/badge/Next.js-000000.svg?&style=for-the-badge&logo=Next.js&logoColor=white"/> <img alt="Vercel" src ="https://img.shields.io/badge/Vercel-000000.svg?&style=for-the-badge&logo=Vercel&logoColor=white"/> <img alt="Airtable" src ="https://img.shields.io/badge/Airtable-18BFFF.svg?&style=for-the-badge&logo=Airtable&logoColor=white"/>

## Introduction

기존에 [React로 구현한 TO DO LIST](https://github.com/2dowon/react_to-do-list)의 업그레이드 버전으로 디자인은 동일하지만, 사용한 스택이 달라졌습니다.

현재 TO DO LIST는 React + TypeScript + Recoil + React Query + Airtable 조합으로 구현되었습니다.

- Next.js + Vercel을 통해 배포했습니다.
- 비동기 데이터 관리를 위해 React Query를 이용하고 있습니다.
- Airtable을 이용해 to do list의 데이터를 관리하고 있습니다.
- Airtable을 이용하기 전에는 Recoil을 통해 상태를 관리했습니다. [해당 커밋](https://github.com/2dowon/ts_to-do-list/commit/cdd3d68492145b6811971d5e975622df02e10a65)에서 확인할 수 있습니다. (사실 굳이 필요없었으나 Recoil을 경험해보기 위해 사용했으며, Airtable 적용에 따라 현재는 Recoil을 이용하지 않습니다. )

## TO DO LIST 기능

- 오늘의 날짜를 확인할 수 있습니다.
- 할 일을 추가할 수 있고, 현재 등록된 할 일의 총 개수가 표시됩니다.
- 할 일은 클릭하면 완료됐다는 의미로 할 일은 줄이 그어지면서 체크 표시가 됩니다.
- 휴지통 아이콘을 통해 할 일을 삭제할 수 있습니다.
- Airtable에 저장되기 때문에 새로고침을 해도 기존에 추가된 to do list가 삭제되지 않습니다.
- Chakra UI의 Toast를 사용해 to do list 데이터 불러오기, 할 일 추가, 삭제할 때 상태를 표현해주고 있습니다.

## Link

https://ts-to-do-list.vercel.app/
