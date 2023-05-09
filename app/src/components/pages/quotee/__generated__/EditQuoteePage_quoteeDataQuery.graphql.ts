/**
 * @generated SignedSource<<03123d4475800bf8d0976019d463a05c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EditQuoteePage_quoteeDataQuery$variables = {
  quoteeId: string;
};
export type EditQuoteePage_quoteeDataQuery$data = {
  readonly currentQuotee: {
    readonly id?: string;
    readonly name?: string;
  };
};
export type EditQuoteePage_quoteeDataQuery = {
  response: EditQuoteePage_quoteeDataQuery$data;
  variables: EditQuoteePage_quoteeDataQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "quoteeId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "quoteeId"
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
    "name": "EditQuoteePage_quoteeDataQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": "currentQuotee",
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
              "type": "Quotee",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "currentQuotee"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditQuoteePage_quoteeDataQuery",
    "selections": [
      {
        "alias": "currentQuotee",
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
            "type": "Quotee",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "009efdd62b3523e1832490546886324a",
    "id": null,
    "metadata": {},
    "name": "EditQuoteePage_quoteeDataQuery",
    "operationKind": "query",
    "text": "query EditQuoteePage_quoteeDataQuery(\n  $quoteeId: ID!\n) {\n  currentQuotee: node(id: $quoteeId) {\n    __typename\n    ... on Quotee {\n      id\n      name\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e01f12571ca5650c3a2e69a7693211c1";

export default node;
