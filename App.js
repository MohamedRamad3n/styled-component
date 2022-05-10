import Container from "./styled component/Container";
//import './App.css'
import Flex from "./styled component/Flex";
import Button from "./styled component/Button";
import Link from "./styled component/Link";
function App() {
  return (
    <div>
      <Container as="section">
        <h1>Hello</h1>
        <Flex>
          <Button>click Here</Button>
          <Button size="sm" type="error">
            click Here
          </Button>
          <Button size="lg" type="secondary">
            click Here
          </Button>
          <Link href="https://www.google.com">Google</Link>
          <Link href="https://www.google.com">Google</Link>
          <Link href="https://www.google.com">Google</Link>
        </Flex>
      </Container>
    </div>
  );
}

export default App;
