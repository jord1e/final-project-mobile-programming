/**
 * @generated SignedSource<<24940b650a750aa4be514669914e1efa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyQuoteListsFetchAgainQuery$variables = {
  id: string;
};
export type MyQuoteListsFetchAgainQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"MyQuoteListsPage_myQuoteLists">;
  } | null;
};
export type MyQuoteListsFetchAgainQuery = {
  response: MyQuoteListsFetchAgainQuery$data;
  variables: MyQuoteListsFetchAgainQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MyQuoteListsFetchAgainQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyQuoteListsPage_myQuoteLists"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MyQuoteListsFetchAgainQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
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
                  (v2/*: any*/),
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
                    "name": "createdAt",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "03e6e6da3a71c4b21af067a167cef31c",
    "id": null,
    "metadata": {},
    "name": "MyQuoteListsFetchAgainQuery",
    "operationKind": "query",
    "text": "query MyQuoteListsFetchAgainQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...MyQuoteListsPage_myQuoteLists\n    id\n  }\n}\n\nfragment MyQuoteListsPage_myQuoteLists on User {\n  myQuoteLists: quoteLists {\n    size\n    id\n    ...QuoteListCard_quoteList\n  }\n  id\n}\n\nfragment QuoteListCard_quoteList on ShareableQuoteList {\n  id\n  name\n  size\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "4b17f147397ca0c1b1aff9288c7be25a";

export default node;
