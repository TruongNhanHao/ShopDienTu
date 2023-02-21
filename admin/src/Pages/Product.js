import { Link } from "react-router-dom";
import { productData } from "../data/dummyData";
import { Publish } from "@material-ui/icons";
import styled from "styled-components";
import { Chart } from "../components/Chart";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";

export const Product = () => {
  return (
    <C>
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <Wrapper>
          <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproduct">
              <button>Create</button>
            </Link>
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <Chart
                data={productData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img
                  src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span>Apple Airpods</span>
              </div>
              <div className="productInfoBottom">
                <div>
                  <span>id:</span>
                  <span className="value">123</span>
                </div>
                <div className="productInfoItem">
                  <span>sales:</span>
                  <span className="value">5123</span>
                </div>
                <div className="productInfoItem">
                  <span>active:</span>
                  <span className="value">yes</span>
                </div>
                <div className="productInfoItem">
                  <span>in stock:</span>
                  <span className="value">no</span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="Left">
                <label>Product Name</label>
                <input type="text" placeholder="Apple AirPod" />
                <label>In Stock</label>
                <select name="inStock" id="idStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="Right">
                <div>
                  <img
                    src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label for="file">
                    <Publish />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button>Update</button>
              </div>
            </form>
          </div>
        </Wrapper>
      </div>
    </C>
  );
};
const C = styled.div`
  display: flex;
  width: 100%;
  .listContainer {
    flex: 6;
  }
`;
const Wrapper = styled.div`
  flex: 4;
  padding: 20px;
  .productTitleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      width: 80px;
      border: none;
      padding: 5px;
      background-color: teal;
      color: white;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .productTop {
    display: flex;
    .productTopLeft,
    .productTopRight {
      flex: 1;
    }
    .productTopRight {
      padding: 20px;
      margin: 20px;
      -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
      .productInfoTop {
        display: flex;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 20px;
        }
        span {
          font-weight: 600;
        }
      }
      .productInfoBottom {
        margin-top: 10px;
        div {
          width: 150px;
          display: flex;
          justify-content: space-between;
          span {
            font-weight: 300;
          }
        }
      }
    }
  }
  .productBottom {
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    form {
      display: flex;
      justify-content: space-between;
      .Left {
        display: flex;
        flex-direction: column;
      }
      .Left > label {
        margin-bottom: 10px;
        color: gray;
      }

      .Left > input {
        margin-bottom: 10px;
        border: none;
        padding: 5px;
        border-bottom: 1px solid gray;
      }

      .Left > select {
        margin-bottom: 10px;
      }
      .Right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        div {
          display: flex;
          align-items: center;
          img {
            width: 100px;
            height: 100px;
            border-radius: 10px;
            object-fit: cover;
            margin-right: 20px;
          }
        }
        button {
          border: none;
          padding: 5px;
          border-radius: 5px;
          background-color: darkblue;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
  }
`;
