import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';

const menus = [
  {
    name: "主页",
    path: "/",
    icon: <DashboardIcon />
  }, {
    name: "example",
    path: "/example",
    icon: <ShoppingCartIcon />
  },
  {
    name: "Customers",
    path: "/customer",
    icon: <PeopleIcon />
  },
  {
    name: "用户",
    path: "/users",
    icon: <BarChartIcon />
  },
  {
    name: "C2",
    path: "/c2",
    icon: <LayersIcon />
  }]
const secondary = [
  {
    name: "Current month",
    path: "",
    icon: <AssignmentIcon />,
  },
  {
    name: "Last quarter",
    path: "",
    icon: <AssignmentIcon />,
  },
  {
    name: "Year-end sale",
    path: "",
    icon: <AssignmentIcon />,
  }
]
export const MainListItems: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const navigate = useNavigate();

  const handleListItemClick = (item: any, index: number) => {
    setSelectedIndex(index);
    navigate(item.path);
  };

  return (
    <>
      {menus.map((item, index) => (
        <ListItemButton
          key={item.name}
          onClick={() => handleListItemClick(item, index)}
          // onMouseOver={() => setSelectedIndex(index)}
          // onMouseOut={() => setSelectedIndex(-1)}
          sx={{
            backgroundColor: selectedIndex !== index ? '#white' : 'RGB(226, 242, 253)',
            borderRadius: '20px',
            margin: '5px 0',
            transition: 'background-color 0.2s ease-in-out'
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={<Typography style={{ fontSize: '14px' }}> {item.name} </Typography>} />
        </ListItemButton>
      ))}
    </>
  );
};





export const SecondaryListItems: React.FC = () => {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      {secondary.map((item) => {
        const navigate = useNavigate();
        return (
          <ListItemButton key={item.name} onClick={() => {
            navigate(item.path)
          }
          }>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ fontSize: '14px' }}>
                  {item.name}
                </Typography>
              }
            />
          </ListItemButton>
        )
      })}
    </React.Fragment>
  )
}





