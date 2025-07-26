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
  },
  // 새로운 토론 예시 1
  {
    id: "6",
    author: {
      name: "한지민",
      avatar: "",
      role: "Frontend Developer"
    },
    content: "TypeScript를 도입한 이후로 코드의 안정성이 크게 향상되었습니다. 특히 대규모 프로젝트에서 타입 시스템의 이점이 확실히 느껴집니다.",
    topic: "TypeScript 도입 효과와 단점",
    tags: ["TypeScript", "Frontend", "TypeSafety"],
    timestamp: "3시간 전",
    isCreator: true,
    likes: 20,
    replies: 6
  },
  {
    id: "7",
    author: {
      name: "오세훈",
      avatar: "",
      role: "Backend Developer"
    },
    content: "런타임 에러가 줄어든 것은 좋지만, 타입 선언에 드는 시간이 생각보다 많아 생산성이 떨어질 때도 있습니다.",
    topic: "TypeScript 도입 효과와 단점",
    tags: ["TypeScript", "Productivity"],
    timestamp: "2시간 전",
    likes: 11,
    replies: 2
  },
  {
    id: "8",
    author: {
      name: "이서연",
      avatar: "",
      role: "Full Stack Developer"
    },
    content: "초기 학습 곡선이 있지만, 팀 전체의 코드 품질이 올라가서 장기적으로는 이득이라고 생각합니다.",
    topic: "TypeScript 도입 효과와 단점",
    tags: ["TypeScript", "TeamWork"],
    timestamp: "1시간 전",
    likes: 8,
    replies: 1
  },
  // 새로운 토론 예시 2
  {
    id: "9",
    author: {
      name: "박성민",
      avatar: "",
      role: "AI Researcher"
    },
    content: "ChatGPT와 같은 대형 언어 모델이 개발 생산성에 미치는 영향은 앞으로 더 커질 것 같습니다. 코드 리뷰나 문서화 자동화에 특히 기대가 큽니다.",
    topic: "AI 도구의 개발 생산성 영향",
    tags: ["AI", "Productivity", "LLM"],
    timestamp: "4시간 전",
    isCreator: true,
    likes: 17,
    replies: 4
  },
  {
    id: "10",
    author: {
      name: "최유진",
      avatar: "",
      role: "Frontend Developer"
    },
    content: "AI가 코드를 자동으로 생성해주긴 하지만, 아직은 사람이 직접 검토해야 할 부분이 많다고 생각해요.",
    topic: "AI 도구의 개발 생산성 영향",
    tags: ["AI", "CodeReview"],
    timestamp: "3시간 전",
    likes: 10,
    replies: 2
  },
  {
    id: "11",
    author: {
      name: "정지훈",
      avatar: "",
      role: "DevOps Engineer"
    },
    content: "AI가 배포 자동화나 모니터링에도 활용될 수 있을지 궁금합니다. 실제로 적용해본 사례가 있으면 공유해주세요!",
    topic: "AI 도구의 개발 생산성 영향",
    tags: ["AI", "DevOps"],
    timestamp: "2시간 전",
    likes: 7,
    replies: 1
  },
  // 새로운 토론 예시 3
  {
    id: "12",
    author: {
      name: "김수현",
      avatar: "",
      role: "Product Manager"
    },
    content: "원격 근무가 일상화되면서 협업 방식에도 많은 변화가 생겼습니다. 온라인 협업 툴의 중요성이 커진 것 같아요.",
    topic: "원격 근무와 협업 문화의 변화",
    tags: ["RemoteWork", "Collaboration", "Culture"],
    timestamp: "5시간 전",
    isCreator: true,
    likes: 13,
    replies: 3
  },
  {
    id: "13",
    author: {
      name: "이정훈",
      avatar: "",
      role: "Full Stack Developer"
    },
    content: "화상 회의가 많아지면서 오히려 피로도가 높아진다는 의견도 있습니다. 균형 잡힌 협업 방식이 필요해 보여요.",
    topic: "원격 근무와 협업 문화의 변화",
    tags: ["RemoteWork", "Meeting"],
    timestamp: "4시간 전",
    likes: 6,
    replies: 1
  },
  {
    id: "14",
    author: {
      name: "박지수",
      avatar: "",
      role: "Designer"
    },
    content: "디자인 협업도 온라인 툴로 충분히 가능해졌지만, 가끔은 오프라인에서 직접 소통하는 게 더 효율적일 때도 있어요.",
    topic: "원격 근무와 협업 문화의 변화",
    tags: ["RemoteWork", "Design"],
    timestamp: "3시간 전",
    likes: 5,
    replies: 1
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