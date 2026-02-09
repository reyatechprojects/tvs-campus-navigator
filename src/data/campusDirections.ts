export interface DirectionStep {
  instruction: string;
  direction: "straight" | "left" | "right" | "up" | "down" | "arrive";
  landmark?: string;
}

export interface Location {
  id: string;
  name: string;
  category: string;
  block?: string;
  floor?: string;
  walkingTime: string;
  steps: DirectionStep[];
  nearbyLandmarks: string[];
}

export const locations: Location[] = [
  // SHAVITHRI BHAI BLOCK - I Std
  {
    id: "i-a", name: "Class I-A", category: "Classroom", block: "Shavithri Bhai Block", floor: "First Floor",
    walkingTime: "3 min", nearbyLandmarks: ["Information Center", "Park"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Turn right past the Information Center", direction: "right", landmark: "Information Center" },
      { instruction: "Walk past the Park on your right", direction: "straight", landmark: "Park" },
      { instruction: "Enter Shavithri Bhai Block", direction: "straight" },
      { instruction: "Take stairs to First Floor", direction: "up" },
      { instruction: "Class I-A is on the First Floor", direction: "arrive" },
    ],
  },
  {
    id: "i-b", name: "Class I-B", category: "Classroom", block: "Shavithri Bhai Block", floor: "First Floor",
    walkingTime: "3 min", nearbyLandmarks: ["Information Center", "Park"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Turn right past the Information Center", direction: "right", landmark: "Information Center" },
      { instruction: "Walk past the Park on your right", direction: "straight", landmark: "Park" },
      { instruction: "Enter Shavithri Bhai Block", direction: "straight" },
      { instruction: "Take stairs to First Floor", direction: "up" },
      { instruction: "Class I-B is on the First Floor", direction: "arrive" },
    ],
  },
  {
    id: "i-c", name: "Class I-C", category: "Classroom", block: "Shavithri Bhai Block", floor: "First Floor",
    walkingTime: "3 min", nearbyLandmarks: ["Information Center", "Park"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Turn right past the Information Center", direction: "right" },
      { instruction: "Enter Shavithri Bhai Block", direction: "straight" },
      { instruction: "Take stairs to First Floor", direction: "up" },
      { instruction: "Class I-C is on the First Floor", direction: "arrive" },
    ],
  },
  {
    id: "i-d", name: "Class I-D", category: "Classroom", block: "Shavithri Bhai Block", floor: "First Floor",
    walkingTime: "4 min", nearbyLandmarks: ["Primary VP Cabin"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Turn right past the Information Center", direction: "right" },
      { instruction: "Enter Shavithri Bhai Block", direction: "straight" },
      { instruction: "Take stairs to First Floor", direction: "up" },
      { instruction: "Class I-D is near the stairs (next to Primary VP Cabin)", direction: "arrive", landmark: "Primary VP Cabin" },
    ],
  },
  // II Std
  {
    id: "ii-a", name: "Class II-A", category: "Classroom", block: "Shavithri Bhai Block", floor: "Second Floor",
    walkingTime: "4 min", nearbyLandmarks: ["Information Center"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Turn right past the Information Center", direction: "right" },
      { instruction: "Enter Shavithri Bhai Block", direction: "straight" },
      { instruction: "Take stairs to Second Floor", direction: "up" },
      { instruction: "Class II-A is on the Second Floor", direction: "arrive" },
    ],
  },
  {
    id: "ii-b", name: "Class II-B", category: "Classroom", block: "Shavithri Bhai Block", floor: "Second Floor",
    walkingTime: "4 min", nearbyLandmarks: ["Information Center"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Turn right past the Information Center", direction: "right" },
      { instruction: "Enter Shavithri Bhai Block", direction: "straight" },
      { instruction: "Take stairs to Second Floor", direction: "up" },
      { instruction: "Class II-B is on the Second Floor", direction: "arrive" },
    ],
  },
  {
    id: "ii-c", name: "Class II-C", category: "Classroom", block: "Shavithri Bhai Block", floor: "Second Floor",
    walkingTime: "4 min", nearbyLandmarks: [],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Turn right past the Information Center", direction: "right" },
      { instruction: "Enter Shavithri Bhai Block", direction: "straight" },
      { instruction: "Take stairs to Second Floor", direction: "up" },
      { instruction: "Class II-C is on the Second Floor", direction: "arrive" },
    ],
  },
  {
    id: "ii-d", name: "Class II-D", category: "Classroom", block: "Shavithri Bhai Block", floor: "Second Floor",
    walkingTime: "4 min", nearbyLandmarks: [],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Turn right past the Information Center", direction: "right" },
      { instruction: "Enter Shavithri Bhai Block", direction: "straight" },
      { instruction: "Take stairs to Second Floor", direction: "up" },
      { instruction: "Class II-D is on the Second Floor", direction: "arrive" },
    ],
  },
  // ACTIVITY BLOCK
  {
    id: "craft-room", name: "Craft Room", category: "Activity Room", block: "Activity Block", floor: "Ground Floor",
    walkingTime: "5 min", nearbyLandmarks: ["Rolling Room", "Taekwondo Room"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight past the Washroom", direction: "straight", landmark: "Washroom" },
      { instruction: "Continue to the Activity Block", direction: "straight" },
      { instruction: "Craft Room is the 1st room on Ground Floor", direction: "arrive" },
    ],
  },
  {
    id: "rolling-room", name: "Rolling Room", category: "Activity Room", block: "Activity Block", floor: "Ground Floor",
    walkingTime: "5 min", nearbyLandmarks: ["Craft Room"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight to the Activity Block", direction: "straight" },
      { instruction: "Rolling Room is the 2nd room on Ground Floor", direction: "arrive" },
    ],
  },
  {
    id: "taekwondo-room", name: "Taekwondo Room", category: "Activity Room", block: "Activity Block", floor: "Ground Floor",
    walkingTime: "5 min", nearbyLandmarks: ["Music Room", "Washroom"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight to the Activity Block", direction: "straight" },
      { instruction: "Taekwondo Room is the 3rd room on Ground Floor", direction: "arrive" },
    ],
  },
  {
    id: "music-room", name: "Music Room", category: "Activity Room", block: "Activity Block", floor: "Ground Floor",
    walkingTime: "5 min", nearbyLandmarks: ["Dance Room"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight to the Activity Block", direction: "straight" },
      { instruction: "Music Room is the 4th room on Ground Floor", direction: "arrive" },
    ],
  },
  {
    id: "dance-room", name: "Dance Room", category: "Activity Room", block: "Activity Block", floor: "Ground Floor",
    walkingTime: "6 min", nearbyLandmarks: ["Music Room"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight to the Activity Block", direction: "straight" },
      { instruction: "Dance Room is the 5th room on Ground Floor", direction: "arrive" },
    ],
  },
  {
    id: "yoga-room", name: "Yoga Room", category: "Activity Room", block: "Activity Block", floor: "Second Floor",
    walkingTime: "6 min", nearbyLandmarks: ["Drama Room"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the Activity Block", direction: "straight" },
      { instruction: "Take stairs to Second Floor", direction: "up" },
      { instruction: "Yoga Room is on the Second Floor", direction: "arrive" },
    ],
  },
  {
    id: "drama-room", name: "Drama Room", category: "Activity Room", block: "Activity Block", floor: "Second Floor",
    walkingTime: "6 min", nearbyLandmarks: ["Yoga Room", "Mridangam Room"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the Activity Block", direction: "straight" },
      { instruction: "Take stairs to Second Floor", direction: "up" },
      { instruction: "Drama Room is on the Second Floor", direction: "arrive" },
    ],
  },
  {
    id: "mridangam-room", name: "Mridangam Room", category: "Activity Room", block: "Activity Block", floor: "Second Floor",
    walkingTime: "7 min", nearbyLandmarks: ["Clay Modelling Room"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the Activity Block", direction: "straight" },
      { instruction: "Take stairs to Second Floor", direction: "up" },
      { instruction: "Mridangam Room is on the Second Floor", direction: "arrive" },
    ],
  },
  {
    id: "clay-modelling", name: "Clay Modelling Room", category: "Activity Room", block: "Activity Block", floor: "Second Floor",
    walkingTime: "7 min", nearbyLandmarks: ["Drawing Room"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the Activity Block", direction: "straight" },
      { instruction: "Take stairs to Second Floor", direction: "up" },
      { instruction: "Clay Modelling Room is on the Second Floor", direction: "arrive" },
    ],
  },
  {
    id: "drawing-room", name: "Drawing Room", category: "Activity Room", block: "Activity Block", floor: "Second Floor",
    walkingTime: "7 min", nearbyLandmarks: ["Clay Modelling Room"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the Activity Block", direction: "straight" },
      { instruction: "Take stairs to Second Floor", direction: "up" },
      { instruction: "Drawing Room is on the Second Floor", direction: "arrive" },
    ],
  },
  // SCIENCE LABS
  {
    id: "physics-lab", name: "Physics Lab", category: "Lab", floor: "Ground Floor",
    walkingTime: "6 min", nearbyLandmarks: ["Chemistry Lab"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight through the corridor", direction: "straight" },
      { instruction: "Continue past the Activity Block", direction: "straight" },
      { instruction: "Go straight to reach the Physics Lab", direction: "arrive" },
    ],
  },
  {
    id: "chemistry-lab", name: "Chemistry Lab", category: "Lab", floor: "Ground Floor",
    walkingTime: "6 min", nearbyLandmarks: ["Physics Lab", "Biology Lab"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight through the corridor", direction: "straight" },
      { instruction: "Continue past the Activity Block", direction: "straight" },
      { instruction: "Turn left to reach the Chemistry Lab", direction: "left" },
      { instruction: "Chemistry Lab is on your left", direction: "arrive" },
    ],
  },
  {
    id: "biology-lab", name: "Biology Lab", category: "Lab", floor: "First Floor",
    walkingTime: "7 min", nearbyLandmarks: ["Chemistry Lab", "Computer Lab"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight to the Science Labs area", direction: "straight" },
      { instruction: "Turn left toward the Chemistry Lab", direction: "left" },
      { instruction: "Take the staircase near Chemistry Lab upstairs", direction: "up" },
      { instruction: "Biology Lab is on the First Floor", direction: "arrive" },
    ],
  },
  {
    id: "computer-lab", name: "Computer Lab", category: "Lab", floor: "First Floor",
    walkingTime: "7 min", nearbyLandmarks: ["Biology Lab"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight to the Science Labs area", direction: "straight" },
      { instruction: "Take the staircase near Chemistry Lab upstairs", direction: "up" },
      { instruction: "Computer Lab is on the First Floor, near Biology Lab", direction: "arrive" },
    ],
  },
  // EXAM HALL & CANTEEN
  {
    id: "exam-hall", name: "Exam Hall", category: "Facility", floor: "Upper Level",
    walkingTime: "7 min", nearbyLandmarks: ["Canteen"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight past the Activity Block", direction: "straight" },
      { instruction: "Go upstairs", direction: "up" },
      { instruction: "Exam Hall is at the upper level", direction: "arrive" },
    ],
  },
  {
    id: "canteen", name: "Canteen", category: "Facility", floor: "Ground Floor",
    walkingTime: "6 min", nearbyLandmarks: ["Drinking Water", "Seating Area", "Library"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight past the Activity Block", direction: "straight" },
      { instruction: "Go down from the Activity Block area", direction: "down" },
      { instruction: "Canteen is ahead", direction: "arrive" },
    ],
  },
  {
    id: "library", name: "Library", category: "Facility",
    walkingTime: "7 min", nearbyLandmarks: ["Canteen", "Seating Area"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight past the Activity Block", direction: "straight" },
      { instruction: "Go down to the Canteen area", direction: "down" },
      { instruction: "Walk straight past the Seating Area", direction: "straight", landmark: "Seating Area" },
      { instruction: "Library is straight ahead", direction: "arrive" },
    ],
  },
  {
    id: "drinking-water", name: "Drinking Water Station", category: "Facility",
    walkingTime: "6 min", nearbyLandmarks: ["Canteen"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the Canteen area", direction: "straight" },
      { instruction: "Turn right from the Canteen", direction: "right" },
      { instruction: "Drinking Water station is on your right", direction: "arrive" },
    ],
  },
  // ENTRANCE AREA
  {
    id: "information-center", name: "Information Center", category: "Office",
    walkingTime: "1 min", nearbyLandmarks: ["Security Office", "Main Entrance"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Information Center is immediately on your right", direction: "right" },
      { instruction: "You have arrived at the Information Center", direction: "arrive" },
    ],
  },
  {
    id: "security-office", name: "Security Office", category: "Office",
    walkingTime: "1 min", nearbyLandmarks: ["Information Center", "Main Entrance"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Security Office is immediately on your left", direction: "left" },
      { instruction: "You have arrived at the Security Office", direction: "arrive" },
    ],
  },
  {
    id: "washroom-entrance", name: "Washroom (Near Entrance)", category: "Facility",
    walkingTime: "2 min", nearbyLandmarks: ["Main Entrance"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk straight ahead", direction: "straight" },
      { instruction: "Washroom is straight ahead", direction: "arrive" },
    ],
  },
  // PRIMARY VP CABIN
  {
    id: "primary-vp-cabin", name: "Primary VP Cabin", category: "Office", block: "Shavithri Bhai Block", floor: "First Floor",
    walkingTime: "4 min", nearbyLandmarks: ["Class I-D"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Turn right past the Information Center", direction: "right" },
      { instruction: "Enter Shavithri Bhai Block", direction: "straight" },
      { instruction: "Take stairs to First Floor", direction: "up" },
      { instruction: "VP Cabin is near Class I-D stairs", direction: "arrive" },
    ],
  },
  // CORRIDORS & WINGS
  {
    id: "conference-hall", name: "Conference Hall", category: "Facility", block: "South Wing", floor: "Ground Floor",
    walkingTime: "5 min", nearbyLandmarks: ["Creche"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the West Wing Main Staircase", direction: "straight" },
      { instruction: "Go to the South Wing Ground Floor", direction: "left" },
      { instruction: "Conference Hall is on the South Wing Ground Floor", direction: "arrive" },
    ],
  },
  {
    id: "creche", name: "Creche (Class 4 & 5)", category: "Classroom", block: "South Wing", floor: "Ground Floor",
    walkingTime: "5 min", nearbyLandmarks: ["Conference Hall"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the South Wing", direction: "straight" },
      { instruction: "Creche is on the South Wing Ground Floor", direction: "arrive" },
    ],
  },
  // WEST WING
  {
    id: "hall-a", name: "Hall A", category: "Facility", block: "West Wing", floor: "Ground Floor",
    walkingTime: "5 min", nearbyLandmarks: ["Hall B", "Library"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the West Wing", direction: "straight" },
      { instruction: "Turn left at the West Wing corridor", direction: "left" },
      { instruction: "Hall A is on your left", direction: "arrive" },
    ],
  },
  {
    id: "hall-b", name: "Hall B", category: "Facility", block: "West Wing", floor: "Ground Floor",
    walkingTime: "5 min", nearbyLandmarks: ["Hall A"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the West Wing", direction: "straight" },
      { instruction: "Turn left at the West Wing corridor", direction: "left" },
      { instruction: "Hall B is next to Hall A", direction: "arrive" },
    ],
  },
  {
    id: "erp-av-room", name: "ERP AV Room", category: "Facility", block: "West Wing", floor: "First Floor",
    walkingTime: "6 min", nearbyLandmarks: ["11th Std Classes"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the West Wing", direction: "straight" },
      { instruction: "Take Lab Staircase to First Floor", direction: "up" },
      { instruction: "ERP AV Room is on the First Floor", direction: "arrive" },
    ],
  },
  // NORTH WING
  {
    id: "class-3", name: "Class 3 (III Std)", category: "Classroom", block: "North Wing",
    walkingTime: "5 min", nearbyLandmarks: ["9th Std", "10th Std"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the North Wing", direction: "straight" },
      { instruction: "Class 3 is in the North Wing", direction: "arrive" },
    ],
  },
  {
    id: "class-9", name: "Class 9 (IX Std)", category: "Classroom", block: "North Wing",
    walkingTime: "5 min", nearbyLandmarks: ["3rd Std", "10th Std"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the North Wing", direction: "straight" },
      { instruction: "Class 9 is in the North Wing", direction: "arrive" },
    ],
  },
  {
    id: "class-10", name: "Class 10 (X Std)", category: "Classroom", block: "North Wing",
    walkingTime: "5 min", nearbyLandmarks: ["3rd Std", "9th Std"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the North Wing", direction: "straight" },
      { instruction: "Class 10 is in the North Wing", direction: "arrive" },
    ],
  },
  // NEW BUILDING
  {
    id: "class-5", name: "Class 5 (V Std)", category: "Classroom", block: "New Building", floor: "Ground Floor",
    walkingTime: "6 min", nearbyLandmarks: ["7th Std", "8th Std"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the New Building", direction: "straight" },
      { instruction: "Class 5 is on the Ground Floor", direction: "arrive" },
    ],
  },
  {
    id: "class-7", name: "Class 7 (VII Std)", category: "Classroom", block: "New Building", floor: "Ground Floor",
    walkingTime: "6 min", nearbyLandmarks: ["5th Std", "8th Std"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the New Building", direction: "straight" },
      { instruction: "Class 7 is on the Ground Floor", direction: "arrive" },
    ],
  },
  {
    id: "class-8", name: "Class 8 (VIII Std)", category: "Classroom", block: "New Building", floor: "Ground Floor",
    walkingTime: "6 min", nearbyLandmarks: ["5th Std", "7th Std"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the New Building", direction: "straight" },
      { instruction: "Class 8 is on the Ground Floor", direction: "arrive" },
    ],
  },
  {
    id: "class-6", name: "Class 6 (VI Std)", category: "Classroom", block: "New Building", floor: "First Floor",
    walkingTime: "7 min", nearbyLandmarks: ["11th Std"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the New Building", direction: "straight" },
      { instruction: "Take stairs to First Floor", direction: "up" },
      { instruction: "Class 6 is on the First Floor", direction: "arrive" },
    ],
  },
  {
    id: "class-11", name: "Class 11 (XI Std)", category: "Classroom", block: "New Building", floor: "Second Floor",
    walkingTime: "8 min", nearbyLandmarks: ["12th Std"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the New Building", direction: "straight" },
      { instruction: "Take stairs to Second Floor", direction: "up" },
      { instruction: "Class 11 sections are on the Second Floor", direction: "arrive" },
    ],
  },
  {
    id: "class-12", name: "Class 12 (XII Std)", category: "Classroom", block: "West Wing", floor: "Second Floor",
    walkingTime: "7 min", nearbyLandmarks: ["11th Std"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the West Wing", direction: "straight" },
      { instruction: "Take Lab Staircase to Second Floor", direction: "up" },
      { instruction: "Class 12 is on the Second Floor", direction: "arrive" },
    ],
  },
  // GYM & ADMIN
  {
    id: "gym", name: "Gym / Stage", category: "Facility",
    walkingTime: "5 min", nearbyLandmarks: ["Main Staircase"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the Main Staircase (West Wing)", direction: "straight" },
      { instruction: "Turn left from the Main Staircase", direction: "left" },
      { instruction: "Gym / Stage is ahead", direction: "arrive" },
    ],
  },
  {
    id: "counsellor-room", name: "Counsellor Room", category: "Office",
    walkingTime: "6 min", nearbyLandmarks: ["Craft Hall"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the Craft Hall area", direction: "straight" },
      { instruction: "Counsellor Room is to the left of Craft Hall", direction: "left" },
      { instruction: "You have arrived at the Counsellor Room", direction: "arrive" },
    ],
  },
  {
    id: "staff-room", name: "Staff Room", category: "Office", floor: "Middle Level",
    walkingTime: "6 min", nearbyLandmarks: ["Computer Room"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head towards the admin area", direction: "straight" },
      { instruction: "Go to the upper cabin – Middle Level", direction: "up" },
      { instruction: "Staff Room is at the Middle Level", direction: "arrive" },
    ],
  },
  {
    id: "exam-committee", name: "Exam Committee Room", category: "Office", floor: "First Floor",
    walkingTime: "6 min", nearbyLandmarks: ["Creya Classroom"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the admin area", direction: "straight" },
      { instruction: "Take stairs to First Floor", direction: "up" },
      { instruction: "Exam Committee Room is on the First Floor", direction: "arrive" },
    ],
  },
  {
    id: "creya-classroom", name: "Creya Classroom", category: "Classroom", floor: "First Floor",
    walkingTime: "6 min", nearbyLandmarks: ["Exam Committee Room", "Computer Room"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Head to the admin area", direction: "straight" },
      { instruction: "Take stairs to First Floor", direction: "up" },
      { instruction: "Creya Classroom is on the First Floor", direction: "arrive" },
    ],
  },
  {
    id: "pt-room", name: "PT Room", category: "Facility",
    walkingTime: "8 min", nearbyLandmarks: ["Gate 4", "Canteen"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Walk to the Canteen area", direction: "straight" },
      { instruction: "From Canteen, head towards Gate 4", direction: "straight" },
      { instruction: "PT Room is near Gate 4", direction: "arrive" },
    ],
  },
  {
    id: "park", name: "Park", category: "Facility",
    walkingTime: "2 min", nearbyLandmarks: ["Shavithri Bhai Block"],
    steps: [
      { instruction: "Enter through Main Entrance – Gate No 2", direction: "straight" },
      { instruction: "Turn right past the Information Center", direction: "right" },
      { instruction: "Park is on your right side", direction: "arrive" },
    ],
  },
];

export const categories = [...new Set(locations.map((l) => l.category))];
