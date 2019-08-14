import React, { Component } from 'react';

class Write extends Component {
    //<textarea className="form-control"></textarea>

    //  height: 500px;

    render() {
        const height = 'height:500px'
        return (
            <div> 
      <div className="container py-5 mb5">
            <h1 className="mb-5">Write board</h1>
            <div className="row py-4">
            <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-primary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Product name</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$12</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Second product</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Third item</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>
                    <a href="#!" class="btn btn-primary btn-block">Block level button</a>
                </div>




{/* 여기서부터 폼 */}


                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Please Write Your 업무일즤써듀셈</h4>
                    <form className="needs-validation" novalidate>
                        <div className="mb-3">
                            <label for="username">Id 업무일지 작성자</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control" id="username" placeholder="Username" required/>
                                <div className="invalid-feedback" >
                                    Your username is required.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="username">업무 내용 </label>
                        <textarea className="textarea form-control"></textarea>
                            
                        </div>


                    </form>
                </div>
            </div>
        </div>
            </div>


        );
    }
}

export default Write;