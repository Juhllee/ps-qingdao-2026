# 🍺 칭다오 맥주축제 원정대 2026

2026.07.16 (목) → 07.20 (월) · 9인 칭다오 여행 일정·숙소·식당·지도

🌐 **공유 URL**: https://juhllee.github.io/ps-qingdao-2026/

## 멤버
- **A팀 (7인 · 샤오다오 8인실)**: 준희 · 준 · 창욱 · 경덕 · 남준 · 남준♥ · 석환
- **B팀 (부부 · JI Hotel · 7/16~7/19)**: 재영 · 재영♥

## 페이지 사용법
- 브라우저에서 열기
- 안드/iOS: **"홈 화면에 추가"** → 앱처럼 실행
- 오프라인 캐싱 지원 (한 번 본 페이지는 인터넷 없어도 열림)

## 🔔 푸쉬 알림 보내는 법 (관리자용)

커밋 메시지에 `[notify:제목]` 또는 `[notify]` 포함 시 자동으로 9명에게 푸쉬 알림 발송.

### 예시
```bash
# 제목 지정 + 본문
git commit -m "[notify:🏨 호텔 변경] 샤오다오 8인실로 확정됐어요"

# 기본 제목 사용
git commit -m "[notify] 일정 페이지 업데이트 했어요"

# 알림 없이 조용히 push
git commit -m "[skip notify] 오타 수정"

# 일반 commit (알림 안 보냄, 기본)
git commit -m "오타 수정"
```

알림은 GitHub Push 직후 1~2초 내 발송.

## 기술 스택
- 단일 HTML + 인라인 CSS/JS
- PWA (manifest + service worker)
- OneSignal Web Push
- GitHub Pages (자동 배포)
- GitHub Actions (커밋 메시지 기반 알림 발송)
