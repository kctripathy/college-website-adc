import React, { useState, useEffect } from 'react';
import Select from 'react-select';


function getUnique(arr, comp) {
    const unique = arr
        .map(e => e[comp])
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e]).map(e => arr[e]);

    return unique;
};


function SelectDepartments(props) {
    const [selectedOption, setSelectedOption] = useState();
    const [options, setOptions] = useState();

    useEffect(() => {
        var options = props.staffs &&
            props.staffs.length > 0 &&
            props.staffs.map(cs => {
                return {
                    value: cs.DepartmentID,
                    label: cs.DepartmentDescription
                }
            })
        if (options.length > 0) {

            setOptions(getUnique(options, 'value'));
        }
        else {
            setOptions([]);
        }
    }, [props.staffs])

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
        props.onChange(selectedOption);
    };

    return (
        <div>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                isMulti={true}
                autoFocus={false}
                closeMenuOnSelect={true}
                placeholder="Search by departments"
            />
            {/* <pre>
                {JSON.stringify(selectedOption, null, 4)}
            </pre> */}
        </div>
    );
}

export default SelectDepartments;