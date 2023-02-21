import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export const FeatureInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        //Doanh thu % thang moi nhat
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);
  return (
    <InfoStyled>
      <div className="featuredItem">
        <span>Revanue</span>
        <div>
          <span className="Money">${income[1]?.total}</span>
          <span className="Rate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span>Sales</span>
        <div>
          <span className="Money">$4,415</span>
          <span className="Rate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span>Cost</span>
        <div>
          <span className="Money">$2,225</span>
          <span className="Rate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </InfoStyled>
  );
};
const InfoStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  div {
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    span {
      font-size: 20px;
    }
    div {
      margin: 10px 0px;
      display: flex;
      align-items: center;
      .Money {
        font-size: 30px;
        font-weight: 600;
      }

      .Rate {
        display: flex;
        align-items: center;
        margin-left: 20px;
        .featuredIcon {
          font-size: 20px;
          margin-left: 5px;
          color: green;
        }
        .featuredIcon.negative {
          color: red;
        }
      }
    }
    .featuredSub {
      font-size: 15px;
      color: gray;
    }
  }
`;
