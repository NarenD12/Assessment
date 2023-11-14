import Stack from 'react-bootstrap/Stack';
import './Loading.css';
function Loading() {
  return (
    <Stack gap={3}>
      <div className="box1">LOADING</div>
      <div className="box2">SCREEN</div>
      <div className="box3">REACTJS</div>
    </Stack>
  );
}

export default Loading;