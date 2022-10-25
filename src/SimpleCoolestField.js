import React from 'react'

export default function SimpleCoolestField({ field }) {
 
  if (field === null || typeof field === 'string') return null

  function displayHighLevelField(key, item) {
    if (key === 'documentation' ) return null
    return (
      <>
        {(['string', 'number', 'boolean'].includes(typeof item)) ? <div>"{key}" : {item}</div> : null }
      </>
    )
  }

  console.log("AHBON" + field.documentation)

  return (
    <>
      <div>
        <p className="fw-normal">{field.documentation}</p>
      </div>
      <p>
      <div className="fw-light">Fields (with example values):</div>
      <div className="bg-light p-2">
        <code>
          {
            Object.entries(field).map(([key, item]) => (
              <div>{displayHighLevelField(key, item)}</div>
            ))
          }
        </code>
      </div>
      </p>
    </>
  )
}
