import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FirstNavbar from "../dashboard/FirstNavbar";
import SideBar from "../dashboard/SideBar";

function AnnualReportsList() {
  return (
    <div>
      {" "}
      <div>
        {" "}
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
                    <b>Annual Report List </b>
                  </h3>
                </div>

                <div className="col-md-4 text-end">
                  <button
                    type="button"
                    className="btn btn-outline-success mx-1"
                  >
                    <Link to="/investors-add-report">Add Report </Link>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success mx-1"
                    disabled
                  >
                    <Link to="/investors-report-list"> Report List</Link>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success mx-1"
                  >
                    <Link to="/investors-journey-list"> Journey List</Link>
                  </button>
                </div>
              </div>
              <table className="table table-bordered w-100 my-2">
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>Annual Report Name </th>
                    <th>PDF</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Annual Report 2020-21</td>
                    <td>PDF</td>
                    <td className="text-center">
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        className=" fs-4"
                      />
                    </td>
                    <td className="text-center">
                      <button type="button" class="btn btn-outline-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>{" "}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnualReportsList;
