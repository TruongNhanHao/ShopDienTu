import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { FeatureInfo } from "../components/FeatureInfo";
import { Chart } from "../components/Chart";
import { userRequest } from "../requestMethods";
export const Analytics = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("user/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);
  return (
    <Wrapper>
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <HomeStyled>
          <FeatureInfo />
          <Chart
            data={userStats}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
        </HomeStyled>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  .listContainer {
    flex: 6;
  }
`;
const HomeStyled = styled.div`
  display: 4;
`;
