function Button({ text, onClick, type, disabled}) {
  return <button className="button" type={type} disabled={disabled} onClick={onClick}>{text}</button>;
}

// App.js에서 import 하기위해 해당 코드를 추가한다.
export default Button;
