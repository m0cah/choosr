# What this app was
Originally an app for the FA 2024 Semester at Virginia Tech. Picking it up as a hobby project to investigate real-time communication to several users via WebSocket API, and connecting users via "Rooms".

2024 version of the project can be located in the archived-project branch.

# What this app will be
To no surprise, the core idea of this app will remain constant: Help friends - or relationships - decide what to do. However, the architecture, and the way various operations are done will change drastically. The reason for this, is because CRA (Create React App) was deprecated in Feb 2025. React's maintainers suggest using a modern framework such as Next.js in collaboration with the React library, which is what this project will do.

The app previously supported 1 user, if that. This app was never deployed to production, only working on localhost. Any engineer knows that once moved to prod, the build will likely crash. This app will be an online web application mimicing the "Rooms" architecture that Kahoot, a popular classroom question-and-answer collaboration game, supports. A host will be able to make a room, and several other users will be able to join that room.

For the tech stack, we will be using the nextjs framework, which allows us to integrate the API directly into the app without having to create a separate program. To store game room information, there will be a data structure that keeps track of this information. For now, the data structure's state will remain in-memory on the server. In the future, to scale we will probably end up using something fancy like Redis which allows us to retain that in-memory storage for fast reads/writes, but also incremental writing to disk to maintain persistance. Connections and real-time communication will be handled by WebSockets.Testing will most likely be handled by Jest, and probably some other testing framework. This app will be hosted in Azure since it is free.

# Development Schedule

Since it is just me developing this application, there is no real timeline to have it finished, nor specific sprints to accomplish certain goals. Having a full time job along with grad school is taking up most of my time. Though, if I do have free time (and am not on-call) I will work on this project. If for some reason you are tracking this project, and want to work on a ticket, just submit a PR and I'll review it :) Keep in mind, I am too lazy to set up branch protection for this small project, so pls dont delete everything <3

Also - I don't know tailwind well, but am forcing myself to use it this project. Apologies for styling.

# Steps to Run Locally
tbd

