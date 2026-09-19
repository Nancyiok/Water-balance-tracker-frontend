type Props = {
  className?: string;
};

export const Button = ({ className, ...props }: Props) => {
  return (
    <button
      className={`bg-primary hover:bg-primary-light text-white ${className}`}
      {...props}
    />
  );
};
