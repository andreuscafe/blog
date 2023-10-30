import Container from "./container";
import cn from "classnames";

type Props = {
  content?: string;
};

const Alert = ({ content = "Este es un ejemplo de alerta." }: Props) => {
  return (
    <div className={cn("border-b bg-neutral-50 border-neutral-200")}>
      <Container>
        <div className="py-2 text-center text-sm">{content}</div>
      </Container>
    </div>
  );
};

export default Alert;
