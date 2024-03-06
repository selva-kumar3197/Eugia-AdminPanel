import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FirstNavbar from "../dashboard/FirstNavbar";
import SideBar from "../dashboard/SideBar";
import axios from 'axios'
import baseURL from "../../Service/Url";
import { AgGridReact } from "ag-grid-react";

const ProductEnquiry = () => {
  const [ProductList, setPoductList] = useState([])
  const [reloadPage, setReloadPage] = useState(1)
  const [rowData, setRowdata] = useState();


  useEffect(() => {
    productsListApi()
  }, [reloadPage])

  /** Product List **/
  const productsListApi = () => {
    axios({
      mathod: "GET",
      url: `${baseURL}/category/enquiry`,
    }).then((res) => {
      if (res.status == 200) {
        setRowdata(res.data)
      }
    }).catch((err) => {
      console.log(err, 'err');
    })
  }

  /***** Pagenation Table******/
  const rowHeight = 50;
  const DefaultColumnSetting = {
    sortable: true,
    filter: true,

    floatingFilter: true,
    flex: 1,
    resizable: true,
    minWidth: 120,
  };

  const [colDefs, setColDefs] = useState([
    {
      headerName: "Id",
      valueGetter: "node.rowIndex + 1",
      filter: true,
      lockPosition: true,
    },
    {
      headerName: "Full Name",
      filter: true,
      field: "name",
    },
    {
      headerName: "Contact",
      filter: true,
      field: "mobile_no",
    },
    {
      headerName: "Email",
      filter: true,
      field: "email",
    },
    // {
    //   headerName: "Update",
    //   filter: true,
    //   cellRendererFramework: (params) => (
    //     <center
    //       onClick={() => handleUpdate(params.data)}
    //     >
    //       <button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16" >
    //         <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
    //       </svg></button>
    //     </center>
    //   ),
    // },
    // {
    //   headerName: "Delete",
    //   filter: true,
    //   cellRendererFramework: (params) => (
    //     <center
    //       onClick={() => handleDelete(params.data)}
    //     >
    //       <button type="button" class="btn btn-outline-danger"  >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="16"
    //           height="16"
    //           fill="currentColor"
    //           class="bi bi-trash-fill"
    //           viewBox="0 0 16 16"
    //         >
    //           <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
    //         </svg>
    //       </button>
    //     </center>
    //   ),
    // },
  ]);


  return (
    <div>
      <div>
        <div class="sidebar">
          <SideBar />
        </div>

        <div class="content">
          <div className="container ">
            <FirstNavbar />

            <div className="row my-2">
              <div className="col-md-3">
                <h3>
                  <b> Product Enquiry </b>
                </h3>
              </div>
              <div className="col-md-4 text-end">
                <button type="button" className="btn btn-outline-success mx-1">
                  <Link to="/product-add">Add Product </Link>
                </button>
                <button type="button" className="btn btn-outline-success mx-1">
                  <Link to="/product-list"> Product List</Link>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success mx-1"
                  disabled
                >
                  <Link to="/product-enquiry"> Product Enquiry</Link>
                </button>
              </div>
            </div>
            {/* <table className="table table-bordered w-100 my-2">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Full Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  ProductList.map((ele, ind) => {
                    return (
                      <tr>
                        <th>{ind + 1}</th>
                        <td>{ele.name} </td>
                        <td>{ele.mobile_no}</td>
                        <td>{ele.email}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table> */}
            <div
              className="ag-theme-alpine"
              style={{ height: "70vh", width: "100%" }}
            >
              <AgGridReact
                rowHeight={rowHeight}
                // columnDefs={columns}
                columnDefs={colDefs}
                defaultColDef={DefaultColumnSetting}
                pagination={true}
                paginationPageSize={10}
                // onGridReady={onGridReady}
                rowData={rowData}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEnquiry;
