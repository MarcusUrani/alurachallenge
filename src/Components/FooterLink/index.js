const FooterLink = ({ children, href }) => {
  return (
    <a className="footer__link" href={href}>
      {children}
    </a>
  );
};

export default FooterLink;
