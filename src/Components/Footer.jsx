// eslint-disable-next-line react/prop-types
function Footer({ bottomRef }) {
  return (
    <>
      <div className="footer">
        <p ref={bottomRef}>&copy; 2024 Recipe App. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
