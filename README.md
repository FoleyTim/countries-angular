# countries-angular
Angular Web app that displays info about countries and regions. Uses typescript, observables and NGRX.

My previous experience with Angular:
Most of my experience in developing UI has been in React native/JS so this was relatively unfamiliar territory for me. 
I have used Angular 5 about ~ 2 years ago but only breifly to develop an MVP Ionic app. This was my first time using NgRx and testing in Angular.

style guide:
https://angular.io/guide/styleguide

installation instructions:
git clone,
npm i,
ng serve


High level Description of how the application works:
On loading the web app you should see a dropdown where you will select a region: Asia or Europe.
Once a region has been selected a second dropdown will appear. Here you can select the country you want to view details for.
once you have selected a country the country information will appear in a table below.

note: I noticed that the brief said "The data should be displayed when the Country Load button is clicked." but I decided to display the data as soon as the country is selected, as it is generally good UX practise to reduce the number of required clicks if possible. 

Technical Description of how the application works:
When the user selects a region from the dropdown the countries API is called and an array of country data is retrieved. This array of country data is stored in the NgRx state and the name of each country is displayed in an additional dropdown that appears. 
When the user selects a country name from the country dropdown, the country data associated with that country name is stored in the NgRx state and displayed on a table that appears. 


Things I would like to extend later:
unit testing on app.component.ts (this would involve mocking the NgRx store)
add state for API failure/in progress
prettier CSS - maybe use a framework like bootstrap, use mixins, animations
add responsiveness for mobile/tablet
implement a middleware like NgRx effects 




