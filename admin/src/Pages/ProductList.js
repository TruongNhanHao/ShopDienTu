import styled from "styled-components";
import { BasicTable } from "../components/BasicTable";
import { DatatableProducts } from "../components/DatatableProducts";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";

export const ProductList = () => {
  return (
    <Wrapper>
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <DatatableProducts />
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
