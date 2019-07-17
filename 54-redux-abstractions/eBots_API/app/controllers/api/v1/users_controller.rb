class Api::V1::UsersController < ApplicationController
	def show
		user = User.find(params[:id])

		render json: user
	end

	def create
		user = User.new(
			name: params[:name],
			username: params[:username],
			password: params[:password],
			balance: 100.0,
			bio: Faker::Hipster.paragraph(2),
			avatar_url: "https://robohash.org/#{params[:name].gsub(" ", "")}.png?size=300x300&set=set4"
		)

		if user.save

			token = encode_token(user.id)

			render json: {user: UserSerializer.new(user), token: token}
		else
			render json: {errors: user.errors.full_messages}
		end
	end

	def add_balance
		user = User.find(params[:id])

		if user.id == session_user.id
			user.update(balance: user.balance+params[:balance].to_f)

			render json: user
		else 
			render json: {errors: "This ain't your wallet!"}
		end
	end

	def get_bot

		Bot.create({
				name: Resetter.generate_name,
				image_url: Faker::Avatar.image,
				price: (50..100).to_a.sample.to_f,
				for_sale: true,
				owner_id: params[:id]
		})

		user = User.find(params[:id])


		render json: user
	end
end