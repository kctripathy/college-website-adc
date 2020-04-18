import React from 'react'
import d, { EstbTypeCode } from '../../constants/actionTypes'

export default function EstablishmentTypeCodes(props) {

    const showDropdownOptions = () => {
        let estbCode = props.code && props.code.substring(0, 1);
        //debugger;
        switch (estbCode) {
            case EstbTypeCode.RecentActivities: return showRecentActivitiesDropdown(); break;
            case EstbTypeCode.Publications: return showPublicationTypesDropdown(); break;
            default: break;
        }
    }
    const showRecentActivitiesDropdown = () => (
        <>
            <option value="">--PLEASE SELECT A TYPE OF THE RECENT ACTIVITY --</option>
            <option value={EstbTypeCode.RECENT_ACADEMIC_ACTIVITY}>ACADEMIC ACTIVITY</option>
            <option value={EstbTypeCode.RECENT_SPORTS_ACTIVITY}>SPORTS ACTIVITY</option>
            <option value={EstbTypeCode.RECENT_CULTURAL_ACTIVITY}>CULTURAL ACTIVITY</option>
            <option value={EstbTypeCode.RECENT_SOCIAL_ACTIVITY}>SOCIAL ACTIVITY</option>
            <option value={EstbTypeCode.RECENT_YRC_ACTIVITY}>YOUTH RED CROSS</option>
            <option value={EstbTypeCode.RECENT_RRC_ACTIVITY}>RED RIBBON CLUB</option>
            <option value={EstbTypeCode.RECENT_NSS_ACTIVITY}>NATIONAL SERVICE SCHEME</option>
            <option value={EstbTypeCode.RECENT_OTHER_ACTIVITY}>RECENT OTHER ACTIVITY</option>
        </>
    )
    const showPublicationTypesDropdown = () => (
        <>
            <option value="">--PLEASE SELECT A TYPE OF PUBLICATION --</option>
            <option value={EstbTypeCode.PUBLICATION_ARTICLE_COLUMN}>ARTICLE / COLUMN</option>
            <option value={EstbTypeCode.PUBLICATION_BOOK_PROCEEDINGS}>BOOK / PROCEEDINGS</option>
            <option value={EstbTypeCode.PUBLICATION_PROJECT_PAPER}>PROJECT PAPER</option>
            <option value={EstbTypeCode.PUBLICATION_SEMINAR_PAPER}>SEMINAR PAPER</option>
            <option value={EstbTypeCode.PUBLICATION_STUDY_MATERIAL}>STUDY MATERIAL</option>
        </>
    )
    return (
        <div className="form-group" style={{ display: (props.code === "" || props.code.substring(0, 1) === 'P' || props.code.substring(0, 1) === 'R') ? '' : 'none' }}>
            {/* <label htmlFor="EstbTypeCode" className="pt-2 mr-2 required">Type of {props.description}:</label> */}
            <select id="EstbTypeCode" onChange={(e) => props.handleChangeFormField(e)} className="form-control" required>
                {showDropdownOptions()}
            </select>
        </div>
    );
}
