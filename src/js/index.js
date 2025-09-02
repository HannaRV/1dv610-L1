/**
 * @file Main application entry point for welcome app with jokes.
 * @module js/index
 * @author Hanna Rubio Vretby <hr222sy@student.lnu.se>
 * @version 1.0.0
 */

import { JokeAPI } from './api.js'

const jokeAPI = new JokeAPI()

/**
 * Get greeting based on current time.
 *
 * @returns {string} Time-based greeting
 */
function getTimeGreeting () {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 17) return 'Good afternoon'
  if (hour >= 17 && hour < 22) return 'Good evening'
  return 'Good night'
}

/**
 * Show welcome message with joke.
 *
 * @returns {Promise<void>}
 */
async function showWelcome () {
  const name = document.getElementById('nameInput').value.trim()

  if (!name) {
    document.getElementById('nameInput').focus()
    return
  }

  const greeting = getTimeGreeting()
  const joke = await jokeAPI.getJoke()

  document.getElementById('greeting').textContent = `${greeting}, ${name}! 🎉`
  document.getElementById('jokeText').textContent = joke
  document.getElementById('result').hidden = false
}

// Setup event listeners
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('welcomeButton').addEventListener('click', showWelcome)
  document.getElementById('nameInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') showWelcome()
  })
  document.getElementById('nameInput').focus()
})
