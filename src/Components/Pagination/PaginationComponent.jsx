import React from "react";

import './Pagination.scss';


const PaginationComponent = () => {
    return (
        //pagination start here
        <section className="ui grid container">
            <div className="pagination-section">

                <a href="#">&laquo;</a>

                <a href="#">1</a>

                <a href="#">2</a>

                <a href="#">3</a>

                <a href="#">4</a>

                <a href="#">&raquo;</a>

            </div>
        </section>
        //pagination end here

    )
}



export default PaginationComponent;