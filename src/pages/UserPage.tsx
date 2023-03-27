import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getUsers } from '@/api/user';



interface IUser {
  id: number;
  username: string;
  nickname: string;
  email: string;
  phone: string;
  roles: { name: string }[]
  createdAt: string;
}

// const rows: IUser[] = [];

export default function BasicTable() {
  const [rows, setUsers] = React.useState<IUser[]>([]);
  React.useEffect(() => {
    getUsers()
      .then((response) => {
        console.log(response.data.records);
        setUsers(response.data.records);
      })
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>用户名</TableCell>
            <TableCell align="right">昵称</TableCell>
            <TableCell align="right">角色</TableCell>
            <TableCell align="right">电话号</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">注册时间</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.username}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.nickname}</TableCell>
              <TableCell align="right">{row.roles?.map(role => role.name).join("、")}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}