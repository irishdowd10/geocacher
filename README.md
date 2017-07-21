# Geocacher Location Finder

#### 07.21.17

#### **By John Dowd**

## Description

This is a web application that will allow user to: 1 -  enter a longitude and latitude of a know geocache and receive the corresponding physical address of the location. 2 - enter a physical address and see the corresponding longitude and latitude coordinates.

|Behavior| Input (User Action/Selection) |Output|
|---|:---:|:---:|
|View longitude and latitude coordinates|"400 Sixth St, Portland, OR"| Latitude: "45.5349985",Longitude: "-122.4383958" |
|View physical address|Latitude: "45.5349985", Longitude: "-122.4383958"| "400 Sixth St, Portland, OR" |

## Setup/Installation Requirements

To download and run this project:
1. Clone this repository to your desktop: https://github.com/irishdowd10/geocacher.git
2. Run {$ npm install}.
3. Sign up for a api key at https://developers.google.com/maps/documentation/geocoding/start
4. Click _Get A Key_
5. Add app.app-keys.ts to app folder w/ the following code: export const apiKey = 'your api key'
6. ng serve to get http://localhost:4200/

## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact the contributor through Github.  Thanks!!

## Technologies Used

* Angular2
* TypeScript
* JSON
* HTML
* Bootstrap

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **John Dowd**
