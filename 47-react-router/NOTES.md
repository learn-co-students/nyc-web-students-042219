SWBATS
- Understand the difference between client-side and server-side routing


- What is React-Router
  - Pop quiz hotshot: Do we still have a SPA if we use react router?
  
- server vs. client side routing
  - server: request/response cycle - GET request, render or redirect, receive some new HTML and load it
  - some advantages, only load what we need...
  - but there's a full-page refresh, so it's slower

  - client: dynamic routing
  - no full-page refresh
  - initial request is bigger
  - there are optimization strategies - this is a big topic but worth diving into if you're interested (Google Chrome dev blogs)

- BrowserRouter vs HashRouter
  - Both use browser's history API
  - BR: `window.location`
    - requires a server to handle the routes (I think the server CRA uses handles this but it doesn't work if u want to deploy...)
  - HR: `window.location.hash`
    - works with static deploy
  - different syntax, 

- demo app
  - `window.location` -> show where u are
  - `window.history.pushState` -> manipulate the route
- import { BrowserRouter as Router }
  - initial setup: switch statement for page in state
  - Router component
  - Route component
    - component vs render
      - use render if you need access to props in scope for current component
      - inclusive routing
        - Switch or exact (switch will return first match; exact will only return exact)
          - show 404 if all routes miss

  - Link component
    - use instead of anchor tag, anchor will reload the page
  
  - Redirect component
    - redirect to a route
    - use for conditional redirects, needs to be returned by render

  - Route props
    - Route with component will pass down routeProps
    - Route with render - you have to send down routeProps manually
    - props.history.push() && props.history.goBack()
    - using params