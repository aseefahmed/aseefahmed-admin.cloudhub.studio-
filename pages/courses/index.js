import React, { Fragment, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Dropdown,
  Modal,
  Row,
} from "react-bootstrap";
import PageHeader from "../../shared/layout-components/page-header/page-header";
import Link from "next/link";
import {
  Singleselectday,
  SingleselectMonth,
  Singleselectyear,
} from "../../shared/data/forms/formlayouts";
import Seo from "../../shared/layout-components/seo/seo";
const FormLayouts = () => {
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [learning_outcome, setLearningOutcome] = useState("");
  const [who_this_course_is_for, setWhoThisCourseIsFor] = useState("");

  const submitCourse = async () => {
    const response = await fetch(
      "https://499nkl85l0.execute-api.ap-southeast-2.amazonaws.com/prod/blogs",
      {
        method: "POST",
        body: JSON.stringify({
          course,
          price,
          duration,
          description,
          requirements,
          learning_outcome,
          who_this_course_is_for,
        }),
        header: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <Seo title="Form Layouts" />

      <PageHeader
        title="Form Layouts"
        item="Forms"
        active_item="Form Layouts"
      />
      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={6} md={12}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Horizonatal Form</h6>
                <p className="text-muted card-sub-title">
                  A form control layout using basic layout.
                </p>
              </div>
              <div className="">
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">Course Title</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => setCourse(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">Price</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <input
                      className="form-control"
                      type="number"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">Duration</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <input
                      className="form-control"
                      type="number"
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">Description</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <textarea
                      className="form-control"
                      type="number"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">Requirements</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <textarea
                      className="form-control"
                      type="number"
                      onChange={(e) => setRequirements(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">What You Will Learn</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <textarea
                      className="form-control"
                      type="number"
                      onChange={(e) => setLearningOutcome(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">Who this course for</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <textarea
                      className="form-control"
                      type="number"
                      onChange={(e) => setWhoThisCourseIsFor(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group row justify-content-end mb-0">
                  <div className="col-md-8 ps-md-2 btn-list">
                    <Button
                      className="btn ripple btn-primary pd-x-30 mg-r-5"
                      onClick={submitCourse}
                    >
                      Create Course
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </div>
  );
};
FormLayouts.layout = "Contentlayout";

export default FormLayouts;
