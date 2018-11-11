# Project Overview

## Project Links
[Project Repo](https://git.generalassemb.ly/agorfine/Project3-Instagram)

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Due Date | Deliverable | Status
|:---:|---|---|:---:|
|Day 1| Nov 5 | Prject Worksheet, Project Approval, Wireframes, Priority Matrix, Determine Functional Components | Complete
|Day 2| Nov 6 | Basic Functionality: Database, Login to newsfeed, Nav, Footer | Complete
|Day 3| Nov 7 | Newfeed functionality: Render photos, Add photos, Comment, Like | In Progress
|Day 4| Nov 8 | Explore Page, Profile Page | In progress
|Day 5| Nov 9 | CSS, Problem Sovling, Possibly Post-MVP  | Incomplete
|Day 6| Nov 12 | Final Touches, Presentation Prep | Incomplete
|Day 7| Nov 13 | Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

Finsta is a cover of Instagram.

https://instagram.com/

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

[Wireframe picture](https://imgur.com/U6npG6W "Wireframe")

[Wireframe made in Sketch](https://imgur.com/bdl9r7e "Wireframe")


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

[Priority Matrix](https://imgur.com/IuG6Ont "Priority Matrix")


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Create user account
- Login to user account
- Newsfeed
- Photo likes counter
- Profile page
- Post photo
- Edit caption
- Comment on photos


#### PostMVP 

- Profile page (photo, bio)
- Follow users
- Associate user with a like
- Hashtags
- Messaging
- Login with facebook
- Language translator


## Architectural Design

Define the the React components and the architectural design of your app.

[React Architectural Design](https://res.cloudinary.com/dvjtpejbw/image/upload/v1541690969/IMG_2973.jpg)

[ERD](https://imgur.com/a/fLTtbNE)

### Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | --- |  
| App | This will render the UI | 
| Switcher | will handle all the routes | 
| Log-in Page | log in for existing users | 
| Create Account | create new user account |
| Newsfeed | scrolling list of photos | 
| Nav | includes two icons | 
| Footer | add photo button, profile button, newsfeed button | 
| Add photo form | Add a photo and give it a caption | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 3hrs | 2hrs | 2hrs |
| Switcher | H | 3hrs| 1hrs | 1hrs |
| Create User Account | H | 7hrs | 3hrs | 3hrs |
| Login Page/ Authentication | H | 5hrs | 6hrs | 6hrs |
| Database | H | 5hrs| 3hrs | 3hrs |
| Linking Components to DB | H | 10hrs| 8hrs | 8hrs |
| Newsfeed | H | 4hrs | 5hrs | 5hrs |
| Navigation | H | 2hrs | 1hrs | 2hrs |
| Footer | H | 2hrs | 6hrs | 6hrs |
| Add Photo | H | 3hrs | 2hrs | 8hrs |
| Profile Page | L | 5hrs | 2.5hrs | 5hrs |
| Messages | L | 10hrs | 0hrs | hrs |
| Comments | L | 6hrs | 5hrs | 5hrs |
| Git Project Workflow | H | 3hrs | 2.5hrs | 2.5hrs |
| Wireframing| H | 5hrs | 5hrs | 5hrs |
| CSS| H | ∞hrs | 5hrs | 8hrs |
| Project Management| H | 2hrs | 2hrs | 2hrs |
| Total | H | 68hrs| 52.5hrs | 71.5 hrs |


## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | --- |  
| compondentDidMount | Pulling data when page renders | 
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

[TBD Messenger Library](). If we decide to do a messenger feature
[Rea
 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

 [TBD Error 1]()

 [TBD Error 2]()

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
