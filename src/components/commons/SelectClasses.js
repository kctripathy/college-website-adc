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


function SelectClasses(props) {
    const [selectedOption, setSelectedOption] = useState();
    const [options, setOptions] = useState();

    useEffect(() => {
        var options = props.students.map(cs => {
            return {
                value: cs.ClassID,
                label: cs.ClassName
            }
        })
        setOptions(getUnique(options, 'value'));
    }, [props.students])

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
                placeholder="Select classes"
            />
            {/* <pre>
                {JSON.stringify(selectedOption, null, 4)}
            </pre> */}
        </div>
    );
}

export default SelectClasses;