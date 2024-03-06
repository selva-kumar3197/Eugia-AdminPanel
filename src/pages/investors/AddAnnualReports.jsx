import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FirstNavbar from "../dashboard/FirstNavbar";
import SideBar from "../dashboard/SideBar";

const AddAnnualReports = () => {

  /** State Management **/
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
      newErros.heading = 'please enter product heading'
    } else if (heading && !regText.test(heading)) {
      newErros.heading = 'Product heading should be text'
    } else if (heading && heading.length > 50) {
      newErros.heading = 'product heading should be belw 50 charecters'
    }

    if (!text) {
      newErros.text = 'please enter product text'
    } else if (text && !regText.test(text)) {
      newErros.text = 'Product heading should be text'
    } else if (text && text.length > 50) {
      newErros.text = 'product text should be belw 50 charecters'
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
      console.log(addProducForm, 'addProducForm');
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
                  <b>Add Annual Reports </b>
                </h3>
              </div>
              <div className="col-md-4 text-end">
                <button
                  type="button"
                  className="btn btn-outline-success mx-1"
                  disabled
                >
                  <Link to="/investors-add-report">Add Report </Link>
                </button>
                <button type="button" className="btn btn-outline-success mx-1">
                  <Link to="/investors-report-list"> Report List</Link>
                </button>
                <button type="button" className="btn btn-outline-success mx-1">
                  <Link to="/investors-journey-list"> Journey List</Link>
                </button>
              </div>
            </div>

            <div className="row m-auto my-3">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label> Annual Report Name </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Annual Report Name"
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label> Select File</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="Product Heading"
                        className="w-50"
                      />
                    </Form.Group>
                  </Row>
                  <div className="text-center m-auto my-2">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAnnualReports;
