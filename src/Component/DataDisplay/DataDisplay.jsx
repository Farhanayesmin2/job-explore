import React from 'react';

const DataDisplay = ({ category }) => {
    
    const { jobTitle,jobResponsibility,id } = category;
    return (
        <div>
            <p>Hello data</p>
            <p>{jobTitle}{jobResponsibility} {id }</p>
        </div>
    );
};

export default DataDisplay;