import React from "react";
import styled from "styled-components";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLG from "../../components/WidgetLG/WidgetLG";

const HomepageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  padding: 0.75rem;
  gap: 1rem;
`;

const Widgets = styled.section`
  display: flex;
  gap: 1rem;
`;

const Home = () => {
  return (
    <HomepageWrapper>
      <FeaturedInfo />
      <Chart />
      <Widgets>
        <WidgetSm />
        <WidgetLG />
      </Widgets>
    </HomepageWrapper>
  );
};

export default Home;
