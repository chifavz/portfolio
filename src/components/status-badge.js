import * as React from "react"

const StatusBadge = ({ tone = `building`, children }) => (
  <span className={`status status--${tone}`}>
    <span className="status__dot" aria-hidden="true" />
    {children}
  </span>
)

export default StatusBadge
