import React from 'react';
import './Book.css';

export default function Book(props) {

    const { BookID, Title, AuthorName, SegmentName, CategoryName, IsBookIssued, Book_ImageURL_Small, Book_PDF_URL } = props.book;
    return (

        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 student-card mb-4">
            <div className="card border-secondary rounded-0 mb-4 text-center">
                <div className="card-header p-0 text-center">
                    <div className="bg-muted text-dark p-0 text-center">
                        <div className="row m-0 p-1 text-center">
                            {Title}
                        </div>
                    </div>
                </div>
                <div className="card-body p-2">
                    {/* <h6 className="student-name">{StudentName}</h6>
                    <h6 className="student-rollno">Roll# {RollNo}</h6>
                    <h6 className="student-class">{ClassName}</h6>
                    <h6 className="student-phone">{Mobile && Mobile.length > 0 ? ("Ph.: " + Mobile) : ("")}</h6>
                    <h6 className="student-email">&nbsp;{EmailID && EmailID.length > 0 ? ("Email: " + EmailID) : ("")}</h6> */}
                </div>
            </div>
        </div>
    );
}
