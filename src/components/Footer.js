const Footer = () => {
    return (
      <footer className="footer">
        <p>
          Copyright &copy; {currYear}, Made with 💗 by <strong>PRINCE</strong>
        </p>
      </footer>
    );
  };
  const currYear = new Date().getFullYear();
  export default Footer;