🏨 Project Description: Luxury Hotel Listing Website
This website is a luxury hotel and room listing platform designed to showcase high-end accommodations and drive user engagement through a modern, responsive interface. The website allows users to view room details, explore amenities, and perform basic booking-related searches such as selecting check-in/check-out dates, number of guests, and room preferences. Each room is presented with high-resolution images, descriptive content, and call-to-action buttons like “View,” “Tour,” and “Book.”

Beyond room listings, the site includes a specials section, customer reviews, and a staff introduction gallery—enhancing trust and professionalism. The layout is fully responsive, providing a seamless experience across desktops, tablets, and mobile devices.

🧩 Bootstrap Integration in the Project
I used Bootstrap 5 extensively to streamline layout structure, ensure responsiveness, and enhance visual consistency across the site. Key Bootstrap components and utilities include:

✅ Navbar: The responsive navigation bar (navbar, navbar-expand-lg, navbar-dark, bg-dark) automatically collapses into a hamburger menu on smaller screens.

✅ Grid System & Containers: Used container-fluid, row, and col-* classes to manage layout spacing and alignment for forms and content blocks.

✅ Input Groups: Search form fields (check-in, check-out, adults, kids, rooms) utilize input-group and input-group-text for clean, consistent form styling.

✅ Buttons: Styled using Bootstrap’s btn, btn-warning, fw-bold, and other utility classes to maintain visual hierarchy and accessibility.

✅ Table Component: The Specials section uses a responsive Bootstrap table (table, table-hover, table-bordered, table-responsive) to showcase package details in a clean, interactive format.

✅ Typography Utilities: Classes like fw-bold, text-center, mb-2, and mt-2 help organize and style text consistently throughout the layout.

✅ Collapse Component (Navbar): Enables dynamic mobile menu behavior through collapse navbar-collapse and navbar-toggler Bootstrap JavaScript integration.


🛠️ JavaScript Functionality & Future Integration
In addition to the rich UI and responsive design, this project includes foundational JavaScript logic to support future dynamic interaction and data-driven features. The script defines a Room class and a suite of utility functions that manage room data, calculate booking costs, and handle event listings. These functions set the groundwork for adding interactivity and real-time room management to the site.

🔹 Room Class & Data Model
The Room class is used to define the structure of a room object, including properties such as room number, number of beds, baths, pricing, and vacancy status. A sample array avaliableRooms holds multiple instances of Room to simulate a basic database of hotel inventory.

🔹 Key Functions and Their Roles
roomAvaliable(roomNumber)
Checks if a room is vacant based on the room number. In the future, this function can be connected to a booking form to show real-time availability before allowing a user to proceed with a reservation.

totalCost(days, roomNumber)
Calculates the total price for a stay based on the number of nights and the room’s nightly rate. This will be useful for dynamically displaying the total cost in the checkout or reservation section after the user selects their stay duration.

getEvents()
Returns a list of current hotel events as a single string. This can power a dynamic “Events” or “What’s Happening” section on the website without hardcoding content into the HTML.

addEvent(eventName)
Adds a new event to the events array. This could eventually tie into an admin panel where hotel staff can post new events that immediately show up on the front-end.

addRoom(...)
Adds a new room object to the inventory, allowing dynamic expansion of room listings. This will be valuable for future implementations of an admin dashboard or content management system where rooms can be added via form submission.

🔮 Future Enhancements with JavaScript
The existing JavaScript logic is designed to be extensible. Here are several ways these functions can be incorporated:

Hook into form submissions to calculate cost and validate room availability before booking.

Use AJAX or Fetch API to dynamically render available rooms on the page without reloading.

Create an event management UI where new events can be added or updated live.

Develop a booking system that marks rooms as unavailable once reserved, using the vacant property.

Integrate with a local storage or backend API to persist room and event data.