# T-Info

A personal project to create a clan management tool for Travian, a web-based strategy game

## Tech

  Google cloud platform, Typescript, GraphQL, React

## User Flows
  
MVP
  1. User can upload intel on player's troops report
  2. User can search intel by player

## Design

  The MVP will contains FE, WebAPI, Database and Identity
  
### FE
  Frontend uses reactjs + material ui + Apollo Client + Typescript

### WebAPI
  We will be using Google's Cloud function + Apollo Server to serve the frontend (written in nodejs)
  
### Database
  We will be using Realtime Database from Firebase

### Identity
  We will utilize google identity platform for handling user sign in / sign up 

### CI/CD
  We will be using google cloud servies's solution for deployment the resource configuration + the application itself
  
## Implementation Plans

The development plan is the following order
  1. FE boostrap
  2. BE boostrap
  3. Add 1 e2e workflow with identity
  4. Add Cloud deployment manager templates
  5. Create pipeline to deploy templates
  6. Update pipeline to deploy the full stack
  7. Add the remaining e2e flow
