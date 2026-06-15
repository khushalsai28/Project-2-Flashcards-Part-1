# Web Development Project 2 - Flashcard Study App

Submitted by: Khushal Sai Kolagani

This web app is a flashcard study tool that displays one card at a time and lets users flip the card to reveal the answer. Users can advance through cards in randomized order and learn new facts with a simple study experience.

Time spent: 9 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed
  - [x] A short description of the card set is displayed
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards have different visual styles such as color based on their category
  - [x] Each card shows a category label and uses a colored border to indicate the category

The following **additional** features are implemented:

- [x] Responsive layout for smaller screens
- [x] Styled flip-card look and hover interaction

## Running locally

Install dependencies and start the dev server:

```
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Notes

I chose a geography-themed flashcard set with capital cities. The main challenge was structuring state so the card flips and the random next card resets the flip state correctly.

## License

    Copyright 2026 Khushal Sai Kolagani

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
