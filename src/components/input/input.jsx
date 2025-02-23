import style from "./input.module.css";

function Input(label, type, placeholder) {
  return (
    <>
  
        <div className={style.input_body}>
          <input type={type} placeholder={placeholder} id={label} required />
        </div>
    </>
  );
}

export default Input;
