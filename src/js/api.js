/**
 * @file Handles joke fetching from external Dad Jokes API.
 * @module js/api
 * @author Hanna Rubio Vretby <hr222sy@student.lnu.se>
 * @version 1.0.0
 */

const API_URL = 'https://icanhazdadjoke.com/'

const BACKUP_JOKES = [
  'Why do programmers prefer dark mode? Because light attracts bugs!',
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "Why do Java developers wear glasses? Because they can't C#!"
]

/**
 * Class for fetching jokes from API with fallback support.
 */
export class JokeAPI {
  /**
   * Fetch joke from API or return backup joke.
   *
   * @returns {Promise<string>} A dad joke
   */
  async getJoke () {
    try {
      const response = await fetch(API_URL, {
        headers: { Accept: 'application/json' }
      })
      if (!response.ok) throw new Error('API failed')
      const data = await response.json()
      return data.joke
    } catch (error) {
      const randomIndex = Math.floor(Math.random() * BACKUP_JOKES.length)
      return BACKUP_JOKES[randomIndex]
    }
  }
}
