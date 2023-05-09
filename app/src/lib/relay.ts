import { FetchFunction, Network, RecordSource, Store } from "relay-runtime";
import { Environment } from "react-relay";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";

interface FetchConfiguration {
  apiToken?: string;
}

function fetchApi(
  endpoint: string,
  config?: FetchConfiguration
): FetchFunction {
  return async (request, variables) => {
    if (!endpoint) {
      throw new Error(`Invalid GraphQL endpoint: ${endpoint}`);
    }

    const { apiToken } = config ?? {};

    const bearerAuthorization = apiToken
      ? { Authorization: "Bearer " + apiToken }
      : undefined;

    const fetchParameters: RequestInit = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "cross-site",
        ...bearerAuthorization,
      },
      body: JSON.stringify({
        query: request.text,
        variables: variables,
      }),
    };

    try {
      const response = await fetch(endpoint, fetchParameters);
      return response.json();
    } catch (e) {
      console.error("Network error", e);
      // throw new Error(
      //   "You seem to be unauthenticated. Please try logging in again"
      // );
    }
  };
}

export function createNewRelayEnvironment(): Environment {
  return new RelayModernEnvironment({
    network: Network.create(fetchApi("http://172.27.160.1:8080/graphql")),
    store: new Store(new RecordSource({})),
  });
}
