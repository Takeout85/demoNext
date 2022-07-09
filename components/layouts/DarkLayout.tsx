import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const DarkLayout: FC<Props> = ({ children}) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: '3px',
      borderRadius: '10px',
    }}>
      <h3>Dark-Layout</h3>
      {children}
    </div>
  )
}
