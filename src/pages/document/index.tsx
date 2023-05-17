import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';

interface IFile {
  name: string; // 文件名
  type?: string; // 文件类型
  isDirectory: boolean; // 是否是文件夹
  children?: IFile[]; // 子文件
  size?: number; // 文件大小
  lastModifiedTime?: string; // 最后修改时间
  accessAddress?: string; // 访问地址
  savePath?: string; // 保存路径
}

const rows: IFile[] = [
  {
    name: 'd1',
    type: 'directory',
    isDirectory: true,
    size: 159,
    lastModifiedTime: '2021-01-01 12:00:00',
    accessAddress: 'http://www.baidu.com',
    savePath: 'C:/Users/xxx/Desktop',
    children: [
      {
        name: 'Frozen ',
        type: 'image/png',
        isDirectory: false,
        lastModifiedTime: '2021-01-01 12:00:00',
        accessAddress: 'http://www.baidu.com',
        savePath: 'C:/Users/xxx/Desktop',
        size: 159,
      },
      {
        name: ' yoghurt',
        type: 'image/png',
        isDirectory: false,
        lastModifiedTime: '2021-01-01 12:00:00',
        accessAddress: 'http://www.baidu.com',
        savePath: 'C:/Users/xxx/Desktop',
        size: 159,
      },
    ],
  },
  {
    name: 'd2',
    type: 'directory',
    isDirectory: false,
    size: 237,
    lastModifiedTime: '2021-01-01 12:00:00',
    accessAddress: 'http://www.baidu.com',
    savePath: 'C:/Users/xxx/Desktop',
  },
  {
    name: 'd3',
    type: 'directory',
    isDirectory: true,
    size: 159,
    lastModifiedTime: '2021-01-01 12:00:00',
    accessAddress: 'http://www.baidu.com',
    savePath: 'C:/Users/xxx/Desktop',
    children: [
      {
        name: 'd3-1 ',
        type: 'image/png',
        isDirectory: false,
        lastModifiedTime: '2021-01-01 12:00:00',
        accessAddress: 'http://www.baidu.com',
        savePath: 'C:/Users/xxx/Desktop',
        size: 159,
      },
      {
        name: ' d3-2',
        type: 'image/png',
        isDirectory: false,
        lastModifiedTime: '2021-01-01 12:00:00',
        accessAddress: 'http://www.baidu.com',
        savePath: 'C:/Users/xxx/Desktop',
        size: 159,
      },
    ],
  },
];

function Row(props: { row: IFile }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            disabled={!row.isDirectory}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{row.type}</TableCell>
        <TableCell align="left">{row.size}</TableCell>
        <TableCell align="left">{row.lastModifiedTime}</TableCell>
        <TableCell align="left">{row.accessAddress}</TableCell>
        <TableCell align="left">{row.savePath}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open && row.isDirectory} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.children?.map((historyRow) => (
                    <TableRow key={historyRow.name}>
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                      <TableCell>{historyRow.name}</TableCell>
                      <TableCell align="right">{historyRow.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">文件名</TableCell>
            <TableCell align="left">文件类型</TableCell>
            <TableCell align="left">文件大小</TableCell>
            <TableCell align="left">最后修改时间</TableCell>
            <TableCell align="left">访问地址</TableCell>
            <TableCell align="left">保存路径</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function DocumentPage() {
  return (
    <div>
      <h1>Document Page</h1>
      <CollapsibleTable />
    </div>
  );
}
