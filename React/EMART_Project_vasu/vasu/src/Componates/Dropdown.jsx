import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //   const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="primary" onMouseEnter={handleShow} onMouseLeave={{ handleClose }}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                {/* <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body> */}
                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action2">
                    Another action
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">
                    Something else here
                </NavDropdown.Item>
            </Offcanvas>
        </>
    );
}

export default Example;
