import Button from "@component/components/common-components/button/Button";
import { useRouter } from "next/navigation";

const ProjectDetailFeedBackRequest = ({ projectFeedbackData, projectId }: any) => {
  const router = useRouter();
  const myProject: boolean | undefined =
    projectFeedbackData && projectFeedbackData.length > 0
      ? projectFeedbackData[0]?.isAuthor
      : undefined;
  return (
    <>
      {projectFeedbackData &&
        projectFeedbackData.map((feedback: any, index: number) => (
          <div
            key={index}
            className="bg-purple-main5 rounded-[10px] w-[253px] p-7 mb-8"
          >
            {/* title */}
            <div className="text-h2 mb-2">{feedback.title}</div>
            {/* period */}
            <div className="text-body2 font-medium text-gray-60 mb-[33px]">
              {feedback.startedAt} ~ {feedback.endedAt}
            </div>
            {/* reward */}
            <div className="text-h2 mb-2">추가 리워드</div>
            <div className="text-body2 font-medium text-gray-60 mb-[33px]">
              {feedback.rewardMessage}
            </div>
            {!feedback.isSubmiited ? (
              <div className="flex justify-end">
                <Button
                  onClick={() =>
                    router.push(`/feedback/${feedback.feedbackId}`)
                  }
                >
                  피드백 작성하기
                </Button>
              </div>
            ) : (
              <div className="flex justify-end">
                <Button color="disabled" className="cursor-none">
                  참여 완료
                </Button>
              </div>
            )}
          </div>
        ))}

      {/* if my project */}
      {/* 현재 등록한 피드백이 0개이면 확인할 수 없음 */}
      {myProject && (
        <div className="flex justify-end">
          <Button onClick={() => router.push(`/${projectId}/sendback/register`)}>피드백 요청 글 작성하기</Button>
        </div>
      )}
    </>
  );
};

export default ProjectDetailFeedBackRequest;
