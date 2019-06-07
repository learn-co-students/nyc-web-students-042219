# Notes

## Part 1
- one of the pivotal moments in the course - connecting frontend and backend
- why are we doing this now? learn how to get data that you need for your frontend; total control; reusable skill for mod 3-4-5; monolithic vs microservice architecture (reuse your api for web/mobile/etc)

- start with frontend starter code, walk thru the frontend (stylesheet, table tr td); we'll send a send a fetch request to dynamically load the data into the table

- some new material but most of it is configuration
- build the rails api part (do it without the --api flag but explain what that is; nothing has changed too much, but rails gives you a lot of extra things it you're only serving JSON instead of rendering out HTML views)

- `rails g model species name:string --no-test-framework`
- `rails g model animal name species:belongs_to diet:integer` (diet - uses enum)

- check the migrations and update the models

- `rails g controller animals index show create --skip-template-engine` (what controller actions do we need? no forms to render)
- check routes, change to resources

- what do we want to render? no html template - render JSON

- seed some species and some animals in rails console

- google `enum rails example` - enum values should match the dropdown in the frontend

- `render json: @animals`

- hit it in the browser

- then set up to hit it in Javascript (fetch and console.log), but run into CORS error
- explain what CORS is (prevent browser requests from unpermitted origins) - this is a security feature built into browsers - talk about why (cookies/sessions being sent to malicious sites)

- install rack cors (follow readme on github)

- on frontend just do typical render things, review?

- for morning - get through making a request to index and rendering the table with the response


-----

## PART 2

- make a POST request on form submit, check that you hit the create action - you will get a token error - remove the `protect_from_forgery` line from the ApplicationController (the `--api` flag will do this by default)
- headers, body (JSON.stringify)

- species: find_or_create_by name

- params[:diet].to_i for enum
- don't need strong_params since we're not sending throught the whole params hash

- get the values from the form when it's submitted

- (aside: ES6 object syntax)

- talk about optimistic vs pessimistic rendering

- LAST THING: serializers

- add `active-model-serializer` gem (latest version) from github

- manually creating the response hash vs using serializers - more reusable; single responsibility

- custom methods - on the model (or on the serializer)

- Rails convention; actually `AnimalSerializer.new(@animal)`

- Weekend project: https://github.com/ihollander/js-frontend-rails-backend-project-guidelines
