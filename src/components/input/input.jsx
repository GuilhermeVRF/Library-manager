import style from "./input.module.css";

function Input({label, type, placeholder, onChange}) {
  return (
    <>
  
        <div className={style.input_body}>
          <input type={type} placeholder={placeholder} id={label} required onChange={onChange}/>
        </div>
    </>
  );
}

export default Input;
