import { Router } from 'express'

const suggestionRouter = Router()

suggestionRouter.get('/', async (request, response) => {
	const today = new Date().getDay()

	const suggestion = {
		dayOfTheWeek: today
	}

	setTimeout(() => response.json(suggestion), 1000)

})

suggestionRouter.post('/aceitar', async (request, response) => {
	const acceptedSuggestion = {
		chefMessage: 'Obrigado por aceitar a nossa sugestão! Você recebeu 10 pontos de benefício na nossa pizzaria!'
	}

  setTimeout(() => response.json(acceptedSuggestion), 1000)
})

export default suggestionRouter
