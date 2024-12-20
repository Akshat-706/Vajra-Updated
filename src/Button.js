const Button = ({ buttonText }) => {
    return (
        <button className={buttonText} type="submit" onClick={() => {}}>
            {buttonText}
        </button>
    );
};

export default Button;
