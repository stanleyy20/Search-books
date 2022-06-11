export interface Props {
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button style={{ display: 'block' }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
