import Button from 'react-bootstrap/Button';

const CustomButton = ({variant, className, text, handleClick}) => {
  return <Button variant={variant} className={className} onClick={handleClick}>{text}</Button>
};

export default CustomButton;
