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

  const shownOptions = selectedOption ? options.filter(o => o.key !== selectedOption.key) : options

  return (
    <div className='dropdown' ref={dropdownRef}>
      <div className='selectedOption' onClick={() => setIsOpen(!isOpen)}>
        {
          selectedOption
            ? (
              <>
                <img className='image' src={selectedOption.imageURL} alt={selectedOption.text} />
                <span className='text'>{selectedOption.text}</span>
              </>
            )
            : (
              <span className='text'>{placeholder}</span>
            )
        }
        <div className='gap'></div>
        <MdKeyboardArrowDown className='arrow' />
      </div>
      {
        isOpen && (
          <ul>
            {
              shownOptions.map((option) => {
                const { key, text, imageURL } = option

                return (
                  <li key={key} onClick={() => handleOptionWasClicked(option)}>
                    <img className='image' src={imageURL} alt={text} />
                    <span className='text'>{text}</span>
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