import "./Button.css";

const Button = ({icon , children}) => {
   return (
    <>
        <button className="prop_button"><img src={icon}/>{children}</button>
   </>
   )
};

export default Button;