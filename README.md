MERN-15 || M-14 Assignment — Express (Theory)
Part 1: Theory Questions
1) What is the difference between Client-side and Server-side rendering?
•	Client-side rendering (CSR): The server sends mostly a basic HTML page plus JavaScript. The browser (client) renders the UI after loading and running the JS.
•	Server-side rendering (SSR): The server generates the full HTML (or most of it) before sending it to the browser. The client receives already-rendered content.
________________________________________
2) Explain the Request-Response Model with a simple example.
In the request-response model, a client (browser) sends a request to a server, and the server sends back a response. Example: When you open a webpage: 1. Browser requests GET /home 2. Server processes it 3. Server responds with HTML/JSON data (e.g., 200 OK)
________________________________________
3) What happens when a user visits a website in their browser?
1.	Browser requests the site from the server (DNS → connection → HTTP request).
2.	Server responds with HTML/CSS/JS (and possibly JSON data).
3.	Browser renders the page.
4.	If the app uses APIs, the browser may make additional requests for data.
________________________________________
Routing, Controllers & Middleware
4) What is Routing in a web application?
Routing is the process of mapping an incoming request (URL + HTTP method) to the correct handler (function) in the application.
Example:
- GET / → home handler
- GET /user → user handler
________________________________________
5) What is a Controller and why is it used?
A controller is a module/function that handles a request and prepares the response.
It helps in keeping code clean by separating: - routing logic (where the request goes) - business logic (what the server does)
________________________________________
6) What is Middleware?
Middleware is code that runs between the request and the final response.
It can: - log requests - check authentication - parse data - modify request/response - stop the request or pass it to the next handler
________________________________________
7) Explain the difference between Controllers and Middleware.
•	Controller: Final handler for a specific route (returns the main response).
•	Middleware: Runs for one or more requests before the controller (can log, validate, modify, or block).
In short: Middleware is a “pipeline step” - Controller is the “endpoint logic”
________________________________________
8) Give one real-life example where middleware can be useful.
Logging middleware is a common example.
For instance, every time a user visits a page, middleware records: - timestamp - IP address - requested URL
This helps debugging and monitoring.
________________________________________
JSON Fundamentals
9) What is JSON?
JSON (JavaScript Object Notation) is a lightweight data format used to represent structured data using key-value pairs.
________________________________________
10) Why is JSON commonly used in APIs?
•	Easy to read and write
•	Works well with JavaScript and Node.js
•	Language-independent (supported by many programming languages)
•	Efficient and structured for request/response data
________________________________________
11) Write a valid JSON object containing:
{
  "name": "John Doe",
  "age": 25,
  "course": "MERN Stack"
}
________________________________________
12) Write three best practices for creating JSON data.
1.	Use consistent data types (e.g., age as a number, not a string).
2.	Keep keys meaningful and consistent (clear naming like userId, role).
3.	Avoid unnecessary nesting and keep the structure simple and readable.
________________________________________
Web Security
13) What is a DoS (Denial of Service) Attack?
A DoS attack overwhelms a server with too many requests from one source, causing slowdowns or downtime.
________________________________________
14) What is a DDoS (Distributed Denial of Service) Attack?
A DDoS attack overwhelms a server using many sources (botnets/compromised devices), making it harder to block.
________________________________________
15) What is Rate Limiting and how does it help protect a server?
Rate limiting restricts how many requests a user can make in a time window (e.g., 100 requests per minute).
It helps prevent abuse like brute force attacks and DoS attempts by limiting traffic from a single client.
________________________________________
Cookies & Authentication
16) What is a Cookie?
A cookie is a small piece of data stored in the user’s browser.
It’s sent with requests to the server and is often used for session management or preferences.
________________________________________
17) What is an HTTP-Only Cookie?
An HTTP-Only cookie is a cookie that cannot be accessed using client-side scripts (like JavaScript document.cookie).
It is only sent to the server via HTTP requests.
________________________________________
18) Why are HTTP-Only Cookies more secure than regular cookies?
Because even if an attacker injects JavaScript (XSS), the script cannot read the cookie value marked as HTTP-Only.
This reduces the risk of session theft.
________________________________________
19) What is Cookie Hijacking?
Cookie hijacking is an attack where an attacker steals a user’s cookie (often via XSS, malware, or insecure connections) and uses it to impersonate the user.
________________________________________
Performance & Scalability
20) What is a CDN (Content Delivery Network)?
A CDN is a network of servers distributed across different geographic locations that store and deliver content closer to users.
________________________________________
21) How does a CDN improve website performance?
•	Reduces latency by serving content from nearby servers
•	Handles high traffic better
•	Reduces load on the main server
•	Improves speed for static assets like images, CSS, JS
________________________________________
22) What is Load Balancing?
Load balancing distributes incoming traffic across multiple servers to ensure no single server gets overloaded.
________________________________________
23) Why is Load Balancing important for large applications?
Because it: - improves performance and responsiveness - increases availability (if one server fails, others handle requests) - scales the system efficiently
