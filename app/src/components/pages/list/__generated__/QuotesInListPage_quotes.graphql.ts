/**
 * @generated SignedSource<<b6225b7aaf3351d00bd1d0c1924119b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuotesInListPage_quotes$data = {
  readonly id: string;
  readonly name: string;
  readonly quotes: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"QuoteCard_quote">;
  }>;
  readonly size: number;
  readonly " $fragmentType": "QuotesInListPage_quotes";
};
export type QuotesInListPage_quotes$key = {
  readonly " $data"?: QuotesInListPage_quotes$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuotesInListPage_quotes">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./RefetchQuotesInListQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "QuotesInListPage_quotes",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "size",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Quote",
      "kind": "LinkedField",
      "name": "quotes",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "QuoteCard_quote"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ShareableQuoteList",
  "abstractKey": null
};

(node as any).hash = "e197d02b6985b84e6dc5e02092c30edf";

export default node;
