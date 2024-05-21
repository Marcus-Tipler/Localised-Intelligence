import ollama from 'ollama'

const ollama = new Ollama({ host: 'http://localhost:11434' })
const response = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Why is the sky blue?' }],
})

console.log(response);