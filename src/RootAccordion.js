import Accordion from 'react-bootstrap/Accordion';
import LensingEntityList from './LensingEntityList';


export default function RootAccordion({ data }) {
  // console.log(Object.entries(data));

  return (
    <Accordion defaultActiveKey="lensing_entities">
      {
        Object.entries(data).map(([key, item]) => (
          <Accordion.Item eventKey={key}>
            <Accordion.Header>
              <p className="font-monospace">"{key}"</p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="fst-italic fw-light fs-6">Documentation for this COOLEST item</p>
              {key == "lensing_entities" ? <LensingEntityList lensingEntities={item} /> : null}
              {key == "coordinates_origin" ? <p>{item.documentation}</p> : null}
            </Accordion.Body>
          </Accordion.Item>
        ))
      }
    </Accordion>
  )
}
