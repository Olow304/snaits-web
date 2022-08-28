import client from "@sanity/client";
// get project id from env variable
export default client({
    projectId: process.env.SANITY_PROJECT,
    dataset: "production",
    useCdn: true
});