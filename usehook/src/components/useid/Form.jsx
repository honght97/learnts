import React, { useState, useMemo,useTransition, useId } from 'react';
import StudentList from './StudentList';
import StudentListData from '../../mocks/StudentList.json';


const Form = () => {
  const [search, setSearch] = useState('');
  const [filterText, setFilterText] = useState('');
  const [isPending,startTransition ] = useTransition();
  const id = useId();
  const data = useMemo(()=> {
    return StudentListData.map((student) => {
      const index = student.indexOf(filterText);
      return index === -1 ? (<p>{student}</p>):(
        <p>
          {student.slice(0, index)}
          <span style={{background:"yellow"}}>{student.slice(index, index + filterText.length)}</span>
          {student.slice(index + filterText.length)}
        </p>
      )
    })
  }, [filterText])
  const handleSearchInputChange= (e) => {
    setSearch(e.target.value);
    startTransition(() => {
      setFilterText(e.target.value);
    })
  }
  return (
    <div>
      <h3>Form</h3>
      <label htmlFor={id}>Search Name:</label>
      <input type="text" name='name' id={id} onChange={handleSearchInputChange} value={search} />
      {
        isPending ?(<p>Loading...</p>):( <StudentList data={data} />)
      }
     
    </div>
  );
};

export default Form;