import React, { useState, useRef } from 'react'
import './Dropdown.scss'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useOutsideClickEffect } from '../../hooks/useOutsideClickEffect'

function Dropdown({ options, placeholder, anOptionWasSelected }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const dropdownRef = useRef(null)
  useOutsideClickEffect(dropdownRef, () => setIsOpen(false))

  function handleOptionWasClicked(option) {
    setIsOpen(!isOpen)
    setSelectedOption(option)
    anOptionWasSelected(option)
  }

  const selectionText = selectedOption ? selectedOption.text : placeholder

  return (
    <div className='mm-dropdown' ref={dropdownRef}>
      <div className='textfirst' onClick={() => setIsOpen(!isOpen)}>
        {selectionText} <MdKeyboardArrowDown className='down' />
      </div>
      {
        isOpen && (
          <ul>
            {
              options.map((option) => {
                const { key, text, imageURL } = option

                return (
                  <li key={key} className='input-option' onClick={() => handleOptionWasClicked(option)}>
                    <img src={imageURL} width='40' height='40' alt={text} />
                    <span>{text}</span>
                  </li>
                )
              })
            }
          </ul>)
      }
    </div>
  )
}

export default Dropdown