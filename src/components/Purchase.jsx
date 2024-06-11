import React from "react";
import { Box, Rating, Slider, TextField, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'web designer',
  'web application',
  'react native dev',
  'flutter dev',
  'angular dev',
  'python dev',
  'java dev',
  'devops enginer',
  'UI/UX designer',
  'front-end dev',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  
const Purchase = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <Box
      sx={{
        // width: 500,
        // maxWidth: '100%',
        marginX: "auto",
      }}
      height={600}
      width={600}
      my={4}
      display="flex"
      flexDirection={"column"}
    //   alignItems="center"
    //   justifyContent={"center"}
      gap={4}
      p={2}
    >
      <TextField fullWidth label="first name" id="fullWidth" />
      <TextField fullWidth label="middle name" id="fullWidth" />
      <TextField fullWidth label="last name" id="fullWidth" />
      <TextField fullWidth label="first name" id="fullWidth" />
      <Typography id="input-slider" gutterBottom>
        Experience*
      </Typography>
      <Slider
       aria-label="Temperature"
       defaultValue={2}
       valueLabelDisplay="auto"
       shiftStep={3}
       step={1}
       marks
       min={1}
       max={10}
      />
{/* ////////////////////////// */}
    <FormControl sx={{ m: 1, width: 560}}>
        <InputLabel id="demo-multiple-chip-label">Select multiple category</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Select multiple category" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* /////////////////////////// */}

     <Box 
     sx={{
        width: "50rem",
        display: 'flex',
        alignItems: 'center',
        gap: "1rem",
      }}
     >
     <Typography component="legend">Rate our product</Typography>
      <Rating
        name="hover-feedback"
        precision={0.5}
        value={value}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
     </Box>

     {/* ////////////////////////////////// */}

    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

    </Box>
  )
};

export default Purchase;
