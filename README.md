# Let's Stay Inside

## Description
- Social media web app to post about online gathering events. You will be able to add Spotify playlists for said events. People can comment event posts, download the playlist, and add to the playlist.

## User Experience
- As a user, I want to be able to create an account and login
- As a user, I want to be able to create events
- As a user, I want to be able to view events
- As a user, I want to be able to comment on events
- As a user, I want to be able to view my friend's profiles and follow their events

## Wireframes
- https://drive.google.com/file/d/1OcqlRp9ZuqorejLYkWrDiWUDBr9T8PBc/view?usp=sharing
- https://drive.google.com/file/d/1x01S0gIviF_gRzCscjWKr7p3ZutfjsYW/view?usp=sharing

## Tech Stack
- React
- MongoDB
- Mongoose
- Express

## MVP
- Users will be able to:
    - [ ] Login/Signup ✅ 
    - [ ] Have a personalized profile page ✅
    - [ ] View a homepage that displays all events ✅
        - [ ] Comment on event posts ✅
    - [ ] Create events ✅
        - [ ] Give a title, description, and date of the event ✅


## Stretch Goals
- User will be able to:
    - [ ] Create playlists, and add them to a specific event
        - [ ] Search for songs
    - [ ] Other people can add to the event playlist
    - [ ] Search for friend's profiles and follow them
    - [ ] Follow events which will add it to my personal calendar
    - [ ] Invite specific people to your events
    - [ ] Add an image to their profile

## Routes
## Routes: Users
 Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| GET | `/search` | search for other users |
| GET | `/current` | get information for current user and jwt token |
| POST | `/register` | register users |
| POST | `/login` | log user in |

## Routes: Events
Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| GET | `/` | get events for home page |
| POST | `/` | post events to user page |
| POST | `/create` | Create event |
| PUT | `/:id` | Edit events |
| DELETE | `/:id` | Delete events |

## Routes: Comments
Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| POST | `/eventcomments` | get specific comments for specific events |
| POST | `/` | Create comment |
| PUT | `/:id` | Edit comment |
| DELETE | `/:id` | Delete events |

## Routes: tracks (Spotify API)
Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| POST | `/` | Search for music |
| GET | `/:id` | view tracks inside album |

## Known Bugs
- none at this time

## Roadblocks
- Difficulties referencing schemas properly.
- There were many updates to schemas throughout project that weren't anticipated.


