import { createClient } from "@sanity/client";

export const clientConfig = {
  projectId: "xvwfx739", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // from your sanity init
  apiVersion: "2025-03-09", // specify the API version
  useCdn: true,
};

const sanityClient = createClient(clientConfig);

export default sanityClient;