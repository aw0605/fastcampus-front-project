import { vars } from "@fastcampus/themes";
import { CDN_BASE_URL } from "../constants";
import { MobileFirstLayout } from "../components/view/MobileFirstLayout";
import { ImageSlice } from "../components/view/slices/Image";
import { TextSlice } from "../components/view/slices/Text";
import { SpacingSlice } from "../components/view/slices/Spacing";
import { ImageSliderSectionSlice } from "../components/view/slices/ImageSliderSection";
import { AccordionSlice } from "../components/view/slices/Accordion";

const PlaygroundPage = () => {
  return (
    <MobileFirstLayout>
      <TextSlice
        text={"⚠ 본 이벤트는 종료되었습니다 (~8/6)"}
        sliceStyle={{
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$static.light.color.black,
          textSize: 16,
          textWeight: 700,
        }}
      />
      <ImageSlice
        imageUrl={`${CDN_BASE_URL}/test/hero_mobile.webp`}
        alt="온라인 강의 단돈 100원 이벤트 안내"
        sliceStyle={{
          paddingX: 8,
          backgroundColor: "#FFD951",
        }}
      />

      <SpacingSlice
        sliceStyle={{
          backgroundColor: vars.colors.$static.light.color.black,
          height: 60,
        }}
      />
      <ImageSlice
        imageUrl={`${CDN_BASE_URL}/test/coin_mobile.webp`}
        alt="100원 그림 일러스트"
        sliceStyle={{
          width: "90",
          backgroundColor: vars.colors.$static.light.color.black,
        }}
      />
      <TextSlice
        text={`공부 시작하려고 결심한 강의\n100원만 더 내고 이 모든 혜택 가져가세요!`}
        highlightTexts={["100원만"]}
        sliceStyle={{
          textWeight: 700,
          textSize: 24,
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$static.light.color.black,
          highlightTextColor: "#FFD64B",
        }}
      />
      <TextSlice
        text={`원하는 강의 골라 결제 시 100원만더 내면\n이 모든 혜택을 드립니다!`}
        sliceStyle={{
          textSize: 14,
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$static.light.color.black,
        }}
      />
      <ImageSlice
        imageUrl={`${CDN_BASE_URL}/test/benefit_mobile.webp`}
        alt="주요 행사 강의 목록 및 일자 안내 이미지, 강의 하나 구매 시 추가 강의는 100원에 구매 가능"
        sliceStyle={{
          paddingX: 8,
          backgroundColor: vars.colors.$static.light.color.black,
        }}
      />

      <SpacingSlice
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[900],
          height: 60,
        }}
      />
      <TextSlice
        text={`100원에 만나볼 수 있는\nBEST 강의 라인업`}
        highlightTexts={["BEST 강의"]}
        sliceStyle={{
          textWeight: 700,
          textSize: 24,
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$scale.gray[900],
          highlightTextColor: "#FFD64B",
        }}
      />
      <TextSlice
        text={`100일간 내 마음대로 무제한 수강 가능한\n카테고리별 BEST 강의 라인업을 아래에서 확인해보세요!`}
        sliceStyle={{
          textSize: 14,
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$scale.gray[900],
        }}
      />

      <SpacingSlice
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[900],
          height: 32,
        }}
      />
      <ImageSliderSectionSlice
        text={`🖥️ 프로그래밍`}
        images={[
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_1.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 1",
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_2.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 2",
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_3.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 3",
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_4.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 4",
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_5.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 5",
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_6.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 6",
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_programming_7.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 7",
          },
        ]}
        sliceStyle={{
          textColor: "#32BFA1",
          backgroundColor: vars.colors.$scale.gray[900],
          paddingX: 8,
        }}
      />
      <SpacingSlice
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[900],
          height: 32,
        }}
      />
      <SpacingSlice
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[900],
          height: 32,
        }}
      />
      <ImageSliderSectionSlice
        text={`🖥️ 디자인/일러스트`}
        images={[
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_design_1.webp`,
            alt: "강의 라인업 2 디자인: 강의 1",
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_design_2.webp`,
            alt: "강의 라인업 2 디자인: 강의 2",
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_design_3.webp`,
            alt: "강의 라인업 2 디자인: 강의 3",
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_design_4.webp`,
            alt: "강의 라인업 2 디자인: 강의 4",
          },
          {
            imageUrl: `${CDN_BASE_URL}/test/lineup_design_5.webp`,
            alt: "강의 라인업 2 디자인: 강의 5",
          },
        ]}
        sliceStyle={{
          textColor: "#F26346",
          backgroundColor: vars.colors.$scale.gray[900],
          paddingX: 8,
        }}
      />
      <SpacingSlice
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[900],
          height: 32,
        }}
      />

      <SpacingSlice
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[200],
          height: 80,
        }}
      />
      <TextSlice
        text="100원딜 이벤트 주의사항"
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[200],
          textSize: 24,
          textWeight: 700,
        }}
      />
      <SpacingSlice
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[200],
          height: 16,
        }}
      />
      <AccordionSlice
        accordionContents={[
          {
            key: "1",
            title: "1. 이벤트 기간",
            content: `2021년 7월 26일(월) ~ 8월 6일(금) 23:59\n\n※ 이벤트 기간 중 100원딜 강의를 구매하면 100일간 무제한 수강 가능합니다.`,
          },
          {
            key: "2",
            title: "2. 이벤트 주의사항",
            content: `– [100원딜] 상품 구매 시 네이버페이 1만원권 상품권(모바일)을 증정해 드립니다.\n– 네이버페이 상품권은 한정 수량으로 소진 시 조기 소진될 수 있습니다.\n– 구매 후 소진으로 인한 미증정 시 별도 안내됩니다.\n– 네이버페이 상품권은 8월 29(화)이후 문자로 일괄 발송됩니다.`,
          },
        ]}
        openedAccordion={true}
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[200],
        }}
      />
      <SpacingSlice
        sliceStyle={{
          backgroundColor: vars.colors.$scale.gray[200],
          height: 120,
        }}
      />
    </MobileFirstLayout>
  );
};

export default PlaygroundPage;
