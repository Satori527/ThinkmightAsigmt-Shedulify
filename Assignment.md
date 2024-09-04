# Dynamic User Availability and Event Scheduling System



## Objective
Design and develop a web-based application that allows users to dynamically set their availability for specific days or the entire week. The admin should be able to view this availability and schedule sessions accordingly. Sessions can be one-on-one or involve multiple participants. The focus should be on creating a clean, intuitive, and user-friendly interface.

## Assignment Overview
1. Dynamic User Availability Capture
   - User Availability Input
   - Users should be able to log in and dynamically input their availability for specific days or the entire week. ( Login can be very basic, can use just email to have a record of users)
   - Availability should be captured for flexible intervals ( For example : 30 minutes, hourly, etc.), allowing users to specify start and end times. ( For example : User A is free on Monday from 10 AM to 3PM, and 7PM to 10PM, so he should be able to give this input)
   - Users should be able to add, update, or delete availability slots easily. This should support varying availability on different days (For example :   User A is available all day on Tuesday, only a few hours on Monday as above, and not available on Wednesday).
```javascript{

    "user": "user@gmail.com",

    "start": {

        "$date": "2024-08-30T03:30:00.000Z"

    },

    "end": {

        "$date": "2024-08-30T07:00:00.000Z"

    },

    "duration": 30,

    "scheduledSlots": [

    ]

}
```


## Visual Representation

- Provide a user-friendly visual representation of availability where user will be able to choose a range of time (e.g., calendar view or time-block grid also can have reference from sites out there like https://cal.com/ , https://calendly.com/ )
- It’s open to your visualisation, how you maintain good UI.
2. Admin Scheduling Interface:
- View User Availability
- The admin should have a comprehensive dashboard to view all users’ availability. (For example: If admin selects User A, he should be able to view his availability date wise).
Schedule Sessions
- Admins should be able to select the user's availability for a session and choose a time slot based on it. (For example: If admin selects User A, who is available on Monday from 10 AM to 3PM,  admin should be able to create a session of specified duration that’s 30 mins for reference. So slots can be : [10AM- 10.30AM], [11.15 AM - 11.45AM] but it is not possible to create slots like [10.15AM - 10.45 AM] ).
- The system should automatically check for availability conflicts and provide warnings or prevent scheduling if conflicts arise as mentioned in above example.
Session Type Selection

- Admins should be able to specify whether a session is one-on-one or involves multiple participants. (For example: In attendees array user can specify more than one people)
```javascript
{

    "user": "user@gmail.com",

    "start": {

        "$date": "2024-08-30T03:30:00.000Z"

    },

    "end": {

        "$date": "2024-08-30T04:00:00.000Z"

    },

    "duration": 30,

    "scheduledSlots": [

        {

            "start": {

                "$date": "2024-08-30T03:30:00.000Z"

            },

            "end": {

                "$date": "2024-08-30T04:00:00.000Z"

            },

            "attendees": [

{

            "name": "siri",

            "email": "siri@myparticipants.com",

                        }

]

        }

    ]

}
```


3. Session Management
   - Scheduled Sessions Overview
   - Both users and admins should have access to a view that displays all upcoming sessions they are involved in, including details like participants, time, etc.
   Modification and Notifications [BONUS POINT]:

   - Admins should have options to reschedule or cancel sessions, and affected participants should be notified of any changes.
   - Provide an option for users to set notification preferences (e.g., email, SMS).

4. Creative UI/UX Design:
   - Intuitive Design
   - The user interface should be intuitive, with a focus on ease of use and clarity. Encourage creative solutions to displaying and managing availability and scheduling.
   - Think about innovative ways to display availability and sessions to make it as straightforward as possible for both users and admins.
   - Ensure the application is accessible to all users and responsive across different devices (desktop, tablet, smartphone).
## Technical Requirements:
1. Frontend:
   - Use any modern front-end framework/library (React Typescript, NextJs ) to create a dynamic and responsive user interface.
   - Implement interactive components for time selection, availability management,  etc., as per the requirements.
2. Backend:
   - Develop a RESTful API or use GraphQL to handle backend logic. Node.js is recommended.
   - The backend should manage user authentication, availability data storage, session scheduling, etc., as per the requirements.
3. Database:
   - Use a NoSQL database (e.g., MongoDB) to store user data, availability, and session information.
   Submission Guidelines:

4. Documentation:
   - Provide a README file with setup and run instructions.
   - Include documentation on your system’s architecture, design choices, and any considerations made during development.
5. Source Code:
   - Submit the source code via a public GitHub repository.
   - Ensure code is clean, well-commented, and adheres to best practices.
6. Demo:
   - Provide a link to a live demo or a recorded video walkthrough demonstrating the application’s features and UI/UX. ( You can upload to youtube, or send us drive link of the video)

## Evaluation Criteria:
1. Functionality: How well does the application capture dynamic availability and enable scheduling?

2. UI/UX Design: Is the interface user-friendly, intuitive, and visually appealing?

3. Code Quality: Is the codebase well-organized, maintainable, and follows best practices?

4. Creativity: How innovative and effective are the solutions for availability management and session scheduling?

5. Documentation: Is the provided documentation thorough and easy to understand?


Note: This assignment is designed to test your ability to develop a full-stack application with a focus on dynamic functionality and a smooth user experience. Aim to balance creativity with usability and ensure your solution is robust and scalable.

Good luck!
