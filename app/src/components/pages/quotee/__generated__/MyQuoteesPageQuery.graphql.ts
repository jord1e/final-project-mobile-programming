/**
 * @generated SignedSource<<dff030b64c2d248ec32a970ccf6a26ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyQuoteesPageQuery$variables = {};
export type MyQuoteesPageQuery$data = {
  readonly viewer: {
    readonly myQuotees: ReadonlyArray<{
      readonly __typename: "Quotee";
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"QuoteeCardList_quotees">;
  };
};
export type MyQuoteesPageQuery = {
  response: MyQuoteesPageQuery$data;
  variables: MyQuoteesPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyQuoteesPageQuery",
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
            "alias": "myQuotees",
            "args": null,
            "concreteType": "Quotee",
            "kind": "LinkedField",
            "name": "quotees",
            "plural": true,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "QuoteeCardList_quotees"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyQuoteesPageQuery",
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
            "alias": "myQuotees",
            "args": null,
            "concreteType": "Quotee",
            "kind": "LinkedField",
            "name": "quotees",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          },
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
      }
    ]
  },
  "params": {
    "cacheID": "700aee60da344c0c641c6eeaf152b1b9",
    "id": null,
    "metadata": {},
    "name": "MyQuoteesPageQuery",
    "operationKind": "query",
    "text": "query MyQuoteesPageQuery {\n  viewer {\n    myQuotees: quotees {\n      __typename\n      id\n    }\n    ...QuoteeCardList_quotees\n    id\n  }\n}\n\nfragment QuoteeCardList_quotees on User {\n  quotees {\n    id\n    ...QuoteeCard_data\n  }\n}\n\nfragment QuoteeCard_data on Quotee {\n  id\n  name\n}\n"
  }
};
})();

(node as any).hash = "08b41476f1a9f0bc8f78af157a82513f";

export default node;
