# doong-ji.github.io
본 프로젝트는 둥지팀을 대표하는 공식 홈페이지입니다.

## 😎 개발환경
### ✔ client
- Typescript 4.1.5
- react 17.0.2
- react-router-dom 5.2.0
- redux-toolkit 1.5.1
- antd 4.15.4
- emotion 11
- story-book 6.2.9

### ✔ server
- jdk 11
- Spring boot 2.4.2
- Spring data JPA 2.4.2
- Maria DB 10.5.5
- h2 DB (test용)
- jUnit5


## 🌟 Repository 규칙
1. 본 레파지토리의 구성은 다음과 같다.
```text
main
--develop
----publishing
----client
----server
```
2. feature에서 개발 후, merge의 대상은 각 파트별 브랜치로 한다. (publishing, client, server)
3. develop에는 각 파트별 브랜치만이 merge할 수 있다. (feature x)
4. 이슈나 PR을 올릴 시, 각 파트에 해당하는 Label을 붙여 주도록 한다.
5. 리뷰어들은 PR본문에 올라온 **체크리스트**를 통해 완료된 기능들은 체크표시를 해 준다.
6. PR 본문에 있는 체크리스트의 모든 항목이 **체크**되어야 merge가 가능하다.

### ✔ Commit Message 규칙
- feat : 새로운 기능에 대한 커밋
- docs : 문서 수정에 대한 커밋
- fix : 버그 수정에 대한 커밋
- chore : 그 외 자잘한 수정에 대한 커밋
- refactor :  코드 리팩토링에 대한 커밋
- test : 테스트 코드 수정에 대한 커밋


## 🎃 구현 기능
1. 사용자 관리
    - 사용자 접근 권한 : guest, team, admin
    - 마이페이지
    - 프로필 이미지
2. 일정 관리
    - 카테고리로 일정 구분
    - 일정명, 기간, 참석자, 위치, 메모를 등록
3. 프로젝트 관리
    - 진행 예정, 진행 중, 완료된 프로젝트 관리
    - 회의록
4. 팀원 소개
    - 각 팀원 별 작업한 프로젝트 조회
    - 팀원 평가
5. 게시판
    - 게시글과 댓글 좋아요 표시
    - 댓글과 대댓글
    - 게시글, 댓글 신고
    - 투표 기능(공지사항만 해당)
    - 조회한 사용자 확인(공지사항만 해당)
6. QnA
    - 질문 작성
    - 해당 질문의 답글 작성
7. 알림 기능
    - 내가 쓴 게시글/댓글에 답글이 달렸을 경우
8. 관리자 기능


## 🎁 기여 방법
1. (<https://github.com/Doong-Ji/doong-ji.github.io.git>)을 포크합니다.
2. (`git checkout -b feature/#이슈번호_기능`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'feat: 기능'`) 명령어로 커밋하세요.
4. (`git push origin feature/#이슈번호_기능`) 명령어로 브랜치에 푸시하세요.
5. Pull request를 보내주세요. (merge 대상은 각 파트 브랜치로 보내주세요.)
6. 팀원들은 코드리뷰를 작성합니다. (1명 이상이 코드리뷰에 참여해야 develop브랜치에 Merge가 가능합니다.)
<br/>

## 💡 Reference
- 화면 디자인 (Figma) <br/>
  https://www.figma.com/file/orPEGDtEnC744G1ThIv9K6/doongji_%ED%8C%80%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=0%3A1

- ERD <br/>
  https://www.erdcloud.com/d/YbKp9KA7xWDu492Za
