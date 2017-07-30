import React from 'react';
import PropTypes from 'prop-types';
import * as MDPack from 'react-icons/lib/md';

const Icon = ({name, ...props}) => {
  const PackIcon = MDPack[name];
  return <PackIcon {...props}/>;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
    ])
}

Icon.defaultProps = {
  height: 50
}

export default Icon;