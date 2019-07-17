class Api::V1::BotsController < ApplicationController
	def toggle_sale
		bot = Bot.find(params[:id])

		bot.update(for_sale: !bot.for_sale)

		render json: bot
	end

	def index
		bots = Bot.where(for_sale: true)

		render json: bots
	end

	def purchase
		user = session_user
		bot = Bot.find(params[:id])

		new_balance = user.balance - bot.price
		if new_balance >= 0

			bot.update(for_sale: false, owner: user)
			user.update(balance: new_balance)
			
			render json: bot
		else 

			render json: {errors: "Not enough monies!"}
		end
	end
end