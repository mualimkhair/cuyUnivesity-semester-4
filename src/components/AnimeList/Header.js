import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between ">
      <h1 className="font-bold text-xl md:text-2xl text-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="flex gap-1 text-sm mt-2 md:text-base hover:text-accent text-primary transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
