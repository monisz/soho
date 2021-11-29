import Button from 'react-bootstrap/Button';

const CustomButton = ({type, variant, className, text, handleClick}) => {
  return <Button type={type} variant={variant} className={className} onClick={handleClick}>{text}</Button>
};

export default CustomButton;
