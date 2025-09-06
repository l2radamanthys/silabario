function CenteredBlock({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-surface p-4">
      <div className="">
        {children}
      </div>
    </div>
  )
}

export { CenteredBlock }
