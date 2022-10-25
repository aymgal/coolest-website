import Accordion from 'react-bootstrap/Accordion';
import SimpleCoolestField from './SimpleCoolestField'
import LensingEntityList from './LensingEntityList';


export default function RootAccordion({ data }) {
  console.log(Object.entries(data));

  return (
    <Accordion defaultActiveKey="instrument">
      {
        Object.entries(data).map(([key, item]) => (
          <>
          {key !== "standard" && (
            <Accordion.Item eventKey={key}>
              <Accordion.Header>
                <p className="font-monospace">"{key}"</p>
              </Accordion.Header>
              <Accordion.Body>
                {/*{key === "lensing_entities" ? <LensingEntityList lensingEntities={item} /> : <SimpleCoolestField field={item} />}*/}
                <SimpleCoolestField field={item} />
              </Accordion.Body>
            </Accordion.Item>
          )}
          </>
        ))
      }
    </Accordion>
  )
}
