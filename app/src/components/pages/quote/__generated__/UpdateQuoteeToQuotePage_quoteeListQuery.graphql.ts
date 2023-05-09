/**
 * @generated SignedSource<<497b3d3da8fc856af7dcb245c53693d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateQuoteeToQuotePage_quoteeListQuery$variables = {
  quoteId: string;
};
export type UpdateQuoteeToQuotePage_quoteeListQuery$data = {
  readonly currentQuote: {
    readonly id?: string;
    readonly quotees?: ReadonlyArray<{
      readonly id: string;
    }>;
  };
  readonly viewer: {
    readonly quotees: ReadonlyArray<{
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"QuoteeCard_data">;
    }>;
  };
};
export type UpdateQuoteeToQuotePage_quoteeListQuery = {
  response: UpdateQuoteeToQuotePage_quoteeListQuery$data;
  variables: UpdateQuoteeToQuotePage_quoteeListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "quoteId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "quoteId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Quotee",
  "kind": "LinkedField",
  "name": "quotees",
  "plural": true,
  "selections": [
    (v1/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateQuoteeToQuotePage_quoteeListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Quotee",
            "kind": "LinkedField",
            "name": "quotees",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "QuoteeCard_data"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "RequiredField",
        "field": {
          "alias": "currentQuote",
          "args": (v2/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                (v1/*: any*/),
                (v3/*: any*/)
              ],
              "type": "Quote",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "currentQuote"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateQuoteeToQuotePage_quoteeListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Quotee",
            "kind": "LinkedField",
            "name": "quotees",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "currentQuote",
        "args": (v2/*: any*/),
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
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/)
            ],
            "type": "Quote",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "34d65a5a248a20c9dc2e90904bfe4d2c",
    "id": null,
    "metadata": {},
    "name": "UpdateQuoteeToQuotePage_quoteeListQuery",
    "operationKind": "query",
    "text": "query UpdateQuoteeToQuotePage_quoteeListQuery(\n  $quoteId: ID!\n) {\n  viewer {\n    quotees {\n      id\n      ...QuoteeCard_data\n    }\n    id\n  }\n  currentQuote: node(id: $quoteId) {\n    __typename\n    ... on Quote {\n      id\n      quotees {\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment QuoteeCard_data on Quotee {\n  id\n  name\n}\n"
  }
};
})();

(node as any).hash = "8a1e0604c28f5225a5b1c9e6021ba471";

export default node;
