import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, disabled, size, type, to, ...props }) => {
  const Component = to ? 'a' : 'button';

  return (
    <Component disabled={disabled} {...props}>
      <span>{children}</span>
    </Component>
  );
};
Button.propTypes = {
  // Button content
  children: PropTypes.node.isRequired,

  disabled: PropTypes.bool,

  // Button size
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  // Button type
  type: PropTypes.oneOf(['default', 'outline', 'simple']),

  to: PropTypes.string,
};
Button.defaultProps = {
  disabled: false,
  size: 'md',
  type: 'default',
  to: null,
};

export default Button;
