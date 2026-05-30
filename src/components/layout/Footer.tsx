export function Footer() {
  return (
    <footer className="px-8 md:px-12 py-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8a8690]">
      <span>Vedant Agrawal — Titlagarh to wherever this goes</span>
      <span className="text-[rgba(255,255,255,0.1)] text-xs">
        updated occasionally, when something changes
      </span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  )
}
