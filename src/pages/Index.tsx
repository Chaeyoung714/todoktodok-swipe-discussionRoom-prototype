import { useNavigate } from "react-router-dom";
import { mockOpinions } from "@/data/mockData";

const Index = () => {
  const navigate = useNavigate();
  // 토픽별로 중복 제거
  const topics = Array.from(new Set(mockOpinions.map(op => op.topic)));

  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <header className="relative z-10 pt-12 pb-6 text-center">
        <h1 className="text-2xl font-bold" style={{ color: '#1AB25C' }}>💭 토독토독</h1>
        <p className="text-sm" style={{ color: '#181A1A' }}>읽고, 토론하자</p>
      </header>
      <main className="relative z-10 flex flex-col items-center justify-center px-4 gap-4" style={{ minHeight: '60vh' }}>
        <h2 className="text-lg font-semibold mb-4" style={{ color: '#1AB25C' }}>토론 기록</h2>
        <ul className="w-full max-w-md space-y-4">
          {topics.map((topic, idx) => (
            <li key={topic}>
              <button
                className="w-full rounded-xl p-4 shadow transition flex items-center justify-between hover:opacity-90"
                style={{ background: '#F0F5F2', color: '#181A1A', fontWeight: 600 }}
                onClick={() => navigate(`/discussion/${encodeURIComponent(topic)}`)}
              >
                <span style={{ color: '#1AB25C', fontWeight: 700 }}>{topic}</span>
                <span className="text-xs" style={{ color: '#181A1A' }}>{mockOpinions.filter(op => op.topic === topic).length}개의 의견</span>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Index;
