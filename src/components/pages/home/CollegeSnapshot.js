import React from 'react';
import CollegeSnapshotCard from './CollegeSnapshotCard';

const CollegeSnapshot = () => {
    return (
        <div className="row">
            <div className="col-6">
                <CollegeSnapshotCard title="Staffs" count="456" color="alert-success" />
            </div>
            <div className="col-6">
                <CollegeSnapshotCard title="Students" count="1235" color="alert-primary" />
            </div>
            <div className="col-6">
                <CollegeSnapshotCard title="Library Books" count="4235" color="alert-warning" />
            </div>
            <div className="col-6">
                <CollegeSnapshotCard title="Publications" count="423" color="alert-danger" />
            </div>
            <div className="col-6">
                <CollegeSnapshotCard title="Articles" count="111" color="alert-secondary" />
            </div>
            <div className="col-6">
                <CollegeSnapshotCard title="Awards" count="423" color="alert-info" />
            </div>
            <div className="col-6">
                <CollegeSnapshotCard title="Articles" count="111" color="alert-secondary" />
            </div>
            <div className="col-6">
                <CollegeSnapshotCard title="Awards" count="423" color="alert-info" />
            </div>
        </div>
    )
};

export default CollegeSnapshot;