# The POC for E-jam

This project is the POC for e-jam

## Requirement

- Set up MongoDB in the cloud
- Create model Deployment with Mongoose:
    1. url: string with URL
    2. templateName: string with the template name
    3. version: string with the semantic version
    4. deployedAt: the date when it was added
- Create NodeJS API (get deployments, add deployment, delete deployment)
- Use the following templates data: npoint.io/docs/8f7cf8628b367ffd50a2
- Pull deployments and render them on the list. Each one should have a delete
a button that removes it from the list and from the DB.
- Render a form before the list. The user should be able to select a template, its
version, and add any URL. After submitting the form, the new deployment should
be added to dB and to the list.
- Deploy your code to any platform so that it's ready to see it live. Also, provide a
link to the GitHub repo.


## Setup locally

**FOR BACKEND**

- Clone the repository.
- Ask for .env file
- Run:

```
cd backend
npm install
npm start
```
