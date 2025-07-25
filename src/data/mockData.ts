import { Opinion } from "@/components/DiscussionCard";

export const mockOpinions: Opinion[] = [
  {
    id: "1",
    author: {
      name: "김태현",
      avatar: "",
      role: "Senior Frontend Developer"
    },
    content: "React 18의 Concurrent Features는 사용자 경험을 획기적으로 개선할 수 있다고 생각합니다. 특히 Suspense와 함께 사용하면 로딩 상태를 더 우아하게 처리할 수 있어요. 다만 기존 코드베이스에 적용할 때는 주의깊게 마이그레이션해야 할 것 같습니다.",
    topic: "React 18 Concurrent Features 도입 시점",
    tags: ["React", "Concurrent", "Frontend", "Performance"],
    timestamp: "2시간 전",
    isCreator: true,
    likes: 24,
    replies: 8
  },
  {
    id: "2",
    author: {
      name: "박지영",
      avatar: "",
      role: "Full Stack Developer"
    },
    content: "저는 조금 더 신중한 접근이 필요하다고 봅니다. Concurrent Features는 분명 강력하지만, 팀의 학습 곡선과 기존 라이브러리들의 호환성을 고려해야 해요. 점진적으로 도입하는 것이 좋을 것 같습니다.",
    topic: "React 18 Concurrent Features 도입 시점",
    tags: ["React", "Migration", "TeamWork"],
    timestamp: "1시간 전",
    likes: 18,
    replies: 5
  },
  {
    id: "3",
    author: {
      name: "이민수",
      avatar: "",
      role: "Backend Developer"
    },
    content: "백엔드 관점에서 보면, 프론트엔드의 변화가 API 설계에도 영향을 줄 수 있어요. Concurrent Features를 제대로 활용하려면 서버 측에서도 스트리밍이나 부분 응답을 지원하는 것이 좋겠습니다.",
    topic: "React 18 Concurrent Features 도입 시점",
    tags: ["Backend", "API", "Streaming"],
    timestamp: "30분 전",
    likes: 12,
    replies: 3
  },
  {
    id: "4",
    author: {
      name: "최수진",
      avatar: "",
      role: "Product Manager"
    },
    content: "비즈니스 관점에서는 사용자 경험 개선이 명확하게 측정 가능한지가 중요합니다. Concurrent Features 도입으로 인한 성능 향상을 어떻게 지표로 만들어 추적할 수 있을까요?",
    topic: "React 18 Concurrent Features 도입 시점",
    tags: ["Product", "Metrics", "UX"],
    timestamp: "20분 전",
    likes: 15,
    replies: 7
  },
  {
    id: "5",
    author: {
      name: "정우진",
      avatar: "",
      role: "DevOps Engineer"
    },
    content: "배포와 모니터링 관점에서 Concurrent Features는 새로운 도전입니다. 특히 서버 사이드 렌더링 환경에서의 성능 모니터링과 에러 추적을 어떻게 할지 미리 준비해야 할 것 같아요.",
    topic: "React 18 Concurrent Features 도입 시점",
    tags: ["DevOps", "Monitoring", "SSR"],
    timestamp: "10분 전",
    likes: 9,
    replies: 2
  }
];

export const getNextOpinion = (currentId: string, direction: "horizontal" | "vertical"): Opinion => {
  const currentIndex = mockOpinions.findIndex(op => op.id === currentId);
  
  if (direction === "horizontal") {
    // 비슷한 의견 (같은 토픽 내에서)
    const sameTopicOpinions = mockOpinions.filter(op => op.topic === mockOpinions[currentIndex].topic);
    const nextIndex = (sameTopicOpinions.findIndex(op => op.id === currentId) + 1) % sameTopicOpinions.length;
    return sameTopicOpinions[nextIndex];
  } else {
    // 다른 의견 (전체 의견 중에서)
    const nextIndex = (currentIndex + 1) % mockOpinions.length;
    return mockOpinions[nextIndex];
  }
};