import Spinner from 'react-bootstrap/Spinner';

function LoadingSpin() {
  return (
    <Spinner animation="border" role="status" variant='success'>
    <span>Loading....</span>
    </Spinner>
    );
}

export default LoadingSpin;