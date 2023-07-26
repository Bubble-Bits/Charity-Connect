# Charity Connect Mobile Application

Full Stack Mobile Application utilizing the following tech stack:
Charity Connect is a mobile-first web application that allows peer to peer interactions to list items up for donation and claim features to reduce waste.

# Tech Stack

![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

## Table of Contents

1. [Main Product Widgets](#Main-Product-Widgets)
2. [Additional Components](#Additional-Components)
3. [Installation](#Installation)
4. [Setup](#Setup)
5. [Team Members](#Team-members)
6. [License](#License)

<img src="https://github.com/Bubble-Bits/Charity-Connect/assets/113706094/4ec9956c-7df3-4553-b363-c0f78b974b57" width="150" height="300" alt="image">    <img src="https://github.com/Bubble-Bits/Charity-Connect/assets/113706094/e0bfae40-debd-4dc4-91f8-268c33474d06" width="150" height="300" alt="image">    <img src="https://github.com/Bubble-Bits/Charity-Connect/assets/113706094/c2a7d297-0dc5-4ca4-baec-0ae232f3e16a" width="150" height="300" alt="image"> 
<img src="https://github.com/Bubble-Bits/Charity-Connect/assets/113706094/96a1fd92-2d30-4154-bf15-e5544dbcb6c5" width="150" height="300" alt="item-page">



## Main Product Widgets

### User Signup and Login
- 

### Home Page
-

### Donate and Claim
-

### Item Page
- The Item Page breaks down the donation description from its name, claim status, claim capabilities, description, donor profile, messaging capabilities and location through a google map api.

  Features
    - Displays all information created by the donor
    - Allows users to directly message the donor through another messaging component
    - Shows approximate location of the item through Google Maps API
    - Claim item that will notify the donor and update the profiles of the user
    - Allow users profile to be clicked and analyzed

### Map
- The Map page first asks the user permission for their current location. If not, it'll default to a preset location. If prompted with the user's location, it'll provide the user with the nearest items for up for donation within the map's view through Google Maps API.
  - There is a search bar located on top of the map if the user would like to navigate to another location.
  - The search bar converts the address input into a longitude & latitude via Open-Cage API
  - The information is then passed to the centerpoint of the center element of the Google Map API to reposition. 
  - Each item has an onhover show the item's name and image as well as onclick, would lead to that specific item's page
    
### User Profile
-

### Chat
- The Chat Component is a feature of the Charity Connect application that allows users to connect with each other and communicate via chat messages. It enables users coordinate thier donation process or inquire about potential pickups. 

  Features
    - User-friendly interface for seamless communication
    - Chat history with timestamps
    - Sending and receiving text messages
    - Sending and displaying images
    - Creating new chat conversations

## Additional Components

### Navigation Bar
- 

## Installation

Use the package manager [npm](https://docs.npmjs.com/) to install necessary dependencies.

```bash
npm install
```

## Setup

Repository requires the following environment variables:
Google API token to _____.
Cloudingary API token to ______.

```bash
DATABASE_URL = "INSERT MONGO ATLAS"
NEXT_PUBLIC_GEOLOCATION="INSERT KEY HERE"
NEXT_PUBLIC_GOOGLEAPI="INSERT GOOGLE KEY HERE"
NEXT_PUBLIC_CLD_CLOUD="INSERT CLOUDINARY ENV HERE"
NEXT_PUBLIC_CLD_API="INSERT CLOUDINARY SECRET KEY HERE"
NEXT_PUBLIC_AUTOCOMP="INSERT GOOGLE PLACE API KEY HERE"
```
## Team Members
#### [Anthony Bui](https://www.linkedin.com/in/bui-anthony/) | [Github](https://github.com/aboowee) - Product Manager - Donation / Claim
#### [Lovinson Dieujuste](https://github.com/Wisesofthemall) - Architect Owner - User Signup and Login
#### [Stanley Chu](https://www.linkedin.com/in/chustanleys/) | [Github](https://github.com/chustanley)- UI Owner - Item Page
#### [Alvin Ruan](https://www.linkedin.com/in/alvin-ruan) | [Github](https://github.com/CaskgarZero) - Software Engineer - Map
#### [Alvino Tam-Handiman] **** - Software Engineer - Home Page
#### [Nick Monteleone] ***** - Software Engineer - Chat
#### [Christina Hunter] ****** - Software Engineer - User Profile

## License

[ISC](https://opensource.org/license/isc-license-txt/)
