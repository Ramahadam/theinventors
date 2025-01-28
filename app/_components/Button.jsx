import Link from 'next/link';

function Button({ children, className, variant = 'primary', href }) {
  const baseStyles =
    'px-[38px] py-[18px] rounded-27 transition-colors self-start';

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
    link: 'bg-primary text-white hover:bg-primary-dark',
    linear: 'bg-color-primary-linear text-white',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className || ''}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}

export default Button;
