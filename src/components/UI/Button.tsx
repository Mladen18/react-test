import style from "./Button.module.scss";

const Button: React.FC<{ name: string; btnType: "button" | "submit" | "reset" | undefined; disabled: boolean }> = ({
  name,
  btnType,
  disabled,
}) => {
  return (
    <button type={btnType} disabled={disabled} className={style.button}>
      {name}
    </button>
  );
};

export default Button;
