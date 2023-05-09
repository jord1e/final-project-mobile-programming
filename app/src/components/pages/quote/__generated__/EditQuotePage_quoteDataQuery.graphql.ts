/**
 * @generated SignedSource<<95d36b6db47f5cb00fec21054e6cb2c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EditQuotePage_quoteDataQuery$variables = {
  quoteId: string;
};
export type EditQuotePage_quoteDataQuery$data = {
  readonly currentQuote: {
    readonly createdAt?: any;
    readonly id?: string;
    readonly locationText?: string | null;
    readonly quoteContext?: string | null;
    readonly quoteDate?: any;
    readonly quoteText?: string;
  };
};
export type EditQuotePage_quoteDataQuery = {
  response: EditQuotePage_quoteDataQuery$data;
  variables: EditQuotePage_quoteDataQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "quoteId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "quoteId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locationText",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quoteDate",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quoteText",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quoteContext",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditQuotePage_quoteDataQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": "currentQuote",
          "args": (v1/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                (v2/*: any*/),
                (v3/*: any*/),
                (v4/*: any*/),
                (v5/*: any*/),
                (v6/*: any*/),
                (v7/*: any*/)
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
    "name": "EditQuotePage_quoteDataQuery",
    "selections": [
      {
        "alias": "currentQuote",
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
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
    "cacheID": "b418c39e53085b80b98eadc5be91ddfc",
    "id": null,
    "metadata": {},
    "name": "EditQuotePage_quoteDataQuery",
    "operationKind": "query",
    "text": "query EditQuotePage_quoteDataQuery(\n  $quoteId: ID!\n) {\n  currentQuote: node(id: $quoteId) {\n    __typename\n    ... on Quote {\n      id\n      locationText\n      quoteDate\n      quoteText\n      quoteContext\n      createdAt\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "ff6aebcadd100429f49f75cd64dcb63d";

export default node;
