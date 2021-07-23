# First project trying to fetch and utilize an API in React.js

## Plan of attack :

1. Do some more research on front end frameworks, their uses and which ones are used most in the industry. [x]

2. Choose framework and setup boilerplate. [x]

3. Choose API to work with.[x] => Star Wars API

4. Fetch the API. I'm using a test API first (http://jsonplaceholder.typicode.com/posts) [x]

Notes : some issues here. Tried a normal fetch with async await functions but kept running into errors and didnt manage to troubleshoot
it. Decided to try it with Axios, which worked from the get go. Only issue was a dumb mistake that cost me a lot of time : dont import
default exports with {} in React! Import them normally without brackets. Also be careful with pagination in these types of APIs. Try to limit your calls while testing to not get throttled too quickly (like I got).

5. Create the necessary components. At first this should be Datafetching, People, Starships, Home. [x]

6. Add a Navbar via Semantics-ui framework [x]

7. Add routing via BrowserRouter module in react-router-dom dependency. [x]

8. Display the data we want, finally try cards? IN PROGRESS.
