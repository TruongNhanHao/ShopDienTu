import styled from "styled-components";
import { BasicTable } from "../components/BasicTable";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";

export const Order = () => {
  return (
    <Wrapper>
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <BasicTable />
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
