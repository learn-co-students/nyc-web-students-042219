- Why websockets
  - Before sockets, polling
    - show Google docs network tab
  - Who initiates the request?
    - request/response
    - push vs pull
    - full duplex vs half duplex
  - A different protocol
  
- How does the app work
  - walk thru component tree and app functionality
  - everything works with full page refresh, you should get your app to this point before trying to integrate actioncable

- `react-actioncable-provider`
  - npm install
  - set up the ActionCableProvider
    - talk about what this does (initiates handshake)
    - show the code
- set up the backend
  - add the route
    - make handshake from frontend
  - generate the feed channel
  - broadcast the tweet to all subscribers (start with a sample message, like { hi: "there" })
- set up the consumer
  - import
  - create component
  - which channel are we listening to?
  - onReceived = callback function (like an event listener, listening for message received events)
  - reuse addTweet function

- demo hidden_phrases OR react-ipuz???
- stream_from vs stream_for
  - in ActionCableConsumer, {channel: 'GamesChannel', game_id: id}

- Show resources/blog posts re: sockets
