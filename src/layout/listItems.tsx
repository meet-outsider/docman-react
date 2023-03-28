import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {useNavigate} from "react-router-dom";
import {Typography} from '@mui/material';

const menus = [
  {
    name: "主页",
    path: "/",
    icon: <DashboardCustomizeRoundedIcon color="primary" />
  }, {
    name: "casbin",
    path: "/casbin",
    icon: <ShoppingCartIcon color="primary"/>
  },
  {
    name: "文档",
    path: "/document",
    icon: <PeopleIcon color="primary"/>
  },
  {
    name: "用户",
    path: "/users",
    icon: <BarChartIcon color="primary"/>
  },
  {
    name: "监控",
    path: "/monitor",
    icon: <LayersIcon color="primary"/>
  }, {
    name: "example",
    path: "/example",
    icon: <LayersIcon color="primary"/>
  }]
const secondary = [
  {
    name: "Current month",
    path: "",
    icon: <AssignmentIcon/>,
  },
  {
    name: "Last quarter",
    path: "",
    icon: <AssignmentIcon/>,
  },
  {
    name: "Year-end sale",
    path: "",
    icon: <AssignmentIcon/>,
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
                sx={{
                  backgroundColor: selectedIndex !== index ? '#white' : 'RGB(226, 242, 253)',
                  borderRadius: '20px',
                  margin: '5px 0',
                  transition: 'background-color 0.2s ease-in-out'
                }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={<Typography style={{fontSize: '14px'}}> {item.name} </Typography>}/>
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
                      <Typography style={{fontSize: '14px'}}>
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





