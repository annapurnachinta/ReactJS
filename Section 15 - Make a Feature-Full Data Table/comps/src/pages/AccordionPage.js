import Accordion from "../components/Accordion"

function AccordionPage() {
    const items = [
        {
            id: '1',
            label: 'Accordion 1',
            content: 'expand 1'
        },
        {
            id: '2',
            label: 'Accordion 2',
            content: 'expand 2'
        },
        {
            id: '3',
            label: 'Accordion 3',
            content: 'expand 3'
        }
    ]
    return <Accordion items={items}/>
}

export default AccordionPage