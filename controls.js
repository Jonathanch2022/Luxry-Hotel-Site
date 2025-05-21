// Define a Room class to represent a hotel room
class Room {
    // Constructor initializes properties for each room
    constructor(Rmnumber, beds, baths, rooms, description, price, vacant) {
        this.roomNumber = Rmnumber;   // Unique identifier for the room
        this.beds = beds;             // Number of beds in the room
        this.baths = baths;           // Number of bathrooms
        this.rooms = rooms;           // Number of separate rooms (e.g., living/bedrooms)
        this.description = description; // Description of the room
        this.price = price;           // Price per night
        this.vacant = vacant;         // Availability status: true if available, false if occupied
    }

    // Declaring class properties 
    roomNumber = 0;
    beds = 0;
    baths = 0;
    rooms = 0;
    discription = "";
    price = 0;
    vacant = false;
}

// Array of Room objects representing current room inventory
let avaliableRooms = [
    new Room("A100", 3, 2, 2, "", 125, true),
    new Room("A101", 2, 1, 2, "", 120, false),
    new Room("A102", 1, 1, 2, "", 110, true),
    new Room("A103", 4, 2, 2, "", 200, false),
    new Room("A104", 2, 2, 2, "", 135, false)
];

// Array to hold scheduled hotel events
let events = ["Free Movie night", "Hotel Tour", "Staff Introduction"];

// Function to check if a specific room is available
function roomAvaliable(room) {
    for (let t in avaliableRooms) {
        if (room == avaliableRooms[t].roomNumber) {
            return avaliableRooms[t].vacant;
        }
    }
    return false; // Return false if room number not found
}

// Function to calculate the total cost of a stay
function totalCost(days, rm) {
    for (let t in avaliableRooms) {
        if (avaliableRooms[t].roomNumber == rm) {
            return days * avaliableRooms[t].price;
        }
    }
    return 0; // Return 0 if room not found
}

// Function to return all events as a single string separated by "|"
function getEvents() {
    return events.join(" | ");
}

// Function to add a new event to the event list
function addEvent(evt) {
    events.push(evt);
}

// Function to add a new room to the inventory
function addRoom(Rmnumber, beds, baths, rooms, description, price, vacant) {
    // Basic input validation: ensure values are valid before adding
    if (Rmnumber != null & beds > 0 & baths > 0 & rooms > 0 & price > 0) {
        avaliableRooms.push(new Room(Rmnumber, beds, baths, rooms, description, price, vacant));
    }
}
