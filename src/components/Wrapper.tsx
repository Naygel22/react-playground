type WrapperProps={
    children: React.ReactNode;
}

export const Wrapper = ({children}:WrapperProps) => {
  return (
    <div className="wrapper">{children}</div>
  )
}
