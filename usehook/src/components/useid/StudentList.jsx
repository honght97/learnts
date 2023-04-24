import React from 'react';

const StudentList = ({data}) => {
  return (
    <div>
      <h3>student list</h3>
      {
        data.map((student) => {
          return <p>{student}</p>
        })
      }
    </div>
  );
};

export default StudentList;