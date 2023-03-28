import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {visuallyHidden} from '@mui/utils';
import {deleteUsersById, getUsers} from '@/api/user';
import {EnhancedTableToolbar} from "@/pages/user/components/EnhancedTableToolbar";
import IconButton from "@mui/material/IconButton";
import DetailsIcon from '@mui/icons-material/Details';
import FormDialog from "@/pages/user/components/UserDialog";
import {useState} from "react";

const headCells: HeadCell[] = [
  {
    id: 'username',
    label: '用户名',
  },
  {
    id: 'roles',
    label: '角色',
  },
  {
    id: 'nickname',
    label: '昵称',
  },
  {
    id: 'phone',
    label: '电话号',
  },
  {
    id: 'email',
    label: '邮箱',
  }, {
    id: 'createdAt',
    label: '创建时间',
  }
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IUser) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

// 表单头部
export function EnhancedTableHead(props: EnhancedTableProps) {
  const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
      props;
  const createSortHandler =
      (property: keyof IUser) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };

  return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  'aria-label': 'select all desserts',
                }}
            />
          </TableCell>
          {headCells.map((headCell) => (
              <TableCell
                  key={headCell.id}
                  align={'center'}
                  padding={'normal'}
                  sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
          ))}
        </TableRow>
      </TableHead>
  );
}


export default function UserTable() {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof IUser>('phone');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState<IUser[]>([]);
  const [count, setCount] = React.useState(0)
  const [id, setId] = useState(0)
  const handlerDelete = () => {
    deleteUsersById({IDs: selected}).then((res) => {
      if (res.status === 200) {
        console.log('删除成功');
        fetchData(page, rowsPerPage)
      }
    })
  }

  const fetchData = (page: number, limit: number) => {
    getUsers({page: page, limit: limit}).then((res) => {
      setRows(res.data.records)
      setCount(res.data.total)
    })
  }

  React.useEffect(() => {
    fetchData(page, rowsPerPage)
  }, [page, rowsPerPage])

  const handleRequestSort = (
      event: React.MouseEvent<unknown>,
      property: keyof IUser,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      console.log('全部');
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    console.log('选中某项', id);
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('改变每页显示数量');
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('改变密集度');
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
      <Box sx={{width: '100%'}}>
        <Paper sx={{width: '100%', mb: 2}}>
          {/* 工具栏 */}
          <EnhancedTableToolbar onChildClick={handlerDelete} numSelected={selected.length}/>
          {/* 数据容器 */}
          <TableContainer>
            <Table
                sx={{minWidth: 750}}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
              />
              <TableBody>
                {
                  rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                            <TableRow
                                hover
                                // onClick={(event) => handleClick(event, row.id)}
                                role="checkbox"
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                key={row.id}
                                selected={isItemSelected}
                                sx={{cursor: 'pointer'}}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    checked={isItemSelected}
                                    onClick={(event) => handleClick(event, row.id)}
                                    inputProps={{
                                      'aria-labelledby': labelId,
                                    }}
                                />
                              </TableCell>
                              <TableCell
                                  component="th"
                                  id={labelId}
                                  scope="row"
                                  padding="none"
                                  align={'center'}
                              >
                                {row.username}
                              </TableCell>
                              <TableCell align={'center'}>{row.roles.map(role => role.name).join(', ')}</TableCell>
                              <TableCell align={'center'}>{row.nickname}</TableCell>
                              <TableCell align={'center'}>{row.phone}</TableCell>
                              <TableCell align={'center'}>{row.email}</TableCell>
                              <TableCell align={'center'}>{row.createdAt}</TableCell>
                              <TableCell>
                                <IconButton color="secondary" aria-label="add an alarm" onClick={() => {
                                  setId(row.id)
                                  setOpen(true);
                                }}>
                                  <DetailsIcon/>
                                </IconButton>
                              </TableCell>
                            </TableRow>
                        );
                      })}
                {emptyRows > 0 && (
                    <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                    >
                      <TableCell colSpan={6}/>
                    </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {/* 分页组件 */}
          <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense}/>}
            label="Dense padding"
        />
        <FormDialog id={id} open={open} onClose={() => {
          setOpen(false)
        }} onCallback={(data: any) => {
          console.log(data)
        }}/>
      </Box>
  );
}
