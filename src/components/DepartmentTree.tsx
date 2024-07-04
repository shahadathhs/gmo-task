import React, { useState } from 'react';
import { Checkbox, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const data = {
  "departments": [
    {
      "name": "Customer Service",
      "sub_departments": ["Support", "Customer Success", "Customer Review"]
    },
    {
      "name": "Human Resources",
      "sub_departments": ["Recruitment", "Employee Relations"]
    },
    {
      "name": "Design",
      "sub_departments": ["Web Design", "Product Design", "Graphic Design"]
    }
  ]
};

const DepartmentTree: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (department: string) => {
    setOpen((prev) => ({ ...prev, [department]: !prev[department] }));
  };

  const handleSelect = (department: string, subDepartment?: string) => {
    if (subDepartment) {
      setSelected((prev) => ({ ...prev, [subDepartment]: !prev[subDepartment] }));
    } else {
      const isSelected = !selected[department];
      setSelected((prev) => {
        const newSelected = { ...prev, [department]: isSelected };
        data.departments.find(d => d.name === department)?.sub_departments.forEach(sub => {
          newSelected[sub] = isSelected;
        });
        return newSelected;
      });
    }
  };

  return (
    <List>
      {data.departments.map((dept) => (
        <div key={dept.name}>
          <ListItem button onClick={() => handleToggle(dept.name)}>
            <Checkbox
              checked={!!selected[dept.name] || dept.sub_departments.every(sub => selected[sub])}
              onClick={() => handleSelect(dept.name)}
            />
            <ListItemText primary={dept.name} />
            {open[dept.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[dept.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dept.sub_departments.map((sub) => (
                <ListItem key={sub} button style={{ paddingLeft: 32 }}>
                  <Checkbox
                    checked={!!selected[sub]}
                    onClick={() => handleSelect(dept.name, sub)}
                  />
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentTree;
