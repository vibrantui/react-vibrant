import styled from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';

import '../config.css';

import * as colors from '../colors';

const buttonSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    padding: '0 8px',
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 12px',
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    padding: '0 16px',
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 36px',
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 72px',
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 8px',
  },
};

function setDisplay({ size }) {
  return size === 'fullWidth' ? 'block' : 'inline-block';
}

function setWidth({ size }) {
  return size === 'fullWidth' ? '100%' : 'initial';
}

const Button = styled.button`
  background: ${({ bgColor }) => colors[bgColor]};
  color: ${({ fontColor }) => colors[fontColor]};
  border: none;
  letter-spacing: 0.8px;
  border-radius: 2px;
  cursor: pointer;
  display: ${setDisplay};
  font-size: ${({ size }) => buttonSizes[size]['font-size']};
  line-height: ${({ size }) => buttonSizes[size]['line-height']};
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: ${({ size }) => buttonSizes[size]['padding']};
  width: ${setWidth};
  transition: all 300ms ease;
  &:hover {
    background: ${({ bgColor }) => darken(0.1, colors[bgColor])}
  }
`;

Button.propTypes = {
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  size: PropTypes.string
}

Button.defaultProps = {
  bgColor: 'slate',
  fontColor: 'snow',
  size: 'medium'
}

export default Button;