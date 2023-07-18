# CHARITY CONNECT MOBILE APPLICATION

Full Stack Mobile Application utilizing the following tech stack:
Charity Connect is a mobile-first web application that allows peer to peer interactions to list items up for donation and claim features to reduce waste.

## Table of Contents

1. [Main Product Widgets](#Main-Product-Widgets)
2. [Additional Components](#Additional-Components)
3. [Installation](#Installation)
4. [Setup](#Setup)
5. [Team Members](#Team-members)
6. [License](#License)

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
-

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
#### [Alvin Ruan] ***** - Software Engineer - Map
#### [Alvino Tam-Handiman] **** - Software Engineer - Home Page
#### [Nick Monteleone] ***** - Software Engineer - Chat
#### [Christina Hunter] ****** - Software Engineer - User Profile

## License

[ISC](https://opensource.org/license/isc-license-txt/)
