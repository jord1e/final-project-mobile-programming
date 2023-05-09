/**
 * @generated SignedSource<<cd3ab9f894c98236cabbc329a7bc7802>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyQuoteListsPage_myQuoteLists$data = {
  readonly id: string;
  readonly myQuoteLists: ReadonlyArray<{
    readonly id: string;
    readonly size: number;
    readonly " $fragmentSpreads": FragmentRefs<"QuoteListCard_quoteList">;
  }>;
  readonly " $fragmentType": "MyQuoteListsPage_myQuoteLists";
};
export type MyQuoteListsPage_myQuoteLists$key = {
  readonly " $data"?: MyQuoteListsPage_myQuoteLists$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyQuoteListsPage_myQuoteLists">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./MyQuoteListsFetchAgainQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "MyQuoteListsPage_myQuoteLists",
  "selections": [
    {
      "alias": "myQuoteLists",
      "args": null,
      "concreteType": "ShareableQuoteList",
      "kind": "LinkedField",
      "name": "quoteLists",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "size",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "QuoteListCard_quoteList"
        }
      ],
      "storageKey": null
    },
    (v0/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "4b17f147397ca0c1b1aff9288c7be25a";

export default node;
