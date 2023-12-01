import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps
}) => {


  const finalClassName = `
  ${s.button} 
  ${xType === "red" ? s.red : s.default} 
  ${xType === "secondary" ? s.secondary : s.default} 
  ${disabled ? s.disabled : ''}
  `;

  // const mods: Mods = {
  //   [s.disabled]: disabled
  // }

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};

export default SuperButton;

// type Mods = Record<string, boolean | string | undefined>

// const classnames = (
//     cls: string,
//     mods: Mods,
//     additional:Array<string | undefined> = []
// ): string => {

//     return [
// cls,
// ...additional.filter(Boolean),
// ...Object.entries(mods)
// .filter(([_, value]) => Boolean(value))
// .map(([clasName])=> clasName)
//     ]
//     .join(' ')
// }
