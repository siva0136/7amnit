import React from 'react'
import { Accordion } from 'react-bootstrap'

const AccordionComponent = ({data}) => {
  return (
    <Accordion defaultActiveKey="0">
        {
            data?.map(({heading,body},index)=>{              
                return(
                    <Accordion.Item key={`ai_${index}`} eventKey={index}>
                        <Accordion.Header>{heading}</Accordion.Header>
                        <Accordion.Body>
                            {body}
                        </Accordion.Body>
                    </Accordion.Item> 
                )
            })
        }
          
  </Accordion>
  )
}

export default AccordionComponent
