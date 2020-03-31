import React from 'react';
import './Students.css';
//import StaffPhoto from '../../../assets/images/logo-50.png'

export default function Student(props) {
    //console.log(props);
    //debugger;
    const { StudentName, RollNo, ClassName, Mobile, EmailID } = props.student;

    // const GetClassName = (classid) => {

    //     var class_name = '';
    //     switch (classid) {
    //         case 9: class_name = "+2 ARTS (FIRST YEAR)"; break;
    //         case 2: class_name = "+2 SCIENCE (FIRST YEAR)"; break;
    //         case 10: class_name = "+2 ARTS (SECOND YEAR)"; break;
    //         case 3: class_name = "+2 SCIENCE (SECOND YEAR)"; break;
    //         case 12: class_name = "+3 ARTS (FIRST YEAR)"; break;
    //         case 5: class_name = "+3 SCIENCE (FIRST YEAR)"; break;
    //         case 13: class_name = "+3 ARTS (SECOND YEAR)"; break;
    //         case 6: class_name = "+3 SCIENCE (SECOND YEAR)"; break;
    //         case 14: class_name = "+3 ARTS (THIRD YEAR)"; break;
    //         case 7: class_name = "+3 SCIENCE (THIRD YEAR)"; break;
    //     }
    //     return class_name;
    // }



    return (

        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 student-card mb-4">
            <div className="card border-secondary rounded-0 mb-4 text-center">
                <div className="card-header p-0 text-center">
                    <div className="bg-muted text-dark p-0 text-center">
                        <div className="row m-0 p-1 text-center">
                            {/* <img src={studentPhoto} className="text-center student-photo" /> */}
                        </div>
                    </div>
                </div>
                <div className="card-body p-2">
                    <h6 className="student-name">{StudentName}</h6>
                    <h6 className="student-rollno">Roll# {RollNo}</h6>
                    <h6 className="student-class">{ClassName}</h6>
                    <h6 className="student-phone">{Mobile && Mobile.length > 0 ? ("Ph.: " + Mobile) : ("")}</h6>
                    <h6 className="student-email">&nbsp;{EmailID && EmailID.length > 0 ? ("Email: " + EmailID) : ("")}</h6>
                </div>
            </div>
        </div>
    );
}
