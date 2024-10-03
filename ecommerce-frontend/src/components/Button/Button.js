import "./Button.css";

const Button = ({icon , children}) => {
   return (
   <>
   <div className="button_outer">
      <button className="prop_button">
         {icon ? <img src={icon}/> : null}
         {children}
      </button>
      </div>
   </>
   )
};

export default Button;