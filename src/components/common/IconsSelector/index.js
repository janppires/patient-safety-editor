import React, { PureComponent } from 'react';
import Select from 'react-select';
import Icon from '../Icon';

var options = [
  { label: 'MdBorderColor', value: 'MdBorderColor' },
  { label: 'MdCardTravel', value: 'MdCardTravel'},
  { label: 'MdBusinessCenter', value: 'MdBusinessCenter' },
];

const renderOption = (option) => {
  const size = {
    width: '80px',
    height: '80px'
  };
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Icon {...size} name={option.value}/>
      <strong>{option.label}</strong>
    </div>
  );
}

const renderValue = (option) => {
  const size = {
    width: '25px',
    height: '25px'
  };
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Icon {...size} name={option.value}/>
      <strong style={{marginRight: 40}}>{option.label}</strong>
    </div>
  );
}

class IconSelector extends PureComponent {
  render() {
    const {handleSelection, icon} = this.props;
    return (
      <div>
        <Select
          onInputChange={(inputValue) => this._inputValue = inputValue}
          options={options}
          optionRenderer={renderOption}
          onChange={handleSelection}
          value={icon}
          valueRenderer={renderValue}
          placeholder='Choose icon...'
          />
      </div>
    );
  }
}

export default IconSelector;