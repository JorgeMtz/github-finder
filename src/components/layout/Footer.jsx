const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-gray-700 text-white footer-center">
      <div>
        <p>Copyright &copy; {year} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
