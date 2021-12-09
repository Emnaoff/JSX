import './App.css';
import imageInSrc from './imageInSrc.jpg';
import { Card,Navbar,Container,Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="Main"> 
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">JSX</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About us</Nav.Link>
      <Nav.Link href="#pricing">Suggestions</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
</>

<br/>
<br/>
<br/>

<div style ={{border:'solid 1px black', maxWidth:'100vw'}}/>
<h1 className="title">Emna</h1>

<br/>
<img src={imageInSrc} alt='image in the src folder'/>

<br/>
<br/>
<br/>

<img src="/imageInpublic.jpg" alt="C:\Users\MacBook Air\Desktop\JSX Checkpoint\checkpoint\public\imageInPublic.jpg" />

<br/>
<br/>
<br/>
<br/>

<video src={<iframe width="917" height="516" src="https://www.youtube.com/embed/gGGPTskb7c8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>} width="600" height="300" controls="controls" autoplay="true" />

<br/>
<br/>
<br/>
<br/>

<Card>
  <Card.Header>Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</div>
  );
}

export default App;
