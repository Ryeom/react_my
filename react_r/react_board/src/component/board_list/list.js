import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
             <div class="container py-5 mb5">
    <h1 class="mb-5">BOARD LISTs</h1>

    <div class="row">
      <div class="col-md-3">
        <form class="mb-3">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search"/>
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary">Search</button>
            </div>
          </div>
        </form>

        <div class="list-group">
          <a href="/" class="list-group-item list-group-item-action active"> Dashboard </a>
          <a href="/" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            Inbox
            <span class="badge badge-primary badge-pill ml-auto">new</span>
          </a>
          <a href="/" class="list-group-item list-group-item-action">Orders</a>
          <a href="/" class="list-group-item list-group-item-action">Products</a>
          <a href="/" class="list-group-item list-group-item-action">Customers</a>
          <a href="/" class="list-group-item list-group-item-action">Reports</a>
        </div>
      </div>
      <div class="col-md-9">

        <div class="row d-none">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </p>
                {/* <!--<a href="#!" class="btn btn-primary">Go somewhere</a>--> */}
              </div>
            </div>
          </div>
        </div>

        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th scope="row">1</th>
              <td>
                <a href="/">
                  Some item on your list
                </a>
              </td>
              <td>
                <a href="/" class="btn btn-sm btn-primary my-1 my-sm-0">
                  <span class="fas fa-edit mr-1">Edit</span>
                  </a>
                <a href="/" class="btn btn-sm btn-danger my-1 my-sm-0">
                  <span class="fas fa-trash mr-1">Delete</span>
                  </a>
              </td>
            </tr>


          </tbody>
        </table>

        {/* 글 번호 넘기기 */}
        <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item">
      <a class="page-link" href="#!">1</a>
    </li>
    <li class="page-item active">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item">
      <a class="page-link" href="#!">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#!">Next</a>
    </li>
  </ul>
</nav>
      </div>
    </div>

  </div>
   
            </div>
        );
    }
}

export default List