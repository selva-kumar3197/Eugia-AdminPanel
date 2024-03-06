import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FirstNavbar from "../dashboard/FirstNavbar";
import SideBar from "../dashboard/SideBar";
import axios from 'axios'
import baseURL from "../../Service/Url";
const Reports = () => {
    const [ProductList, setPoductList] = useState([])
    const [reloadPage, setReloadPage] = useState(1)

    useEffect(() => {
        productsListApi()
    }, [reloadPage])

    /** Product List **/
    const productsListApi = () => {
        axios({
            mathod: "GET",
            url: `${baseURL}/category/reports`,
        }).then((res) => {
            if (res.status == 200) {
                setPoductList(res.data)
            }
        }).catch((err) => {
            console.log(err, 'err');
        })
    }


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
                                    <b> Reports </b>
                                </h3>
                            </div>
                            <div className="col-md-4 text-end">
                                <button type="button" className="btn btn-outline-success mx-1">
                                    <Link to="/report-add">Add Reports </Link>
                                </button>
                                <button type="button" className="btn btn-outline-success mx-1">
                                    <Link to="/report-list"> Report List</Link>
                                </button>

                            </div>
                        </div>
                        <table className="table table-bordered w-100 my-2">
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Report File</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ProductList.map((ele, ind) => {
                                        return (
                                            <tr>
                                                <th>{ind + 1}</th>
                                                <td>{ele.title} </td>
                                                <td>{ele.report_date}</td>
                                                <td>{ele.image}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
