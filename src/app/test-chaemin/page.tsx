"use client";
import CommentBox from "@component/components/comment/CommentBox";
import Button from "@component/components/common-components/button";
import Tag from "@component/components/common-components/tag";
import { Header } from "@component/components/common-components/common/Header";
import SignUpModal from "@component/components/signup/SignUpModal";
import { useState } from "react";
import GoogleButton from "@component/components/social/GoogleButton";

export default function Laboratory() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpen3, setIsOpen3] = useState<boolean>(false);

  return (
    <div>
      <Header />
      {/* font test */}
      {/* <div className="text-huge">huge입니다</div>
      <div className="text-head">head입니다</div>
      <div className="text-h1">h1입니다</div>
      <div className="text-title">title입니다</div>
      <div className="text-h2 ">h2입니다</div>
      <div className="text-body1">body1</div>
      <div className="text-body2">body2</div>
      <div className="text-caption1">caption1</div>
      <div className="text-caption2">caption2</div>
      <div className="text-caption3">caption3</div> */}
      {/* button test */}
      <div className="flex flex-row items-center gap-3">
        <Button size="xs" className="font-medium">
          xs button
        </Button>
        <Button size="sm">sm button</Button>
        <Button size="md">md button</Button>
        <Button size="lg">lg button</Button>
      </div>

      {/* tag test */}
      <div className="pt-3 flex flex-wrap gap-4">
        <Tag type="예술/대중문화" status="기획중" />
        <Tag type="건강" status="개발중" />
        <Tag type="금융/핀테크" status="리팩토링중" />
        <Tag type="환경" />
        <Tag type="교육" />
        <Tag type="AI/머신러닝" />
        <Tag type="취미/실용" />
        <Tag type="게임" />
        <Tag type="기타" />
      </div>

      <div>color style test about button</div>
      {/* button style test */}
      <div className="flex flex-col gap-3">
        <Button size="xs" color="default">
          xs button
        </Button>
        <Button size="xs" color="active">
          xs button
        </Button>

        <Button size="xs" color="gray">
          xs button
        </Button>
        <Button size="xs" color="border" onClick={() => setIsOpen3(true)}>
          완료모달 열기
        </Button>

        {/* <CompleteModal isOpen={isOpen3} setIsOpen={setIsOpen3} /> */}
        <Button
          size="xs"
          className="bg-error-color"
          onClick={() => setIsOpen(true)}
        >
          modal open btn
        </Button>

        {/* comment test */}
        {/* <CommentBox /> */}

        {/* google-login test */}
        <GoogleButton />

        {/* modal test */}
        {/* <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="w-[480px]"
        >
          <Modal.Close onClick={() => setIsOpen(false)} />
          <Modal.Title>
            <div>닉네임을 입력해주세요</div>
          </Modal.Title>
          <Modal.SubTitle>
            <div>입력한 닉네임은 마이페이지에서 변경할 수 있어요.</div>
          </Modal.SubTitle>
          <Modal.Description>
            <></>
          </Modal.Description>

          <Modal.Footer>
            <div className="flex space-x-[8px]">
              <Button>으앙</Button>
              <Button>등록하기</Button>
            </div>
          </Modal.Footer>
        </Modal> */}

        <SignUpModal isOpen={isOpen} setIsOpen={setIsOpen} />

        <Button size="xs" color="black" onClick={() => setIsOpen2(true)}>
          InterestModal button
        </Button>
      </div>
    </div>
  );
}
