const FooterLink = ({ children, href }) => {
  return (
    <a
      className="footer__link"
      href={href}
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      {children}
    </a>
  );
};

export default FooterLink;
