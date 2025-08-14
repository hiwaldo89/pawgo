import cn from "classnames";

type ContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div
      {...props}
      className={cn("container mx-auto px-4 sm:px-8 lg:px-16", props.className)}
    />
  );
};

export default Container;
