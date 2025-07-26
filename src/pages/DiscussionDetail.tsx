import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { mockOpinions } from "@/data/mockData";
import { DiscussionCard } from "@/components/DiscussionCard";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

const DiscussionDetail = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const opinions = mockOpinions.filter(op => op.topic === topic);
  const creatorOpinion = opinions.find(op => op.isCreator) || opinions[0];
  const [showAuthorModal, setShowAuthorModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newOpinion, setNewOpinion] = useState("");
  const [opinionsState, setOpinionsState] = useState(opinions);
  const [currentIdx, setCurrentIdx] = useState(0);
  const { toast } = useToast();

  const handleSwipeHorizontal = (direction: "left" | "right") => {
    if (opinionsState.length <= 1) return;
    if (direction === "left") {
      setCurrentIdx((prev) => (prev + 1) % opinionsState.length);
      toast({ description: "다음 비슷한 의견", duration: 1000 });
    } else {
      setCurrentIdx((prev) => (prev - 1 + opinionsState.length) % opinionsState.length);
      toast({ description: "이전 비슷한 의견", duration: 1000 });
    }
  };

  const handleSwipeVertical = (direction: "up" | "down") => {
    toast({ description: direction === "up" ? "이전 다른 의견" : "다음 다른 의견", duration: 1000 });
  };

  const handleAddOpinion = () => {
    if (!newOpinion.trim()) {
      toast({ description: "의견을 입력해주세요.", duration: 1000 });
      return;
    }
    const newOp = {
      id: (Math.random() * 100000).toFixed(0),
      author: { name: "익명", role: "참여자" },
      content: newOpinion,
      topic: topic || "",
      tags: [],
      timestamp: "방금 전",
      likes: 0,
      replies: 0,
    };
    setOpinionsState(prev => [...prev, newOp]);
    setCurrentIdx(opinionsState.length); // 새 의견으로 이동
    setShowAddModal(false);
    setNewOpinion("");
    toast({ description: "의견이 추가되었습니다!", duration: 1000 });
  };

  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <header className="flex items-center gap-2 p-4">
        <button onClick={() => navigate(-1)} className="font-bold text-lg" style={{ color: '#1AB25C' }}>←</button>
        <h2 className="font-semibold text-lg ml-2" style={{ color: '#1AB25C' }}>{topic}</h2>
      </header>
      <main className="flex flex-col items-center gap-4 px-4">
        <button className="mt-2 mb-2 px-4 py-2 rounded shadow" style={{ background: '#1AB25C', color: '#FFFFFF' }} onClick={() => setShowAuthorModal(true)}>
          작성자 의견 보기
        </button>
        <div className="w-full max-w-md flex items-center justify-center" style={{ height: '500px' }}>
          <DiscussionCard
            key={opinionsState[currentIdx]?.id}
            opinion={opinionsState[currentIdx]}
            onSwipeHorizontal={handleSwipeHorizontal}
            onSwipeVertical={handleSwipeVertical}
          />
        </div>
        <button className="mt-4 px-4 py-2 rounded shadow" style={{ background: '#1AB25C', color: '#FFFFFF' }} onClick={() => setShowAddModal(true)}>
          의견 추가하기
        </button>
        <div className="flex flex-row gap-2 mt-4">
          {/* 여기에 비슷한 의견 카드들 배치 */}
        </div>
      </main>
      {showAuthorModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="rounded-lg p-6 max-w-sm w-full" style={{ background: '#F0F5F2' }}>
            <h3 className="font-bold mb-2" style={{ color: '#1AB25C' }}>작성자 의견</h3>
            <p style={{ color: '#181A1A' }}>{creatorOpinion.content}</p>
            <button className="mt-4 px-4 py-2 rounded" style={{ background: '#1AB25C', color: '#FFFFFF' }} onClick={() => setShowAuthorModal(false)}>
              닫기
            </button>
          </div>
        </div>
      )}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="rounded-lg p-6 max-w-sm w-full" style={{ background: '#F0F5F2' }}>
            <h3 className="font-bold mb-2" style={{ color: '#1AB25C' }}>의견 추가하기</h3>
            <Textarea
              className="w-full mb-4"
              rows={4}
              placeholder="의견을 입력하세요"
              value={newOpinion}
              onChange={e => setNewOpinion(e.target.value)}
              style={{ color: '#181A1A', background: '#FFFFFF' }}
            />
            <div className="flex gap-2 justify-end">
              <button className="px-4 py-2 rounded" style={{ background: '#FFFFFF', color: '#1AB25C' }} onClick={() => setShowAddModal(false)}>취소</button>
              <button className="px-4 py-2 rounded" style={{ background: '#1AB25C', color: '#FFFFFF' }} onClick={handleAddOpinion}>추가</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscussionDetail; 