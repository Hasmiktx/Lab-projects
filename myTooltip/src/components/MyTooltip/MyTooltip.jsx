import './Style.css';

const MyTooltip = ({
    text,
    children,
    position,
    color,
    backgroundColor,
    fontSize,
}) => {
    return (
        <div className="tooltip_div">
            {children}
            <div
                className={`tooltip_text ${position}`}
                style={{ color, backgroundColor, fontSize }}
            >
                {text}
            </div>
        </div>
    );
};

export default MyTooltip;
