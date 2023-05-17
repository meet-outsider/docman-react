import { Button } from '@mui/material';
import { useMessage } from '@/hooks/useMessage';
import { MessageType } from '@/components/Message';
import { useEffect } from 'react';
import { getIdentityUsers } from '@/api/flowable/users';
import { getDefintion, getDefintions } from '@/api/flowable/defintions';
import OverviewFlow from '@/components/OverviewFlow';

import ReactFlow, { MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

const defaultNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 0, y: 0 },
  },

  {
    id: '2',
    data: { label: 'Default Node' },
    position: { x: 0, y: 100 },
    // when you don't pass a type, the default one gets used
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 0, y: 200 },
  },
  {
    id: '4',
    type: 'group',
    data: null,
    position: { x: 0, y: 300 },
  },
];

const defaultEdges: any[] = [];

const minimapStyle = {
  height: 120,
};
function Flow() {
  return (
    <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} fitView>
      <MiniMap style={minimapStyle} zoomable pannable />
    </ReactFlow>
  );
}

export default Flow;

export function ExamplePage() {
  const { showMessage, Message } = useMessage({
    defaultType: MessageType.WARNING,
  });
  // useEffect(() => {
  //   // getIdentityUsers().then((res) => {
  //   //   console.log(res);
  //   // });
  //   // getDefintions().then((res) => {
  //   //   console.log(res);
  //   // });
  //   getDefintion(
  //     'createTimersProcess:1:13e81795-ed4f-11ed-b12f-0242ac1a0003'
  //   ).then((res) => {
  //     console.log(res);
  //   });
  // }, []);
  function handleClick() {
    showMessage('Hello, world!', MessageType.ERROR);
  }

  return (
    <div>
      <Button onClick={handleClick}>Show Message</Button>
      <div style={{ width: '60vw', height: '60vh' }}>
        {/* <Flow/> */}
        <OverviewFlow />
      </div>
      {Message}
    </div>
  );
}
