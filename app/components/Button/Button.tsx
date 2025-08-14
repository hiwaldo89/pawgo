import cn from "classnames";
import Link from "next/link";

type ButtonBaseProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
  className?: string;
  children: React.ReactNode;
};

// Button with onClick
type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

// Button as Link
type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    onClick?: () => void;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "lg",
  className,
  ...props
}) => {
  const baseClasses = cn(
    "rounded-[18px] inline-block cursor-pointer",
    {
      "bg-lavander text-white": variant === "primary",
      "bg-peach": variant === "secondary",
      "px-[25px] py-[10px] cta": size === "lg",
      "px-[15px] py-[6px] body-sm": size === "sm",
    },
    className
  );

  if ("href" in props && props.href) {
    const { href, children, ...rest } = props as ButtonAsLink;
    return (
      <Link className={baseClasses} href={props.href} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, ...rest } = props as ButtonAsButton;
  return (
    <button className={baseClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
