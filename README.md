# Simplified Stock Market
## Technical Stack :star2:

#### Libraries used
- Axios: used for making HTTP request
- Redux: used for state management
- Redux Saga: act as the middleware for dispatching actions
- styled-components: used for styling components
- js-cookie: used for cookie data management
- HighCharts: used for data visualization

## Architecture
The application follows a component-based architecture by which each component have its own folder and files(component file`, customHooks, styles, types and test files). Since it is a small project, I have also decided to just organize files of the same type into their respective folders (components, actions, reducers, sagas, constants and services). For bigger proects, I think modular approach is better, which all files related to component will be on the same folder as the component.

## Features :dancer:
- User Authentication and authorization using the given oAuth2 endpoint
- Refresh token if access token has expired
- Receives Websocket message and displays in chart
- Price comparison with user input and ticker data

## Implementation
There are several challenges I have faced during implementation, including deciding of the proper way to display the data received from the WS, specially that I am not very familiar with the terms in stock market. This challenge were address by doing research. 

## Decision-Making :thinking:
Key decisions made during the project included choosing HighCharts library for stock data visualization, I have chosen this because of its highstock library that is designed specifically for displaying stock charts. I also have decided to implement WS connection to Ticker api in my BE service, this is because of the requirement to persist the data, it is also better for separating the processing of data from FE. Due to this abstraction, FE does not need to know about the third party api and just listen to the BE service which will send the processed data. We can then change the source of the ticker data without changing FE. The other libraries I have chosen is due to my familiarity to those.

## Installation :gear:
1. Clone this repository
2. Install dependencies with `npm install`
3. Start the application with `npm start`

Make sure to start Ticker BE application server to start receiving Websocket messages

### 
## Things I would like to implement if I had more time :mag:
- UI: would write Theme palette for dark mode, I think stock charts often have a dark mode appearance, so would be better to apply that style
- Add option in FE to 