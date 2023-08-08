import { gql } from "@apollo/client";

export const ADD_MEMBER_TO_EVENT = gql`
  mutation AddMemberToEvent(
    $eventId: ID!
    $memberId: ID!
    $memberName: String!
  ) {
    addMemberToEvent(
      id: $eventId
      memberId: $memberId
      memberName: $memberName
    ) {
      id
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($travelInput: TravelInput!) {
    addEvent(travelInput: $travelInput) {
      name
    }
  }
`;
export const TRAVEL_INPUT = gql`
  input TravelInput {
    name: String!
    pictures: [String!]!
    destination: DestinationInput!
    planing: [PlaningInput!]!
    spots: [String!]!
    maxMembers: Int!
    nonBookedSeats: Int!
    bookedmember: [String!]!
    description: String!
    price: String!
    startDate: String!
    endDate: String!
  }
`;

export const PLANING_INPUT = gql`
  input PlaningInput {
    time: String!
    description: String!
    picture: String!
  }
`;

export const DESTINATION_INPUT = gql`
  input DestinationInput {
    country: String!
    state: String
    city: String!
    district: String
  }
`;
