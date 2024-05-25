import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Card from "../Card/Card";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

const FeaturePriceInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.75rem;
`;
const CardContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;


const FeatureCards = styled.div`
display: flex;
gap: 2.5rem;
width:100%;
justify-content: space-between;

`

const FeaturedInfo = () => {



  const FeatureCardInfo = [
    {
      title: "Revenue",
      price: "$ 2,545",
      profit_loss: "-11.54",
      Compare: "Compare to last month",
    },
    {
      title: "Sales",
      price: "$ 4,454",
      profit_loss: "-1.4",
      Compare: "Compare to last month",
    },
    {
      title: "Cost",
      price: "$ 2,023",
      profit_loss: "+2.1",
      Compare: "Compare to last month",
    },
  ];

  let FeatureCardsRender =
    FeatureCardInfo &&
    FeatureCardInfo.map((item, index) => {
      return (
        <Card key={index}>
          <CardContent>
            <Title>{item.title}</Title>
            <FeaturePriceInfo>
              <span style={{ fontSize: "1.75rem", fontWeight: "bold" }}>
                {item.price}
              </span>{" "}
              <span style={{ fontSize: "0.95rem" }}>{item.profit_loss}</span>{" "}
              <span>
                {item.profit_loss < 0 ? (
                  <ArrowDownwardIcon style={{ color: "red" }} />
                ) : (
                  <ArrowUpwardIcon style={{ color: "green" }} />
                )}
              </span>
            </FeaturePriceInfo>
            <p>{item.Compare}</p>
          </CardContent>
        </Card>
      );
    });

  return <FeatureCards>{FeatureCardsRender}</FeatureCards>;
};

export default FeaturedInfo;
