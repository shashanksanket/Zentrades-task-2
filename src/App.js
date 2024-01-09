import React, { useState } from 'react';
import './App.css';
import Dropdown from './components/dropdown';
import Checkbox from './components/checkbox';
import Papa from "papaparse";

const fileType = [
  { label: 'CSV', value: 'CSV' },
  { label: 'JSON', value: 'JSON' },
];
const encodings = [
  { label: 'UTF-8', value: 'UTF-8' },
];
const Delimiter = [
  { label: 'comma', value: 'comma' },
];

function App() {
  const [fields, setFields] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [isHeader, setIsHeader] = useState(true)
  const [values, setValues] = useState([]);
  const [selectedField, setSelectedField] = useState(null);
  const [displayedData, setDisplayedData] = useState([]);
  const [isTable, setIsTable] = useState(false)
  const [isCheck,setIscheck] = useState(false)
  const handleCheckboxChange = (isChecked) => {
    setIsHeader(isChecked)
  };
  const handleSelect = (selectedOption) => {
    console.log(`Selected option: ${selectedOption}`);
  };

  const addToFields = () => {
    if (selectedField && !fields.includes(selectedField)) {
      setFields([...fields, selectedField]);
    }
  };
  const handleCheck = () => {
    setIscheck(!isCheck)
  }
  const removeFromFields = () => {
    if (selectedField && fields.includes(selectedField)) {
      setFields(fields.filter((field) => field !== selectedField));
    }
  };
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: isHeader,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setHeaders(rowsArray[0]);
        setValues(valuesArray);
        setDisplayedData(valuesArray);
      },
    });
  };
  return (
    <div>
      {isTable ? (
        <div className="w-full p-4 mt-4">
          <button onClick={() => setIsTable(false)} className='bg-green-500 p-1 border my-2 text-white'>Back</button>
          <p className='text-center text-2xl my-4'>Table</p>
          {displayedData.length > 0 ? (
            <table className="border-collapse border w-full">
              <thead>
                <tr>
                  {fields.map((field, index) => (
                    <th key={index} className="border p-2">{field}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      fields.includes(headers[cellIndex]) && (
                        <td key={cellIndex} className="border p-2">{cell}</td>
                      )
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>You haven't uploaded anything yet</p>
          )}
        </div>
      ) : (
        <div className="px-7 py-4">
          <p className='my-3'>Import Products</p>
          <div className='gap-y-2 flex flex-col'>
            <div className='flex justify-between gap-x-4'>
              <div className='w-full flex border px-7 py-10 gap-x-10 shadow'>
                <p>Step 1:</p>
                <div className='flex flex-col'>
                  <p className=''>Select File</p>
                  <input type='file' onChange={changeHandler} />
                  <p className='my-4'>Supported File Type{`(s)`}: .CSV .JSON</p>
                </div>
              </div>
              <div className='w-full flex border px-7 py-10 gap-x-10 shadow'>
                <p>Step 2:</p>
                <div className='flex flex-col'>
                  <p className=''>Specify Format</p>
                  <div className=''>
                    <Dropdown label='File Type' options={fileType} onSelect={handleSelect} />
                  </div>
                  <div>
                    <Dropdown label='Character Encoding' options={encodings} onSelect={handleSelect} />
                  </div>
                  <div>
                    <Dropdown label='Delimiter' options={Delimiter} onSelect={handleSelect} />
                  </div>
                  <div className=''>
                    <Checkbox label='Has Header' onChange={handleCheckboxChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full my-2 flex border px-7 py-10 gap-x-10 shadow'>
              <div className='w-auto flex items-start'>
                <input className='mt-1 mx-2' onClick={()=>{handleCheck()}} type='checkbox' />
                <p>Step 3:</p>
              </div>
              <div className='flex flex-col'>
                <p className=''>Display Heading</p>
                <p className=''>Select the fields to be displayed</p>
                <div className='flex gap-x-4'>
                  <div className='flex flex-col gap-y-4'>
                    <p>Available Fields</p>
                    <div className='border gap-y-2 rounded w-full p-4'>
                      {headers && headers.map((availableField, index) => (
                        <p
                          key={index}
                          className={`cursor-pointer p-2 rounded ${selectedField === availableField ? 'bg-gray-100' : ''}`}
                          onClick={() => setSelectedField(availableField)}
                        >
                          {availableField}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className='flex my-3 gap-y-3 flex-col'>
                    <button className='p-2 border text-xs' onClick={addToFields}>{`>>`}</button>
                    <button className='p-2 border text-xs' onClick={removeFromFields}>{`<<`}</button>
                  </div>
                  <div className='gap-y-4 flex flex-col'>
                    <p>Fields to be displayed</p>
                    <div className='border p-4 gap-y-2 rounded w-full'>
                      {fields && fields.map((field, index) => (
                        <p className='bg-gray-300 p-2 rounded' key={index}>{field}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-end items-center gap-x-2'>
            <button onClick={() => setIsTable(true)} className='bg-green-500 p-1 border text-white'>Next</button>
            <p className='text-red-600'>Cancel</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
