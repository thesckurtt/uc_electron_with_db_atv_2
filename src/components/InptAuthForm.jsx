import React from 'react'

const InptAuthForm = ({ name, type, text = null, placeholder }) => {
  return (
    <div class="mb-3">
      <label for={name} class="form-label">{text}</label>
      <input type={type ?? 'text'} class="form-control" id={name} placeholder={placeholder} />
    </div>
  )
}

export default InptAuthForm
