interface IConnectorLineProps {
  thickness: string;
  color: any;
  cx: string;
  cy: string;
  length: string;
  angle: string;
}
export const ConnectorLine = ({
  thickness,
  color,
  cx,
  cy,
  length,
  angle,
}: IConnectorLineProps) => {
  return (
    <div
      style={{
        padding: "0px",
        margin: "0px",
        height: `${thickness}px`,
        backgroundColor: `${color}`,
        lineHeight: "1px",
        position: "absolute",
        left: `${cx}px`,
        top: `${cy}px`,
        width: `${length}px`,
        transform: `rotate(${angle}deg`,
      }}
    ></div>
  );
};
