import { Router } from 'express'

const suggestionRouter = Router()

suggestionRouter.get('/', async (request, response) => {
	const today = new Date().getDay()

	const suggestion = {
		dayOfTheWeek: today
	}

	return response.json(suggestion)

})

suggestionRouter.post('/aceitar', async (request, response) => {
	const acceptedSuggestion = {
		chefMessage: 'Obrigado por aceitar a nossa sugestão! Você recebeu 10 pontos de benefício na nossa pizzaria!'
	}

	return response.json(acceptedSuggestion)
})

export default suggestionRouter
