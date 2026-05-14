const Footer = () => {
  return (
    <footer
      className="py-4 text-center border-t border-black-300"
      style={{
        backgroundColor: 'transparent',
        borderColor: 'var(--border-color)', // Dynamically use the border color based on the theme
        color: 'var(--text-color)', // Use theme text color
      }}
    >
      <p>© 2025 Austin Schultz. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
