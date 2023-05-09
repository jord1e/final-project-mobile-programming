/**
 * @generated SignedSource<<106c2a18e6cd2290a58cd2c7f2d94ed3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuotesInListPage_data$data = {
  readonly id: string;
  readonly name: string;
  readonly size: number;
  readonly " $fragmentSpreads": FragmentRefs<"QuoteCardList_quotes" | "QuoteListCard_quoteList">;
  readonly " $fragmentType": "QuotesInListPage_data";
};
export type QuotesInListPage_data$key = {
  readonly " $data"?: QuotesInListPage_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuotesInListPage_data">;
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
  "name": "QuotesInListPage_data",
  "selections": [
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "QuoteListCard_quoteList"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "QuoteCardList_quotes"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "ShareableQuoteList",
  "abstractKey": null
};

(node as any).hash = "53251c6b7fb9dbb720cd8724efa1a0ee";

export default node;
