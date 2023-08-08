import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  {
    getEvents {
      id
      name
      pictures
      destination {
        country
        state
        city
        district
      }
      planing {
        time
        description
        picture
      }
      spots
      maxMembers
      nonBookedSeats
      bookedmember {
        id
        userId
        userName
      }
      description
      price
      publishDate
      price
      endDate
      startDate
      bestDeals
    }
  }
`;
export const GET_EVENT = gql`
  query GetOneEvent($id: ID!) {
    getOneEvent(id: $id) {
      id
      name
      pictures
      destination {
        country
        state
        city
        district
      }
      planing {
        time
        description
        picture
      }
      spots
      maxMembers
      nonBookedSeats
      bookedmember {
        id
        userId
        userName
      }
      description
      price
      publishDate
      price
      endDate
      startDate
      bestDeals
    }
  }
`;
export const GET_EVENT_BY_BOOKING_ID = gql`
  query GetEventsByBookingId($id: ID!) {
    getEventsbyBookingUserId(id: $id) {
      id
      name
      pictures
      destination {
        country
        state
        city
        district
      }
      planing {
        time
        description
        picture
      }
      spots
      maxMembers
      nonBookedSeats
      bookedmember {
        id
        userId
        userName
      }
      description
      price
      publishDate
      price
      endDate
      startDate
      bestDeals
    }
  }
`;
