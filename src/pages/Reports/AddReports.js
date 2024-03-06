import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import baseURL from "../../Service/Url";
import FirstNavbar from "../dashboard/FirstNavbar";
import SideBar from "../dashboard/SideBar";
import { ToastContainer, toast, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import RichTextEditor from 'react-rte';

const AddReports = () => {

    /** State Management **/
    const [loader, setLoader] = useState(false)
    const [addProducForm, setAddProductForm] = useState({
        heading: '',
        text: ''
    })
    const [addProductFormErros, setAddProductFormErrors] = useState({
        heading: '',
        text: '',
        image: ''
    })
    const [file, setFile] = useState({
        image: ''
    })
    const [fileErrors, setFileErrors] = useState({
        image: ''
    })

    /** handle Change **/
    const handleChange = (event) => {
        if (event.target.name == 'image') {
            setFile({
                ...file, [event.target.name]: event?.target?.files[0]
            })
            setFileErrors({
                ...file,
                image: ""
            })
        } else {
            setAddProductForm({
                ...addProducForm, [event.target.name]: event.target.value
            })
        }
        setAddProductForm({
            ...addProducForm, [event.target.name]: event.target.value
        })
        setAddProductFormErrors({
            ...addProductFormErros, [event.target.name]: null
        })
    }

    /** Form Validation **/
    const handleValidation = () => {
        // const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const regText = /[A-Za-z]/
        const newErros = {}
        const { heading, text, image } = addProducForm
        if (!heading) {
            newErros.heading = 'please enter report heading'
        } else if (heading && !regText.test(heading)) {
            newErros.heading = 'report heading should be text'
        } else if (heading && heading.length > 50) {
            newErros.heading = 'report heading should be belw 50 charecters'
        }

        if (!text) {
            newErros.text = 'please enter report text'
        }
        //  else if (text && !regText.test(text)) {
        //     newErros.text = 'blog heading should be text'
        // } 
        else if (text && text.length > 50) {
            newErros.text = 'report text should be belw 50 charecters'
        }

        if (!image) {
            newErros.image = 'please select file'
        }
        return newErros
    }

    /** Submit Form Dtata **/
    const handleSubmit = () => {
        const handleValidationObject = handleValidation()
        if (Object.keys(handleValidationObject).length > 0) {
            setAddProductFormErrors(handleValidationObject)
        } else {
            setLoader(true)
            let formData = new FormData();
            formData.append("title", addProducForm.heading);
            formData.append("image", file.image);
            formData.append("report_date", addProducForm.text);
            formData.append("category", 'reports');

            // const token = '32c2483430c53f2eec280c7f1ba826f697e78ac7'
            // headers: {
            //   Authorization: `Bearer ${token}`
            // },

            axios({
                url: `${baseURL}/create`,
                method: "POST",
                data: formData,
            }).then((res) => {
                if (res.status == 200) {
                    toast.success('Successfully Created report')
                    setLoader(false)
                    setAddProductForm({
                        ...addProducForm,
                        heading: '',
                        text: '',
                        image: '',
                    })
                    setFile({
                        ...file,
                        image: ''
                    })
                    setFileErrors({
                        ...fileErrors,
                        image: ''
                    })
                }
            })
                .catch((err) => {
                    if (err.response.status == 401) {
                        toast.error('Token is Expaired')
                        setLoader(false)
                        setAddProductForm({
                            ...addProducForm,
                            name: '',
                            disignation: '',
                        })
                        setFile({
                            ...file,
                            image: ''
                        })
                        setFileErrors({
                            ...fileErrors,
                            image: ''
                        })
                    }
                });

                
        }
    }

    return (
        <div>
            {" "}
            <div>
                <div class="sidebar">
                    <SideBar />
                </div>

                <div class="content">
                    <div className="container">
                        <FirstNavbar />

                        <div className="row my-2">
                            <div className="col-md-4"></div>
                            <div className="col-md-3">
                                <h3>
                                    <b>Add Report </b>
                                </h3>
                            </div>
                            <div className="col-md-4 text-end">
                                <button
                                    type="button"
                                    className="btn btn-outline-success mx-1"
                                    disabled>
                                    <Link to="/report-add">Add Report </Link>
                                </button>
                                <button type="button" className="btn btn-outline-success mx-1">
                                    <Link to="/report-list"> Report List</Link>
                                </button>

                            </div>
                        </div>

                        <div className="row m-auto my-3">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>Report Heading</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Report Heading"
                                            name='heading'
                                            value={addProducForm.heading}
                                            onChange={handleChange}
                                            autoComplete='off'
                                        />
                                        <span className="text-danger" >{addProductFormErros.heading}</span>
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Report Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Reports Text"
                                        name='text'
                                        value={addProducForm.text}
                                        onChange={handleChange}
                                        autoComplete='off'
                                    />
                                    <span className="text-danger" >{addProductFormErros.text}</span>
                                </Form.Group>
                                {/* <RichTextEditor
                                ></RichTextEditor> */}
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label> Select Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Product Heading"
                                            className="w-50"
                                            name='image'
                                            value={addProducForm.image}
                                            onChange={handleChange}
                                            autoComplete='off'
                                        />
                                        <span className="text-danger" >{addProductFormErros.image}</span>
                                    </Form.Group>
                                </Row>
                                <div className="text-center m-auto my-2">
                                    {loader == false &&
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </Button>
                                    }
                                    {
                                        loader == true &&
                                        <Spinner animation="border" variant="Primary" />
                                    }
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default AddReports;
