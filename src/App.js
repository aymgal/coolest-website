import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Accordion from 'react-bootstrap/Accordion';

import CoolestDocData from './data/coolest_doc.json';
import RootAccordion from './RootAccordion';

// const LOCAL_STORAGE_KEY = 'coolest.storage'

function App() {

  const data = {...CoolestDocData}  // copy content of JSON

  // function addLensingEntity(e) {
  //   // sth
  // }

  return (
    <div className="container mt-3">
      <h2>The COOLEST template file</h2>
      <div className="mt-3">
        <RootAccordion data={data} />
      </div>
    </div>
  )
}

export default App;
