import React from 'react';
import Layout from '../Layout';
import titleCase from '../../commons/CommonFunctions';
import WorkinProgress from '../WorkInProgress';
import Publications from './Publications';
import SubjectStrength from './SubjectStrength';
import CarrerConunselling from './CarrerCounselling';
import InternalQualityAssuranceCell from './InternalQualityAssuranceCell';

export default function Academics({ match }) {

    const showAcademics = () => {
        switch (match.params.page) {
            case 'publications': return <Publications />; break;
            case 'subject-strength': return <SubjectStrength />; break;
            case 'carrer-counselling': return <CarrerConunselling />; break;
            case 'internal-quality-assurance-cell': return <InternalQualityAssuranceCell />; break;

            default: return <WorkinProgress />
        }

    }
    return (
        <Layout title={`${titleCase(match.params.page.replace(/-/g, " "))}`}>
            {showAcademics()}
        </Layout>
    );
}
