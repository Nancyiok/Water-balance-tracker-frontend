export const Button = ({ className, ...props }) => {
  return (
    <button
      className={`bg-primary hover:bg-primary-light text-white ${className}`}
      {...props}
    />
  );
};
