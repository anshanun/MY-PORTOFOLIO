const Footer = () => {
  return (
    <footer className="mt-24 py-8 bg-background border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Anisa H. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
