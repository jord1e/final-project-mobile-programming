/**
 * @generated SignedSource<<16acfbb2004d3a25e0bdee7a640bc662>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AddQuoteToListPage_quoteListDataQuery$variables = {
  quoteListId: string;
};
export type AddQuoteToListPage_quoteListDataQuery$data = {
  readonly currentQuoteList: {
    readonly id?: string;
    readonly name?: string;
  };
};
export type AddQuoteToListPage_quoteListDataQuery = {
  response: AddQuoteToListPage_quoteListDataQuery$data;
  variables: AddQuoteToListPage_quoteListDataQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "quoteListId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "quoteListId"
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
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddQuoteToListPage_quoteListDataQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": "currentQuoteList",
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
                (v3/*: any*/)
              ],
              "type": "ShareableQuoteList",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "currentQuoteList"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddQuoteToListPage_quoteListDataQuery",
    "selections": [
      {
        "alias": "currentQuoteList",
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
              (v3/*: any*/)
            ],
            "type": "ShareableQuoteList",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c1580a07b82a5ece3d1080a4028638c7",
    "id": null,
    "metadata": {},
    "name": "AddQuoteToListPage_quoteListDataQuery",
    "operationKind": "query",
    "text": "query AddQuoteToListPage_quoteListDataQuery(\n  $quoteListId: ID!\n) {\n  currentQuoteList: node(id: $quoteListId) {\n    __typename\n    ... on ShareableQuoteList {\n      id\n      name\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d2a623a710d15c4ab94089c98597296a";

export default node;
