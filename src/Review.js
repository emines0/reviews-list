import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  /*
   * props of te people object based on index
   * while index will be changed, the review will change too
   */

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      /*
       * If my number is bigger then length of the people array return 0
       */
      return 0
    }
    if (number < 0) {
      /*
       * If my number is smaller then 0 (beginning of the array) return the last item of the array
       */
      return people.length - 1
    }
    /*
     * If my number is neither of previous case return number
     */
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    /*
     * Get the random rounded number from 0 to array.length
     */
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    /*
     * If current index is same as randomNumber add 1
     * to avoid have same review couple of times
     */
    setIndex(checkNumber(randomNumber))
    /*
     * Set index to checked random number
     */
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        suprise me
      </button>
    </article>
  )
}

export default Review
