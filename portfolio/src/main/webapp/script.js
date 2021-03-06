// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ["\"We struggle so hard to hold on to these things that we know are gonna disappear eventually. And that’s really noble.\" — Lily Aldrin",
      "Favorite colors: blue and black",
      "Music genre: Alternative",
      "Favorite Cereal: Honey Bunches of Oats - with Almonds",
      "Sports: Soccer, Volleyball and Fomrula1"];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

// async function
async function displayText() {
    const serverResponse = await fetch('/hello');
    const serverTextResponse = await serverResponse.text();

    const helloworldContainer = document.getElementById('helloworld-container');
    helloworldContainer.innerText = serverTextResponse;
}