import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import { HorizontalLectureBox } from "../../components/HorizontalLectureBox/HorizontalLectureBox";
import { MyContentBox } from "../../components/MyContentBox/MyContentBox";

export const MyPage = (): JSX.Element => {
  return (
    <div className="my-page">
      <div className="div-2">
        <Header className="header-instance" divClassName={undefined} />
        <div className="frame-4">
          <div className="frame-5">
            <div className="frame-6">
              <HorizontalLectureBox selected={false} className={undefined} />
              <HorizontalLectureBox selected={false} className={undefined} />
              <HorizontalLectureBox selected={false} className={undefined} />
              <HorizontalLectureBox selected={false} className={undefined} />
            </div>
            <div className="text-wrapper-8">학습 중인 강의</div>
          </div>
          <div className="frame-7">
            <div className="text-wrapper-9">내 학습 자료</div>
            <div className="frame-8">
              <div className="frame-9">
                <MyContentBox />
                <MyContentBox />
              </div>{" "}
              <div className="frame-9">
                <MyContentBox />
                <MyContentBox />
              </div>{" "}
              <div className="frame-9">
                <MyContentBox />
                <MyContentBox />
              </div>{" "}
              <div className="frame-9">
                <MyContentBox />
                <MyContentBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
