# Slido Clone Web App

Slido is a popular application used to manage Q&A sessione and Polls during live events.
The goal of the project is to recreate the core functionalities of creating new sessions, collect and present questions.

## Level 1

An administrator role should have the ability to create a new event.
Each event should have:
  - a unique ID (user defined or randomly generated)
  - a scheduled start and end date
  - a title
  - a description

All details should be validated before being saved.

The administator should have a list of all created events, seeing which are in progress, ended, or starting in the future.

## Level 2

After the creation, the event should be accessible from a dedicated page, using the unique ID as a URL parameter.
The event should be accessible from any new browser session, without authentication.
When joining to the event, each user should insert his own name and surname.
He could then see a list of Questions written by all the other users, and insert a new one.
The user could even vote any each other's question.
The event page should be accessible both via Desktop or Mobile.

## Level 3

Any new joined user should update a realtime list of participants, only visible by the administrator.
For each one of the events, the administrator would see the list of questions, sorted by number of votes. 
By clicking on a question, that one would be highlighted, with the ability to hide it from the list.

## Bonus Activities
- Use Tailwind as UI Kit
- Create a Components library using Storybook
- Add Darkmode ability (using Sass or CSS Variables)

## Resources

[Strapi](https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html)
